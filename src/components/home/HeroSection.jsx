import { C } from '../../lib/constants';
import montwellImg from '../../assets/montwell-preview.webp';
import { Link } from 'react-router-dom';

export default function HeroSection({ t, lang, onCta }) {
  return (
    <div style={{ background: C.white, borderBottom: `1px solid ${C.border}`, padding: '96px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>        
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
          {/* RIGHT — verified client work */}
          <div className="hero-right" style={{ background: C.bg, borderRadius: 20, padding: 20, border: `1px solid ${C.border}` }}>
            <img src={montwellImg} alt="Montwell webstránka" width="600" height="324" fetchPriority="high" style={{ width: '100%', display: 'block', aspectRatio: '600 / 324', objectFit: 'cover', borderRadius: 12, marginBottom: 16 }} />
            <p style={{ fontSize: 12, color: C.blue, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 8 }}>
              {lang === 'en' ? 'Real client work' : lang === 'cz' ? 'Reálná realizace' : 'Reálna realizácia'}
            </p>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: C.text, marginBottom: 12 }}>Montwell.sk</h2>
            <p style={{ fontSize: 14, color: C.textSub, lineHeight: 1.6, marginBottom: 16 }}>
              {lang === 'en' ? 'SK + DE website · project gallery · SEO-ready blog' : lang === 'cz' ? 'SK + DE web · galerie realizací · blog připravený pro SEO' : 'SK + DE web · galéria realizácií · blog pripravený pre SEO'}
            </p>
            <Link to="/blog/spolupraca-s-montwell-webstranka" style={{ color: C.blue, fontWeight: 700, textDecoration: 'none', fontSize: 14 }}>
              {lang === 'en' ? 'Read the full Montwell story →' : lang === 'cz' ? 'Přečíst celý příběh Montwell →' : 'Prečítať celý príbeh Montwell →'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
