import { useState, lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { FaWhatsapp, FaFacebookF } from 'react-icons/fa';
import logoImg from './assets/logo.webp';
import skDefault from './i18n/sk.js';

const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Web299 = lazy(() => import('./pages/Web299'));

const API = 'https://webklienti-backend.onrender.com';

const staticReviews = [
  { author: 'Marek Novák', company: 'Novák & syn s.r.o.', text: 'Web bol hotový rýchlo a začali chodiť dopyty. Odporúčam každému, kto chce zákazníkov z Google.', rating: 5 },
  { author: 'Jana Kováčová', company: 'Kaderníctvo Jana', text: 'Jednoduchý proces, skvelá komunikácia. Zákazníci mi hovoria, že web vyzerá profesionálne.', rating: 5 },
  { author: 'Peter Horváth', company: 'AutoServis Horváth', text: 'Rýchlo, spoľahlivo a za rozumnú cenu. Prvé dopyty prišli už po spustení.', rating: 5 },
];

const caseStudies = [
  {
    name: 'Montwell',
    url: 'https://montwell.sk/',
    tag: 'Montáž & výroba nábytku',
    problem: 'Žiadny profesionálny web — zákazníci ich nenachádzali online, nulové Google dopyty',
    solution: 'Moderný firemný web s galériou realizácií, SEO základom a kontaktným formulárom',
    result: 'Prvé dopyty do 48 hodín od spustenia · +120% online viditeľnosť · zákazníci začali prichádzať hneď po spustení',
    color: '#1a1a1a',
  },
];

function HomePage() {
  const [lang, setLang] = useState('sk');
  const [t, setT] = useState(skDefault);
  const [form, setForm] = useState({ name: '', email: '', phone: '', package: '', message: '', consent: false });
  const [formStatus, setFormStatus] = useState('idle');
  const [cookieVisible, setCookieVisible] = useState(() => !localStorage.getItem('wk_cookie'));
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    if (lang === 'sk') {
      setT(skDefault);
      return;
    }
    import(`./i18n/${lang}.js`).then((m) => setT(m.default));
  }, [lang]);

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.package) {
      alert(lang === 'en' ? 'Please fill in name, email and select a plan' : lang === 'cz' ? 'Vyplňte jméno, email a vyberte balíček' : 'Vyplňte meno, email a vyberte balík');
      return;
    }
    if (!form.consent) { alert(t.consentError); return; }
    setFormStatus('loading');
    try {
      const res = await fetch(`${API}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, lang }),
      });
      const data = await res.json();
      if (data.success) {
        setFormStatus('success');
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: 'form_submit_success' });
        setForm({ name: '', email: '', phone: '', package: '', message: '', consent: false });
      } else { setFormStatus('error'); }
    } catch { setFormStatus('error'); }
  };

  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); };
  const acceptCookies = () => { localStorage.setItem('wk_cookie', '1'); setCookieVisible(false); };
  const declineCookies = () => { localStorage.setItem('wk_cookie', '0'); setCookieVisible(false); };
  const navIds = ['pricing', 'reviews', 'contact'];

  const langBtn = (code) => ({
    background: lang === code ? 'rgba(255,210,0,0.2)' : 'rgba(255,255,255,0.1)',
    border: lang === code ? '1px solid rgba(255,210,0,0.7)' : '1px solid rgba(255,255,255,0.2)',
    color: lang === code ? '#ffd200' : 'rgba(245,242,235,0.7)',
    padding: '4px 10px', borderRadius: 6, fontSize: 12, fontWeight: 700,
    cursor: 'pointer', transition: 'all .2s', letterSpacing: 1,
  });

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: '#f5f2eb', color: '#1a1a1a', minHeight: '100vh' }}>

      {/* ── NAV ── */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(26,26,26,0.97)', backdropFilter: 'blur(8px)', padding: '0 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 64 }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src={logoImg} alt="WebKlienti logo" style={{ height: 44, width: 44, objectFit: 'contain', mixBlendMode: 'screen' }} />
          <span style={{ fontWeight: 800, fontSize: 18, color: '#f5f2eb', letterSpacing: -0.5 }}>Web<span style={{ color: '#ffd200' }}>Klienti</span></span>
        </Link>
        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }} className="desktop-nav">
          {t.nav.map((label, i) => (
            <button key={i} onClick={() => scrollTo(navIds[i])} style={{ background: 'none', border: 'none', color: 'rgba(245,242,235,0.7)', cursor: 'pointer', fontSize: 14, fontWeight: 500 }}>{label}</button>
          ))}
          <Link to="/blog" style={{ color: 'rgba(245,242,235,0.7)', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>Blog</Link>
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }} className="desktop-nav">
          <div style={{ display: 'flex', gap: 4 }}>
            {['sk', 'cz', 'en'].map(code => (
              <button key={code} onClick={() => setLang(code)} style={langBtn(code)}>{code.toUpperCase()}</button>
            ))}
          </div>
          <button onClick={() => scrollTo('contact')} style={{ background: '#ffd200', color: '#1a1a1a', border: 'none', padding: '8px 20px', borderRadius: 100, fontSize: 13, fontWeight: 700, cursor: 'pointer', marginLeft: 4, whiteSpace: 'nowrap' }}>
            {t.navOrder}
          </button>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger" style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8, flexDirection: 'column', gap: 5 }}>
          <span style={{ display: 'block', width: 24, height: 2, background: menuOpen ? '#ffd200' : '#f5f2eb', transition: 'all .3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
          <span style={{ display: 'block', width: 24, height: 2, background: menuOpen ? 'transparent' : '#f5f2eb', transition: 'all .3s' }}></span>
          <span style={{ display: 'block', width: 24, height: 2, background: menuOpen ? '#ffd200' : '#f5f2eb', transition: 'all .3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
        </button>
      </nav>

      {menuOpen && (
        <div style={{ position: 'fixed', top: 64, left: 0, right: 0, zIndex: 99, background: 'rgba(26,26,26,0.98)', padding: '20px 40px', display: 'flex', flexDirection: 'column', gap: 16, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          {t.nav.map((label, i) => (
            <button key={i} onClick={() => scrollTo(navIds[i])} style={{ background: 'none', border: 'none', color: 'rgba(245,242,235,0.9)', cursor: 'pointer', fontSize: 18, fontWeight: 600, textAlign: 'left', padding: '8px 0' }}>{label}</button>
          ))}
          <Link to="/blog" onClick={() => setMenuOpen(false)} style={{ color: 'rgba(245,242,235,0.9)', textDecoration: 'none', fontSize: 18, fontWeight: 600, padding: '8px 0' }}>Blog</Link>
          <div style={{ display: 'flex', gap: 8, paddingTop: 8 }}>
            {['sk', 'cz', 'en'].map(code => (<button key={code} onClick={() => setLang(code)} style={langBtn(code)}>{code.toUpperCase()}</button>))}
          </div>
          <button onClick={() => scrollTo('contact')} style={{ background: '#ffd200', color: '#1a1a1a', border: 'none', padding: '12px 20px', borderRadius: 100, fontSize: 16, fontWeight: 700, cursor: 'pointer', marginTop: 8 }}>{t.navOrder}</button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
          .hero-ctas { flex-direction: column !important; align-items: center !important; }
          .stats-row { gap: 24px !important; }
          .problem-grid { grid-template-columns: 1fr 1fr !important; }
          .solution-grid { grid-template-columns: 1fr 1fr !important; }
          .process-grid { grid-template-columns: 1fr 1fr !important; }
          .cases-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .problem-grid { grid-template-columns: 1fr !important; }
          .solution-grid { grid-template-columns: 1fr !important; }
          .process-grid { grid-template-columns: 1fr !important; }
          .stats-row { flex-direction: column !important; align-items: center !important; }
        }
        .faq-item { border-bottom: 1px solid rgba(255,255,255,0.08); }
        .faq-item:last-child { border-bottom: none; }
        .card-hover { transition: transform 0.2s, box-shadow 0.2s; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(0,0,0,0.15); }
        .trust-pill { white-space: nowrap; }
        @media (max-width: 768px) { .prob-sol-grid { grid-template-columns: 1fr !important; } }
      `}</style>

      <main>
        {/* ── HERO ── */}
        <div style={{ background: '#1a1a1a', color: '#f5f2eb', padding: '72px 40px 88px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,210,0,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,210,0,0.025) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
          <div style={{ maxWidth: 720, margin: '0 auto', position: 'relative' }}>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 32 }}>
              {t.heroBadges.map(b => (<span key={b} className="trust-pill" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', padding: '6px 14px', borderRadius: 100, fontSize: 12, color: 'rgba(245,242,235,0.6)' }}>{b}</span>))}
            </div>
            <h1 style={{ fontSize: 'clamp(36px, 7vw, 72px)', fontWeight: 900, lineHeight: 1.06, letterSpacing: -3, marginBottom: 20 }}>
              {t.heroTitle[0]}<br />
              <span style={{ color: '#ffd200' }}>{t.heroTitle[1]}</span><br />
              {t.heroTitle[2]}
            </h1>
            <div style={{ display: 'inline-flex', alignItems: 'baseline', gap: 10, background: '#ffd200', color: '#1a1a1a', padding: '10px 32px', borderRadius: 14, marginBottom: 24 }}>
              <span style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900, letterSpacing: -2 }}>od 299 €</span>
              <span style={{ fontSize: 15, fontWeight: 600, opacity: 0.55, textDecoration: 'line-through' }}>599 €</span>
            </div>
            <p style={{ fontSize: 17, color: 'rgba(245,242,235,0.5)', marginBottom: 36, lineHeight: 1.65, maxWidth: 520, margin: '0 auto 36px' }}>{t.heroSub}</p>
            <div className="hero-ctas" style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 48, flexWrap: 'wrap' }}>
              <Link to="/web-299" style={{ background: '#ffd200', color: '#1a1a1a', padding: '17px 40px', borderRadius: 100, fontWeight: 800, fontSize: 17, textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>{t.heroCta}</Link>
              <button onClick={() => scrollTo('reviews')} style={{ background: 'transparent', color: 'rgba(245,242,235,0.7)', border: '1.5px solid rgba(255,255,255,0.15)', padding: '17px 28px', borderRadius: 100, fontWeight: 600, fontSize: 16, cursor: 'pointer' }}>{t.heroCtaSec}</button>
            </div>
            <div className="stats-row" style={{ display: 'flex', gap: 48, justifyContent: 'center', paddingTop: 36, borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              {[['80+', t.statClients], ['3×', t.statLeads], ['5 dní', t.statDays]].map(([val, label]) => (
                <div key={label}>
                  <div style={{ fontSize: 38, fontWeight: 900, color: '#ffd200', letterSpacing: -2 }}>{val}</div>
                  <div style={{ fontSize: 12, color: 'rgba(245,242,235,0.4)', marginTop: 4 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── TRUST STRIP ── */}
        <div style={{ background: '#ffd200', padding: '14px 40px', overflow: 'hidden' }}>
          <div style={{ display: 'flex', gap: 48, justifyContent: 'center', flexWrap: 'wrap' }}>
            {t.trustStrip.map(item => (
              <span key={item} style={{ fontSize: 13, fontWeight: 700, color: '#1a1a1a', letterSpacing: 1, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>● {item}</span>
            ))}
          </div>
        </div>

        {/* ── PROBLEM + SOLUTION ── */}
        <div style={{ padding: '64px 40px', background: '#f5f2eb' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start' }} className="prob-sol-grid">
            <div>
              <p style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#e24b4a', marginBottom: 10, fontWeight: 700 }}>{t.problemLabel}</p>
              <h2 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 900, letterSpacing: -1.5, marginBottom: 24, lineHeight: 1.15 }}>{t.problemTitle}</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {t.problems.map((p) => (
                  <div key={p.text} style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#fff', border: '1px solid #eee', borderRadius: 12, padding: '14px 18px' }}>
                    <span style={{ fontSize: 22, flexShrink: 0 }}>{p.icon}</span>
                    <span style={{ fontSize: 14, fontWeight: 600, color: '#333' }}>{p.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: '#1a1a1a', borderRadius: 24, padding: '36px 32px' }}>
              <p style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#ffd200', marginBottom: 10, fontWeight: 700 }}>{t.solutionLabel}</p>
              <h2 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 900, letterSpacing: -1.5, color: '#f5f2eb', marginBottom: 24, lineHeight: 1.15 }}>{t.solutionTitle}</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {t.solutions.map((s) => (
                  <div key={s.title} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ fontSize: 20, flexShrink: 0 }}>{s.icon}</span>
                    <div>
                      <span style={{ fontSize: 14, fontWeight: 700, color: '#f5f2eb' }}>{s.title}</span>
                      <span style={{ fontSize: 13, color: 'rgba(245,242,235,0.4)', marginLeft: 6 }}>— {s.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/web-299" style={{ display: 'inline-block', marginTop: 28, background: '#ffd200', color: '#1a1a1a', padding: '13px 32px', borderRadius: 100, fontWeight: 800, fontSize: 15, textDecoration: 'none' }}>{t.heroCta}</Link>
            </div>
          </div>
        </div>

        {/* ── CASE STUDIES ── */}
        <div style={{ padding: '80px 40px', background: '#f5f2eb' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <p style={{ fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', color: '#888', marginBottom: 12, fontWeight: 700 }}>{t.casesLabel}</p>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 900, letterSpacing: -2, marginBottom: 48 }}>{t.casesTitle}</h2>
            <div className="cases-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
              {caseStudies.map((c) => (
                <div key={c.name} className="card-hover" style={{ background: '#1a1a1a', borderRadius: 24, padding: '40px 36px', color: '#f5f2eb' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 }}>
                    <div>
                      <h3 style={{ fontSize: 22, fontWeight: 800, color: '#ffd200', marginBottom: 4 }}>{c.name}</h3>
                      <span style={{ fontSize: 12, color: 'rgba(245,242,235,0.4)', letterSpacing: 1, textTransform: 'uppercase' }}>{c.tag}</span>
                    </div>
                    <a href={c.url} target="_blank" rel="noopener noreferrer" style={{ background: 'rgba(255,210,0,0.15)', border: '1px solid rgba(255,210,0,0.3)', color: '#ffd200', padding: '8px 16px', borderRadius: 100, fontSize: 13, fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>{t.casesBtn}</a>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {[
                      { label: t.casesProblem, text: c.problem, color: '#e24b4a' },
                      { label: t.casesSolution, text: c.solution, color: '#ffd200' },
                      { label: t.casesResult, text: c.result, color: '#4ade80' },
                    ].map(row => (
                      <div key={row.label} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: row.color, minWidth: 64, paddingTop: 2 }}>{row.label}</span>
                        <span style={{ fontSize: 14, color: 'rgba(245,242,235,0.7)', lineHeight: 1.5 }}>{row.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── PRICING ── */}
        <div id="pricing" style={{ padding: '80px 40px', background: '#fff' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <p style={{ fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', color: '#888', marginBottom: 12, fontWeight: 700 }}>{t.pricingLabel}</p>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 900, letterSpacing: -2, marginBottom: 16 }}>{t.pricingTitle}</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 48, flexWrap: 'wrap' }}>
              <div style={{ display: 'inline-flex', alignItems: 'baseline', gap: 8, background: '#1a1a1a', color: '#ffd200', padding: '10px 28px', borderRadius: 14 }}>
                <span style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, letterSpacing: -2 }}>od 299 €</span>
                <span style={{ fontSize: 14, color: 'rgba(245,242,235,0.4)', textDecoration: 'line-through' }}>599 €</span>
              </div>
              <span style={{ fontSize: 14, color: '#888' }}>· {t.heroBadges[2]} · {t.heroBadges[3]}</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 0, alignItems: 'stretch' }}>
              {t.cards.map((card, i) => (
                <div key={i} className="card-hover" style={{ background: card.featured ? '#1a1a1a' : '#f8f8f6', color: card.featured ? '#f5f2eb' : '#1a1a1a', padding: '40px 32px', borderRadius: i === 0 ? '24px 0 0 24px' : i === 2 ? '0 24px 24px 0' : 0, position: 'relative', display: 'flex', flexDirection: 'column', border: card.featured ? '2px solid #ffd200' : '1px solid #eee' }}>
                  {card.featured && <div style={{ position: 'absolute', top: -15, left: '50%', transform: 'translateX(-50%)', background: '#ffd200', color: '#1a1a1a', padding: '5px 18px', borderRadius: 100, fontSize: 11, fontWeight: 800, whiteSpace: 'nowrap', letterSpacing: 1 }}>{t.featuredBadge}</div>}
                  <p style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: card.featured ? 'rgba(245,242,235,0.4)' : '#aaa', marginBottom: 10 }}>{card.tag}</p>
                  <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 4 }}>{card.name}</h3>
                  <div style={{ fontSize: 52, fontWeight: 900, letterSpacing: -2, margin: '14px 0 4px', color: card.featured ? '#ffd200' : '#1a1a1a' }}>{card.price}</div>
                  <p style={{ fontSize: 13, textDecoration: 'line-through', color: card.featured ? 'rgba(245,242,235,0.3)' : '#ccc', marginBottom: 24 }}>{card.old}</p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, flexGrow: 1, marginBottom: 28 }}>
                    {card.features.map(f => (<li key={f} style={{ fontSize: 14, color: card.featured ? 'rgba(245,242,235,0.7)' : '#555', display: 'flex', gap: 8 }}><span style={{ color: '#ffd200', fontWeight: 700, flexShrink: 0 }}>✓</span>{f}</li>))}
                  </ul>
                  <button onClick={() => { setForm(p => ({ ...p, package: card.name + ' — ' + card.price })); scrollTo('contact'); }} style={{ width: '100%', padding: '13px', borderRadius: 100, fontSize: 15, fontWeight: 800, cursor: 'pointer', background: card.featured ? '#ffd200' : 'transparent', color: '#1a1a1a', border: card.featured ? 'none' : '2px solid #1a1a1a' }}>{t.orderBtn}</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── HOW IT WORKS ── */}
        <div style={{ background: '#1a1a1a', padding: '80px 40px' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <p style={{ fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', color: '#666', marginBottom: 12, fontWeight: 700 }}>{t.howLabel}</p>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 900, letterSpacing: -2, color: '#f5f2eb', marginBottom: 56 }}>{t.howTitle}</h2>
            <div className="process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
              {t.steps.map((s, i) => (
                <div key={i} style={{ padding: '36px 28px', background: 'rgba(255,255,255,0.03)', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none', borderRadius: i === 0 ? '20px 0 0 20px' : i === 3 ? '0 20px 20px 0' : 0 }}>
                  <div style={{ fontSize: 44, fontWeight: 900, color: '#ffd200', lineHeight: 1, marginBottom: 20, opacity: 0.8 }}>{s.num}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: '#f5f2eb', marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(245,242,235,0.45)', lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── REVIEWS ── */}
        <div id="reviews" style={{ background: '#f5f2eb', padding: '80px 40px' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <p style={{ fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', color: '#888', marginBottom: 12, fontWeight: 700 }}>{t.reviewsLabel}</p>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 900, letterSpacing: -2, marginBottom: 48 }}>{t.reviewsTitle}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
              {staticReviews.map((r, i) => (
                <div key={i} className="card-hover" style={{ background: '#fff', border: '1.5px solid #eee', borderRadius: 20, padding: '32px 28px' }}>
                  <div style={{ color: '#ffd200', fontSize: 16, marginBottom: 14 }}>{'★'.repeat(r.rating)}</div>
                  <p style={{ fontSize: 15, color: '#444', lineHeight: 1.7, marginBottom: 24 }}>"{r.text}"</p>
                  <div>
                    <p style={{ fontWeight: 700, color: '#1a1a1a', fontSize: 14 }}>{r.author}</p>
                    {r.company && <p style={{ fontSize: 13, color: '#888' }}>{r.company}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── FREE OFFER BANNER ── */}
        <div style={{ background: '#ffd200', padding: '60px 40px' }}>
          <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(26,26,26,0.5)', marginBottom: 12, fontWeight: 700 }}>{t.offerLabel}</p>
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 900, letterSpacing: -1.5, color: '#1a1a1a', marginBottom: 28 }}>{t.offerTitle}</h2>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 36 }}>
              {t.offerItems.map(item => (
                <div key={item} style={{ background: 'rgba(26,26,26,0.08)', borderRadius: 12, padding: '10px 20px', fontSize: 14, fontWeight: 600, color: '#1a1a1a' }}>✓ {item}</div>
              ))}
            </div>
            <Link to='/web-299' style={{ background: '#1a1a1a', color: '#ffd200', border: 'none', padding: '16px 40px', borderRadius: 100, fontSize: 17, fontWeight: 800, cursor: 'pointer', textDecoration: 'none', display: 'inline-block' }}>{t.offerCta}</Link>
          </div>
        </div>

        {/* ── FAQ ── */}
        <div style={{ padding: '80px 40px', background: '#1a1a1a' }}>
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <p style={{ fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', color: '#666', marginBottom: 12, fontWeight: 700 }}>{t.faqLabel}</p>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 900, letterSpacing: -2, color: '#f5f2eb', marginBottom: 40 }}>{t.faqTitle}</h2>
            <div>
              {t.faqs.map((faq, i) => (
                <div key={i} className="faq-item">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, textAlign: 'left' }}>
                    <span style={{ fontSize: 16, fontWeight: 600, color: '#f5f2eb' }}>{faq.q}</span>
                    <span style={{ color: '#ffd200', fontSize: 20, fontWeight: 300, flexShrink: 0, transition: 'transform 0.2s', transform: openFaq === i ? 'rotate(45deg)' : 'none' }}>+</span>
                  </button>
                  {openFaq === i && (
                    <p style={{ fontSize: 15, color: 'rgba(245,242,235,0.55)', lineHeight: 1.7, paddingBottom: 20, marginTop: -4 }}>{faq.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── FINAL CTA ── */}
        <div style={{ background: '#f5f2eb', padding: '80px 40px', textAlign: 'center' }}>
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: 900, letterSpacing: -2, marginBottom: 12, lineHeight: 1.1 }}>{t.finalCta}</h2>
            <p style={{ color: '#888', marginBottom: 32, fontSize: 16 }}>Ozveme sa vám do 24 hodín. Bez záväzkov.</p>
            <Link to='/web-299' style={{ background: '#1a1a1a', color: '#ffd200', padding: '18px 48px', borderRadius: 100, fontSize: 18, fontWeight: 800, cursor: 'pointer', textDecoration: 'none', display: 'inline-block' }}>{t.finalCtaBtn}</Link>
          </div>
        </div>

        {/* ── CONTACT FORM ── */}
        <div id="contact" style={{ padding: '80px 40px', maxWidth: 680, margin: '0 auto' }}>
          <p style={{ fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', color: '#888', marginBottom: 12, fontWeight: 700 }}>{t.formLabel}</p>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 900, letterSpacing: -2, marginBottom: 12 }}>{t.formTitle}</h2>
          <p style={{ color: '#888', marginBottom: 40, fontSize: 16 }}>{t.formSub}</p>
          {formStatus === 'success' ? (
            <div style={{ background: '#1a1a1a', color: '#f5f2eb', borderRadius: 24, padding: '60px 40px', textAlign: 'center' }}>
              <div style={{ fontSize: 56, marginBottom: 16 }}>🎉</div>
              <h3 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12 }}>{t.successTitle}</h3>
              <p style={{ color: 'rgba(245,242,235,0.6)', fontSize: 16 }}>{t.successMsg}</p>
              <button onClick={() => setFormStatus('idle')} style={{ marginTop: 32, background: '#ffd200', color: '#1a1a1a', border: 'none', padding: '12px 28px', borderRadius: 100, fontWeight: 700, cursor: 'pointer' }}>{t.newOrder}</button>
            </div>
          ) : (
            <div style={{ background: '#fff', borderRadius: 24, padding: '44px 40px', display: 'flex', flexDirection: 'column', gap: 20, boxShadow: '0 4px 40px rgba(0,0,0,0.07)' }}>
              {t.fields.map(f => (
                <div key={f.key}>
                  <label htmlFor={`field-${f.key}`} style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 8, color: '#444' }}>{f.label}</label>
                  <input id={`field-${f.key}`} type={f.type} placeholder={f.placeholder} value={form[f.key]} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))} style={{ width: '100%', padding: '12px 16px', border: '1.5px solid #e8e8e8', borderRadius: 12, fontSize: 15, outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box', transition: 'border-color 0.2s' }} />
                </div>
              ))}
              <div>
                <label htmlFor="field-package" style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 8, color: '#444' }}>{t.packageLabel}</label>
                <select id="field-package" value={form.package} onChange={e => setForm(p => ({ ...p, package: e.target.value }))} style={{ width: '100%', padding: '12px 16px', border: '1.5px solid #e8e8e8', borderRadius: 12, fontSize: 15, outline: 'none', fontFamily: 'inherit', background: '#fff' }}>
                  <option value="">{t.packagePlaceholder}</option>
                  {t.packages.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="field-message" style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 8, color: '#444' }}>{t.messageLabel}</label>
                <textarea id="field-message" placeholder={t.messagePlaceholder} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} rows={4} style={{ width: '100%', padding: '12px 16px', border: '1.5px solid #e8e8e8', borderRadius: 12, fontSize: 15, outline: 'none', fontFamily: 'inherit', resize: 'vertical', boxSizing: 'border-box' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <input id="field-consent" type="checkbox" checked={form.consent} onChange={e => setForm(p => ({ ...p, consent: e.target.checked }))} style={{ marginTop: 3, width: 16, height: 16, cursor: 'pointer', accentColor: '#1a1a1a', flexShrink: 0 }} />
                <label htmlFor="field-consent" style={{ fontSize: 13, color: '#666', lineHeight: 1.5, cursor: 'pointer' }}>
                  {t.consentLabel}{' '}
                  <button type="button" onClick={() => setPrivacyOpen(true)} style={{ background: 'none', border: 'none', color: '#1a1a1a', cursor: 'pointer', fontSize: 13, textDecoration: 'underline', padding: 0, fontWeight: 600 }}>{t.consentLink}</button>{' *'}
                </label>
              </div>
              {formStatus === 'error' && <p style={{ color: '#e24b4a', fontSize: 14 }} role="alert">{t.errorMsg}</p>}
              <button onClick={handleSubmit} disabled={formStatus === 'loading' || !form.consent} style={{ background: form.consent ? '#1a1a1a' : '#d0cec9', color: form.consent ? '#ffd200' : '#a09d98', border: 'none', padding: '16px', borderRadius: 100, fontSize: 16, fontWeight: 700, cursor: form.consent ? 'pointer' : 'not-allowed', opacity: formStatus === 'loading' ? 0.7 : 1, transition: 'background 0.2s, color 0.2s' }}>
                {formStatus === 'loading' ? t.submitting : t.submitBtn}
              </button>
            </div>
          )}
        </div>
      </main>

      {/* ── FLOATING BUTTONS ── */}
      <div style={{ position: 'fixed', right: 20, bottom: 20, display: 'flex', flexDirection: 'column', gap: 12, zIndex: 999 }}>
        <a href="https://wa.me/421907890600" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={{ width: 56, height: 56, background: '#25D366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 24, boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}><FaWhatsapp /></a>
        <a href="https://facebook.com/profile.php?id=61588797397714" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ width: 56, height: 56, background: '#1877F2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 22, boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}><FaFacebookF /></a>
      </div>

      {/* ── FOOTER ── */}
      <footer id="footer" style={{ background: '#111', color: 'rgba(245,242,235,0.35)', textAlign: 'center', padding: '48px 40px', fontSize: 13 }}>
        <img src={logoImg} alt="WebKlienti logo" style={{ height: 40, width: 40, objectFit: 'contain', marginBottom: 16, mixBlendMode: 'screen' }} />
        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', marginBottom: 14, flexWrap: 'wrap' }}>
          <a href="mailto:info@webklienti.com" style={{ color: 'rgba(245,242,235,0.55)', textDecoration: 'none' }}>info@webklienti.com</a>
          <a href="tel:+421907890600" style={{ color: 'rgba(245,242,235,0.55)', textDecoration: 'none' }}>+421 907 890 600</a>
          <span style={{ color: 'rgba(245,242,235,0.25)' }}>webklienti.com</span>
        </div>
        <div style={{ marginBottom: 16, lineHeight: 1.9, color: 'rgba(245,242,235,0.25)' }}>
          <p style={{ margin: 0 }}>Ing. Anastasiia Sheben · Ulica Mozartova 5652/12 · 917 08 Trnava · Slovensko</p>
          <p style={{ margin: 0 }}>IČO: 56360495 · DIČ: 1087134598 · Číslo živnostenského registra: 250-58651</p>
        </div>
        <div style={{ marginBottom: 10 }}>
          <button onClick={() => setPrivacyOpen(true)} style={{ background: 'none', border: 'none', color: 'rgba(245,242,235,0.35)', cursor: 'pointer', fontSize: 13, textDecoration: 'underline' }}>{t.privacyLink}</button>
        </div>
        <p style={{ margin: 0 }}>{t.footerRights}</p>
      </footer>

      {/* ── COOKIE ── */}
      {cookieVisible && (
        <div role="dialog" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9999, background: '#1a1a1a', borderTop: '1px solid rgba(255,255,255,0.1)', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: 'rgba(245,242,235,0.75)', fontSize: 14, margin: 0, flex: 1 }}>
            🍪 {t.cookieMsg}{' '}
            <button onClick={() => setPrivacyOpen(true)} style={{ background: 'none', border: 'none', color: '#ffd200', cursor: 'pointer', fontSize: 14, textDecoration: 'underline', padding: 0 }}>{t.privacyLink}</button>
          </p>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={declineCookies} style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(245,242,235,0.6)', padding: '8px 16px', borderRadius: 100, fontSize: 13, cursor: 'pointer' }}>{t.cookieDecline}</button>
            <button onClick={acceptCookies} style={{ background: '#ffd200', border: 'none', color: '#1a1a1a', padding: '8px 20px', borderRadius: 100, fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>{t.cookieAccept}</button>
          </div>
        </div>
      )}

      {/* ── PRIVACY MODAL ── */}
      {privacyOpen && (
        <div role="dialog" aria-modal="true" style={{ position: 'fixed', inset: 0, zIndex: 10000, background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
          <div style={{ background: '#fff', borderRadius: 16, padding: '40px', maxWidth: 600, width: '100%', maxHeight: '80vh', overflowY: 'auto', position: 'relative' }}>
            <button onClick={() => setPrivacyOpen(false)} style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', fontSize: 24, cursor: 'pointer', color: '#888' }}>✕</button>
            <h2 style={{ fontWeight: 800, fontSize: 22, marginBottom: 24 }}>{t.privacyTitle}</h2>
            <pre style={{ whiteSpace: 'pre-wrap', fontSize: 14, lineHeight: 1.7, color: '#444', fontFamily: 'inherit' }}>{t.privacyContent}</pre>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<Suspense fallback={null}><Blog /></Suspense>} />
      <Route path="/blog/:slug" element={<Suspense fallback={null}><BlogPost /></Suspense>} />
      <Route path="/web-299" element={<Suspense fallback={null}><Web299 /></Suspense>} />
    </Routes>
  );
}
