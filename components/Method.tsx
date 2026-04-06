import { DollarSign, Package, CircleCheck, Star } from "lucide-react";

export default function Method() {
  return (
    <section className="py-20 md:py-28 bg-white/[0.02] border-y border-white/5">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4">O Método MPN-On</p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Dois Negócios.{" "}
            <span className="text-emerald-400">Uma Renda Dupla.</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            O MPN-On te ensina a faturar de{" "}
            <strong className="text-white">duas formas diferentes</strong> ao mesmo tempo. Enquanto cria lojas para clientes e cobra por isso, você também monta seu próprio e-commerce.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Negócio 1 */}
          <div className="bg-black border border-emerald-500/30 rounded-2xl p-8 text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-500 text-black text-xs font-bold px-4 py-1.5 rounded-bl-xl">
              NEGÓCIO 1
            </div>
            <div className="bg-emerald-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <DollarSign className="w-7 h-7 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Crie Lojas para Clientes</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Aprenda a criar lojas Shopify profissionais em até 3 dias e cobre de{" "}
              <strong className="text-white">R$ 600 a R$ 1.500 por projeto</strong>. Negócios locais estão desesperados por presença online.
            </p>
            <div className="space-y-3">
              {[
                "Pet shops, lojas de roupas, calçados, suplementos, joias, cosméticos, artesanato",
                "Profissionais liberais",
                "Produtores artesanais",
                "Revendedores locais",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-300">
                  <CircleCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 text-center">
              <p className="text-sm text-gray-400">Potencial mensal (3 lojas)</p>
              <p className="text-3xl font-extrabold text-emerald-400">R$ 1.800 a R$ 4.500</p>
            </div>
          </div>

          {/* Negócio 2 (Bônus) */}
          <div className="bg-black border border-amber-500/30 rounded-2xl p-8 text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-amber-500 text-black text-xs font-bold px-4 py-1.5 rounded-bl-xl">
              NEGÓCIO 2 (BÔNUS)
            </div>
            <div className="bg-amber-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Package className="w-7 h-7 text-amber-400" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Sua Loja Própria de Calçados</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Crie seu próprio e-commerce de calçados —{" "}
              <strong className="text-white">com o nome que você quiser</strong>. Dropshipping nacional: venda primeiro, compre depois.{" "}
              <strong className="text-amber-400">Sem tocar em nenhuma caixa de sapato.</strong> Vou usar minha loja{" "}
              <strong className="text-white">UrbanFeet</strong> como exemplo ao vivo.
            </p>
            <div className="space-y-3">
              {[
                "Fornecedor nacional exclusivo",
                "800+ mídias profissionais inclusas",
                "Lista de produtos vencedores",
                "Operação 100% automática",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-300">
                  <Star className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 text-center">
              <p className="text-sm text-gray-400">Potencial mensal (50 pares)</p>
              <p className="text-3xl font-extrabold text-amber-400">R$ 3.500+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
