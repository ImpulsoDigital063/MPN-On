import Image from "next/image";
import { Lock, ShieldCheck, Zap } from "lucide-react";
import CTAButton from "./CTAButton";

const LOGO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663305937026/Jey4huR4MGMLTE3MYskJ4P/MPN-On-corrigida_cf9701ef.png";
const EDUARDO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663305937026/Jey4huR4MGMLTE3MYskJ4P/eduardo_hero_left_nobg_9a391c6c.png";

function TrustBadges() {
  return (
    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
      <span className="flex items-center gap-1">
        <Lock className="w-3.5 h-3.5" /> Pagamento Seguro
      </span>
      <span className="flex items-center gap-1">
        <ShieldCheck className="w-3.5 h-3.5" /> Garantia 7 dias
      </span>
      <span className="flex items-center gap-1">
        <Zap className="w-3.5 h-3.5" /> Acesso Imediato
      </span>
    </div>
  );
}

function Headline() {
  return (
    <h1 className="font-extrabold tracking-tight leading-[1.15]">
      Aprenda a Criar Lojas Online{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-500">
        e Fature do Zero
      </span>{" "}
      Sem Saber Programar
    </h1>
  );
}

export default function Hero() {
  return (
    <>
      {/* ── Top Banner ── */}
      <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 py-2.5 text-center border-b border-emerald-500/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(16,185,129,0.1)_50%,transparent_100%)] animate-pulse" />
        <p className="text-sm md:text-base font-medium text-white relative z-10">
          Vagas limitadas para a próxima turma com{" "}
          <strong className="text-emerald-300">Bônus UrbanFeet</strong> +{" "}
          <strong className="text-emerald-300">Tema Exclusivo</strong> inclusos!
        </p>
      </div>

      {/* ── Hero Section ── */}
      <section
        className="relative overflow-hidden bg-[#0a0a0a]"
        style={{ minHeight: "100vh" }}
      >
        {/* Background glows */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-emerald-900/40 via-black to-black z-0" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px] z-0" />
        <div className="absolute top-20 right-0 w-[400px] h-[600px] bg-emerald-500/5 rounded-full blur-[100px] z-0" />

        <div className="relative" style={{ minHeight: "100vh" }}>
          {/* ── Mobile Layout ── */}
          {/* Eduardo as full background image */}
          <div className="absolute inset-0 md:hidden z-0">
            <Image
              src={EDUARDO}
              alt="Eduardo Barros"
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: "right top", transform: "translateX(25%)" }}
            />
          </div>
          {/* Gradient overlay (mobile) */}
          <div
            className="absolute inset-0 z-10 pointer-events-none md:hidden"
            style={{
              background:
                "linear-gradient(rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.15) 45%, rgba(10,10,10,0.92) 65%, rgb(10,10,10) 80%)",
            }}
          />
          {/* Mobile content */}
          <div
            className="md:hidden relative z-20 flex flex-col"
            style={{ minHeight: "100vh" }}
          >
            <div className="px-5 pt-3">
              <Image
                src={LOGO}
                alt="MPN-On"
                width={400}
                height={120}
                style={{ height: "auto" }}
                className="w-40 drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]"
              />
            </div>
            <div className="flex-1" />
            <div
              className="px-5 pb-8 flex flex-col gap-2"
              style={{ minHeight: "45vh" }}
            >
              <Headline />
              <p className="text-base text-gray-200 leading-snug font-medium">
                Enquanto todo mundo briga por seguidores, você vai estar
                faturando criando lojas para eles
              </p>
              <p className="text-sm font-bold text-emerald-400">
                Dois métodos reais, dois negócios prontos — e nenhum depende de
                algoritmo ou seguidores.
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                Em <strong className="text-white">29 aulas práticas</strong>,
                crie lojas completas e cobre{" "}
                <strong className="text-emerald-400">
                  a partir de R$ 600 por loja
                </strong>
                .
              </p>
              <div className="flex flex-col items-start gap-2 pt-1">
                <CTAButton>QUERO COMEÇAR AGORA</CTAButton>
                <TrustBadges />
              </div>
            </div>
          </div>

          {/* ── Desktop Layout (2-column grid) ── */}
          <div
            className="hidden md:grid relative z-20"
            style={{ minHeight: "100vh", gridTemplateColumns: "1fr 1fr" }}
          >
            {/* Left column: copy */}
            <div className="flex flex-col justify-center px-12 lg:px-16 pt-16 pb-8">
              <Image
                src={LOGO}
                alt="MPN-On"
                width={400}
                height={120}
                style={{ height: "auto" }}
                className="w-64 mb-3 drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]"
              />
              <Headline />
              <p className="text-lg text-gray-200 mb-3 mt-3 leading-relaxed font-medium">
                Enquanto todo mundo briga por seguidores, você vai estar
                faturando criando lojas para eles
              </p>
              <p className="text-base font-bold mb-4 text-emerald-400">
                Dois métodos reais, dois negócios prontos — e nenhum depende de
                algoritmo ou seguidores.
              </p>
              <p className="text-base text-gray-300 mb-6 leading-relaxed">
                Em <strong className="text-white">29 aulas práticas</strong>,
                crie lojas completas e cobre{" "}
                <strong className="text-emerald-400">
                  a partir de R$ 600 por loja
                </strong>
                .
              </p>
              <div className="flex flex-col items-start gap-3 w-full max-w-sm">
                <CTAButton>QUERO COMEÇAR AGORA</CTAButton>
                <TrustBadges />
              </div>
            </div>
            {/* Right column: Eduardo full cover */}
            <div className="relative overflow-hidden" style={{ minHeight: "100vh" }}>
              <Image
                src={EDUARDO}
                alt="Eduardo Barros"
                fill
                priority
                sizes="50vw"
                className="object-cover"
                style={{ objectPosition: "left top" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
