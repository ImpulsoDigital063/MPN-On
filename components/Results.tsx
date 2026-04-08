import Image from "next/image";
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
            <span className="bg-emerald-500 text-black text-xs font-extrabold px-2 py-0.5 rounded-md">BÔNUS · MÓDULO 3</span>
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Resultados Reais · 2025</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-snug">
            E como bônus…{" "}
            <span className="text-emerald-400">você também aprende a montar sua própria loja</span>
          </h2>
          <div className="space-y-3 text-gray-300 max-w-xl mx-auto text-left">
            <p className="text-white font-medium">Isso aqui já é outro nível.</p>
            <p>Não é sobre prestar serviço.</p>
            <p className="text-emerald-400 font-medium">É sobre construir algo seu.</p>
            <div className="pt-2 border-t border-white/8">
              <p>Essa é a <strong className="text-white">UrbanFeet</strong>.</p>
              <p className="text-gray-400">Uma loja que eu trabalho há mais de 3 anos.</p>
            </div>
          </div>
        </div>
        </AnimateIn>

        {/* Dados do mercado de calçados */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { value: "R$ 81 bi", label: "mercado de calçados Brasil", highlight: false },
              { value: "19,7%", label: "crescimento anual do dropshipping", highlight: false },
              { value: "0", label: "estoque necessário", highlight: true },
              { value: "1.600+", label: "pares vendidos (UrbanFeet)", highlight: true },
            ].map((s) => (
              <div key={s.label} className="bg-black border border-emerald-500/20 rounded-2xl p-5 text-center">
                <p className={`text-3xl md:text-4xl font-extrabold mb-1 ${s.highlight ? "text-white" : "text-emerald-400"}`}>{s.value}</p>
                <p className="text-xs text-gray-400 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-emerald-950/30 to-black border border-emerald-500/20 rounded-2xl p-5 md:p-6">
            <p className="text-gray-300 text-sm leading-relaxed">
              O mercado de calçados no Brasil movimenta{" "}
              <strong className="text-emerald-400">R$ 81,5 bilhões por ano</strong> — e com dropshipping nacional você vende sem estoque e sem tocar em produto.{" "}
              <strong className="text-white">O fornecedor embala e envia. Você só cuida de vender.</strong>
            </p>
          </div>
        </div>

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

        {/* Bônus: explicação + diferenciais */}
        <AnimateIn from="bottom">
        <div className="bg-white/[0.03] border border-emerald-500/20 rounded-2xl p-6 md:p-8 mb-6 space-y-6 max-w-2xl mx-auto">

          <div className="space-y-1 text-gray-300">
            <p>E dentro do módulo 3,{" "}
              <strong className="text-white">eu recrio essa loja junto com você.</strong>
            </p>
            <p className="text-emerald-400 font-medium">Do zero.</p>
          </div>

          <div className="border-t border-white/8 pt-5 space-y-3">
            <p className="text-white font-semibold">Você recebe:</p>
            <ul className="space-y-2 text-gray-300">
              {[
                "meu fornecedor de confiança",
                "mais de 800 mídias prontas",
                "mais de 100 modelos de calçados",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-0.5 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-400 pt-1">
              O fornecedor cuida do estoque e da logística.
            </p>
            <p className="text-white font-medium">Você só precisa focar em vender.</p>
          </div>

          <div className="border-t border-white/8 pt-5 space-y-3 text-gray-300">
            <p className="text-gray-500">Isso aqui não é o primeiro passo.</p>
            <p className="text-white font-bold text-lg">É o próximo nível.</p>
            <div className="pt-1 space-y-1">
              <p>Primeiro você aprende a ganhar com serviço.</p>
              <p className="text-gray-400">Depois, se quiser, constrói algo seu.</p>
            </div>
          </div>

        </div>
        </AnimateIn>

        <div className="text-center">
          <p className="text-gray-500 text-sm">Continue para ver o método completo. ↓</p>
        </div>
      </div>
    </section>
  );
}
