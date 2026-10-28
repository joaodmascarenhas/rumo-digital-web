// Cloudflare Pages: POST /api/contact. O segredo vem do ambiente do servidor.
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(body, status, extraHeaders = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "Strict-Transport-Security": "max-age=63072000",
      "X-Content-Type-Options": "nosniff",
      ...extraHeaders,
    },
  });
}

export async function onRequest({ request, env }) {
  if (request.method !== "POST") {
    return json({ error: "Método não permitido." }, 405, { Allow: "POST" });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Pedido inválido." }, 400);
  }

  const { nome, email, mensagem } = body ?? {};
  if (![nome, email, mensagem].every(value => typeof value === "string" && value.trim())) {
    return json({ error: "Preencha todos os campos." }, 400);
  }
  if (!EMAIL_REGEX.test(email)) {
    return json({ error: "Email inválido." }, 400);
  }
  if (!env.RESEND_API_KEY) {
    return json({ error: "Erro de configuração do servidor. Tente novamente mais tarde." }, 500);
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: env.CONTACT_FROM_EMAIL || "Rumo Digital <onboarding@resend.dev>",
        to: env.CONTACT_TO_EMAIL || "geral@rumodigital.pt",
        reply_to: email,
        subject: `Novo contacto do site — ${nome}`,
        text: `Nome: ${nome}\nEmail: ${email}\n\nMensagem:\n${mensagem}`,
      }),
    });
    if (!response.ok) {
      return json({ error: "Não foi possível enviar a mensagem. Tente novamente mais tarde." }, 502);
    }
    return json({ ok: true }, 200);
  } catch {
    return json({ error: "Erro inesperado. Tente novamente mais tarde." }, 500);
  }
}
