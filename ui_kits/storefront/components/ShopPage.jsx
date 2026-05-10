/* ShopPage component — FlowerHorn Shop */
const shopStyles = {
  page: { fontFamily: "'DM Sans', sans-serif", background: '#f2f4f3', minHeight: '100vh' },
  pageHead: { background: '#fff', borderBottom: '1px solid rgba(0,0,0,0.07)', padding: '20px 24px' },
  pageHeadInner: { maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 },
  breadcrumb: { display: 'flex', gap: 6, alignItems: 'center', fontSize: 13, color: '#6b7280', fontWeight: 500 },
  breadSep: { color: '#9ca3af' },
  breadCurrent: { color: '#090909', fontWeight: 700 },
  pageTitle: { fontSize: 24, fontWeight: 800, color: '#090909', letterSpacing: '-0.01em' },
  sortRow: { display: 'flex', gap: 10, alignItems: 'center' },
  sortLabel: { fontSize: 13, color: '#6b7280', fontWeight: 600 },
  sortSelect: { border: '1.5px solid rgba(0,0,0,0.12)', borderRadius: 6, padding: '6px 10px', fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: '#090909', background: '#fff', cursor: 'pointer' },
  body: { maxWidth: 1280, margin: '0 auto', padding: '24px', display: 'grid', gridTemplateColumns: '240px 1fr', gap: 24 },
  sidebar: { background: '#fff', borderRadius: 6, padding: 20, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', height: 'fit-content', display: 'flex', flexDirection: 'column', gap: 24 },
  filterGroup: { display: 'flex', flexDirection: 'column', gap: 10 },
  filterHeading: { fontSize: 11, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9ca3af', paddingBottom: 6, borderBottom: '1px solid rgba(0,0,0,0.06)' },
  checkRow: { display: 'flex', gap: 8, alignItems: 'center', fontSize: 14, fontWeight: 600, color: '#090909', cursor: 'pointer' },
  checkCount: { marginLeft: 'auto', fontSize: 11, color: '#9ca3af', fontWeight: 600 },
  priceInputs: { display: 'flex', gap: 8, alignItems: 'center' },
  priceInput: { flex: 1, border: '1.5px solid rgba(0,0,0,0.12)', borderRadius: 6, padding: '7px 10px', fontFamily: "'DM Sans',sans-serif", fontSize: 13, fontWeight: 600, color: '#090909', width: 0 },
  priceSep: { fontSize: 12, color: '#6b7280' },
  clearBtn: { background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 700, color: '#8c2515', fontFamily: "'DM Sans',sans-serif", padding: 0 },
  main: { display: 'flex', flexDirection: 'column', gap: 16 },
  chipRow: { display: 'flex', gap: 8, flexWrap: 'wrap' },
  chip: { display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 12px', borderRadius: 50, fontSize: 13, fontWeight: 600, cursor: 'pointer', border: '1.5px solid rgba(0,0,0,0.12)', background: '#fff', color: '#333', transition: 'all 200ms', fontFamily: "'DM Sans',sans-serif" },
  chipActive: { background: '#8c2515', color: '#fff', borderColor: '#8c2515' },
  resultMeta: { fontSize: 13, color: '#6b7280', fontWeight: 600 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 14 },
  card: { background: '#fff', borderRadius: 6, boxShadow: '0 2px 8px rgba(0,0,0,0.07)', overflow: 'hidden', cursor: 'pointer', transition: 'box-shadow 300ms, transform 300ms', display: 'flex', flexDirection: 'column' },
  cardImg: { height: 150, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 56, position: 'relative' },
  cardBadge: { position: 'absolute', top: 8, left: 8, fontSize: 10, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '3px 8px', borderRadius: 50 },
  cardBody: { padding: '12px 14px', flex: 1, display: 'flex', flexDirection: 'column', gap: 4 },
  cardName: { fontSize: 14, fontWeight: 700, color: '#090909', lineHeight: 1.3 },
  cardMeta: { fontSize: 11, color: '#6b7280', display: 'flex', gap: 8 },
  cardPrice: { fontSize: 18, fontWeight: 800, color: '#090909' },
  cardStock: { fontSize: 10, fontWeight: 700, letterSpacing: '0.04em' },
  cardFoot: { padding: '8px 14px', borderTop: '1px solid rgba(0,0,0,0.05)', display: 'flex', gap: 8 },
  btnCart: { flex: 1, background: '#8c2515', color: '#fff', border: 'none', borderRadius: 50, padding: '7px 12px', fontFamily: "'DM Sans',sans-serif", fontSize: 12, fontWeight: 700, cursor: 'pointer' },
  btnWish: { width: 30, height: 30, background: '#f2f4f3', border: 'none', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 14, flexShrink: 0 },
};

const FILTER_CATEGORIES = [
  { id: 'flowerhorn', label: 'Flowerhorn', count: 24 },
  { id: 'cichlid', label: 'Cichlids', count: 18 },
  { id: 'goldfish', label: 'Goldfish', count: 12 },
  { id: 'accessory', label: 'Accessories', count: 56 },
  { id: 'plant', label: 'Plants', count: 31 },
];

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest First' },
  { value: 'rating', label: 'Top Rated' },
];

const ALL_CHIPS = ['All', 'Flowerhorn', 'Cichlids', 'Goldfish', 'Accessories', 'Plants', 'Under ₹2,000'];

function ShopCard({ product, onProductClick, onAddToCart, isWishlisted, onToggleWishlist }) {
  const [hov, setHov] = React.useState(false);
  return (
    <div style={{ ...shopStyles.card, ...(hov ? { boxShadow: '0 4px 20px rgba(0,0,0,0.14)', transform: 'translateY(-2px)' } : {}) }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      onClick={() => onProductClick(product)}>
      <div style={{ ...shopStyles.cardImg, background: product.bg }}>
        {product.isNew && <span style={{ ...shopStyles.cardBadge, background: '#8c2515', color: '#fff' }}>New</span>}
        {product.isSale && <span style={{ ...shopStyles.cardBadge, background: '#6e1c10', color: '#fff' }}>Sale</span>}
        {!product.inStock && <span style={{ ...shopStyles.cardBadge, background: '#555', color: '#fff' }}>Sold Out</span>}
        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.15)' }}>PHOTO</span>
      </div>
      <div style={shopStyles.cardBody}>
        <div style={shopStyles.cardName}>{product.name}</div>
        <div style={shopStyles.cardMeta}><span>{product.size}</span><span>·</span><span>{product.age}</span></div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 2 }}>
          <div style={{ ...shopStyles.cardPrice, color: product.inStock ? '#090909' : '#9ca3af' }}>₹{product.price.toLocaleString('en-IN')}</div>
          {product.oldPrice && <span style={{ fontSize: 11, color: '#9ca3af', textDecoration: 'line-through' }}>₹{product.oldPrice.toLocaleString('en-IN')}</span>}
        </div>
        <div style={{ ...shopStyles.cardStock, color: product.inStock ? '#3d6b4a' : '#9ca3af', marginTop: 2 }}>
          {product.inStock ? '● In stock' : '● Out of stock'}
        </div>
      </div>
      <div style={shopStyles.cardFoot}>
        <button style={{ ...shopStyles.btnCart, background: product.inStock ? '#8c2515' : '#9ca3af', cursor: product.inStock ? 'pointer' : 'not-allowed' }}
          onClick={e => { e.stopPropagation(); if (product.inStock) onAddToCart(product); }}>
          {product.inStock ? 'Add to Cart' : 'Notify Me'}
        </button>
        <button
          style={{ ...shopStyles.btnWish, color: isWishlisted ? '#C1321A' : '#9ca3af', background: isWishlisted ? '#fef2f2' : '#f2f4f3' }}
          onClick={e => { e.stopPropagation(); onToggleWishlist && onToggleWishlist(product); }}
          title={isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}>
          {isWishlisted ? '♥' : '♡'}
        </button>
      </div>
    </div>
  );
}

function ShopPage({ products, onProductClick, onAddToCart, searchQuery = '', wishlistIds, onToggleWishlist }) {
  const [activeChip, setActiveChip] = React.useState('All');
  const [sort, setSort] = React.useState('featured');
  const [checkedCats, setCheckedCats] = React.useState({});
  const [inStockOnly, setInStockOnly] = React.useState(false);
  const [priceMin, setPriceMin] = React.useState('');
  const [priceMax, setPriceMax] = React.useState('');

  const filtered = React.useMemo(() => {
    let list = [...products];

    // Search query filter
    if (searchQuery && searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }

    // Chip / category filter
    if (activeChip !== 'All') {
      const chipMap = { 'Flowerhorn': 'flowerhorn', 'Cichlids': 'cichlid', 'Goldfish': 'goldfish', 'Accessories': 'accessory', 'Plants': 'plant' };
      if (activeChip === 'Under ₹2,000') list = list.filter(p => p.price < 2000);
      else if (chipMap[activeChip]) list = list.filter(p => p.category === chipMap[activeChip]);
    }

    // Checkbox category filter (sidebar)
    const activeCats = Object.keys(checkedCats).filter(k => checkedCats[k]);
    if (activeCats.length) list = list.filter(p => activeCats.includes(p.category));

    // Availability
    if (inStockOnly) list = list.filter(p => p.inStock);

    // Price range
    if (priceMin) list = list.filter(p => p.price >= Number(priceMin));
    if (priceMax) list = list.filter(p => p.price <= Number(priceMax));

    // Sort
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    else if (sort === 'rating') list.sort((a, b) => b.rating - a.rating);

    return list;
  }, [products, activeChip, sort, checkedCats, inStockOnly, priceMin, priceMax, searchQuery]);

  const clearAll = () => { setCheckedCats({}); setInStockOnly(false); setActiveChip('All'); setPriceMin(''); setPriceMax(''); };
  const isMobile = window.innerWidth < 900;

  return (
    <div style={shopStyles.page}>
      <div style={shopStyles.pageHead}>
        <div style={shopStyles.pageHeadInner}>
          <div>
            <div style={shopStyles.breadcrumb}>
              <span>Home</span><span style={shopStyles.breadSep}>›</span>
              <span style={shopStyles.breadCurrent}>{searchQuery ? `Search: "${searchQuery}"` : 'Shop'}</span>
            </div>
            <div style={shopStyles.pageTitle}>{searchQuery ? `Results for "${searchQuery}"` : 'All Fish & Accessories'}</div>
          </div>
          <div style={shopStyles.sortRow}>
            <span style={shopStyles.sortLabel}>Sort by:</span>
            <select style={shopStyles.sortSelect} value={sort} onChange={e => setSort(e.target.value)}>
              {SORT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </div>
        </div>
      </div>
      <div style={{ ...shopStyles.body, gridTemplateColumns: isMobile ? '1fr' : '240px 1fr' }}>
        {!isMobile && (
          <aside style={shopStyles.sidebar}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 15, fontWeight: 800, color: '#090909' }}>Filters</span>
              <button style={shopStyles.clearBtn} onClick={clearAll}>Clear all</button>
            </div>
            <div style={shopStyles.filterGroup}>
              <div style={shopStyles.filterHeading}>Category</div>
              {FILTER_CATEGORIES.map(cat => (
                <label key={cat.id} style={shopStyles.checkRow}>
                  <input type="checkbox" style={{ accentColor: '#8c2515' }} checked={!!checkedCats[cat.id]} onChange={e => setCheckedCats(prev => ({ ...prev, [cat.id]: e.target.checked }))} />
                  {cat.label}
                  <span style={shopStyles.checkCount}>{cat.count}</span>
                </label>
              ))}
            </div>
            <div style={shopStyles.filterGroup}>
              <div style={shopStyles.filterHeading}>Price Range</div>
              <div style={shopStyles.priceInputs}>
                <input style={shopStyles.priceInput} type="number" placeholder="₹ Min" value={priceMin} onChange={e => setPriceMin(e.target.value)} />
                <span style={shopStyles.priceSep}>–</span>
                <input style={shopStyles.priceInput} type="number" placeholder="₹ Max" value={priceMax} onChange={e => setPriceMax(e.target.value)} />
              </div>
            </div>
            <div style={shopStyles.filterGroup}>
              <div style={shopStyles.filterHeading}>Availability</div>
              <label style={shopStyles.checkRow}>
                <input type="checkbox" style={{ accentColor: '#8c2515' }} checked={inStockOnly} onChange={e => setInStockOnly(e.target.checked)} />
                In stock only
              </label>
            </div>
            <div style={shopStyles.filterGroup}>
              <div style={shopStyles.filterHeading}>Fish Size</div>
              {['2–3 inch', '4–5 inch', '5–6 inch', '6+ inch'].map(s => (
                <label key={s} style={shopStyles.checkRow}><input type="checkbox" style={{ accentColor: '#8c2515' }} />{s}</label>
              ))}
            </div>
          </aside>
        )}
        <div style={shopStyles.main}>
          {!searchQuery && (
            <div style={shopStyles.chipRow}>
              {ALL_CHIPS.map(c => (
                <button key={c} style={{ ...shopStyles.chip, ...(activeChip === c ? shopStyles.chipActive : {}) }} onClick={() => setActiveChip(c)}>{c}</button>
              ))}
            </div>
          )}
          <div style={shopStyles.resultMeta}>{filtered.length} {filtered.length === 1 ? 'result' : 'results'}</div>
          <div style={shopStyles.grid}>
            {filtered.map(p => (
              <ShopCard
                key={p.id}
                product={p}
                onProductClick={onProductClick}
                onAddToCart={onAddToCart}
                isWishlisted={wishlistIds ? wishlistIds.has(p.id) : false}
                onToggleWishlist={onToggleWishlist}
              />
            ))}
            {filtered.length === 0 && (
              <div style={{ gridColumn: '1/-1', padding: '48px 0', textAlign: 'center', color: '#9ca3af' }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>🐟</div>
                <div style={{ fontSize: 16, fontWeight: 700 }}>No fish found</div>
                <div style={{ fontSize: 13, marginTop: 4 }}>Try adjusting your filters{searchQuery ? ` or search term` : ''}.</div>
                <button style={{ marginTop: 16, background: '#8c2515', color: '#fff', border: 'none', borderRadius: 50, padding: '10px 20px', fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif" }} onClick={clearAll}>Clear Filters</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { ShopPage, ShopCard });
