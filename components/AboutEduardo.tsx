import Image from "next/image";
import { Trophy, Building2, Store, Users } from "lucide-react";
import AnimateIn from "./AnimateIn";

const EDUARDO_SEATED =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663305937026/Jey4huR4MGMLTE3MYskJ4P/eduardo_seated_ee9deb8e.jpeg";
const EDUARDO_JOURNEY = "/eduardo_journey.jpg";

const milestones = [
  {
    year: "2020",
    title: "O início — e o erro",
    desc: "Comecei a estudar o mercado digital. Mas fiquei 2 anos preso de vídeo em vídeo, curso em curso. O conteúdo me fazia sentir que o digital não era pra mim.",
    color: "red",
  },
  {
    year: "2022",
    title: "Parei de consumir. Comecei a executar.",
    desc: "No final de 2022 tomei a decisão mais importante: parar de assistir e começar a fazer. Criei a UrbanFeet — loja de calçados com dropshipping nacional. Zero estoque. Operação 100% automática.",
    color: "amber",
  },
  {
    year: "2023",
    title: "Descobri o oceano azul",
    desc: "Amigos começaram a me procurar para criar lojas. Vi que era um mercado com poucos concorrentes reais. Me especializei ainda mais — criei um tema exclusivo que permite frete expresso no mesmo dia via motoboy e envio para todo o Brasil com Melhor Envio. Essa solução foi o que fez tudo acelerar.",
    color: "emerald",
  },
  {
    year: "Hoje",
    title: "2+ anos sem precisar do Uber",
    desc: "Passei muitos anos fazendo Uber para pagar as contas. Hoje faz mais de 2 anos que não preciso mais disso — graças ao digital. A Impulso Digital cresce, a UrbanFeet vende, e o MPN-On nasceu para que mais pessoas encontrem o mesmo caminho.",
    color: "emerald",
  },
];

export default function AboutEduardo() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[300px] h-[300px] bg-emerald-400/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto relative z-10 px-4">

        {/* ── Cabeçalho ── */}
        <AnimateIn from="bottom">
          <div className="text-center mb-16">
            <p className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-3">Seu Mentor</p>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              Quem é{" "}
              <span className="text-emerald-400">Eduardo Barros?</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Não é guru. Não é teórico. É alguém que passou pelo mesmo que você está passando — e encontrou a saída.
            </p>
          </div>
        </AnimateIn>

        {/* ── Bloco 1: foto + abertura ── */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <AnimateIn from="left">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-emerald-500/8 rounded-full blur-[80px] pointer-events-none" />
              <div className="relative z-10 w-full max-w-[380px]">
                <Image
                  src={EDUARDO_SEATED}
                  alt="Eduardo Barros"
                  width={380}
                  height={480}
                  style={{ height: "auto" }}
                  className="w-full rounded-2xl shadow-2xl object-contain"
                  sizes="(max-width: 768px) 100vw, 380px"
                />
              </div>
              <div className="absolute bottom-4 right-4 bg-black/90 border border-emerald-500/50 p-3 rounded-xl shadow-xl z-20 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Trophy className="text-emerald-400 w-4 h-4" />
                  <span className="font-bold text-white text-sm">Impulso Digital</span>
                </div>
                <p className="text-xs text-gray-400">60+ negócios impulsionados</p>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn from="right" delay={150}>
            <div className="space-y-5 text-lg text-gray-300 leading-relaxed">
              <p>
                Em 2020, comecei a estudar o mercado digital cheio de expectativa. Passei 2 anos{" "}
                <strong className="text-white">de vídeo em vídeo, curso em curso</strong> — e no final do dia me sentia mais confuso do que antes. O conteúdo me fazia sentir que o digital não era pra mim.
              </p>
              <p>
                No final de 2022 tomei a decisão que mudou tudo:{" "}
                <strong className="text-emerald-400">parei de consumir e foquei em executar</strong>.
                Criei a UrbanFeet — loja de calçados com dropshipping nacional, zero estoque, operação automática.
                Está no ar há mais de 3 anos.{" "}
                <strong className="text-white">Mais de 1.600 pares vendidos para todo o Brasil</strong>{" "}
                sem eu tocar em uma única caixa de sapato.
              </p>
              <p>
                Nesse processo, amigos começaram a me pedir para criar lojas pra eles. Vi que era um{" "}
                <strong className="text-white">oceano azul de oportunidades</strong> — pouquíssima concorrência, demanda enorme.
                Me especializei mais ainda. Criei um tema exclusivo que entrega{" "}
                <strong className="text-emerald-400">frete expresso no mesmo dia</strong>{" "}
                via motoboy e fretes para todo o Brasil com Melhor Envio.{" "}
                <strong className="text-white">Essa solução foi o que fez tudo acelerar.</strong>
              </p>
            </div>
          </AnimateIn>
        </div>

        {/* ── Jornada: timeline ── */}
        <AnimateIn from="bottom">
          <div className="relative border border-white/8 bg-white/[0.02] rounded-2xl p-8 md:p-10 mb-16 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
            <span className="absolute top-4 right-6 font-bebas text-[80px] text-white/[0.03] leading-none select-none">JORNADA</span>

            <p className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-8">A jornada real</p>

            <div className="grid md:grid-cols-2 gap-5">
              {milestones.map((m, i) => {
                const borderColor = m.color === "red" ? "border-red-500/30" : m.color === "amber" ? "border-amber-500/30" : "border-emerald-500/30";
                const yearColor = m.color === "red" ? "text-red-400" : m.color === "amber" ? "text-amber-400" : "text-emerald-400";
                const bgColor = m.color === "red" ? "bg-red-500/8" : m.color === "amber" ? "bg-amber-500/8" : "bg-emerald-500/8";
                return (
                  <AnimateIn key={m.year} from={i % 2 === 0 ? "left" : "right"} delay={i * 80}>
                    <div className={`relative rounded-xl p-5 border ${borderColor} ${bgColor} h-full`}>
                      <span className={`font-bebas text-2xl ${yearColor} block mb-1`}>{m.year}</span>
                      <h3 className="text-white font-bold text-base mb-2">{m.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </AnimateIn>

        {/* ── Bloco 2: segunda foto + hoje ── */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimateIn from="left">
            <div className="space-y-5 text-lg text-gray-300 leading-relaxed">
              <p>
                Passei <strong className="text-white">muitos anos fazendo Uber</strong> para pagar as contas. Hoje faz mais de{" "}
                <strong className="text-emerald-400">2 anos que não preciso mais disso</strong> — graças ao digital.
              </p>
              <p>
                Hoje tenho a{" "}
                <strong className="text-white">Impulso Digital</strong> — agência com CNPJ regularizado,
                onde entrego lojas Shopify, landing pages, lojas Next.js e consultoria estratégica para negócios locais.{" "}
                <strong className="text-white">60+ clientes atendidos</strong>, prazos garantidos, suporte real.
              </p>
              <p>
                No meio de toda essa operação, nasceu o{" "}
                <strong className="text-emerald-400">MPN-On</strong>. Porque eu queria ajudar quem está onde eu estava — perdido, consumindo conteúdo que só te faz sentir que o digital não é pra você.
              </p>
              <p className="text-white font-semibold leading-snug">
                Esse curso existe porque acredito que meu propósito é ajudar pessoas a se encontrarem no digital.{" "}
                <span className="text-emerald-400">Assim como eu me encontrei.</span>
              </p>
              <p className="text-gray-400 text-base">
                E funciona tanto para quem quer prestar serviço para outros, quanto para o empreendedor que quer montar o próprio site e operar sozinho.
              </p>
            </div>
          </AnimateIn>

          <AnimateIn from="right" delay={150}>
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-emerald-500/6 rounded-full blur-[80px] pointer-events-none" />
              <div className="relative z-10 w-full max-w-[380px]">
                <Image
                  src={EDUARDO_JOURNEY}
                  alt="Eduardo Barros hoje"
                  width={380}
                  height={480}
                  style={{ height: "auto" }}
                  className="w-full rounded-2xl shadow-2xl object-cover"
                  sizes="(max-width: 768px) 100vw, 380px"
                />
              </div>
              <div className="absolute bottom-4 left-4 bg-black/90 border border-emerald-500/50 p-3 rounded-xl shadow-xl z-20 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Store className="text-emerald-400 w-4 h-4" />
                  <span className="font-bold text-white text-sm">UrbanFeet · 3 anos</span>
                </div>
                <p className="text-xs text-gray-400">1.600+ pares · sem estoque</p>
              </div>
            </div>
          </AnimateIn>
        </div>

        {/* ── Stats ── */}
        <AnimateIn from="bottom" delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {[
              { icon: <Store className="w-5 h-5 text-emerald-400" />, value: "3+ anos", label: "UrbanFeet no ar" },
              { icon: <Trophy className="w-5 h-5 text-amber-400" />, value: "1.600+", label: "pares vendidos" },
              { icon: <Building2 className="w-5 h-5 text-emerald-400" />, value: "60+", label: "negócios impulsionados" },
              { icon: <Users className="w-5 h-5 text-emerald-400" />, value: "7/mês", label: "lojas criadas" },
            ].map((s) => (
              <div key={s.label} className="relative bg-white/[0.03] border border-white/8 rounded-2xl p-5 text-center hover:border-emerald-500/30 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
                <div className="flex justify-center mb-2">{s.icon}</div>
                <p className="font-bebas text-2xl text-white leading-none mb-1">{s.value}</p>
                <p className="text-gray-500 text-xs">{s.label}</p>
              </div>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn from="bottom" delay={150}>
          <p className="text-center text-gray-500 text-sm mt-8">
            Não vou te pedir para acreditar na minha palavra.{" "}
            <span className="text-white font-semibold">Os números falam por si.</span>
          </p>
        </AnimateIn>

      </div>
    </section>
  );
}
