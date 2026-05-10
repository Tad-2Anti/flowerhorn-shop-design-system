/* HomePage component — FlowerHorn Shop */
const homeStyles = {
  page: { fontFamily: "'DM Sans', sans-serif" },
  hero: { background: '#0a0f0d', minHeight: 520, display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' },
  heroBg: { position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #0a0f0d 0%, #0f1a12 60%, #0a0f0d 100%)', zIndex: 0 },
  heroAccent: { position: 'absolute', right: 0, top: 0, width: '48%', height: '100%', background: 'linear-gradient(160deg, #0d1810 0%, #162418 100%)', zIndex: 0 },
  heroFish: { position: 'absolute', right: 0, top: 0, width: '48%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 },
  heroContent: { position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto', padding: '80px 24px', width: '100%' },
  heroEyebrow: { display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(140,37,21,0.25)', border: '1px solid rgba(140,37,21,0.45)', borderRadius: 50, padding: '4px 12px', fontSize: 11, fontWeight: 800, color: '#faf4d8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 },
  heroH1: { fontSize: 'clamp(36px,5vw,60px)', fontWeight: 800, color: '#faf4d8', lineHeight: 1.1, letterSpacing: '-0.02em', maxWidth: 560, marginBottom: 16 },
  heroSub: { fontSize: 18, color: 'rgba(250,244,216,0.65)', fontWeight: 400, maxWidth: 440, lineHeight: 1.6, marginBottom: 32 },
  heroCtas: { display: 'flex', gap: 12, flexWrap: 'wrap' },
  btnPrimary: { background: '#8c2515', color: '#fff', borderRadius: 50, padding: '13px 28px', fontSize: 15, fontWeight: 800, border: 'none', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", transition: 'background 300ms' },
  btnGhost: { background: 'transparent', color: '#faf4d8', borderRadius: 50, padding: '12px 28px', fontSize: 15, fontWeight: 700, border: '1.5px solid rgba(250,244,216,0.25)', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", transition: 'all 300ms' },
  trustBar: { background: '#8c2515', padding: '14px 24px' },
  trustInner: { maxWidth: 1280, margin: '0 auto', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: 12 },
  trustItem: { display: 'flex', alignItems: 'center', gap: 8, color: '#fff', fontSize: 13, fontWeight: 700 },
  trustIcon: { fontSize: 18 },
  section: { padding: '64px 24px', maxWidth: 1280, margin: '0 auto' },
  sectionHead: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 32 },
  sectionTitle: { fontSize: 30, fontWeight: 800, color: '#090909', letterSpacing: '-0.02em' },
  sectionLink: { fontSize: 14, fontWeight: 700, color: '#8c2515', textDecoration: 'none', cursor: 'pointer', background: 'none', border: 'none', fontFamily: "'DM Sans', sans-serif" },
  catGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 12 },
  catCard: { borderRadius: 6, padding: '20px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, cursor: 'pointer', transition: 'transform 300ms, box-shadow 300ms', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', background: '#fff' },
  catEmoji: { fontSize: 36 },
  catLabel: { fontSize: 14, fontWeight: 700, color: '#090909' },
  catCount: { fontSize: 11, color: '#6b7280', fontWeight: 500 },
  productGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 },
  productCard: { background: '#fff', borderRadius: 6, boxShadow: '0 2px 8px rgba(0,0,0,0.07)', overflow: 'hidden', cursor: 'pointer', transition: 'box-shadow 300ms, transform 300ms', display: 'flex', flexDirection: 'column' },
  cardImg: { height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 64, position: 'relative' },
  cardBadge: { position: 'absolute', top: 10, left: 10, fontSize: 10, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '3px 8px', borderRadius: 50 },
  cardBody: { padding: '12px 14px', flex: 1, display: 'flex', flexDirection: 'column', gap: 5 },
  cardName: { fontSize: 15, fontWeight: 700, color: '#090909', lineHeight: 1.3 },
  cardMeta: { fontSize: 12, color: '#6b7280', fontWeight: 500, display: 'flex', gap: 8 },
  cardPrice: { fontSize: 20, fontWeight: 800, color: '#090909' },
  cardOldPrice: { fontSize: 13, color: '#9ca3af', textDecoration: 'line-through', fontWeight: 500 },
  cardStock: { fontSize: 11, fontWeight: 700, letterSpacing: '0.04em' },
  cardFooter: { padding: '10px 14px', borderTop: '1px solid rgba(0,0,0,0.05)', display: 'flex', gap: 8 },
  btnCart: { flex: 1, background: '#8c2515', color: '#fff', border: 'none', borderRadius: 50, padding: '8px 14px', fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 700, cursor: 'pointer', transition: 'background 200ms' },
  btnWish: { width: 34, height: 34, background: '#f2f4f3', border: 'none', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 16, flexShrink: 0 },
  aboutSection: { background: '#0a0f0d', padding: '64px 24px' },
  aboutInner: { maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' },
  aboutTag: { display: 'inline-flex', background: '#8c2515', color: '#fff', borderRadius: 50, padding: '4px 12px', fontSize: 11, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 16 },
  aboutTitle: { fontSize: 36, fontWeight: 800, color: '#faf4d8', lineHeight: 1.2, marginBottom: 16, letterSpacing: '-0.02em' },
  aboutText: { fontSize: 16, color: 'rgba(250,244,216,0.65)', lineHeight: 1.7, fontWeight: 400, marginBottom: 24 },
  storeCard: { background: 'rgba(255,255,255,0.05)', borderRadius: 8, padding: 24, border: '1px solid rgba(250,244,216,0.1)', display: 'flex', flexDirection: 'column', gap: 16 },
  storeRow: { display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 14, color: 'rgba(250,244,216,0.7)', fontWeight: 500, lineHeight: 1.5 },
  storeIcon: { fontSize: 18, flexShrink: 0 },
};

const CATEGORIES = [
  { id: 'flowerhorn', label: 'Flowerhorn', count: 24 },
  { id: 'cichlid', label: 'Cichlids', count: 18 },
  { id: 'goldfish', label: 'Goldfish', count: 12 },
  { id: 'accessory', label: 'Accessories', count: 56 },
  { id: 'plant', label: 'Plants', count: 31 },
  { id: 'food', label: 'Fish Food', count: 20 },
];

const CAT_COLORS = {
  flowerhorn: 'linear-gradient(180deg,#0d1810,#1a2e1c)',
  cichlid:   'linear-gradient(180deg,#0d1810,#1a2e1c)',
  goldfish:  'linear-gradient(180deg,#0d1810,#1a2e1c)',
  accessory: 'linear-gradient(180deg,#111820,#1c2535)',
  plant:     'linear-gradient(180deg,#0d1810,#1a2e1c)',
  food:      'linear-gradient(180deg,#111820,#1c2535)',
};

function ProductCardHome({ product, onProductClick, onAddToCart, isWishlisted, onToggleWishlist }) {
  const [hov, setHov] = React.useState(false);
  return (
    <div style={{ ...homeStyles.productCard, ...(hov ? { boxShadow: '0 4px 20px rgba(0,0,0,0.14)', transform: 'translateY(-2px)' } : {}) }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      onClick={() => onProductClick(product)}>
      <div style={{ ...homeStyles.cardImg, background: product.bg }}>
        {product.isNew && <span style={{ ...homeStyles.cardBadge, background: '#8c2515', color: '#fff' }}>New</span>}
        {product.isSale && <span style={{ ...homeStyles.cardBadge, background: '#6e1c10', color: '#fff' }}>Sale</span>}
        {!product.inStock && <span style={{ ...homeStyles.cardBadge, background: '#555', color: '#fff' }}>Sold Out</span>}
        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.15)' }}>PHOTO</span>
      </div>
      <div style={homeStyles.cardBody}>
        <div style={homeStyles.cardName}>{product.name}</div>
        <div style={homeStyles.cardMeta}><span>{product.size}</span><span>{product.age}</span></div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <div style={{ ...homeStyles.cardPrice, color: product.inStock ? '#090909' : '#9ca3af' }}>₹{product.price.toLocaleString('en-IN')}</div>
          {product.oldPrice && <div style={homeStyles.cardOldPrice}>₹{product.oldPrice.toLocaleString('en-IN')}</div>}
        </div>
        <div style={{ ...homeStyles.cardStock, color: product.inStock ? '#3d6b4a' : '#9ca3af' }}>
          {product.inStock ? '● In stock' : '● Out of stock'}
        </div>
      </div>
      <div style={homeStyles.cardFooter}>
        <button style={{ ...homeStyles.btnCart, background: product.inStock ? '#8c2515' : '#9ca3af', cursor: product.inStock ? 'pointer' : 'not-allowed' }}
          onClick={e => { e.stopPropagation(); if (product.inStock) onAddToCart(product); }}>
          {product.inStock ? 'Add to Cart' : 'Notify Me'}
        </button>
        <button
          style={{ ...homeStyles.btnWish, color: isWishlisted ? '#C1321A' : '#9ca3af', background: isWishlisted ? '#fef2f2' : '#f2f4f3' }}
          onClick={e => { e.stopPropagation(); onToggleWishlist && onToggleWishlist(product); }}
          title={isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}>
          {isWishlisted ? '♥' : '♡'}
        </button>
      </div>
    </div>
  );
}

function HomePage({ products, onProductClick, onAddToCart, setPage, wishlistIds, onToggleWishlist }) {
  return (
    <div style={homeStyles.page}>
      {/* Hero */}
      <section style={homeStyles.hero}>
        <div style={homeStyles.heroBg} />
        <div style={homeStyles.heroAccent} />
        <div style={homeStyles.heroFish}>
          <div style={{ width: '80%', height: '72%', borderRadius: 8, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.12)' }}>FISH PHOTO</span>
          </div>
        </div>
        <div style={homeStyles.heroContent}>
          <div style={homeStyles.heroEyebrow}>Madurai's #1 Fish Store</div>
          <h1 style={homeStyles.heroH1}>Shop Premium Live Flowerhorn Fish</h1>
          <p style={homeStyles.heroSub}>Hand-selected, healthy fish delivered to your door. Specialising in flowerhorn, cichlids & aquarium accessories.</p>
          <div style={homeStyles.heroCtas}>
            <button style={homeStyles.btnPrimary} onClick={() => setPage('shop')}>Browse All Fish →</button>
            <button style={homeStyles.btnGhost} onClick={() => setPage('about')}>Our Story</button>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div style={homeStyles.trustBar}>
        <div style={homeStyles.trustInner}>
          {[['🐟','Live fish guarantee'],['📦','Same-day dispatch'],['♡','Expert care support'],['📍','Madurai store + online']].map(([icon, text]) => (
            <div key={text} style={homeStyles.trustItem}><span style={homeStyles.trustIcon}>{icon}</span>{text}</div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div style={homeStyles.section}>
        <div style={homeStyles.sectionHead}>
          <h2 style={homeStyles.sectionTitle}>Shop by Category</h2>
          <button style={homeStyles.sectionLink} onClick={() => setPage('shop')}>View all →</button>
        </div>
        <div style={homeStyles.catGrid}>
          {CATEGORIES.map(cat => (
            <div key={cat.id} style={{ ...homeStyles.catCard, background: CAT_COLORS[cat.id] }}
              onClick={() => setPage('shop')}>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: 4 }}>PHOTO</span>
              <span style={{ ...homeStyles.catLabel, color: '#faf4d8' }}>{cat.label}</span>
              <span style={{ ...homeStyles.catCount, color: 'rgba(250,244,216,0.5)' }}>{cat.count} items</span>
            </div>
          ))}
        </div>
      </div>

      {/* Featured products */}
      <div style={{ background: '#f2f4f3', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={homeStyles.sectionHead}>
            <h2 style={homeStyles.sectionTitle}>Featured Arrivals</h2>
            <button style={homeStyles.sectionLink} onClick={() => setPage('shop')}>See all fish →</button>
          </div>
          <div style={homeStyles.productGrid}>
            {products.slice(0, 4).map(p => (
              <ProductCardHome
                key={p.id}
                product={p}
                onProductClick={onProductClick}
                onAddToCart={onAddToCart}
                isWishlisted={wishlistIds ? wishlistIds.has(p.id) : false}
                onToggleWishlist={onToggleWishlist}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Care Guides promo */}
      <div style={{ background: '#fff', padding: '48px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16 }}>
          {[
            { icon: '🐟', title: 'Flowerhorn Guide', sub: 'Tank setup, diet & water params', page: 'guides' },
            { icon: '🐠', title: 'Cichlid Care', sub: 'Species guide & compatibility', page: 'guides' },
            { icon: '🌿', title: 'Aquarium Setup', sub: 'Cycling, filtration & plants', page: 'guides' },
            { icon: '📦', title: 'Live Fish Delivery', sub: '100% live arrival guarantee', page: 'about' },
          ].map(item => (
            <div key={item.title}
              style={{ background: '#f2f4f3', borderRadius: 8, padding: '20px 20px', cursor: 'pointer', transition: 'box-shadow 200ms', display: 'flex', gap: 14, alignItems: 'flex-start' }}
              onClick={() => setPage(item.page)}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.1)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>
              <span style={{ fontSize: 28 }}>{item.icon}</span>
              <div>
                <div style={{ fontSize: 14, fontWeight: 800, color: '#090909', marginBottom: 3 }}>{item.title}</div>
                <div style={{ fontSize: 12, color: '#6b7280', fontWeight: 500 }}>{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <div style={homeStyles.aboutSection}>
        <div style={{ ...homeStyles.aboutInner, gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr 1fr' }}>
          <div>
            <div style={homeStyles.aboutTag}>Est. 2012 · Madurai</div>
            <h2 style={homeStyles.aboutTitle}>More than a fish shop — we're aquarists</h2>
            <p style={homeStyles.aboutText}>FlowerHorn Shop started as a passion project in Madurai's Iyer Bungala neighbourhood. We hand-select every fish for health, colour, and temperament before it reaches you.</p>
            <button style={{ ...homeStyles.btnPrimary, marginTop: 8 }} onClick={() => setPage('about')}>Our Story →</button>
          </div>
          <div style={homeStyles.storeCard}>
            <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(250,244,216,0.4)', marginBottom: 4 }}>Find Us</div>
            {[['📍','#80, Kannimandai Main Road, Iyer Bungala, Madurai-625 014'],['🕐','Mon–Sat 9am–7pm · Sun 10am–5pm'],['📱','WhatsApp orders welcome'],['🌐','Online delivery across Tamil Nadu']].map(([icon, text]) => (
              <div key={text} style={homeStyles.storeRow}><span style={homeStyles.storeIcon}>{icon}</span>{text}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { HomePage, ProductCardHome });
