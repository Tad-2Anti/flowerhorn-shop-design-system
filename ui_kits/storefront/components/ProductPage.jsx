/* ProductPage component — FlowerHorn Shop */
const productStyles = {
  page: { fontFamily: "'DM Sans', sans-serif", background: '#f2f4f3', minHeight: '100vh' },
  inner: { maxWidth: 1280, margin: '0 auto', padding: 24 },
  breadcrumb: { display: 'flex', gap: 6, alignItems: 'center', fontSize: 13, color: '#6b7280', fontWeight: 500, marginBottom: 24 },
  breadBtn: { background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 600, color: '#1559d5', fontFamily: "'DM Sans',sans-serif", padding: 0 },
  breadSep: { color: '#9ca3af' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, background: '#fff', borderRadius: 8, padding: 32, boxShadow: '0 2px 8px rgba(0,0,0,0.07)', marginBottom: 24 },
  imgPanel: { display: 'flex', flexDirection: 'column', gap: 12 },
  mainImg: { borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 140, height: 360 },
  thumbRow: { display: 'flex', gap: 8 },
  thumb: { width: 64, height: 64, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, cursor: 'pointer', border: '2px solid transparent', transition: 'border-color 200ms' },
  thumbActive: { borderColor: '#8c2515' },
  infoPanel: { display: 'flex', flexDirection: 'column', gap: 16 },
  badgeRow: { display: 'flex', gap: 8, flexWrap: 'wrap' },
  badge: { display: 'inline-flex', padding: '3px 10px', borderRadius: 50, fontSize: 11, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase' },
  badgeNew: { background: '#8c2515', color: '#fff' },
  badgeSale: { background: '#6e1c10', color: '#fff' },
  badgeCat: { background: '#f2f4f3', color: '#555' },
  productName: { fontSize: 28, fontWeight: 800, color: '#090909', letterSpacing: '-0.02em', lineHeight: 1.2 },
  ratingRow: { display: 'flex', gap: 8, alignItems: 'center' },
  stars: { color: '#c48c10', fontSize: 16, letterSpacing: 1 },
  ratingVal: { fontSize: 14, fontWeight: 700, color: '#090909' },
  ratingCount: { fontSize: 13, color: '#6b7280' },
  priceRow: { display: 'flex', alignItems: 'baseline', gap: 12 },
  price: { fontSize: 32, fontWeight: 800, color: '#090909' },
  oldPrice: { fontSize: 18, color: '#9ca3af', textDecoration: 'line-through', fontWeight: 500 },
  stockTag: { display: 'inline-flex', padding: '5px 12px', borderRadius: 6, fontSize: 13, fontWeight: 700 },
  stockIn: { background: '#eaf2ed', color: '#3d6b4a' },
  stockOut: { background: '#f2f4f3', color: '#9ca3af' },
  specGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 },
  specCard: { background: '#f2f4f3', borderRadius: 6, padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 2 },
  specLabel: { fontSize: 10, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#9ca3af' },
  specVal: { fontSize: 14, fontWeight: 700, color: '#090909' },
  divider: { border: 'none', borderTop: '1px solid rgba(0,0,0,0.07)', margin: 0 },
  qtyRow: { display: 'flex', gap: 12, alignItems: 'center' },
  qtyLabel: { fontSize: 14, fontWeight: 700, color: '#090909' },
  qtyControl: { display: 'flex', gap: 0, alignItems: 'center', border: '1.5px solid rgba(0,0,0,0.12)', borderRadius: 50, overflow: 'hidden' },
  qtyBtn: { width: 36, height: 36, background: '#fff', border: 'none', cursor: 'pointer', fontSize: 18, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'DM Sans',sans-serif", transition: 'background 150ms' },
  qtyVal: { width: 40, textAlign: 'center', fontSize: 15, fontWeight: 800, color: '#090909' },
  actionRow: { display: 'flex', gap: 10 },
  btnCart: { flex: 1, background: '#C1321A', color: '#fff', border: 'none', borderRadius: 50, padding: '14px 24px', fontSize: 16, fontWeight: 800, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", boxShadow: 'rgb(193,50,26) 0px -2px 0px 0px inset', transition: 'background 300ms' },
  btnWish: { width: 48, height: 48, border: '1.5px solid rgba(0,0,0,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 20, flexShrink: 0, transition: 'all 200ms' },
  tabs: { display: 'flex', gap: 0, borderBottom: '2px solid rgba(0,0,0,0.07)', marginBottom: 16 },
  tab: { padding: '10px 20px', fontSize: 14, fontWeight: 700, color: '#6b7280', cursor: 'pointer', background: 'none', border: 'none', borderBottom: '2px solid transparent', marginBottom: -2, fontFamily: "'DM Sans',sans-serif", transition: 'all 200ms' },
  tabActive: { color: '#8c2515', borderBottomColor: '#8c2515' },
  tabContent: { fontSize: 15, color: '#333', lineHeight: 1.7, fontWeight: 400 },
  relatedSection: { background: '#fff', borderRadius: 8, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.07)' },
  relatedTitle: { fontSize: 20, fontWeight: 800, color: '#090909', marginBottom: 16 },
  relatedGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 12 },
};

const CARE_CONTENT = {
  overview: (p) => `${p.name} is a robust and colourful cichlid prized for its nuchal hump and vibrant body markings. Tank size of at least ${p.tank} is recommended. They are territorial — best kept alone or with large dither fish.`,
  care: (p) => `Water temperature: ${p.temp}. pH: ${p.ph}. Diet: ${p.diet}. Perform 20–30% water changes weekly. Use a powerful external filter rated for at least 2× your tank volume. Avoid coarse substrate that may injure the belly.`,
  shipping: () => `Live fish are shipped Monday–Thursday via courier to ensure weekend delays don't affect fish health. We use insulated boxes with oxygen-supplemented water. 100% live arrival guarantee — contact us within 24 hours of delivery if there are any issues.`,
};

function ProductPage({ product, allProducts, onAddToCart, onBack, onProductClick, isWishlisted, onToggleWishlist }) {
  const [qty, setQty] = React.useState(1);
  const [tab, setTab] = React.useState('overview');
  const [added, setAdded] = React.useState(false);

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const related = allProducts.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);
  const wishlisted = isWishlisted || false;

  return (
    <div style={productStyles.page}>
      <div style={productStyles.inner}>
        <div style={productStyles.breadcrumb}>
          <button style={productStyles.breadBtn} onClick={onBack}>Home</button>
          <span style={productStyles.breadSep}>›</span>
          <button style={productStyles.breadBtn} onClick={onBack}>Shop</button>
          <span style={productStyles.breadSep}>›</span>
          <span style={{ color: '#090909', fontWeight: 700 }}>{product.name}</span>
        </div>

        <div style={{ ...productStyles.grid, gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr 1fr' }}>
          {/* Image panel */}
          <div style={productStyles.imgPanel}>
            <div style={{ ...productStyles.mainImg, background: product.bg }}>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.15)' }}>FISH PHOTO</span>
            </div>
            <div style={productStyles.thumbRow}>
              {[0,1,2].map(i => (
                <div key={i} style={{ ...productStyles.thumb, background: product.bg, ...(i === 0 ? productStyles.thumbActive : {}) }} />
              ))}
            </div>
          </div>

          {/* Info panel */}
          <div style={productStyles.infoPanel}>
            <div style={productStyles.badgeRow}>
              {product.isNew && <span style={{ ...productStyles.badge, ...productStyles.badgeNew }}>New Arrival</span>}
              {product.isSale && <span style={{ ...productStyles.badge, ...productStyles.badgeSale }}>On Sale</span>}
              <span style={{ ...productStyles.badge, ...productStyles.badgeCat }}>{product.category}</span>
            </div>
            <h1 style={productStyles.productName}>{product.name}</h1>
            <div style={productStyles.ratingRow}>
              <span style={productStyles.stars}>{'★'.repeat(Math.round(product.rating))}{'☆'.repeat(5 - Math.round(product.rating))}</span>
              <span style={productStyles.ratingVal}>{product.rating}</span>
              <span style={productStyles.ratingCount}>({product.reviews} reviews)</span>
            </div>
            <div style={productStyles.priceRow}>
              <div style={productStyles.price}>₹{product.price.toLocaleString('en-IN')}</div>
              {product.oldPrice && <div style={productStyles.oldPrice}>₹{product.oldPrice.toLocaleString('en-IN')}</div>}
            </div>
            <div style={{ ...productStyles.stockTag, ...(product.inStock ? productStyles.stockIn : productStyles.stockOut) }}>
              {product.inStock ? '✓ In stock — ready to ship' : '✕ Currently out of stock'}
            </div>
            <hr style={productStyles.divider} />
            <div style={productStyles.specGrid}>
              {[['Size', product.size], ['Age / Stage', product.age], ['Temperature', product.temp], ['pH Range', product.ph], ['Diet', product.diet], ['Min. Tank', product.tank]].map(([l, v]) => (
                v !== '–' && <div key={l} style={productStyles.specCard}>
                  <span style={productStyles.specLabel}>{l}</span>
                  <span style={productStyles.specVal}>{v}</span>
                </div>
              ))}
            </div>
            <hr style={productStyles.divider} />
            {product.inStock && (
              <div style={productStyles.qtyRow}>
                <span style={productStyles.qtyLabel}>Qty:</span>
                <div style={productStyles.qtyControl}>
                  <button style={productStyles.qtyBtn} onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
                  <span style={productStyles.qtyVal}>{qty}</span>
                  <button style={productStyles.qtyBtn} onClick={() => setQty(qty + 1)}>+</button>
                </div>
              </div>
            )}
            <div style={productStyles.actionRow}>
              <button
                style={{ ...productStyles.btnCart, background: product.inStock ? (added ? '#3d6b4a' : '#8c2515') : '#9ca3af', cursor: product.inStock ? 'pointer' : 'not-allowed' }}
                onClick={handleAddToCart} disabled={!product.inStock}>
                {added ? '✓ Added to Cart!' : product.inStock ? `Add ${qty > 1 ? qty + '×' : ''} to Cart` : 'Out of Stock'}
              </button>
              <button
                style={{ ...productStyles.btnWish, background: wishlisted ? '#fef2f2' : '#f2f4f3', color: wishlisted ? '#C1321A' : '#6b7280', borderColor: wishlisted ? 'rgba(193,50,26,0.2)' : 'rgba(0,0,0,0.1)' }}
                onClick={() => onToggleWishlist && onToggleWishlist(product)}
                title={wishlisted ? 'Remove from wishlist' : 'Save to wishlist'}>
                {wishlisted ? '♥' : '♡'}
              </button>
            </div>
            <div style={{ fontSize: 12, color: '#6b7280', display: 'flex', gap: 16 }}>
              <span>📦 Free shipping over ₹5,000</span>
              <span>🐟 Live arrival guaranteed</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ ...productStyles.relatedSection, marginBottom: 24 }}>
          <div style={productStyles.tabs}>
            {[['overview', 'Overview'], ['care', 'Care Guide'], ['shipping', 'Shipping']].map(([id, label]) => (
              <button key={id} style={{ ...productStyles.tab, ...(tab === id ? productStyles.tabActive : {}) }} onClick={() => setTab(id)}>
                {label}
              </button>
            ))}
          </div>
          <p style={productStyles.tabContent}>{CARE_CONTENT[tab](product)}</p>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div style={productStyles.relatedSection}>
            <div style={productStyles.relatedTitle}>You might also like</div>
            <div style={productStyles.relatedGrid}>
              {related.map(p => (
                <div key={p.id} style={{ background: '#f2f4f3', borderRadius: 6, overflow: 'hidden', cursor: 'pointer', transition: 'box-shadow 200ms' }}
                  onClick={() => onProductClick(p)}>
                  <div style={{ height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', background: p.bg }}>
                    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.15)' }}>PHOTO</span>
                  </div>
                  <div style={{ padding: '10px 12px' }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#090909', marginBottom: 3 }}>{p.name}</div>
                    <div style={{ fontSize: 15, fontWeight: 800, color: '#090909' }}>₹{p.price.toLocaleString('en-IN')}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
Object.assign(window, { ProductPage });
