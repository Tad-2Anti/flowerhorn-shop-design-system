/* WishlistDrawer — FlowerHorn Shop */
const wlStyles = {
  overlay: { position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 300 },
  drawer: { position: 'fixed', top: 0, right: 0, width: '100%', maxWidth: 400, height: '100vh', background: '#fff', zIndex: 301, display: 'flex', flexDirection: 'column', boxShadow: '-4px 0 40px rgba(0,0,0,0.2)', fontFamily: "'DM Sans', sans-serif" },
  head: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', borderBottom: '1px solid rgba(0,0,0,0.07)' },
  title: { fontSize: 18, fontWeight: 800, color: '#090909' },
  closeBtn: { width: 36, height: 36, borderRadius: '50%', background: '#f2f4f3', border: 'none', cursor: 'pointer', fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' },
  items: { flex: 1, overflowY: 'auto', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 12 },
  item: { display: 'flex', gap: 12, alignItems: 'flex-start', padding: 12, borderRadius: 6, background: '#f2f4f3' },
  itemImg: { width: 60, height: 60, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  itemInfo: { flex: 1, display: 'flex', flexDirection: 'column', gap: 4 },
  itemName: { fontSize: 14, fontWeight: 700, color: '#090909', lineHeight: 1.3 },
  itemMeta: { fontSize: 12, color: '#6b7280', fontWeight: 500 },
  itemPrice: { fontSize: 15, fontWeight: 800, color: '#090909' },
  itemActions: { display: 'flex', gap: 6, marginTop: 4 },
  moveBtn: { flex: 1, background: '#8c2515', color: '#fff', border: 'none', borderRadius: 50, padding: '6px 12px', fontFamily: "'DM Sans',sans-serif", fontSize: 11, fontWeight: 700, cursor: 'pointer' },
  removeBtn: { width: 28, height: 28, background: '#fff', border: '1.5px solid rgba(0,0,0,0.12)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 14, color: '#9ca3af', flexShrink: 0 },
  footer: { padding: '16px 24px', borderTop: '1px solid rgba(0,0,0,0.07)' },
  shopBtn: { width: '100%', background: '#8c2515', color: '#fff', border: 'none', borderRadius: 50, padding: '13px 24px', fontSize: 15, fontWeight: 800, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif" },
  emptyState: { flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, padding: 40 },
};

function WishlistDrawer({ items, onClose, onMoveToCart, onRemove, setPage }) {
  return (
    <>
      <div style={wlStyles.overlay} onClick={onClose} />
      <div style={wlStyles.drawer}>
        <div style={wlStyles.head}>
          <div style={wlStyles.title}>
            Wishlist {items.length > 0 && <span style={{ fontSize: 14, color: '#6b7280', fontWeight: 600 }}>({items.length})</span>}
          </div>
          <button style={wlStyles.closeBtn} onClick={onClose}>✕</button>
        </div>

        {items.length === 0 ? (
          <div style={wlStyles.emptyState}>
            <div style={{ fontSize: 48 }}>♡</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#6b7280' }}>Your wishlist is empty</div>
            <div style={{ fontSize: 13, color: '#9ca3af', textAlign: 'center', lineHeight: 1.5 }}>Tap the ♡ on any fish or accessory to save it here.</div>
            <button style={{ ...wlStyles.shopBtn, marginTop: 8 }} onClick={() => { onClose(); setPage('shop'); }}>Browse Shop</button>
          </div>
        ) : (
          <>
            <div style={wlStyles.items}>
              {items.map(item => (
                <div key={item.id} style={wlStyles.item}>
                  <div style={{ ...wlStyles.itemImg, background: item.bg }}>
                    <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)' }}>IMG</span>
                  </div>
                  <div style={wlStyles.itemInfo}>
                    <div style={wlStyles.itemName}>{item.name}</div>
                    <div style={wlStyles.itemMeta}>
                      {[item.size, item.age].filter(v => v && v !== '–').join(' · ')}
                    </div>
                    <div style={wlStyles.itemPrice}>₹{item.price.toLocaleString('en-IN')}</div>
                    <div style={wlStyles.itemActions}>
                      <button
                        style={{ ...wlStyles.moveBtn, background: item.inStock ? '#8c2515' : '#9ca3af', cursor: item.inStock ? 'pointer' : 'not-allowed' }}
                        onClick={() => { if (item.inStock) onMoveToCart(item); }}
                        disabled={!item.inStock}>
                        {item.inStock ? 'Move to Cart' : 'Out of Stock'}
                      </button>
                      <button style={wlStyles.removeBtn} onClick={() => onRemove(item.id)} title="Remove from wishlist">×</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={wlStyles.footer}>
              <button style={wlStyles.shopBtn} onClick={() => { onClose(); setPage('shop'); }}>Continue Shopping →</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
Object.assign(window, { WishlistDrawer });
