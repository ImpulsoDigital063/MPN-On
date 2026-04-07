"use client";

import { ArrowRight, ShieldCheck } from "lucide-react";
import { useScrollDirection } from "@/hooks/useScrollDirection";

const KIWIFY_URL = "https://pay.kiwify.com.br/JNVhxLE";

export default function StickyBuyBar() {
  const { direction, pastHero } = useScrollDirection();
  const visible = pastHero && direction === "up";

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-black/95 border-t border-emerald-500/40 backdrop-blur-md shadow-[0_-4px_30px_rgba(16,185,129,0.15)]">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="hidden sm:block flex-1 min-w-0">
            <p className="text-white font-bold text-sm truncate">
              MPN-On — Meu Primeiro Negócio Online
            </p>
            <p className="text-gray-400 text-xs">
              2 negócios prontos · Tema Exclusivo · Garantia 7 dias
            </p>
          </div>
          <div className="flex items-center gap-3 ml-auto">
            <div className="text-right hidden xs:block">
              <p className="text-emerald-400 font-extrabold text-lg leading-none">
                R$ 297
              </p>
              <p className="text-gray-500 text-xs">ou 3x de R$105 no cartão</p>
            </div>
            <a
              href={KIWIFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-track="cta"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm px-5 py-3 rounded-full transition-all hover:scale-105 whitespace-nowrap shadow-[0_0_20px_rgba(16,185,129,0.4)]"
            >
              GARANTIR VAGA <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </a>
            <div className="hidden md:flex items-center gap-1 text-gray-500 text-xs">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>7 dias</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
