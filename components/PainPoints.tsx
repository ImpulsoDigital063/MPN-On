import { LogOut, RefreshCw, ShieldAlert, WifiOff } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import AnimateIn from "./AnimateIn";

interface Pain {
  icon: LucideIcon;
  title: string;
  desc: string;
  from: "left" | "right";
}

const pains: Pain[] = [
  {
    icon: LogOut,
    title: "Você quer sair do emprego — mas toda ideia de negócio online parece fora do seu alcance",
    desc: "Parece que todo mundo que fatura no digital tem algum conhecimento que você não tem. Você assiste, pesquisa, tenta entender — e a sensação é sempre a mesma: isso é para os outros.",
    from: "left",
  },
  {
    icon: RefreshCw,
    title: "Você consome conteúdo de guru há meses e ainda não saiu do lugar",
    desc: "São cursos, vídeos, podcasts, e-books — e no final do dia você está mais confuso do que antes. A sensação de que está sempre começando e nunca chegando a lugar nenhum.",
    from: "right",
  },
  {
    icon: ShieldAlert,
    title: "Você tem medo de investir em mais uma coisa e não ver retorno",
    desc: "Já foi queimado antes. Já comprou algo que prometia e não entregou. E agora qualquer investimento parece mais uma armadilha do que uma oportunidade.",
    from: "left",
  },
  {
    icon: WifiOff,
    title: "Você não quer depender de seguidores, algoritmo ou tráfego pago para faturar",
    desc: "Toda estratégia que você encontra exige uma audiência que você não tem ou um orçamento para anúncios que você não quer gastar. Parece que o digital foi feito só para quem já chegou.",
    from: "right",
  },
];

export default function PainPoints() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red-900/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute right-0 top-1/4 w-[300px] h-[300px] bg-emerald-900/8 rounded-full blur-[80px] pointer-events-none" />

      <div className="container max-w-4xl mx-auto text-center px-4">
        <AnimateIn from="bottom">
          <div className="mb-10">
            <p className="text-xl md:text-3xl font-extrabold text-white leading-snug max-w-3xl mx-auto">
              Se você não aguenta mais a vida de{" "}
              <span className="text-red-400">trabalhar e pagar boletos</span>{" "}
              — você não está sozinho.
            </p>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
            Você se identifica com{" "}
            <span className="text-red-400">alguma dessas situações</span>?
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            A maioria de quem chega aqui passou por pelo menos uma delas.
          </p>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-5 text-left mb-12">
          {pains.map((p, i) => {
            const Icon = p.icon;
            return (
              <AnimateIn key={p.title} from="bottom" delay={i * 100}>
                <div className="relative bg-white/[0.03] border border-white/8 rounded-2xl p-6 hover:border-red-500/30 hover:bg-red-500/[0.02] transition-all group overflow-hidden h-full">
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500/60 via-red-500/20 to-transparent rounded-l-2xl" />
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-red-500/20 via-transparent to-transparent" />
                  <div className="flex items-start gap-4">
                    <div className="bg-red-500/10 rounded-xl p-3 flex-shrink-0 border border-red-500/20 group-hover:bg-red-500/15 transition-colors">
                      <Icon className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base mb-2 leading-snug">{p.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>

        <AnimateIn from="bottom">
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Se você se identificou com qualquer um desses pontos —{" "}
            <span className="text-white font-semibold">o mercado digital está esperando por você. E os dados confirmam isso.</span>
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
