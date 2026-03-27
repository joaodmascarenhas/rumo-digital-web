import { useForm, ValidationError } from "@formspree/react";

export default function App() {
  const [state, handleSubmit] = useForm("mykbzwow");

  const services = [
    {
      title: "Organização de Processos",
      text: "Estruturamos processos operacionais para reduzir confusão, evitar erros e tornar o trabalho mais claro e consistente.",
    },
    {
      title: "Transformação Digital Prática",
      text: "Aplicamos soluções simples para melhorar o funcionamento do negócio no dia a dia.",
    },
    {
      title: "Otimização de Ferramentas e Fluxos",
      text: "Melhoramos a forma como as equipas utilizam ferramentas e informação.",
    },
    {
      title: "Melhoria Operacional",
      text: "Identificamos oportunidades para tornar a operação mais eficiente e sustentável.",
    },
    {
      title: "Criação de Websites",
      text: "Desenvolvemos websites simples, rápidos e profissionais, ajustados à realidade do negócio e fáceis de manter.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Diagnóstico",
      text: "Analisamos o contexto atual e identificamos bloqueios, ineficiências e falhas de organização.",
    },
    {
      number: "02",
      title: "Estruturação",
      text: "Definimos uma abordagem simples, prática e ajustada à realidade do negócio.",
    },
    {
      number: "03",
      title: "Implementação",
      text: "Aplicamos melhorias de forma gradual, sem complicar a operação.",
    },
    {
      number: "04",
      title: "Evolução",
      text: "Acompanhamos os resultados e ajustamos o que for necessário para garantir valor real.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-lg font-semibold text-white">
              R
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide text-slate-900">Rumo Digital</p>
              <p className="text-xs text-slate-500">Consultoria prática e operacional</p>
            </div>
          </div>

          <nav className="hidden gap-8 text-sm text-slate-600 md:flex">
            <a href="#inicio" className="transition hover:text-slate-900">
              Início
            </a>
            <a href="#servicos" className="transition hover:text-slate-900">
              Serviços
            </a>
            <a href="#como-trabalhamos" className="transition hover:text-slate-900">
              Como Trabalhamos
            </a>
            <a href="#sobre" className="transition hover:text-slate-900">
              Sobre
            </a>
            <a href="#contacto" className="transition hover:text-slate-900">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      <section id="inicio" className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200">
              Clareza, estrutura e melhoria operacional
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Simplificamos operações. Tornamos o trabalho mais claro e eficiente.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Ajudamos a organizar, clarificar e melhorar o funcionamento do dia a dia — sem
              complicações técnicas.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contacto"
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

          <div className="flex items-center justify-center">
            <div className="grid w-full max-w-xl gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <p className="text-sm text-slate-400">Foco</p>
                <p className="mt-2 text-xl font-semibold">Organização e melhoria operacional</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                  <p className="text-sm text-slate-400">Abordagem</p>
                  <p className="mt-2 font-medium">Simples, prática e sustentável</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                  <p className="text-sm text-slate-400">Objetivo</p>
                  <p className="mt-2 font-medium">Mais clareza e menos fricção</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Serviços
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            O que fazemos
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Intervenções simples, orientadas à realidade do negócio e focadas em melhorar a
            operação.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[2rem] border border-slate-200 bg-slate-100 p-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-orange-500">{service.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="como-trabalhamos" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Método
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Como trabalhamos
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200"
              >
                <p className="text-sm font-semibold text-orange-500">{step.number}</p>
                <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Sobre
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Sobre a Rumo Digital
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
              <p>
                A Rumo Digital nasce com um objetivo simples: ajudar negócios a funcionar melhor,
                com mais organização, clareza e eficiência.
              </p>
              <p>
                Num contexto em que muitas empresas acumulam ferramentas, tarefas manuais e
                processos pouco claros, o nosso foco está em simplificar, estruturar e melhorar o
                que realmente impacta a operação.
              </p>
              <p>
                Acreditamos numa transformação digital prática — sem complexidade desnecessária, sem
                discursos vazios e com foco em utilidade real.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-xl">
            <h3 className="text-2xl font-semibold">Princípios da marca</h3>
            <div className="mt-6 space-y-4 text-slate-300">
              <p>
                <span className="font-semibold text-white">Simplicidade:</span> evitar complexidade
                desnecessária.
              </p>
              <p>
                <span className="font-semibold text-white">Clareza:</span> tornar o funcionamento
                do negócio mais evidente e controlável.
              </p>
              <p>
                <span className="font-semibold text-white">Utilidade real:</span> foco no que traz
                impacto operacional concreto.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Contacto
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Contacte-nos
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Se pretende melhorar a organização e o funcionamento do seu negócio, entre em
              contacto. A primeira conversa serve para perceber o contexto e identificar onde poderá
              existir mais valor.
            </p>
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
          <p>Clareza. Estrutura. Melhoria operacional.</p>
        </div>
      </footer>
    </div>
  );
}