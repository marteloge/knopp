import Link from "next/link";
import type { Metadata } from "next";
import { posts } from "../data/posts";

export const metadata: Metadata = {
  title: "Blogg — Blomsterkollektivet",
  description:
    "Tips, guider og inspirasjon om norske blomster — bryllupsblomster, sesongguider, priser og norsk blomsterdyrking.",
};

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("nb-NO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BloggPage() {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen bg-cream">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-5xl mx-auto">
        <Link href="/" className="font-serif text-2xl text-forest-700 tracking-tight">
          blomsterkollektivet.
        </Link>
        <Link href="/bestilling" className="btn-primary">
          Send forespørsel →
        </Link>
      </nav>

      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <div className="inline-block bg-blush-100 text-blush-600 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
          🌿 Blomsterbloggen
        </div>
        <h1 className="font-serif text-4xl md:text-5xl text-gray-800 mb-4">
          Guider, tips og inspirasjon
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Alt du trenger å vite om norske blomster — fra bryllupsplanlegging til kortreist dyrking.
        </p>
      </section>

      {/* Posts */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {sorted.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blogg/${post.slug}`}
              className={`card group hover:shadow-md transition-shadow duration-200 ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold text-blush-500 uppercase tracking-widest">
                  {post.category}
                </span>
                <span className="text-gray-200">•</span>
                <span className="text-xs text-gray-400">{post.readTime} lesing</span>
              </div>
              <h2
                className={`font-serif text-gray-800 mb-3 group-hover:text-forest-600 transition-colors ${
                  i === 0 ? "text-3xl" : "text-xl"
                }`}
              >
                {post.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">{formatDate(post.date)}</span>
                <span className="text-forest-600 text-sm font-medium group-hover:underline">
                  Les mer →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-100 py-14 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-serif text-3xl text-gray-800 mb-3">Finn din florist</h2>
          <p className="text-gray-500 mb-6">
            Send én forespørsel og motta tilbud fra lokale florister innen 48 timer. Gratis.
          </p>
          <Link href="/bestilling" className="btn-primary text-lg px-8 py-4">
            Send blomsterforespørsel →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <Link href="/" className="font-serif text-lg text-forest-700">blomsterkollektivet.</Link>
          <div className="flex gap-6">
            <Link href="/forslag" className="hover:text-gray-600">Forslag</Link>
            <Link href="/verv" className="hover:text-gray-600">For florister</Link>
          </div>
          <span>© 2026 Blomsterkollektivet.</span>
        </div>
      </footer>
    </div>
  );
}
