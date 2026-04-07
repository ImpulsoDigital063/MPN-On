"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Preciso saber programar?",
    a: "Não.\n\nVocê não precisa saber programar.\n\nÉ abrir a aula e seguir os passos.",
  },
  {
    q: "Sou iniciante completo. Isso funciona pra mim?",
    a: "Se você é iniciante, melhor ainda.\n\nO método foi feito pra quem está começando do zero.\n\nO único requisito é executar.",
  },
  {
    q: "Já comprei outros cursos e não funcionou. Por que esse seria diferente?",
    a: "Porque aqui você não aprende teoria.\n\nVocê vê sendo feito na prática.\n\nE copia.",
  },
  {
    q: "Quanto tempo leva para criar uma loja?",
    a: "Em 5 a 7 dias você já tem sua primeira loja pronta.\n\nDepois disso, 2 a 3 dias por projeto.",
  },
  {
    q: "Quem vai comprar meu serviço?",
    a: "Negócios locais.\n\nGente que já vende, mas não tem loja online.\n\nE isso tem em todo lugar.",
  },
  {
    q: "Preciso investir muito para começar?",
    a: "Não.\n\nVocê começa com praticamente zero.\n\nE recupera o investimento com a primeira loja.",
  },
  {
    q: "Por quanto tempo tenho acesso?",
    a: "Acesso vitalício.\n\nO conteúdo é seu pra sempre — incluindo as atualizações.\n\nAssiste no seu ritmo, volta quando precisar.",
  },
  {
    q: "Preciso ter CNPJ?",
    a: "Não precisa pra começar.\n\nVocê recebe via Pix como pessoa física.\n\nQuando o volume crescer, você formaliza.",
  },
  {
    q: "E se eu não gostar do curso?",
    a: "Você tem 7 dias pra testar.\n\nSe não fizer sentido, eu devolvo 100% do seu dinheiro.\n\nSem pergunta.",
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
          <div className="text-gray-400 leading-relaxed space-y-2">
            {faq.a.split("\n\n").map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
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
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-snug">
            Se você chegou até aqui,{" "}
            <span className="text-emerald-400">provavelmente está pensando nisso:</span>
          </h2>
        </div>
        <div className="space-y-4 mb-12">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} faq={faq} />
          ))}
        </div>
        <div className="text-center space-y-1">
          <p className="text-gray-400 text-lg">Você já entendeu como funciona.</p>
          <p className="text-white font-bold text-xl">Agora é decisão.</p>
        </div>
      </div>
    </section>
  );
}
