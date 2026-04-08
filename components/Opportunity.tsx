import { TrendingUp, ShoppingBag, ExternalLink } from "lucide-react";

const ecommerceStats = [
  { value: "5,5 mi", label: "Pequenos negócios no Brasil", sub: "sem presença online — todos são clientes em potencial para você", source: "Fonte: SEBRAE" },
  { value: "R$ 259 bi", label: "Previsão E-commerce Brasil 2026", sub: "mercado em expansão que vai exigir cada vez mais lojas online", source: "Fonte: ABComm" },
  { value: "26%", label: "dos e-commerces do mundo", sub: "usam Shopify — a plataforma que você vai dominar", source: "Fonte: Shopify Investors", white: true },
];

const miniStats1 = [
  { value: "438M", label: "pedidos online em 2025" },
  { value: "86%", label: "dos brasileiros compram online todo mês" },
  { value: "$1/mês", label: "Shopify nos 3 primeiros meses", white: true },
  { value: "R$ 600+", label: "valor inicial por loja entregue", white: true },
];


export default function Opportunity() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent z-0" />
      <div className="absolute right-10 top-20 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-[350px] h-[350px] bg-emerald-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto relative z-10 px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full border border-emerald-500/20 mb-6">
            <TrendingUp className="w-4 h-4" />
            <span className="font-bold uppercase tracking-wide text-sm">A Oportunidade de Prestar Serviço</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-snug">
            A Oportunidade de Prestar Serviço Está Escancarada —{" "}
            <span className="text-emerald-400">e quase ninguém está enxergando</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Não é achismo. São dados reais —{" "}
            <strong className="text-white">e eles mostram exatamente por que negócios locais precisam de você.</strong>
          </p>
        </div>

        {/* Reportagem G1 */}
        <div className="mb-16 max-w-3xl mx-auto">
          <div
            className="rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            style={{ transform: "rotate(-0.4deg)" }}
          >
            {/* Barra do browser */}
            <div className="bg-[#f1f3f4] px-3 py-2 flex items-center gap-2 border-b border-gray-300">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 bg-white rounded-md px-3 py-1 text-[11px] text-gray-400 flex items-center gap-1.5 ml-2 border border-gray-200">
                <ExternalLink className="w-3 h-3 text-gray-400 flex-shrink-0" />
                g1.globo.com/economia/noticia/2025/e-commerce-brasileiro
              </div>
            </div>

            {/* Corpo do G1 */}
            <div className="bg-white">
              {/* Header G1 */}
              <div className="bg-[#e8111a] px-4 py-2.5 flex items-center gap-3">
                <span className="text-white font-extrabold text-2xl tracking-tight leading-none" style={{ fontFamily: "Arial Black, sans-serif" }}>g1</span>
                <div className="w-px h-5 bg-white/30" />
                <span className="text-white text-xs font-semibold uppercase tracking-wide">Economia</span>
                <div className="ml-auto flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-white/70 text-[10px]">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/></svg>
                    Entrar
                  </div>
                  <div className="w-5 h-5 bg-white/20 rounded flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                  </div>
                </div>
              </div>

              {/* Breadcrumb */}
              <div className="px-5 pt-2.5 pb-0 flex items-center gap-1 text-[11px] text-[#e8111a]" style={{ fontFamily: "Arial, sans-serif" }}>
                <span className="hover:underline cursor-pointer">Economia</span>
                <span className="text-gray-400 mx-1">›</span>
                <span className="hover:underline cursor-pointer">E-commerce e Tecnologia</span>
              </div>

              {/* Conteúdo */}
              <div className="px-5 pt-2 pb-4">
                <h3
                  className="text-[#1a1a1a] leading-snug mb-2"
                  style={{ fontSize: "clamp(15px, 2vw, 21px)", fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 700 }}
                >
                  E-commerce brasileiro deve faturar R$ 259 bilhões em 2026 — e pequenos negócios locais ainda estão fora desse mercado
                </h3>

                {/* Meta info */}
                <div className="flex items-center gap-3 mb-3 pb-2.5 border-b border-gray-200">
                  <span className="text-[#e8111a] text-[11px] font-bold uppercase tracking-wide" style={{ fontFamily: "Arial, sans-serif" }}>G1 Economia</span>
                  <span className="text-gray-400 text-[11px]" style={{ fontFamily: "Arial, sans-serif" }}>08/02/2026 09h47 · Atualizado 08/02/2026 11h03</span>
                  <div className="ml-auto flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#1877f2] rounded flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">f</span>
                    </div>
                    <div className="w-6 h-6 bg-[#1da1f2] rounded flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
                    </div>
                    <div className="w-6 h-6 bg-[#25d366] rounded flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                    </div>
                  </div>
                </div>

                <p className="text-[#333] leading-relaxed mb-2.5" style={{ fontSize: "13px", fontFamily: "Arial, sans-serif" }}>
                  Segundo a <strong>ABComm (Associação Brasileira de Comércio Eletrônico)</strong>, o mercado digital nacional cresce mais de 10% ao ano. O Sebrae aponta que mais de{" "}
                  <strong>5,5 milhões de pequenos negócios</strong> brasileiros ainda não têm presença digital estruturada — vendendo apenas por Instagram, WhatsApp e boca a boca.
                </p>
                <p className="text-[#333] leading-relaxed" style={{ fontSize: "13px", fontFamily: "Arial, sans-serif" }}>
                  Para especialistas, a janela de oportunidade para profissionais que criam lojas online para esses negócios{" "}
                  <strong>"nunca foi tão grande"</strong>. O setor cresce enquanto a maioria dos empreendedores locais ainda ignora o canal digital.
                </p>

                <div className="mt-3 pt-2.5 border-t border-gray-200 flex items-center gap-1.5 text-[11px] text-gray-400" style={{ fontFamily: "Arial, sans-serif" }}>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                  <span>Por Redação G1 Economia</span>
                  <span className="mx-1">·</span>
                  <span>Fontes: ABComm, Sebrae, Fecomércio — 2026</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-600 text-xs mt-4">
            O mercado confirma o que o método já prova na prática.
          </p>
        </div>

        {/* Negócio 1 */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20">
              <ShoppingBag className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Crie Lojas Online para Clientes e Fature por Projeto</h3>
              <p className="text-sm text-gray-400">Suplementos, roupas, joias, calçados, beleza, hamburguerias — qualquer negócio local</p>
            </div>
          </div>

          <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-2xl p-6 mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-extrabold text-emerald-400 mb-1">R$ 600+</p>
                <p className="text-gray-300 text-sm font-medium">por loja entregue</p>
                <p className="text-gray-500 text-xs mt-1">valor inicial de cobrança</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-emerald-400 mb-1">3 dias</p>
                <p className="text-gray-300 text-sm font-medium">para criar uma loja completa</p>
                <p className="text-gray-500 text-xs mt-1">depois que pegar o jeito</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-white mb-1">$1/mês</p>
                <p className="text-gray-300 text-sm font-medium">Shopify nos 3 primeiros meses</p>
                <p className="text-gray-500 text-xs mt-1">investimento quase zero para o cliente</p>
              </div>
            </div>
          </div>

          {/* E-commerce stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {ecommerceStats.map((s) => (
              <div key={s.label} className="bg-black border border-emerald-500/20 rounded-2xl p-6 text-center hover:border-emerald-500/40 transition-colors">
                <p className={`text-4xl md:text-5xl font-extrabold mb-2 ${s.white ? "text-white" : "text-emerald-400"}`}>{s.value}</p>
                <p className="text-gray-300 font-medium mb-1">{s.label}</p>
                <p className="text-gray-500 text-sm">{s.sub}</p>
                <p className="text-xs text-gray-600 mt-2">{s.source}</p>
              </div>
            ))}
          </div>

          {/* Why it matters box */}
          <div className="bg-gradient-to-r from-emerald-950/30 to-black border border-emerald-500/20 rounded-2xl p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h4 className="text-lg font-bold text-white mb-3">Por que isso importa para você?</h4>
                <p className="text-gray-300 leading-relaxed text-sm">
                  5,5 milhões de pequenos negócios no Brasil <strong className="text-white">ainda não têm loja online</strong>. Hamburguerias, salões, clínicas, ateliês, academias — todos são clientes em potencial. A Shopify dá 3 meses por $1, então você chega com uma proposta irrecusável.{" "}
                  <strong className="text-emerald-400">Você cria a loja. Eles pagam. Simples assim.</strong>
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {miniStats1.map((s) => (
                  <div key={s.label} className="bg-black/50 rounded-xl p-4 text-center border border-white/5">
                    <p className={`text-2xl font-extrabold ${s.white ? "text-white" : "text-emerald-400"}`}>{s.value}</p>
                    <p className="text-xs text-gray-400 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
