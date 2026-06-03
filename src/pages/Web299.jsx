import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import logoImg from '../assets/logo.webp';

const API = 'https://webklienti-backend-1.onrender.com';

const C = {
  bg: '#F9FAFB', white: '#FFFFFF', text: '#111827', textSub: '#4B5563',
  border: '#E5E7EB', blue: '#2563EB', blueDark: '#1D4ED8',
  green: '#16A34A', red: '#DC2626', orange: '#C2410C',
};

export default function Web299() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', consent: false, package: 'One-page web — 299 €' });
  const [formStatus, setFormStatus] = useState('idle');
  const [consentError, setConsentError] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  const scrollToForm = () => { document.getElementById('form299')?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); };

  useEffect(() => {
    const el = document.getElementById('form299');
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setFormVisible(entry.isIntersecting), { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async () => {
    if (!form.name || !form.email) { alert('Vyplňte meno a email.'); return; }
    if (!form.consent) { setConsentError(true); return; }
    setConsentError(false);
    setFormStatus('loading');
    try {
      const res = await fetch(`${API}/api/orders`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, lang: 'sk' }),
      });
      const data = await res.json();
      if (data.success) {
        setFormStatus('success');
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: 'form_submit_success' });
        setForm({ name: '', email: '', phone: '', message: '', consent: false, package: 'One-page web — 299 €' });
      } else { setFormStatus('error'); }
    } catch { setFormStatus('error'); }
  };

  const faqs = [
    { q: 'Je to jednorazová platba?', a: 'Áno. Cena 299 € je jednorazová za tvorbu webu. Žiadne mesačné poplatky za web samotný. Hosting a doména sa platia samostatne — pomôžeme vám s ich nastavením.' },
    { q: 'Potrebujem hosting?', a: 'Hosting a doménu si zabezpečíte sami (odporúčame lacné SK/CZ riešenia) — alebo vám pomôžeme všetko nastaviť v rámci projektu.' },
    { q: 'Ako dodám podklady — texty a fotky?', a: 'Po objednávke dostanete jednoduchý formulár kde vyplníte texty. Fotky pošlete cez email alebo WeTransfer. Ak nemáte fotky, poradíme bezplatné alternatívy.' },
    { q: 'Môžem neskôr meniť texty?', a: 'Áno. Web odovzdáme aj so základným návodom. Väčšie zmeny vieme spraviť za dohodnutú cenu.' },
    { q: 'Je v cene SEO?', a: 'Áno — SEO základy sú v cene: správna štruktúra stránky, meta tagy, rýchlosť, mobilná verzia. Na pokročilé SEO (blog, linkbuilding) máme samostatnú službu.' },
    { q: 'Ako rýchlo je web hotový?', a: 'Štandardne do 5 pracovných dní od doručenia podkladov. Pri rýchlych podkladoch aj skôr.' },
  ];

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", background: C.white, color: C.text, minHeight: '100vh' }}>

      <Helmet>
        <title>Web za 299 € – Tvorba webstránok pre malé firmy | WebKlienti</title>
        <meta name="description" content="Profesionálny firemný web za 299 €. Hotový za 5 dní, mobilná verzia, SEO základy, kontaktný formulár. Bez skrytých poplatkov. Slovensko a Česko." />
        <link rel="canonical" href="https://www.webklienti.com/web-299" />
        <link rel="alternate" hreflang="sk" href="https://www.webklienti.com/web-299" />
        <link rel="alternate" hreflang="x-default" href="https://www.webklienti.com/web-299" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.webklienti.com/web-299" />
        <meta property="og:title" content="Web za 299 € – Profesionálna webstránka pre malé firmy" />
        <meta property="og:description" content="Hotový firemný web za 299 €. Mobilná verzia, SEO, kontaktný formulár. Bez mesačných poplatkov. Hotový za 5 dní." />
        <meta property="og:image" content="https://www.webklienti.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="sk_SK" />
        <meta property="og:site_name" content="WebKlienti" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web za 299 € – Profesionálna webstránka pre malé firmy" />
        <meta name="twitter:description" content="Hotový firemný web za 299 €. Mobilná verzia, SEO, kontaktný formulár. Bez mesačných poplatkov." />
        <meta name="twitter:image" content="https://www.webklienti.com/og-image.jpg" />
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"Product","name":"One-page web za 299 €","description":"Profesionálna one-page webstránka pre malé firmy. Mobilná verzia, SEO základy, kontaktný formulár, Google Maps. Hotová za 5 dní.","brand":{"@type":"Brand","name":"WebKlienti"},"url":"https://www.webklienti.com/web-299","image":"https://www.webklienti.com/og-image.jpg","offers":{"@type":"Offer","price":"299","priceCurrency":"EUR","priceValidUntil":"2026-12-31","availability":"https://schema.org/InStock","url":"https://www.webklienti.com/web-299","seller":{"@type":"Organization","name":"WebKlienti","url":"https://www.webklienti.com"}}}`}</script>
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Domov","item":"https://www.webklienti.com/"},{"@type":"ListItem","position":2,"name":"Web za 299 €","item":"https://www.webklienti.com/web-299"}]}`}</script>
      </Helmet>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', -apple-system, sans-serif; }
        .btn-primary { display: inline-flex; align-items: center; justify-content: center; height: 52px; padding: 0 28px; border-radius: 12px; background: #2563EB; color: #fff; font-size: 16px; font-weight: 600; border: none; cursor: pointer; transition: all .15s; text-decoration: none; font-family: 'Inter', sans-serif; white-space: nowrap; }
        .btn-primary:hover { background: #1D4ED8; box-shadow: 0 8px 20px rgba(37,99,235,0.25); transform: translateY(-1px); }
        .btn-primary-lg { height: 56px; padding: 0 36px; font-size: 17px; font-weight: 700; border-radius: 14px; }
        .btn-secondary { display: inline-flex; align-items: center; justify-content: center; height: 52px; padding: 0 24px; border-radius: 12px; background: #fff; color: #111827; font-size: 15px; font-weight: 600; border: 1.5px solid #E5E7EB; cursor: pointer; transition: all .15s; font-family: 'Inter', sans-serif; text-decoration: none; }
        .btn-secondary:hover { background: #F9FAFB; transform: translateY(-1px); }
        .card { background: #fff; border: 1px solid #E5E7EB; border-radius: 16px; padding: 24px; transition: all .2s; }
        .card:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(0,0,0,0.08); }
        .section-label { font-size: 13px; font-weight: 600; color: #2563EB; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 12px; }
        input:focus, textarea:focus { outline: none; border-color: #2563EB !important; box-shadow: 0 0 0 3px rgba(37,99,235,0.12); }
        .faq-row { border-bottom: 1px solid #E5E7EB; }
        .faq-toggle { width: 100%; background: none; border: none; cursor: pointer; display: flex; justify-content: space-between; align-items: center; padding: 20px 0; text-align: left; gap: 16px; font-family: 'Inter', sans-serif; }
        .google-cta-card:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(0,0,0,0.08); }
        .desktop-nav-links { display: flex; align-items: center; gap: 20px; }
        .hamburger-btn { display: none; }
        @media (max-width: 640px) {
          .desktop-nav-links { display: none !important; }
          .hamburger-btn { display: flex !important; }
          .hero-badges { flex-direction: column !important; align-items: flex-start !important; }
          .what-grid { grid-template-columns: 1fr 1fr !important; }
          .case-split { flex-direction: column !important; }
          .arrow-sep { display: none !important; }
          .reviews-grid { grid-template-columns: 1fr !important; }
          .steps-row { flex-direction: column !important; }
          .steps-row > div { border-right: none !important; border-bottom: 1px solid #E5E7EB; }
          .steps-row > div:last-child { border-bottom: none !important; }
          .trust-grid { grid-template-columns: 1fr !important; }
          .hero-ctas { flex-direction: column !important; }
          .hero-ctas .btn-primary-lg, .hero-ctas .btn-secondary { width: 100% !important; }
          .price-box { flex-direction: column !important; text-align: center; }
        }
      `}</style>

      {/* URGENCY BAR */}
      <div style={{ background: C.blue, padding: '10px 24px', textAlign: 'center' }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>
          ⚡ Obmedzená kapacita — prijímame len 2 nové projekty týždenne
        </span>
      </div>

      {/* NAV */}
      <nav style={{ background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(8px)', borderBottom: `1px solid ${C.border}`, padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 64, position: 'sticky', top: 0, zIndex: 100, gap: 12 }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}>
          <img src={logoImg} alt="WebKlienti logo" width="34" height="34" style={{ height: 34, width: 34, objectFit: 'contain', borderRadius: '50%' }} />
          <span style={{ fontWeight: 700, fontSize: 17, color: C.text, letterSpacing: -0.5 }}>Web<span style={{ color: C.blue }}>Klienti</span></span>
        </Link>

        {/* Desktop nav */}
        <div className="desktop-nav-links" style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <a href="#portfolio" style={{ fontSize: 14, color: C.textSub, textDecoration: 'none', fontWeight: 500 }}>Ukážky</a>
          <a href="#cena" style={{ fontSize: 14, color: C.textSub, textDecoration: 'none', fontWeight: 500 }}>Cena</a>
          <a href="#faq" style={{ fontSize: 14, color: C.textSub, textDecoration: 'none', fontWeight: 500 }}>FAQ</a>
          <button onClick={scrollToForm} className="btn-primary" style={{ height: 40, fontSize: 14, padding: '0 18px' }}>Objednať →</button>
        </div>

        {/* Hamburger */}
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, flexDirection: 'column', gap: 5 }}
        >
          <span style={{ display: 'block', width: 24, height: 2, background: menuOpen ? C.blue : C.text, transition: 'all .3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ display: 'block', width: 24, height: 2, background: menuOpen ? 'transparent' : C.text, transition: 'all .3s' }} />
          <span style={{ display: 'block', width: 24, height: 2, background: menuOpen ? C.blue : C.text, transition: 'all .3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ position: 'fixed', top: 114, left: 0, right: 0, zIndex: 99, background: C.white, padding: '16px 24px 24px', display: 'flex', flexDirection: 'column', gap: 16, borderBottom: `1px solid ${C.border}`, boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}>
          {[['#portfolio', 'Ukážky'], ['#cena', 'Cena'], ['#faq', 'FAQ']].map(([href, label]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)} style={{ color: C.text, textDecoration: 'none', fontSize: 18, fontWeight: 600, padding: '8px 0', borderBottom: `1px solid ${C.border}` }}>{label}</a>
          ))}
          <button onClick={scrollToForm} className="btn-primary" style={{ width: '100%', marginTop: 8 }}>Objednať →</button>
        </div>
      )}

      {/* 1. HERO */}
      <div style={{ background: C.white, borderBottom: `1px solid ${C.border}`, padding: '56px 24px 48px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(37,99,235,0.07)', border: `1px solid rgba(37,99,235,0.18)`, padding: '5px 14px', borderRadius: 100, fontSize: 13, fontWeight: 600, color: C.blue, marginBottom: 20 }}>
            ✓ Realizácia Montwell.sk · Weby pre firmy v SK &amp; CZ
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5.5vw, 58px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: -2, color: C.text, marginBottom: 16 }}>
            Profesionálny firemný web<br />
            <span style={{ color: C.blue }}>do 5 dní od 299 €</span>
          </h1>
          <p style={{ fontSize: 17, color: C.textSub, lineHeight: 1.65, marginBottom: 28, maxWidth: 560, margin: '0 auto 28px' }}>
            Pre malé firmy, služby a lokálne podnikanie.<br />
            Moderný dizajn, SEO, mobilná verzia a kontaktný formulár — všetko v cene.
          </p>
          <div className="hero-badges" style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 28 }}>
            {[
              { icon: '⚡', text: 'Dodanie do 5 dní' },
              { icon: '💰', text: 'Bez mesačných poplatkov' },
              { icon: '🎨', text: 'Dizajn na mieru' },
              { icon: '✓', text: 'Bez záväzkov' },
            ].map(b => (
              <span key={b.text} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: C.bg, border: `1px solid ${C.border}`, padding: '6px 12px', borderRadius: 100, fontSize: 13, fontWeight: 500, color: C.text }}>
                <span style={{ color: C.blue }}>{b.icon}</span> {b.text}
              </span>
            ))}
          </div>
          <div className="hero-ctas" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={scrollToForm} className="btn-primary btn-primary-lg">👉 Chcem web za 299 €</button>
            <a href="https://wa.me/421907890600" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ height: 56, fontSize: 15 }}>💬 Napísať na WhatsApp</a>
          </div>
          <p style={{ fontSize: 13, color: C.textSub, marginTop: 12 }}>Nezáväzná objednávka · Odpoveď do 24 hodín</p>
        </div>
      </div>



      {/* 3. ČO ZÍSKATE */}
      <div id="cena" style={{ background: C.white, padding: '64px 24px', borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p className="section-label" style={{ textAlign: 'center' }}>Čo je v cene</p>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, letterSpacing: -1, textAlign: 'center', marginBottom: 8 }}>Čo získate za 299 €</h2>
          <p style={{ textAlign: 'center', color: C.textSub, fontSize: 15, marginBottom: 36 }}>Kompletné riešenie — nič navyše nepotrebujete</p>
          <div className="what-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 32 }}>
            {[
              { icon: '🎨', title: 'Dizajn na mieru', desc: 'Nie template — web navrhnutý pre váš biznis' },
              { icon: '📱', title: 'Mobilná verzia', desc: 'Funguje perfektne na telefóne aj tablete' },
              { icon: '🔍', title: 'SEO základy', desc: 'Meta tagy, rýchlosť, štruktúra pre Google' },
              { icon: '📧', title: 'Kontaktný formulár', desc: 'Dopyty chodia priamo na váš email' },
              { icon: '📍', title: 'Google Maps', desc: 'Zákazníci vás nájdu na mape aj v okolí' },
              { icon: '🔒', title: 'SSL + Hosting setup', desc: 'Bezpečný web, pomoc s nastavením hostingu' },
            ].map(item => (
              <div key={item.title} className="card" style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 4 }}>{item.title}</p>
                  <p style={{ fontSize: 13, color: C.textSub, lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="price-box" style={{ background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)', border: `1.5px solid rgba(37,99,235,0.2)`, borderRadius: 20, padding: '28px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
            <div>
              <p style={{ fontSize: 13, fontWeight: 600, color: C.blue, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6 }}>Jednorazová cena</p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                <span style={{ fontSize: 48, fontWeight: 800, color: C.text, letterSpacing: -2 }}>299 €</span>
                <span style={{ fontSize: 16, color: C.textSub, textDecoration: 'line-through' }}>599 €</span>
              </div>
              <p style={{ fontSize: 14, color: C.textSub, marginTop: 4 }}>Bez mesačných poplatkov · Hotový za 5 dní</p>
            </div>
            <button onClick={scrollToForm} className="btn-primary btn-primary-lg" style={{ width: '100%', maxWidth: 280 }}>Objednať web →</button>
          </div>
        </div>
      </div>

      {/* 4. PORTFOLIO */}
      <div id="portfolio" style={{ background: C.bg, padding: '64px 24px', borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p className="section-label" style={{ textAlign: 'center' }}>Ukážka z praxe</p>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, letterSpacing: -1, textAlign: 'center', marginBottom: 40 }}>Reálna realizácia</h2>
          <div className="card" style={{ padding: '24px' }}>
            <div className="case-split" style={{ display: 'flex', gap: 14, alignItems: 'stretch', marginBottom: 14 }}>
              <div style={{ flex: 1, background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 12, padding: '18px 16px' }}>
                <div style={{ display: 'inline-block', background: '#FEE2E2', color: '#991B1B', padding: '2px 10px', borderRadius: 100, fontSize: 11, fontWeight: 700, marginBottom: 10 }}>PRED</div>
                <p style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 10 }}>Montwell — len Instagram</p>
                {['Iba sociálne siete', 'Žiadny web', 'Ťažko nájditeľní na Google'].map(i => (
                  <div key={i} style={{ fontSize: 13, color: C.textSub, display: 'flex', gap: 7, marginBottom: 5, alignItems: 'center' }}>
                    <span style={{ color: '#B91C1C', fontWeight: 700 }}>✕</span> {i}
                  </div>
                ))}
              </div>
              <div className="arrow-sep" style={{ display: 'flex', alignItems: 'center', fontSize: 20, color: C.blue, flexShrink: 0 }}>→</div>
              <div style={{ flex: 1, background: '#F0FDF4', border: '1.5px solid #86EFAC', borderRadius: 12, padding: '18px 16px' }}>
                <div style={{ display: 'inline-block', background: '#DCFCE7', color: '#166534', padding: '2px 10px', borderRadius: 100, fontSize: 11, fontWeight: 700, marginBottom: 10 }}>PO</div>
                <p style={{ fontSize: 14, fontWeight: 700, marginBottom: 10 }}>
                  <a href="https://montwell.sk" target="_blank" rel="noopener noreferrer" style={{ color: C.blue, textDecoration: 'none' }}>montwell.sk ↗</a>
                </p>
                {['Profesionálny web', 'Galéria realizácií', 'Zákazníci ich nájdu na Google'].map(i => (
                  <div key={i} style={{ fontSize: 13, color: '#166534', display: 'flex', gap: 7, marginBottom: 5, alignItems: 'center' }}>
                    <span style={{ color: C.green, fontWeight: 700 }}>✓</span> {i}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: 'rgba(37,99,235,0.05)', border: `1px solid rgba(37,99,235,0.15)`, borderRadius: 10, padding: '12px 16px' }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: C.blue }}>🎯 Profesionálny web, ktorý buduje dôveru a pomáha zákazníkom nájsť ich online</span>
            </div>
          </div>
        </div>
      </div>

      {/* 5. AKO TO FUNGUJE */}
      <div style={{ background: C.white, padding: '64px 24px', borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <p className="section-label" style={{ textAlign: 'center' }}>Jednoduchý proces</p>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, letterSpacing: -1, textAlign: 'center', marginBottom: 40 }}>Ako to funguje</h2>
          <div className="steps-row" style={{ display: 'flex' }}>
            {[
              { num: '01', title: 'Vyplníte formulár', desc: 'Základné info o biznise — za 2 minúty', icon: '📋' },
              { num: '02', title: 'Dostanete návrh', desc: 'Do 24 hodín pošleme vizuálny návrh', icon: '🎨' },
              { num: '03', title: 'Web je online', desc: 'Hotový a spustený do 5 dní', icon: '🚀' },
            ].map((s, i) => (
              <div key={i} style={{ flex: 1, padding: '24px 16px', textAlign: 'center', borderRight: i < 2 ? `1px solid ${C.border}` : 'none' }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{s.icon}</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: C.blue, letterSpacing: 1, marginBottom: 6 }}>{s.num}</div>
                <p style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 4 }}>{s.title}</p>
                <p style={{ fontSize: 13, color: C.textSub, lineHeight: 1.5 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <button onClick={scrollToForm} className="btn-primary btn-primary-lg" style={{ width: '100%', maxWidth: 320 }}>Začať teraz →</button>
          </div>
        </div>
      </div>

      {/* 6. REVIEWS */}
      <div style={{ background: C.bg, padding: '64px 24px', borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p className="section-label" style={{ textAlign: 'center' }}>Hodnotenia klientov</p>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, letterSpacing: -1, textAlign: 'center', marginBottom: 32 }}>Čo hovoria naši klienti</h2>
          <div className="reviews-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 12, border: '1px solid #E5E7EB', borderRadius: 16, background: '#fff' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                <div style={{ color: '#FBBF24', fontSize: 14, letterSpacing: 1 }}>★★★★★</div>
              </div>
              <p style={{ fontSize: 15, color: C.text, lineHeight: 1.7, fontStyle: 'italic', flexGrow: 1 }}>„Super služby! Som veľmi spokojný."</p>
              <div>
                <p style={{ fontWeight: 700, color: C.text, fontSize: 14 }}>Matus K.</p>
                <p style={{ fontSize: 12, color: C.textSub, marginTop: 2 }}>Overená recenzia Google</p>
              </div>
            </div>
            <a href="https://maps.app.goo.gl/tDf7dRkYB2eZ3j9d7" target="_blank" rel="noopener noreferrer" className="card google-cta-card"
              style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10, border: `1px solid ${C.border}`, borderRadius: 16, padding: '24px', cursor: 'pointer', transition: 'all .15s' }}>
              <div style={{ fontSize: 28 }}>⭐</div>
              <p style={{ fontSize: 14, fontWeight: 600, color: C.text, textAlign: 'center', lineHeight: 1.4 }}>Pozrieť všetky Google hodnotenia →</p>
              <span style={{ fontSize: 13, color: C.blue, fontWeight: 600 }}>Google Business</span>
            </a>
          </div>
        </div>
      </div>

      {/* 7. FAQ */}
      <div id="faq" style={{ background: C.white, padding: '64px 24px', borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <p className="section-label" style={{ textAlign: 'center' }}>Časté otázky</p>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, letterSpacing: -1, textAlign: 'center', marginBottom: 32 }}>Najčastejšie otázky</h2>
          {faqs.map((item, i) => (
            <div key={i} className="faq-row">
              <button className="faq-toggle" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <span style={{ fontSize: 15, fontWeight: 600, color: C.text }}>{item.q}</span>
                <span style={{ color: C.blue, fontSize: 22, fontWeight: 700, flexShrink: 0, transition: 'transform .2s', transform: openFaq === i ? 'rotate(45deg)' : 'none', display: 'inline-block' }}>+</span>
              </button>
              {openFaq === i && <div style={{ paddingBottom: 18, fontSize: 15, color: C.textSub, lineHeight: 1.7 }}>{item.a}</div>}
            </div>
          ))}
        </div>
      </div>

      {/* 8. SCARCITY + FINAL CTA */}
      <div style={{ background: C.blue, padding: '64px 24px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 100, padding: '6px 18px', fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 20 }}>
            ⚡ Prijímame len 2 nové projekty týždenne
          </div>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 800, color: '#fff', letterSpacing: -1.5, marginBottom: 14, lineHeight: 1.15 }}>Chcete web, ktorý získava zákazníkov?</h2>
          <p style={{ fontSize: 16, color: '#fff', marginBottom: 28, lineHeight: 1.6 }}>Hotový za 5 dní. Od 299 €. Bez mesačných poplatkov. Bez rizika.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={scrollToForm} style={{ display: 'inline-flex', alignItems: 'center', height: 54, padding: '0 28px', background: '#fff', color: C.blue, border: 'none', borderRadius: 14, fontSize: 16, fontWeight: 700, cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>Objednať web za 299 € →</button>
            <a href="https://wa.me/421907890600" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', height: 54, padding: '0 22px', background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1.5px solid rgba(255,255,255,0.4)', borderRadius: 14, fontSize: 15, fontWeight: 600, textDecoration: 'none', fontFamily: 'Inter, sans-serif' }}>💬 WhatsApp</a>
          </div>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.95)', marginTop: 14 }}>Nezáväzná objednávka · Odpoveď do 24 hodín · Bez záväzkov</p>
        </div>
      </div>

      {/* 9. FORM */}
      <div id="form299" style={{ padding: '64px 24px 96px', background: C.bg }}>
        <div style={{ maxWidth: 520, margin: '0 auto' }}>
          <p className="section-label" style={{ textAlign: 'center' }}>Objednávka</p>
          <h2 style={{ fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: 800, letterSpacing: -1, textAlign: 'center', marginBottom: 8 }}>Rezervujte si miesto</h2>
          <p style={{ textAlign: 'center', color: C.textSub, fontSize: 15, marginBottom: 28 }}>Vyplňte formulár — ozveme sa do 24 hodín.</p>
          {formStatus === 'success' ? (
            <div className="card" style={{ padding: '48px 32px', textAlign: 'center' }}>
              <div style={{ fontSize: 48, marginBottom: 14 }}>🎉</div>
              <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 10, color: C.blue }}>Ďakujeme!</h3>
              <p style={{ color: C.textSub, fontSize: 15 }}>Ozveme sa vám do 24 hodín.</p>
            </div>
          ) : (
            <div className="card" style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { key: 'name', label: 'Meno a priezvisko *', type: 'text', placeholder: 'Ján Novák' },
                { key: 'email', label: 'Email *', type: 'email', placeholder: 'jan@firma.sk' },
                { key: 'phone', label: 'Telefón', type: 'tel', placeholder: '+421 900 000 000' },
                { key: 'message', label: 'Čo robíte?', type: 'text', placeholder: 'napr. kaderníctvo, reštaurácia...' },
              ].map(f => (
                <div key={f.key}>
                  <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 6, color: C.text }}>{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder} value={form[f.key]}
                    onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                    style={{ width: '100%', padding: '12px 14px', background: C.white, border: `1.5px solid ${C.border}`, borderRadius: 10, fontSize: 15, color: C.text, fontFamily: 'Inter, sans-serif' }} />
                </div>
              ))}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <input id="c299" type="checkbox" checked={form.consent}
                  onChange={e => { setForm(p => ({ ...p, consent: e.target.checked })); setConsentError(false); }}
                  style={{ marginTop: 3, width: 18, height: 18, cursor: 'pointer', accentColor: C.blue, flexShrink: 0 }} />
                <label htmlFor="c299" style={{ fontSize: 13, color: C.textSub, lineHeight: 1.5, cursor: 'pointer' }}>
                  Súhlasím so{' '}
                  <Link to="/privacy" target="_blank" rel="noopener noreferrer" style={{ color: C.blue, fontWeight: 600 }}>spracovaním osobných údajov</Link>{' *'}
                </label>
              </div>
              {consentError && <p style={{ color: C.red, fontSize: 13 }}>⚠️ Potvrďte súhlas so spracovaním údajov.</p>}
              {formStatus === 'error' && <p style={{ color: C.red, fontSize: 13 }}>❌ Chyba. Skúste znova alebo nás kontaktujte priamo.</p>}
              <button onClick={handleSubmit} disabled={formStatus === 'loading'}
                className="btn-primary" style={{ width: '100%', height: 52, fontSize: 16, fontWeight: 700, opacity: formStatus === 'loading' ? 0.7 : 1 }}>
                {formStatus === 'loading' ? 'Odosielam...' : 'Chcem web za 299 € →'}
              </button>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                {['✓ Nezáväzná objednávka', '✓ Odpoveď do 24h', '✓ Bez skrytých poplatkov'].map(t => (
                  <span key={t} style={{ fontSize: 12, color: C.textSub, fontWeight: 500 }}>{t}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ background: '#111827', padding: '32px 24px', textAlign: 'center' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', marginBottom: 14 }}>
          <img src={logoImg} alt="WebKlienti logo" width="32" height="32" style={{ height: 32, width: 32, objectFit: 'contain', borderRadius: '50%' }} />
          <span style={{ fontWeight: 700, fontSize: 16, color: '#fff' }}>Web<span style={{ color: '#60A5FA' }}>Klienti</span></span>
        </Link>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 10 }}>
          <a href="mailto:info@webklienti.com" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: 14 }}>info@webklienti.com</a>
          <a href="tel:+421907890600" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: 14 }}>+421 907 890 600</a>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>© {new Date().getFullYear()} WebKlienti · Všetky práva vyhradené</p>
      </footer>

      {/* STICKY MOBILE CTA — skryje sa keď je formulár viditeľný */}
      <div className="sticky-cta" style={{
        display: 'none', position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 998,
        background: '#fff', borderTop: `1px solid ${C.border}`, padding: '12px 16px 20px',
        boxShadow: '0 -4px 20px rgba(0,0,0,0.08)',
        visibility: formVisible ? 'hidden' : 'visible',
        opacity: formVisible ? 0 : 1,
        transition: 'opacity .2s, visibility .2s'
      }}>
        <button onClick={scrollToForm} className="btn-primary" style={{ width: '100%', fontSize: 15, height: 50 }}>
          Chcem web za 299 € →
        </button>
      </div>

    </div>
  );
}
