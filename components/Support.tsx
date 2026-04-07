import { MessageCircle, Users, CheckCircle } from "lucide-react";
import AnimateIn from "./AnimateIn";

const items = [
  {
    icon: <Users className="w-6 h-6 text-emerald-400" />,
    title: "Grupo de Suporte Exclusivo",
    desc: "Um grupo com pessoas no mesmo caminho que você.\n\nPra trocar ideia, tirar dúvida e não travar.",
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-emerald-400" />,
    title: "Acesso Direto ao Eduardo",
    desc: "Travou?\n\nVocê fala comigo direto.",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-emerald-400" />,
    title: "Suporte em Cada Etapa",
    desc: "Você não fica perdido em nenhuma etapa.\n\nTem direção do começo ao fim.",
  },
];

export default function Support() {
  return (
    <section className="py-20 md:py-28 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container max-w-5xl mx-auto relative z-10 px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <AnimateIn from="left">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Você não está sozinho</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-5 leading-snug">
              Você não vai precisar{" "}
              <span className="text-emerald-400">fazer isso sozinho</span>
            </h2>
            <div className="space-y-3 text-gray-300 text-lg leading-relaxed">
              <div className="space-y-1">
                <p>Porque o problema nunca foi só aprender.</p>
                <p className="text-white font-medium">É travar na hora de executar.</p>
              </div>
              <div className="space-y-1 pt-1">
                <p>Você não está comprando um curso.</p>
                <p>Você está entrando em uma operação.</p>
                <p className="text-emerald-400 font-medium">
                  E eu vou estar com você — do primeiro clique<br />
                  até o primeiro Pix no seu celular.
                </p>
              </div>
            </div>
          </div>
          </AnimateIn>

          {/* Cards */}
          <div className="space-y-4">
            {items.map((item, i) => (
              <AnimateIn key={item.title} from="right" delay={i * 100}>
              <div
                className="bg-black border border-white/8 rounded-2xl p-5 flex gap-4 hover:border-emerald-500/30 transition-colors"
              >
                <div className="bg-emerald-500/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">{item.title}</h3>
                  <div className="text-gray-400 text-sm leading-relaxed space-y-1">
                    {item.desc.split('\n\n').map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        <AnimateIn from="bottom" delay={150}>
          <div className="text-center mt-14 space-y-1">
            <p className="text-gray-400 text-lg">A diferença entre quem consegue…</p>
            <p className="text-gray-300">e quem desiste no meio do caminho</p>
            <p className="text-gray-400">quase sempre é essa:</p>
            <p className="text-white font-bold text-xl pt-1">ter alguém pra orientar.</p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
