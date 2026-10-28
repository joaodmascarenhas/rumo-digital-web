# Site corporativo — preparação Cloudflare Pages

Estado em 28/10/2026: proposta para revisão; site e DNS continuam na Vercel.

## Configuração do projeto de teste

- Repositório: joaodmascarenhas/rumo-digital-web; ramo main após revisão e integração.
- Nome sugerido: rumo-digital-web; confirmar disponibilidade. React (Vite), npm run build, dist, raiz vazia, NODE_VERSION=24.
- Desativar builds de previews de outros ramos. Não colocar a chave de email em variáveis VITE_* ou no frontend.
- Configurar RESEND_API_KEY como segredo do runtime Pages Functions. A chave atual da Vercel não foi lida; o operador copia uma chave autorizada diretamente do Resend para o Cloudflare. Se não for recuperável, criar uma nova exige decisão própria.
- CONTACT_FROM_EMAIL e CONTACT_TO_EMAIL são opcionais. Mantêm-se os mesmos valores por defeito do código atual: Rumo Digital <onboarding@resend.dev> e geral@rumodigital.pt. Só usar um remetente do domínio próprio depois de confirmar a verificação no Resend.
- functions/api/contact.js serve POST /api/contact no Pages; api/contact.js continua a servir a Vercel durante o recuo. Alterações futuras ao contrato do formulário devem manter as duas implementações coerentes enquanto coexistirem.
- O frontend continua a usar /api/contact na mesma origem. A chave só é usada no servidor. Nenhuma dependência nova.
- public/_headers preserva o HSTS estático da Vercel; a função envia os seus próprios cabeçalhos, pois _headers não se aplica a Pages Functions.

## Validação antes do corte

- node --test tests/contact-pages.test.mjs: recusas, sucesso, valores por defeito e personalizados, erros do Resend e de ligação; chamadas ao serviço simuladas, sem email real.
- npm run lint e npm run build. Conferir dist/_headers.
- Na publicação temporária: verificar commit, versão Node, função criada, imagens, menus, formulário e receção de um email de teste autorizado em geral@. O build Vite por si só não valida o runtime Pages Functions.
- O formulário conserva as limitações existentes de proteção contra abuso; esta adaptação não acrescenta CAPTCHA ou limitação de pedidos. Vigiar quotas, não ativar plano pago sem decisão.

## Domínios e recuo

- www.rumodigital.pt pode usar CNAME externo na Amen depois de associado ao Pages e testado.
- Observado em 28/10: www CNAME a56ef7fd5c9f4fad.vercel-dns-017.com, TTL 900; raiz rumodigital.pt A 216.198.79.1, TTL 900. Confirmar novamente no corte.
- https://rumodigital.pt/ devolveu 307 para https://www.rumodigital.pt/ servido pela Vercel.
- A raiz não se liga diretamente ao Pages mantendo DNS externos: a documentação Pages exige zona Cloudflare e nameservers para apex. Não alterar NS, não criar CNAME na raiz com os registos M365.
- Antes de retirar a Vercel, verificar se a Amen oferece neste contrato redirecionamento HTTPS da raiz para www com certificado válido e preservação de caminhos/parâmetros. A documentação geral de redirecionamento não prova disponibilidade, HTTPS nem custo neste contrato.
- Se não houver essa opção, apresentar alternativas ao João; não deixar a raiz avariada nem mudar NS implicitamente. A migração completa do site não fica concluída só por mudar www.
- Guardar os registos antigos, conservar ambos os domínios e o deploy Vercel na janela de recuo acordada. Não alterar MX, SPF, DKIM, DMARC ou autodiscover.
- Depois do corte, repetir formulário, links e HTTPS em www e raiz; atualizar este registo com provas e remover Vercel apenas por decisão explícita.

Fontes: código main e deploy Vercel e30e9987f7bcd4dfde26d87bc60b57be741164e9; consultas HTTPS/DNS em 28/10/2026; https://developers.cloudflare.com/pages/functions/routing/ ; https://developers.cloudflare.com/pages/configuration/custom-domains/ ; https://developers.cloudflare.com/pages/configuration/headers/ .
