"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Preciso saber programar?",
    a: "Não. O MPN-On foi criado exatamente para quem não tem nenhum conhecimento técnico. Você aprende a criar lojas profissionais só apertando botões — exatamente como eu mostro nas aulas, clique por clique. Nenhuma linha de código.",
  },
  {
    q: "Sou iniciante completo. Isso funciona pra mim?",
    a: "Foi exatamente para você que esse curso foi criado. Comecei do zero absoluto — sem saber programar, sem dinheiro para anunciar, sem seguidores. O método não exige experiência prévia. Exige disposição para abrir a aula e executar.",
  },
  {
    q: "Já comprei outros cursos e não funcionou. Por que esse seria diferente?",
    a: "Entendo. A maioria dos cursos ensina teoria — você assiste, anota, e na hora de executar trava porque ninguém te mostrou o clique certo. Aqui é diferente: cada aula do módulo principal é gravada diretamente no painel, criando uma loja real do zero. Você vê exatamente o que fazer. E se travar, tem suporte direto comigo.",
  },
  {
    q: "Quanto tempo leva para criar uma loja?",
    a: "Nas primeiras vezes, de 5 a 7 dias. Depois que você pega o jeito, 2 a 3 dias. Eu crio em média 7 lojas por mês trabalhando de forma organizada. E no final da primeira semana de curso, você já tem uma loja no seu portfólio — pronta para mostrar para qualquer cliente.",
  },
  {
    q: "Quem vai comprar meu serviço?",
    a: "Todo negócio local que vende produto mas ainda não tem loja online. Suplementos, roupas, joias, pet shops, cosméticos, artesanato, hamburguerias — são milhões de negócios no Brasil. Você não precisa ir longe: os seus primeiros clientes provavelmente estão a 5 minutos de você. O módulo 4 te ensina a prospectar com scripts prontos.",
  },
  {
    q: "Preciso investir muito para começar?",
    a: "Não. A Shopify custa $1/mês nos primeiros 3 meses. O Yampi tem plano gratuito. O Melhor Envio é grátis para cadastrar. O investimento principal é no curso — e ele se paga com a primeira loja entregue.",
  },
  {
    q: "Por quanto tempo tenho acesso?",
    a: "Acesso vitalício. Uma vez dentro, o conteúdo é seu para sempre — incluindo todas as atualizações que forem feitas no curso. Você assiste no seu ritmo, volta quando precisar e consulta os PDFs de apoio sempre que for criar uma nova loja.",
  },
  {
    q: "Preciso ter CNPJ?",
    a: "Não é obrigatório para começar. Você pode criar lojas para clientes e receber via Pix como pessoa física. Conforme seu volume crescer, aí faz sentido formalizar — mas para os primeiros projetos, não é necessário.",
  },
  {
    q: "E se eu não gostar do curso?",
    a: "Você tem 7 dias de garantia incondicional. Se por qualquer motivo achar que o curso não é para você, basta pedir o reembolso e devolvemos 100% do valor pago. Sem perguntas, sem burocracia. O risco é todo meu.",
  },
];

function FAQItem({ faq }: { faq: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden hover:border-emerald-500/30 transition-colors">
      <button
        className="w-full flex items-center justify-between p-6 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="text-lg font-bold text-white pr-4">{faq.q}</span>
        <ChevronDown
          className={`w-5 h-5 text-emerald-400 flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-6">
          <p className="text-gray-400 leading-relaxed">{faq.a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-3xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Ainda tem <span className="text-emerald-400">alguma dúvida?</span>
          </h2>
          <p className="text-gray-400 text-lg">
            As perguntas mais comuns de quem está na mesma posição que você estava.
          </p>
        </div>
        <div className="space-y-4 mb-12">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} faq={faq} />
          ))}
        </div>
        <p className="text-center text-gray-500 text-base">
          Dúvida respondida?{" "}
          <span className="text-white font-semibold">Então só falta uma coisa.</span>
        </p>
      </div>
    </section>
  );
}
