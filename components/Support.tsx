import { MessageCircle, Users, CheckCircle } from "lucide-react";
import AnimateIn from "./AnimateIn";

const items = [
  {
    icon: <Users className="w-6 h-6 text-emerald-400" />,
    title: "Grupo de Suporte Exclusivo",
    desc: "Acesso ao grupo de alunos do MPN-On. Tire dúvidas, troque experiências e acompanhe quem está na mesma jornada que você.",
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-emerald-400" />,
    title: "Acesso Direto ao Eduardo",
    desc: "Ficou travado em alguma aula? Tem dúvida sobre um cliente específico? Você pode falar diretamente comigo. Nenhuma dúvida fica sem resposta. Respostas em até 24h.",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-emerald-400" />,
    title: "Suporte em Cada Etapa",
    desc: "Do primeiro clique na Shopify até a entrega da sua primeira loja para um cliente — você tem apoio em cada passo do caminho.",
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
            <h2 className="text-3xl md:text-5xl font-extrabold mb-5 leading-tight">
              A maioria dos cursos te vende{" "}
              <span className="text-red-400">e some.</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Aqui é diferente. Você não compra um curso e fica sozinho tentando resolver. Tem grupo, tem suporte, tem acesso direto a mim.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Porque de nada adianta aprender se na hora de executar você travar em uma dúvida. O suporte existe exatamente pra isso.
            </p>
            <p className="text-white font-semibold mt-4 text-lg leading-snug">
              Você não está comprando um curso. Está entrando para uma operação.{" "}
              <span className="text-emerald-400">E eu estarei lá — do primeiro clique até o primeiro Pix no seu celular.</span>
            </p>
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
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
