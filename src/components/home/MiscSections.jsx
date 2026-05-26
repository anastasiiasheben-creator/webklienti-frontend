import { C } from '../../lib/constants';

export function RiskSection({ t }) {
  return (
    <div style={{ background: C.bg, padding: '96px 40px', borderBottom: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontSize: 40, marginBottom: 16 }}>🛡️</div>
        <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: 16 }}>{t.riskTitle}</h2>
        <p style={{ fontSize: 18, color: C.textSub, lineHeight: 1.7, marginBottom: 32 }}>{t.riskText}</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
          {t.riskPoints.map(p => (
            <div key={p} style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 100, padding: '10px 20px', fontSize: 14, fontWeight: 500, color: C.text }}>
              {p}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FAQSection({ t, openFaq, setOpenFaq }) {
  return (
    <div id="faq" style={{ background: C.white, padding: '96px 40px', borderBottom: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <p className="section-label">{t.faqLabel}</p>
        <h2 style={{ fontSize: 'clamp(28px, 3vw, 36px)', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: 40 }}>{t.faqTitle}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {t.faqItems.map((item, i) => (
            <div key={i} style={{
              background: C.bg,
              borderRadius: i === 0 ? '12px 12px 0 0' : i === t.faqItems.length - 1 ? '0 0 12px 12px' : 0,
              overflow: 'hidden',
              border: `1px solid ${C.border}`,
              borderTop: i > 0 ? 'none' : `1px solid ${C.border}`,
            }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="faq-btn"
                style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 24px', borderBottom: openFaq === i ? `1px solid ${C.border}` : 'none', textAlign: 'left', gap: 16 }}
              >
                <span style={{ fontSize: 15, fontWeight: 600, color: C.text }}>{item.q}</span>
                <span style={{ fontSize: 20, color: C.blue, fontWeight: 700, flexShrink: 0, transition: 'transform .2s', transform: openFaq === i ? 'rotate(45deg)' : 'none', display: 'inline-block' }}>+</span>
              </button>
              {openFaq === i && (
                <div style={{ padding: '16px 24px 20px', fontSize: 15, color: C.textSub, lineHeight: 1.7 }}>{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FinalCtaSection({ t, onCta }) {
  return (
    <div style={{ background: C.blue, padding: '96px 40px' }}>
      <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, color: '#fff', letterSpacing: '-0.01em', marginBottom: 16 }}>{t.finalCtaTitle}</h2>
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.75)', marginBottom: 40, lineHeight: 1.6 }}>{t.finalCtaSub}</p>
        <button onClick={onCta} style={{ display: 'inline-flex', alignItems: 'center', height: 56, padding: '0 32px', background: '#fff', color: C.blue, border: 'none', borderRadius: 12, fontSize: 17, fontWeight: 700, cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>
          {t.finalCtaBtn}
        </button>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', marginTop: 16 }}>{t.heroMicro}</p>
      </div>
    </div>
  );
}
