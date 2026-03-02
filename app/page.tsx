import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-5xl mx-auto">
        <span className="font-serif text-2xl text-forest-700 tracking-tight">knopp.</span>
        <Link href="/florist" className="text-sm text-forest-600 hover:text-forest-700 font-medium">
          Er du florist? →
        </Link>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="inline-block bg-blush-100 text-blush-600 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          🌸 Norges første blomstermarkedsplass
        </div>
        <h1 className="font-serif text-5xl md:text-6xl text-gray-900 leading-tight mb-6">
          Finn din florist.<br />
          <span className="text-forest-600">Motta tilbud. Velg.</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Send én blomsterforespørsel og motta tilbud fra 3 lokale florister
          innen 48 timer. Helt gratis for deg — floristen betaler kun når du booker.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/bestilling" className="btn-primary text-lg px-8 py-4">
            🌼 Jeg trenger blomster
          </Link>
          <Link href="/florist" className="btn-outline text-lg px-8 py-4">
            Jeg er florist
          </Link>
        </div>
        <p className="text-sm text-gray-400 mt-4">Gratis • Ingen binding • Svar innen 48 timer</p>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-gray-100" />
      </div>

      {/* How it works — kunder */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="font-serif text-3xl text-center text-gray-800 mb-3">Slik fungerer det</h2>
        <p className="text-center text-gray-500 mb-12">For deg som trenger blomster</p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              icon: "✍️",
              title: "Beskriv hva du trenger",
              desc: "Anledning, dato, budsjett og stil. Tar 3 minutter.",
            },
            {
              step: "2",
              icon: "📬",
              title: "Florister sender deg tilbud",
              desc: "Opptil 3 lokale florister sender deg konkrete tilbud innen 48 timer.",
            },
            {
              step: "3",
              icon: "✅",
              title: "Du velger — helt gratis",
              desc: "Sammenlign og velg den floristen som passer best. Ingen skjulte kostnader.",
            },
          ].map((item) => (
            <div key={item.step} className="card text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <div className="text-xs font-bold text-blush-500 uppercase tracking-widest mb-2">
                Steg {item.step}
              </div>
              <h3 className="font-serif text-xl text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/bestilling" className="btn-primary">
            Send blomsterforespørsel →
          </Link>
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-forest-50 py-14">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-3xl text-center text-gray-800 mb-10">
            Perfekt for alle anledninger
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "💍", label: "Bryllup", desc: "Bordpynt, brudebukett, blomsterpynt" },
              { icon: "🏢", label: "Bedrift", desc: "Arrangement, resepsjon, jubileum" },
              { icon: "🎂", label: "Feiring", desc: "Fødselsdag, konfirmasjon, babyshower" },
              { icon: "🕯️", label: "Begravelse", desc: "Kranser og delikat blomsterbukett" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-2xl p-5 text-center shadow-sm">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-semibold text-gray-800 mb-1">{item.label}</div>
                <div className="text-xs text-gray-500">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For florists */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-forest-700 rounded-3xl p-10 md:p-14 text-white">
          <div className="max-w-2xl">
            <div className="text-forest-300 text-sm font-medium uppercase tracking-widest mb-4">
              For florister
            </div>
            <h2 className="font-serif text-4xl mb-4 leading-tight">
              Kvalifiserte leads.<br />
              Betal kun per booking.
            </h2>
            <p className="text-forest-100 text-lg mb-6 leading-relaxed">
              Slutt å bruke tid på tilbud som aldri fører til noe. Knopp sender deg
              forespørsler fra kunder som faktisk er klare til å booke. Du betaler 10%
              kun når oppdraget er bekreftet.
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Ingen månedlig avgift — provisjon kun ved bekreftet oppdrag",
                "Grunnlegger-florister: permanent 2% lavere provisjon",
                "Du beholder kunderelasjon og merkevare",
                "Klarer av Interfloras 20–30% provisjon",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2 text-forest-100">
                  <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/florist"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-forest-700 font-semibold hover:bg-forest-50 transition-colors duration-200"
            >
              Registrer deg som florist →
            </Link>
            <p className="text-forest-300 text-sm mt-3">
              🌟 De første 50 floristene får grunnlegger-status for alltid
            </p>
          </div>
        </div>
      </section>

      {/* Trust / stats */}
      <section className="border-t border-gray-100 bg-cream py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { num: "600+", label: "norske florister" },
              { num: "0 kr", label: "kostnad for kunde" },
              { num: "48t", label: "maks ventetid på tilbud" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-serif text-4xl text-forest-600 mb-1">{stat.num}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h2 className="font-serif text-4xl text-gray-800 mb-4">Klar til å finne din florist?</h2>
        <p className="text-gray-500 mb-8">Det tar 3 minutter. Og det er gratis.</p>
        <Link href="/bestilling" className="btn-primary text-lg px-10 py-4">
          Send blomsterforespørsel
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <span className="font-serif text-lg text-forest-700">knopp.</span>
          <span>© 2026 Knopp. Norges blomstermarkedsplass.</span>
          <Link href="/florist" className="hover:text-gray-600">
            For florister
          </Link>
        </div>
      </footer>
    </div>
  );
}
