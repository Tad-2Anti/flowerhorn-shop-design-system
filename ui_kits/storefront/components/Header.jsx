/* Header component — FlowerHorn Shop */
const headerStyles = {
  header: { position: 'sticky', top: 0, zIndex: 100, transition: 'all 300ms cubic-bezier(0,0,0.25,1)', fontFamily: "'DM Sans', sans-serif" },
  headerDefault: { background: '#ffffff', borderBottom: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' },
  headerScrolled: { background: 'rgba(255,255,255,0.94)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(0,0,0,0.07)' },
  inner: { maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', gap: 24, height: 64 },
  logo: { display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0, cursor: 'pointer' },
  logoMark: { width: 38, height: 38, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, overflow: 'hidden', background: '#8c2515' },
  logoImg: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
  logoText: { lineHeight: 1.15 },
  logoName: { fontSize: 15, fontWeight: 800, color: '#090909', display: 'block' },
  logoSub: { fontSize: 10, fontWeight: 500, color: '#6b7280', letterSpacing: '0.04em', display: 'block' },
  navLinks: { display: 'flex', gap: 2, alignItems: 'center', flex: 1 },
  navLink: { padding: '6px 12px', borderRadius: 6, fontSize: 14, fontWeight: 600, color: '#333', textDecoration: 'none', cursor: 'pointer', transition: 'all 200ms', border: 'none', background: 'transparent', fontFamily: "'DM Sans', sans-serif" },
  navLinkActive: { color: '#8c2515' },
  navLinkHover: { background: '#f2f4f3', color: '#090909' },
  actions: { display: 'flex', gap: 8, alignItems: 'center', marginLeft: 'auto' },
  searchBox: { display: 'flex', alignItems: 'center', background: '#f2f4f3', borderRadius: 50, overflow: 'hidden', width: 200, transition: 'width 300ms' },
  searchIcon: { padding: '0 0 0 14px', fontSize: 15, color: '#9ca3af', flexShrink: 0, lineHeight: 1 },
  searchInput: { flex: 1, border: 'none', background: 'transparent', fontFamily: "'DM Sans',sans-serif", fontSize: 13, fontWeight: 500, color: '#090909', outline: 'none', padding: '8px 8px 8px 6px' },
  searchClear: { background: 'none', border: 'none', cursor: 'pointer', paddingRight: 12, color: '#9ca3af', fontSize: 16, lineHeight: 1, flexShrink: 0 },
  iconBtn: { width: 38, height: 38, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f2f4f3', border: 'none', cursor: 'pointer', fontSize: 17, position: 'relative', flexShrink: 0, transition: 'background 200ms' },
  cartBadge: { position: 'absolute', top: 0, right: 0, width: 17, height: 17, background: '#8c2515', color: '#fff', borderRadius: '50%', fontSize: 9, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' },
  mobileHeader: { background: '#fff', borderBottom: '1px solid rgba(0,0,0,0.07)', display: 'flex', alignItems: 'center', padding: '0 16px', height: 56, gap: 12, position: 'sticky', top: 0, zIndex: 100 },
  hamburger: { fontSize: 22, background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: '#090909' },
  mobileDrawer: { position: 'fixed', top: 0, left: 0, width: '80vw', maxWidth: 320, height: '100vh', background: '#fff', zIndex: 200, padding: 24, display: 'flex', flexDirection: 'column', gap: 8, boxShadow: '4px 0 30px rgba(0,0,0,0.15)', overflowY: 'auto' },
  mobileOverlay: { position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 199 },
  mobileNavLink: { padding: '12px 16px', borderRadius: 6, fontSize: 16, fontWeight: 700, color: '#090909', textDecoration: 'none', cursor: 'pointer', border: 'none', background: 'transparent', fontFamily: "'DM Sans', sans-serif", width: '100%', textAlign: 'left' },
  mobileSearchBox: { display: 'flex', alignItems: 'center', background: '#f2f4f3', borderRadius: 50, overflow: 'hidden', marginBottom: 8 },
};

const NAV_LINKS = [
  { label: 'Home', page: 'home' },
  { label: 'Live Fish', page: 'shop' },
  { label: 'Accessories', page: 'shop' },
  { label: 'Care Guides', page: 'guides' },
  { label: 'About', page: 'about' },
];

function Header({ cartCount = 0, onCartOpen, currentPage, setPage, wishlistCount = 0, onWishlistOpen, onSearch, searchQuery = '' }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [hovered, setHovered] = React.useState(null);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onResize); };
  }, []);

  if (isMobile) return (
    <>
      <header style={headerStyles.mobileHeader}>
        <button style={headerStyles.hamburger} onClick={() => setMobileOpen(true)}>☰</button>
        <div onClick={() => setPage('home')} style={{ ...headerStyles.logo, flex: 1 }}>
          <div style={headerStyles.logoMark}>
            <img src="./assets/logo.png" alt="FlowerHorn Shop" style={headerStyles.logoImg} onError={e => { e.target.style.display='none'; e.target.parentNode.style.background='#8c2515'; e.target.parentNode.textContent='F'; }} />
          </div>
          <div style={headerStyles.logoText}>
            <span style={headerStyles.logoName}>FlowerHorn</span>
          </div>
        </div>
        <button style={{ ...headerStyles.iconBtn, position: 'relative' }} onClick={onWishlistOpen} title="Wishlist">
          {wishlistCount > 0 ? '♥' : '♡'}
          {wishlistCount > 0 && <span style={headerStyles.cartBadge}>{wishlistCount}</span>}
        </button>
        <button style={{ ...headerStyles.iconBtn, background: '#8c2515', color: '#fff', fontSize: 16 }} onClick={onCartOpen}>
          🛒{cartCount > 0 && <span style={headerStyles.cartBadge}>{cartCount}</span>}
        </button>
      </header>
      {mobileOpen && (
        <>
          <div style={headerStyles.mobileOverlay} onClick={() => setMobileOpen(false)} />
          <div style={headerStyles.mobileDrawer}>
            <div style={{ ...headerStyles.logo, marginBottom: 8 }}>
              <div style={headerStyles.logoMark}>
                <img src="./assets/logo.png" alt="FlowerHorn Shop" style={headerStyles.logoImg} onError={e => { e.target.style.display='none'; }} />
              </div>
              <div><span style={headerStyles.logoName}>FlowerHorn Shop</span></div>
            </div>
            <div style={headerStyles.mobileSearchBox}>
              <span style={{ paddingLeft: 14, fontSize: 14, color: '#9ca3af' }}>⌕</span>
              <input
                style={{ flex: 1, border: 'none', background: 'transparent', fontFamily: "'DM Sans',sans-serif", fontSize: 14, fontWeight: 500, color: '#090909', outline: 'none', padding: '10px 8px 10px 6px' }}
                placeholder="Search fish…"
                value={searchQuery}
                onChange={e => { onSearch && onSearch(e.target.value); }}
              />
              {searchQuery && <button style={{ background: 'none', border: 'none', cursor: 'pointer', paddingRight: 12, color: '#9ca3af', fontSize: 16 }} onClick={() => onSearch && onSearch('')}>×</button>}
            </div>
            {NAV_LINKS.map(l => (
              <button key={l.label}
                style={{ ...headerStyles.mobileNavLink, color: currentPage === l.page ? '#8c2515' : '#090909' }}
                onClick={() => { setPage(l.page); setMobileOpen(false); }}>
                {l.label}
              </button>
            ))}
          </div>
        </>
      )}
    </>
  );

  return (
    <header style={{ ...headerStyles.header, ...(scrolled ? headerStyles.headerScrolled : headerStyles.headerDefault) }}>
      <div style={headerStyles.inner}>
        <div onClick={() => setPage('home')} style={headerStyles.logo}>
          <div style={headerStyles.logoMark}>
            <img src="./assets/logo.png" alt="FlowerHorn Shop" style={headerStyles.logoImg} onError={e => { e.target.style.display='none'; }} />
          </div>
          <div style={headerStyles.logoText}>
            <span style={headerStyles.logoName}>FlowerHorn Shop</span>
            <span style={headerStyles.logoSub}>Fishes & Accessories · Madurai</span>
          </div>
        </div>
        <nav style={headerStyles.navLinks}>
          {NAV_LINKS.map(l => (
            <button key={l.label}
              style={{ ...headerStyles.navLink, ...(currentPage === l.page ? headerStyles.navLinkActive : {}), ...(hovered === l.label && currentPage !== l.page ? headerStyles.navLinkHover : {}) }}
              onMouseEnter={() => setHovered(l.label)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setPage(l.page)}>
              {l.label}
            </button>
          ))}
        </nav>
        <div style={headerStyles.actions}>
          <div style={headerStyles.searchBox}>
            <span style={headerStyles.searchIcon}>⌕</span>
            <input
              style={headerStyles.searchInput}
              placeholder="Search fish…"
              value={searchQuery}
              onChange={e => { onSearch && onSearch(e.target.value); }}
            />
            {searchQuery && (
              <button style={headerStyles.searchClear} onClick={() => onSearch && onSearch('')}>×</button>
            )}
          </div>
          <button style={{ ...headerStyles.iconBtn, position: 'relative' }} title="Wishlist" onClick={onWishlistOpen}>
            {wishlistCount > 0 ? '♥' : '♡'}
            {wishlistCount > 0 && <span style={headerStyles.cartBadge}>{wishlistCount}</span>}
          </button>
          <button style={{ ...headerStyles.iconBtn, background: '#8c2515', color: '#fff', fontSize: 16 }} onClick={onCartOpen}>
            🛒{cartCount > 0 && <span style={headerStyles.cartBadge}>{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
}
Object.assign(window, { Header });
