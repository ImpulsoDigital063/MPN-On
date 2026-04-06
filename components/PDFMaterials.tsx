export default function PDFMaterials() {
  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-blue-400 text-sm font-semibold">📄 MATERIAL DE APOIO EXCLUSIVO</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Cada Aula Tem Seu <span className="text-blue-400">PDF Completo</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Além das videoaulas, você recebe um{" "}
            <strong className="text-white">material em PDF para cada aula</strong> — com todo o conteúdo explicado por escrito, passo a passo, e com{" "}
            <strong className="text-blue-400">todos os links das ferramentas e sites</strong> que você vai usar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { emoji: "📖", title: "Reforço do Aprendizado", desc: "Releia o conteúdo da aula quando quiser, no seu ritmo, sem precisar pausar o vídeo toda hora." },
            { emoji: "🔗", title: "Todos os Links Prontos", desc: "Cada PDF contém os links diretos para os sites, ferramentas e plataformas usadas na aula — sem precisar procurar nada." },
            { emoji: "🗂️", title: "Guia de Consulta Rápida", desc: "Quando for criar uma loja para um cliente, use os PDFs como checklist. Tudo que precisa está ali, organizado." },
          ].map((card) => (
            <div key={card.title} className="bg-white/5 border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-colors">
              <div className="text-4xl mb-4">{card.emoji}</div>
              <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-900/20 to-black border border-blue-500/30 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-6xl flex-shrink-0">📚</div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">29 Aulas + 29 PDFs Complementares</h3>
              <p className="text-gray-300 leading-relaxed">
                Você não vai aprender só assistindo. Vai aprender{" "}
                <strong className="text-white">fazendo</strong> — com o vídeo na tela e o PDF do lado, com todos os passos e links que precisa para nunca travar. É como ter um manual de instrução completo para cada etapa do seu negócio.
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                {["Shopify", "Yampi", "Melhor Envio", "Mercado Pago", "Canva", "AnyDesk"].map((tag) => (
                  <span key={tag} className="bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-medium px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
