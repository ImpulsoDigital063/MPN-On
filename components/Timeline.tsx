const steps = [
  {
    label: "Semana 1",
    title: "Você cria sua primeira loja",
    desc: "Sem enrolação. Você abre a primeira aula e já começa a apertar os botões certos. Ao final da semana você tem uma loja completa no seu portfólio — com pagamento, frete e identidade visual configurados. Pronta pra mostrar pra qualquer cliente.",
    reverse: false,
  },
  {
    label: "Semana 2",
    title: "Você vai atrás dos seus primeiros clientes",
    desc: "Olha ao redor. Quantas pessoas você conhece que vendem produto mas não têm loja online? Cada uma delas é um cliente em potencial. Com os scripts de prospecção em mãos, você chega, apresenta e fecha. Sem precisar de seguidores, sem precisar de tráfego pago.",
    reverse: true,
  },
  {
    label: "Semana 3",
    title: "Você recebe pelo seu primeiro projeto",
    desc: "Seu primeiro cliente aprova a loja. Você entrega via AnyDesk, mostra tudo funcionando — pagamento, frete expresso, Melhor Envio. Ele fica impressionado. Você recebe de R$600 a R$1.500 via Pix. Em menos de 3 dias de trabalho.",
    reverse: false,
  },
  {
    label: "Mês 2",
    title: "Você escala e ativa sua loja própria",
    desc: "Cliente chama cliente. Você já está criando 2, 3 lojas por mês. Em paralelo, ativa sua loja de calçados usando o método UrbanFeet — o fornecedor cuida do estoque e da entrega, você só se preocupa em vender. Dois fluxos de renda rodando ao mesmo tempo.",
    reverse: true,
  },
  {
    label: "Mês 3 em diante",
    title: "Você está no jogo",
    desc: "Seu problema agora é ter serviço demais. O portfólio cresceu, os clientes te indicam, sua loja vende no automático. Você trabalha de casa, no seu horário, sem depender de ninguém. Foi exatamente assim que aconteceu comigo.",
    reverse: false,
  },
];

export default function Timeline() {
  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Sua jornada começa agora.{" "}
            <span className="text-emerald-400">Veja o que acontece nas próximas semanas.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500 via-emerald-500/50 to-transparent" />

          <div className="space-y-12">
            {steps.map((step) => (
              <div
                key={step.label}
                className={`relative flex items-center ${step.reverse ? "md:flex-row-reverse" : ""}`}
              >
                <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${step.reverse ? "md:pl-12" : "md:pr-12"}`}>
                  <div className="bg-black border border-white/10 rounded-xl p-6 hover:border-emerald-500/30 transition-colors">
                    <span className="text-emerald-400 font-bold text-sm uppercase tracking-wider">{step.label}</span>
                    <h3 className="text-xl font-bold text-white mt-2 mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-[#0a0a0a] z-10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
