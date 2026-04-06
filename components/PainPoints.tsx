import { X } from "lucide-react";

const pains = [
  {
    title: '"Mas eu nem sei programar..."',
    desc: "Essa é a objeção mais comum. E é exatamente por isso que o MPN-On foi criado. Você não vai escrever uma linha de código. Só vai apertar os mesmos botões que eu mostro nas aulas.",
  },
  {
    title: '"Nunca mexi nessas coisas..."',
    desc: "Perfeito. O curso foi feito para quem começa do zero. Cada aula é gravada na tela, mostrando cada clique, cada configuração, sem pular etapas.",
  },
  {
    title: '"Agencia cobra mais de R$ 2.000..."',
    desc: "Exato. E é essa barreira que cria uma oportunidade enorme para você. Pequenos empreendedores precisam de loja online mas não têm esse orçamento. Você entra com um preço justo e sai com o serviço feito.",
  },
  {
    title: '"Não tenho dinheiro para estoque..."',
    desc: "Com o modelo de dropshipping do módulo bônus, você vende primeiro e o fornecedor entrega. Sem estoque, sem caixas, sem risco. A loja trabalha por você.",
  },
];

export default function PainPoints() {
  return (
    <section className="py-20 md:py-28 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute right-0 top-1/4 w-[300px] h-[300px] bg-emerald-900/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="container max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
          Você se identifica com{" "}
          <span className="text-red-400">alguma dessas situações</span>?
        </h2>
        <p className="text-lg text-gray-400 mb-14 max-w-2xl mx-auto">
          Se respondeu &quot;sim&quot; para pelo menos uma, o MPN-On foi feito para você.
        </p>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          {pains.map((p) => (
            <div
              key={p.title}
              className="bg-black/60 border border-red-500/10 rounded-xl p-6 hover:border-red-500/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="bg-red-500/10 p-2 rounded-lg flex-shrink-0">
                  <X className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
