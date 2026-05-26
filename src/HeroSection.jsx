import { C } from '../../lib/constants';

export default function HeroSection({ t, lang, onCta }) {
  return (
    <div style={{ background: C.white, borderBottom: `1px solid ${C.border}`, padding: '96px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: 24 }}>
          <span style={{ background: 'rgba(37,99,235,0.08)', color: C.blue, border: `1px solid rgba(37,99,235,0.2)`, padding: '5px 14px', borderRadius: 100, fontSize: 13, fontWeight: 600 }}>
            {t.heroBadge}
          </span>
        </div>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 64, alignItems: 'center' }}>
          {/* LEFT */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 500, color: C.textSub, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>
              {t.marketTag}
            </div>
            <h1 style={{ fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 700, lineHeight: 1.14, letterSpacing: '-0.01em', color: C.text, marginBottom: 24 }}>
              {t.heroTitle}
            </h1>
            <p style={{ fontSize: 18, color: C.textSub, lineHeight: 1.6, marginBottom: 32 }}>{t.heroSub}</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 40 }}>
              {t.heroBenefits.map((b, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 16, color: C.text }}>
                  <span style={{ color: C.green, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>{b}
                </li>
              ))}
            </ul>
            <button onClick={onCta} className="btn-primary" style={{ fontSize: 16, marginBottom: 16, width: '100%', maxWidth: 480 }}>
              👉 {t.heroCta}
            </button>
            <p style={{ fontSize: 14, color: C.textSub }}>{t.heroMicro}</p>
          </div>
          {/* RIGHT — dashboard mock */}
          <div className="hero-right" style={{ background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)', borderRadius: 20, padding: 32, border: `1px solid rgba(37,99,235,0.12)` }}>
            <div style={{ background: C.white, borderRadius: 12, padding: 20, marginBottom: 16, boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
              <div style={{ fontSize: 12, color: C.textSub, marginBottom: 8, fontWeight: 500 }}>
                {lang === 'en' ? 'Monthly inquiries' : lang === 'cz' ? 'Měsíční poptávky' : 'Mesačné dopyty'}
              </div>
              <div style={{ fontSize: 36, fontWeight: 700, color: C.blue, marginBottom: 4 }}>+3×</div>
              <div style={{ fontSize: 13, color: C.green, fontWeight: 600 }}>
                ↑ {lang === 'en' ? 'after optimisation' : lang === 'cz' ? 'po optimalizaci' : 'po optimalizácii'}
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, marginTop: 16, height: 60 }}>
                {[20, 28, 22, 35, 32, 48, 52, 44, 58, 62, 68, 80].map((h, i) => (
                  <div key={i} style={{ flex: 1, background: i >= 6 ? C.blue : '#DBEAFE', height: `${h}%`, borderRadius: '4px 4px 0 0' }} />
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {[
                { label: lang === 'en' ? 'Avg. inquiries/mo' : lang === 'cz' ? 'Průměr dopytů/měs' : 'Priemer dopytov/mes', val: '14', color: C.blue },
                { label: lang === 'en' ? 'Google ranking' : 'Google pozícia', val: 'TOP 3', color: C.green },
                { label: lang === 'en' ? 'Conversion rate' : lang === 'cz' ? 'Konverzní poměr' : 'Konverzný pomer', val: '4.2%', color: C.orange },
                { label: lang === 'en' ? 'Delivery' : lang === 'cz' ? 'Dodání' : 'Dodanie', val: lang === 'en' ? '5 days' : '5 dní', color: C.text },
              ].map((stat, i) => (
                <div key={i} style={{ background: C.white, borderRadius: 10, padding: '12px 14px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                  <div style={{ fontSize: 11, color: C.textSub, marginBottom: 4, fontWeight: 500 }}>{stat.label}</div>
                  <div style={{ fontSize: 20, fontWeight: 700, color: stat.color }}>{stat.val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
