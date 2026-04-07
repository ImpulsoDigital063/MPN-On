"use client";

import { useState } from "react";
import { X } from "lucide-react";

const WA_NUMBER = "5599992065961";
const WA_URL = `https://wa.me/${WA_NUMBER}?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20sobre%20o%20MPN-On!`;

export default function WhatsAppButton() {
  const [tooltip, setTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-2">
      {tooltip && (
        <div className="flex items-center gap-2 bg-[#0f0f0f] border border-emerald-500/30 rounded-xl px-3 py-2 shadow-2xl max-w-[200px] animate-[fadeSlideIn_0.3s_ease]">
          <p className="text-white text-xs leading-snug flex-1">
            Dúvidas? Fala comigo no WhatsApp!
          </p>
          <button
            onClick={() => setTooltip(false)}
            className="text-gray-500 hover:text-gray-300 flex-shrink-0 transition-colors"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_24px_rgba(37,211,102,0.4)] hover:shadow-[0_0_32px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300"
        style={{ background: "#25d366" }}
      >
        <svg viewBox="0 0 32 32" className="w-8 h-8" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 3C8.82 3 3 8.82 3 16c0 2.34.63 4.63 1.82 6.64L3 29l6.54-1.79A13 13 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23.85a10.8 10.8 0 0 1-5.53-1.52l-.4-.24-4.12 1.13 1.1-4-.27-.42A10.85 10.85 0 1 1 16 26.85zm5.94-8.12c-.32-.16-1.9-.94-2.2-1.05-.29-.1-.5-.16-.71.16-.21.32-.82 1.05-1 1.27-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.18-.32-.02-.5.14-.66.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.53-.71-.54h-.6c-.21 0-.54.08-.82.4-.29.32-1.09 1.07-1.09 2.6s1.12 3.01 1.27 3.22c.16.21 2.2 3.36 5.33 4.71.74.32 1.32.51 1.77.66.74.24 1.42.2 1.95.12.6-.09 1.9-.78 2.17-1.53.27-.74.27-1.38.19-1.53-.08-.14-.29-.21-.61-.37z"/>
        </svg>
      </a>
    </div>
  );
}
