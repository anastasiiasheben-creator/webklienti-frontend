import montwellImg from '../../assets/montwell-preview.webp';
import { C } from '../../lib/constants';

const GOOGLE_REVIEW_LINK = 'https://maps.app.goo.gl/tDf7dRkYB2eZ3j9d7';

// Všetky jazyky sú teraz sémanticky 1:1 so slovenským originálom
const translations = {
  en: {
    label: 'Verified project',
    viewBtn: 'View client\'s website →',
    beforeLabel: 'BEFORE',
    afterLabel: 'AFTER',
    beforeTitle: 'Only Instagram',
    afterTitle: 'Live sales website: montwell.sk',
    beforePoints: ['They only have an Instagram profile', 'No website', 'Hard to find on Google'],
    afterPoints: ['Professional website', 'Project gallery', 'Clients can now find them via Google search', 'First leads already in the first weeks'],
    result: '🎯 Montwell.sk launched in 5 days · a sales website that builds trust and generates inquiries',
    subImageText: 'Real client work — no templates',
    reviewText: 'Great service! Very satisfied.',
    reviewsTitle: 'What our clients say',
    reviewsLabel: 'Client reviews',
    allReviewsBtn: 'See all Google reviews →',
    verifiedLabel: 'Verified Google review'
  },
  cz: {
    label: 'Ověřený projekt', 
    viewBtn: 'Zobrazit web klienta →',
    beforeLabel: 'PŘED',
    afterLabel: 'PO',
    beforeTitle: 'Jen Instagram',
    afterTitle: 'Reálný prodejní web: montwell.sk',
    beforePoints: ['Mají pouze Instagram profil', 'Žádný web', 'Těžko dohledatelní na Google'],
    afterPoints: ['Profesionální web', 'Galerie realizací', 'Klienti je dnes najdou přes Google vyhledávání', 'První poptávky už v prvních týdnech'],
    result: '🎯 Montwell.sk spuštěn do 5 dnů · prodejní web, který buduje důvěru a generuje poptávky',
    subImageText: 'Reálný výsledek práce s klientem — bez šablon',
    reviewText: 'Super služby! Jsem velmi spokojený.',
    reviewsTitle: 'Co říkají klienti',
    reviewsLabel: 'Hodnocení klientů',
    allReviewsBtn: 'Zobrazit všechna hodnocení →',
    verifiedLabel: 'Ověřená recenze Google'
  },
  sk: {
    label: 'Overený projekt',
    viewBtn: 'Pozrieť web klienta →',
    beforeLabel: 'PRED',
    afterLabel: 'PO',
    beforeTitle: 'Len Instagram',
    afterTitle: 'Reálny predajný web: montwell.sk',
    beforePoints: ['Majú len Instagram profil', 'Žiadny web', 'Ťažko nájdateľní na Google'],
    afterPoints: ['Profesionálny web', 'Galéria realizácií', 'Klienti ich dnes nájdu cez Google vyhľadávanie', 'Prvé dopyty a objednávky už v prvých týždňoch'],
    result: '🎯 Montwell.sk spustený do 5 dní · predajný web, ktorý buduje dôveru a generuje kontakty',
    subImageText: 'Reálny výsledok práce s klientom — bez šablón',
    reviewText: 'Super služby! Som veľmi spokojný.',
    reviewsTitle: 'Čo hovoria klienti',
    reviewsLabel: 'Hodnotenia klientov',
    allReviewsBtn: 'Pozrieť všetky Google hodnotenia →',
    verifiedLabel: 'Overená recenzia Google'
  }
};

export default function CaseStudySection({ t, lang }) {
  const localT = translations[lang] || translations.sk;

  return (
    <div id="reviews" style={{ background: C.bg, padding: '96px 40px', borderBottom: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* ── CASE STUDY HEADER ── */}
        <p className="section-label">{t.caseStudyLabel || 'Case Study'}</p>
        <h2 style={{ fontSize: 'clamp(28px, 3vw, 36px)', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: 48 }}>
          {t.caseStudyTitle || localT.label}
        </h2>

        {/* ── MONTWELL PRED / PO ── */}
        <div className="card" style={{ padding: 32, marginBottom: 24 }}>
          <div className="montwell-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'stretch', marginBottom: 28 }}>
            
            <div style={{ borderRadius: 12, overflow: 'hidden', border: `1px solid ${C.border}` }}>
              <a href="https://montwell.sk" target="_blank" rel="noopener noreferrer">
                <img src={montwellImg} alt="Montwell webstránka" width="600" height="324" style={{ width: '100%', display: 'block', height: 'auto' }} loading="lazy" />
              </a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>              
              <p style={{ fontSize: 14, color: C.textSub, marginBottom: 12 }}>
                {localT.subImageText}
              </p>
              <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 20 }}>Montwell</h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, flexGrow: 1, alignItems: 'stretch' }}>
                {/* PRED */}
                <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 12, padding: '20px 18px', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'inline-block', background: '#FEE2E2', color: '#991B1B', padding: '2px 10px', borderRadius: 100, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 14, alignSelf: 'flex-start' }}>
                    {localT.beforeLabel}
                  </div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 16 }}>{localT.beforeTitle}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flexGrow: 1, justifyContent: 'center' }}>
                    {localT.beforePoints.map((pt, index) => (
                      <div key={index} style={{ fontSize: 13, color: C.textSub, display: 'flex', gap: 8, alignItems: 'center' }}>
                        <span style={{ color: '#B91C1C', fontWeight: 700, flexShrink: 0 }}>✕</span> {pt}
                      </div>
                    ))}
                  </div>
                </div>

                {/* PO */}
                <div style={{ background: '#F0FDF4', border: '1.5px solid #86EFAC', borderRadius: 12, padding: '20px 18px', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'inline-block', background: '#DCFCE7', color: '#166534', padding: '2px 10px', borderRadius: 100, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 14, alignSelf: 'flex-start' }}>
                    {localT.afterLabel}
                  </div>
                  <p style={{ fontSize: 14, fontWeight: 700, marginBottom: 16 }}>
                    <a href="https://montwell.sk" target="_blank" rel="noopener noreferrer" style={{ color: C.blue, textDecoration: 'none' }}>
                      {localT.afterTitle} ↗
                    </a>
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flexGrow: 1, justifyContent: 'center' }}>
                    {localT.afterPoints.map((pt, index) => (
                      <div key={index} style={{ fontSize: 13, color: '#166534', display: 'flex', gap: 8, alignItems: 'center' }}>
                        <span style={{ color: C.green, fontWeight: 700, flexShrink: 0 }}>✓</span> {pt}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Result bar */}
          <div style={{ background: 'rgba(37,99,235,0.05)', border: `1px solid rgba(37,99,235,0.15)`, borderRadius: 12, padding: '14px 20px' }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: C.blue }}>{localT.result}</span>
          </div>
        </div>

        {/* ── REVIEWS ── */}
        <p style={{ fontSize: 12, fontWeight: 600, color: C.textSub, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16, marginTop: 48 }}>
          {localT.reviewsLabel}
        </p>
        <h3 style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: 24 }}>
          {localT.reviewsTitle}
        </h3>

        <style>{`.google-cta-card:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(0,0,0,0.08); }`}</style>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 24 }}>
          
          {/* Single real review */}
          <div className="card card-hover" style={{ display: 'flex', flexDirection: 'column', gap: 12, transition: 'all .2s', border: '1px solid #E5E7EB', borderRadius: 16, background: '#fff', padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div style={{ color: '#FBBF24', fontSize: 14, letterSpacing: 1 }}>★★★★★</div>
            </div>
            
            <p style={{ fontSize: 15, color: C.text, lineHeight: 1.7, fontStyle: 'italic', flexGrow: 1 }}>
              „{localT.reviewText}“
            </p>
            
            <div>
              <p style={{ fontWeight: 700, color: C.text, fontSize: 14 }}>Matus K.</p>
              <p style={{ fontSize: 12, color: C.textSub, marginTop: 2 }}>{localT.verifiedLabel}</p>
            </div>
          </div>

          {/* CTA card — more reviews on Google */}
          <a href={GOOGLE_REVIEW_LINK} target="_blank" rel="noopener noreferrer" className="card google-cta-card"
            style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, background: C.white, border: `1px solid ${C.border}`, borderRadius: 16, padding: '32px 24px', cursor: 'pointer', transition: 'all .2s' }}
          >
            <div style={{ fontSize: 32 }}>⭐</div>
            <p style={{ fontSize: 15, fontWeight: 600, color: C.text, textAlign: 'center', lineHeight: 1.4 }}>
              {localT.allReviewsBtn}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span style={{ fontSize: 13, color: C.blue, fontWeight: 600 }}>Google Business</span>
            </div>
          </a>

        </div>

      </div>
    </div>
  );
}
