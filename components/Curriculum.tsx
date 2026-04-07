import Image from "next/image";
import { CircleCheck, Timer, Building2, CreditCard, Truck, Globe, Tag, Send, Store, Users, Camera, Package, Settings2, Layers } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import AnimateIn from "./AnimateIn";

const modules = [
  { src: "/modules/modulo01.jpg", alt: "Módulo 01 — A Base do Seu Negócio Online" },
  { src: "/modules/modulo02.jpg", alt: "Módulo 02 — Criando uma Loja do Zero" },
  { src: "/modules/bonus03.jpg", alt: "Bônus 03 — Venda Sem Estoque e Tenha Liberdade" },
  { src: "/modules/modulo04.jpg", alt: "Módulo 04 — Tráfego Pago e Prospecção" },
];

interface ModuleGroup {
  icon: LucideIcon;
  title: string;
  items: { bold: string; text: string }[];
}

const module2Groups: ModuleGroup[] = [
  {
    icon: Building2,
    title: "Fundação da Loja",
    items: [
      { bold: "Shopify por $3/mês:", text: "Ativa 3 meses por quase nada" },
      { bold: "Tema Exclusivo MPN-On:", text: "Instalado com arquivo .zip + guia" },
      { bold: "Painel da Shopify:", text: "Mapa visual completo + atalhos" },
    ],
  },
  {
    icon: CreditCard,
    title: "Checkout & Pagamento",
    items: [
      { bold: "Checkout Yampi:", text: "Transparente, 1 página, 2,5% no Pix" },
      { bold: "Integração Yampi + Shopify:", text: "21 min ao vivo, do zero ao funcionando" },
      { bold: "Mercado Pago:", text: "Pix, cartão 12x, boleto ativados" },
    ],
  },
  {
    icon: Truck,
    title: "Logística Inteligente",
    items: [
      { bold: "Melhor Envio Completo:", text: "Economia de até 80% no frete" },
      { bold: "4 Opções de Frete:", text: "Nacional, Grátis, Retirada + Expresso" },
      { bold: "Frete Expresso (Planilha CEPs):", text: "Entrega no mesmo dia por R$10" },
    ],
  },
  {
    icon: Globe,
    title: "Domínio & Identidade",
    items: [
      { bold: "Domínio Personalizado:", text: "GoDaddy → Shopify → Yampi (3 aulas)" },
      { bold: "Logo Profissional:", text: "Canva + IA em menos de 30 min" },
      { bold: "Cabeçalho e Cores:", text: "Identidade visual do cliente aplicada" },
    ],
  },
  {
    icon: Tag,
    title: "Produtos & Conteúdo",
    items: [
      { bold: "Páginas de Produtos:", text: "66 min de aula — descrições que vendem" },
      { bold: "Coleções Estratégicas:", text: "Manuais e automáticas" },
      { bold: "Organização em Seções:", text: "44 min — loja com cara profissional" },
    ],
  },
  {
    icon: Send,
    title: "Entrega ao Cliente",
    items: [
      { bold: "WhatsApp Flutuante:", text: "Atendimento instantâneo na loja" },
      { bold: "Rodapé Profissional:", text: "Política, Termos, Contato + templates" },
      { bold: "Entrega via AnyDesk:", text: "Chamada ao vivo mostrando tudo ao cliente" },
    ],
  },
];

interface Module3Item {
  icon: LucideIcon;
  bold: string;
  text: string;
}

const module3Items: Module3Item[] = [
  { icon: Store, bold: "Loja criada do zero ao vivo:", text: "cada passo gravado" },
  { icon: Users, bold: "Fornecedor nacional exclusivo:", text: "parceiro de 3 anos" },
  { icon: Package, bold: "100+ modelos de calçados:", text: "produtos prontos pra vender" },
  { icon: Camera, bold: "800+ mídias profissionais:", text: "fotos e vídeos inclusos" },
  { icon: Layers, bold: "Estoque zero:", text: "venda primeiro, ele entrega" },
  { icon: Settings2, bold: "Operação no automático:", text: "loja rodando enquanto dorme" },
];

export default function Curriculum() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute left-10 top-1/3 w-[400px] h-[400px] bg-emerald-500/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-5xl mx-auto relative z-10 px-4">
        <AnimateIn from="bottom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            O Que Você Vai <span className="text-emerald-400">Aprender?</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            4 módulos completos, do mindset ao faturamento.{" "}
            <strong className="text-white">+8 horas só no módulo principal</strong> — passo a passo, sem segredos, sem enrolação.
          </p>
        </div>
        </AnimateIn>

        {/* Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {modules.map((m, i) => (
            <AnimateIn key={m.src} from="bottom" delay={i * 80}>
            <div
              className="relative rounded-2xl overflow-hidden border border-white/8 hover:border-emerald-500/40 transition-all hover:scale-[1.02] shadow-xl"
              style={{ aspectRatio: "3/4" }}
            >
              <Image src={m.src} alt={m.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
            </div>
            </AnimateIn>
          ))}
        </div>

        <div className="space-y-5">
          {/* Módulo 01 */}
          <AnimateIn from="left" delay={0}>
          <div className="relative bg-white/[0.03] border border-white/8 rounded-2xl p-8 hover:border-emerald-500/25 transition-all overflow-hidden">
            <span className="absolute top-4 right-5 font-bebas text-[80px] text-white/[0.04] leading-none select-none">01</span>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="bg-emerald-900/30 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 border border-emerald-500/20">
                <span className="text-xl font-extrabold text-emerald-400">01</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-white">A Base do Seu Negócio Online</h3>
                <p className="text-gray-400 mb-4">Antes de apertar botões, você precisa pensar como empresário. Aqui preparamos o terreno para o seu sucesso.</p>
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
          </AnimateIn>

          {/* Módulo 02 — PRINCIPAL */}
          <AnimateIn from="right" delay={80}>
          <div className="relative bg-white/[0.03] border border-emerald-500/40 rounded-2xl p-8 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />
            <span className="absolute top-4 right-5 font-bebas text-[80px] text-emerald-500/[0.06] leading-none select-none">02</span>
            <div className="absolute top-0 right-0 bg-emerald-500 text-black text-xs font-extrabold px-4 py-1.5 rounded-bl-xl">
              MÓDULO PRINCIPAL
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="bg-emerald-500 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                <span className="text-xl font-extrabold text-black">02</span>
              </div>
              <div className="w-full">
                <h3 className="text-2xl font-bold mb-2 text-white">Criando uma Loja do Zero — A Mina de Ouro</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full">29 aulas</span>
                  <span className="bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full">+8h de conteúdo</span>
                  <span className="bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full">PDF em cada aula</span>
                </div>
                <p className="text-gray-400 mb-5">
                  Do zero ao site entregue ao cliente. Eu mostro{" "}
                  <strong className="text-white">cada clique, cada configuração, cada detalhe</strong> que faz uma loja vender de verdade.
                </p>
                <div className="space-y-3">
                  {module2Groups.map((group) => {
                    const Icon = group.icon;
                    return (
                      <div key={group.title} className="bg-black/30 border border-white/8 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Icon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <p className="text-sm font-bold text-emerald-400">{group.title}</p>
                        </div>
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
                    );
                  })}
                </div>
                <div className="mt-4 bg-emerald-500/8 border border-emerald-500/20 rounded-xl p-4 flex items-center gap-3">
                  <Timer className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <p className="text-sm text-gray-300">
                    <strong className="text-emerald-400">Resultado:</strong> Loja profissional completa em{" "}
                    <strong className="text-white">1 semana</strong>, pronta pra entregar ao cliente e cobrar de{" "}
                    <strong className="text-white">R$600 a R$1.500</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
          </AnimateIn>

          {/* Módulo 03 — Bônus */}
          <AnimateIn from="left" delay={80}>
          <div className="relative bg-white/[0.03] border border-amber-500/30 rounded-2xl p-8 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
            <span className="absolute top-4 right-5 font-bebas text-[80px] text-amber-500/[0.06] leading-none select-none">03</span>
            <div className="absolute top-0 right-0 bg-amber-500 text-black text-xs font-extrabold px-4 py-1.5 rounded-bl-xl">
              BÔNUS EXCLUSIVO
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="bg-amber-500 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                <span className="text-xl font-extrabold text-black">03</span>
              </div>
              <div className="w-full">
                <h3 className="text-2xl font-bold mb-2 text-white">Bônus — UrbanFeet ao Vivo: Seu E-commerce de Calçados</h3>
                <p className="text-amber-300 text-sm font-medium mb-4">
                  Dropshipping nacional — fornecedor brasileiro, entrega rápida, sem AliExpress, sem produto chinês.
                </p>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Vou abrir minha operação ao vivo e recriar a UrbanFeet do zero nas aulas. Você acompanha cada passo e sai com seu próprio e-commerce de calçados pronto pra gerar renda no automático.
                </p>
                <div className="grid md:grid-cols-2 gap-3 mb-4">
                  {module3Items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.bold} className="flex items-start gap-2 text-sm">
                        <Icon className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">
                          <strong className="text-white">{item.bold}</strong> {item.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          </AnimateIn>

          {/* Módulo 04 */}
          <AnimateIn from="right" delay={80}>
          <div className="relative bg-white/[0.03] border border-white/8 rounded-2xl p-8 hover:border-emerald-500/25 transition-all overflow-hidden">
            <span className="absolute top-4 right-5 font-bebas text-[80px] text-white/[0.04] leading-none select-none">04</span>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="bg-emerald-900/30 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 border border-emerald-500/20">
                <span className="text-xl font-extrabold text-emerald-400">04</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-white">Tráfego Pago e Prospecção: Atraindo Clientes</h3>
                <p className="text-gray-400 mb-4">De nada adianta saber criar lojas se você não sabe vender o serviço. Aqui você aprende a encontrar e fechar clientes.</p>
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
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
