import { TrendingUp, ExternalLink } from "lucide-react";
import CTAButton from "./CTAButton";

const stats = [
  { value: "R$ 259 bi", label: "previsão do e-commerce brasileiro para 2026", source: "ABComm" },
  { value: "5,5 mi", label: "pequenas empresas ainda sem loja online no Brasil", source: "Sebrae" },
  { value: "86%", label: "dos brasileiros compram online todo mês", source: "Fecomércio" },
];

export default function MediaMention() {
  return (
    <section className="py-20 md:py-28 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[700px] h-[400px] bg-emerald-500/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-5xl mx-auto relative z-10 px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-6">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">O Mercado Confirma</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            A oportunidade está{" "}
            <span className="text-emerald-400">escancarada</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Não é achismo. É o que os dados mostram — e o que você vai explorar.
          </p>
        </div>

        {/* Card estilo screenshot real do G1 */}
        <div className="mb-10 max-w-3xl mx-auto">
          {/* Sombra + leve rotação para parecer screenshot */}
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

          {/* Label de contexto */}
          <p className="text-center text-gray-600 text-xs mt-4">
            O mercado confirma o que o método já prova na prática.
          </p>
        </div>

        {/* 3 stats */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {stats.map((s) => (
            <div key={s.label} className="bg-black border border-white/8 rounded-2xl p-6 text-center hover:border-emerald-500/30 transition-colors">
              <p className="font-bebas text-[clamp(40px,5vw,56px)] text-emerald-400 leading-none mb-2">{s.value}</p>
              <p className="text-gray-300 text-sm leading-snug mb-2">{s.label}</p>
              <p className="text-gray-600 text-xs">Fonte: {s.source}</p>
            </div>
          ))}
        </div>

        {/* Gancho */}
        <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-2xl p-6 md:p-8 text-center">
          <p className="text-lg md:text-2xl font-extrabold text-white leading-snug mb-2">
            Os dados são claros. A oportunidade é real.
          </p>
          <p className="text-gray-400 max-w-xl mx-auto">
            A única pergunta que sobrou: quem vai te mostrar como aproveitar isso?
          </p>
        </div>
      </div>
    </section>
  );
}
