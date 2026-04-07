import AnimateIn from "./AnimateIn";

function ShopifyLogo() {
  return (
    <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
      <path d="M32 42 Q32 20 50 20 Q68 20 68 42" stroke="#95BF47" strokeWidth="8" fill="none" strokeLinecap="round"/>
      <rect x="16" y="38" width="68" height="56" rx="7" fill="#95BF47"/>
      <path d="M44 57 Q44 51 50 51 Q57 51 57 57.5 Q57 64 50 64 Q43 64 43 70.5 Q43 77 50 77 Q57 77 57 71" stroke="white" strokeWidth="4.5" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

function YampiLogo() {
  return (
    <svg viewBox="0 0 90 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
      <rect width="90" height="36" rx="8" fill="#5B4EFF" fillOpacity="0.15"/>
      <text x="45" y="24" textAnchor="middle" fill="#8B80FF" fontWeight="800" fontSize="16" fontFamily="Arial, sans-serif" letterSpacing="1">yampi</text>
    </svg>
  );
}

function MercadoPagoLogo() {
  return (
    <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
      <circle cx="22" cy="22" r="22" fill="#009EE3" fillOpacity="0.15"/>
      <circle cx="22" cy="22" r="18" stroke="#009EE3" strokeWidth="1.5" fill="none"/>
      <text x="22" y="27" textAnchor="middle" fill="#009EE3" fontWeight="900" fontSize="13" fontFamily="Arial, sans-serif">MP</text>
    </svg>
  );
}

function MelhorEnvioLogo() {
  return (
    <svg viewBox="0 0 100 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
      <rect width="100" height="44" rx="8" fill="#2DB84B" fillOpacity="0.12"/>
      <path d="M12 28 L12 20 L20 20 L26 26 L26 28 Z" fill="#2DB84B" opacity="0.8"/>
      <circle cx="16" cy="30" r="2.5" fill="#2DB84B"/>
      <circle cx="24" cy="30" r="2.5" fill="#2DB84B"/>
      <text x="56" y="28" textAnchor="middle" fill="#2DB84B" fontWeight="800" fontSize="11" fontFamily="Arial, sans-serif">Melhor Envio</text>
    </svg>
  );
}

function CanvaLogo() {
  return (
    <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
      <circle cx="22" cy="22" r="22" fill="#00C4CC" fillOpacity="0.15"/>
      <path d="M22 10 C28 10 34 15 34 22 C34 30 28 34 22 34 C18 34 15 32 13 29 C11 26 11 18 13 15 C15 12 18 10 22 10Z" fill="#00C4CC" fillOpacity="0.8"/>
      <path d="M18 22 C18 18 22 14 26 17 C23 17 20 20 20 24 C20 28 23 31 26 29 C22 31 18 28 18 22Z" fill="white"/>
    </svg>
  );
}

function AnyDeskLogo() {
  return (
    <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
      <circle cx="22" cy="22" r="22" fill="#EF2020" fillOpacity="0.12"/>
      <path d="M14 28 L22 14 L30 28 Z" fill="#EF2020" fillOpacity="0.8"/>
      <path d="M18 24 L26 24" stroke="white" strokeWidth="2"/>
    </svg>
  );
}

const brands = [
  { name: "Shopify", logo: <ShopifyLogo />, desc: "Plataforma da loja" },
  { name: "Yampi", logo: <YampiLogo />, desc: "Checkout" },
  { name: "Mercado Pago", logo: <MercadoPagoLogo />, desc: "Pagamentos" },
  { name: "Melhor Envio", logo: <MelhorEnvioLogo />, desc: "Fretes" },
  { name: "Canva", logo: <CanvaLogo />, desc: "Design" },
  { name: "AnyDesk", logo: <AnyDeskLogo />, desc: "Entrega ao cliente" },
];

export default function BrandStrip() {
  return (
    <section className="py-14 border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      <div className="container max-w-5xl mx-auto px-4 relative z-10">
        <AnimateIn from="bottom">
          <p className="text-center text-gray-600 text-xs uppercase tracking-widest font-bold mb-8">
            Ferramentas que você vai dominar
          </p>
        </AnimateIn>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {brands.map((b, i) => (
            <AnimateIn key={b.name} from="bottom" delay={i * 80}>
              <div className="flex flex-col items-center gap-2 p-4 bg-white/[0.03] border border-white/8 rounded-2xl hover:border-emerald-500/30 hover:bg-white/[0.05] transition-all group cursor-default">
                <div className="transition-transform group-hover:scale-110 duration-300">
                  {b.logo}
                </div>
                <p className="text-white text-xs font-bold text-center leading-tight">{b.name}</p>
                <p className="text-gray-600 text-[10px] text-center">{b.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
