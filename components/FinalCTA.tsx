import Image from "next/image";
import { ShieldCheck, Lock, CircleCheck } from "lucide-react";
import CTAButton from "./CTAButton";
import AnimateIn from "./AnimateIn";

const EDUARDO_TABLET2 =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663305937026/Jey4huR4MGMLTE3MYskJ4P/eduardo_tablet2_ecdab08a.jpeg";

export default function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden border-t border-white/5"
      style={{ minHeight: "100vh" }}
    >
      {/* Background photo */}
      <Image
        src={EDUARDO_TABLET2}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover pointer-events-none select-none"
        style={{ objectPosition: "50% 15%" }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black pointer-events-none" />

      <div className="relative z-10 flex flex-col justify-end min-h-screen pb-16 pt-[60vh]">
        <div className="container max-w-4xl mx-auto text-center px-4">
          <AnimateIn from="bottom">
          {/* Shield icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-emerald-500/10 p-5 rounded-full border border-emerald-500/20">
              <ShieldCheck className="w-12 h-12 text-emerald-400" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold mb-5">
            Risco Zero para Você
          </h2>
          <p className="text-lg text-gray-300 mb-4 max-w-2xl mx-auto">
            Entre, assista às aulas, aplique o método. Se em{" "}
            <strong className="text-white">7 dias</strong> você achar que não é
            para você, eu devolvo{" "}
            <strong className="text-white">100% do seu dinheiro</strong>. Sem
            perguntas.
          </p>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            O risco é todo meu. Você não tem nada a perder.
          </p>
          </AnimateIn>

          <AnimateIn from="bottom" delay={150}>
          <div className="flex flex-col items-center gap-6">
            <div className="w-full max-w-sm">
              <CTAButton>GARANTIR MINHA VAGA AGORA</CTAButton>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <Lock className="w-4 h-4" /> Pagamento Seguro
              </span>
              <span className="flex items-center gap-1">
                <CircleCheck className="w-4 h-4" /> Acesso Imediato
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" /> Garantia 7 Dias
              </span>
            </div>
          </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
