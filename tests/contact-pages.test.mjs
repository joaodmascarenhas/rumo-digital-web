import test from 'node:test';
import assert from 'node:assert/strict';
import { onRequest } from '../functions/api/contact.js';

const payload = { nome: 'Teste local', email: 'teste@example.com', mensagem: 'Mensagem simulada' };
const env = { RESEND_API_KEY: 'chave-ficticia-local' };
function request(body = payload, method = 'POST') {
  return new Request('https://site.example/api/contact', {
    method,
    ...(method === 'POST' ? { body: typeof body === 'string' ? body : JSON.stringify(body) } : {}),
  });
}

test('recusas não contactam o serviço de email', async t => {
  t.mock.method(console, 'error', () => {});
  t.mock.method(globalThis, 'fetch', () => { throw new Error('Rede proibida neste teste'); });
  const cases = [
    [request(undefined, 'GET'), env, 405],
    [request('{'), env, 400],
    [request(null), env, 400],
    [request({ ...payload, nome: '' }), env, 400],
    [request({ ...payload, mensagem: '  ' }), env, 400],
    [request({ ...payload, email: {} }), env, 400],
    [request({ ...payload, email: 'invalido' }), env, 400],
    [request(), {}, 500],
  ];
  for (const [req, settings, status] of cases) {
    const result = await onRequest({ request: req, env: settings });
    assert.equal(result.status, status);
    if (status === 405) assert.equal(result.headers.get('Allow'), 'POST');
    assert.ok((await result.json()).error);
  }
  assert.equal(globalThis.fetch.mock.callCount(), 0);
});

test('envia o conteúdo certo, respeita remetente/destinatário e não devolve o segredo', async t => {
  const mocked = t.mock.method(globalThis, 'fetch', async (url, options) => {
    assert.equal(url, 'https://api.resend.com/emails');
    assert.equal(options.method, 'POST');
    assert.equal(options.headers.Authorization, `Bearer ${env.RESEND_API_KEY}`);
    const data = JSON.parse(options.body);
    assert.equal(data.from, 'Rumo <no-reply@example.com>');
    assert.equal(data.to, 'destino@example.com');
    assert.equal(data.reply_to, payload.email);
    assert.equal(data.subject, `Novo contacto do site — ${payload.nome}`);
    assert.equal(data.text, `Nome: ${payload.nome}\nEmail: ${payload.email}\n\nMensagem:\n${payload.mensagem}`);
    return new Response('{}', { status: 200 });
  });
  const response = await onRequest({ request: request(), env: {
    ...env, CONTACT_FROM_EMAIL: 'Rumo <no-reply@example.com>', CONTACT_TO_EMAIL: 'destino@example.com',
  } });
  assert.equal(response.status, 200);
  assert.equal(response.headers.get('Strict-Transport-Security'), 'max-age=63072000');
  assert.equal(response.headers.get('Cache-Control'), 'no-store');
  assert.deepEqual(await response.json(), { ok: true });
  assert.equal(mocked.mock.callCount(), 1);
});

test('mantém os valores por defeito usados na Vercel', async t => {
  t.mock.method(globalThis, 'fetch', async (_url, options) => {
    const data = JSON.parse(options.body);
    assert.equal(data.from, 'Rumo Digital <onboarding@resend.dev>');
    assert.equal(data.to, 'geral@rumodigital.pt');
    return new Response('{}');
  });
  assert.equal((await onRequest({ request: request(), env })).status, 200);
});

test('recusa do Resend não produz sucesso nem expõe a resposta interna', async t => {
  const errors = t.mock.method(console, 'error', () => {});
  t.mock.method(globalThis, 'fetch', async () => new Response('detalhe-interno-secreto', { status: 403 }));
  const response = await onRequest({ request: request(), env });
  assert.equal(response.status, 502);
  const body = await response.text();
  assert.ok(!body.includes('detalhe-interno-secreto'));
  assert.ok(!body.includes(env.RESEND_API_KEY));
  assert.deepEqual(errors.mock.calls[0].arguments, ['contact: falha do Resend', { status: 403 }]);
  const log = JSON.stringify(errors.mock.calls.map(call => call.arguments));
  for (const sensitive of [env.RESEND_API_KEY, payload.email, payload.mensagem, 'detalhe-interno-secreto']) {
    assert.ok(!log.includes(sensitive));
  }
});

test('falha de ligação não produz sucesso', async t => {
  const errors = t.mock.method(console, 'error', () => {});
  t.mock.method(globalThis, 'fetch', async () => { throw new Error('falha simulada'); });
  const response = await onRequest({ request: request(), env });
  assert.equal(response.status, 500);
  assert.ok((await response.json()).error);
  assert.deepEqual(errors.mock.calls[0].arguments, ['contact: falha de ligação ao Resend']);
});
