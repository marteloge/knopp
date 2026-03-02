import Link from "next/link";

/* ─── Minimal decorative element — just a single elegant line flower ─── */
function FloralAccent({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="6" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <ellipse cx="40" cy="24" rx="6" ry="12" stroke="currentColor" strokeWidth="0.8" opacity="0.25" />
      <ellipse cx="40" cy="24" rx="6" ry="12" stroke="currentColor" strokeWidth="0.8" opacity="0.25" transform="rotate(72 40 40)" />
      <ellipse cx="40" cy="24" rx="6" ry="12" stroke="currentColor" strokeWidth="0.8" opacity="0.25" transform="rotate(144 40 40)" />
      <ellipse cx="40" cy="24" rx="6" ry="12" stroke="currentColor" strokeWidth="0.8" opacity="0.25" transform="rotate(216 40 40)" />
      <ellipse cx="40" cy="24" rx="6" ry="12" stroke="currentColor" strokeWidth="0.8" opacity="0.25" transform="rotate(288 40 40)" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-cream overflow-hidden">
      {/* ═══════════════ NAV ═══════════════ */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-6 max-w-6xl mx-auto">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-display text-2xl text-forest-700 tracking-tight">
            blomster
          </span>
          <span className="font-display text-2xl text-forest-700 tracking-tight -mt-1">
            kollektivet<span className="text-blush-400">.</span>
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/bestilling" className="text-sm text-gray-500 hover:text-forest-600 transition-colors hidden sm:block">
            Bestill blomster
          </Link>
          <Link href="/florist" className="text-sm font-medium text-forest-600 hover:text-forest-700 transition-colors border border-forest-200 rounded-full px-4 py-2 hover:bg-forest-50">
            Er du florist?
          </Link>
        </div>
      </nav>

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative min-h-[80vh] flex items-center">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blush-50/60 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-forest-50/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 w-full">
          <div className="max-w-3xl">
            <div className="animate-fade-in-up">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-[1px] bg-forest-400" />
                <span className="text-sm font-medium text-forest-600 uppercase tracking-[0.2em]">
                  Norges floristfellesskap
                </span>
              </div>
            </div>

            <h1 className="animate-fade-in-up font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-gray-900 leading-[0.95] mb-10 tracking-tight">
              Finn din
              <br />
              <span className="italic text-forest-600">perfekte</span>
              <br />
              florist
            </h1>

            <p className="animate-fade-in-up-delay text-lg sm:text-xl text-gray-500 max-w-lg mb-12 leading-relaxed">
              Send én forespørsel og motta tilbud fra opptil tre lokale florister
              innen 48 timer. Helt gratis.
            </p>

            <div className="animate-fade-in-up-delay-2 flex flex-col sm:flex-row gap-4">
              <Link href="/bestilling" className="btn-primary text-lg px-10 py-5 group">
                Jeg trenger blomster
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/florist" className="btn-outline text-lg px-10 py-5">
                Jeg er florist
              </Link>
            </div>
          </div>

          {/* Right side — editorial accent */}
          <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-[280px] h-[400px] rounded-[2rem] bg-gradient-to-b from-blush-100 to-blush-50 border border-blush-200/40" />
              <div className="absolute -bottom-6 -left-6 w-[200px] h-[280px] rounded-[2rem] bg-gradient-to-b from-forest-100 to-forest-50 border border-forest-200/40" />
              <FloralAccent className="absolute top-8 right-8 w-16 h-16 text-blush-400" />
              <FloralAccent className="absolute bottom-12 left-2 w-12 h-12 text-forest-400" />
              {/* Text element inside the shape */}
              <div className="absolute top-1/2 right-6 -translate-y-1/2 text-right">
                <span className="font-display italic text-5xl text-blush-300/60 leading-none">
                  blomst
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ TRUST BAR ═══════════════ */}
      <section className="border-y border-gray-200/60 bg-white/40">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-3 text-sm text-gray-500">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-forest-400" />
            Gratis for deg
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-forest-400" />
            Ingen binding
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-forest-400" />
            Svar innen 48 timer
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-forest-400" />
            600+ florister i Norge
          </span>
        </div>
      </section>

      {/* ═══════════════ HOW IT WORKS ═══════════════ */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-gray-300" />
            <span className="text-sm font-medium text-gray-400 uppercase tracking-[0.2em]">Slik fungerer det</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-gray-900 leading-tight mb-20">
            Tre enkle steg til<br />
            <span className="italic text-forest-600">perfekte blomster</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {[
              {
                num: "01",
                title: "Beskriv",
                subtitle: "drømmen din",
                desc: "Anledning, dato, budsjett og stil. Tar bare tre minutter å fylle ut skjemaet.",
                accent: "text-forest-600",
                line: "bg-forest-200",
              },
              {
                num: "02",
                title: "Motta",
                subtitle: "skreddersydde tilbud",
                desc: "Opptil tre lokale florister sender deg personlige tilbud innen 48 timer.",
                accent: "text-blush-500",
                line: "bg-blush-200",
              },
              {
                num: "03",
                title: "Velg",
                subtitle: "din favoritt",
                desc: "Sammenlign og velg floristen som treffer din stil best. Helt gratis.",
                accent: "text-warm-400",
                line: "bg-warm-200",
              },
            ].map((item) => (
              <div key={item.num} className="group">
                <div className={`font-display text-6xl ${item.accent} opacity-20 mb-4 group-hover:opacity-40 transition-opacity duration-500`}>
                  {item.num}
                </div>
                <div className={`w-12 h-[2px] ${item.line} mb-6`} />
                <h3 className="font-display text-3xl text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="font-display italic text-xl text-gray-400 mb-4">{item.subtitle}</p>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-16 border-t border-gray-100">
            <Link href="/bestilling" className="btn-primary text-lg px-8 py-4 group">
              Send blomsterforespørsel
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ OCCASIONS ═══════════════ */}
      <section className="py-28 bg-gradient-to-b from-cream-200/60 to-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-gray-300" />
            <span className="text-sm font-medium text-gray-400 uppercase tracking-[0.2em]">Anledninger</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-gray-900 leading-tight mb-16">
            Blomster som<br />
            <span className="italic text-blush-500">forteller din historie</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Bryllup", desc: "Brudebukett, bordpynt, kirke & fest", accent: "border-l-blush-400" },
              { label: "Bedrift", desc: "Kontor, arrangement, resepsjon", accent: "border-l-forest-400" },
              { label: "Feiring", desc: "Bursdag, konfirmasjon, jubileum", accent: "border-l-warm-400" },
              { label: "Minnestund", desc: "Kranser, dekorasjoner, med varme", accent: "border-l-sage-400" },
            ].map((item) => (
              <div
                key={item.label}
                className={`bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-100/80 border-l-[3px] ${item.accent} hover:shadow-soft-lg hover:-translate-y-0.5 transition-all duration-500`}
              >
                <h3 className="font-display text-xl text-gray-800 mb-2">{item.label}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FOR FLORISTS ═══════════════ */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-[2rem] overflow-hidden bg-forest-800">
            {/* Subtle texture */}
            <div className="absolute inset-0 bg-gradient-to-br from-forest-800 via-forest-700 to-forest-900" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-forest-600/15 to-transparent" />

            <div className="relative z-10 p-10 md:p-16 lg:p-20 lg:flex lg:gap-16 lg:items-center">
              <div className="lg:flex-1">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-[1px] bg-forest-500" />
                  <span className="text-sm font-medium text-forest-400 uppercase tracking-[0.2em]">For florister</span>
                </div>

                <h2 className="font-display text-4xl md:text-5xl text-white mb-6 leading-tight">
                  Kvalifiserte kunder.
                  <br />
                  <span className="italic text-forest-300">Betal kun ved booking.</span>
                </h2>

                <p className="text-forest-200/70 text-lg mb-10 leading-relaxed max-w-xl">
                  Vi sender deg kunder som er klare til å booke.
                  Du betaler kun 10% provisjon ved bekreftet oppdrag.
                  Ingen månedlig avgift. Ingen risiko.
                </p>

                <div className="space-y-4 mb-12">
                  {[
                    "Ingen månedlig avgift — betal kun ved booking",
                    "Grunnleggere får permanent 8% provisjon",
                    "Du beholder kunderelasjon og merkevare",
                    "Langt bedre enn Interfloras 20–30%",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-forest-400 mt-2 flex-shrink-0" />
                      <span className="text-forest-100/80 leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <Link
                    href="/florist"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-forest-700 font-semibold hover:bg-forest-50 transition-all duration-300 shadow-lg shadow-black/10 group"
                  >
                    Registrer deg som florist
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                <p className="text-forest-500/60 text-sm mt-4">
                  De første 50 floristene — grunnlegger-status for alltid
                </p>
              </div>

              {/* Right side — numbers */}
              <div className="hidden lg:block lg:flex-shrink-0">
                <div className="space-y-8 text-right">
                  <div>
                    <div className="font-display text-6xl text-white/90">10%</div>
                    <div className="text-forest-400 text-sm">provisjon</div>
                  </div>
                  <div>
                    <div className="font-display text-6xl text-white/90">0 kr</div>
                    <div className="text-forest-400 text-sm">månedlig avgift</div>
                  </div>
                  <div>
                    <div className="font-display text-6xl text-white/90">48t</div>
                    <div className="text-forest-400 text-sm">til tilbud</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ STATS (mobile — hidden on lg where they're in florist section) ═══════════════ */}
      <section className="py-16 lg:hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-6">
            {[
              { num: "600+", label: "florister" },
              { num: "0 kr", label: "for kunden" },
              { num: "48t", label: "ventetid" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-4xl text-forest-600 mb-1">{stat.num}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FINAL CTA ═══════════════ */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-cream to-forest-50/30 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FloralAccent className="w-14 h-14 text-forest-400 mx-auto mb-8 opacity-40" />
          <h2 className="font-display text-5xl md:text-7xl text-gray-900 mb-6 leading-tight">
            Klar til å finne<br />
            <span className="italic text-forest-600">din florist?</span>
          </h2>
          <p className="text-xl text-gray-500 mb-12 max-w-md mx-auto">
            Det tar tre minutter. Og det er helt gratis.
          </p>
          <Link href="/bestilling" className="btn-primary text-lg px-12 py-5 group">
            Send blomsterforespørsel
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="border-t border-gray-200/50">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <div className="flex flex-col leading-none mb-2">
                <span className="font-display text-xl text-forest-700">blomster</span>
                <span className="font-display text-xl text-forest-700 -mt-0.5">kollektivet<span className="text-blush-400">.</span></span>
              </div>
              <p className="text-sm text-gray-400">Norges floristfellesskap</p>
            </div>
            <div className="flex items-center gap-8 text-sm text-gray-400">
              <Link href="/bestilling" className="hover:text-forest-600 transition-colors">Bestill blomster</Link>
              <Link href="/florist" className="hover:text-forest-600 transition-colors">For florister</Link>
              <span>hei@blomsterkollektivet.no</span>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-100 text-sm text-gray-300">
            © 2026 Blomsterkollektivet
          </div>
        </div>
      </footer>
    </div>
  );
}
