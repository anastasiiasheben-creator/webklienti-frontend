import { C } from '../../lib/constants';

export default function ProblemSection({ t }) {
  return (
    <div style={{ background: C.bg, padding: '96px 40px', borderBottom: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ maxWidth: 720 }}>
          <p className="section-label">{t.problemLabel}</p>
          <h2 style={{ fontSize: 'clamp(28px, 3vw, 36px)', fontWeight: 700, lineHeight: 1.22, letterSpacing: '-0.01em', marginBottom: 48 }}>
            {t.problemTitle}
          </h2>
        </div>
        <div className="problem-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: '1fr', gap: 16, marginBottom: 32 }}>
          {t.problemPoints.map((pt, i) => (
            <div key={i} className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, height: '100%', textAlign: 'center' }}>
              <span style={{ color: C.red, fontSize: 18, flexShrink: 0, marginTop: 1 }}>✕</span>
              <span style={{ fontSize: 16, color: C.text, lineHeight: 1.5 }}>{pt}</span>
            </div>
          ))}
        </div>
        <div style={{ background: C.text, borderRadius: 16, padding: '20px 28px', display: 'inline-block' }}>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', margin: 0, fontWeight: 500 }}>
            <span style={{ color: C.red, marginRight: 8 }}>→</span>{t.problemClose}
          </p>
        </div>
      </div>
    </div>
  );
}
