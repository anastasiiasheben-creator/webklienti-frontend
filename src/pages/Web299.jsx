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
  const [form, setForm] = useState({ name: '', email: '', phone: '', website: '', message: '', consent: false, package: 'One-page vizitka — 299 €' });
  const [formStatus, setFormStatus] = useState('idle');
  const [consentError, setConsentError] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [finalCtaVisible, setFinalCtaVisible] = useState(false);

  const scrollToForm = () => { document.getElementById('form299')?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); };

  useEffect(() => {
    const el = document.getElementById('form299');
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setFormVisible(entry.isIntersecting), { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = document.getElementById('final-cta');
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setFinalCtaVisible(entry.isIntersecting), { threshold: 0.1 });
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
        setForm({ name: '', email: '', phone: '', website: '', message: '', consent: false, package: 'One-page vizitka — 299 €' });
      } else { setFormStatus('error'); }
    } catch { setFormStatus('error'); }
  };

  const faqs = [
    { q: 'Je to jednorazová platba bez mesačných poplatkov?', a: 'Áno. Cena 299 € je jednorazová za kompletné zhotovenie webu. Web je po odovzdaní 100 % váš. Jediné ročné náklady sú za doménu a webhosting (cca 20–30 € ročne), ktoré platíte priamo poskytovateľovi — s ich výberom a nastavením vám kompletne pomôžeme.' },
    { q: 'Ako prebieha platba a kedy posielam peniaze?', a: 'Vyplníte formulár, my spravíme analýzu a do 24 hodín vám pošleme prvý vizuálny koncept zdarma. Ak poviete „áno, toto sa mi páči", uhradíte 50% zálohu a my web kompletne dokončíme. Zvyšných 50% platíte až vtedy, keď je web hotový, otestovaný a pripravený na spustenie.' },
    { q: 'Ako rýchlo je web hotový?', a: 'Štandardne do 5 pracovných dní od schválenia konceptu. Máme zabehnutý proces, vďaka ktorému eliminujeme zbytočné prestoje a dodáme web rýchlo aj bez kompromisov v kvalite.' },
    { q: 'Čo ak nemám žiadne texty ani fotografie?', a: 'Žiadny problém. Na základe krátkeho rozhovoru o vašom biznise napíšeme konverzné texty za vás. Pokiaľ nemáte vlastné fotky, vyberieme licencované profesionálne snímky z prémiových fotobánk, ktoré dokonale sadnú k vašej značke.' },
    { q: 'Je v cene SEO?', a: 'Áno — SEO základy sú v cene: správna štruktúra stránky, meta tagy, rýchlosť, mobilná verzia a nastavenie pre lokálne vyhľadávanie. Na pokročilé SEO (blog, linkbuilding, kľúčové slová) máme samostatnú službu v rámci balíka Biznis web.' },
    { q: 'Kto bude vlastniť hotovú webstránku?', a: 'Vy. Na rozdiel od iných firiem, ktoré vás uzamknú do vlastných platforiem na mesačné prenájmy, od nás dostanete plné administrátorské prístupy. Web funguje nezávisle a môžete si s ním robiť čokoľvek.' },
    { q: 'Čo ak sa mi prvý návrh nebude páčiť?', a: 'Jednoducho nám poviete, čo máme zmeniť, a my návrh upravíme. Ak by ste mali pocit, že sme sa úplne minuli vašej predstave, spoluprácu môžete bez akýchkoľvek otázok a poplatkov ukončiť. Keďže ste pred návrhom nič neplatili, neriskujete vôbec nič.' },
  ];

  const riskPoints = [
    'Úvodný vizuálny návrh máte do 24 hodín úplne ZDARMA',
    'Najprv podpíšeme zmluvu, zálohu platíte až keď ste s konceptom na 100% pokojní',
    'Jasný plán a komunikácia bez zbytočného technického žargónu',
    'Žiadne skryté poplatky ani viazanosť',
  ];

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", background: C.white, color: C.text, minHeight: '100vh' }}>

      <Helmet>
        <title>Web za 299 € – Profesionálna webstránka do 5 dní | WebKlienti</title>
        <meta name="description" content="Moderný firemný web od 299 €. Dizajn navrhnutý na získavanie zákazníkov, mobilná verzia, SEO základy, kontaktný formulár. Hotový do 5 dní. Slovensko a Česko." />
        <link rel="canonical" href="https://www.webklienti.com/web-299" />
        <link rel="alternate" hreflang="sk" href="https://www.webklienti.com/web-299" />
        <link rel="alternate" hreflang="x-default" href="https://www.webklienti.com/web-299" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.webklienti.com/web-299" />
        <meta property="og:title" content="Web za 299 € – Profesionálna webstránka do 5 dní" />
        <meta property="og:description" content="Moderný firemný web od 299 €. Mobilná verzia, SEO, kontaktný formulár. Bez mesačných poplatkov. Hotový do 5 dní." />
        <meta property="og:image" content="https://www.webklienti.com/og-image.jpg" />
        <meta property="og:locale" content="sk_SK" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"Product","name":"One-page web za 299 €","description":"Profesionálna one-page webstránka pre malé firmy. Mobilná verzia, SEO základy, kontaktný formulár, Google Maps. Hotová za 5 dní.","brand":{"@type":"Brand","name":"WebKlienti"},"url":"https://www.webklienti.com/web-299","offers":{"@type":"Offer","price":"299","priceCurrency":"EUR","availability":"https://schema.org/InStock","seller":{"@type":"Organization","name":"WebKlienti","url":"https://www.webklienti.com"}},"aggregateRating":{"@type":"AggregateRating","ratingValue":"5","reviewCount":"1","bestRating":"5","worstRating":"1"},"review":[{"@type":"Review","author":{"@type":"Person","name":"Matus K."},"reviewRating":{"@type":"Rating","ratingValue":"5","bestRating":"5"},"reviewBody":"Super služby! Som veľmi spokojný."}]}`}</script>
      </Helmet>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', -apple-system, sans-serif; }
        .btn-primary { display: inline-flex; align-items: center; justify-content: center; height: 52px; padding: 0 28px; border-radius: 12px; background: #2563EB; color: #fff; font-size: 16px; font-weight: 600; border: none; cursor: pointer; transition: all .15s; text-decoration: none; font-family: 'Inter', sans-serif; white-space: nowrap; }
        .btn-primary:hover { background: #1D4ED8; box-shadow: 0 8px 20px rgba(37,99,235,0.25); transform: translateY(-1px); }
        .btn-primary:active { transform: translateY(0); }
        .btn-primary:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
        .btn-primary-lg { height: 56px; padding: 0 36px; font-size: 17px; font-weight: 700; border-radius: 14px; }
        .btn-secondary { display: inline-flex; align-items: center; justify-content: center; height: 52px; padding: 0 24px; border-radius: 12px; background: #fff; color: #111827; font-size: 15px; font-weight: 600; border: 1.5px solid #E5E7EB; cursor: pointer; transition: all .15s; font-family: 'Inter', sans-serif; text-decoration: none; }
        .btn-secondary:hover { background: #F9FAFB; transform: translateY(-1px); }
        .card { background: #fff; border: 1px solid #E5E7EB; border-radius: 16px; padding: 24px; transition: all .2s; }
        .card:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(0,0,0,0.08); }
        .section-label { font-size: 13px; font-weight: 600; color: #2563EB; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 12px; }
        input:focus, textarea:focus { outline: none; border-color: #2563EB !important; box-shadow: 0 0 0 3px rgba(37,99,235,0.12); }
        .faq-item { background: #F9FAFB; border-radius: 0; overflow: hidden; border: 1px solid #E5E7EB; border-top: none; }
        .faq-item:first-child { border-radius: 12px 12px 0 0; border-top: 1px solid #E5E7EB; }
        .faq-item:last-child { border-radius: 0 0 12px 12px; }
        .faq-toggle { width: 100%; background: none; border: none; cursor: pointer; display: flex; justify-content: space-between; align-items: center; padding: 18px 24px; text-align: left; gap: 16px; font-family: 'Inter', sans-serif; }
        .desktop-nav-links { display: flex; align-items: center; gap: 20px; }
        .hamburger-btn { display: none; }
        .sticky-cta { display: none; }
        .google-cta-card:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(0,0,0,0.08); }
        @media (max-width: 640px) {
          .desktop-nav-links { display: none !important; }
          .hamburger-btn { display: flex !important; }
          .hero-ctas { flex-direction: column !important; }
          .hero-ctas .btn-primary-lg, .hero-ctas .btn-secondary { width: 100% !important; }
          .what-grid { grid-template-columns: 1fr 1fr !important; }
          .case-split { flex-direction: column !important; }
          .arrow-sep { display: none !important; }
          .reviews-grid { grid-template-columns: 1fr !important; }
          .steps-row { flex-direction: column !important; }
          .steps-row > div { border-right: none !important; border-bottom: 1px solid #E5E7EB; }
          .steps-row > div:last-child { border-bottom: none !important; }
          .price-box { flex-direction: column !important; text-align: center; }
          .benefit-list { grid-template-columns: 1fr !important; }
          .sticky-cta { display: flex !important; }
        }
      `}</style>

      {/* URGENCY BAR */}
      <div style={{ background: C.blue, padding: '10px 24px', textAlign: 'center' }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: '#fff', letterSpacing: 0.2 }}>
          🔥 Akcia — 50% zľava na spustenie projektu · Prijímame len 2 nové projekty týždenne
        </span>
      </div>

      {/* NAV */}
      <nav style={{ background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(8px)', borderBottom: `1px solid ${C.border}`, padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 64, position: 'sticky', top: 0, zIndex: 100, gap: 12 }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}>
          <img src={logoImg} alt="WebKlienti logo" width="34" height="34" style={{ height: 34, width: 34, objectFit: 'contain', borderRadius: '50%' }} />
          <span style={{ fontWeight: 700, fontSize: 17, color: C.text, letterSpacing: -0.5 }}>Web<span style={{ color: C.blue }}>Klienti</span></span>
        </Link>
        <div className="desktop-nav-links">
          <a href="#portfolio" style={{ fontSize: 14, color: C.textSub, textDecoration: 'none', fontWeight: 500 }}>Referencie</a>
          <a href="#cena" style={{ fontSize: 14, color: C.textSub, textDecoration: 'none', fontWeight: 500 }}>Cenník</a>
          <a href="#faq" style={{ fontSize: 14, color: C.textSub, textDecoration: 'none', fontWeight: 500 }}>FAQ</a>
          <button onClick={scrollToForm} className="btn-primary" style={{ height: 40, fontSize: 14, padding: '0 18px' }}>Získať návrh zdarma</button>
        </div>
        <button className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, flexDirection: 'column', gap: 5 }}>
          <span style={{ display: 'block', width: 24, height: 2, background: menuOpen ? C.blue : C.text, transition: 'all .3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ display: 'block', width: 24, height: 2, background: menuOpen ? 'transparent' : C.text, transition: 'all .3s' }} />
          <span style={{ display: 'block', width: 24, height: 2, background: menuOpen ? C.blue : C.text, transition: 'all .3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </nav>

      {menuOpen && (
        <div style={{ position: 'fixed', top: 114, left: 0, right: 0, zIndex: 99, background: C.white, padding: '16px 24px 24px', display: 'flex', flexDirection: 'column', gap: 16, borderBottom: `1px solid ${C.border}`, boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}>
          {[['#portfolio', 'Referencie'], ['#cena', 'Cenník'], ['#faq', 'FAQ']].map(([href, label]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)} style={{ color: C.text, textDecoration: 'none', fontSize: 18, fontWeight: 600, padding: '8px 0', borderBottom: `1px solid ${C.border}` }}>{label}</a>
          ))}
          <button onClick={scrollToForm} className="btn-primary" style={{ width: '100%', marginTop: 8 }}>Získať návrh zdarma</button>
        </div>
      )}

      {/* 1. HERO */}
      <div style={{ background: C.white, borderBottom: `1px solid ${C.border}`, padding: '56px 24px 48px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(37,99,235,0.07)', border: `1px solid rgba(37,99,235,0.18)`, padding: '5px 14px', borderRadius: 100, fontSize: 13, fontWeight: 600, color: C.blue, marginBottom: 20 }}>
            ✓ Realizácia Montwell.sk – web, ktorý prináša dopyty z Google aj priamo z prehliadača
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5.5vw, 56px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: -2, color: C.text, marginBottom: 16 }}>
            Web, ktorý vašej firme reálne<br />
            <span style={{ color: C.blue }}>prinesie nových zákazníkov</span>
          </h1>
          <p style={{ fontSize: 17, color: C.textSub, lineHeight: 1.65, marginBottom: 28, maxWidth: 580, margin: '0 auto 28px' }}>
            Moderný dizajn navrhnutý na získavanie dopytov + silné SEO + kontaktný formulár a mapy — všetko v cene.<br />
            <strong style={{ color: C.text }}>Hotovo už do 5 dní od 299 €.</strong>
          </p>
          <div className="benefit-list" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 16px', maxWidth: 560, margin: '0 auto 28px', textAlign: 'left' }}>
            {[
              'Dizajn navrhnutý tak, aby návštevníka premenil na dopyt',
              'Bezchybné zobrazenie na mobiloch a tabletoch',
              'Kontaktné formuláre, mapy a prepojenia v cene',
              'SEO optimalizácie, aby vás klienti našli na Google',
              'Bleskové dodanie do 5 dní bez zbytočného naťahovania',
              'Úvodný vizuálny návrh do 24 hodín ZDARMA',
            ].map(b => (
              <div key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 14, color: C.textSub }}>
                <span style={{ color: C.green, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span> {b}
              </div>
            ))}
          </div>
          <div className="hero-ctas" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={scrollToForm} className="btn-primary btn-primary-lg">Chcem nezáväzný návrh webu zdarma</button>
            <a href="https://wa.me/421907890600" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ height: 56, fontSize: 15 }}>💬 WhatsApp</a>
          </div>
          <p style={{ fontSize: 13, color: C.textSub, marginTop: 12 }}>prvý koncept do 24 hodín · úplne bez záväzkov · ukážeme vám, ako predávať viac</p>
        </div>
      </div>

      {/* 2. ČO ZÍSKATE */}
      <div id="cena" style={{ background: C.bg, padding: '64px 24px', borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p className="section-label" style={{ textAlign: 'center' }}>Transparentné ceny</p>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 800, letterSpacing: -1, textAlign: 'center', marginBottom: 8 }}>Čo získate za 299 €</h2>
          <p style={{ textAlign: 'center', color: C.textSub, fontSize: 15, marginBottom: 36 }}>Kompletné riešenie. Žiadne skryté poplatky. Nič navyše nepotrebujete.</p>
          <div className="what-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 32 }}>
            {[
              { icon: '🎨', title: 'Predajný dizajn na mieru', desc: 'Nie template — web navrhnutý na premenu návštevníkov na dopyty' },
              { icon: '📱', title: 'Mobilná verzia', desc: 'Prvotriedna rýchlosť a bezchybné zobrazenie na smartfónoch' },
              { icon: '🔍', title: 'SEO základy', desc: 'Meta tagy, rýchlosť, štruktúra pre lokálne vyhľadávanie na Google' },
              { icon: '📧', title: 'Kontaktný formulár', desc: 'Dopyty a objednávky chodia priamo na váš email' },
              { icon: '📍', title: 'Google Maps + prepojenia', desc: 'Hovor, email, mapa a WhatsApp — všetko jedným kliknutím' },
              { icon: '🔒', title: 'GDPR + Google Business', desc: 'Cookies lišta, SSL a BONUS: audit / nastavenie Google Business profilu' },
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
              <p style={{ fontSize: 13, fontWeight: 600, color: C.blue, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6 }}>Jednorazová cena · Žiadne mesačné poplatky</p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                <span style={{ fontSize: 48, fontWeight: 800, color: C.text, letterSpacing: -2 }}>299 €</span>
                <span style={{ fontSize: 16, color: C.textSub, textDecoration: 'line-through' }}>bežne 599 €</span>
              </div>
              <p style={{ fontSize: 14, color: C.textSub, marginTop: 4 }}>Kompletné odovzdanie do 5 pracovných dní</p>
            </div>
            <button onClick={scrollToForm} className="btn-primary btn-primary-lg" style={{ width: '100%', maxWidth: 280 }}>Zvoliť tento balík a získať návrh →</button>
          </div>
        </div>
      </div>

      {/* 3. PORTFOLIO */}
      <div id="portfolio" style={{ background: C.white, padding: '64px 24px', borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p className="section-label" style={{ textAlign: 'center' }}>Case Study</p>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 800, letterSpacing: -1, textAlign: 'center', marginBottom: 40 }}>Overený projekt</h2>
          <div className="card" style={{ padding: '32px' }}>
            <div className="case-split" style={{ display: 'flex', gap: 14, alignItems: 'stretch', marginBottom: 14 }}>
              <div style={{ flex: 1, background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 12, padding: '18px 16px' }}>
                <div style={{ display: 'inline-block', background: '#FEE2E2', color: '#991B1B', padding: '2px 10px', borderRadius: 100, fontSize: 11, fontWeight: 700, marginBottom: 10 }}>PRED</div>
                <p style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 10 }}>Montwell — len Instagram</p>
                {['Iba sociálne siete, žiadny web', 'Ťažko nájditeľní na Google', 'Zákazníci dôverujú konkurencii viac'].map(i => (
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
                {['Profesionálny predajný web', 'Galéria realizácií a referencie', 'Zákazníci ich nájdu na Google', 'Prvé kontakty z webu už v prvých týždňoch'].map(i => (
                  <div key={i} style={{ fontSize: 13, color: '#166534', display: 'flex', gap: 7, marginBottom: 5, alignItems: 'center' }}>
                    <span style={{ color: C.green, fontWeight: 700 }}>✓</span> {i}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: 'rgba(37,99,235,0.05)', border: `1px solid rgba(37,99,235,0.15)`, borderRadius: 10, padding: '12px 16px' }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: C.blue }}>🎯 Montwell.sk dnes pracuje ako predajný web — z Instagramu vznikol web, ktorý klientov privádza aj z vyhľadávania</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. PROCES */}
      <div style={{ background: C.bg, padding: '64px 24px', borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <p className="section-label" style={{ textAlign: 'center' }}>Náš proces</p>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 800, letterSpacing: -1, textAlign: 'center', marginBottom: 8 }}>Odoslaním formulára k novým zákazníkom za 5 dní</h2>
          <p style={{ textAlign: 'center', color: C.textSub, fontSize: 15, marginBottom: 40 }}>Jednoduchý a transparentný proces bez zbytočného technického žargónu.</p>
          <div className="steps-row" style={{ display: 'flex', background: C.white, border: `1px solid ${C.border}`, borderRadius: 16, overflow: 'hidden' }}>
            {[
              { num: '01', title: 'Nezáväzný dopyt', desc: 'Vyplníte krátky formulár o vašom biznise — za 2 minúty.', icon: '📋' },
              { num: '02', title: 'Koncept do 24 hodín', desc: 'Úplne zdarma vám vypracujeme úvodný vizuálny návrh riešenia.', icon: '🎨' },
              { num: '03', title: 'Vyladenie detailov', desc: 'Doladíme texty, štruktúru a funkcie presne podľa vás.', icon: '⚙️' },
              { num: '04', title: 'Spustenie do 5 dní', desc: 'Web nasadíme na vašu doménu a odovzdáme vám kľúče.', icon: '🚀' },
            ].map((s, i) => (
              <div key={i} style={{ flex: 1, padding: '24px 16px', textAlign: 'center', borderRight: i < 3 ? `1px solid ${C.border}` : 'none' }}>
                <div style={{ fontSize: 26, marginBottom: 8 }}>{s.icon}</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: C.blue, letterSpacing: 1, marginBottom: 6 }}>{s.num}</div>
                <p style={{ fontSize: 13, fontWeight: 700, color: C.text, marginBottom: 4 }}>{s.title}</p>
                <p style={{ fontSize: 12, color: C.textSub, lineHeight: 1.5 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <button onClick={scrollToForm} className="btn-primary btn-primary-lg" style={{ width: '100%', maxWidth: 360 }}>Získať nezáväzný návrh riešenia →</button>
          </div>
        </div>
      </div>

      {/* 5. GARANCIA / RISK — zelené fajky ako pills */}
      <div style={{ background: C.white, padding: '96px 24px', borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🛡️</div>
          <p className="section-label" style={{ textAlign: 'center' }}>Spolupráca bez rizika</p>
          <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: 16 }}>Spolupráca bez akéhokoľvek rizika</h2>
          <p style={{ fontSize: 18, color: C.textSub, lineHeight: 1.7, marginBottom: 32 }}>
            Veríme svojej práci, preto neriskujete ani jedno euro. Prvý koncept pripravíme na naše náklady. Vy sa rozhodnete, či budeme pokračovať.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
            {riskPoints.map(p => (
              <div key={p} style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 100, padding: '10px 20px', fontSize: 14, fontWeight: 500, color: C.text, display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ color: C.green, fontWeight: 700, fontSize: 16, flexShrink: 0 }}>✓</span>
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. HODNOTENIA */}
      <div style={{ background: C.bg, padding: '64px 24px', borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p className="section-label" style={{ textAlign: 'center' }}>Hodnotenia klientov</p>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, letterSpacing: -1, textAlign: 'center', marginBottom: 32 }}>Čo hovoria naši klienti</h2>
          <div className="reviews-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
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
              style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, cursor: 'pointer', transition: 'all .2s' }}>
              <div style={{ fontSize: 32 }}>⭐</div>
              <p style={{ fontSize: 15, fontWeight: 600, color: C.text, textAlign: 'center', lineHeight: 1.4 }}>Pozrieť všetky Google hodnotenia →</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                <span style={{ fontSize: 13, color: C.blue, fontWeight: 600 }}>Google Business</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* 7. FAQ — accordion štýl ako hlavný web */}
      <div id="faq" style={{ background: C.white, padding: '96px 24px', borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <p className="section-label">Odpovedáme</p>
          <h2 style={{ fontSize: 'clamp(28px, 3vw, 36px)', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: 40 }}>Všetko, čo potrebujete vedieť pred štartom</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {faqs.map((item, i) => (
              <div key={i} className="faq-item" style={{
                background: C.bg, overflow: 'hidden',
                border: `1px solid ${C.border}`,
                borderTop: i > 0 ? 'none' : `1px solid ${C.border}`,
                borderRadius: i === 0 ? '12px 12px 0 0' : i === faqs.length - 1 ? '0 0 12px 12px' : 0,
              }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 24px', borderBottom: openFaq === i ? `1px solid ${C.border}` : 'none', textAlign: 'left', gap: 16, fontFamily: 'Inter, sans-serif' }}>
                  <span style={{ fontSize: 15, fontWeight: 600, color: C.text }}>{item.q}</span>
                  <span style={{ fontSize: 20, color: C.blue, fontWeight: 700, flexShrink: 0, transition: 'transform .2s', transform: openFaq === i ? 'rotate(45deg)' : 'none', display: 'inline-block' }}>+</span>
                </button>
                {openFaq === i && <div style={{ padding: '16px 24px 20px', fontSize: 15, color: C.textSub, lineHeight: 1.7 }}>{item.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 8. FINAL CTA */}
      <div id="final-cta" style={{ background: C.blue, padding: '96px 24px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, color: '#fff', letterSpacing: '-0.01em', marginBottom: 16 }}>
            Chcete web, ktorý bude pre vašu firmu reálne zarábať?
          </h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.92)', marginBottom: 40, lineHeight: 1.6 }}>
            Nečakajte, kým vás konkurencia predbehne úplne. Vyplňte formulár a zajtra máte na stole riešenie.
          </p>
          <button onClick={scrollToForm} style={{ display: 'inline-flex', alignItems: 'center', height: 56, padding: '0 32px', background: '#fff', color: C.blue, border: 'none', borderRadius: 12, fontSize: 17, fontWeight: 700, cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>
            Získať nezáväzný návrh riešenia →
          </button>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.9)', marginTop: 16 }}>prvý koncept do 24 hodín · úplne bez záväzkov · ukážeme vám, ako predávať viac</p>
        </div>
      </div>

      {/* 9. FORM */}
      <div id="form299" style={{ padding: '96px 24px 140px', background: C.bg }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <p className="section-label">Rýchly dopyt</p>
          <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: 12 }}>Získajte profesionálny návrh webu do 24 hodín zdarma</h2>
          <p style={{ color: C.textSub, marginBottom: 40, fontSize: 16, lineHeight: 1.6 }}>Napíšte nám základné detaily. Návrh je nezáväzný — ak sa vám nebude páčiť, nič neplatíte.</p>
          {formStatus === 'success' ? (
            <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 16, padding: '52px 32px', textAlign: 'center' }}>
              <div style={{ fontSize: 48, marginBottom: 14 }}>🎉</div>
              <h3 style={{ fontSize: 26, fontWeight: 700, marginBottom: 10 }}>Skvelé, dáta dorazili!</h3>
              <p style={{ color: C.textSub, fontSize: 15 }}>Váš dopyt sme zaevidovali. Ihneď sa púšťame do analýzy a do 24 hodín vás budeme kontaktovať s hotovým návrhom.</p>
            </div>
          ) : (
            <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 16, padding: '40px 36px', display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { key: 'name', label: 'Vaše meno a priezvisko *', type: 'text', placeholder: 'napr. Ján Novák' },
                { key: 'email', label: 'Kontaktný e-mail *', type: 'email', placeholder: 'jan@firma.sk' },
                { key: 'phone', label: 'Telefónne číslo (pre rýchle upresnenie)', type: 'tel', placeholder: '+421 911 111 222' },
                { key: 'website', label: 'Váš aktuálny web (ak máte)', type: 'url', placeholder: 'napr. www.mojastranka.sk' },
                { key: 'message', label: 'Čo je hlavným cieľom vášho nového webu?', type: 'text', placeholder: 'Čomu sa venujete? Čo od nového webu očakávate?' },
              ].map(f => (
                <div key={f.key}>
                  <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 8, color: C.text }}>{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder} value={form[f.key]}
                    onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                    style={{ width: '100%', padding: '12px 16px', background: C.white, border: `1.5px solid ${C.border}`, borderRadius: 10, fontSize: 15, color: C.text, fontFamily: 'Inter, sans-serif' }} />
                </div>
              ))}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <input id="c299" type="checkbox" checked={form.consent}
                  onChange={e => { setForm(p => ({ ...p, consent: e.target.checked })); setConsentError(false); }}
                  style={{ marginTop: 3, width: 18, height: 18, cursor: 'pointer', accentColor: C.blue, flexShrink: 0 }} />
                <label htmlFor="c299" style={{ fontSize: 13, color: C.textSub, lineHeight: 1.5, cursor: 'pointer' }}>
                  Súhlasím so spracovaním osobných údajov za účelom vypracovania nezáväznej ponuky v súlade s{' '}
                  <Link to="/privacy" target="_blank" rel="noopener noreferrer" style={{ color: C.blue, fontWeight: 600 }}>Zásadami ochrany súkromia</Link>{' *'}
                </label>
              </div>
              {consentError && <p style={{ color: C.red, fontSize: 13 }}>⚠️ Pre odoslanie dopytu musíte potvrdiť súhlas so spracovaním osobných údajov.</p>}
              {formStatus === 'error' && <p style={{ color: C.red, fontSize: 13 }}>❌ Systému sa nepodarilo odoslať formulár. Skúste to znova alebo nám zavolajte na číslo hore.</p>}
              <button onClick={handleSubmit} disabled={formStatus === 'loading'}
                className="btn-primary" style={{ width: '100%', height: 52, fontSize: 16, fontWeight: 700, opacity: formStatus === 'loading' ? 0.7 : 1 }}>
                {formStatus === 'loading' ? 'Pripravujem dáta...' : 'Odoslať dopyt a získať návrh zdarma →'}
              </button>
              <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap', marginTop: 4 }}>
                {[
                  { text: 'Návrh zdarma' }, { text: 'Odpovieme do 24h' }, { text: 'Bez záväzku' }
                ].map(b => (
                  <span key={b.text} style={{ fontSize: 14, color: C.textSub, fontWeight: 500, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ color: C.green, fontSize: 16, fontWeight: 700 }}>✓</span> {b.text}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ background: '#111827', padding: '48px 24px', textAlign: 'center' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', marginBottom: 16 }}>
          <img src={logoImg} alt="WebKlienti logo" width="36" height="36" style={{ height: 36, width: 36, objectFit: 'contain', borderRadius: '50%' }} />
          <span style={{ fontWeight: 700, fontSize: 17, color: '#fff' }}>Web<span style={{ color: '#60A5FA' }}>Klienti</span></span>
        </Link>
        <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 12 }}>
          <a href="mailto:info@webklienti.com" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: 14 }}>info@webklienti.com</a>
          <a href="tel:+421907890600" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: 14 }}>+421 907 890 600</a>
          <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>webklienti.com</span>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>IČO: 56360495 · Trnava, Slovensko</p>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>© {new Date().getFullYear()} WebKlienti · Profesionálny webdizajn zameraný na výsledky</p>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', fontStyle: 'italic' }}>Každý projekt staviame od prvej línie kódu pre maximálny výkon a rýchlosť. Žiadne pomalé, kupované šablóny.</p>
        <div style={{ marginTop: 32, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <button onClick={scrollToForm} className="btn-primary" style={{ fontSize: 15 }}>Chcem nezáväzný návrh webu zdarma</button>
        </div>
      </footer>

      {/* STICKY MOBILE CTA */}
      <div className="sticky-cta" style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 998,
        background: '#fff', borderTop: `1px solid ${C.border}`, padding: '12px 16px 20px',
        boxShadow: '0 -4px 20px rgba(0,0,0,0.08)',
        visibility: (formVisible || finalCtaVisible) ? 'hidden' : 'visible',
        opacity: (formVisible || finalCtaVisible) ? 0 : 1,
        transition: 'opacity .2s, visibility .2s'
      }}>
        <button onClick={scrollToForm} className="btn-primary" style={{ width: '100%', fontSize: 15, height: 50 }}>
          Chcem nový web od 299 € →
        </button>
      </div>

    </div>
  );
}
