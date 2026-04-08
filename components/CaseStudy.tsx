import Image from "next/image";
import AnimateIn from "./AnimateIn";

const PIX_PROOF =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663305937026/Jey4huR4MGMLTE3MYskJ4P/WhatsAppImage2026-03-05at20.43.53_14147517.jpeg";

export default function CaseStudy() {
  return (
    <section className="py-20 md:py-28 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-4xl mx-auto relative z-10 px-4">
        <AnimateIn from="bottom">
          <div className="text-center mb-12">
            <p className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4">
              Módulo 2 · Caso Real Gravado
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3 leading-snug">
              Esse tipo de negócio está em todo lugar
              <br />
              <span className="text-emerald-400">e quase nenhum tem uma loja de verdade</span>
            </h2>
          </div>
        </AnimateIn>

        <AnimateIn from="bottom" delay={100}>
        <div className="space-y-6 text-gray-300 leading-relaxed max-w-2xl mx-auto mb-14">

          {/* Apresentação */}
          <div className="space-y-1">
            <p>O <strong className="text-white">Gabriel</strong> é só um exemplo.</p>
            <p>
              Ele já vendia suplementos…<br />
              mas só pelo Instagram, WhatsApp e indicação.
            </p>
          </div>

          {/* Dor */}
          <div className="border-l-2 border-red-500/40 pl-4 space-y-1">
            <p className="text-gray-400">Ou seja:</p>
            <p>vendia…</p>
            <p className="text-white font-medium">mas deixava dinheiro na mesa todos os dias.</p>
          </div>

          {/* Solução */}
          <div className="space-y-1">
            <p>A gente estruturou uma loja online pra ele.</p>
            <p>
              Agora ele vende com entrega no mesmo dia na cidade<br />
              e também pro Brasil todo.
            </p>
          </div>

          {/* Conexão com mercado */}
          <div className="border-l-2 border-emerald-500/40 pl-4 space-y-1">
            <p className="text-emerald-400 font-medium">E aqui está o ponto:</p>
            <p>isso não é só sobre o Gabriel.</p>
            <p className="text-white">Existem milhares de negócios assim na sua cidade.</p>
            <p className="text-gray-500">
              Todos vendendo…<br />
              mas sem estrutura.
            </p>
          </div>

          {/* Monetização */}
          <div className="space-y-1">
            <p className="text-white font-medium">E é aqui que entra o dinheiro:</p>
            <p>
              você aprende a criar essa loja…<br />
              e pode cobrar de{" "}
              <strong className="text-emerald-400">R$600 a R$1.500 por projeto.</strong>
            </p>
          </div>

          {/* Curso */}
          <div className="space-y-1 text-gray-400">
            <p>E tudo isso foi gravado.</p>
            <p>Cada passo. Cada decisão.</p>
            <p className="text-white font-medium">É exatamente o que você vai ver no módulo 2.</p>
          </div>

        </div>
        </AnimateIn>

        {/* Gabriel video testimonial */}
        <AnimateIn from="left" delay={80}>
        <div className="w-full max-w-xs mx-auto mb-8">
          <p className="text-center text-gray-300 text-base mb-4">
            Depois da entrega, ele me mandou esse vídeo:
          </p>
          <div
            className="relative rounded-2xl overflow-hidden border border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.12)]"
            style={{ aspectRatio: "9 / 16" }}
          >
            <iframe
              src="https://www.youtube.com/embed/OhV_Y5x1YVA?autoplay=0&rel=0&modestbranding=1"
              title="Depoimento Gabriel Barros - GB Nutrition"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              style={{ border: "none" }}
            />
          </div>
        </div>
        </AnimateIn>

        {/* Pix proof */}
        <AnimateIn from="right" delay={80}>
        <div className="w-full max-w-sm mx-auto mb-12">
          <p className="text-center text-gray-300 text-base mb-4">
            E no final, ele me pagou por isso:
          </p>
          <div className="relative rounded-2xl overflow-hidden border border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.12)]">
            <Image
              src={PIX_PROOF}
              alt="Comprovante Pix R$1.000 - Gabriel Barros para Eduardo Barros"
              width={400}
              height={700}
              style={{ height: "auto" }}
              className="w-full object-contain"
              sizes="(max-width: 640px) 100vw, 384px"
            />
          </div>
          <p className="text-center mt-4 text-white font-bold text-lg leading-snug">
            R$1.000 no Pix<br />
            <span className="text-gray-400 font-normal text-base">por uma loja pronta</span>
          </p>
        </div>
        </AnimateIn>

        {/* Summary */}
        <AnimateIn from="bottom" delay={100}>
        <div className="text-center">
          <div className="inline-block bg-emerald-500/10 border border-emerald-500/30 rounded-2xl px-8 py-6 mb-6">
            <p className="text-2xl md:text-3xl font-extrabold text-white leading-snug">
              Uma loja. Menos de uma semana.{" "}
              <span className="text-emerald-400">R$1.000 no Pix.</span>
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-xl text-gray-300 font-medium">Agora pensa…</p>
            <p className="text-white font-semibold text-lg">
              quantos negócios iguais ao dele existem perto de você hoje?
            </p>
          </div>
        </div>
        </AnimateIn>

        <div className="text-center mt-16 space-y-1">
          <p className="text-gray-400 text-lg">Agora que você viu o tamanho da oportunidade de prestar serviço…</p>
          <p className="text-white font-semibold">veja como o método funciona na prática. ↓</p>
        </div>
      </div>
    </section>
  );
}
