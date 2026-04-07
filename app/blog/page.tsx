import Link from "next/link";
import Image from "next/image";
import { posts, formatDate } from "@/lib/blog";
import { Clock, ArrowRight } from "lucide-react";

const LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663305937026/Jey4huR4MGMLTE3MYskJ4P/MPN-On-corrigida_cf9701ef.png";

const categoryColors: Record<string, string> = {
  Shopify: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Dropshipping: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Negócios: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Logística: "bg-purple-500/10 text-purple-400 border-purple-500/20",
};

export const metadata = {
  title: "Blog MPN-On | Negócios Online, Shopify e Dropshipping",
  description: "Artigos sobre e-commerce, Shopify, dropshipping nacional e como criar negócios online do zero.",
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Nav */}
      <nav className="border-b border-white/8 px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/">
            <Image src={LOGO} alt="MPN-On" width={120} height={36} style={{ height: "auto" }} className="w-28" />
          </Link>
          <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
            ← Voltar ao site
          </Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-14">
          <p className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-3">Blog MPN-On</p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Aprenda. Execute.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-500">
              Fature.
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Conteúdo prático sobre Shopify, dropshipping nacional e como transformar o mercado digital em renda real.
          </p>
        </div>

        {/* Featured post */}
        <Link href={`/blog/${featured.slug}`} className="group block mb-14">
          <div className="bg-white/[0.03] border border-white/8 rounded-3xl overflow-hidden hover:border-emerald-500/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(16,185,129,0.06)]">
            <div className="grid md:grid-cols-2">
              <div className="bg-gradient-to-br from-emerald-900/30 to-black min-h-[280px] flex items-center justify-center p-8">
                <div className="text-center">
                  <span className="font-bebas text-[80px] text-emerald-400/20 leading-none block">01</span>
                  <p className="text-emerald-400 font-bold text-sm uppercase tracking-widest">Artigo em Destaque</p>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${categoryColors[featured.category] || "bg-white/10 text-white border-white/10"}`}>
                    {featured.category}
                  </span>
                  <span className="flex items-center gap-1 text-gray-500 text-xs">
                    <Clock className="w-3 h-3" /> {featured.readTime}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3 group-hover:text-emerald-400 transition-colors leading-snug">
                  {featured.title}
                </h2>
                <p className="text-gray-400 leading-relaxed mb-5">{featured.description}</p>
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  Ler artigo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Grid de posts */}
        <div className="grid md:grid-cols-3 gap-6">
          {rest.map((post, i) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <div className="bg-white/[0.03] border border-white/8 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all duration-300 h-full flex flex-col">
                <div className="bg-gradient-to-br from-emerald-900/20 to-black h-40 flex items-center justify-center">
                  <span className="font-bebas text-[60px] text-emerald-400/15 leading-none">{String(i + 2).padStart(2, "0")}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${categoryColors[post.category] || "bg-white/10 text-white border-white/10"}`}>
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-gray-600 text-xs">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-white mb-2 group-hover:text-emerald-400 transition-colors leading-snug flex-1">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.description}</p>
                  <div className="flex items-center gap-1 text-emerald-400 font-bold text-sm mt-auto">
                    Ler <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer simples */}
      <footer className="border-t border-white/8 py-8 text-center text-gray-600 text-sm mt-16">
        <p>© 2026 MPN-On — Eduardo Barros | CNPJ 64.585.949/0001-83</p>
      </footer>
    </div>
  );
}
