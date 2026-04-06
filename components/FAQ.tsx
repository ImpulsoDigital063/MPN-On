"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Preciso saber programar?",
    a: "Não. O MPN-On foi criado exatamente para quem não tem nenhum conhecimento técnico. Você vai aprender a criar lojas profissionais só apertando botões — exatamente como eu mostro nas aulas. Nenhuma linha de código.",
  },
  {
    q: "Quanto vou ganhar?",
    a: "Isso depende da sua dedicação, mas o mercado é real. Criando apenas 3 lojas por mês cobrando R$600, você já fatura R$1.800. Criando 7 lojas como eu, o potencial é de R$4.200 a R$10.500 mensais — só com prestação de serviços. Somando a loja própria de calçados, os números crescem ainda mais.",
  },
  {
    q: "Quanto tempo leva para criar uma loja?",
    a: "Nas primeiras vezes, você vai levar de 5 a 7 dias. Depois que você pegar o jeito, 2 a 3 dias. Eu crio em média 7 lojas por mês trabalhando de forma organizada, sem pressa.",
  },
  {
    q: "Quem vai comprar meu serviço?",
    a: "Todo negócio local que vende produto mas ainda não tem loja online. São padarias, suplementos, joias, roupas, pet shops, cosméticos, artesanato... São milhões de negócios no Brasil inteiro. O módulo 4 te ensina exatamente como prospectar esses clientes com scripts prontos.",
  },
  {
    q: "Preciso investir muito para começar?",
    a: "Não. O Shopify custa apenas $1/mês nos primeiros 3 meses. O Yampi tem plano gratuito para começar. O Melhor Envio também é grátis para cadastrar. O investimento principal é no próprio curso — e ele se paga com a primeira loja entregue.",
  },
  {
    q: "O tema exclusivo funciona em qualquer nicho?",
    a: "Sim. O tema foi desenvolvido para ser versátil. Eu o uso em lojas de roupas, suplementos, calçados, joias, cosméticos, pet shops e muito mais. As configurações de frete, pagamento e WhatsApp funcionam em qualquer tipo de produto.",
  },
  {
    q: "Preciso ter CNPJ?",
    a: "Não é obrigatório para começar. Você pode criar lojas para clientes e receber via Pix como pessoa física. Conforme seu volume de negócios crescer, aí faz sentido formalizar — mas para dar os primeiros passos, não é necessário.",
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
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Perguntas <span className="text-emerald-400">Frequentes</span>
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
