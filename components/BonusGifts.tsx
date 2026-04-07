import { Layers, Truck, FileText, ShoppingBag } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import CTAButton from "./CTAButton";
import AnimateIn from "./AnimateIn";

interface Gift {
  icon: LucideIcon;
  tag: string;
  title: string;
  description: string;
  value: string;
  badge: string;
  color: "amber" | "emerald";
}

const gifts: Gift[] = [
  {
    icon: Layers,
    tag: "BÔNUS 1",
    title: "Tema Exclusivo MPN-On",
    description:
      "O tema que eu uso em todos os meus projetos. Já vem com 4 opções de frete, botão de WhatsApp e design que converte. Sem ele, metade do que você vai aprender não funciona.",
    value: "R$ 1.000",
    badge: "Incluso no curso",
    color: "amber",
  },
  {
    icon: Truck,
    tag: "BÔNUS 2",
    title: "Contato do Fornecedor Nacional",
    description:
      "O mesmo fornecedor da UrbanFeet — 3 anos de parceria. Seu cliente compra, ele entrega. Sem AliExpress, sem produto parado na alfândega. Você recebe o contato direto.",
    value: "Acesso exclusivo",
    badge: "Parceiro validado",
    color: "emerald",
  },
  {
    icon: FileText,
    tag: "BÔNUS 3",
    title: "29 PDFs de Apoio",
    description:
      "Um PDF por aula — com o passo a passo escrito e todos os links das ferramentas. Quando travar, é só abrir e seguir.",
    value: "R$ 197",
    badge: "Um por aula",
    color: "emerald",
  },
  {
    icon: ShoppingBag,
    tag: "BÔNUS 4",
    title: "Módulo UrbanFeet ao Vivo",
    description:
      "Eu abro minha loja ao vivo e recrio do zero com você. Cada decisão, cada clique — você acompanha e replica.",
    value: "R$ 1.497",
    badge: "Incluso no curso",
    color: "amber",
  },
];

export default function BonusGifts() {
  const totalValue = "R$ 2.694+";

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/6 via-transparent to-transparent z-0" />
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-amber-500/4 rounded-full blur-[130px] pointer-events-none" />

      <div className="container max-w-5xl mx-auto relative z-10 px-4">
        <AnimateIn from="bottom">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Bônus Exclusivos</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-snug">
            Você não leva só um curso.{" "}
            <span className="text-amber-400">Leva tudo o que precisa pra começar.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Cada bônus foi pensado para tirar um obstáculo do seu caminho.
          </p>
        </div>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {gifts.map((g, i) => {
            const Icon = g.icon;
            const isAmber = g.color === "amber";
            const from = i % 2 === 0 ? "left" : "right" as "left" | "right";
            return (
              <AnimateIn key={g.tag} from={from} delay={i * 80}>
              <div
                className={`relative bg-white/[0.03] rounded-2xl p-6 flex flex-col border transition-all hover:scale-[1.01] overflow-hidden group ${
                  isAmber
                    ? "border-white/8 hover:border-amber-500/40"
                    : "border-white/8 hover:border-emerald-500/40"
                }`}
              >
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${isAmber ? "via-amber-500/40" : "via-emerald-500/40"} to-transparent`} />

                <div className={`absolute top-0 right-0 text-black text-[10px] font-extrabold px-3 py-1 rounded-bl-xl rounded-tr-xl ${isAmber ? "bg-amber-500" : "bg-emerald-500"}`}>
                  {g.tag}
                </div>

                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 border ${isAmber ? "bg-amber-500/10 border-amber-500/20" : "bg-emerald-500/10 border-emerald-500/20"}`}>
                  <Icon className={`w-5 h-5 ${isAmber ? "text-amber-400" : "text-emerald-400"}`} />
                </div>

                <h3 className="text-base font-extrabold text-white mb-3">{g.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">{g.description}</p>

                <div className={`mt-5 rounded-xl p-3 flex items-center justify-between border ${
                  isAmber ? "bg-amber-500/5 border-amber-500/15" : "bg-emerald-500/5 border-emerald-500/15"
                }`}>
                  <span className="text-gray-500 text-xs">{g.badge}</span>
                  <span className={`font-extrabold text-sm ${isAmber ? "text-amber-400" : "text-emerald-400"}`}>
                    {g.value}
                  </span>
                </div>
              </div>
              </AnimateIn>
            );
          })}
        </div>

        <p className="text-center text-gray-300 text-base mb-6">
          Se você fechar <strong className="text-white">1 cliente…</strong><br />
          <span className="text-emerald-400 font-semibold">o curso já se paga.</span>
        </p>

        <div className="relative bg-white/[0.03] border border-white/8 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-10 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
          <div>
            <p className="text-gray-400 text-sm mb-1">Valor total dos bônus</p>
            <p className="text-4xl font-extrabold text-white line-through opacity-40">{totalValue}</p>
            <p className="text-amber-400 font-bold mt-1 text-sm">Inclusos gratuitamente no MPN-On</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm mb-1">Você leva tudo por</p>
            <p className="font-bebas text-[clamp(48px,6vw,72px)] text-emerald-400 leading-none">R$297</p>
            <p className="text-gray-500 text-sm">ou 3x de R$105</p>
          </div>
        </div>

        <div className="max-w-sm mx-auto">
          <CTAButton href="#oferta">Quero começar agora</CTAButton>
        </div>

        <p className="text-center text-gray-600 text-sm mt-6">
          Quer ver aula por aula o que você vai aprender? ↓
        </p>
      </div>
    </section>
  );
}
