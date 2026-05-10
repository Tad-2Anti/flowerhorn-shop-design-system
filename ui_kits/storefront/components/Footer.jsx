/* Footer component — FlowerHorn Shop */
const footerStyles = {
  footer: { background: '#0a0f0d', color: '#faf4d8', fontFamily: "'DM Sans', sans-serif", padding: '48px 24px 24px' },
  inner: { maxWidth: 1280, margin: '0 auto' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 40 },
  col: { display: 'flex', flexDirection: 'column', gap: 12 },
  logo: { display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 },
  logoMark: { width: 36, height: 36, background: '#8c2515', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#faf4d8', fontSize: 18, fontWeight: 800, flexShrink: 0 },
  logoName: { fontSize: 16, fontWeight: 800, color: '#faf4d8' },
  about: { fontSize: 14, color: 'rgba(250,244,216,0.55)', lineHeight: 1.65, fontWeight: 400 },
  heading: { fontSize: 12, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(250,244,216,0.4)', marginBottom: 4 },
  link: { fontSize: 14, color: 'rgba(250,244,216,0.7)', fontWeight: 500, textDecoration: 'none', cursor: 'pointer', background: 'none', border: 'none', fontFamily: "'DM Sans', sans-serif", textAlign: 'left', padding: 0, transition: 'color 200ms' },
  contact: { display: 'flex', flexDirection: 'column', gap: 8 },
  contactRow: { display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: 13, color: 'rgba(250,244,216,0.7)', fontWeight: 500, lineHeight: 1.5 },
  contactIcon: { fontSize: 15, flexShrink: 0, marginTop: 1 },
  divider: { borderColor: 'rgba(250,244,216,0.08)', borderStyle: 'solid', borderWidth: '1px 0 0 0', marginBottom: 20 },
  bottom: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 },
  copy: { fontSize: 12, color: 'rgba(250,244,216,0.35)', fontWeight: 400 },
  badge: { display: 'inline-flex', alignItems: 'center', gap: 4, background: '#3d6b4a', color: '#fff', borderRadius: 50, padding: '3px 10px', fontSize: 11, fontWeight: 700 },
};

const FOOTER_LINKS = {
  Shop: [
    { label: 'All Fish', page: 'shop' },
    { label: 'Flowerhorn', page: 'shop' },
    { label: 'Cichlids', page: 'shop' },
    { label: 'Goldfish', page: 'shop' },
    { label: 'Accessories', page: 'shop' },
    { label: 'Aquarium Plants', page: 'shop' },
  ],
  Support: [
    { label: 'Shipping Info', page: 'about' },
    { label: 'Returns & Refunds', page: 'about' },
    { label: 'Live Fish Guarantee', page: 'about' },
    { label: 'Care Guides', page: 'guides' },
    { label: 'FAQ', page: 'about' },
    { label: 'Contact Us', page: 'about' },
  ],
};

function Footer({ setPage }) {
  return (
    <footer style={footerStyles.footer}>
      <div style={footerStyles.inner}>
        <div style={footerStyles.grid}>
          <div style={footerStyles.col}>
            <div style={footerStyles.logo}>
              <div style={footerStyles.logoMark}>F</div>
              <span style={footerStyles.logoName}>FlowerHorn Shop</span>
            </div>
            <p style={footerStyles.about}>Madurai's premier aquarium fish store — specialising in premium flowerhorn fish, cichlids, and accessories since 2012.</p>
            <div style={footerStyles.badge}>● Live fish guarantee</div>
          </div>
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading} style={footerStyles.col}>
              <div style={footerStyles.heading}>{heading}</div>
              {links.map(l => (
                <button key={l.label} style={footerStyles.link} onClick={() => setPage(l.page)}>{l.label}</button>
              ))}
            </div>
          ))}
          <div style={footerStyles.col}>
            <div style={footerStyles.heading}>Visit Us</div>
            <div style={footerStyles.contact}>
              <div style={footerStyles.contactRow}><span style={footerStyles.contactIcon}>📍</span>#80, Kannimandai Main Road, Iyer Bungala, Madurai-625 014</div>
              <div style={footerStyles.contactRow}><span style={footerStyles.contactIcon}>📞</span>+91 XXXXX XXXXX</div>
              <div style={footerStyles.contactRow}><span style={footerStyles.contactIcon}>🕐</span>Mon–Sat: 9am – 7pm<br/>Sun: 10am – 5pm</div>
              <div style={footerStyles.contactRow}><span style={footerStyles.contactIcon}>📱</span>WhatsApp orders welcome</div>
            </div>
          </div>
        </div>
        <hr style={footerStyles.divider} />
        <div style={footerStyles.bottom}>
          <div style={footerStyles.copy}>© 2026 FlowerHorn Shop, Madurai. All rights reserved.</div>
          <div style={{ display: 'flex', gap: 16 }}>
            <span style={footerStyles.copy}>Privacy Policy</span>
            <span style={footerStyles.copy}>Terms of Service</span>
            <span style={footerStyles.copy}>Shipping Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
Object.assign(window, { Footer });
