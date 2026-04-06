import { ShieldCheck } from "lucide-react";
import CTAButton from "./CTAButton";

const items = [
  { label: "Treinamento MPN-On Completo (4 Módulos)", price: "R$ 1.997", amber: false },
  { label: "Tema de Alta Conversão (4 Fretes + WhatsApp)", price: "R$ 997", amber: true },
  { label: "Módulo UrbanFeet (Fornecedor + Mídias + Produtos)", price: "R$ 1.497", amber: true },
  { label: "Scripts de Prospecção e Venda", price: "R$ 297", amber: false },
  { label: "Planilhas e Materiais Complementares", price: "R$ 197", amber: false },
];

export default function Pricing() {
  return (
    <section className="py-20 md:py-28 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container max-w-4xl mx-auto relative z-10 px-4">
        <div className="bg-gradient-to-b from-white/5 to-black border border-white/10 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

          <h2 className="text-3xl md:text-4xl font-extrabold mb-10 relative z-10">
            Tudo que você recebe por{" "}
            <span className="text-emerald-400">R$297</span>
          </h2>

          {/* Items list */}
          <div className="space-y-4 max-w-lg mx-auto mb-12 relative z-10">
            {items.map((item) => (
              <div
                key={item.label}
                className={`flex justify-between items-center pb-3 border-b border-white/5 ${item.amber ? "text-amber-400 font-medium" : "text-gray-400"}`}
              >
                <span className="text-left text-sm md:text-base">{item.label}</span>
                <span className="line-through text-sm md:text-base whitespace-nowrap ml-4">{item.price}</span>
              </div>
            ))}
            <div className="pt-6 flex justify-between items-center text-xl md:text-2xl font-extrabold">
              <span>Valor Total:</span>
              <span className="line-through text-red-500">R$ 4.985</span>
            </div>
          </div>

          {/* CTA */}
          <div className="relative z-10">
            <p className="text-gray-300 mb-2 text-lg">Mas no lançamento, você leva tudo isso por:</p>
            <div className="mb-8">
              <p className="text-5xl md:text-6xl font-extrabold text-emerald-400 mb-2">R$ 297</p>
              <p className="text-gray-400 text-sm">ou 3x de R$ 99,00 no cartão</p>
            </div>
            <div className="max-w-sm mx-auto">
              <CTAButton>QUERO GARANTIR MINHA VAGA</CTAButton>
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
