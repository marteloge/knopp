"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

function decodeRef(code: string): string | null {
  try {
    return Buffer.from(code, "base64url").toString("utf-8");
  } catch {
    return null;
  }
}

function JoinForm() {
  const params = useSearchParams();
  const ref = params.get("ref") || undefined;
  const referrerEmail = ref ? decodeRef(ref) : null;

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [referralLink, setReferralLink] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, ref }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("done");
        setReferralLink(data.referralLink || "");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="text-center">
        <div className="text-5xl mb-6">🌸</div>
        <h2 className="font-serif text-3xl text-gray-800 mb-3">Du er på lista!</h2>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Sjekk e-posten din — vi har sendt deg en bekreftelse med din personlige ventelistelenke.
        </p>
        {referralLink && (
          <div className="bg-forest-50 rounded-2xl p-6 text-left">
            <p className="text-sm font-semibold text-forest-700 mb-3">Din vervingslenke 🌿</p>
            <p className="text-sm text-gray-600 mb-3">Del denne med venner som vil støtte norsk blomsterhandel:</p>
            <div className="flex items-center gap-2">
              <input
                readOnly
                value={referralLink}
                className="flex-1 text-xs bg-white border border-gray-200 rounded-lg px-3 py-2 text-gray-600"
              />
              <button
                onClick={() => navigator.clipboard.writeText(referralLink)}
                className="text-xs bg-forest-600 text-white px-3 py-2 rounded-lg hover:bg-forest-700 transition-colors whitespace-nowrap"
              >
                Kopier
              </button>
            </div>
          </div>
        )}
        <div className="mt-8">
          <Link href="/" className="text-forest-600 hover:text-forest-700 text-sm font-medium">
            ← Tilbake til forsiden
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {referrerEmail && (
        <div className="mb-6 p-4 bg-blush-50 rounded-2xl text-center">
          <p className="text-blush-600 text-sm font-medium">
            🌸 Du er invitert av <strong>{referrerEmail}</strong>
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="label">Din e-postadresse</label>
          <input
            type="email"
            required
            placeholder="din@epost.no"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary w-full text-center"
        >
          {status === "loading" ? "Sender…" : "Meld meg på ventelisten →"}
        </button>
        {status === "error" && (
          <p className="text-red-500 text-sm text-center">Noe gikk galt. Prøv igjen.</p>
        )}
      </form>

      <p className="text-xs text-gray-400 text-center mt-4">
        Ingen spam. Du kan melde deg av når som helst.
      </p>
    </div>
  );
}

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <Link href="/" className="font-serif text-2xl text-forest-700 tracking-tight">
            blomsterkollektivet.
          </Link>
        </div>

        <div className="card p-8 md:p-10">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🌿</div>
            <h1 className="font-serif text-3xl text-gray-800 mb-3">
              Bli med på ventelisten
            </h1>
            <p className="text-gray-500 leading-relaxed">
              Norges første blomstermarkedsplass er på vei. Meld deg på og vær blant de første.
            </p>
          </div>

          <Suspense fallback={<div className="text-center text-gray-400">Laster…</div>}>
            <JoinForm />
          </Suspense>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Er du florist eller blomsterbonde?{" "}
            <Link href="/verv" className="text-forest-600 hover:text-forest-700 font-medium">
              Les mer her →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
