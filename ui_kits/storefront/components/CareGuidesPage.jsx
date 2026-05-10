/* CareGuidesPage — FlowerHorn Shop */
const guideStyles = {
  page: { fontFamily: "'DM Sans', sans-serif", background: '#f2f4f3', minHeight: '100vh' },
  hero: { background: '#0a0f0d', padding: '64px 24px', textAlign: 'center' },
  heroTitle: { fontSize: 'clamp(28px,4vw,46px)', fontWeight: 800, color: '#faf4d8', letterSpacing: '-0.02em', marginBottom: 12 },
  heroSub: { fontSize: 16, color: 'rgba(250,244,216,0.6)', maxWidth: 540, margin: '0 auto 28px', lineHeight: 1.6, fontWeight: 400 },
  heroBtn: { background: '#8c2515', color: '#fff', border: 'none', borderRadius: 50, padding: '12px 28px', fontSize: 14, fontWeight: 800, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" },
  body: { maxWidth: 1100, margin: '0 auto', padding: '48px 24px', display: 'flex', flexDirection: 'column', gap: 24 },
  card: { background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.07)', overflow: 'hidden' },
  cardHeader: { display: 'flex', alignItems: 'center', gap: 16, padding: '24px 28px 20px', borderBottom: '1px solid rgba(0,0,0,0.07)' },
  cardIcon: { width: 52, height: 52, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, flexShrink: 0 },
  cardTitle: { fontSize: 20, fontWeight: 800, color: '#090909', letterSpacing: '-0.01em' },
  cardSub: { fontSize: 13, color: '#6b7280', fontWeight: 500, marginTop: 2 },
  cardBody: { padding: '24px 28px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 },
  section: { display: 'flex', flexDirection: 'column', gap: 8 },
  sectionTitle: { fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: 4 },
  sectionText: { fontSize: 14, color: '#333', lineHeight: 1.7, fontWeight: 400 },
  paramGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 4 },
  param: { background: '#f2f4f3', borderRadius: 6, padding: '10px 12px' },
  paramLabel: { fontSize: 10, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: 2 },
  paramVal: { fontSize: 13, fontWeight: 700, color: '#090909' },
  tip: { display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: 13, color: '#333', lineHeight: 1.5, fontWeight: 500 },
  tipIcon: { fontSize: 15, flexShrink: 0, marginTop: 1 },
  diffBadge: { display: 'inline-flex', padding: '2px 10px', borderRadius: 50, fontSize: 11, fontWeight: 800 },
};

const GUIDES = [
  {
    id: 'flowerhorn',
    title: 'Flowerhorn Care Guide',
    subtitle: 'Red Dragon · Kamfa · Zhen Zhu · Golden Base',
    bg: 'linear-gradient(135deg, #0d1810, #1a2e1c)',
    icon: '🐟',
    difficulty: 'Intermediate',
    diffColor: '#e8a920',
    overview: 'Flowerhorns are hardy cichlid hybrids bred for their striking nuchal hump (kok), vivid body markings, and interactive personality. They thrive with attentive care and become remarkably personable — recognising their keeper and responding to feeding time. They are aggressive fish best kept as solo inhabitants or with large, fast dither fish.',
    params: [
      { label: 'Temperature', val: '26–29 °C' },
      { label: 'pH Range', val: '7.0–7.8' },
      { label: 'Hardness', val: '10–20 dGH' },
      { label: 'Min. Tank Size', val: '200 L (solo)' },
    ],
    tips: [
      ['🔵', 'Use a powerful external canister filter rated at least 3–4× your tank volume — flowerhorns are heavy bioload fish.'],
      ['💧', 'Perform 25–30% water changes weekly. Pristine water = better kok development and colour.'],
      ['🪨', 'Provide smooth rounded substrate (no sharp gravel) to prevent belly injuries during digging.'],
      ['🍽', 'Rotate diet between premium cichlid pellets, frozen bloodworms, earthworms, and brine shrimp for best colouring.'],
      ['🌡', 'Avoid temperature swings — use a reliable heater with a guard to prevent direct contact burns.'],
    ],
  },
  {
    id: 'cichlid',
    title: 'Cichlid Care Guide',
    subtitle: 'Oscar · Convict · Jewel · Severum',
    bg: 'linear-gradient(135deg, #0d1015, #1a1a2e)',
    icon: '🐠',
    difficulty: 'Beginner–Intermediate',
    diffColor: '#357e51',
    overview: 'Cichlids are one of the most diverse freshwater fish families, native to Africa and South America. They range from peaceful community fish to highly territorial predators. Most share a need for good filtration, stable water parameters, and hiding spots. Understanding your specific species is key — an Oscar\'s needs differ greatly from a small dwarf cichlid.',
    params: [
      { label: 'Temperature', val: '23–28 °C' },
      { label: 'pH Range', val: '6.5–8.0 (species)' },
      { label: 'Tank Size', val: '80–200 L+' },
      { label: 'Temperament', val: 'Varies by species' },
    ],
    tips: [
      ['🏠', 'Provide caves, rocks, and driftwood as territories and hiding spots to reduce aggression.'],
      ['👫', 'Many cichlids pair-bond for breeding — monitor paired fish closely and be ready to separate if aggression spikes.'],
      ['🔵', 'External canister or HOB filters work well. Match filtration to species bioload.'],
      ['🍽', 'Most cichlids are omnivores — quality cichlid pellets supplemented with frozen/live food cover nutritional needs.'],
      ['📏', 'Research adult size before purchasing. Oscars reach 30+ cm; plan tank size accordingly.'],
    ],
  },
  {
    id: 'goldfish',
    title: 'Goldfish Care Guide',
    subtitle: 'Oranda · Ranchu · Ryukin · Common',
    bg: 'linear-gradient(135deg, #151008, #2a200a)',
    icon: '🐡',
    difficulty: 'Beginner',
    diffColor: '#357e51',
    overview: 'Goldfish are cold-water fish that live far longer than most people expect — 10–20 years with proper care. The biggest mistake is keeping them in bowls or small tanks. They are heavy waste producers and need generous space and strong filtration. Fancy varieties (Oranda, Ranchu) are more sensitive than single-tail types and need slightly warmer, well-oxygenated water.',
    params: [
      { label: 'Temperature', val: '18–23 °C' },
      { label: 'pH Range', val: '7.0–8.0' },
      { label: 'Min. Tank Size', val: '100 L per fish' },
      { label: 'Lifespan', val: '10–20 years' },
    ],
    tips: [
      ['❌', 'Never keep goldfish in a bowl — they produce too much ammonia and need oxygenated, filtered water.'],
      ['🔵', 'Use a filter rated for 4–6× the tank volume. Goldfish are heavy waste producers.'],
      ['🥬', 'Feed quality goldfish pellets and supplement with blanched spinach, peas, and cucumber to aid digestion.'],
      ['💧', 'Weekly 25% water changes are essential. Test ammonia and nitrite levels especially in new setups.'],
      ['🌡', 'Avoid very warm water (above 24°C) — it reduces oxygen levels and stresses fancy goldfish.'],
    ],
  },
  {
    id: 'setup',
    title: 'Aquarium Setup Basics',
    subtitle: 'First tank · Nitrogen cycle · Equipment',
    bg: 'linear-gradient(135deg, #0a1020, #101828)',
    icon: '🪣',
    difficulty: 'Essential reading',
    diffColor: '#1559d5',
    overview: 'Setting up an aquarium correctly from the start saves months of frustration. The most critical step is the nitrogen cycle — establishing beneficial bacteria that convert toxic ammonia into safe nitrate. This takes 4–6 weeks and must be completed before adding fish. Rushing this step is the #1 cause of new fish deaths.',
    params: [
      { label: 'Cycling Time', val: '4–6 weeks' },
      { label: 'Water Change', val: '25–30% weekly' },
      { label: 'Lighting', val: '8–10 hrs/day' },
      { label: 'Substrate Depth', val: '3–5 cm' },
    ],
    tips: [
      ['🔄', 'Cycle the tank before adding fish: add ammonia source (fish food/pure ammonia), wait for bacteria to establish, test water until ammonia and nitrite read 0.'],
      ['🔵', 'Filtration: external canister filters are the gold standard. Always run slightly oversized filtration.'],
      ['💡', 'Lighting: 8–10 hours daily for planted tanks. Use a timer to maintain consistency.'],
      ['🌿', 'Easy starter plants — Java Fern, Anubias, Hornwort — oxygenate water and reduce nitrates naturally.'],
      ['🧪', 'Invest in a liquid test kit (API Master Kit) — test strips are inaccurate. Test weekly in new setups.'],
    ],
  },
];

function GuideCard({ guide, isMobile }) {
  const [open, setOpen] = React.useState(true);
  return (
    <div style={guideStyles.card}>
      <div style={guideStyles.cardHeader}>
        <div style={{ ...guideStyles.cardIcon, background: guide.bg }}>
          <span>{guide.icon}</span>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <div style={guideStyles.cardTitle}>{guide.title}</div>
            <span style={{ ...guideStyles.diffBadge, background: guide.diffColor + '22', color: guide.diffColor }}>{guide.difficulty}</span>
          </div>
          <div style={guideStyles.cardSub}>{guide.subtitle}</div>
        </div>
        <button
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 20, color: '#9ca3af', padding: '0 4px' }}
          onClick={() => setOpen(o => !o)} title={open ? 'Collapse' : 'Expand'}>
          {open ? '▲' : '▼'}
        </button>
      </div>
      {open && (
        <div style={{ ...guideStyles.cardBody, gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <div>
            <div style={guideStyles.section}>
              <div style={guideStyles.sectionTitle}>Overview</div>
              <div style={guideStyles.sectionText}>{guide.overview}</div>
            </div>
            <div style={{ ...guideStyles.section, marginTop: 20 }}>
              <div style={guideStyles.sectionTitle}>Water Parameters</div>
              <div style={guideStyles.paramGrid}>
                {guide.params.map(p => (
                  <div key={p.label} style={guideStyles.param}>
                    <div style={guideStyles.paramLabel}>{p.label}</div>
                    <div style={guideStyles.paramVal}>{p.val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div style={guideStyles.section}>
              <div style={guideStyles.sectionTitle}>Care Tips</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 4 }}>
                {guide.tips.map(([icon, text]) => (
                  <div key={text} style={guideStyles.tip}>
                    <span style={guideStyles.tipIcon}>{icon}</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function CareGuidesPage({ setPage }) {
  const isMobile = window.innerWidth < 768;
  return (
    <div style={guideStyles.page}>
      <div style={guideStyles.hero}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(140,37,21,0.25)', border: '1px solid rgba(140,37,21,0.45)', borderRadius: 50, padding: '4px 12px', fontSize: 11, fontWeight: 800, color: '#faf4d8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>
          From our experts
        </div>
        <h1 style={guideStyles.heroTitle}>Fish Care Guides</h1>
        <p style={guideStyles.heroSub}>Practical, hands-on care advice from the team at FlowerHorn Shop — built from over a decade of keeping and selling aquarium fish in Madurai.</p>
        <button style={guideStyles.heroBtn} onClick={() => setPage('shop')}>Browse Live Fish →</button>
      </div>
      <div style={guideStyles.body}>
        {GUIDES.map(g => <GuideCard key={g.id} guide={g} isMobile={isMobile} />)}
        <div style={{ background: '#0a0f0d', borderRadius: 8, padding: '28px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div style={{ fontSize: 18, fontWeight: 800, color: '#faf4d8', marginBottom: 6 }}>Still have questions?</div>
            <div style={{ fontSize: 14, color: 'rgba(250,244,216,0.6)', lineHeight: 1.5 }}>WhatsApp us — we're happy to help with tank setup, fish selection, and care advice.</div>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button style={{ background: '#8c2515', color: '#fff', border: 'none', borderRadius: 50, padding: '11px 22px', fontSize: 14, fontWeight: 800, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif" }} onClick={() => setPage('about')}>Contact Us →</button>
            <button style={{ background: 'transparent', color: '#faf4d8', border: '1.5px solid rgba(250,244,216,0.2)', borderRadius: 50, padding: '11px 22px', fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif" }} onClick={() => setPage('shop')}>Shop Fish</button>
          </div>
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { CareGuidesPage, GuideCard });
