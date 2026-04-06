import { CircleCheck, Timer } from "lucide-react";

const module2Groups = [
  {
    emoji: "🏗️",
    title: "Fundação da Loja",
    items: [
      { bold: "Shopify por $1/mês:", text: "Ativa 3 meses por quase nada" },
      { bold: "Tema Exclusivo MPN-On:", text: "Instalado com arquivo .zip + guia" },
      { bold: "Painel da Shopify:", text: "Mapa visual completo + atalhos" },
    ],
  },
  {
    emoji: "💳",
    title: "Checkout & Pagamento",
    items: [
      { bold: "Checkout Yampi:", text: "Transparente, 1 página, 2,5% no Pix" },
      { bold: "Integração Yampi + Shopify:", text: "21 min ao vivo, do zero ao funcionando" },
      { bold: "Mercado Pago:", text: "Pix, cartão 12x, boleto ativados" },
    ],
  },
  {
    emoji: "🚚",
    title: "Logística Inteligente",
    items: [
      { bold: "Melhor Envio Completo:", text: "Economia de até 80% no frete" },
      { bold: "4 Opções de Frete:", text: "Nacional, Grátis, Retirada + Expresso" },
      { bold: "Frete Expresso (Planilha CEPs):", text: "Entrega no mesmo dia por R$10" },
    ],
  },
  {
    emoji: "🌐",
    title: "Domínio & Identidade",
    items: [
      { bold: "Domínio Personalizado:", text: "GoDaddy → Shopify → Yampi (3 aulas)" },
      { bold: "Logo Profissional:", text: "Canva + IA em menos de 30 min" },
      { bold: "Cabeçalho e Cores:", text: "Identidade visual do cliente aplicada" },
    ],
  },
  {
    emoji: "🛍️",
    title: "Produtos & Conteúdo",
    items: [
      { bold: "Páginas de Produtos:", text: "66 min de aula — descrições que vendem" },
      { bold: "Coleções Estratégicas:", text: "Manuais e automáticas" },
      { bold: "Organização em Seções:", text: "44 min — loja com cara profissional" },
    ],
  },
  {
    emoji: "✅",
    title: "Entrega ao Cliente",
    items: [
      { bold: "WhatsApp Flutuante:", text: "Atendimento instantâneo na loja" },
      { bold: "Rodapé Profissional:", text: "Política, Termos, Contato + templates" },
      { bold: "Entrega via AnyDesk:", text: "Chamada ao vivo mostrando tudo ao cliente" },
    ],
  },
];

export default function Curriculum() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute left-10 top-1/3 w-[400px] h-[400px] bg-emerald-500/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-5xl mx-auto relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            O Que Você Vai <span className="text-emerald-400">Aprender?</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            4 módulos completos, do mindset ao faturamento.{" "}
            <strong className="text-white">+8 horas de conteúdo prático</strong>, passo a passo, sem segredos, sem enrolação.
          </p>
        </div>

        <div className="space-y-6">
          {/* Módulo 01 */}
          <div className="bg-black border border-white/10 rounded-2xl p-8 hover:border-emerald-500/30 transition-colors">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="bg-emerald-900/30 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 border border-emerald-500/20">
                <span className="text-2xl font-extrabold text-emerald-400">01</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-white">Mindset de Empreendedor</h3>
                <p className="text-gray-400 mb-4">
                  Antes de apertar botões, você precisa pensar como empresário. Aqui preparamos o terreno para o seu sucesso.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {["Boas-vindas e Mapa do Curso", "Mentalidade de Crescimento", "Visão Geral do Ecossistema Digital", "Planejamento do Seu Primeiro Negócio"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-gray-300">
                      <CircleCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Módulo 02 — PRINCIPAL */}
          <div className="bg-black border border-emerald-500/40 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-500 text-black text-xs font-bold px-4 py-1.5 rounded-bl-xl">
              MÓDULO PRINCIPAL
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="bg-emerald-500 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                <span className="text-2xl font-extrabold text-black">02</span>
              </div>
              <div className="w-full">
                <h3 className="text-2xl font-bold mb-3 text-white">Criando uma Loja do Zero (A Mina de Ouro)</h3>
                <div className="flex flex-wrap gap-3 mb-5">
                  <span className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full">29 aulas</span>
                  <span className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full">+8 horas de conteúdo</span>
                  <span className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full">Material em cada aula</span>
                </div>
                <p className="text-gray-400 mb-6">
                  Do zero ao site entregue ao cliente. Eu mostro{" "}
                  <strong className="text-white">cada clique, cada configuração, cada detalhe</strong> que faz uma loja vender de verdade.
                </p>
                <div className="space-y-4">
                  {module2Groups.map((group) => (
                    <div key={group.title} className="bg-white/[0.03] border border-white/10 rounded-xl p-4">
                      <p className="text-sm font-bold text-emerald-400 mb-3">
                        {group.emoji} {group.title}
                      </p>
                      <div className="grid md:grid-cols-3 gap-2">
                        {group.items.map((item) => (
                          <div key={item.bold} className="flex items-start gap-2 text-sm">
                            <CircleCheck className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300">
                              <strong className="text-white">{item.bold}</strong> {item.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 flex items-center gap-3">
                  <Timer className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <p className="text-sm text-gray-300">
                    <strong className="text-emerald-400">Resultado:</strong> Loja profissional completa pronta em{" "}
                    <strong className="text-white">1 semana</strong>, pronta para entregar ao cliente e cobrar de{" "}
                    <strong className="text-white">R$ 600 a R$ 1.500</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Módulo 03 — Bônus */}
          <div className="bg-gradient-to-r from-amber-950/20 to-black border border-amber-500/30 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-amber-500 text-black text-xs font-bold px-4 py-1.5 rounded-bl-xl">
              BÔNUS EXCLUSIVO
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="bg-amber-500 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                <span className="text-2xl font-extrabold text-black">03</span>
              </div>
              <div className="w-full">
                <h3 className="text-2xl font-bold mb-3 text-white">Módulo Bônus: Seu Próprio E-commerce de Calçados</h3>
                <p className="text-gray-400 mb-2 leading-relaxed">
                  Não bastou entregar o maior módulo do curso. A equipe MPN-On preparou um{" "}
                  <strong className="text-amber-400">bônus exclusivo</strong>: vou abrir minha operação ao vivo e criar do zero uma loja de calçados usando a{" "}
                  <strong className="text-white">UrbanFeet</strong> como modelo.
                </p>
                <p className="text-amber-300 text-sm font-medium mb-5">
                  A UrbanFeet está ativa há mais de 3 anos e já vendeu{" "}
                  <strong>1.600+ pares</strong> sem eu tocar em uma única caixa de sapato.
                </p>
                <div className="grid md:grid-cols-2 gap-3 mb-5">
                  {[
                    { emoji: "🏪", bold: "Loja criada do zero ao vivo:", text: "Você assiste cada passo e replica" },
                    { emoji: "🤝", bold: "Fornecedor nacional exclusivo:", text: "Parceiro de 3 anos, dropshipping real" },
                    { emoji: "👟", bold: "100+ modelos de calçados:", text: "Produtos prontos para vender" },
                    { emoji: "📸", bold: "Mídias profissionais inclusas:", text: "Fotos e vídeos para usar nas suas redes" },
                    { emoji: "📦", bold: "Estoque zero:", text: "Venda primeiro, o fornecedor entrega" },
                    { emoji: "⚙️", bold: "Operação no automático:", text: "Loja gerando renda enquanto você dorme" },
                  ].map((item) => (
                    <div key={item.bold} className="flex items-start gap-2 text-sm">
                      <span className="text-lg flex-shrink-0">{item.emoji}</span>
                      <span className="text-gray-300">
                        <strong className="text-white">{item.bold}</strong> {item.text}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
                  <p className="text-sm text-gray-300">
                    <strong className="text-amber-400">Resultado:</strong> Sai do curso com{" "}
                    <strong className="text-white">dois negócios prontos</strong> — o serviço de criar lojas para clientes{" "}
                    <em>e</em> seu próprio e-commerce de calçados gerando renda passiva.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Módulo 04 */}
          <div className="bg-black border border-white/10 rounded-2xl p-8 hover:border-emerald-500/30 transition-colors">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="bg-emerald-900/30 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 border border-emerald-500/20">
                <span className="text-2xl font-extrabold text-emerald-400">04</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-white">Campanhas & Prospecção de Clientes</h3>
                <p className="text-gray-400 mb-4">
                  De nada adianta saber criar lojas se você não sabe vender o serviço. Aqui você aprende a encontrar e fechar clientes.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {["Prospecção de negócios locais", "Scripts de abordagem prontos", "Precificação estratégica", "Fechamento e contrato"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-gray-300">
                      <CircleCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
