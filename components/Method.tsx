import { DollarSign, Package, CircleCheck, Star } from "lucide-react";
import AnimateIn from "./AnimateIn";

export default function Method() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.025)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-60" />
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[700px] h-[400px] bg-emerald-500/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-5xl mx-auto px-4 relative z-10">
        <AnimateIn from="bottom">
          <div className="text-center mb-16">
            <p className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-4">O Método MPN-On</p>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              Dois Negócios.{" "}
              <span className="text-emerald-400">Uma Renda Dupla.</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              O MPN-On te ensina a faturar de{" "}
              <strong className="text-white">duas formas diferentes</strong> ao mesmo tempo. Enquanto cria lojas para clientes e cobra por isso, você também monta seu próprio e-commerce.
            </p>
          </div>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimateIn from="left" delay={100}>
            <div className="relative bg-white/[0.03] border border-emerald-500/30 rounded-2xl p-8 overflow-hidden hover:border-emerald-500/50 transition-all group h-full">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />
              <div className="absolute top-0 right-0 bg-emerald-500 text-black text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-xl">NEGÓCIO 1</div>
              <span className="absolute bottom-4 right-5 font-bebas text-[100px] text-emerald-500/[0.06] leading-none select-none">01</span>
              <div className="bg-emerald-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-emerald-500/20">
                <DollarSign className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Crie Lojas para Clientes</h3>
              <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                Aprenda a criar lojas Shopify profissionais em até 3 dias e cobre de{" "}
                <strong className="text-white">R$ 600 a R$ 1.500 por projeto</strong>. Negócios locais estão desesperados por presença online.
              </p>
              <div className="space-y-2 mb-8">
                {["Pet shops, roupas, calçados, suplementos, joias", "Profissionais liberais e produtores artesanais", "Qualquer negócio local sem presença digital"].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-gray-300">
                    <CircleCheck className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-emerald-500/8 border border-emerald-500/20 rounded-xl p-4 text-center">
                <p className="text-xs text-gray-400 mb-1">Potencial mensal (3 lojas)</p>
                <p className="font-bebas text-3xl text-emerald-400">R$ 1.800 a R$ 4.500</p>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn from="right" delay={100}>
            <div className="relative bg-white/[0.03] border border-amber-500/30 rounded-2xl p-8 overflow-hidden hover:border-amber-500/50 transition-all group h-full">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />
              <div className="absolute top-0 right-0 bg-amber-500 text-black text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-xl">NEGÓCIO 2 (BÔNUS)</div>
              <span className="absolute bottom-4 right-5 font-bebas text-[100px] text-amber-500/[0.06] leading-none select-none">02</span>
              <div className="bg-amber-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-amber-500/20">
                <Package className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Sua Loja Própria de Calçados</h3>
              <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                Crie seu próprio e-commerce com <strong className="text-white">dropshipping nacional</strong>. Fornecedor brasileiro, entrega rápida.{" "}
                <strong className="text-amber-400">Sem tocar em nenhuma caixa de sapato.</strong>
              </p>
              <div className="space-y-2 mb-8">
                {["Fornecedor nacional exclusivo", "800+ mídias profissionais inclusas", "Operação 100% automática"].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-gray-300">
                    <Star className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-amber-500/8 border border-amber-500/20 rounded-xl p-4 text-center">
                <p className="text-xs text-gray-400 mb-1">Potencial mensal (50 pares)</p>
                <p className="font-bebas text-3xl text-amber-400">R$ 3.500+</p>
              </div>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn from="bottom" delay={200}>
          <div className="text-center mt-12">
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Você sabe o que é possível. Agora veja o que você leva para fazer isso acontecer.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
