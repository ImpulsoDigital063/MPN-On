import Image from "next/image";

const LOGO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663305937026/Jey4huR4MGMLTE3MYskJ4P/MPN-On-corrigida_cf9701ef.png";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-black text-center md:text-left">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-6 px-4">
        <div className="flex items-center gap-3">
          <Image
            src={LOGO}
            alt="MPN-On"
            width={400}
            height={120}
            style={{ height: "auto" }}
            className="w-24"
          />
          <div>
            <span className="font-bold text-lg tracking-tight block text-white">
              MPN-On
            </span>
            <span className="text-xs text-gray-500">Por Eduardo Barros</span>
          </div>
        </div>
        <div className="text-gray-500 text-sm text-center md:text-right">
          <p>© 2026 MPN-On. Todos os direitos reservados.</p>
          <p className="text-xs mt-1">
            Eduardo Barros - CNPJ 64.585.949/0001-83
          </p>
        </div>
      </div>
    </footer>
  );
}
