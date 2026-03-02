"use client";

import { useState } from "react";
import Link from "next/link";

const ANLEDNINGER = [
  { label: "Bryllup", icon: "💍" },
  { label: "Bedriftsarrangement", icon: "🏢" },
  { label: "Jubileum / feiring", icon: "🥂" },
  { label: "Konfirmasjon", icon: "🎓" },
  { label: "Begravelse", icon: "🕯️" },
  { label: "Gave / bukett", icon: "🎁" },
  { label: "Babyshower", icon: "🍼" },
  { label: "Annet", icon: "✨" },
];

const BUDSJETTER = [
  "Under 2 000 kr",
  "2 000 – 5 000 kr",
  "5 000 – 15 000 kr",
  "15 000 – 50 000 kr",
  "Over 50 000 kr",
  "Vet ikke ennå",
];

export default function BestillingPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    anledning: "",
    dato: "",
    sted: "",
    budsjett: "",
    beskrivelse: "",
    norskdyrket: "3",
    navn: "",
    epost: "",
  });

  const set = (field: string, value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/bestilling", {
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
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-forest-400 to-forest-500 flex items-center justify-center shadow-glow-forest">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-serif text-4xl text-gray-800 mb-4">Forespørsel sendt!</h1>
          <p className="text-gray-600 mb-2 leading-relaxed text-lg">
            Takk, <strong>{form.navn}</strong>!
          </p>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Vi har mottatt forespørselen din og videresender den til relevante
            florister i <strong className="text-forest-600">{form.sted}</strong>.
            Du hører fra oss innen 48 timer på{" "}
            <span className="font-medium text-gray-700">{form.epost}</span>.
          </p>
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
        <span className="text-sm text-gray-400 font-medium">Steg {step} av 2</span>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-8">
        {/* Progress bar */}
        <div className="mb-10">
          <div className="flex gap-3 mb-8">
            <div className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${step >= 1 ? "bg-gradient-to-r from-forest-400 to-forest-500" : "bg-gray-200"}`} />
            <div className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${step >= 2 ? "bg-gradient-to-r from-forest-400 to-forest-500" : "bg-gray-200"}`} />
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-gray-800 mb-2">
            {step === 1 ? "Fortell oss om drømmen din" : "Nesten ferdig!"}
          </h1>
          <p className="text-gray-500 text-lg">
            {step === 1
              ? "Vi bruker dette til å matche deg med de rette floristene."
              : "Bare kontaktinfo igjen — så finner vi floristene dine."}
          </p>
        </div>

        <form onSubmit={step === 2 ? handleSubmit : (e) => { e.preventDefault(); setStep(2); }}>
          {step === 1 && (
            <div className="space-y-8">
              {/* Anledning */}
              <div>
                <label className="label text-base">Hva er anledningen? *</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {ANLEDNINGER.map((a) => (
                    <button
                      key={a.label}
                      type="button"
                      onClick={() => set("anledning", a.label)}
                      className={`flex flex-col items-center gap-2 px-3 py-4 rounded-2xl border-2 text-sm font-medium transition-all duration-300 ${
                        form.anledning === a.label
                          ? "border-forest-500 bg-forest-50 text-forest-700 shadow-sm scale-[1.02]"
                          : "border-gray-100 bg-white/80 text-gray-600 hover:border-forest-200 hover:bg-white"
                      }`}
                    >
                      <span className="text-2xl">{a.icon}</span>
                      <span>{a.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Dato + Sted */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="label" htmlFor="dato">Dato *</label>
                  <input
                    id="dato"
                    type="date"
                    required
                    className="input-field"
                    value={form.dato}
                    onChange={(e) => set("dato", e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
                <div>
                  <label className="label" htmlFor="sted">Sted / by *</label>
                  <input
                    id="sted"
                    type="text"
                    required
                    placeholder="f.eks. Oslo, Bergen..."
                    className="input-field"
                    value={form.sted}
                    onChange={(e) => set("sted", e.target.value)}
                  />
                </div>
              </div>

              {/* Budsjett */}
              <div>
                <label className="label text-base">Omtrentlig budsjett *</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {BUDSJETTER.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => set("budsjett", b)}
                      className={`px-4 py-3 rounded-2xl border-2 text-sm font-medium transition-all duration-300 ${
                        form.budsjett === b
                          ? "border-forest-500 bg-forest-50 text-forest-700 shadow-sm"
                          : "border-gray-100 bg-white/80 text-gray-600 hover:border-forest-200 hover:bg-white"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Beskrivelse */}
              <div>
                <label className="label text-base" htmlFor="beskrivelse">Hva ser du for deg? *</label>
                <textarea
                  id="beskrivelse"
                  required
                  rows={4}
                  placeholder="Beskriv stil, farger, type blomster, antall bord... Jo mer info, jo bedre tilbud får du."
                  className="input-field resize-none"
                  value={form.beskrivelse}
                  onChange={(e) => set("beskrivelse", e.target.value)}
                />
              </div>

              {/* Norskdyrket */}
              <div className="card-glass p-6">
                <label className="label text-base mb-4">
                  Hvor viktig er norskdyrkede blomster?
                </label>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-400 w-20 text-right">Ikke viktig</span>
                  <div className="flex gap-2 flex-1 justify-center">
                    {[1, 2, 3, 4, 5].map((v) => (
                      <button
                        key={v}
                        type="button"
                        onClick={() => set("norskdyrket", String(v))}
                        className={`w-12 h-12 rounded-xl border-2 text-sm font-bold transition-all duration-300 ${
                          form.norskdyrket === String(v)
                            ? "border-forest-500 bg-gradient-to-br from-forest-500 to-forest-600 text-white shadow-md scale-110"
                            : "border-gray-200 text-gray-500 hover:border-forest-300 bg-white/80"
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                  <span className="text-sm text-gray-400 w-20">Veldig viktig</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={!form.anledning || !form.dato || !form.sted || !form.budsjett || !form.beskrivelse}
                className="btn-primary w-full py-4 text-lg disabled:opacity-40 disabled:cursor-not-allowed group"
              >
                Neste steg
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8">
              {/* Summary card */}
              <div className="card bg-gradient-to-br from-forest-50 to-sage-50 border-forest-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif text-lg text-forest-700">Din forespørsel</h3>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-sm text-forest-600 hover:text-forest-700 font-medium flex items-center gap-1 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                    Endre
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-y-2 text-sm">
                  <span className="text-gray-500">Anledning</span>
                  <span className="text-gray-800 font-medium">{form.anledning}</span>
                  <span className="text-gray-500">Dato</span>
                  <span className="text-gray-800 font-medium">{form.dato}</span>
                  <span className="text-gray-500">Sted</span>
                  <span className="text-gray-800 font-medium">{form.sted}</span>
                  <span className="text-gray-500">Budsjett</span>
                  <span className="text-gray-800 font-medium">{form.budsjett}</span>
                </div>
              </div>

              <div>
                <label className="label text-base" htmlFor="navn">Ditt navn *</label>
                <input
                  id="navn"
                  type="text"
                  required
                  placeholder="Fornavn og etternavn"
                  className="input-field"
                  value={form.navn}
                  onChange={(e) => set("navn", e.target.value)}
                />
              </div>

              <div>
                <label className="label text-base" htmlFor="epost">E-postadresse *</label>
                <input
                  id="epost"
                  type="email"
                  required
                  placeholder="din@epost.no"
                  className="input-field"
                  value={form.epost}
                  onChange={(e) => set("epost", e.target.value)}
                />
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  Florister sender tilbud til denne adressen. Vi deler aldri e-posten din uten din tillatelse.
                </p>
              </div>

              {error && (
                <div className="flex items-center gap-3 text-red-600 text-sm bg-red-50 px-5 py-4 rounded-2xl border border-red-100">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading || !form.navn || !form.epost}
                className="btn-primary w-full py-4 text-lg disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
                    Sender...
                  </span>
                ) : (
                  "Send blomsterforespørsel"
                )}
              </button>

              <p className="text-xs text-center text-gray-400">
                Ved å sende godtar du at vi videresender forespørselen til relevante florister.
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
