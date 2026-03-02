import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts, getPostBySlug } from "../../data/posts";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Blomsterkollektivet`,
    description: post.excerpt,
  };
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("nb-NO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BloggPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const otherPosts = posts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-cream">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-5xl mx-auto">
        <Link href="/" className="font-serif text-2xl text-forest-700 tracking-tight">
          blomsterkollektivet.
        </Link>
        <Link href="/blogg" className="text-sm text-gray-500 hover:text-forest-600">
          ← Alle innlegg
        </Link>
      </nav>

      {/* Article */}
      <article className="max-w-2xl mx-auto px-6 py-12">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-semibold text-blush-500 uppercase tracking-widest">
            {post.category}
          </span>
          <span className="text-gray-200">•</span>
          <span className="text-xs text-gray-400">{post.readTime} lesing</span>
          <span className="text-gray-200">•</span>
          <span className="text-xs text-gray-400">{formatDate(post.date)}</span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-4xl md:text-5xl text-gray-900 leading-tight mb-6">
          {post.title}
        </h1>

        {/* Excerpt */}
        <p className="text-xl text-gray-600 leading-relaxed mb-10 pb-10 border-b border-gray-100">
          {post.excerpt}
        </p>

        {/* Content */}
        <div
          className="blog-content text-gray-600 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* CTA */}
      <section className="max-w-2xl mx-auto px-6 py-10">
        <div className="bg-forest-700 rounded-3xl p-8 text-white text-center">
          <h2 className="font-serif text-2xl mb-3">Klar til å finne din florist?</h2>
          <p className="text-forest-100 mb-6 text-sm leading-relaxed">
            Send én blomsterforespørsel og motta tilbud fra lokale florister innen 48 timer.
            Gratis, ingen binding.
          </p>
          <Link
            href="/bestilling"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-forest-700 font-semibold hover:bg-forest-50 transition-colors"
          >
            Send blomsterforespørsel →
          </Link>
        </div>
      </section>

      {/* Other posts */}
      {otherPosts.length > 0 && (
        <section className="max-w-2xl mx-auto px-6 pb-16">
          <h2 className="font-serif text-2xl text-gray-800 mb-6">Les også</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {otherPosts.map((p) => (
              <Link key={p.slug} href={`/blogg/${p.slug}`} className="card group hover:shadow-md transition-shadow">
                <div className="text-xs font-semibold text-blush-500 uppercase tracking-widest mb-2">
                  {p.category}
                </div>
                <h3 className="font-serif text-lg text-gray-800 mb-2 group-hover:text-forest-600 transition-colors">
                  {p.title}
                </h3>
                <span className="text-forest-600 text-sm font-medium group-hover:underline">Les mer →</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <Link href="/" className="font-serif text-lg text-forest-700">blomsterkollektivet.</Link>
          <div className="flex gap-6">
            <Link href="/blogg" className="hover:text-gray-600">Blogg</Link>
            <Link href="/forslag" className="hover:text-gray-600">Forslag</Link>
          </div>
          <span>© 2026 Blomsterkollektivet.</span>
        </div>
      </footer>
    </div>
  );
}
