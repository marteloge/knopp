/* ─── Professional botanical SVG illustrations ─── */

export function Peony({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Back petals — large, sweeping */}
      <path d="M120 40 C90 35, 50 55, 45 90 C40 120, 60 145, 90 140 C70 120, 65 90, 120 40Z" fill="#f5c6ba" opacity="0.4" />
      <path d="M120 40 C150 35, 190 55, 195 90 C200 120, 180 145, 150 140 C170 120, 175 90, 120 40Z" fill="#f0b0a0" opacity="0.35" />
      <path d="M50 110 C35 85, 55 50, 90 48 C70 65, 55 85, 50 110Z" fill="#fad5cc" opacity="0.3" />
      <path d="M190 110 C205 85, 185 50, 150 48 C170 65, 185 85, 190 110Z" fill="#f5c6ba" opacity="0.3" />

      {/* Middle layer petals — more defined */}
      <path d="M120 55 C95 50, 62 70, 58 100 C55 125, 75 148, 105 138 C80 125, 72 100, 120 55Z" fill="#f0a99a" opacity="0.45" />
      <path d="M120 55 C145 50, 178 70, 182 100 C185 125, 165 148, 135 138 C160 125, 168 100, 120 55Z" fill="#e89888" opacity="0.4" />
      <path d="M70 130 C55 110, 58 78, 85 60 C72 80, 62 100, 70 130Z" fill="#f8d0c5" opacity="0.4" />
      <path d="M170 130 C185 110, 182 78, 155 60 C168 80, 178 100, 170 130Z" fill="#f0b8ab" opacity="0.38" />

      {/* Inner petals — curled, overlapping */}
      <path d="M120 68 C100 65, 78 82, 76 105 C74 122, 88 140, 110 132 C92 122, 84 105, 120 68Z" fill="#e8928a" opacity="0.48" />
      <path d="M120 68 C140 65, 162 82, 164 105 C166 122, 152 140, 130 132 C148 122, 156 105, 120 68Z" fill="#e0857c" opacity="0.42" />
      <path d="M95 120 C82 108, 80 88, 100 72 C90 88, 86 105, 95 120Z" fill="#f2bdb2" opacity="0.45" />
      <path d="M145 120 C158 108, 160 88, 140 72 C150 88, 154 105, 145 120Z" fill="#eaa89c" opacity="0.42" />

      {/* Center — tight spiral petals */}
      <path d="M120 82 C108 80, 95 92, 95 108 C95 120, 106 130, 118 124 C105 118, 100 108, 120 82Z" fill="#d87a72" opacity="0.5" />
      <path d="M120 82 C132 80, 145 92, 145 108 C145 120, 134 130, 122 124 C135 118, 140 108, 120 82Z" fill="#cc6e66" opacity="0.45" />

      {/* Center pistil */}
      <ellipse cx="120" cy="108" rx="16" ry="14" fill="#c2655e" opacity="0.4" />
      <ellipse cx="120" cy="108" rx="9" ry="8" fill="#b35a52" opacity="0.35" />
      {/* Tiny stamens */}
      <circle cx="114" cy="104" r="2" fill="#edc47e" opacity="0.6" />
      <circle cx="126" cy="104" r="2" fill="#edc47e" opacity="0.55" />
      <circle cx="120" cy="100" r="2" fill="#e4a94d" opacity="0.6" />
      <circle cx="116" cy="112" r="1.5" fill="#edc47e" opacity="0.5" />
      <circle cx="124" cy="112" r="1.5" fill="#edc47e" opacity="0.5" />
    </svg>
  );
}

export function Rose({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Stem */}
      <path d="M80 120 C78 140, 76 165, 80 195" stroke="#6b9e5e" strokeWidth="2.5" opacity="0.5" strokeLinecap="round" />
      {/* Thorns */}
      <path d="M79 145 L72 140 L78 143" fill="#6b9e5e" opacity="0.4" />
      <path d="M81 165 L88 160 L82 163" fill="#6b9e5e" opacity="0.4" />
      {/* Leaves */}
      <path d="M78 152 C62 142, 42 144, 36 155 C42 162, 58 160, 78 152Z" fill="#8cb87a" opacity="0.45" />
      <path d="M40 154 L58 148" stroke="#6b9e5e" strokeWidth="0.8" opacity="0.3" />
      <path d="M82 175 C96 168, 112 172, 116 182 C110 188, 96 184, 82 175Z" fill="#9ec48e" opacity="0.4" />
      <path d="M114 181 L98 176" stroke="#6b9e5e" strokeWidth="0.8" opacity="0.3" />
      {/* Sepals */}
      <path d="M80 118 C72 122, 62 116, 58 108 C62 112, 70 115, 80 118Z" fill="#6b9e5e" opacity="0.4" />
      <path d="M80 118 C88 122, 98 116, 102 108 C98 112, 90 115, 80 118Z" fill="#7aaa6a" opacity="0.38" />

      {/* Outer petals */}
      <path d="M80 30 C55 28, 28 48, 30 78 C32 100, 52 118, 80 115 C58 105, 40 85, 80 30Z" fill="#f2b5aa" opacity="0.4" />
      <path d="M80 30 C105 28, 132 48, 130 78 C128 100, 108 118, 80 115 C102 105, 120 85, 80 30Z" fill="#eaa59a" opacity="0.38" />
      {/* Mid petals */}
      <path d="M80 42 C62 40, 42 56, 42 78 C42 96, 58 112, 80 108 C62 100, 50 82, 80 42Z" fill="#e8968c" opacity="0.48" />
      <path d="M80 42 C98 40, 118 56, 118 78 C118 96, 102 112, 80 108 C98 100, 110 82, 80 42Z" fill="#e08878" opacity="0.44" />
      {/* Inner petals — tight curl */}
      <path d="M80 55 C68 54, 56 66, 56 80 C56 92, 66 102, 80 98 C68 94, 62 82, 80 55Z" fill="#d87870" opacity="0.5" />
      <path d="M80 55 C92 54, 104 66, 104 80 C104 92, 94 102, 80 98 C92 94, 98 82, 80 55Z" fill="#d06a62" opacity="0.46" />
      {/* Center spiral */}
      <path d="M80 65 C72 64, 65 72, 65 82 C65 90, 72 96, 80 93 C74 90, 70 83, 80 65Z" fill="#c8625a" opacity="0.5" />
      <path d="M80 65 C88 64, 95 72, 95 82 C95 90, 88 96, 80 93 C86 90, 90 83, 80 65Z" fill="#c05852" opacity="0.48" />
      <ellipse cx="80" cy="82" rx="8" ry="7" fill="#b85550" opacity="0.45" />
    </svg>
  );
}

export function EucalyptusBranch({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 140 340" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main stem — organic curve */}
      <path d="M70 8 C68 40, 65 80, 68 120 C71 160, 66 200, 70 240 C74 280, 68 310, 72 336"
        stroke="#7aaa6a" strokeWidth="2" opacity="0.5" strokeLinecap="round" />

      {/* Eucalyptus leaves — rounded, alternating */}
      <ellipse cx="48" cy="35" rx="22" ry="14" fill="#9ec48e" opacity="0.4" transform="rotate(-25 48 35)" />
      <ellipse cx="48" cy="35" rx="22" ry="14" fill="#b5d4a6" opacity="0.2" transform="rotate(-25 48 35)" />
      <line x1="58" y1="29" x2="38" y2="41" stroke="#7aaa6a" strokeWidth="0.7" opacity="0.3" />

      <ellipse cx="95" cy="62" rx="20" ry="13" fill="#8cb87a" opacity="0.42" transform="rotate(20 95 62)" />
      <line x1="85" y1="56" x2="105" y2="68" stroke="#6b9e5e" strokeWidth="0.7" opacity="0.3" />

      <ellipse cx="44" cy="92" rx="24" ry="14" fill="#a8cc98" opacity="0.38" transform="rotate(-30 44 92)" />
      <line x1="56" y1="84" x2="32" y2="100" stroke="#7aaa6a" strokeWidth="0.7" opacity="0.25" />

      <ellipse cx="98" cy="125" rx="22" ry="13" fill="#9ec48e" opacity="0.42" transform="rotate(25 98 125)" />
      <line x1="88" y1="119" x2="108" y2="131" stroke="#6b9e5e" strokeWidth="0.7" opacity="0.3" />

      <ellipse cx="42" cy="158" rx="24" ry="15" fill="#8cb87a" opacity="0.4" transform="rotate(-22 42 158)" />
      <line x1="54" y1="150" x2="30" y2="166" stroke="#7aaa6a" strokeWidth="0.7" opacity="0.25" />

      <ellipse cx="100" cy="190" rx="21" ry="14" fill="#a8cc98" opacity="0.38" transform="rotate(28 100 190)" />
      <line x1="90" y1="184" x2="110" y2="196" stroke="#6b9e5e" strokeWidth="0.7" opacity="0.28" />

      <ellipse cx="46" cy="222" rx="22" ry="13" fill="#9ec48e" opacity="0.4" transform="rotate(-26 46 222)" />
      <line x1="56" y1="216" x2="36" y2="228" stroke="#7aaa6a" strokeWidth="0.7" opacity="0.25" />

      <ellipse cx="96" cy="255" rx="20" ry="12" fill="#8cb87a" opacity="0.38" transform="rotate(22 96 255)" />
      <line x1="86" y1="249" x2="106" y2="261" stroke="#6b9e5e" strokeWidth="0.7" opacity="0.28" />

      <ellipse cx="50" cy="285" rx="18" ry="11" fill="#a8cc98" opacity="0.35" transform="rotate(-20 50 285)" />
      <ellipse cx="92" cy="310" rx="16" ry="10" fill="#9ec48e" opacity="0.32" transform="rotate(18 92 310)" />
    </svg>
  );
}

export function Dahlia({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer ray petals — long, pointed */}
      {[0, 24, 48, 72, 96, 120, 144, 168, 192, 216, 240, 264, 288, 312, 336].map((angle) => (
        <path
          key={angle}
          d={`M100 100 C${95 + Math.random() * 10} ${60 + Math.random() * 5}, ${90 + Math.random() * 10} 30, 100 15 C${100 + Math.random() * 10} 30, ${100 + Math.random() * 10} ${60 + Math.random() * 5}, 100 100Z`}
          fill={angle % 48 === 0 ? "#e8928a" : angle % 48 === 24 ? "#f0a99a" : "#eaa09a"}
          opacity={0.32 + (angle % 72 === 0 ? 0.08 : 0)}
          transform={`rotate(${angle} 100 100)`}
        />
      ))}
      {/* Middle layer — shorter petals */}
      {[15, 39, 63, 87, 111, 135, 159, 183, 207, 231, 255, 279, 303, 327, 351].map((angle) => (
        <path
          key={`m${angle}`}
          d="M100 100 C96 72, 94 50, 100 38 C106 50, 104 72, 100 100Z"
          fill={angle % 39 === 0 ? "#d87870" : "#e08880"}
          opacity={0.38 + (angle % 78 === 0 ? 0.06 : 0)}
          transform={`rotate(${angle} 100 100)`}
        />
      ))}
      {/* Inner petals — tight */}
      {[10, 34, 58, 82, 106, 130, 154, 178, 202, 226, 250, 274, 298, 322, 346].map((angle) => (
        <path
          key={`i${angle}`}
          d="M100 100 C97 82, 96 68, 100 58 C104 68, 103 82, 100 100Z"
          fill={angle % 34 === 0 ? "#c86860" : "#d07068"}
          opacity={0.42}
          transform={`rotate(${angle} 100 100)`}
        />
      ))}
      {/* Center */}
      <circle cx="100" cy="100" r="14" fill="#b85850" opacity="0.45" />
      <circle cx="100" cy="100" r="8" fill="#a84e48" opacity="0.4" />
      {/* Center dots */}
      <circle cx="96" cy="97" r="1.5" fill="#edc47e" opacity="0.55" />
      <circle cx="104" cy="97" r="1.5" fill="#edc47e" opacity="0.55" />
      <circle cx="100" cy="103" r="1.5" fill="#e4a94d" opacity="0.5" />
    </svg>
  );
}

export function FloatingPetals({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Realistic curved petals scattered */}
      <path d="M80 70 C75 50, 85 30, 95 28 C100 38, 92 58, 80 70Z" fill="#f5c6ba" opacity="0.4" transform="rotate(-20 80 70)" />
      <path d="M380 90 C375 70, 388 52, 398 50 C402 62, 392 78, 380 90Z" fill="#eaa59a" opacity="0.35" transform="rotate(30 380 90)" />
      <path d="M200 180 C192 158, 205 138, 218 135 C222 148, 210 168, 200 180Z" fill="#f8d0c5" opacity="0.38" transform="rotate(-10 200 180)" />
      <path d="M60 320 C55 300, 68 282, 78 280 C82 292, 72 308, 60 320Z" fill="#f0b8ab" opacity="0.35" transform="rotate(40 60 320)" />
      <path d="M420 280 C415 260, 425 240, 435 238 C440 250, 430 268, 420 280Z" fill="#f5c6ba" opacity="0.38" transform="rotate(-35 420 280)" />
      <path d="M300 60 C295 42, 305 25, 315 22 C318 34, 310 50, 300 60Z" fill="#fad5cc" opacity="0.35" transform="rotate(15 300 60)" />
      <path d="M150 400 C142 380, 155 362, 168 358 C172 370, 160 388, 150 400Z" fill="#eaa59a" opacity="0.32" transform="rotate(-25 150 400)" />
      <path d="M350 380 C345 360, 358 342, 368 340 C372 352, 362 368, 350 380Z" fill="#f8d0c5" opacity="0.36" transform="rotate(22 350 380)" />
      <path d="M450 160 C445 140, 455 122, 465 120 C468 132, 458 148, 450 160Z" fill="#f0b8ab" opacity="0.3" transform="rotate(-18 450 160)" />
      <path d="M30 180 C25 162, 35 145, 45 142 C48 154, 38 168, 30 180Z" fill="#f5c6ba" opacity="0.33" transform="rotate(28 30 180)" />
    </svg>
  );
}

export function WildflowerSprig({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Stem — natural curve */}
      <path d="M50 100 C48 125, 45 160, 48 200 C49 215, 50 225, 52 238"
        stroke="#7aaa6a" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
      {/* Small leaves */}
      <path d="M49 140 C38 132, 24 134, 20 142 C26 148, 38 144, 49 140Z" fill="#9ec48e" opacity="0.4" />
      <path d="M50 175 C60 168, 74 170, 78 178 C72 183, 60 180, 50 175Z" fill="#8cb87a" opacity="0.38" />
      <path d="M49 205 C40 198, 28 200, 24 208 C30 212, 40 210, 49 205Z" fill="#a8cc98" opacity="0.35" />

      {/* Flower head — 5-petal wildflower */}
      <path d="M50 50 C42 35, 35 18, 42 8 C48 4, 52 4, 58 8 C65 18, 58 35, 50 50Z" fill="#fad5cc" opacity="0.5" />
      <path d="M50 50 C62 38, 78 32, 85 40 C88 48, 82 54, 72 56 C64 58, 55 52, 50 50Z" fill="#f5c6ba" opacity="0.45" />
      <path d="M50 50 C58 62, 68 76, 62 85 C56 90, 48 86, 46 78 C42 70, 48 58, 50 50Z" fill="#f0b8ab" opacity="0.48" />
      <path d="M50 50 C38 62, 28 74, 22 68 C18 62, 22 54, 30 50 C36 46, 46 48, 50 50Z" fill="#f5c6ba" opacity="0.45" />
      <path d="M50 50 C40 36, 28 28, 28 18 C30 12, 38 14, 44 20 C48 28, 50 40, 50 50Z" fill="#fad5cc" opacity="0.47" />
      {/* Center */}
      <circle cx="50" cy="50" r="8" fill="#edc47e" opacity="0.6" />
      <circle cx="50" cy="50" r="4.5" fill="#e4a94d" opacity="0.55" />
      <circle cx="48" cy="48" r="1.2" fill="#d4942d" opacity="0.4" />
      <circle cx="52" cy="48" r="1.2" fill="#d4942d" opacity="0.4" />
      <circle cx="50" cy="52" r="1.2" fill="#d4942d" opacity="0.4" />
    </svg>
  );
}

export function SmallBlossom({ className, variant = 0 }: { className?: string; variant?: number }) {
  const colors = [
    { petal: "#f0a99a", center: "#edc47e" },
    { petal: "#f5c6ba", center: "#e4a94d" },
    { petal: "#e8928a", center: "#edc47e" },
    { petal: "#b5d4a6", center: "#edc47e" },
  ];
  const c = colors[variant % colors.length];
  return (
    <svg className={className} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 25 C22 14, 20 4, 25 2 C30 4, 28 14, 25 25Z" fill={c.petal} opacity="0.5" />
      <path d="M25 25 C34 18, 42 14, 44 20 C42 26, 34 24, 25 25Z" fill={c.petal} opacity="0.45" />
      <path d="M25 25 C32 34, 38 42, 34 46 C28 46, 28 36, 25 25Z" fill={c.petal} opacity="0.48" />
      <path d="M25 25 C16 34, 10 40, 6 36 C6 30, 14 28, 25 25Z" fill={c.petal} opacity="0.45" />
      <path d="M25 25 C16 16, 10 8, 14 4 C20 2, 22 12, 25 25Z" fill={c.petal} opacity="0.47" />
      <circle cx="25" cy="25" r="5" fill={c.center} opacity="0.6" />
      <circle cx="25" cy="25" r="2.5" fill="#d4942d" opacity="0.4" />
    </svg>
  );
}

export function WaveDivider({ flip, color = "#f0f7ee" }: { flip?: boolean; color?: string }) {
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
