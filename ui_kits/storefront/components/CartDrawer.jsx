/* CartDrawer component — FlowerHorn Shop */
const cartStyles = {
  overlay: { position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 300, transition: 'opacity 400ms' },
  drawer: { position: 'fixed', top: 0, right: 0, width: '100%', maxWidth: 400, height: '100vh', background: '#fff', zIndex: 301, display: 'flex', flexDirection: 'column', boxShadow: '-4px 0 40px rgba(0,0,0,0.2)', fontFamily: "'DM Sans', sans-serif" },
  drawerHead: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', borderBottom: '1px solid rgba(0,0,0,0.07)' },
  drawerTitle: { fontSize: 18, fontWeight: 800, color: '#090909' },
  closeBtn: { width: 36, height: 36, borderRadius: '50%', background: '#f2f4f3', border: 'none', cursor: 'pointer', fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' },
  items: { flex: 1, overflowY: 'auto', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 14 },
  item: { display: 'flex', gap: 14, alignItems: 'flex-start', padding: 12, borderRadius: 6, background: '#f2f4f3' },
  itemImg: { width: 60, height: 60, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, flexShrink: 0 },
  itemInfo: { flex: 1, display: 'flex', flexDirection: 'column', gap: 4 },
  itemName: { fontSize: 14, fontWeight: 700, color: '#090909', lineHeight: 1.3 },
  itemMeta: { fontSize: 12, color: '#6b7280', fontWeight: 500 },
  itemPrice: { fontSize: 16, fontWeight: 800, color: '#090909' },
  qtyRow: { display: 'flex', gap: 8, alignItems: 'center' },
  qtyBtn: { width: 28, height: 28, borderRadius: '50%', background: '#fff', border: '1.5px solid rgba(0,0,0,0.12)', cursor: 'pointer', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'DM Sans', sans-serif", fontWeight: 700 },
  qtyVal: { fontSize: 15, fontWeight: 800, color: '#090909', minWidth: 20, textAlign: 'center' },
  removeBtn: { background: 'none', border: 'none', cursor: 'pointer', fontSize: 18, color: '#9ca3af', padding: 0, lineHeight: 1 },
  footer: { padding: '16px 24px', borderTop: '1px solid rgba(0,0,0,0.07)', display: 'flex', flexDirection: 'column', gap: 12 },
  summaryRow: { display: 'flex', justifyContent: 'space-between', fontSize: 14, color: '#333', fontWeight: 600 },
  totalRow: { display: 'flex', justifyContent: 'space-between', fontSize: 18, color: '#090909', fontWeight: 800 },
  checkoutBtn: { width: '100%', background: '#8c2515', color: '#fff', border: 'none', borderRadius: 50, padding: '14px 24px', fontSize: 16, fontWeight: 800, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", transition: 'background 300ms' },
  continueBtn: { width: '100%', background: 'transparent', color: '#090909', border: '1.5px solid rgba(0,0,0,0.15)', borderRadius: 50, padding: '11px 24px', fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" },
  emptyState: { flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, padding: 40, color: '#9ca3af' },
  emptyIcon: { fontSize: 48 },
  emptyText: { fontSize: 16, fontWeight: 700, color: '#6b7280' },
  emptySubtext: { fontSize: 13, color: '#9ca3af', textAlign: 'center' },
};

function CartDrawer({ items, onClose, onUpdateQty, onRemove, setPage, onCheckout }) {
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const shipping = total > 5000 ? 0 : 299;

  const handleCheckout = () => {
    onClose();
    if (onCheckout) onCheckout();
    else setPage('checkout');
  };

  return (
    <>
      <div style={cartStyles.overlay} onClick={onClose} />
      <div style={cartStyles.drawer}>
        <div style={cartStyles.drawerHead}>
          <div style={cartStyles.drawerTitle}>Cart {items.length > 0 && <span style={{ fontSize: 14, color: '#6b7280', fontWeight: 600 }}>({items.length} {items.length === 1 ? 'item' : 'items'})</span>}</div>
          <button style={cartStyles.closeBtn} onClick={onClose}>✕</button>
        </div>

        {items.length === 0 ? (
          <div style={cartStyles.emptyState}>
            <div style={cartStyles.emptyIcon}>🛒</div>
            <div style={cartStyles.emptyText}>Your cart is empty</div>
            <div style={cartStyles.emptySubtext}>Add some fish or accessories to get started.</div>
            <button style={{ ...cartStyles.checkoutBtn, marginTop: 8 }} onClick={() => { onClose(); setPage('shop'); }}>Browse Shop</button>
          </div>
        ) : (
          <>
            <div style={cartStyles.items}>
              {items.map(item => (
                <div key={item.id} style={cartStyles.item}>
                  <div style={{ ...cartStyles.itemImg, background: item.bg }}>
                    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)' }}>PHOTO</span>
                  </div>
                  <div style={cartStyles.itemInfo}>
                    <div style={cartStyles.itemName}>{item.name}</div>
                    <div style={cartStyles.itemMeta}>{[item.size, item.age].filter(v => v && v !== '–').join(' · ')}</div>
                    <div style={cartStyles.itemPrice}>₹{(item.price * item.qty).toLocaleString('en-IN')}</div>
                    <div style={cartStyles.qtyRow}>
                      <button style={cartStyles.qtyBtn} onClick={() => onUpdateQty(item.id, item.qty - 1)}>−</button>
                      <span style={cartStyles.qtyVal}>{item.qty}</span>
                      <button style={cartStyles.qtyBtn} onClick={() => onUpdateQty(item.id, item.qty + 1)}>+</button>
                    </div>
                  </div>
                  <button style={cartStyles.removeBtn} onClick={() => onRemove(item.id)}>×</button>
                </div>
              ))}
              {shipping === 0 && (
                <div style={{ background: '#eaf2ed', borderRadius: 6, padding: '8px 12px', fontSize: 12, fontWeight: 700, color: '#3d6b4a' }}>
                  ✓ You qualify for free shipping!
                </div>
              )}
              {shipping > 0 && (
                <div style={{ background: '#fef9e7', borderRadius: 6, padding: '8px 12px', fontSize: 12, fontWeight: 600, color: '#c48c10' }}>
                  Add ₹{(5000 - total).toLocaleString('en-IN')} more for free shipping
                </div>
              )}
            </div>
            <div style={cartStyles.footer}>
              <div style={cartStyles.summaryRow}><span>Subtotal</span><span>₹{total.toLocaleString('en-IN')}</span></div>
              <div style={cartStyles.summaryRow}><span>Shipping</span><span>{shipping === 0 ? <span style={{ color: '#3d6b4a' }}>Free</span> : `₹${shipping}`}</span></div>
              <div style={cartStyles.totalRow}><span>Total</span><span>₹{(total + shipping).toLocaleString('en-IN')}</span></div>
              <button style={cartStyles.checkoutBtn} onClick={handleCheckout}>Proceed to Checkout →</button>
              <button style={cartStyles.continueBtn} onClick={onClose}>Continue Shopping</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
Object.assign(window, { CartDrawer });
