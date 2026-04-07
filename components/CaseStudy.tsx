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
            <h2 className="text-3xl md:text-5xl font-extrabold mb-3">
              Esse é o método{" "}
              <span className="text-emerald-400">na prática.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Todas as 29 aulas do Módulo 2 foram gravadas criando essa loja real — do zero à entrega. Você acompanha cada decisão, cada clique, cada configuração.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn from="bottom" delay={100}>
        <div className="space-y-5 text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-14">
          <p>
            O <strong className="text-white">Gabriel</strong> é dono da{" "}
            <strong className="text-emerald-400">GB Nutrition</strong> — uma
            loja de suplementos de Palmas-TO. Ele vendia só pelo Instagram,
            WhatsApp e boca a boca. Sem loja online. Sem saber o quanto estava
            deixando dinheiro na mesa.
          </p>
          <p>
            Eu criei a loja dele do zero ao vivo — nova logo, rebranding completo, todos os mecanismos de pagamento e frete configurados.{" "}
            <strong className="text-white">Cada passo foi gravado e virou aula.</strong>{" "}
            É exatamente o que você vai assistir no Módulo 2.
          </p>
          <p>
            Hoje o Gabriel oferece{" "}
            <strong className="text-white">
              frete expresso via motoboy com entrega no mesmo dia
            </strong>{" "}
            para clientes de Palmas. E ainda vende para todo o Brasil com fretes
            até 80% mais baratos do que levaria direto nos Correios. Tudo
            funcionando desde o primeiro dia.
          </p>
          <p>
            O nicho aqui é suplementos — mas ao longo das aulas você vai perceber que{" "}
            <strong className="text-white">o método funciona para qualquer negócio</strong>.
            Roupas, joias, pet shop, moda fitness, artesanato, cosméticos — o nicho muda, o processo é o mesmo. Você vai ver isso na prática durante o curso.
          </p>
          <p>
            No final, o Gabriel pagou{" "}
            <strong className="text-emerald-400">R$1.000 via Pix</strong> por
            uma loja criada em menos de uma semana.
          </p>
        </div>
        </AnimateIn>

        {/* Gabriel video testimonial */}
        <AnimateIn from="left" delay={80}>
        <div className="w-full max-w-xs mx-auto mb-8">
          <p className="text-center text-gray-400 text-sm mb-4 uppercase tracking-widest font-bold">
            Depoimento do Gabriel
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
          <p className="text-center text-gray-400 text-sm mb-4 uppercase tracking-widest font-bold">
            Comprovante de Pagamento
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
          <p className="text-xl md:text-2xl text-gray-300 font-medium">
            Agora imagina fazer isso{" "}
            <strong className="text-white">7 vezes por mês.</strong>
          </p>
          <p className="text-gray-500 text-base mt-4">
            É exatamente isso que o método ensina. Veja o que está dentro.
          </p>
        </div>
        </AnimateIn>
      </div>
    </section>
  );
}
