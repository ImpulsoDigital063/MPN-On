"use client";

import { ArrowRight } from "lucide-react";

const KIWIFY_URL = "https://pay.kiwify.com.br/JNVhxLE";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function CTAButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  function handleClick() {
    window.gtag?.("event", "cta_click", {
      event_category: "conversion",
      event_label: typeof children === "string" ? children : "CTA",
    });
  }

  return (
    <a
      href={KIWIFY_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-3 relative bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-base md:text-xl px-6 md:px-14 py-6 md:py-8 rounded-full shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:shadow-[0_0_60px_rgba(16,185,129,0.6)] transition-all hover:scale-105 w-full whitespace-normal text-center leading-tight animate-[pulse-glow_2s_ease-in-out_infinite] ${className}`}
    >
      {children}
      <ArrowRight className="w-6 h-6 flex-shrink-0" />
    </a>
  );
}
