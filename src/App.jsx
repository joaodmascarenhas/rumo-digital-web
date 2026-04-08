import logoFull from "./assets/rumo_digital_transparent_real.png";
import logoIcon from "./assets/logo-icon.png";
import { useForm, ValidationError } from "@formspree/react";

export default function App() {
  const [state, handleSubmit] = useForm("mvzvvzaa");

  const services = [
    {
      title: "Organização de Processos",
      text: "Estruturamos processos operacionais para reduzir desorganização, evitar erros e tornar o trabalho mais claro, consistente e controlável.",
    },
    {
      title: "Melhoria Operacional",
      text: "Identificamos falhas, bloqueios e ineficiências no dia a dia, propondo melhorias concretas ajustadas ao contexto do negócio.",
    },
    {
      title: "Gestão de Tarefas e Registos",
      text: "Criamos formas práticas de acompanhar tarefas, pedidos, ações e informação importante, com maior visibilidade e controlo.",
    },
    {
      title: "Estruturação de Informação",
      text: "Ajudamos a organizar informação dispersa e a definir uma base de trabalho mais clara, acessível e fácil de manter.",
    },
    {
      title: "Criação de Websites",
      text: "Desenvolvemos websites práticos e profissionais, ajustados à realidade do negócio e fáceis de gerir.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Diagnóstico",
      text: "Analisamos o funcionamento atual do negócio e identificamos dificuldades operacionais, falhas de organização e pontos de melhoria.",
    },
    {
      number: "02",
      title: "Estruturação",
      text: "Definimos uma abordagem direta, prática e ajustada à dimensão, aos objetivos e à situação específica do cliente.",
    },
    {
      number: "03",
      title: "Implementação",
      text: "Aplicamos melhorias de forma clara e progressiva, sem criar complexidade desnecessária no funcionamento.",
    },
    {
      number: "04",
      title: "Acompanhamento",
      text: "Avaliamos o resultado das alterações e ajustamos o necessário para garantir utilidade real no dia a dia.",
    },
  ];

  const faqs = [
    {
      question: "O meu negócio é pequeno. Isto faz sentido para mim?",
      answer:
        "Faz. Na maioria dos casos, são precisamente os negócios mais pequenos que mais beneficiam de uma melhor organização. Pequenas melhorias no dia a dia podem ajudar a poupar tempo e tornar o negócio mais organizado e fácil de gerir.",
    },
    {
      question: "Já trabalho assim há anos. Vale a pena mudar?",
      answer:
        "Se o negócio está a funcionar bem, não há necessidade de mudar. Mas quando começam a surgir dificuldades no dia a dia, perda de tempo ou falta de organização, é sinal de que existe espaço para melhorar.",
    },
    {
      question: "Não percebo nada de tecnologia.",
      answer:
        "Não precisa de perceber de tecnologia. O objetivo é simplificar o dia a dia, não complicar. Tudo é pensado para ser simples e fácil de usar.",
    },
    {
      question: "Isto vai obrigar-me a mudar tudo?",
      answer:
        "Não. As melhorias são feitas de forma gradual e ajustadas ao que já existe. O objetivo é melhorar o que faz sentido, sem criar complicações no dia a dia.",
    },
    {
      question: "Quanto é que isto custa?",
      answer:
        "Depende do que for necessário melhorar. A primeira conversa serve para perceber o negócio e ver o que faz sentido, de forma simples e ajustada a cada caso.",
    },
    {
      question: "Tenho ouvido falar de inteligência artificial. Isto é para mim?",
      answer:
        "Sim, mas provavelmente não da forma como imagina. Não precisa de contratar programadores nem fazer grandes investimentos. Existem ferramentas acessíveis e económicas que já usam IA e que podem ajudar em tarefas do dia a dia - prever vendas, organizar stocks, gerir agendamentos ou responder a clientes de forma automática. O objetivo é aproveitar o que já existe, de forma prática e sem complicar.",
    },
    {
      question: "A minha concorrência já usa tecnologia. Estou a ficar para trás?",
      answer:
        "Não necessariamente. O importante não é usar tecnologia por usar, mas sim resolver os problemas certos. Se o seu negócio funciona bem como está, não precisa de mudar. Mas se sente desorganização, perda de tempo ou dificuldade em acompanhar a procura, então pode haver soluções simples que ajudem. O foco deve estar sempre em melhorar o que faz sentido, não em complicar o que já funciona.",
    },
    {
      question: "Vejo grandes empresas a usar sistemas complicados. Preciso disso?",
      answer:
        "Não. As grandes empresas têm equipas técnicas e orçamentos que permitem usar sistemas complexos. Para negócios mais pequenos, o que funciona são soluções diretas, práticas e fáceis de gerir no dia a dia - sem precisar de formação avançada ou apoio técnico permanente.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <img
              src={logoIcon}
              alt="Rumo Digital"
              className="h-10 w-10 object-contain"
            />
            <div>
              <p className="text-sm font-semibold tracking-wide text-white">
                Rumo Digital
              </p>
              <p className="text-xs text-slate-400">
                Organização e melhoria operacional
              </p>
            </div>
          </div>

          <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
            <a href="#inicio" className="transition hover:text-white">
              Início
            </a>
            <a href="#servicos" className="transition hover:text-white">
              Serviços
            </a>
            <a href="#como-trabalhamos" className="transition hover:text-white">
              Como Trabalhamos
            </a>
            <a href="#sobre-nos" className="transition hover:text-white">
              Sobre nós
            </a>
            <a href="#perguntas-frequentes" className="transition hover:text-white">
              Perguntas Frequentes
            </a>
            <a href="#contactos" className="transition hover:text-white">
              Contactos
            </a>
          </nav>
        </div>
      </header>

      <section id="inicio" className="scroll-mt-24 bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200">
              Organização e melhoria operacional
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Melhor organização no dia a dia.
              <br />
              Mais controlo no seu negócio.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Ajudamos pequenas empresas a organizar processos, estruturar o
              trabalho e melhorar a operação do dia a dia, de forma prática e
              ajustada à sua realidade.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contactos"
                className="rounded-2xl bg-orange-500 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:scale-[1.01]"
              >
                Fale connosco
              </a>

              <a
                href="#servicos"
                className="rounded-2xl border border-white/20 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/5"
              >
                Ver serviços
              </a>
            </div>
          </div>

          <div className="flex items-start justify-center -mt-10">
            <div className="w-full max-w-2xl">
              <img
                src={logoFull}
                alt="Rumo Digital"
                className="mt-2 mb-0 w-full object-contain"
              />

              <div className="grid w-full gap-3 rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-xl backdrop-blur">
                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                  <p className="text-sm text-slate-400">Foco</p>
                  <p className="mt-2 text-xl font-semibold">
                    Organização e melhoria operacional
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                    <p className="text-sm text-slate-400">Abordagem</p>
                    <p className="mt-2 font-medium">
                      Prática, direta e sustentável
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                    <p className="text-sm text-slate-400">Objetivo</p>
                    <p className="mt-2 font-medium">
                      Mais controlo e menos desorganização
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="servicos"
        className="scroll-mt-24 mx-auto max-w-7xl px-6 py-20 lg:px-8"
      >
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Serviços
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            O que fazemos
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Apoiamos pequenos negócios com soluções úteis para melhorar processos
            e tornar a operação do dia a dia mais eficiente.
            <br />
            Criamos uma base de trabalho mais clara, mais eficiente e com maior
            controlo no dia a dia.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[2rem] border border-slate-200 bg-slate-100 p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-xl font-bold text-orange-500">
                {service.title}
              </h3>
              <p className="mt-4 leading-7 text-slate-600">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="como-trabalhamos" className="scroll-mt-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Método
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Como trabalhamos
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Trabalhamos de forma estruturada, direta e adaptada às necessidades
              do cliente, sem complicar o que deve ser claro.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200"
              >
                <p className="text-sm font-semibold text-orange-500">
                  {step.number}
                </p>
                <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="sobre-nos"
        className="scroll-mt-24 mx-auto max-w-7xl px-6 py-20 lg:px-8"
      >
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Sobre nós
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Sobre a Rumo Digital
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
              <p>
                A Rumo Digital nasceu com um objetivo claro: ajudar pequenas e médias
                empresas a trabalhar com mais organização, mais controlo e maior
                clareza no dia a dia.
              </p>
              <p>
                Num contexto em que muitos negócios continuam dependentes de
                processos pouco definidos, informação dispersa e rotinas
                difíceis de acompanhar, o nosso foco está em estruturar,
                simplificar e melhorar o que realmente impacta o funcionamento do negócio.
              </p>
              <p>
                Acreditamos numa abordagem prática, à medida de cada cliente e
                sem complexidade desnecessária, sempre orientada para utilidade
                real e melhoria sustentada.
              </p>
              <p className="font-semibold text-slate-900">
                Não complicamos. Organizamos.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-xl">
            <h3 className="text-2xl font-semibold">Valores da marca</h3>
            <div className="mt-6 space-y-4 text-slate-300">
              <p>
                <span className="font-semibold text-white">Simplicidade:</span>{" "}
                evitar soluções pesadas, excessivas ou difíceis de aplicar.
              </p>
              <p>
                <span className="font-semibold text-white">Clareza:</span>{" "}
                tornar a operação do dia a dia mais compreensível, organizada e controlável.
              </p>
              <p>
                <span className="font-semibold text-white">
                  Utilidade real:
                </span>{" "}
                melhorar o que tem impacto prático no funcionamento do negócio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="perguntas-frequentes" className="scroll-mt-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Perguntas frequentes
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Será que isto faz sentido para o meu negócio?
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-slate-900 marker:hidden">
                  <span>“{faq.question}”</span>
                  <span className="text-2xl font-light text-orange-500 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contactos" className="scroll-mt-24 bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Contactos
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Contacte-nos
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Se pretende melhorar a organização e o funcionamento do seu
              negócio, fale connosco.
              <br />
              <br />
              Se sente que o seu negócio podia funcionar melhor, vale a pena
              conversarmos.
              <br />
              <br />
              Uma primeira conversa permite perceber o seu contexto e identificar
              onde existe margem real de melhoria.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-400">Telefone / WhatsApp</p>
                <a
                  href="https://wa.me/351917625892"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 flex items-center gap-3 text-lg font-medium text-white transition hover:text-orange-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#25D366"
                    className="h-5 w-5"
                  >
                    <path d="M12 2a10 10 0 00-8.94 14.47L2 22l5.73-1.06A10 10 0 1012 2zm5.06 13.72c-.21.59-1.23 1.12-1.69 1.19-.44.07-.99.1-1.6-.1-.37-.12-.85-.28-1.46-.55-2.57-1.11-4.25-3.83-4.38-4.01-.13-.18-1.04-1.38-1.04-2.63 0-1.25.65-1.86.88-2.12.23-.26.5-.33.67-.33h.48c.15 0 .35-.06.55.42.21.5.72 1.74.78 1.87.06.13.1.28.02.46-.08.18-.12.29-.23.45-.11.16-.23.36-.33.48-.11.12-.23.25-.1.49.13.25.59.97 1.26 1.57.86.77 1.58 1.01 1.83 1.13.25.12.39.1.54-.06.15-.16.65-.76.83-1.02.18-.26.36-.21.61-.13.25.08 1.6.75 1.88.88.28.13.46.2.53.31.07.11.07.64-.14 1.23z" />
                  </svg>
                  917 625 892
                </a>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-400">Email</p>
                <a
                  href="mailto:geral@rumodigital.pt"
                  className="mt-2 flex items-center gap-3 text-lg font-medium text-white transition hover:text-orange-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M2.25 4.5h19.5A1.5 1.5 0 0123.25 6v12a1.5 1.5 0 01-1.5 1.5H2.25A1.5 1.5 0 01.75 18V6a1.5 1.5 0 011.5-1.5zm0 1.5v.638l9.75 5.85 9.75-5.85V6H2.25zm19.5 3.112l-7.66 4.596a1.5 1.5 0 01-1.58 0L2.25 9.112V18h19.5V9.112z" />
                  </svg>
                  geral@rumodigital.pt
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
            {state.succeeded ? (
              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-6 text-emerald-200">
                Mensagem enviada com sucesso.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="nome"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Nome
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none placeholder:text-slate-500"
                    placeholder="O seu nome"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none placeholder:text-slate-500"
                    placeholder="nome@empresa.pt"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="mt-2 text-sm text-red-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="mensagem"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={5}
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none placeholder:text-slate-500"
                    placeholder="Explique brevemente o que pretende melhorar"
                  />
                  <ValidationError
                    prefix="Mensagem"
                    field="mensagem"
                    errors={state.errors}
                    className="mt-2 text-sm text-red-300"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full rounded-2xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {state.submitting ? "A enviar..." : "Enviar"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Rumo Digital. Todos os direitos reservados.</p>
          <p>Organização e melhoria operacional.</p>
        </div>
      </footer>
    </div>
  );
}