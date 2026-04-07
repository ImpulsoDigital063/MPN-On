"use client";

import { useEffect, useState, useCallback } from "react";
import { ShoppingBag, X } from "lucide-react";

const notifications = [
  { name: "Carlos M.", city: "São Paulo, SP" },
  { name: "Fernanda C.", city: "Rio de Janeiro, RJ" },
  { name: "Rafael O.", city: "Belo Horizonte, MG" },
  { name: "Mariana S.", city: "Curitiba, PR" },
  { name: "Lucas P.", city: "Fortaleza, CE" },
  { name: "Amanda L.", city: "Salvador, BA" },
  { name: "Thiago A.", city: "Brasília, DF" },
  { name: "Juliana F.", city: "Porto Alegre, RS" },
  { name: "Gabriel R.", city: "Natal, RN" },
  { name: "Camila S.", city: "Recife, PE" },
  { name: "Diego M.", city: "Goiânia, GO" },
  { name: "Larissa N.", city: "Florianópolis, SC" },
  { name: "Bruno T.", city: "Manaus, AM" },
  { name: "Patrícia V.", city: "Campinas, SP" },
  { name: "André B.", city: "Belém, PA" },
];

const times = ["agora mesmo", "há 1 min", "há 3 min", "há 5 min", "há 7 min", "há 9 min"];

// 1ª: 1 min, 2ª: 2 min, demais: 3 min
const DELAYS = [60_000, 120_000];
const REPEAT_INTERVAL = 180_000;

export default function SocialProofNotification() {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const [timeStr, setTimeStr] = useState("agora mesmo");

  const show = useCallback(() => {
    const idx = Math.floor(Math.random() * notifications.length);
    const t = times[Math.floor(Math.random() * times.length)];
    setCurrent(idx);
    setTimeStr(t);
    setVisible(true);
    setTimeout(() => setVisible(false), 6500);
  }, []);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    // 1ª aparição: 1 min
    timers.push(setTimeout(() => {
      show();

      // 2ª aparição: 2 min desde o início (1 min após a 1ª)
      timers.push(setTimeout(() => {
        show();

        // Demais: a cada 3 min
        const interval = setInterval(show, REPEAT_INTERVAL);
        timers.push(interval as unknown as ReturnType<typeof setTimeout>);
      }, DELAYS[1] - DELAYS[0]));

    }, DELAYS[0]));

    return () => timers.forEach(clearTimeout);
  }, [show]);

  const n = notifications[current];

  return (
    <div
      className={`fixed bottom-20 left-3 z-50 transition-all duration-500 ${
        visible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      }`}
    >
      <div className="bg-[#0f0f0f] border border-emerald-500/30 rounded-xl px-2.5 py-1.5 shadow-2xl flex items-center gap-2 max-w-[200px] md:max-w-[260px] backdrop-blur-md">
        <div className="bg-emerald-500/15 p-1 md:p-1.5 rounded-lg flex-shrink-0">
          <ShoppingBag className="w-3 h-3 md:w-4 md:h-4 text-emerald-400" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white text-[11px] md:text-xs font-bold leading-tight">
            {n.name}
          </p>
          <p className="text-gray-400 text-[10px] leading-tight">
            de {n.city} entrou no MPN-On
          </p>
          <p className="text-emerald-500 text-[10px] font-medium mt-0.5">{timeStr}</p>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="text-gray-600 hover:text-gray-400 flex-shrink-0 transition-colors"
        >
          <X className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
