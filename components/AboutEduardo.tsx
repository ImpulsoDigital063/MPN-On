import Image from "next/image";
import { Trophy } from "lucide-react";

const EDUARDO_SEATED =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663305937026/Jey4huR4MGMLTE3MYskJ4P/eduardo_seated_ee9deb8e.jpeg";

export default function AboutEduardo() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[300px] h-[300px] bg-emerald-400/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto relative z-10 px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
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
            {/* Badge */}
            <div className="absolute bottom-4 right-4 bg-black/90 border border-emerald-500/50 p-3 rounded-xl shadow-xl z-20 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-1">
                <Trophy className="text-emerald-400 w-4 h-4" />
                <span className="font-bold text-white text-sm">Top Seller</span>
              </div>
              <p className="text-xs text-gray-400">+1.600 pares vendidos</p>
            </div>
          </div>

          {/* Copy */}
          <div>
            <p className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-3">
              Seu Mentor
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Quem é Eduardo Barros?
            </h2>
            <div className="space-y-5 text-lg text-gray-300 leading-relaxed">
              <p>
                Muito prazer. Eu{" "}
                <strong className="text-white">vivo o que ensino</strong>.
              </p>
              <p>
                Há dois anos eu ainda rodava de aplicativo para pagar as contas.
                Tentei entrar no mercado digital várias vezes — e sempre travava
                no mesmo lugar. Por um tempo achei que o problema era eu.
              </p>
              <p>
                Não era. Era o conteúdo que eu consumia — ensinado por quem nem
                tinha negócio rodando.
              </p>
              <p>Quando parei de consumir e comecei a fazer, tudo mudou.</p>
              <p>
                Comecei em 2020 do zero absoluto. Sem saber programar, sem
                dinheiro pra anunciar, sem seguidores. Me enchi de conteúdo de
                guru que só complicava tudo.
              </p>
              <p>
                Aí parei de consumir e comecei a fazer. Criei a{" "}
                <strong className="text-emerald-400">UrbanFeet</strong> — uma
                loja de calçados 100% online. Está no ar há mais de 3 anos. Já
                vendeu mais de{" "}
                <strong className="text-white">
                  1.600 pares para todo o Brasil
                </strong>{" "}
                sem eu tocar em uma única caixa de sapato. Meu fornecedor cuida
                do estoque e da entrega. Eu só me preocupo em vender.
              </p>
              <p>
                Nesse processo fui me especializando tanto em criar lojas na
                Shopify que comecei a criar para outros empreendedores — negócios
                locais que vendiam produto mas só tinham Instagram, WhatsApp e
                boca a boca.
              </p>
              <p>
                Hoje crio em média{" "}
                <strong className="text-white">7 lojas por mês</strong> para
                negócios locais, cobrando de{" "}
                <strong className="text-emerald-400">R$ 600 a R$ 1.500</strong>{" "}
                por projeto. Trabalhando de casa, sem funcionário, sem
                escritório.
              </p>
              <p>E é exatamente isso que você vai aprender aqui.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
