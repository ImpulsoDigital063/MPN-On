import { TrendingUp, ShoppingBag, Package } from "lucide-react";

const ecommerceStats = [
  { value: "R$ 235 bi", label: "Faturamento E-commerce Brasil", sub: "em 2025 (crescimento de 15,3%)", source: "Fonte: ABComm" },
  { value: "R$ 259 bi", label: "Previsão para 2026", sub: "+10% de crescimento projetado", source: "Fonte: ABComm" },
  { value: "26%", label: "dos sites de e-commerce", sub: "usam Shopify no mundo", source: "Fonte: Shopify Investors", white: true },
];

const miniStats1 = [
  { value: "438M", label: "pedidos online em 2025" },
  { value: "86%", label: "dos brasileiros compram online todo mês" },
  { value: "$1/mês", label: "Shopify nos 3 primeiros meses", white: true },
  { value: "14,6 bi", label: "Black Friday Shopify 2025", white: true },
];

const dropStats = [
  { value: "R$ 81 bi", label: "mercado de calçados Brasil" },
  { value: "19,7%", label: "crescimento anual dropshipping" },
  { value: "0", label: "estoque necessário", white: true },
  { value: "1.600+", label: "pares vendidos (UrbanFeet)", white: true },
];

export default function Opportunity() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent z-0" />
      <div className="absolute right-10 top-20 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-[350px] h-[350px] bg-emerald-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto relative z-10 px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full border border-emerald-500/20 mb-6">
            <TrendingUp className="w-4 h-4" />
            <span className="font-bold uppercase tracking-wide text-sm">A Oportunidade é Real</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-snug">
            Existe uma oportunidade gigante acontecendo agora —{" "}
            <span className="text-emerald-400">e quase ninguém está aproveitando</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Não é achismo. São dados reais —{" "}
            <strong className="text-white">e eles mostram exatamente onde está o dinheiro.</strong>
          </p>
        </div>

        {/* Negócio 1 */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20">
              <ShoppingBag className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Crie Lojas Online para Clientes e Fature por Projeto</h3>
              <p className="text-sm text-gray-400">Suplementos, roupas, joias, calçados, beleza, hamburguerias — qualquer negócio local</p>
            </div>
          </div>

          <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-2xl p-6 mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-extrabold text-emerald-400 mb-1">R$ 600+</p>
                <p className="text-gray-300 text-sm font-medium">por loja entregue</p>
                <p className="text-gray-500 text-xs mt-1">valor inicial de cobrança</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-emerald-400 mb-1">3 dias</p>
                <p className="text-gray-300 text-sm font-medium">para criar uma loja completa</p>
                <p className="text-gray-500 text-xs mt-1">depois que pegar o jeito</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-white mb-1">$1/mês</p>
                <p className="text-gray-300 text-sm font-medium">Shopify nos 3 primeiros meses</p>
                <p className="text-gray-500 text-xs mt-1">investimento quase zero para o cliente</p>
              </div>
            </div>
          </div>

          {/* E-commerce stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {ecommerceStats.map((s) => (
              <div key={s.label} className="bg-black border border-emerald-500/20 rounded-2xl p-6 text-center hover:border-emerald-500/40 transition-colors">
                <p className={`text-4xl md:text-5xl font-extrabold mb-2 ${s.white ? "text-white" : "text-emerald-400"}`}>{s.value}</p>
                <p className="text-gray-300 font-medium mb-1">{s.label}</p>
                <p className="text-gray-500 text-sm">{s.sub}</p>
                <p className="text-xs text-gray-600 mt-2">{s.source}</p>
              </div>
            ))}
          </div>

          {/* Why it matters box */}
          <div className="bg-gradient-to-r from-emerald-950/30 to-black border border-emerald-500/20 rounded-2xl p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h4 className="text-lg font-bold text-white mb-3">Por que isso importa para você?</h4>
                <p className="text-gray-300 leading-relaxed text-sm">
                  Milhões de negócios no Brasil <strong className="text-white">ainda não têm loja online</strong>. Todos eles são clientes em potencial. A Shopify dá 3 meses por $1 — você basicamente começa sem precisar investir nada.{" "}
                  <strong className="text-emerald-400">Você pode ser essa pessoa.</strong>
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {miniStats1.map((s) => (
                  <div key={s.label} className="bg-black/50 rounded-xl p-4 text-center border border-white/5">
                    <p className={`text-2xl font-extrabold ${s.white ? "text-white" : "text-emerald-400"}`}>{s.value}</p>
                    <p className="text-xs text-gray-400 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Negócio 2 (Bônus) */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-amber-500/10 p-3 rounded-xl border border-amber-500/20">
              <Package className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                E tem mais:{" "}
                <span className="text-amber-400">você também monta sua própria loja</span>
              </h3>
              <p className="text-sm text-gray-400">
                Além de criar lojas pra clientes, você aprende a ter um <strong>e-commerce seu</strong> rodando em paralelo
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-950/30 to-black border border-amber-500/20 rounded-2xl p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h4 className="text-lg font-bold text-white mb-3">
                  O mercado de calçados no Brasil movimenta{" "}
                  <span className="text-amber-400">R$ 81,5 bilhões por ano</span>
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm">
                  Com dropshipping nacional, você vende sem estoque e sem tocar em produto. O fornecedor embala e envia.{" "}
                  <strong className="text-amber-400">Você só cuida de vender.</strong> É o modelo exato que a UrbanFeet usa há 3 anos — e você aprende do zero no{" "}
                  <strong className="text-white">módulo bônus</strong>.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {dropStats.map((s) => (
                  <div key={s.label} className="bg-black/50 rounded-xl p-4 text-center border border-white/5">
                    <p className={`text-2xl font-extrabold ${s.white ? "text-white" : "text-amber-400"}`}>{s.value}</p>
                    <p className="text-xs text-gray-400 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Closing transition */}
        <div className="text-center mt-16 space-y-1">
          <p className="text-gray-400 text-lg">Agora que você viu o tamanho da oportunidade…</p>
          <p className="text-white font-semibold">veja como o método funciona na prática. ↓</p>
        </div>
      </div>
    </section>
  );
}
