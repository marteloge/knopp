import Link from "next/link";
import {
  Peony,
  Rose,
  EucalyptusBranch,
  Dahlia,
  FloatingPetals,
  WildflowerSprig,
  SmallBlossom,
  WaveDivider,
} from "./components/botanicals";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream overflow-hidden">
      {/* ═══════════════ NAV ═══════════════ */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
        <span className="font-serif text-2xl text-forest-700 tracking-tight italic">
          blomsterkollektivet<span className="text-blush-400">.</span>
        </span>
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
      <section className="relative min-h-[85vh] flex items-center">
        {/* Botanical decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large peony top-right */}
          <Peony className="absolute -top-12 -right-10 w-[350px] h-[350px] animate-float-slow" />
          {/* Rose bottom-left */}
          <Rose className="absolute bottom-8 left-[3%] w-[130px] h-[165px] animate-float-reverse" />
          {/* Eucalyptus branches framing */}
          <EucalyptusBranch className="absolute top-4 -left-4 w-[120px] h-[290px] animate-sway" />
          <EucalyptusBranch className="absolute -bottom-6 right-[2%] w-[100px] h-[240px] animate-float-slower scale-x-[-1]" />
          {/* Wildflower accent */}
          <WildflowerSprig className="absolute top-[18%] right-[10%] w-[80px] h-[190px] animate-float-slower" />
          {/* Small blossoms scattered */}
          <SmallBlossom className="absolute top-[20%] left-[22%] w-12 h-12 animate-float-reverse" variant={0} />
          <SmallBlossom className="absolute bottom-[28%] right-[22%] w-10 h-10 animate-float-slow" variant={1} />
          <SmallBlossom className="absolute bottom-[18%] left-[15%] w-11 h-11 animate-sway" variant={2} />
          <SmallBlossom className="absolute top-[35%] right-[30%] w-9 h-9 animate-float-reverse" variant={3} />
          {/* Floating petals drift */}
          <FloatingPetals className="absolute inset-0 w-full h-full animate-float-slow" />
          {/* Soft gradient orbs */}
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-blush-200/25 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-gradient-radial from-forest-200/20 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
          <div className="animate-fade-in-up">
            <span className="badge-forest mb-8 inline-flex">
              <span className="w-2 h-2 rounded-full bg-forest-400 animate-pulse-soft" />
              Norges floristfellesskap
            </span>
          </div>

          <h1 className="animate-fade-in-up font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gray-900 leading-[1.05] mb-8 tracking-tight">
            Finn din
            <br />
            <span className="gradient-text italic">perfekte florist</span>
          </h1>

          <p className="animate-fade-in-up-delay text-lg sm:text-xl text-gray-500 max-w-xl mx-auto mb-12 leading-relaxed">
            Send én forespørsel — motta tilbud fra opptil 3 lokale florister innen 48 timer.
            <span className="text-forest-600 font-medium"> Helt gratis for deg.</span>
          </p>

          <div className="animate-fade-in-up-delay-2 flex flex-col sm:flex-row gap-4 justify-center items-center">
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

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-400">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-forest-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              Gratis
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-forest-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              Ingen binding
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-forest-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              Svar innen 48t
            </span>
          </div>
        </div>
      </section>

      {/* ═══════════════ WAVE → HOW IT WORKS ═══════════════ */}
      <WaveDivider color="#f0f7ee" />

      {/* ═══════════════ HOW IT WORKS ═══════════════ */}
      <section className="bg-forest-50 relative py-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <SmallBlossom className="absolute top-12 right-[10%] w-14 h-14 animate-sway" variant={3} />
          <SmallBlossom className="absolute bottom-16 left-[8%] w-10 h-10 animate-float-slow" variant={3} />
          <EucalyptusBranch className="absolute -bottom-6 right-[2%] w-[70px] h-[170px] opacity-60 animate-sway" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="badge-warm mb-4 inline-flex">Slik fungerer det</span>
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 leading-tight">
              Tre enkle steg til<br />
              <span className="gradient-text italic">perfekte blomster</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                step: "1",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                ),
                title: "Beskriv drømmen",
                desc: "Anledning, dato, budsjett og stil. Tar bare 3 minutter å fylle ut.",
                accent: "from-forest-400 to-forest-500",
              },
              {
                step: "2",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Motta tilbud",
                desc: "Opptil 3 lokale florister sender deg skreddersydde tilbud innen 48 timer.",
                accent: "from-blush-400 to-petal-400",
              },
              {
                step: "3",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: "Velg din favoritt",
                desc: "Sammenlign og velg floristen som treffer din stil best. Helt gratis.",
                accent: "from-warm-300 to-warm-400",
              },
            ].map((item) => (
              <div key={item.step} className="card-elevated text-center group">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.accent} flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  {item.icon}
                </div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-3">
                  Steg {item.step}
                </div>
                <h3 className="font-serif text-2xl text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href="/bestilling" className="btn-primary text-lg px-8 py-4 group">
              Send blomsterforespørsel
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <WaveDivider flip color="#f0f7ee" />

      {/* ═══════════════ OCCASIONS ═══════════════ */}
      <section className="py-24 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FloatingPetals className="absolute inset-0 w-full h-full opacity-70 animate-float-slower" />
          <Dahlia className="absolute -bottom-16 -left-16 w-[250px] h-[250px] opacity-50" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="badge-blush mb-4 inline-flex">For alle anledninger</span>
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 leading-tight">
              Blomster som<br />
              <span className="gradient-text-warm italic">forteller din historie</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                emoji: "💍",
                label: "Bryllup",
                desc: "Brudebukett, bordpynt, kirke & fest",
                gradient: "from-petal-50 to-blush-50",
                border: "border-petal-200/60",
              },
              {
                emoji: "🏢",
                label: "Bedrift",
                desc: "Kontor, arrangement, resepsjon",
                gradient: "from-forest-50 to-sage-50",
                border: "border-forest-200/60",
              },
              {
                emoji: "🎉",
                label: "Feiring",
                desc: "Bursdag, konfirmasjon, jubileum",
                gradient: "from-warm-50 to-cream-200",
                border: "border-warm-200/60",
              },
              {
                emoji: "🕯️",
                label: "Minnestund",
                desc: "Kranser, dekorasjoner, med varme",
                gradient: "from-sage-50 to-cream-200",
                border: "border-sage-200/60",
              },
            ].map((item) => (
              <div
                key={item.label}
                className={`relative bg-gradient-to-br ${item.gradient} rounded-3xl p-7 border ${item.border} hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-500 group cursor-default`}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.emoji}
                </div>
                <h3 className="font-serif text-xl text-gray-800 mb-1.5">{item.label}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FOR FLORISTS ═══════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-forest-800 via-forest-700 to-forest-900">
            {/* Decorative */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Peony className="absolute -top-10 -right-10 w-[280px] h-[280px] opacity-[0.15]" />
              <EucalyptusBranch className="absolute -bottom-6 right-8 w-[80px] h-[190px] opacity-[0.12] animate-sway" />
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-forest-600/20 to-transparent" />
            </div>

            <div className="relative z-10 p-10 md:p-16 lg:p-20">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-forest-200 text-sm font-medium mb-8 backdrop-blur-sm border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-soft" />
                  For florister
                </span>

                <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
                  Kvalifiserte kunder.<br />
                  <span className="text-forest-300 italic">Betal kun ved booking.</span>
                </h2>

                <p className="text-forest-200/80 text-lg mb-8 leading-relaxed max-w-xl">
                  Slutt å bruke tid på forespørsler som aldri fører til noe.
                  Vi sender deg kunder som er klare til å booke — du betaler kun
                  10% provisjon ved bekreftet oppdrag.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {[
                    { icon: "✦", text: "Ingen månedlig avgift" },
                    { icon: "✦", text: "Grunnleggere: permanent 8% provisjon" },
                    { icon: "✦", text: "Du beholder kunderelasjon" },
                    { icon: "✦", text: "Bedre enn Interfloras 20–30%" },
                  ].map((point) => (
                    <div key={point.text} className="flex items-start gap-3">
                      <span className="text-forest-400 mt-0.5 flex-shrink-0 text-sm">{point.icon}</span>
                      <span className="text-forest-100/90 text-sm leading-relaxed">{point.text}</span>
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
                  <span className="text-forest-400/80 text-sm self-center">
                    De første 50 floristene — grunnlegger-status for alltid
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ STATS ═══════════════ */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-cream to-cream-200 pointer-events-none" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <SmallBlossom className="absolute top-8 left-[15%] w-10 h-10 animate-float-slow" variant={3} />
          <SmallBlossom className="absolute bottom-8 right-[12%] w-12 h-12 animate-sway" variant={1} />
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                num: "600+",
                label: "florister i Norge",
                sublabel: "Klare til å gi deg tilbud",
                color: "text-forest-600",
              },
              {
                num: "0 kr",
                label: "for deg som kunde",
                sublabel: "Floristen betaler provisjon",
                color: "text-blush-500",
              },
              {
                num: "48t",
                label: "maks ventetid",
                sublabel: "Fra forespørsel til tilbud",
                color: "text-warm-400",
              },
            ].map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className={`font-serif text-5xl md:text-6xl ${stat.color} mb-2 group-hover:scale-105 transition-transform duration-300`}>
                  {stat.num}
                </div>
                <div className="text-gray-800 font-medium mb-0.5">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FINAL CTA ═══════════════ */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-forest-50 via-cream to-blush-50" />
          <Peony className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] opacity-25" />
          <WildflowerSprig className="absolute top-6 right-[12%] w-[70px] h-[165px] animate-sway opacity-60" />
          <Rose className="absolute bottom-4 left-[8%] w-[90px] h-[115px] animate-float-slow opacity-50" />
          <FloatingPetals className="absolute inset-0 w-full h-full opacity-50 animate-float-reverse" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-6xl text-gray-900 mb-6 leading-tight">
            Klar til å finne<br />
            <span className="gradient-text italic">din florist?</span>
          </h2>
          <p className="text-xl text-gray-500 mb-10">
            Det tar 3 minutter. Og det er helt gratis.
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
      <footer className="border-t border-gray-200/50 bg-white/40 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="font-serif text-xl text-forest-700 italic">
              blomsterkollektivet<span className="text-blush-400">.</span>
            </span>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link href="/bestilling" className="hover:text-forest-600 transition-colors">Bestill blomster</Link>
              <Link href="/florist" className="hover:text-forest-600 transition-colors">For florister</Link>
              <span>hei@blomsterkollektivet.no</span>
            </div>
            <span className="text-sm text-gray-300">
              © 2026 Blomsterkollektivet
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
