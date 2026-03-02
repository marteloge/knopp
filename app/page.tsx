import Link from "next/link";

/* ─── Botanical SVG illustrations — visible and beautiful ─── */

function Peony({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer petals */}
      <ellipse cx="100" cy="58" rx="28" ry="42" fill="#f0a99a" opacity="0.35" transform="rotate(0 100 100)" />
      <ellipse cx="100" cy="58" rx="28" ry="42" fill="#e48070" opacity="0.25" transform="rotate(60 100 100)" />
      <ellipse cx="100" cy="58" rx="28" ry="42" fill="#f8c8be" opacity="0.35" transform="rotate(120 100 100)" />
      <ellipse cx="100" cy="58" rx="28" ry="42" fill="#f0a99a" opacity="0.25" transform="rotate(180 100 100)" />
      <ellipse cx="100" cy="58" rx="28" ry="42" fill="#fce4df" opacity="0.35" transform="rotate(240 100 100)" />
      <ellipse cx="100" cy="58" rx="28" ry="42" fill="#e48070" opacity="0.25" transform="rotate(300 100 100)" />
      {/* Inner petals */}
      <ellipse cx="100" cy="72" rx="18" ry="26" fill="#f8c8be" opacity="0.5" transform="rotate(30 100 100)" />
      <ellipse cx="100" cy="72" rx="18" ry="26" fill="#fce4df" opacity="0.45" transform="rotate(90 100 100)" />
      <ellipse cx="100" cy="72" rx="18" ry="26" fill="#f0a99a" opacity="0.4" transform="rotate(150 100 100)" />
      <ellipse cx="100" cy="72" rx="18" ry="26" fill="#f8c8be" opacity="0.5" transform="rotate(210 100 100)" />
      <ellipse cx="100" cy="72" rx="18" ry="26" fill="#fce4df" opacity="0.45" transform="rotate(270 100 100)" />
      <ellipse cx="100" cy="72" rx="18" ry="26" fill="#f0a99a" opacity="0.4" transform="rotate(330 100 100)" />
      {/* Center */}
      <circle cx="100" cy="100" r="14" fill="#c17f6e" opacity="0.35" />
      <circle cx="100" cy="100" r="8" fill="#a3654f" opacity="0.3" />
    </svg>
  );
}

function WildFlower({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Stem */}
      <path d="M60 90 C58 130, 55 170, 60 210" stroke="#80bc74" strokeWidth="2.5" opacity="0.5" strokeLinecap="round" />
      {/* Leaves on stem */}
      <path d="M60 140 C45 130, 30 128, 25 135 C30 140, 45 142, 60 140Z" fill="#b5d9ac" opacity="0.45" />
      <path d="M60 165 C75 155, 88 155, 92 162 C87 167, 75 167, 60 165Z" fill="#80bc74" opacity="0.4" />
      {/* Flower petals */}
      <ellipse cx="60" cy="52" rx="16" ry="28" fill="#f8c8be" opacity="0.5" />
      <ellipse cx="60" cy="52" rx="16" ry="28" fill="#fce4df" opacity="0.45" transform="rotate(72 60 70)" />
      <ellipse cx="60" cy="52" rx="16" ry="28" fill="#f0a99a" opacity="0.4" transform="rotate(144 60 70)" />
      <ellipse cx="60" cy="52" rx="16" ry="28" fill="#f8c8be" opacity="0.5" transform="rotate(216 60 70)" />
      <ellipse cx="60" cy="52" rx="16" ry="28" fill="#fce4df" opacity="0.45" transform="rotate(288 60 70)" />
      {/* Center */}
      <circle cx="60" cy="70" r="10" fill="#edc47e" opacity="0.6" />
      <circle cx="60" cy="70" r="5" fill="#e4a94d" opacity="0.5" />
    </svg>
  );
}

function LeafBranch({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 180 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main stem */}
      <path d="M90 10 C88 60, 85 150, 90 290" stroke="#80bc74" strokeWidth="2.5" opacity="0.45" strokeLinecap="round" />
      {/* Leaves — alternating sides */}
      <path d="M90 40 C65 25, 40 28, 30 40 C40 50, 60 48, 90 40Z" fill="#b5d9ac" opacity="0.4" />
      <path d="M90 70 C115 55, 140 58, 148 70 C138 80, 118 78, 90 70Z" fill="#dcedd8" opacity="0.45" />
      <path d="M90 100 C65 85, 38 90, 28 105 C40 112, 62 108, 90 100Z" fill="#80bc74" opacity="0.35" />
      <path d="M90 135 C118 120, 145 125, 152 138 C142 148, 120 143, 90 135Z" fill="#b5d9ac" opacity="0.4" />
      <path d="M90 170 C62 158, 38 162, 30 175 C42 182, 64 178, 90 170Z" fill="#dcedd8" opacity="0.4" />
      <path d="M90 205 C116 192, 142 196, 150 210 C140 218, 118 214, 90 205Z" fill="#80bc74" opacity="0.3" />
      <path d="M90 240 C68 228, 45 232, 38 245 C48 252, 68 248, 90 240Z" fill="#b5d9ac" opacity="0.35" />
    </svg>
  );
}

function FloatingPetals({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Scattered petals falling */}
      <ellipse cx="80" cy="60" rx="12" ry="20" fill="#f8c8be" opacity="0.4" transform="rotate(-25 80 60)" />
      <ellipse cx="320" cy="100" rx="10" ry="16" fill="#f0a99a" opacity="0.35" transform="rotate(35 320 100)" />
      <ellipse cx="180" cy="180" rx="14" ry="22" fill="#fce4df" opacity="0.45" transform="rotate(-15 180 180)" />
      <ellipse cx="50" cy="280" rx="11" ry="18" fill="#f0a99a" opacity="0.3" transform="rotate(50 50 280)" />
      <ellipse cx="350" cy="250" rx="13" ry="20" fill="#f8c8be" opacity="0.4" transform="rotate(-40 350 250)" />
      <ellipse cx="250" cy="50" rx="9" ry="15" fill="#fce4df" opacity="0.35" transform="rotate(20 250 50)" />
      <ellipse cx="120" cy="340" rx="12" ry="19" fill="#f8c8be" opacity="0.35" transform="rotate(-30 120 340)" />
      <ellipse cx="290" cy="330" rx="10" ry="17" fill="#fce4df" opacity="0.4" transform="rotate(45 290 330)" />
    </svg>
  );
}

function SmallFlower({ className, color = "#f0a99a" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="18" rx="8" ry="14" fill={color} opacity="0.45" />
      <ellipse cx="30" cy="18" rx="8" ry="14" fill={color} opacity="0.4" transform="rotate(72 30 30)" />
      <ellipse cx="30" cy="18" rx="8" ry="14" fill={color} opacity="0.45" transform="rotate(144 30 30)" />
      <ellipse cx="30" cy="18" rx="8" ry="14" fill={color} opacity="0.4" transform="rotate(216 30 30)" />
      <ellipse cx="30" cy="18" rx="8" ry="14" fill={color} opacity="0.45" transform="rotate(288 30 30)" />
      <circle cx="30" cy="30" r="6" fill="#edc47e" opacity="0.6" />
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
      <section className="relative min-h-[85vh] flex items-center">
        {/* Decorative botanicals — actually visible! */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large peony top-right */}
          <Peony className="absolute -top-16 -right-16 w-[380px] h-[380px] animate-float-slow" />
          {/* Leaf branch left side */}
          <LeafBranch className="absolute top-10 -left-6 w-[140px] h-[240px] animate-sway" />
          {/* Wildflower right */}
          <WildFlower className="absolute top-1/4 right-[8%] w-[100px] h-[180px] animate-float-slower" />
          {/* Small flowers scattered */}
          <SmallFlower className="absolute top-[15%] left-[20%] w-14 h-14 animate-float-reverse" color="#f0a99a" />
          <SmallFlower className="absolute bottom-[30%] right-[20%] w-10 h-10 animate-float-slow" color="#f8c8be" />
          <SmallFlower className="absolute bottom-[20%] left-[12%] w-12 h-12 animate-sway" color="#e48070" />
          {/* Floating petals across the whole hero */}
          <FloatingPetals className="absolute inset-0 w-full h-full animate-float-slow" />
          {/* Another leaf branch, bottom-right */}
          <LeafBranch className="absolute -bottom-10 right-[3%] w-[120px] h-[200px] animate-float-reverse scale-x-[-1]" />
          {/* Gradient orbs for depth */}
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
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <SmallFlower className="absolute top-12 right-[10%] w-16 h-16 animate-sway" color="#b5d9ac" />
          <SmallFlower className="absolute bottom-16 left-[8%] w-12 h-12 animate-float-slow" color="#80bc74" />
          <LeafBranch className="absolute -bottom-8 right-[2%] w-[80px] h-[140px] opacity-60 animate-sway" />
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
      <section className="py-24 relative">
        {/* Decorative */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FloatingPetals className="absolute inset-0 w-full h-full opacity-70 animate-float-slower" />
          <Peony className="absolute -bottom-20 -left-20 w-[280px] h-[280px] opacity-50" />
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
            {/* Decorative elements — visible on dark bg */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Peony className="absolute -top-16 -right-16 w-[320px] h-[320px] opacity-[0.12]" />
              <LeafBranch className="absolute -bottom-10 right-10 w-[100px] h-[180px] opacity-[0.1] animate-sway" />
              <SmallFlower className="absolute top-20 right-[30%] w-16 h-16 opacity-[0.08]" color="#ffffff" />
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
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <SmallFlower className="absolute top-8 left-[15%] w-10 h-10 animate-float-slow opacity-70" color="#b5d9ac" />
          <SmallFlower className="absolute bottom-8 right-[12%] w-12 h-12 animate-sway opacity-60" color="#f8c8be" />
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
        {/* Background with botanicals */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-forest-50 via-cream to-blush-50" />
          <Peony className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-25" />
          <WildFlower className="absolute top-8 right-[12%] w-[80px] h-[150px] animate-sway opacity-60" />
          <WildFlower className="absolute bottom-8 left-[10%] w-[70px] h-[130px] animate-float-slow opacity-50 scale-x-[-1]" />
          <FloatingPetals className="absolute inset-0 w-full h-full opacity-50 animate-float-reverse" />
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
