import AnimateIn from "./AnimateIn";

const steps = [
  {
    num: "01",
    label: "Semana 1",
    title: "Você cria sua primeira loja",
    desc: "Sem enrolação. Você abre a primeira aula e já começa a apertar os botões certos. Ao final da semana você tem uma loja completa no seu portfólio — com pagamento, frete e identidade visual configurados. Pronta pra mostrar pra qualquer cliente.",
  },
  {
    num: "02",
    label: "Semana 2",
    title: "Você vai atrás dos seus primeiros clientes",
    desc: "Olha ao redor. Quantas pessoas você conhece que vendem produto mas não têm loja online? Cada uma delas é um cliente em potencial. Com os scripts de prospecção em mãos, você chega, apresenta e fecha. Sem precisar de seguidores, sem precisar de tráfego pago.",
  },
  {
    num: "03",
    label: "Semana 3",
    title: "Você recebe pelo seu primeiro projeto",
    desc: "Seu primeiro cliente aprova a loja. Você entrega via AnyDesk, mostra tudo funcionando — pagamento, frete expresso, Melhor Envio. Ele fica impressionado. Você recebe de R$600 a R$1.500 via Pix. Em menos de 3 dias de trabalho.",
  },
  {
    num: "04",
    label: "Mês 2",
    title: "Você escala e ativa sua loja própria",
    desc: "Cliente chama cliente. Você já está criando 2, 3 lojas por mês. Em paralelo, ativa sua loja de calçados usando o método UrbanFeet — o fornecedor cuida do estoque e da entrega, você só se preocupa em vender. Dois fluxos de renda rodando ao mesmo tempo.",
  },
  {
    num: "05",
    label: "Mês 3 em diante",
    title: "Você está no jogo",
    desc: "Seu problema agora é ter serviço demais. O portfólio cresceu, os clientes te indicam, sua loja vende no automático. Você trabalha de casa, no seu horário, sem depender de ninguém. Foi exatamente assim que aconteceu comigo.",
  },
];

export default function Timeline() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[600px] bg-emerald-500/4 rounded-full blur-[150px] pointer-events-none" />

      <div className="container max-w-3xl mx-auto px-4 relative z-10">
        <AnimateIn from="bottom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              Sua jornada começa agora.{" "}
              <span className="text-emerald-400">Veja o que acontece.</span>
            </h2>
            <p className="text-gray-400 text-lg">Do primeiro clique até o primeiro Pix recebido.</p>
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
                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
