import montwellImg from '../../assets/montwell-preview.png';
import { C } from '../../lib/constants';

const staticReviews = [];

export default function CaseStudySection({ t, lang }) {
  const montwell = {
    label: lang === 'en' ? 'Latest project' : lang === 'cz' ? 'Poslední realizace' : 'Posledná realizácia',
    viewBtn: lang === 'en' ? 'View project →' : lang === 'cz' ? 'Zobrazit projekt →' : 'Zobraziť projekt →',
    facts: [
      { label: lang === 'en' ? 'Type' : 'Typ', value: lang === 'en' ? 'Corporate website' : lang === 'cz' ? 'Firemní web' : 'Firemná webstránka' },
      { label: lang === 'en' ? 'Features' : 'Funkcie', value: lang === 'en' ? 'Responsive · Contact form · SEO' : lang === 'cz' ? 'Responzivní · Formulář · SEO' : 'Responzívny · Formulár · SEO' },
      { label: lang === 'en' ? 'Result' : lang === 'cz' ? 'Výsledek' : 'Výsledok', value: lang === 'en' ? 'First organic inquiries after launch' : lang === 'cz' ? 'První organické dopyty po spuštění' : 'Prvé organické dopyty po spustení' },
      { label: lang === 'en' ? 'Timeline' : 'Doba', value: lang === 'en' ? '5 days' : '5 dní' },
    ],
  };

  return (
    <div id="reviews" style={{ background: C.bg, padding: '96px 40px', borderBottom: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <p className="section-label">{t.reviewsLabel}</p>
        <h2 style={{ fontSize: 'clamp(28px, 3vw, 36px)', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: 48 }}>
          {t.reviewsTitle}
        </h2>
        {/* Montwell case study */}
        <div className="montwell-grid card" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center', padding: 32, marginBottom: 32 }}>
          <div style={{ borderRadius: 12, overflow: 'hidden', border: `1px solid ${C.border}` }}>
            <a href="https://montwell.sk" target="_blank" rel="noopener noreferrer">
              <img src={montwellImg} alt="Montwell webstránka" style={{ width: '100%', display: 'block' }} loading="lazy" />
            </a>
          </div>
          <div>
            <p style={{ fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', color: C.textSub, marginBottom: 8 }}>{montwell.label}</p>
            <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 24 }}>Montwell</h3>
            <div className="montwell-facts" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 24 }}>
              {montwell.facts.map((f, i) => (
                <div key={i} style={{ background: C.bg, borderRadius: 10, padding: '14px 16px' }}>
                  <p style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: C.textSub, marginBottom: 4 }}>{f.label}</p>
                  <p style={{ fontSize: 13, fontWeight: 600, color: C.text, lineHeight: 1.4 }}>{f.value}</p>
                </div>
              ))}
            </div>
            <a href="https://montwell.sk" target="_blank" rel="noopener noreferrer"
              className="btn-secondary"
              style={{ textDecoration: 'none', display: 'inline-flex', height: 44, fontSize: 14 }}>
              {montwell.viewBtn}
            </a>
          </div>
        </div>
        {/* Reviews */}
        {staticReviews.length === 0 && (
          <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 16, padding: '32px 24px', textAlign: 'center' }}>
            <div style={{ fontSize: 28, marginBottom: 12 }}>⭐</div>
            <p style={{ fontSize: 15, color: C.textSub, lineHeight: 1.7 }}>
              {lang === 'en' ? 'First client reviews coming soon.'
                : lang === 'cz' ? 'První recenze klientů budou brzy.'
                : 'Prvé recenzie klientov čoskoro.'}
            </p>
            <p style={{ fontSize: 13, color: C.textSub, opacity: 0.6, marginTop: 4 }}>
              {lang === 'en' ? 'We are at the beginning — every project delivered with full commitment.'
                : lang === 'cz' ? 'Jsme na začátku — každý projekt s plným nasazením.'
                : 'Sme na začiatku — každý projekt s plným nasadením.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
