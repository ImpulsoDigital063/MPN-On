import AnimateIn from "./AnimateIn";

const stats = [
  { value: "R$ 37.705", label: "faturados em 90 dias", sub: "UrbanFeet · 2º sem. 2025" },
  { value: "1.600+", label: "pares vendidos", sub: "sem estoque próprio" },
  { value: "7 lojas/mês", label: "criadas para clientes", sub: "pela Impulso Digital" },
  { value: "R$ 1.000", label: "primeiro projeto entregue", sub: "Gabriel · GB Nutrition" },
];

export default function SocialProofBar() {
  return (
    <section className="relative border-y border-white/8 py-10 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.04)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 pointer-events-none" />
      <div className="container max-w-5xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <AnimateIn key={s.label} from="bottom" delay={i * 100}>
              <div className="relative bg-white/[0.03] border border-white/8 rounded-2xl p-5 text-center hover:border-emerald-500/40 hover:bg-emerald-500/[0.03] transition-all group overflow-hidden h-full">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
                <p className="font-bebas text-[clamp(26px,3.5vw,40px)] text-emerald-400 leading-none mb-1 group-hover:text-emerald-300 transition-colors">
                  {s.value}
                </p>
                <p className="text-gray-300 text-xs font-semibold leading-snug mb-1">{s.label}</p>
                <p className="text-gray-600 text-[10px]">{s.sub}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
