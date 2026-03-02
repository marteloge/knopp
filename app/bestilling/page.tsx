"use client";

import { useState } from "react";
import Link from "next/link";

const ANLEDNINGER = [
  "Bryllup",
  "Bedriftsarrangement",
  "Jubileum / feiring",
  "Konfirmasjon",
  "Begravelse",
  "Gave / bukett",
  "Babyshower",
  "Annet",
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
      setError("Noe gikk galt. Prøv igjen eller send e-post til hei@knopp.no");
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <div className="text-6xl mb-6">🌸</div>
          <h1 className="font-serif text-3xl text-gray-800 mb-4">Forespørsel mottatt!</h1>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Takk, <strong>{form.navn}</strong>! Vi har mottatt forespørselen din og
            videresender den til relevante florister i <strong>{form.sted}</strong>.
          </p>
          <p className="text-gray-500 text-sm mb-8">
            Du vil høre fra oss innen 48 timer på{" "}
            <span className="font-medium text-gray-700">{form.epost}</span>
          </p>
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
        <span className="text-sm text-gray-400">Steg {step} av 2</span>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-8">
        <div className="mb-10">
          <div className="flex gap-2 mb-6">
            <div className={`h-1.5 flex-1 rounded-full ${step >= 1 ? "bg-forest-500" : "bg-gray-200"}`} />
            <div className={`h-1.5 flex-1 rounded-full ${step >= 2 ? "bg-forest-500" : "bg-gray-200"}`} />
          </div>
          <h1 className="font-serif text-3xl text-gray-800 mb-2">
            {step === 1 ? "Fortell oss om blomstene dine" : "Kontaktinformasjon"}
          </h1>
          <p className="text-gray-500">
            {step === 1
              ? "Vi bruker dette til å matche deg med de rette floristene."
              : "Florister bruker dette for å sende deg tilbud."}
          </p>
        </div>

        <form onSubmit={step === 2 ? handleSubmit : (e) => { e.preventDefault(); setStep(2); }}>
          {step === 1 && (
            <div className="space-y-6">
              {/* Anledning */}
              <div>
                <label className="label">Hva er anledningen? *</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {ANLEDNINGER.map((a) => (
                    <button
                      key={a}
                      type="button"
                      onClick={() => set("anledning", a)}
                      className={`px-3 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                        form.anledning === a
                          ? "border-forest-500 bg-forest-50 text-forest-700"
                          : "border-gray-200 bg-white text-gray-600 hover:border-forest-300"
                      }`}
                    >
                      {a}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dato */}
              <div>
                <label className="label" htmlFor="dato">Dato for arrangementet *</label>
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

              {/* Sted */}
              <div>
                <label className="label" htmlFor="sted">Poststed / by *</label>
                <input
                  id="sted"
                  type="text"
                  required
                  placeholder="f.eks. Oslo, Bergen, Trondheim..."
                  className="input-field"
                  value={form.sted}
                  onChange={(e) => set("sted", e.target.value)}
                />
              </div>

              {/* Budsjett */}
              <div>
                <label className="label">Omtrentlig budsjett *</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {BUDSJETTER.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => set("budsjett", b)}
                      className={`px-3 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                        form.budsjett === b
                          ? "border-forest-500 bg-forest-50 text-forest-700"
                          : "border-gray-200 bg-white text-gray-600 hover:border-forest-300"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Beskrivelse */}
              <div>
                <label className="label" htmlFor="beskrivelse">Hva ser du for deg? *</label>
                <textarea
                  id="beskrivelse"
                  required
                  rows={4}
                  placeholder="Beskriv stil, farger, type blomster, antall bord, størrelse på bukett... Jo mer info, jo bedre tilbud."
                  className="input-field resize-none"
                  value={form.beskrivelse}
                  onChange={(e) => set("beskrivelse", e.target.value)}
                />
              </div>

              {/* Norskdyrket */}
              <div>
                <label className="label">
                  Hvor viktig er norskdyrkede blomster for deg?
                </label>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-400 w-24">Ikke viktig</span>
                  <div className="flex gap-2 flex-1 justify-center">
                    {[1, 2, 3, 4, 5].map((v) => (
                      <button
                        key={v}
                        type="button"
                        onClick={() => set("norskdyrket", String(v))}
                        className={`w-10 h-10 rounded-full border-2 text-sm font-semibold transition-all ${
                          form.norskdyrket === String(v)
                            ? "border-forest-500 bg-forest-500 text-white"
                            : "border-gray-200 text-gray-600 hover:border-forest-300"
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                  <span className="text-sm text-gray-400 w-24 text-right">Veldig viktig</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={!form.anledning || !form.dato || !form.sted || !form.budsjett || !form.beskrivelse}
                className="btn-primary w-full py-4 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Neste steg →
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="card bg-forest-50 border-forest-100">
                <h3 className="font-medium text-forest-700 mb-3">Din forespørsel</h3>
                <div className="grid grid-cols-2 gap-y-1 text-sm">
                  <span className="text-gray-500">Anledning</span>
                  <span className="text-gray-800">{form.anledning}</span>
                  <span className="text-gray-500">Dato</span>
                  <span className="text-gray-800">{form.dato}</span>
                  <span className="text-gray-500">Sted</span>
                  <span className="text-gray-800">{form.sted}</span>
                  <span className="text-gray-500">Budsjett</span>
                  <span className="text-gray-800">{form.budsjett}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs text-forest-600 mt-3 hover:underline"
                >
                  ← Endre
                </button>
              </div>

              <div>
                <label className="label" htmlFor="navn">Ditt navn *</label>
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
                <label className="label" htmlFor="epost">E-postadresse *</label>
                <input
                  id="epost"
                  type="email"
                  required
                  placeholder="din@epost.no"
                  className="input-field"
                  value={form.epost}
                  onChange={(e) => set("epost", e.target.value)}
                />
                <p className="text-xs text-gray-400 mt-1">
                  Florister sender tilbud til denne adressen. Vi deler ikke e-posten din uten din tillatelse.
                </p>
              </div>

              {error && (
                <p className="text-red-500 text-sm bg-red-50 px-4 py-3 rounded-xl">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading || !form.navn || !form.epost}
                className="btn-primary w-full py-4 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {loading ? "Sender..." : "Send blomsterforespørsel 🌸"}
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
