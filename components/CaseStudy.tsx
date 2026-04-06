import Image from "next/image";

const PIX_PROOF =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663305937026/Jey4huR4MGMLTE3MYskJ4P/WhatsAppImage2026-03-05at20.43.53_14147517.jpeg";

export default function CaseStudy() {
  return (
    <section className="py-20 md:py-28 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-4xl mx-auto relative z-10 px-4">
        <div className="text-center mb-12">
          <p className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4">
            Caso Real
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-0">
            Esse é o método{" "}
            <span className="text-emerald-400">na prática.</span>
          </h2>
        </div>

        <div className="space-y-5 text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-14">
          <p>
            O <strong className="text-white">Gabriel</strong> é dono da{" "}
            <strong className="text-emerald-400">GB Nutrition</strong> — uma
            loja de suplementos de Palmas-TO. Ele vendia só pelo Instagram,
            WhatsApp e boca a boca. Sem loja online. Sem saber o quanto estava
            deixando dinheiro na mesa.
          </p>
          <p>
            Eu criei a loja dele do zero. Desenvolvi uma nova logo, fiz um
            rebranding completo, integrei todos os mecanismos de pagamento e
            frete — e gravei cada passo.
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
          <p className="text-white font-medium">
            São exatamente essas{" "}
            <strong className="text-emerald-400">29 aulas</strong> que você vai
            assistir no Módulo 2.
          </p>
          <p>
            Você vai ver cada clique, cada configuração, cada decisão — e vai
            replicar o mesmo processo para qualquer negócio. Suplementos, roupas,
            joias, pet shop, moda fitness, artesanato — o nicho muda, o método é
            o mesmo.
          </p>
          <p>
            No final, o Gabriel pagou{" "}
            <strong className="text-emerald-400">R$1.000 via Pix</strong> por
            uma loja criada em menos de uma semana.
          </p>
        </div>

        {/* Gabriel video testimonial */}
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

        {/* Pix proof */}
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

        {/* Summary */}
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
        </div>
      </div>
    </section>
  );
}
