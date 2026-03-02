"use client";

import Link from "next/link";
import { useState } from "react";

export default function ForslagPage() {
  const [form, setForm] = useState({
    type: "",
    name: "",
    city: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  function update(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.type) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/suggestions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setStatus("done");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-5xl mx-auto">
        <Link href="/" className="font-serif text-2xl text-forest-700 tracking-tight">
          blomsterkollektivet.
        </Link>
        <Link href="/" className="text-sm text-gray-500 hover:text-forest-600">
          ← Tilbake
        </Link>
      </nav>

      <div className="max-w-xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <div className="text-4xl mb-4">💡</div>
          <h1 className="font-serif text-4xl text-gray-800 mb-3">Send oss et forslag</h1>
          <p className="text-gray-500 leading-relaxed">
            Vet du om en blomsterbutikk vi bør ha med? En blomsterbonde i ditt nærområde?
            En by eller region vi bør prioritere? Fortell oss!
          </p>
        </div>

        {status === "done" ? (
          <div className="card p-10 text-center">
            <div className="text-4xl mb-4">🌸</div>
            <h2 className="font-serif text-2xl text-gray-800 mb-3">Takk for forslaget!</h2>
            <p className="text-gray-500 mb-6">
              Vi ser på det og følger opp. Du hjelper oss å bygge et bedre blomsterfellesskap.
            </p>
            <Link href="/" className="btn-primary">
              Tilbake til forsiden
            </Link>
          </div>
        ) : (
          <div className="card p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Type */}
              <div>
                <label className="label">Hva gjelder forslaget? *</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { value: "florist", icon: "🌸", label: "Blomsterbutikk / florist" },
                    { value: "bonde", icon: "🌾", label: "Blomsterbonde / dyrker" },
                    { value: "region", icon: "📍", label: "By eller region" },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => update("type", opt.value)}
                      className={`p-3 rounded-xl border-2 text-sm font-medium transition-all text-left flex items-center gap-2 ${
                        form.type === opt.value
                          ? "border-forest-500 bg-forest-50 text-forest-700"
                          : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                      }`}
                    >
                      <span>{opt.icon}</span>
                      <span>{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="label">
                  {form.type === "region" ? "By / region" : "Navn (butikk, bonde, florist)"}
                </label>
                <input
                  type="text"
                  placeholder={form.type === "region" ? "f.eks. Stavanger" : "f.eks. Blomst & Brukt, Trondheim"}
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="input-field"
                />
              </div>

              {/* City — only for florist/bonde */}
              {form.type !== "region" && (
                <div>
                  <label className="label">By / sted</label>
                  <input
                    type="text"
                    placeholder="f.eks. Bergen"
                    value={form.city}
                    onChange={(e) => update("city", e.target.value)}
                    className="input-field"
                  />
                </div>
              )}

              {/* Message */}
              <div>
                <label className="label">Ekstra info (valgfritt)</label>
                <textarea
                  rows={3}
                  placeholder="Nettside, Instagram, noe du vet om dem…"
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  className="input-field resize-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="label">Din e-post (valgfritt — for svar fra oss)</label>
                <input
                  type="email"
                  placeholder="din@epost.no"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="input-field"
                />
              </div>

              <button
                type="submit"
                disabled={!form.type || status === "loading"}
                className="btn-primary w-full text-center"
              >
                {status === "loading" ? "Sender…" : "Send forslag →"}
              </button>

              {status === "error" && (
                <p className="text-red-500 text-sm text-center">Noe gikk galt. Prøv igjen.</p>
              )}
            </form>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 mt-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <Link href="/" className="font-serif text-lg text-forest-700">blomsterkollektivet.</Link>
          <span>© 2026 Blomsterkollektivet.</span>
        </div>
      </footer>
    </div>
  );
}
