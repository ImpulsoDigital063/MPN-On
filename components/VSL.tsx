"use client";

import { Play, Clock, Users, ChevronRight } from "lucide-react";
import AnimateIn from "./AnimateIn";
import CTAButton from "./CTAButton";
import { useState, useEffect } from "react";

const teasers = [
  "Por que negócios locais estão pagando até R$1.500 por algo simples — e como você pode fazer o mesmo",
  "O modelo que gerou R$37 mil em 90 dias — sem estoque, sem funcionário e sem sair de casa",
  "O erro que mantém a maioria travada — e como sair disso mesmo começando do zero",
  "Como entregar uma loja em poucos dias e receber no Pix ainda na mesma semana",
];

function LiveBadge() {
  const [count, setCount] = useState(47);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 3));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 bg-black/60 border border-white/10 rounded-full px-3 py-1.5 backdrop-blur-sm">
      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse flex-shrink-0" />
      <Users className="w-3.5 h-3.5 text-gray-400" />
      <span className="text-gray-300 text-xs font-medium">{count} assistindo agora</span>
    </div>
  );
}

export default function VSL() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-[#060606]">
      {/* Glow de fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.07)_0%,transparent_65%)] pointer-events-none" />

      <div className="container max-w-4xl mx-auto px-4 relative z-10">

        <AnimateIn from="bottom">
          {/* Cabeçalho */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-1.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-red-400 text-xs font-bold uppercase tracking-widest">Assista antes de continuar</span>
            </div>

            <h2 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
              Assista isso antes de tomar qualquer decisão sobre{" "}
              <span className="text-emerald-400">ganhar dinheiro online</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              Nos próximos minutos, você vai entender como sair do zero e fazer sua primeira renda online — mesmo sem experiência.
            </p>
          </div>

          {/* Teasers */}
          <div className="grid md:grid-cols-2 gap-3 mb-8">
            {teasers.map((t, i) => (
              <div key={i} className="flex items-start gap-3 bg-white/[0.03] border border-white/8 rounded-xl px-4 py-3">
                <ChevronRight className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-300 text-sm leading-snug">{t}</p>
              </div>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn from="bottom" delay={120}>
          {/* Player */}
          <div className="relative">
            {/* Glow atrás do vídeo */}
            <div className="absolute -inset-3 bg-emerald-500/10 rounded-3xl blur-xl pointer-events-none" />

            <div className="relative rounded-2xl overflow-hidden border border-emerald-500/40 shadow-[0_0_60px_rgba(16,185,129,0.18)]">
              {/* Barra superior do player */}
              <div className="absolute top-0 inset-x-0 z-10 flex items-center justify-between px-4 py-3 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
                <div className="flex items-center gap-2">
                  <div className="bg-emerald-500 rounded-full p-1">
                    <Play className="w-3 h-3 text-black fill-black" />
                  </div>
                  <span className="text-white text-xs font-bold">MPN-On — Vídeo de Apresentação</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                  <Clock className="w-3 h-3" />
                  <span>~15 min</span>
                </div>
              </div>

              <div className="w-full aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/e-6aTiYizWI?rel=0&modestbranding=1&enablejsapi=1"
                  title="VSL - MPN-On"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Aviso de retenção */}
            <p className="text-center text-yellow-500/80 text-xs font-medium mt-3 mb-1">
              ⚠️ Assista até o final — isso vai fazer sentido no final do vídeo.
            </p>

            {/* Abaixo do player */}
            <div className="flex items-center justify-between mt-2 px-1">
              <LiveBadge />
              <p className="text-gray-600 text-xs">Ative o som antes de começar</p>
            </div>
          </div>
        </AnimateIn>

        {/* CTA pós-vídeo */}
        <AnimateIn from="bottom" delay={200}>
          <div className="mt-10 text-center">
            <p className="text-gray-400 text-lg mb-2">
              Faz sentido pra você?
            </p>
            <p className="text-white font-semibold text-xl mb-6">
              Então a decisão é simples.
            </p>
            <div className="max-w-sm mx-auto">
              <CTAButton href="#oferta">VER O QUE ESTÁ INCLUSO POR R$297</CTAButton>
            </div>
            <p className="text-gray-600 text-xs mt-4">
              Ou continue lendo para entender cada detalhe. ↓
            </p>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
