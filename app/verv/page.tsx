import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For florister og blomsterbønder — Blomsterkollektivet",
  description:
    "Bli med i Norges første blomstermarkedsplass. For blomsterbutikker, florister og blomsterbønder som vil nå flere kunder uten dyre mellomledd.",
};

export default function VervPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-5xl mx-auto">
        <Link href="/" className="font-serif text-2xl text-forest-700 tracking-tight">
          blomsterkollektivet.
        </Link>
        <Link href="/florist" className="btn-primary">
          Registrer deg nå →
        </Link>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="inline-block bg-forest-100 text-forest-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          🌿 For blomsterbransjen
        </div>
        <h1 className="font-serif text-5xl md:text-6xl text-gray-900 leading-tight mb-6">
          Dyrk kundene dine.<br />
          <span className="text-forest-600">Vi ordner resten.</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Blomsterkollektivet kobler deg direkte med kunder som faktisk søker det du tilbyr —
          uten månedlig avgift, uten binding, uten mellomledd.
        </p>
        <Link href="/florist" className="btn-primary text-lg px-10 py-4">
          Bli med som grunnlegger →
        </Link>
        <p className="text-sm text-forest-600 mt-3 font-medium">
          🌟 De første 50 får permanent lavere provisjon
        </p>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-gray-100" />
      </div>

      {/* Two tracks */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="font-serif text-3xl text-center text-gray-800 mb-3">
          Vi søker to typer samarbeidspartnere
        </h2>
        <p className="text-center text-gray-500 mb-12">
          Begge er like viktige for å bygge Norges blomsterfellesskap
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Blomsterbutikker */}
          <div className="card p-8">
            <div className="text-4xl mb-4">🌸</div>
            <h3 className="font-serif text-2xl text-gray-800 mb-3">Blomsterbutikker & florister</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Du er håndverker. Du vet hva en brudebukett skal inneholde, og du kan lage bordpynt
              som ingen Pinterest-bilde gjør rettferdighet. Problemet er at kundene ikke finner deg —
              eller de vet ikke at de bør velge deg fremfor en nettbutikk i Danmark.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Blomsterkollektivet sender deg <strong>kvalifiserte forespørsler</strong> fra kunder
              i ditt område som allerede vet hva de vil ha. Du sender tilbud — du betaler bare
              når jobben er bekreftet.
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "10% provisjon per bekreftet oppdrag (vs. Interfloras 20–30%)",
                "Du beholder kunderelasjon og merkevare",
                "Grunnlegger-status: permanent 8% provisjon for de første 50",
                "Ingen bindingstid — kom og gå som du vil",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2 text-gray-600 text-sm">
                  <span className="text-forest-500 mt-0.5 flex-shrink-0">✓</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <Link href="/florist" className="btn-primary">
              Registrer blomsterbutikk →
            </Link>
          </div>

          {/* Blomsterbønder */}
          <div className="card p-8 border-forest-200">
            <div className="text-4xl mb-4">🌾</div>
            <h3 className="font-serif text-2xl text-gray-800 mb-3">Blomsterbønder & dyrkere</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Norsk-dyrkede blomster er noe helt annet enn importerte. De lukter. De lever lenger.
              De er sesongrike og ekte. Og stadig flere kunder spør spesifikt etter norske blomster
              til bryllup, konfirmasjon og bord.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Vi kobler blomsterbønder direkte med florister og kunder som verdsetter kortreist,
              bærekraftig og norsk. Din jobb er å dyrke. Vår jobb er å finne deg de rette kjøperne.
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Direkte tilgang til florister som søker norske råvarer",
                "Kunder som spesifikt ber om norsk-dyrkede blomster",
                "Ingen mellomledd — du selger direkte",
                "Bli en del av historien om kortreist blomsterhandel",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2 text-gray-600 text-sm">
                  <span className="text-forest-500 mt-0.5 flex-shrink-0">✓</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <Link href="/florist" className="btn-primary">
              Registrer deg som dyrker →
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-forest-50 py-14">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl text-center text-gray-800 mb-10">
            Hva koster det egentlig å bruke Interflora?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                who: "Interflora",
                pct: "20–30%",
                desc: "Provisjon per ordre, pluss månedlig lisensavgift",
                color: "bg-red-50 border-red-200",
                textColor: "text-red-600",
              },
              {
                who: "Blomsterkollektivet",
                pct: "10%",
                desc: "Kun provisjon per bekreftet oppdrag. Ingenting annet.",
                color: "bg-forest-50 border-forest-300",
                textColor: "text-forest-600",
              },
              {
                who: "Grunnlegger-pris",
                pct: "8%",
                desc: "De første 50 floristene får denne prisen for alltid.",
                color: "bg-blush-50 border-blush-200",
                textColor: "text-blush-600",
              },
            ].map((item) => (
              <div key={item.who} className={`rounded-2xl p-6 border ${item.color} text-center`}>
                <div className="text-sm font-medium text-gray-500 mb-1">{item.who}</div>
                <div className={`font-serif text-5xl font-bold mb-3 ${item.textColor}`}>
                  {item.pct}
                </div>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works for partners */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="font-serif text-3xl text-center text-gray-800 mb-3">
          Slik fungerer det for deg
        </h2>
        <p className="text-center text-gray-500 mb-12">Fire steg fra registrering til betalt oppdrag</p>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "1", icon: "📝", title: "Registrer deg", desc: "Tar 3 minutter. Fortell om deg og hva du tilbyr." },
            { step: "2", icon: "📩", title: "Motta forespørsler", desc: "Vi sender deg forespørsler fra kunder i ditt område." },
            { step: "3", icon: "💬", title: "Send tilbud", desc: "Du svarer med ditt konkrete tilbud — ingen mal, din stemme." },
            { step: "4", icon: "✅", title: "Jobb og bli betalt", desc: "Kunden velger deg. Du fakturerer. Vi tar 10% av totalen." },
          ].map((item) => (
            <div key={item.step} className="card text-center">
              <div className="text-3xl mb-3">{item.icon}</div>
              <div className="text-xs font-bold text-blush-500 uppercase tracking-widest mb-2">
                Steg {item.step}
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <div className="bg-forest-700 rounded-3xl p-10 text-white">
          <h2 className="font-serif text-4xl mb-4">Klar til å bli med?</h2>
          <p className="text-forest-100 mb-8 leading-relaxed">
            Registrering er gratis og tar 3 minutter. De første 50 floristene og bøndene
            som melder seg på får grunnlegger-status og permanent lavere provisjon.
          </p>
          <Link
            href="/florist"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-forest-700 font-semibold hover:bg-forest-50 transition-colors duration-200 text-lg"
          >
            Registrer deg nå →
          </Link>
          <p className="text-forest-300 text-sm mt-4">
            Spørsmål? Skriv til hei@blomsterkollektivet.no
          </p>
        </div>
      </section>

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
