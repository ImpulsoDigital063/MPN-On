import Image from "next/image";
import CTAButton from "./CTAButton";
import AnimateIn from "./AnimateIn";

const DASH_30 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663305937026/Jey4huR4MGMLTE3MYskJ4P/dashboard_30dias_v2_3658aeac.png";
const DASH_60 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663305937026/Jey4huR4MGMLTE3MYskJ4P/dashboard_60dias_v2_075f6511.png";
const DASH_90 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663305937026/Jey4huR4MGMLTE3MYskJ4P/dashboard_90dias_v2_492c2a36.png";

const dashboards = [
  { label: "30 DIAS", period: "Dezembro/2025", months: "dez", alt: "Faturamento 30 dias", src: DASH_30, value: "R$ 13.072,48", highlight: false },
  { label: "60 DIAS", period: "Nov + Dez/2025", months: "nov + dez", alt: "Faturamento 60 dias", src: DASH_60, value: "R$ 24.559,18", highlight: false },
  { label: "90 DIAS", period: "Out + Nov + Dez/2025", months: "out + nov + dez", alt: "Faturamento 90 dias", src: DASH_90, value: "R$ 37.705,24", highlight: true },
];

export default function Results() {
  return (
    <section className="py-20 md:py-28 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="container max-w-5xl mx-auto relative z-10 px-4">
        <AnimateIn from="bottom">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Resultados Reais · 2º semestre 2025</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
            É isso que você pode estar{" "}
            <span className="text-emerald-400">faturando.</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Esses são os dashboards reais da{" "}
            <strong className="text-emerald-400">UrbanFeet</strong> — minha loja de calçados online, que opera há mais de 3 anos com{" "}
            <strong className="text-white">dropshipping nacional</strong>. Fornecedor brasileiro, entrega rápida, sem AliExpress, sem produto preso na alfândega.
          </p>
          <div className="mt-5 inline-flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl px-5 py-3">
            <span className="bg-emerald-500 text-black text-xs font-extrabold px-2 py-0.5 rounded-md">BÔNUS · MÓDULO 3</span>
            <p className="text-gray-300 text-sm">
              Você vai aprender a montar exatamente esse modelo — e recebe o contato direto do meu fornecedor.
            </p>
          </div>
        </div>
        </AnimateIn>

        <p className="text-center text-gray-600 text-sm mb-6 italic">
          Screenshots reais do painel da UrbanFeet — sem edição, sem filtro.
        </p>

        {/* Contexto dos períodos */}
        <div className="max-w-4xl mx-auto mb-8 bg-white/[0.03] border border-white/8 rounded-2xl p-5">
          <p className="text-gray-300 text-sm font-semibold mb-3">Os 3 dashboards cobrem o último trimestre de 2025:</p>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="bg-black/40 rounded-xl p-3 border border-white/5">
              <p className="text-emerald-400 font-bold text-xs uppercase tracking-widest mb-1">30 dias</p>
              <p className="text-white text-sm font-semibold">Dezembro</p>
              <p className="text-gray-500 text-xs mt-0.5">2025</p>
            </div>
            <div className="bg-black/40 rounded-xl p-3 border border-white/5">
              <p className="text-emerald-400 font-bold text-xs uppercase tracking-widest mb-1">60 dias</p>
              <p className="text-white text-sm font-semibold">Nov + Dez</p>
              <p className="text-gray-500 text-xs mt-0.5">2025</p>
            </div>
            <div className="bg-black/40 rounded-xl p-3 border border-emerald-500/20">
              <p className="text-emerald-400 font-bold text-xs uppercase tracking-widest mb-1">90 dias</p>
              <p className="text-white text-sm font-semibold">Out + Nov + Dez</p>
              <p className="text-gray-500 text-xs mt-0.5">2025</p>
            </div>
          </div>
        </div>

        {/* Dashboards */}
        <div className="max-w-4xl mx-auto space-y-6 mb-12">
          {dashboards.map((d, i) => (
            <AnimateIn key={d.label} from="bottom" delay={i * 120}>
            <div
              className={`rounded-2xl border overflow-hidden transition-all ${
                d.highlight
                  ? "border-emerald-500/40 shadow-[0_0_40px_rgba(16,185,129,0.1)]"
                  : "border-white/8 hover:border-emerald-500/30"
              } bg-white/5`}
            >
              <div className="relative">
                <div className={`absolute top-4 left-4 font-bold px-4 py-1.5 rounded-lg text-sm z-10 ${
                  d.highlight ? "bg-emerald-500 text-black" : "bg-white/15 text-white backdrop-blur-md"
                }`}>
                  {d.label}
                </div>
                <Image
                  src={d.src}
                  alt={d.alt}
                  width={1200}
                  height={650}
                  style={{ height: "auto" }}
                  className="w-full object-contain"
                  sizes="(max-width: 1024px) 100vw, 800px"
                />
              </div>
              <div className={`p-5 bg-black border-t flex items-center justify-between ${
                d.highlight ? "border-emerald-500/20" : "border-white/5"
              }`}>
                <p className="text-gray-500 text-sm">UrbanFeet · {d.period} · {d.label}</p>
                <p className="text-2xl font-extrabold text-emerald-400">{d.value}</p>
              </div>
            </div>
            </AnimateIn>
          ))}
        </div>

        {/* Destaque */}
        <div className="bg-emerald-900/20 border border-emerald-500/40 rounded-2xl p-6 md:p-8 text-center mb-6">
          <p className="text-gray-400 text-sm mb-2">
            UrbanFeet — Dropshipping Nacional de Calçados · <strong className="text-white">2º semestre de 2025</strong>
          </p>
          <p className="font-bebas text-[clamp(48px,7vw,80px)] text-emerald-400 leading-none">
            R$ 37.705,24
          </p>
          <p className="text-gray-400 text-sm mt-3 max-w-lg mx-auto">
            Em 90 dias. Sem estoque. Sem tocar em uma caixa de sapato. O fornecedor brasileiro cuida de tudo — eu só me preocupo em vender.
          </p>
        </div>

        <p className="text-center text-gray-600 text-xs mb-10">
          *Resultados reais da UrbanFeet. Seu resultado depende da sua dedicação em aplicar o método.
        </p>

        <div className="max-w-sm mx-auto">
          <CTAButton href="#oferta">QUERO APRENDER ESSE MÉTODO</CTAButton>
        </div>

        <p className="text-center text-gray-600 text-sm mt-10">
          Esses são os meus números. Quer ver o que acontece quando aplico o método para um cliente?{" "}
          <span className="text-white">↓</span>
        </p>
      </div>
    </section>
  );
}
