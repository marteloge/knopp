import Link from "next/link";

/* ─── Inline SVG botanical decorations ─── */
function LeafDecoration({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M60 10C60 10 20 40 20 70C20 90 38 110 60 110C82 110 100 90 100 70C100 40 60 10 60 10Z"
        fill="currentColor"
        opacity="0.08"
      />
      <path
        d="M60 20C60 20 60 100 60 110"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.12"
      />
      <path d="M60 45C45 55 35 65 30 75" stroke="currentColor" strokeWidth="1" opacity="0.08" />
      <path d="M60 55C75 63 85 70 90 78" stroke="currentColor" strokeWidth="1" opacity="0.08" />
    </svg>
  );
}

function FloralBurst({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Petals */}
      <ellipse cx="100" cy="60" rx="22" ry="35" fill="currentColor" opacity="0.06" transform="rotate(0 100 100)" />
      <ellipse cx="100" cy="60" rx="22" ry="35" fill="currentColor" opacity="0.06" transform="rotate(72 100 100)" />
      <ellipse cx="100" cy="60" rx="22" ry="35" fill="currentColor" opacity="0.06" transform="rotate(144 100 100)" />
      <ellipse cx="100" cy="60" rx="22" ry="35" fill="currentColor" opacity="0.06" transform="rotate(216 100 100)" />
      <ellipse cx="100" cy="60" rx="22" ry="35" fill="currentColor" opacity="0.06" transform="rotate(288 100 100)" />
      {/* Center */}
      <circle cx="100" cy="100" r="12" fill="currentColor" opacity="0.1" />
    </svg>
  );
}

function PetalScatter({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="25" rx="8" ry="14" fill="currentColor" opacity="0.07" transform="rotate(-20 30 25)" />
      <ellipse cx="70" cy="40" rx="6" ry="11" fill="currentColor" opacity="0.05" transform="rotate(30 70 40)" />
      <ellipse cx="50" cy="75" rx="9" ry="15" fill="currentColor" opacity="0.06" transform="rotate(-10 50 75)" />
      <ellipse cx="85" cy="70" rx="5" ry="9" fill="currentColor" opacity="0.04" transform="rotate(45 85 70)" />
    </svg>
  );
}

function WaveDivider({ flip, color = "#f0f7ee" }: { flip?: boolean; color?: string }) {
  return (
    <div className={`wave-divider ${flip ? "rotate-180" : ""}`}>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,20 1440,40 L1440,80 L0,80 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-cream overflow-hidden">
      {/* ═══════════════ NAV ═══════════════ */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-forest-400 to-forest-600 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8 2 4 6 4 10C4 16 12 22 12 22C12 22 20 16 20 10C20 6 16 2 12 2ZM12 13C10.3 13 9 11.7 9 10C9 8.3 10.3 7 12 7C13.7 7 15 8.3 15 10C15 11.7 13.7 13 12 13Z" />
            </svg>
          </div>
          <span className="font-serif text-xl text-forest-700 tracking-tight">
            blomsterkollektivet<span className="text-blush-400">.</span>
          </span>
        </div>
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
      <section className="relative min-h-[85vh] flex items-center botanical-bg">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FloralBurst className="absolute -top-10 -right-10 w-[500px] h-[500px] text-forest-400 animate-float-slow opacity-60" />
          <FloralBurst className="absolute -bottom-20 -left-20 w-[400px] h-[400px] text-blush-400 animate-float-reverse opacity-40" />
          <LeafDecoration className="absolute top-20 left-[10%] w-24 h-24 text-forest-500 animate-sway opacity-70" />
          <LeafDecoration className="absolute top-40 right-[15%] w-16 h-16 text-sage-400 animate-float-slower opacity-50" />
          <PetalScatter className="absolute bottom-32 right-[25%] w-40 h-40 text-blush-400 animate-float-slow" />
          <PetalScatter className="absolute top-1/3 left-[5%] w-32 h-32 text-petal-300 animate-float-reverse" />

          {/* Gradient orbs */}
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-forest-200/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-blush-200/15 to-transparent rounded-full blur-3xl" />
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
            <span className="gradient-text">perfekte florist</span>
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
          <LeafDecoration className="absolute top-10 right-[8%] w-20 h-20 text-forest-400 opacity-40 animate-sway" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="badge-warm mb-4 inline-flex">Slik fungerer det</span>
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 leading-tight">
              Tre enkle steg til<br />
              <span className="gradient-text">perfekte blomster</span>
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
      <section className="py-24 relative botanical-bg">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <PetalScatter className="absolute top-20 left-[5%] w-32 h-32 text-blush-300 animate-float-slow" />
          <FloralBurst className="absolute bottom-0 right-0 w-[300px] h-[300px] text-forest-300 opacity-30" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="badge-blush mb-4 inline-flex">For alle anledninger</span>
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 leading-tight">
              Blomster som<br />
              <span className="gradient-text-warm">forteller din historie</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="12" r="4" fill="currentColor" opacity="0.2" />
                    <path d="M8 28C8 22.5 11.6 18 16 18C20.4 18 24 22.5 24 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M16 4L17.5 8.5L22 7L19 11L23 13.5L18.5 13.5L18 18H14L13.5 13.5L9 13.5L13 11L10 7L14.5 8.5L16 4Z" fill="currentColor" opacity="0.15" />
                  </svg>
                ),
                label: "Bryllup",
                desc: "Brudebukett, bordpynt, kirke & fest",
                gradient: "from-petal-50 to-blush-50",
                border: "border-petal-100",
                iconColor: "text-petal-400",
              },
              {
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                    <rect x="6" y="8" width="20" height="16" rx="3" fill="currentColor" opacity="0.12" />
                    <path d="M6 14H26" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="16" cy="20" r="3" fill="currentColor" opacity="0.2" />
                  </svg>
                ),
                label: "Bedrift",
                desc: "Kontor, arrangement, resepsjon",
                gradient: "from-forest-50 to-sage-50",
                border: "border-forest-100",
                iconColor: "text-forest-500",
              },
              {
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                    <path d="M16 6C12 6 8 10 8 14C8 22 16 28 16 28C16 28 24 22 24 14C24 10 20 6 16 6Z" fill="currentColor" opacity="0.12" />
                    <path d="M16 12V18M13 15H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
                label: "Feiring",
                desc: "Bursdag, konfirmasjon, jubileum",
                gradient: "from-warm-50 to-cream-200",
                border: "border-warm-100",
                iconColor: "text-warm-400",
              },
              {
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                    <path d="M16 8C16 8 10 14 10 18C10 21.3 12.7 24 16 24C19.3 24 22 21.3 22 18C22 14 16 8 16 8Z" fill="currentColor" opacity="0.12" />
                    <line x1="16" y1="14" x2="16" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
                label: "Minnestund",
                desc: "Kranser, dekorasjoner, med varme",
                gradient: "from-sage-50 to-cream-200",
                border: "border-sage-100",
                iconColor: "text-sage-500",
              },
            ].map((item) => (
              <div
                key={item.label}
                className={`relative bg-gradient-to-br ${item.gradient} rounded-3xl p-7 border ${item.border} hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-500 group cursor-default`}
              >
                <div className={`${item.iconColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
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
            {/* Decorative elements inside */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <FloralBurst className="absolute -top-20 -right-20 w-[400px] h-[400px] text-white opacity-[0.04]" />
              <LeafDecoration className="absolute bottom-10 right-20 w-32 h-32 text-white opacity-[0.06] animate-sway" />
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
                  <span className="text-forest-300">Betal kun ved booking.</span>
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
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-forest-50 via-cream to-blush-50" />
          <FloralBurst className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] text-forest-400 opacity-20" />
          <PetalScatter className="absolute top-10 right-[10%] w-48 h-48 text-blush-300 animate-float-slow" />
          <LeafDecoration className="absolute bottom-10 left-[10%] w-24 h-24 text-forest-400 animate-sway opacity-60" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-6xl text-gray-900 mb-6 leading-tight">
            Klar til å finne<br />
            <span className="gradient-text">din florist?</span>
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
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-forest-400 to-forest-600 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8 2 4 6 4 10C4 16 12 22 12 22C12 22 20 16 20 10C20 6 16 2 12 2ZM12 13C10.3 13 9 11.7 9 10C9 8.3 10.3 7 12 7C13.7 7 15 8.3 15 10C15 11.7 13.7 13 12 13Z" />
                </svg>
              </div>
              <span className="font-serif text-lg text-forest-700">
                blomsterkollektivet<span className="text-blush-400">.</span>
              </span>
            </div>
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
