/* CheckoutPage — FlowerHorn Shop */
const coStyles = {
  page: { fontFamily: "'DM Sans', sans-serif", background: '#f2f4f3', minHeight: '100vh' },
  pageHead: { background: '#fff', borderBottom: '1px solid rgba(0,0,0,0.07)', padding: '16px 24px' },
  pageHeadInner: { maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 },
  breadcrumb: { display: 'flex', gap: 6, alignItems: 'center', fontSize: 13, color: '#6b7280', fontWeight: 500, marginBottom: 4 },
  breadBtn: { background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 600, color: '#1559d5', fontFamily: "'DM Sans',sans-serif", padding: 0 },
  breadSep: { color: '#9ca3af' },
  pageTitle: { fontSize: 22, fontWeight: 800, color: '#090909', letterSpacing: '-0.01em' },
  secure: { fontSize: 12, color: '#6b7280', fontWeight: 600, display: 'flex', gap: 6, alignItems: 'center' },
  body: { maxWidth: 1100, margin: '0 auto', padding: '28px 24px', display: 'grid', gap: 20 },
  card: { background: '#fff', borderRadius: 8, padding: '24px 28px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)' },
  sectionTitle: { fontSize: 15, fontWeight: 800, color: '#090909', marginBottom: 18, letterSpacing: '-0.01em' },
  fieldGrid2: { display: 'grid', gap: 14 },
  label: { display: 'block', fontSize: 11, fontWeight: 700, color: '#555', marginBottom: 5, letterSpacing: '0.04em', textTransform: 'uppercase' },
  input: { width: '100%', border: '1.5px solid rgba(0,0,0,0.12)', borderRadius: 6, padding: '10px 12px', fontFamily: "'DM Sans',sans-serif", fontSize: 14, fontWeight: 500, color: '#090909', background: '#fff', outline: 'none', boxSizing: 'border-box', transition: 'border-color 200ms' },
  inputErr: { borderColor: '#C1321A' },
  errText: { fontSize: 11, color: '#C1321A', fontWeight: 600, marginTop: 3 },
  payOpt: { display: 'flex', gap: 12, alignItems: 'center', padding: '14px 16px', border: '1.5px solid rgba(0,0,0,0.12)', borderRadius: 8, cursor: 'pointer', transition: 'all 200ms', marginBottom: 10 },
  payOptActive: { borderColor: '#8c2515', background: '#fef8f7' },
  payOptDisabled: { opacity: 0.5, cursor: 'not-allowed' },
  payLabel: { fontSize: 14, fontWeight: 700, color: '#090909', flex: 1 },
  paySub: { fontSize: 12, color: '#6b7280', fontWeight: 500, marginTop: 1 },
  tag: { fontSize: 10, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', borderRadius: 50, padding: '2px 9px' },
  tagGreen: { background: '#eaf2ed', color: '#357e51' },
  tagGray: { background: '#f2f4f3', color: '#9ca3af' },
  orderItem: { display: 'flex', gap: 12, alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(0,0,0,0.06)' },
  orderItemImg: { width: 48, height: 48, borderRadius: 6, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' },
  orderItemName: { fontSize: 13, fontWeight: 700, color: '#090909', lineHeight: 1.3, flex: 1 },
  orderItemQty: { fontSize: 12, color: '#6b7280', fontWeight: 500, marginTop: 2 },
  orderItemPrice: { fontSize: 14, fontWeight: 800, color: '#090909' },
  sumRow: { display: 'flex', justifyContent: 'space-between', fontSize: 13, color: '#555', fontWeight: 600, padding: '4px 0' },
  totalRow: { display: 'flex', justifyContent: 'space-between', fontSize: 17, color: '#090909', fontWeight: 800, padding: '12px 0 0', borderTop: '1.5px solid rgba(0,0,0,0.1)', marginTop: 4 },
  placeBtn: { width: '100%', background: '#8c2515', color: '#fff', border: 'none', borderRadius: 50, padding: '15px 24px', fontSize: 16, fontWeight: 800, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", transition: 'background 300ms' },
  backBtn: { width: '100%', background: 'transparent', color: '#090909', border: '1.5px solid rgba(0,0,0,0.15)', borderRadius: 50, padding: '12px 24px', fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif" },
  guarantee: { display: 'flex', gap: 8, fontSize: 12, color: '#6b7280', fontWeight: 500, lineHeight: 1.4, alignItems: 'flex-start' },
};

function CField({ label, error, children }) {
  return (
    <div>
      <label style={coStyles.label}>{label}</label>
      {children}
      {error && <div style={coStyles.errText}>{error}</div>}
    </div>
  );
}

function CheckoutPage({ cartItems, setPage, onOrderComplete, onOpenCart }) {
  const [form, setForm] = React.useState({
    name: '', email: '', phone: '',
    address: '', city: '', state: 'Tamil Nadu', pincode: '',
  });
  const [errors, setErrors] = React.useState({});
  const [payment, setPayment] = React.useState('cod');
  const [placed, setPlaced] = React.useState(false);
  const [orderNum, setOrderNum] = React.useState('');
  const isMobile = window.innerWidth < 900;

  const total = cartItems.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = total > 5000 ? 0 : 299;
  const grand = total + shipping;

  const set = (field) => (e) => {
    setForm(f => ({ ...f, [field]: e.target.value }));
    setErrors(er => ({ ...er, [field]: '' }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Full name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!/^\d{10}$/.test(form.phone.replace(/\s/g, ''))) e.phone = '10-digit mobile number required';
    if (!form.address.trim()) e.address = 'Delivery address is required';
    if (!form.city.trim()) e.city = 'City is required';
    if (!/^\d{6}$/.test(form.pincode)) e.pincode = '6-digit pincode required';
    return e;
  };

  const handlePlaceOrder = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    const num = 'FHS-' + String(Date.now()).slice(-6);
    setOrderNum(num);
    onOrderComplete();
    setPlaced(true);
  };

  // — Order success screen —
  if (placed) {
    return (
      <div style={{ fontFamily: "'DM Sans', sans-serif", minHeight: '100vh', background: '#f2f4f3' }}>
        <div style={{ background: '#0a0f0d', padding: '64px 24px', textAlign: 'center' }}>
          <div style={{ width: 72, height: 72, background: '#3d6b4a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, margin: '0 auto 20px' }}>✓</div>
          <h1 style={{ fontSize: 'clamp(24px,4vw,36px)', fontWeight: 800, color: '#faf4d8', marginBottom: 10, letterSpacing: '-0.02em' }}>Order Placed!</h1>
          <p style={{ fontSize: 16, color: 'rgba(250,244,216,0.65)', maxWidth: 420, margin: '0 auto 8px', lineHeight: 1.6 }}>
            Thank you, {form.name.split(' ')[0]}! We'll confirm via WhatsApp or email shortly.
          </p>
          <p style={{ fontSize: 13, color: 'rgba(250,244,216,0.4)', fontWeight: 700, letterSpacing: '0.04em' }}>ORDER #{orderNum}</p>
        </div>

        <div style={{ maxWidth: 580, margin: '36px auto', padding: '0 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={coStyles.card}>
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: 16 }}>What happens next</div>
            {[
              ['📱', 'WhatsApp confirmation sent within 30 minutes'],
              ['📦', 'Order dispatched in 1–2 business days'],
              ['🐟', 'Live fish guarantee — 100% safe delivery assured'],
              ['🔔', `Tracking updates sent to ${form.email}`],
            ].map(([icon, text]) => (
              <div key={text} style={{ display: 'flex', gap: 10, fontSize: 14, color: '#333', fontWeight: 500, marginBottom: 10, lineHeight: 1.5, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 18, flexShrink: 0 }}>{icon}</span>{text}
              </div>
            ))}
          </div>

          <div style={coStyles.card}>
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: 12 }}>Delivering to</div>
            <div style={{ fontSize: 15, fontWeight: 800, color: '#090909', marginBottom: 4 }}>{form.name}</div>
            <div style={{ fontSize: 13, color: '#555', lineHeight: 1.7 }}>
              {form.address}<br />
              {form.city}, {form.state} – {form.pincode}
            </div>
            <div style={{ fontSize: 13, color: '#555', marginTop: 6 }}>📱 {form.phone} &nbsp;·&nbsp; ✉ {form.email}</div>
            <div style={{ marginTop: 12, padding: '10px 14px', background: '#f2f4f3', borderRadius: 6, fontSize: 13, fontWeight: 700, color: '#3d6b4a' }}>
              Payment: Cash on Delivery — ₹{grand.toLocaleString('en-IN')}
            </div>
          </div>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button style={{ ...coStyles.placeBtn, flex: 1, minWidth: 140 }} onClick={() => setPage('shop')}>Continue Shopping →</button>
            <button style={{ ...coStyles.backBtn, flex: 1, minWidth: 140 }} onClick={() => setPage('home')}>Back to Home</button>
          </div>
        </div>
      </div>
    );
  }

  // — Checkout form —
  const STATES = ['Tamil Nadu','Kerala','Karnataka','Andhra Pradesh','Telangana','Maharashtra','Gujarat','Rajasthan','Delhi','West Bengal','Other'];

  return (
    <div style={coStyles.page}>
      <div style={coStyles.pageHead}>
        <div style={coStyles.pageHeadInner}>
          <div>
            <div style={coStyles.breadcrumb}>
              <button style={coStyles.breadBtn} onClick={() => setPage('home')}>Home</button>
              <span style={coStyles.breadSep}>›</span>
              <button style={coStyles.breadBtn} onClick={onOpenCart}>Cart</button>
              <span style={coStyles.breadSep}>›</span>
              <span style={{ color: '#090909', fontWeight: 700 }}>Checkout</span>
            </div>
            <div style={coStyles.pageTitle}>Checkout</div>
          </div>
          <div style={coStyles.secure}>🔒 Secure checkout</div>
        </div>
      </div>

      <div style={{ ...coStyles.body, gridTemplateColumns: isMobile ? '1fr' : '1fr 360px' }}>
        {/* Left column — form */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

          {/* Contact */}
          <div style={coStyles.card}>
            <div style={coStyles.sectionTitle}>Contact Information</div>
            <div style={{ ...coStyles.fieldGrid2, gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', marginBottom: 14 }}>
              <CField label="Full Name" error={errors.name}>
                <input style={{ ...coStyles.input, ...(errors.name ? coStyles.inputErr : {}) }} placeholder="Ravi Kumar" value={form.name} onChange={set('name')} />
              </CField>
              <CField label="Email Address" error={errors.email}>
                <input style={{ ...coStyles.input, ...(errors.email ? coStyles.inputErr : {}) }} type="email" placeholder="ravi@example.com" value={form.email} onChange={set('email')} />
              </CField>
            </div>
            <div style={{ maxWidth: isMobile ? '100%' : '50%' }}>
              <CField label="Mobile Number" error={errors.phone}>
                <input style={{ ...coStyles.input, ...(errors.phone ? coStyles.inputErr : {}) }} placeholder="9876543210" value={form.phone} onChange={set('phone')} maxLength={10} />
              </CField>
            </div>
          </div>

          {/* Address */}
          <div style={coStyles.card}>
            <div style={coStyles.sectionTitle}>Delivery Address</div>
            <div style={{ marginBottom: 14 }}>
              <CField label="House / Flat No., Street, Area" error={errors.address}>
                <input style={{ ...coStyles.input, ...(errors.address ? coStyles.inputErr : {}) }} placeholder="#42, Gandhi Nagar, Main Road" value={form.address} onChange={set('address')} />
              </CField>
            </div>
            <div style={{ ...coStyles.fieldGrid2, gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr' }}>
              <CField label="City" error={errors.city}>
                <input style={{ ...coStyles.input, ...(errors.city ? coStyles.inputErr : {}) }} placeholder="Madurai" value={form.city} onChange={set('city')} />
              </CField>
              <CField label="State">
                <select style={{ ...coStyles.input, cursor: 'pointer', background: '#fff' }} value={form.state} onChange={set('state')}>
                  {STATES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </CField>
              <CField label="Pincode" error={errors.pincode}>
                <input style={{ ...coStyles.input, ...(errors.pincode ? coStyles.inputErr : {}) }} placeholder="625014" value={form.pincode} onChange={set('pincode')} maxLength={6} />
              </CField>
            </div>
          </div>

          {/* Payment */}
          <div style={coStyles.card}>
            <div style={coStyles.sectionTitle}>Payment Method</div>
            {[
              { id: 'cod', icon: '💵', label: 'Cash on Delivery', sub: 'Pay in cash when your order arrives', tag: 'Available', tagStyle: coStyles.tagGreen, disabled: false },
              { id: 'upi', icon: '📲', label: 'UPI / PhonePe / Google Pay', sub: 'Instant payment via UPI apps', tag: 'Coming soon', tagStyle: coStyles.tagGray, disabled: true },
              { id: 'card', icon: '💳', label: 'Credit / Debit Card', sub: 'Visa, Mastercard, RuPay accepted', tag: 'Coming soon', tagStyle: coStyles.tagGray, disabled: true },
            ].map(opt => (
              <div key={opt.id}
                style={{ ...coStyles.payOpt, ...(payment === opt.id ? coStyles.payOptActive : {}), ...(opt.disabled ? coStyles.payOptDisabled : {}) }}
                onClick={() => !opt.disabled && setPayment(opt.id)}>
                <input type="radio" checked={payment === opt.id} readOnly disabled={opt.disabled} style={{ accentColor: '#8c2515', width: 16, height: 16, flexShrink: 0 }} />
                <span style={{ fontSize: 22 }}>{opt.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={coStyles.payLabel}>{opt.label}</div>
                  <div style={coStyles.paySub}>{opt.sub}</div>
                </div>
                <span style={{ ...coStyles.tag, ...opt.tagStyle }}>{opt.tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — order summary */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={coStyles.card}>
            <div style={coStyles.sectionTitle}>
              Order Summary &nbsp;
              <span style={{ fontSize: 13, color: '#6b7280', fontWeight: 600 }}>({cartItems.reduce((s, i) => s + i.qty, 0)} items)</span>
            </div>
            <div style={{ marginBottom: 12 }}>
              {cartItems.map(item => (
                <div key={item.id} style={coStyles.orderItem}>
                  <div style={{ ...coStyles.orderItemImg, background: item.bg }}>
                    <span style={{ fontSize: 8, fontWeight: 700, textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.05em' }}>IMG</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={coStyles.orderItemName}>{item.name}</div>
                    <div style={coStyles.orderItemQty}>Qty: {item.qty}</div>
                  </div>
                  <div style={coStyles.orderItemPrice}>₹{(item.price * item.qty).toLocaleString('en-IN')}</div>
                </div>
              ))}
            </div>
            <div style={coStyles.sumRow}><span>Subtotal</span><span>₹{total.toLocaleString('en-IN')}</span></div>
            <div style={coStyles.sumRow}>
              <span>Shipping</span>
              <span style={shipping === 0 ? { color: '#3d6b4a', fontWeight: 700 } : {}}>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
            </div>
            {shipping > 0 && (
              <div style={{ fontSize: 11, color: '#9ca3af', fontWeight: 500, marginBottom: 4 }}>
                Add ₹{(5000 - total).toLocaleString('en-IN')} more for free shipping
              </div>
            )}
            <div style={coStyles.totalRow}><span>Total</span><span>₹{grand.toLocaleString('en-IN')}</span></div>
          </div>

          <button style={coStyles.placeBtn} onClick={handlePlaceOrder}>
            Place Order — ₹{grand.toLocaleString('en-IN')} →
          </button>
          <button style={coStyles.backBtn} onClick={onOpenCart}>← Back to Cart</button>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingTop: 4 }}>
            {[['🔒', 'Secure & encrypted order process'], ['🐟', 'Live fish guarantee on all fish orders'], ['📦', 'Free shipping on orders above ₹5,000'], ['💬', 'WhatsApp support: orders & care queries']].map(([icon, text]) => (
              <div key={text} style={coStyles.guarantee}><span style={{ fontSize: 14, flexShrink: 0 }}>{icon}</span>{text}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { CheckoutPage });
