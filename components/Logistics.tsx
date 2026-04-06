import { Zap, Rocket, Truck, Gift, MessageCircle, CircleCheck, X } from "lucide-react";

const freightOptions = [
  {
    icon: <Rocket className="w-8 h-8 text-emerald-400" />,
    title: "Frete Expresso",
    subtitle: "Motoboy Local",
    desc: 'Entrega no MESMO DIA para clientes da região. O cliente vê "Receba Hoje" no checkout.',
    badge: "Entrega em horas",
  },
  {
    icon: <Truck className="w-8 h-8 text-emerald-400" />,
    title: "Melhor Envio",
    subtitle: "Brasil Todo",
    desc: "Várias transportadoras com fretes até 80% mais baratos que Correios. Rastreamento automático.",
    badge: "80% mais barato",
  },
  {
    icon: <Gift className="w-8 h-8 text-emerald-400" />,
    title: "Frete Grátis",
    subtitle: "Estratégico",
    desc: "Configure frete grátis acima de X reais. Aumenta o ticket médio e incentiva compras maiores.",
    badge: "Ticket médio +40%",
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-emerald-400" />,
    title: "WhatsApp",
    subtitle: "Botão Flutuante",
    desc: "Botão de WhatsApp integrado na loja. Cliente clica e cai direto no seu atendimento. Aumenta confiança e fecha mais vendas.",
    badge: "Conversão +25%",
  },
];

const checkoutOptions = [
  { label: "Frete Expresso (Motoboy)", sub: "Receba hoje", price: "R$ 8,00", active: true },
  { label: "PAC (Melhor Envio)", sub: "3-5 dias úteis", price: "R$ 14,90", active: false },
  { label: "SEDEX (Melhor Envio)", sub: "1-2 dias úteis", price: "R$ 22,50", active: false },
  { label: "Frete Grátis", sub: "Acima de R$ 150", price: "R$ 0,00", active: false },
];

export default function Logistics() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-black to-black z-0" />
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[300px] bg-emerald-500/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full border border-emerald-500/20 mb-6">
            <Zap className="w-4 h-4" />
            <span className="font-bold uppercase tracking-wide text-sm">O Pulo do Gato</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Logística Inteligente:{" "}
            <span className="text-emerald-400">Seus Clientes Vão Faturar 3x Mais</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A maioria das lojas perde vendas por causa do frete caro e demorado. Com o MPN-On, você entrega lojas com{" "}
            <strong className="text-white">4 opções de frete</strong> que explodem a conversão.
          </p>
        </div>

        {/* 4 freight cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {freightOptions.map((f) => (
            <div key={f.title} className="bg-black border border-white/10 rounded-2xl p-6 hover:border-emerald-500/40 transition-all group">
              <div className="bg-emerald-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{f.title}</h3>
              <p className="text-emerald-400 text-sm font-medium mb-3">{f.subtitle}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{f.desc}</p>
              <div className="bg-emerald-500/10 rounded-lg px-3 py-1.5 inline-block">
                <span className="text-emerald-400 text-xs font-bold">{f.badge}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison */}
        <div className="bg-black border border-white/10 rounded-2xl p-8 md:p-10">
          <h3 className="text-2xl font-bold text-center mb-8">
            Lojas Comuns <span className="text-gray-500">vs.</span>{" "}
            <span className="text-emerald-400">Lojas MPN-On</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="text-center mb-4">
                <span className="bg-red-500/10 text-red-400 px-4 py-1.5 rounded-full text-sm font-bold">LOJAS COMUNS</span>
              </div>
              {["Só Correios (frete caro e lento)", "7-15 dias de entrega", "1 opção de frete no checkout", "Cliente desiste no carrinho", "Taxa de conversão: 1-2%"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-gray-400">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <div className="text-center mb-4">
                <span className="bg-emerald-500/10 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-bold">LOJAS MPN-ON</span>
              </div>
              {["Frete expresso local (entrega HOJE)", "Melhor Envio (80% mais barato)", "4 opções de frete no checkout", "Cliente escolhe e compra feliz", "Taxa de conversão: 4-5% (3x maior)"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white">
                  <CircleCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sacada do frete expresso */}
        <div className="mt-8 bg-emerald-950/40 border border-emerald-500/40 rounded-2xl p-8 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-emerald-500/20 p-2 rounded-lg">
              <Zap className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="text-xl font-extrabold text-emerald-400">A Sacada do Frete Expresso</h3>
          </div>
          <div className="space-y-4 text-gray-300 text-base leading-relaxed">
            <p>
              Pensa comigo. Seu cliente mora na mesma cidade que o negócio dele. Ele quer comprar um suplemento, uma roupa, uma joia. Aí no checkout aparece a opção:{" "}
              <strong className="text-white">&quot;Frete Expresso via Motoboy — Receba Hoje por R$10.&quot;</strong>
            </p>
            <p>
              Nenhum grande marketplace consegue fazer isso pela cidade dele.{" "}
              <strong className="text-emerald-400">Você consegue.</strong>
            </p>
            <p className="text-white font-semibold">
              Essa única configuração eleva a taxa de conversão de 1-2% para 4-5%. É o que separa uma loja comum de uma loja que de fato vende.
            </p>
          </div>
        </div>

        {/* Checkout preview */}
        <div className="mt-8 bg-black border border-white/10 rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-emerald-500 text-black font-bold px-4 py-1.5 text-sm rounded-bl-xl">
            PREVIEW DO CHECKOUT
          </div>
          <div className="max-w-md mx-auto space-y-3 mt-4">
            <p className="text-gray-400 text-sm mb-4">O que seu cliente vê no checkout:</p>
            {checkoutOptions.map((opt) => (
              <div
                key={opt.label}
                className={`flex items-center justify-between p-4 rounded-xl border transition-colors ${opt.active ? "bg-emerald-500/10 border-emerald-500/50" : "bg-white/5 border-white/10"}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${opt.active ? "border-emerald-500" : "border-gray-600"}`}>
                    {opt.active && <div className="w-2 h-2 rounded-full bg-emerald-500" />}
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${opt.active ? "text-emerald-400" : "text-gray-300"}`}>{opt.label}</p>
                    <p className="text-xs text-gray-500">{opt.sub}</p>
                  </div>
                </div>
                <span className={`text-sm font-bold ${opt.active ? "text-emerald-400" : "text-gray-400"}`}>{opt.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
