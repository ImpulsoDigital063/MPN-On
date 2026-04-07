import { ShieldCheck, AlertTriangle, CircleCheck } from "lucide-react";
import CTAButton from "./CTAButton";

const items = [
  { label: "Treinamento MPN-On Completo (4 Módulos)", price: "R$ 1.997", highlight: false },
  { label: "Tema de Alta Conversão (4 Fretes + WhatsApp)", price: "R$ 997", highlight: true },
  { label: "Módulo UrbanFeet (Fornecedor + Mídias + Produtos)", price: "R$ 1.497", highlight: true },
  { label: "Scripts de Prospecção e Venda", price: "R$ 297", highlight: false },
  { label: "29 PDFs de Apoio (um por aula, com todos os links)", price: "R$ 197", highlight: false },
];

export default function Pricing() {
  return (
    <section id="oferta" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-4xl mx-auto relative z-10 px-4">
        {/* Urgency banner */}
        <div className="flex items-center justify-center gap-2 bg-amber-500/8 border border-amber-500/25 rounded-xl px-5 py-3 mb-8 text-center">
          <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <p className="text-amber-300 text-sm">
            <strong className="text-amber-400">Lançamento:</strong> O Módulo Bônus UrbanFeet e o Tema Exclusivo estão inclusos apenas neste período.
          </p>
        </div>

        {/* Main card */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
          <div className="relative bg-gradient-to-b from-white/[0.04] to-black/80 backdrop-blur-sm p-8 md:p-12 text-center">

            <h2 className="text-3xl md:text-4xl font-extrabold mb-10">
              Tudo que você recebe por{" "}
              <span className="text-emerald-400">R$297</span>
            </h2>

            {/* Items list */}
            <div className="max-w-lg mx-auto mb-12 space-y-0">
              {items.map((item) => (
                <div
                  key={item.label}
                  className={`flex justify-between items-center py-3.5 border-b border-white/5 ${item.highlight ? "text-amber-400" : "text-gray-400"}`}
                >
                  <div className="flex items-center gap-2 text-left text-sm md:text-base">
                    <CircleCheck className={`w-4 h-4 flex-shrink-0 ${item.highlight ? "text-amber-500" : "text-emerald-600"}`} />
                    <span>{item.label}</span>
                  </div>
                  <span className="line-through text-sm whitespace-nowrap ml-4 opacity-50">{item.price}</span>
                </div>
              ))}
              <div className="pt-5 flex justify-between items-center text-xl md:text-2xl font-extrabold">
                <span className="text-gray-300">Valor Total:</span>
                <span className="line-through text-red-500 opacity-70">R$ 4.985</span>
              </div>
            </div>

            {/* Price highlight */}
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl blur-xl" />
              <div className="relative bg-emerald-500/8 border border-emerald-500/25 rounded-2xl px-10 py-6">
                <p className="text-gray-400 text-sm mb-1">No lançamento, você leva tudo por:</p>
                <p className="font-bebas text-[clamp(56px,8vw,88px)] text-emerald-400 leading-none">R$ 297</p>
                <p className="text-gray-500 text-sm mt-1">ou 3x de R$ 99,00 no cartão</p>
              </div>
            </div>

            <div className="max-w-sm mx-auto">
              <CTAButton>QUERO ENTRAR AGORA POR R$297</CTAButton>
            </div>
            <p className="mt-4 text-sm text-gray-500 flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Garantia incondicional de 7 dias
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
