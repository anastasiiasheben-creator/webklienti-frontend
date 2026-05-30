import { C } from '../../lib/constants';

export function AgitationStrip({ t }) {
  return (
    <div style={{ background: C.dark, padding: '64px 40px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 700, color: '#fff', marginBottom: 16, letterSpacing: '-0.01em' }}>
          <span style={{ color: C.orange }}>⚠ </span>{t.agitTitle}
        </h2>
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>{t.agitText}</p>
      </div>
    </div>
  );
}

export function LogoStrip({ lang }) {
  return (
    <div style={{ background: C.white, borderBottom: `1px solid ${C.border}`, padding: '32px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: 12, fontWeight: 500, color: C.textSub, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 24 }}>
          {lang === 'en' ? 'Trusted by businesses across Slovakia & Czech Republic'
            : lang === 'cz' ? 'Důvěřují nám firmy po celém Slovensku a ČR'
            : 'Dôverujú nám firmy po celom Slovensku a ČR'}
        </p>
        <div style={{ display: 'flex', gap: 32, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          <a href="https://montwell.sk" target="_blank" rel="noopener noreferrer" style={{ color: C.text, textDecoration: 'none', fontSize: 15, fontWeight: 700, letterSpacing: -0.3, filter: 'grayscale(1)' }}>Montwell</a>
          <span style={{ fontSize: 13, color: C.textSub, fontStyle: 'italic' }}>
            {lang === 'en' ? '+ 80 more projects' : '+ 80 ďalších projektov'}
          </span>
        </div>
      </div>
    </div>
  );
}

export function SolutionSection({ t, onCta, lang }) {
  return (
    <div style={{ background: C.bg, padding: '96px 40px', borderBottom: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <p className="section-label">{t.solutionLabel}</p>
        <h2 style={{ fontSize: 'clamp(28px, 3vw, 36px)', fontWeight: 700, lineHeight: 1.22, letterSpacing: '-0.01em', marginBottom: 12, maxWidth: 620 }}>
          {t.solutionTitle}
        </h2>
        <div className="solution-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 48, marginTop: 48 }}>
          {t.solutionSteps.map((s, i) => (
            <div key={i} className="card">
              <div style={{ fontSize: 13, fontWeight: 700, color: C.blue, background: 'rgba(37,99,235,0.08)', padding: '4px 10px', borderRadius: 8, display: 'inline-block', marginBottom: 16 }}>
                {s.num}
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 600, color: C.text, marginBottom: 8 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: C.textSub, lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <button onClick={onCta} className="btn-primary">
            {lang === 'en' ? 'Get my free website draft →'
              : lang === 'cz' ? 'Chci svůj bezplatný návrh →'
              : 'Chcem môj bezplatný návrh →'}
          </button>
          <p style={{ fontSize: 14, color: C.textSub, marginTop: 12 }}>
            {lang === 'en' ? 'Free · No commitment · Reply within 24h'
              : lang === 'cz' ? 'Zdarma · Bez závazku · Odpovíme do 24h'
              : 'Zdarma · Bez záväzku · Odpovieme do 24h'}
          </p>
        </div>
      </div>
    </div>
  );
}
