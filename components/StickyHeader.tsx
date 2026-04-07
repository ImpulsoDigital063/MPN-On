"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useScrollDirection } from "@/hooks/useScrollDirection";

const LOGO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663305937026/Jey4huR4MGMLTE3MYskJ4P/MPN-On-corrigida_cf9701ef.png";
const KIWIFY_URL = "https://pay.kiwify.com.br/JNVhxLE";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function StickyHeader() {
  const { direction, pastHero } = useScrollDirection();
  const visible = pastHero && direction === "down";

  function handleClick() {
    window.gtag?.("event", "cta_click", {
      event_category: "conversion",
      event_label: "sticky_header",
    });
  }

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 border-b border-white/8"
      style={{
        background: "rgba(5,5,5,0.85)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        transition: "opacity 350ms cubic-bezier(0.22,1,0.36,1), transform 350ms cubic-bezier(0.22,1,0.36,1)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div className="container max-w-6xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
        {/* Logo */}
        <Image
          src={LOGO}
          alt="MPN-On"
          width={300}
          height={90}
          style={{ height: "auto" }}
          className="w-20 md:w-24 flex-shrink-0"
        />

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Preço — só desktop */}
          <div className="hidden md:flex items-baseline gap-1.5 border-r border-white/10 pr-4">
            <span className="text-gray-500 text-xs">por apenas</span>
            <span className="text-white font-extrabold text-lg leading-none">R$297</span>
            <span className="text-gray-600 text-xs">ou 3x R$105</span>
          </div>

          {/* CTA */}
          <a
            href={KIWIFY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs md:text-sm px-4 py-2 rounded-full transition-all hover:scale-105 shadow-[0_0_16px_rgba(16,185,129,0.35)] whitespace-nowrap"
          >
            GARANTIR VAGA
            <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
          </a>
        </div>
      </div>
    </header>
  );
}
