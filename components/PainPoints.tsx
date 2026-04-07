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
    title: "Você quer sair do emprego — mas tudo no digital parece complicado demais",
    desc: "Parece que todo mundo sabe algo que você não sabe. Você tenta entender… mas no final, só fica mais confuso.",
    from: "left",
  },
  {
    icon: RefreshCw,
    title: "Você consome conteúdo há meses — mas continua no mesmo lugar",
    desc: "Vídeos, cursos, dicas… E mesmo assim, nada muda de verdade.",
    from: "right",
  },
  {
    icon: ShieldAlert,
    title: "Você já tem medo de investir de novo e não ter retorno",
    desc: "Já foi enganado antes. E hoje qualquer promessa parece mais risco do que oportunidade.",
    from: "left",
  },
  {
    icon: WifiOff,
    title: "Você não quer depender de seguidores ou gastar com anúncios",
    desc: "Mas parece que todo caminho exige algo que você ainda não tem.",
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
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4 leading-snug max-w-3xl mx-auto">
            Se você sente que está travado enquanto todo mundo parece estar{" "}
            <span className="text-red-400">ganhando dinheiro online…</span>{" "}
            você não está sozinho.
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            E provavelmente você já passou por pelo menos uma dessas situações:
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
            Se você se viu em pelo menos um desses pontos… então você não precisa de mais informação.{" "}
            <span className="text-white font-semibold">Você precisa de um caminho simples — que funcione mesmo começando do zero.</span>
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
