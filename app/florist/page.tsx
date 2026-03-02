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
      setError("Noe gikk galt. Prøv igjen eller send e-post til hei@knopp.no");
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <div className="text-6xl mb-6">🌿</div>
          <h1 className="font-serif text-3xl text-gray-800 mb-4">Velkommen, {form.navn}!</h1>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Vi har mottatt registreringen din og vil ta kontakt på{" "}
            <strong>{form.epost}</strong> innen kort tid.
          </p>
          <div className="card bg-forest-50 border-forest-100 mb-8 text-left">
            <p className="text-sm text-forest-700 font-medium mb-2">
              🌟 Du er registrert som grunnlegger-florist!
            </p>
            <p className="text-xs text-forest-600 leading-relaxed">
              De første 50 floristene på Knopp får permanent 10% provisjon
              (istedenfor standard 12%) og grunnlegger-badge på profilen.
            </p>
          </div>
          <Link href="/" className="btn-primary">
            Tilbake til forsiden
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-3xl mx-auto">
        <Link href="/" className="font-serif text-2xl text-forest-700 tracking-tight">
          knopp.
        </Link>
        <Link href="/bestilling" className="text-sm text-gray-500 hover:text-gray-700">
          Trenger du blomster?
        </Link>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-block bg-blush-100 text-blush-600 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            🌟 Grunnlegger-florist — de første 50
          </div>
          <h1 className="font-serif text-4xl text-gray-800 mb-3">
            Bli med på Knopp
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Knopp matcher kunder med lokale florister. Du betaler kun 10% provisjon
            når du får et bekreftet oppdrag — null månedlig avgift.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {[
            { icon: "🎯", title: "Kun kvalifiserte leads", desc: "Kunder som vet hva de vil ha og er klare til å booke." },
            { icon: "💸", title: "Betal bare ved booking", desc: "10% provisjon. Ingen betaling uten oppdrag." },
            { icon: "🌱", title: "Beholde kunden", desc: "Du bygger relasjonen. Vi hjelper deg å finne dem." },
          ].map((b) => (
            <div key={b.title} className="card text-center p-5">
              <div className="text-3xl mb-2">{b.icon}</div>
              <div className="font-semibold text-gray-800 text-sm mb-1">{b.title}</div>
              <div className="text-xs text-gray-500">{b.desc}</div>
            </div>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
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
              <label className="label" htmlFor="butikknavn">Butikk / virksomhetsnavn *</label>
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
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {BYER.map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => set("by", b)}
                  className={`px-3 py-2.5 rounded-xl border text-sm font-medium transition-all text-left ${
                    form.by === b
                      ? "border-forest-500 bg-forest-50 text-forest-700"
                      : "border-gray-200 bg-white text-gray-600 hover:border-forest-300"
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
            <div className="grid grid-cols-2 gap-2">
              {SPESIALER.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => toggleSpesialer(s)}
                  className={`px-3 py-2.5 rounded-xl border text-sm font-medium transition-all text-left ${
                    form.spesialer.includes(s)
                      ? "border-forest-500 bg-forest-50 text-forest-700"
                      : "border-gray-200 bg-white text-gray-600 hover:border-forest-300"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="label" htmlFor="instagram">Instagram-profil (valgfritt)</label>
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
            <label className="label" htmlFor="melding">Fortell oss litt om deg selv (valgfritt)</label>
            <textarea
              id="melding"
              rows={3}
              placeholder="Hvor lenge har du jobbet som florist? Hva er din stil? Noe du vil vi skal vite?"
              className="input-field resize-none"
              value={form.melding}
              onChange={(e) => set("melding", e.target.value)}
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm bg-red-50 px-4 py-3 rounded-xl">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading || !form.navn || !form.butikknavn || !form.by || !form.epost}
            className="btn-primary w-full py-4 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? "Sender..." : "Registrer meg som florist 🌿"}
          </button>

          <p className="text-xs text-center text-gray-400">
            Vi tar kontakt innen 2 virkedager for å bekrefte registreringen.
          </p>
        </form>
      </div>
    </div>
  );
}
