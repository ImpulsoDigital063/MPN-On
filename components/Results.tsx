import Image from "next/image";
import { DollarSign } from "lucide-react";

const DASH_30 =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663305937026/Jey4huR4MGMLTE3MYskJ4P/dashboard_30dias_v2_3658aeac.png";
const DASH_60 =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663305937026/Jey4huR4MGMLTE3MYskJ4P/dashboard_60dias_v2_075f6511.png";
const DASH_90 =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663305937026/Jey4huR4MGMLTE3MYskJ4P/dashboard_90dias_v2_492c2a36.png";
const EDUARDO_TABLET =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663305937026/Jey4huR4MGMLTE3MYskJ4P/eduardo_tablet_e9f981f2.jpeg";

const dashboards = [
  {
    label: "30 DIAS",
    alt: "Faturamento 30 dias",
    src: DASH_30,
    value: "R$ 13.072,48",
    period: "30 dias",
    highlight: false,
  },
  {
    label: "60 DIAS",
    alt: "Faturamento 60 dias",
    src: DASH_60,
    value: "R$ 24.559,18",
    period: "60 dias",
    highlight: false,
  },
  {
    label: "90 DIAS",
    alt: "Faturamento 90 dias",
    src: DASH_90,
    value: "R$ 37.705,24",
    period: "90 dias",
    highlight: true,
  },
];

const serviceMonths = [
  { month: "Mês 1", value: "R$ 4.800", sub: "6 lojas entregues" },
  { month: "Mês 2", value: "R$ 6.200", sub: "8 lojas entregues" },
  { month: "Mês 3", value: "R$ 5.400", sub: "7 lojas entregues" },
];

export default function Results() {
  return (
    <section className="py-20 md:py-28 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Contra Fatos{" "}
            <span className="text-emerald-400">Não Há Argumentos</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Resultados reais da{" "}
            <strong className="text-emerald-400">UrbanFeet</strong> nos últimos
            meses. Esse é o exato modelo de negócio que você vai receber pronto.
          </p>
        </div>

        {/* Dashboards */}
        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          {dashboards.map((d) => (
            <div
              key={d.label}
              className={`rounded-xl border overflow-hidden transition-colors ${
                d.highlight
                  ? "border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.1)]"
                  : "border-white/10 hover:border-emerald-500/50"
              } bg-white/5`}
            >
              <div className="relative">
                <div
                  className={`absolute top-4 left-4 font-bold px-4 py-1.5 rounded-lg text-sm z-10 ${
                    d.highlight
                      ? "bg-emerald-500 text-black shadow-lg"
                      : "bg-white/20 text-white backdrop-blur-md"
                  }`}
                >
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
              <div
                className={`p-5 bg-black border-t flex items-center justify-between ${
                  d.highlight ? "border-emerald-500/20" : "border-white/10"
                }`}
              >
                <p className="text-gray-400 text-sm">
                  Vendas Brutas — {d.period}
                </p>
                <p className="text-2xl font-extrabold text-emerald-400">
                  {d.value}
                </p>
              </div>
            </div>
          ))}

          <div className="bg-emerald-900/20 border border-emerald-500/40 rounded-2xl p-6 text-center">
            <p className="text-gray-400 text-sm mb-2">
              Faturamento da UrbanFeet no{" "}
              <strong className="text-white">3º mês</strong>
            </p>
            <p className="text-4xl md:text-5xl font-extrabold text-emerald-400">
              R$ 37.705,24
            </p>
            <p className="text-gray-500 text-sm mt-3">
              Dropshipping nacional — sem estoque, sem tocar em caixas, sem
              funcionários.
            </p>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mb-16">
          *Resultados reais da loja UrbanFeet. O seu resultado depende da sua
          dedicação em aplicar o método.
        </p>

        {/* Service income section */}
        <div className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden">
          <Image
            src={EDUARDO_TABLET}
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 1024px) 100vw, 800px"
            className="object-cover object-center opacity-10 pointer-events-none select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black pointer-events-none" />

          <div className="relative z-10 px-6 pt-8 text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 px-4 py-2 rounded-full border border-amber-500/20 mb-4">
              <DollarSign className="w-4 h-4" />
              <span className="font-bold uppercase tracking-wide text-sm">
                Negócio 1 — Prestação de Serviços
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
              Criando Lojas para Clientes:{" "}
              <span className="text-amber-400">~R$ 5.600/mês</span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Em paralelo à UrbanFeet, crio lojas para empreendedores locais.
              Uma média de{" "}
              <strong className="text-white">7 lojas por mês</strong>, cada uma
              entregue em menos de 3 dias.
            </p>
          </div>

          <div className="relative z-10 grid md:grid-cols-3 gap-4 mb-6 px-6">
            {serviceMonths.map((m, i) => (
              <div
                key={m.month}
                className={`bg-black rounded-xl p-5 text-center hover:border-amber-500/60 transition-colors border ${
                  i === 1 ? "border-amber-500/40" : "border-amber-500/20"
                }`}
              >
                <p className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">
                  {m.month}
                </p>
                <p className="text-2xl font-extrabold text-white mb-1">
                  {m.value}
                </p>
                <p className="text-gray-500 text-sm">{m.sub}</p>
              </div>
            ))}
          </div>

          <div className="relative z-10 bg-amber-900/20 border border-amber-500/40 rounded-2xl p-6 text-center mx-6 mb-8">
            <p className="text-gray-400 text-sm mb-2">
              Faturamento médio mensal com{" "}
              <strong className="text-white">prestação de serviços</strong>
            </p>
            <p className="text-4xl md:text-5xl font-extrabold text-amber-400">
              R$ 5.466/mês
            </p>
            <p className="text-gray-500 text-sm mt-3">
              Cobrando R$ 600–R$ 800 por loja — sem precisar de CNPJ, sem
              escritório, sem funcionários.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
