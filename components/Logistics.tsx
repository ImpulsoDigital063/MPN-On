import { Zap, CircleCheck } from "lucide-react";

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

      <div className="container relative z-10 max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full border border-emerald-500/20 mb-6">
            <Zap className="w-4 h-4" />
            <span className="font-bold uppercase tracking-wide text-sm">O Pulo do Gato</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            A configuração que separa uma loja{" "}
            <span className="text-emerald-400">que vende todos os dias</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            O frete é o maior assassino de conversão no e-commerce. Com o método MPN-On, cada loja que você entrega já sai com isso resolvido.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Sacada */}
          <div className="bg-emerald-950/40 border border-emerald-500/40 rounded-2xl p-7 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-emerald-500/20 p-2 rounded-lg">
                <Zap className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-xl font-extrabold text-emerald-400">A sacada do frete expresso</h3>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Pensa comigo. O cliente mora na mesma cidade do negócio. Ele quer comprar um suplemento, uma roupa, uma joia. No checkout aparece:{" "}
                <strong className="text-white">"Frete Expresso via Motoboy — Receba Hoje por R$10."</strong>
              </p>
              <p>
                Nenhum grande marketplace consegue fazer isso pela cidade dele.{" "}
                <strong className="text-emerald-400">Você consegue.</strong>
              </p>
              <p className="text-white font-semibold">
                Essa única configuração eleva a taxa de conversão de 1-2% para 4-5%. Três vezes mais vendas com o mesmo tráfego.
              </p>
            </div>

            <div className="mt-5 space-y-2">
              {[
                "Melhor Envio: fretes 80% mais baratos que Correios",
                "Frete grátis estratégico para aumentar ticket médio",
                "WhatsApp flutuante integrado na loja",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-300">
                  <CircleCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Preview do checkout */}
          <div className="bg-black border border-white/10 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-500 text-black font-bold px-4 py-1.5 text-xs rounded-bl-xl">
              PREVIEW DO CHECKOUT
            </div>
            <p className="text-gray-500 text-sm mb-5 mt-2">O que o cliente vê na hora de comprar:</p>
            <div className="space-y-3">
              {checkoutOptions.map((opt) => (
                <div
                  key={opt.label}
                  className={`flex items-center justify-between p-4 rounded-xl border transition-colors ${
                    opt.active
                      ? "bg-emerald-500/10 border-emerald-500/50"
                      : "bg-white/5 border-white/10"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        opt.active ? "border-emerald-500" : "border-gray-600"
                      }`}
                    >
                      {opt.active && <div className="w-2 h-2 rounded-full bg-emerald-500" />}
                    </div>
                    <div>
                      <p className={`text-sm font-medium ${opt.active ? "text-emerald-400" : "text-gray-300"}`}>
                        {opt.label}
                      </p>
                      <p className="text-xs text-gray-500">{opt.sub}</p>
                    </div>
                  </div>
                  <span className={`text-sm font-bold ${opt.active ? "text-emerald-400" : "text-gray-400"}`}>
                    {opt.price}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-xs mt-4 text-center">
              Cada loja que você entrega já sai com isso configurado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
