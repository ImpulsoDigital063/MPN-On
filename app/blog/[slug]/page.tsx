import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { posts, getPostBySlug, formatDate } from "@/lib/blog";
import { Clock, ArrowLeft, ArrowRight } from "lucide-react";
import CTAButton from "@/components/CTAButton";

const LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663305937026/Jey4huR4MGMLTE3MYskJ4P/MPN-On-corrigida_cf9701ef.png";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Blog MPN-On`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const otherPosts = posts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Nav */}
      <nav className="border-b border-white/8 px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/">
            <Image src={LOGO} alt="MPN-On" width={120} height={36} style={{ height: "auto" }} className="w-28" />
          </Link>
          <Link href="/blog" className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Blog
          </Link>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto px-4 py-16">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 rounded-full">
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-gray-500 text-xs">
            <Clock className="w-3 h-3" /> {post.readTime}
          </span>
          <span className="text-gray-600 text-xs">{formatDate(post.date)}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">{post.title}</h1>
        <p className="text-gray-400 text-lg leading-relaxed mb-10 border-l-2 border-emerald-500/50 pl-4">{post.description}</p>

        {/* Content */}
        <div
          className="prose prose-invert prose-lg max-w-none
            prose-headings:font-extrabold prose-headings:text-white prose-headings:mt-10 prose-headings:mb-4
            prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-5
            prose-strong:text-white
            prose-ul:text-gray-300 prose-ul:space-y-2
            prose-ol:text-gray-300 prose-ol:space-y-2
            prose-li:leading-relaxed
            prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:text-emerald-300"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA */}
        <div className="mt-16 bg-emerald-950/30 border border-emerald-500/30 rounded-2xl p-8 text-center">
          <p className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-3">MPN-On</p>
          <h3 className="text-2xl md:text-3xl font-extrabold mb-3">Quer colocar tudo isso em prática?</h3>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            O MPN-On te ensina do zero — criar lojas, entregar para clientes e montar seu próprio e-commerce. Tudo em um curso.
          </p>
          <div className="max-w-sm mx-auto">
            <CTAButton>QUERO COMEÇAR AGORA</CTAButton>
          </div>
          <p className="text-gray-600 text-xs mt-3">Garantia de 7 dias · Acesso imediato</p>
        </div>
      </article>

      {/* Outros artigos */}
      {otherPosts.length > 0 && (
        <div className="max-w-3xl mx-auto px-4 pb-16">
          <h2 className="text-xl font-extrabold mb-6 text-gray-300">Continue lendo</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {otherPosts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group">
                <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-5 hover:border-emerald-500/30 transition-all">
                  <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">{p.category}</span>
                  <h3 className="text-base font-extrabold text-white mt-2 mb-2 group-hover:text-emerald-400 transition-colors leading-snug">
                    {p.title}
                  </h3>
                  <div className="flex items-center gap-1 text-emerald-400 text-sm font-bold">
                    Ler <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <footer className="border-t border-white/8 py-8 text-center text-gray-600 text-sm">
        <p>© 2026 MPN-On — Eduardo Barros | CNPJ 64.585.949/0001-83</p>
      </footer>
    </div>
  );
}
