import Image from "next/image";
import { Lock, ShieldCheck, Zap } from "lucide-react";
import CTAButton from "./CTAButton";

const LOGO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663305937026/Jey4huR4MGMLTE3MYskJ4P/MPN-On-corrigida_cf9701ef.png";
const EDUARDO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663305937026/Jey4huR4MGMLTE3MYskJ4P/eduardo_hero_left_nobg_9a391c6c.png";

const tickerItems = [
  "R$37.705 em 90 dias",
  "1.600+ pares vendidos",
  "7 lojas por mês",
  "CEO · Impulso Digital",
  "R$1.000 no primeiro projeto",
  "UrbanFeet · 3 anos no ar",
  "Sem programar",
  "Sem seguidores",
];

function Ticker() {
  const doubled = [...tickerItems, ...tickerItems];
  return (
    <div className="relative overflow-hidden border-y border-emerald-500/20 bg-emerald-950/30 py-3">
      <div
        className="flex gap-10 whitespace-nowrap"
        style={{ animation: "ticker 28s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-emerald-400/80 flex-shrink-0"
          >
            <span className="text-emerald-500/50">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function TrustBadges() {
  return (
    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
      <span className="flex items-center gap-1.5">
        <Lock className="w-3 h-3" /> Pagamento Seguro
      </span>
      <span className="text-gray-700">|</span>
      <span className="flex items-center gap-1.5">
        <ShieldCheck className="w-3 h-3" /> Garantia 7 dias
      </span>
      <span className="text-gray-700">|</span>
      <span className="flex items-center gap-1.5">
        <Zap className="w-3 h-3" /> Acesso Imediato
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <>
      {/* ── Top Banner ── */}
      <div className="bg-gradient-to-r from-emerald-900/80 via-emerald-800/80 to-emerald-900/80 py-2.5 text-center border-b border-emerald-500/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(16,185,129,0.08)_50%,transparent_100%)] animate-pulse" />
        <p className="text-xs md:text-sm font-medium text-white/90 relative z-10 tracking-wide">
          Lançamento —{" "}
          Você leva{" "}
          <strong className="text-emerald-300">R$2.694 em bônus de graça</strong>.{" "}
          Por enquanto.
        </p>
      </div>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#050505]" style={{ minHeight: "100vh" }}>

        {/* ── Orbe de fundo ── */}
        <div
          className="absolute top-[-100px] left-[-100px] w-[700px] h-[700px] rounded-full pointer-events-none z-0"
          style={{
            background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)",
            filter: "blur(80px)",
            animation: "orb-drift 30s ease-in-out infinite",
          }}
        />


        {/* ── Eduardo desktop — apenas na metade direita ── */}
        <div className="absolute inset-y-0 right-0 z-0 hidden md:block" style={{ width: "52%" }}>
          <Image
            src={EDUARDO}
            alt="Eduardo Barros"
            fill
            priority
            sizes="52vw"
            className="object-cover"
            style={{ objectPosition: "left top" }}
          />
          {/* Fade da esquerda */}
          <div className="absolute inset-y-0 left-0 w-56 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
          {/* Fade do rodapé */}
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none" />
        </div>

        {/* ── Texto decorativo de fundo ── */}
        <div
          className="absolute bottom-16 left-0 z-10 pointer-events-none select-none hidden md:block"
          style={{
            fontFamily: "var(--font-bebas), sans-serif",
            fontSize: "clamp(160px, 20vw, 280px)",
            lineHeight: 1,
            color: "rgba(16,185,129,0.035)",
            letterSpacing: "0.05em",
            whiteSpace: "nowrap",
          }}
        >
          MPN-ON
        </div>

        {/* ══ MOBILE ══ */}
        <div className="md:hidden relative z-20 flex flex-col">
          {/* Foto do Eduardo — ocupa o topo */}
          <div className="relative w-full overflow-hidden" style={{ height: "72vh" }}>
            <Image
              src={EDUARDO}
              alt="Eduardo Barros"
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: "center top", transform: "translateX(22%)" }}
            />
            {/* Logo sobre a foto */}
            <div className="absolute top-4 left-5 z-10">
              <Image
                src={LOGO}
                alt="MPN-On"
                width={400}
                height={120}
                style={{ height: "auto" }}
                className="w-28 drop-shadow-[0_0_20px_rgba(16,185,129,0.6)]"
              />
            </div>

            {/* Headline no vazio à esquerda do rosto */}
            <div className="absolute left-4 z-20 pr-[50%]" style={{ top: "20%" }}>
              {/* Label */}
              <span className="text-emerald-400 text-[9px] font-bold uppercase tracking-[0.3em] block mb-0.5">
                Conheça o
              </span>
              {/* MÉTODO — outline fantasma */}
              <p className="font-bebas leading-[0.9] tracking-wide"
                style={{
                  fontSize: "clamp(44px,12vw,68px)",
                  WebkitTextStroke: "1.5px rgba(255,255,255,0.65)",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}>
                MÉTODO
              </p>
              {/* MPN — sólido grande gradiente */}
              <p className="font-bebas leading-[0.85] tracking-tight"
                style={{
                  fontSize: "clamp(64px,17vw,96px)",
                  backgroundImage: "linear-gradient(110deg, #6ee7b7 0%, #10b981 50%, #059669 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 18px rgba(16,185,129,0.5))",
                }}>
                MPN
              </p>
              {/* Acento */}
              <div className="flex items-center gap-2 mt-1">
                <div className="w-6 h-0.5 bg-emerald-500" />
                <span className="text-gray-500 text-[9px] uppercase tracking-widest">Meu Primeiro Negócio</span>
              </div>
            </div>

            {/* Fade suave do ombro até desaparecer completamente */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(to bottom, transparent 20%, rgba(5,5,5,0.15) 38%, rgba(5,5,5,0.55) 55%, rgba(5,5,5,0.85) 70%, rgba(5,5,5,0.97) 84%, #050505 100%)",
              }}
            />
          </div>

          {/* Conteúdo — sobe sobre o fade */}
          <div className="relative z-10 bg-[#050505] px-5 pt-4 pb-8 flex flex-col gap-3 -mt-24">
            <p className="text-base text-gray-300 leading-relaxed">
              Crie lojas Shopify para negócios locais e cobre{" "}
              <strong className="text-white">R$600 a R$1.500 por projeto</strong>.
              Monte também seu próprio e-commerce com dropshipping nacional.
            </p>

            <p className="text-sm text-gray-500 leading-relaxed">
              Sem seguidores. Sem tráfego pago. Sem programar.{" "}
              <span className="text-emerald-400 font-semibold">Só o método.</span>
            </p>

            <div className="flex items-baseline gap-2">
              <span className="text-gray-500 text-xs">Tudo por</span>
              <span className="text-xl font-extrabold text-white">R$297</span>
              <span className="text-gray-600 text-xs">ou 3x de R$105</span>
            </div>
            <CTAButton href="#oferta">QUERO MEU PRIMEIRO NEGÓCIO ONLINE</CTAButton>
            <TrustBadges />
            <p className="text-gray-600 text-xs border-t border-white/5 pt-3">
              ↓ Como um e-commerce sem estoque faturou R$37k em 90 dias? Continue lendo.
            </p>
          </div>
        </div>

        {/* ══ DESKTOP ══ */}
        <div
          className="hidden md:flex relative z-20 flex-col justify-center px-12 lg:px-20"
          style={{ minHeight: "100vh", maxWidth: "58%" }}
        >
          <Image
            src={LOGO}
            alt="MPN-On"
            width={400}
            height={120}
            style={{ height: "auto" }}
            className="w-48 mb-6 drop-shadow-[0_0_20px_rgba(16,185,129,0.5)]"
          />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 self-start bg-emerald-500/10 border border-emerald-500/25 rounded-full px-4 py-1.5 mb-6">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">
              CEO · Impulso Digital · Fundador da UrbanFeet
            </span>
          </div>

          {/* Linha de acento */}
          <div className="w-12 h-0.5 bg-emerald-500 mb-5" />

          {/* Headline desktop */}
          <div className="mb-5">
            <h1 className="font-bebas text-[clamp(72px,7.5vw,116px)] leading-none tracking-wide text-white">
              Crie Lojas
            </h1>
            <h1
              className="font-bebas text-[clamp(72px,7.5vw,116px)] leading-none tracking-wide"
              style={{
                backgroundImage: "linear-gradient(105deg, #34d399 0%, #10b981 40%, #6ee7b7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Shopify
            </h1>
            <h2 className="font-bebas text-[clamp(24px,2.8vw,42px)] leading-none tracking-widest text-gray-500 mt-1">
              e cobre R$600 a R$1.500 por projeto
            </h2>
          </div>

          <p className="text-base text-gray-300 leading-relaxed max-w-lg mb-2">
            Todo empreendedor que vende pelo Instagram ou WhatsApp precisa de uma loja
            online. Eles só não sabem como fazer — e não têm R$2.000 pra pagar agência.{" "}
            <strong className="text-white">É aí que você entra.</strong>
          </p>

          <p className="text-sm font-bold text-emerald-400 max-w-md mb-5">
            Dois negócios dentro de um curso. Feito por quem abre agência, não por quem
            ensina teoria.
          </p>

          {/* Price */}
          <div className="flex items-baseline gap-2 mb-5">
            <span className="text-gray-500 text-sm">Tudo por</span>
            <span className="text-3xl font-extrabold text-white">R$297</span>
            <span className="text-gray-600 text-sm">ou 3x de R$105</span>
          </div>

          <div className="flex flex-col gap-3 w-full max-w-sm">
            <CTAButton href="#oferta">QUERO MEU PRIMEIRO NEGÓCIO ONLINE</CTAButton>
            <TrustBadges />
            <p className="text-gray-600 text-xs border-t border-white/5 pt-2">
              ↓ Como um e-commerce sem estoque faturou R$37k em 90 dias? Continue lendo.
            </p>
          </div>
        </div>
      </section>

      {/* ── Ticker ── */}
      <Ticker />
    </>
  );
}
