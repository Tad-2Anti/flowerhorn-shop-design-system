/* Toast notifications — FlowerHorn Shop */
function Toast({ toasts }) {
  if (!toasts || !toasts.length) return null;
  return (
    <div style={{
      position: 'fixed', bottom: 24, right: 24, zIndex: 600,
      display: 'flex', flexDirection: 'column-reverse', gap: 8,
      fontFamily: "'DM Sans', sans-serif", pointerEvents: 'none',
    }}>
      {toasts.map(t => (
        <div key={t.id} style={{
          background: t.type === 'success' ? '#3d6b4a' : t.type === 'error' ? '#C1321A' : '#1e293b',
          color: '#fff', borderRadius: 8, padding: '11px 18px',
          fontSize: 13, fontWeight: 600, boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          maxWidth: 300, lineHeight: 1.4, display: 'flex', gap: 8, alignItems: 'center',
        }}>
          <span>{t.type === 'success' ? '✓' : 'ℹ'}</span>
          <span>{t.msg}</span>
        </div>
      ))}
    </div>
  );
}
Object.assign(window, { Toast });
