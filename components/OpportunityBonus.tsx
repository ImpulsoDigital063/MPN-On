import { Package } from "lucide-react";

const dropStats = [
  { value: "R$ 81 bi", label: "mercado de calçados Brasil" },
  { value: "19,7%", label: "crescimento anual dropshipping" },
  { value: "0", label: "estoque necessário", white: true },
  { value: "1.600+", label: "pares vendidos (UrbanFeet)", white: true },
];

export default function OpportunityBonus() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent z-0" />
      <div className="absolute right-10 top-20 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-[350px] h-[350px] bg-emerald-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto relative z-10 px-4">
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {dropStats.map((s) => (
              <div key={s.label} className="bg-black border border-amber-500/20 rounded-2xl p-5 text-center hover:border-amber-500/40 transition-colors">
                <p className={`text-3xl md:text-4xl font-extrabold mb-1 ${s.white ? "text-white" : "text-amber-400"}`}>{s.value}</p>
                <p className="text-xs text-gray-400 mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-amber-950/30 to-black border border-amber-500/20 rounded-2xl p-6 md:p-8">
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
        </div>

      </div>
    </section>
  );
}
