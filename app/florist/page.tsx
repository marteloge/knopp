"use client";

import { useState } from "react";
import Link from "next/link";

const SPESIALER = [
  "Bryllupsblomster",
  "Bedriftsarrangementer",
  "Begravelse",
  "Konfirmasjon / feiring",
  "Daglige buketter",
  "Planter og potteplanter",
  "Kurver og gaver",
  "Norskdyrkede blomster",
];

const BYER = [
  "Oslo",
  "Bergen",
  "Trondheim",
  "Stavanger",
  "Tromsø",
  "Kristiansand",
  "Drammen",
  "Fredrikstad",
  "Annet / hele Norge",
];

export default function FloristPage() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    navn: "",
    butikknavn: "",
    by: "",
    epost: "",
    telefon: "",
    instagram: "",
    nettside: "",
    spesialer: [] as string[],
    erfaring: "",
    melding: "",
  });

  const set = (field: string, value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  const toggleSpesialer = (s: string) =>
    setForm((f) => ({
      ...f,
      spesialer: f.spesialer.includes(s)
        ? f.spesialer.filter((x) => x !== s)
        : [...f.spesialer, s],
    }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/florist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Noe gikk galt");
      setSent(true);
    } catch {
      setError("Noe gikk galt. Prøv igjen eller send e-post til hei@blomsterkollektivet.no");
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-cream to-forest-50 flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-forest-400 to-forest-600 flex items-center justify-center shadow-glow-forest">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-serif text-4xl text-gray-800 mb-4">Velkommen, {form.navn}!</h1>
          <p className="text-gray-600 mb-4 leading-relaxed text-lg">
            Vi har mottatt registreringen din og vil ta kontakt på{" "}
            <strong className="text-forest-600">{form.epost}</strong> innen kort tid.
          </p>
          <div className="card bg-gradient-to-br from-forest-50 to-sage-50 border-forest-100 mb-8 text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 rounded-full bg-gradient-to-br from-warm-300 to-warm-400 flex items-center justify-center text-white text-xs">★</span>
              <p className="text-sm text-forest-700 font-semibold">Grunnlegger-florist!</p>
            </div>
            <p className="text-sm text-forest-600 leading-relaxed">
              De første 50 floristene på Blomsterkollektivet får permanent 8% provisjon
              (istedenfor standard 10%) og grunnlegger-merke på profilen.
            </p>
          </div>
          <Link href="/" className="btn-primary">
            ← Tilbake til forsiden
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-cream-200">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-3xl mx-auto">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-display text-lg text-forest-700">blomster</span>
          <span className="font-display text-lg text-forest-700 -mt-0.5">kollektivet<span className="text-blush-400">.</span></span>
        </Link>
        <Link href="/bestilling" className="text-sm text-gray-500 hover:text-forest-600 transition-colors">
          Trenger du blomster?
        </Link>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-10">
          <span className="badge-warm mb-4 inline-flex">
            <span className="w-2 h-2 rounded-full bg-warm-400 animate-pulse-soft" />
            Grunnlegger-florist — de første 50
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-gray-800 mb-3 leading-tight">
            Bli med i<br />
            <span className="gradient-text">Blomsterkollektivet</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Vi matcher kunder med lokale florister. Du betaler kun 10% provisjon
            ved bekreftet oppdrag — null månedlig avgift.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {[
            {
              icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "Kun kvalifiserte leads",
              desc: "Kunder som vet hva de vil ha og er klare til å booke.",
              color: "text-forest-500",
              bg: "from-forest-50 to-sage-50",
            },
            {
              icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "Betal bare ved booking",
              desc: "10% provisjon. Ingen månedlige kostnader.",
              color: "text-blush-500",
              bg: "from-blush-50 to-petal-50",
            },
            {
              icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              ),
              title: "Du beholder kunden",
              desc: "Du bygger relasjonen. Vi hjelper deg å finne dem.",
              color: "text-warm-400",
              bg: "from-warm-50 to-cream-200",
            },
          ].map((b) => (
            <div key={b.title} className={`bg-gradient-to-br ${b.bg} rounded-2xl p-5 border border-white/50`}>
              <div className={`${b.color} mb-3`}>{b.icon}</div>
              <div className="font-semibold text-gray-800 text-sm mb-1">{b.title}</div>
              <div className="text-xs text-gray-500 leading-relaxed">{b.desc}</div>
            </div>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <h2 className="font-serif text-2xl text-gray-800">Registrer deg</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="label" htmlFor="navn">Ditt navn *</label>
              <input
                id="navn"
                type="text"
                required
                placeholder="Fornavn Etternavn"
                className="input-field"
                value={form.navn}
                onChange={(e) => set("navn", e.target.value)}
              />
            </div>
            <div>
              <label className="label" htmlFor="butikknavn">Butikk / virksomhet *</label>
              <input
                id="butikknavn"
                type="text"
                required
                placeholder="Blomsterstue AS"
                className="input-field"
                value={form.butikknavn}
                onChange={(e) => set("butikknavn", e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="label">Hvilke byer dekker du? *</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {BYER.map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => set("by", b)}
                  className={`px-4 py-3 rounded-2xl border-2 text-sm font-medium transition-all duration-300 text-left ${
                    form.by === b
                      ? "border-forest-500 bg-forest-50 text-forest-700 shadow-sm"
                      : "border-gray-100 bg-white/80 text-gray-600 hover:border-forest-200 hover:bg-white"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="label" htmlFor="epost">E-postadresse *</label>
              <input
                id="epost"
                type="email"
                required
                placeholder="din@blomsterstue.no"
                className="input-field"
                value={form.epost}
                onChange={(e) => set("epost", e.target.value)}
              />
            </div>
            <div>
              <label className="label" htmlFor="telefon">Telefon (valgfritt)</label>
              <input
                id="telefon"
                type="tel"
                placeholder="+47 900 00 000"
                className="input-field"
                value={form.telefon}
                onChange={(e) => set("telefon", e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="label">Spesialer (velg alle som passer)</label>
            <div className="grid grid-cols-2 gap-3">
              {SPESIALER.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => toggleSpesialer(s)}
                  className={`px-4 py-3 rounded-2xl border-2 text-sm font-medium transition-all duration-300 text-left ${
                    form.spesialer.includes(s)
                      ? "border-forest-500 bg-forest-50 text-forest-700 shadow-sm"
                      : "border-gray-100 bg-white/80 text-gray-600 hover:border-forest-200 hover:bg-white"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="label" htmlFor="instagram">Instagram (valgfritt)</label>
              <input
                id="instagram"
                type="text"
                placeholder="@blomsterstue"
                className="input-field"
                value={form.instagram}
                onChange={(e) => set("instagram", e.target.value)}
              />
            </div>
            <div>
              <label className="label" htmlFor="nettside">Nettside (valgfritt)</label>
              <input
                id="nettside"
                type="url"
                placeholder="https://blomsterstue.no"
                className="input-field"
                value={form.nettside}
                onChange={(e) => set("nettside", e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="label" htmlFor="melding">Fortell oss om deg (valgfritt)</label>
            <textarea
              id="melding"
              rows={3}
              placeholder="Hvor lenge har du jobbet som florist? Hva er din stil?"
              className="input-field resize-none"
              value={form.melding}
              onChange={(e) => set("melding", e.target.value)}
            />
          </div>

          {error && (
            <div className="flex items-center gap-3 text-red-600 text-sm bg-red-50 px-5 py-4 rounded-2xl border border-red-100">
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !form.navn || !form.butikknavn || !form.by || !form.epost}
            className="btn-primary w-full py-4 text-lg disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
                Sender...
              </span>
            ) : (
              "Registrer meg som florist"
            )}
          </button>

          <p className="text-xs text-center text-gray-400">
            Vi tar kontakt innen 2 virkedager for å bekrefte registreringen.
          </p>
        </form>
      </div>
    </div>
  );
}
