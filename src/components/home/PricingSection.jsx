import { C } from '../../lib/constants';

export default function PricingSection({ t, onSelectPackage }) {
  return (
    <div id="pricing" style={{ background: C.white, padding: '96px 40px', borderBottom: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <p className="section-label">{t.pricingLabel}</p>
        <h2 style={{ fontSize: 'clamp(28px, 3vw, 36px)', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: 12 }}>{t.pricingTitle}</h2>
        <p style={{ fontSize: 16, color: C.textSub, marginBottom: 48 }}>{t.pricingNote}</p>
        <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, alignItems: 'stretch' }}>
          {t.cards.map((card, i) => (
            <div
              key={i}
              className={card.featured ? 'pricing-card-featured' : ''}
              style={{
                background: card.dark ? C.dark : C.white,
                color: card.dark ? '#f1f5f9' : C.text,
                border: card.featured ? `2px solid ${C.blue}` : `1px solid ${C.border}`,
                borderRadius: 16, padding: 28, position: 'relative',
                display: 'flex', flexDirection: 'column', height: '100%',
                transform: 'none',
                boxShadow: card.featured ? `0 24px 64px rgba(37,99,235,0.22)` : card.dark ? '0 4px 20px rgba(0,0,0,0.15)' : 'none',
              }}
            >
              {card.badge && (
                <div style={{
                  position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
                  background: card.featured ? C.blue : card.dark ? C.orange : C.green,
                  color: '#fff', padding: '4px 16px', borderRadius: 100,
                  fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap',
                }}>{card.badge}</div>
              )}
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', color: card.featured ? C.blue : card.dark ? C.orangeBright : C.textSub, marginBottom: 12 }}>{card.tag}</p>
              <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>{card.name}</h3>
              <p style={{ fontSize: 13, color: card.dark ? 'rgba(255,255,255,0.7)' : C.textSub, marginBottom: 16, lineHeight: 1.5 }}>👤 {card.forWhom}</p>
              <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 4 }}>{card.price}</div>
              <p style={{ fontSize: 13, textDecoration: 'line-through', color: card.dark ? 'rgba(255,255,255,0.55)' : '#6B7280', marginBottom: 20 }}>{card.old}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, flexGrow: 1, marginBottom: 24 }}>
                {card.features.map(f => (
                  <li key={f} style={{ fontSize: 14, color: card.dark ? 'rgba(255,255,255,0.7)' : '#4B5563', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <span style={{ color: card.featured ? C.blue : C.green, fontWeight: 700, flexShrink: 0 }}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onSelectPackage(card.name + ' — ' + card.price)}
                className="btn-primary"
                style={{
                  width: '100%',
                }}
              >
                {t.orderBtn}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
