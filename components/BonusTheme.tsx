import { Gift, Truck, MessageCircle, Smartphone, CircleCheck } from "lucide-react";

export default function BonusTheme() {
  return (
    <section className="py-20 md:py-28 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-emerald-900/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="container max-w-5xl mx-auto relative z-10 px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 px-4 py-2 rounded-full border border-amber-500/20 mb-6">
            <Gift className="w-4 h-4" />
            <span className="font-bold uppercase tracking-wide text-sm">Bônus Exclusivo</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            O Tema que{" "}
            <span className="text-amber-400">Vale Mais que o Curso</span>
          </h2>
          <div className="max-w-3xl mx-auto mb-8 space-y-4 text-left">
            <p className="text-lg text-gray-300 leading-relaxed">
              Esse tema foi desenvolvido ao longo de anos pela equipe MPN. Foi testado em centenas de negócios locais e nacionais. É o mesmo tema que Eduardo usa em todas as lojas que cria para seus clientes — e é exatamente o que viabiliza tudo que é ensinado no curso.{" "}
              <strong className="text-white">Sem ele, os mecanismos de pagamento, frete e conversão não funcionam juntos.</strong>
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              E o melhor: o aluno poderá utilizar esse tema em{" "}
              <strong className="text-emerald-400">todas as lojas que criar para seus clientes</strong>. É uma ferramenta que fica com você para sempre — cada novo projeto, cada novo cliente, o mesmo tema exclusivo MPN-On trabalhando por você.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              No mercado, um tema com esse nível de otimização custa em torno de{" "}
              <strong className="text-white">$320 dólares</strong>. Os alunos do MPN-On recebem de graça.
            </p>
          </div>

          {/* Price comparison */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl px-6 py-4">
            <div className="text-center sm:text-left">
              <p className="text-sm text-amber-400 font-bold uppercase tracking-wide mb-1">Valor Real no Mercado</p>
              <p className="text-3xl font-extrabold text-white line-through opacity-60">
                US$ 320 <span className="text-base">(~R$ 1.600)</span>
              </p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-amber-500/30" />
            <div className="text-center sm:text-left">
              <p className="text-sm text-emerald-400 font-bold uppercase tracking-wide mb-1">Você Recebe de Bônus</p>
              <p className="text-3xl font-extrabold text-emerald-400">R$ 0,00 🎁</p>
              <p className="text-xs text-gray-400 mt-1">Incluso no treinamento MPN-On</p>
            </div>
          </div>
        </div>

        {/* 3 feature cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            {
              icon: <Truck className="w-7 h-7 text-emerald-400" />,
              title: "5 Opções de Frete no Checkout",
              items: [
                "Frete real — cliente coloca o CEP e vê valores e transportadoras na hora",
                "Frete grátis fixo",
                "Frete grátis acima de X reais — aumenta o ticket médio",
                "Frete fixo por região",
                "Frete expresso via motoboy — entrega no mesmo dia ou dia seguinte",
              ],
            },
            {
              icon: <MessageCircle className="w-7 h-7 text-emerald-400" />,
              title: "WhatsApp Flutuante",
              items: ["Botão otimizado que não trava a página. Cliente tira dúvida na hora e converte mais."],
              single: true,
            },
            {
              icon: <Smartphone className="w-7 h-7 text-emerald-400" />,
              title: "100% Responsivo",
              items: ["Design limpo, moderno e ultra-rápido. Perfeito em celular (80% das vendas são mobile)."],
              single: true,
            },
          ].map((card) => (
            <div key={card.title} className="bg-black border border-amber-500/20 rounded-2xl p-6 hover:border-amber-500/40 transition-colors">
              <div className="bg-amber-500/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                {card.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 text-center">{card.title}</h3>
              {card.single ? (
                <p className="text-gray-400 text-sm leading-relaxed text-center">{card.items[0]}</p>
              ) : (
                <ul className="space-y-2 mt-3">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                      <CircleCheck className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
