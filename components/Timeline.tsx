import AnimateIn from "./AnimateIn";

const steps = [
  {
    num: "01",
    label: "Semana 1",
    title: "Você cria sua primeira loja",
    desc: [
      "Você abre a primeira aula… e já começa a montar sua loja.",
      "Sem travar. Sem ficar perdido.",
      "Em poucos dias, ela está pronta — com pagamento, frete e visual profissional.",
      "E o mais importante: pronta pra mostrar pra qualquer cliente.",
    ],
  },
  {
    num: "02",
    label: "Semana 2",
    title: "Você vai atrás dos seus primeiros clientes",
    desc: [
      "Agora você começa a olhar ao redor com outros olhos.",
      "Todo negócio sem loja online vira uma oportunidade.",
      "Você já sabe o que falar. Já tem o que mostrar.",
      "E começa a fechar.",
    ],
  },
  {
    num: "03",
    label: "Semana 3",
    title: "Você recebe pelo seu primeiro projeto",
    desc: [
      "O cliente aprova.",
      "Você entrega a loja, mostra tudo funcionando…",
      "e recebe seu primeiro Pix.",
      "Entre R$600 e R$1.500 por poucos dias de trabalho.",
    ],
  },
  {
    num: "04",
    label: "Mês 2",
    title: "Você escala e ativa sua loja própria",
    desc: [
      "Agora você já entendeu o jogo.",
      "Um cliente puxa outro.",
      "Você começa a fazer 2, 3 lojas por mês.",
      "E em paralelo, ativa sua própria loja usando o método da UrbanFeet.",
      "Dois caminhos de renda acontecendo ao mesmo tempo.",
    ],
  },
  {
    num: "05",
    label: "Mês 3+",
    title: "Você está dentro",
    desc: [
      "Agora você está dentro.",
      "Tem portfólio, tem cliente, tem demanda.",
      "Sua loja roda no automático.",
      "E você não depende mais de ninguém pra ganhar dinheiro.",
      "Foi exatamente assim que aconteceu comigo.",
    ],
  },
];

export default function Timeline() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[600px] bg-emerald-500/4 rounded-full blur-[150px] pointer-events-none" />

      <div className="container max-w-3xl mx-auto px-4 relative z-10">
        <AnimateIn from="bottom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-snug">
              Sua jornada começa agora.{" "}
              <span className="text-emerald-400">E isso é o que vai acontecer.</span>
            </h2>
          </div>
        </AnimateIn>

        <div className="relative">
          <div className="absolute left-[27px] md:left-[31px] top-2 bottom-2 w-px bg-gradient-to-b from-emerald-500 via-emerald-500/40 to-transparent" />

          <div className="space-y-5">
            {steps.map((step, i) => (
              <AnimateIn key={step.num} from="left" delay={i * 120}>
                <div className="relative flex items-start gap-6 md:gap-8">
                  <div className="relative flex-shrink-0 z-10">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-black border border-emerald-500/40 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                      <span className="font-bebas text-2xl text-emerald-400 leading-none">{step.num}</span>
                    </div>
                  </div>
                  <div className="flex-1 relative bg-white/[0.03] border border-white/8 rounded-2xl p-5 hover:border-emerald-500/30 transition-all overflow-hidden group mb-2">
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500/60 via-emerald-500/20 to-transparent rounded-l-2xl" />
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-emerald-500/20 via-transparent to-transparent" />
                    <span className="absolute top-3 right-4 font-bebas text-[56px] text-white/[0.04] leading-none select-none">{step.num}</span>
                    <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest block mb-1">{step.label}</span>
                    <h3 className="text-base font-extrabold text-white mb-2">{step.title}</h3>
                    <div className="space-y-1">
                      {step.desc.map((line, j) => (
                        <p key={j} className="text-gray-400 text-sm leading-relaxed">{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        <AnimateIn from="bottom" delay={150}>
          <div className="text-center mt-14 space-y-1">
            <p className="text-gray-400 text-lg">A única coisa que separa você disso…</p>
            <p className="text-white font-bold text-xl">é começar.</p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
