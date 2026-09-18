// Função serverless da Vercel (não faz parte do build do Vite).
// Recebe o POST do formulário de contacto e envia o email via Resend.
// Não guarda dados em lado nenhum — só reencaminha para o email da Rumo Digital.

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Método não permitido." });
  }

  const { nome, email, mensagem } = req.body ?? {};

  if (!nome || !email || !mensagem) {
    return res.status(400).json({ error: "Preencha todos os campos." });
  }

  if (!EMAIL_REGEX.test(email)) {
    return res.status(400).json({ error: "Email inválido." });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY não está configurada.");
    return res
      .status(500)
      .json({ error: "Erro de configuração do servidor. Tente novamente mais tarde." });
  }

  try {
    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Enquanto o domínio rumodigital.pt não estiver verificado no Resend,
        // o envio só funciona a partir de onboarding@resend.dev.
        // Depois de verificares o domínio, muda para algo como
        // "Rumo Digital <geral@rumodigital.pt>" via variável de ambiente CONTACT_FROM_EMAIL.
        from: process.env.CONTACT_FROM_EMAIL || "Rumo Digital <onboarding@resend.dev>",
        to: process.env.CONTACT_TO_EMAIL || "geral@rumodigital.pt",
        reply_to: email,
        subject: `Novo contacto do site — ${nome}`,
        text: `Nome: ${nome}\nEmail: ${email}\n\nMensagem:\n${mensagem}`,
      }),
    });

    if (!resendRes.ok) {
      const errBody = await resendRes.text();
      console.error("Erro do Resend:", errBody);
      return res
        .status(502)
        .json({ error: "Não foi possível enviar a mensagem. Tente novamente mais tarde." });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Erro no formulário de contacto:", err);
    return res
      .status(500)
      .json({ error: "Erro inesperado. Tente novamente mais tarde." });
  }
}
