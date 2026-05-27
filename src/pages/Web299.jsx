import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const API = 'https://webklienti-backend.onrender.com';

export default function Web299() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', biz: '', consent: false, package: 'One-page web — 299 €' });
  const [formStatus, setFormStatus] = useState('idle');
  const [consentError, setConsentError] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const scrollToForm = () => document.getElementById('form299')?.scrollIntoView({ behavior: 'smooth' });

  const handleSubmit = async () => {
    if (!form.name || !form.email) { alert('Vyplňte meno a email.'); return; }
    if (!form.consent) { setConsentError(true); return; }
    setConsentError(false);
    setFormStatus('loading');
    try {
      const res = await fetch(`${API}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, lang: 'sk' }),
      });
      const data = await res.json();
      if (data.success) {
        setFormStatus('success');
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: 'form_submit_success' });
        setForm({ name: '', email: '', phone: '', biz: '', consent: false, package: 'One-page web — 299 €' });
      } else { setFormStatus('error'); }
    } catch { setFormStatus('error'); }
  };

  const faqs = [
    { q: 'Je to vhodné pre môj biznis?', a: 'Áno — funguje pre služby, živnostníkov, lokálne firmy aj online projekty. Ak chcete byť viditeľní na Google a získavať dopyty, je to pre vás.' },
    { q: 'Ako rýchlo to bude hotové?', a: 'Štandardne do 5 pracovných dní od schválenia návrhu. V niektorých prípadoch aj skôr.' },
    { q: 'Musím mať skúsenosti s webmi?', a: 'Nie. Všetko nastavíme za vás — stačí nám základné info o vašom biznise.' },
    { q: 'Čo ak už mám web?', a: 'Pozrieme sa naň a buď ho opravíme, alebo odporúčame nový. Závisí od stavu.' },
    { q: 'Sú v cene mesačné poplatky?', a: 'Nie. Cena 299 € je jednorazová za tvorbu. Hosting a doména sa platia samostatne, pomôžeme s nastavením.' },
  ];

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: '#0f0f0f', color: '#f5f2eb', minHeight: '100vh' }}>

      <Helmet>
        <title>Web za 299 € – Tvorba webstránok pre malé firmy | WebKlienti</title>
        <meta name="description" content="Profesionálny firemný web za 299 €. Hotový za 5 dní, mobilná verzia, SEO základy, kontaktný formulár. Bez skrytých poplatkov. Slovensko a Česko." />
        <link rel="canonical" href="https://www.webklienti.com/web-299" />
        <link rel="alternate" hreflang="sk" href="https://www.webklienti.com/web-299" />
        <link rel="alternate" hreflang="x-default" href="https://www.webklienti.com/web-299" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.webklienti.com/web-299" />
        <meta property="og:title" content="Web za 299 € – Profesionálna webstránka pre malé firmy" />
        <meta property="og:description" content="Hotový firemný web za 299 €. Mobilná verzia, SEO, kontaktný formulár. Bez mesačných poplatkov. Hotový za 5 dní." />
        <meta property="og:image" content="https://www.webklienti.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="WebKlienti – Web za 299 €" />
        <meta property="og:locale" content="sk_SK" />
        <meta property="og:site_name" content="WebKlienti" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web za 299 € – Profesionálna webstránka pre malé firmy" />
        <meta name="twitter:description" content="Hotový firemný web za 299 €. Mobilná verzia, SEO, kontaktný formulár. Bez mesačných poplatkov." />
        <meta name="twitter:image" content="https://www.webklienti.com/og-image.png" />
        <script type="application/ld+json">{`{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "One-page web za 299 €",
  "description": "Profesionálna one-page webstránka pre malé firmy a živnostníkov. Mobilná verzia, SEO základy, kontaktný formulár, Google Maps. Hotová za 5 dní.",
  "brand": { "@type": "Brand", "name": "WebKlienti" },
  "url": "https://www.webklienti.com/web-299",
  "image": "https://www.webklienti.com/og-image.png",
  "offers": {
    "@type": "Offer",
    "price": "299",
    "priceCurrency": "EUR",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "url": "https://www.webklienti.com/web-299",
    "seller": { "@type": "Organization", "name": "WebKlienti", "url": "https://www.webklienti.com" }
  },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "80", "bestRating": "5" }
}`}</script>
        <script type="application/ld+json">{`{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Domov", "item": "https://www.webklienti.com/" },
    { "@type": "ListItem", "position": 2, "name": "Web za 299 €", "item": "https://www.webklienti.com/web-299" }
  ]
}`}</script>
      </Helmet>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @media (max-width: 640px) {
          .what-grid { grid-template-columns: 1fr 1fr !important; }
          .case-split { flex-direction: column !important; }
          .arrow-sep { display: none !important; }
          .reviews-grid { grid-template-columns: 1fr !important; }
          .steps-row { flex-direction: column !important; }
          .trust-grid { grid-template-columns: 1fr !important; }
        }
        input:focus, textarea:focus { border-color: #ffd200 !important; outline: none; }
        .btn-yellow { transition: transform 0.15s, box-shadow 0.15s; }
        .btn-yellow:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(255,210,0,0.35); }
        .faq-item { border-bottom: 1px solid rgba(255,255,255,0.07); }
        .faq-btn { width: 100%; background: none; border: none; color: #f5f2eb; cursor: pointer; display: flex; justify-content: space-between; align-items: center; padding: 18px 0; text-align: left; gap: 16px; font-family: inherit; }
      `}</style>

      {/* TOP BAR — scarcity */}
      <div style={{ background: '#1a1a1a', borderBottom: '1px solid rgba(255,210,0,0.3)', padding: '9px 24px', textAlign: 'center' }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: '#ffd200' }}>⚡ Kapacita tento týždeň: zostávajú <span style={{ background: '#ffd200', color: '#1a1a1a', padding: '1px 8px', borderRadius: 4 }}>2 miesta</span></span>
      </div>

      {/* NAV */}
      <div style={{ padding: '18px 32px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ fontWeight: 800, fontSize: 18, color: '#f5f2eb', textDecoration: 'none' }}>Web<span style={{ color: '#ffd200' }}>Klienti</span></Link>
        <a href="tel:+421907890600" style={{ color: '#ffd200', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>+421 907 890 600</a>
      </div>

      {/* ── 1. HERO — outcome-first ── */}
      <div style={{ padding: '60px 24px 56px', textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
        <h1 style={{ fontSize: 'clamp(30px, 6vw, 60px)', fontWeight: 900, lineHeight: 1.08, letterSpacing: -2.5, marginBottom: 16 }}>
          Získajte viac zákazníkov<br /><span style={{ color: '#ffd200' }}>z Google — za 299 €</span>
        </h1>
        <p style={{ fontSize: 17, color: 'rgba(245,242,235,0.6)', lineHeight: 1.65, marginBottom: 24 }}>
          Profesionálny web, ktorý sa zobrazuje na Google a premieňa návštevníkov na dopytujúcich zákazníkov.<br />
          <span style={{ color: 'rgba(245,242,235,0.35)' }}>Hotový za 5 dní. Bez mesačných poplatkov.</span>
        </p>
        <div style={{ display: 'inline-flex', alignItems: 'baseline', gap: 8, background: '#ffd200', color: '#1a1a1a', padding: '10px 28px', borderRadius: 14, marginBottom: 28 }}>
          <span style={{ fontSize: 'clamp(28px, 5vw, 50px)', fontWeight: 900, letterSpacing: -2 }}>od 299 €</span>
          <span style={{ fontSize: 14, fontWeight: 600, opacity: 0.6, textDecoration: 'line-through' }}>599 €</span>
        </div>
        <div style={{ display: 'block' }}>
          <button className="btn-yellow" onClick={scrollToForm} style={{ background: '#ffd200', color: '#1a1a1a', border: 'none', padding: '18px 48px', borderRadius: 100, fontWeight: 800, fontSize: 18, cursor: 'pointer', marginBottom: 12 }}>
            Chcem web za 299 € →
          </button>
          <p style={{ fontSize: 13, color: 'rgba(245,242,235,0.22)' }}>Bez záväzkov · Odpoveď do 24 hodín</p>
        </div>
      </div>

      {/* ── 2. PROOF STRIP — hneď pod hero ── */}
      <div style={{ background: '#1a1a1a', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '28px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { icon: '★', text: '4.9/5 hodnotenie', sub: '80+ projektov' },
            { icon: '⚡', text: 'Prvé leady do 48h', sub: 'po spustení' },
            { icon: '✓', text: 'Hotový za 5 dní', sub: 'bez čakania' },
            { icon: '✓', text: 'SK & CZ', sub: 'Slovensko, Česko' },
          ].map(t => (
            <div key={t.text} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', padding: '10px 20px', borderRadius: 12, textAlign: 'center', minWidth: 140 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#f5f2eb', display: 'flex', alignItems: 'center', gap: 5, justifyContent: 'center' }}>
                <span style={{ color: '#ffd200' }}>{t.icon}</span> {t.text}
              </div>
              <div style={{ fontSize: 11, color: 'rgba(245,242,235,0.35)', marginTop: 2 }}>{t.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 3. PROBLEM SECTION ── */}
      <div style={{ padding: '64px 24px', background: '#0f0f0f' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <p style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#555', marginBottom: 14, fontWeight: 700 }}>Prečo väčšina firiem prichádza o zákazníkov</p>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 900, letterSpacing: -1, marginBottom: 32, lineHeight: 1.2 }}>
            87% zákazníkov hľadá firmy online.<br />
            <span style={{ color: 'rgba(245,242,235,0.4)' }}>Nájdu vás — alebo vašu konkurenciu?</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              'Firma bez webu pôsobí nedôveryhodne — zákazníci idú ku konkurencii',
              'Starý alebo pomalý web odradí návštevníka skôr, ako si prečíta čo ponúkate',
              'Bez SEO vás Google nezobrazí — platíte za reklamu namiesto organiky',
              'Formulár, ktorý nefunguje na mobile = stratené dopyty každý deň',
            ].map((pt, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 12, padding: '14px 18px' }}>
                <span style={{ color: '#e24b4a', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✕</span>
                <span style={{ fontSize: 14, color: 'rgba(245,242,235,0.6)', lineHeight: 1.5 }}>{pt}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 4. CASE STUDY — proof pred offerom ── */}
      <div style={{ background: '#1a1a1a', padding: '64px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#555', marginBottom: 10, textAlign: 'center', fontWeight: 700 }}>Príklad z praxe</p>
          <h2 style={{ fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: 900, letterSpacing: -1, textAlign: 'center', marginBottom: 4 }}>Montwell</h2>
          <p style={{ textAlign: 'center', fontSize: 13, color: '#555', marginBottom: 28 }}>Výroba a montáž nábytku · Slovensko</p>
          <div className="case-split" style={{ display: 'flex', gap: 12, alignItems: 'stretch', marginBottom: 14 }}>
            <div style={{ flex: 1, background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '22px 18px' }}>
              <div style={{ display: 'inline-block', background: '#e24b4a', color: '#fff', padding: '3px 12px', borderRadius: 100, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 12 }}>PRED</div>
              <div style={{ fontSize: 24, marginBottom: 8 }}>📷</div>
              <p style={{ fontSize: 13, fontWeight: 700, color: '#f5f2eb', marginBottom: 8 }}>Len Instagram</p>
              {['64 sledovateľov', 'Žiadny web', 'Nenachádzali ich na Google'].map(i => (
                <div key={i} style={{ fontSize: 12, color: 'rgba(245,242,235,0.3)', display: 'flex', gap: 6, marginBottom: 4 }}>
                  <span style={{ color: '#e24b4a' }}>✗</span> {i}
                </div>
              ))}
            </div>
            <div className="arrow-sep" style={{ display: 'flex', alignItems: 'center', fontSize: 20, color: '#ffd200', flexShrink: 0 }}>→</div>
            <div style={{ flex: 1, background: '#0f0f0f', border: '1px solid rgba(255,210,0,0.25)', borderRadius: 16, padding: '22px 18px' }}>
              <div style={{ display: 'inline-block', background: '#4ade80', color: '#1a1a1a', padding: '3px 12px', borderRadius: 100, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 12 }}>PO</div>
              <div style={{ fontSize: 24, marginBottom: 8 }}>🌐</div>
              <p style={{ fontSize: 13, fontWeight: 700, color: '#ffd200', marginBottom: 8 }}>montwell.sk</p>
              {['Profesionálny web', 'Galéria realizácií', 'Zákazníci ich nájdu na Google'].map(i => (
                <div key={i} style={{ fontSize: 12, color: 'rgba(245,242,235,0.6)', display: 'flex', gap: 6, marginBottom: 4 }}>
                  <span style={{ color: '#4ade80' }}>✓</span> {i}
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: 'rgba(255,210,0,0.07)', border: '1px solid rgba(255,210,0,0.2)', borderRadius: 14, padding: '14px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: '#ffd200' }}>🎯 Prvé leady do 48 hodín · +120% viac dopytov po spustení</span>
            <a href="https://montwell.sk/" target="_blank" rel="noopener noreferrer" style={{ color: '#ffd200', fontSize: 13, fontWeight: 600, textDecoration: 'none', border: '1px solid rgba(255,210,0,0.3)', padding: '6px 14px', borderRadius: 100, whiteSpace: 'nowrap' }}>Pozrieť web →</a>
          </div>
        </div>
      </div>

      {/* ── 5. WHAT YOU GET ── */}
      <div style={{ padding: '64px 24px', background: '#0f0f0f' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: 900, letterSpacing: -1, textAlign: 'center', marginBottom: 8 }}>Čo dostanete za 299 €</h2>
          <p style={{ textAlign: 'center', fontSize: 14, color: 'rgba(245,242,235,0.35)', marginBottom: 32 }}>Kompletné nastavenie — nič navyše nepotrebujete</p>
          <div className="what-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 32 }}>
            {[
              { icon: '🎨', title: 'Dizajn na mieru', desc: 'Podľa vášho biznisu' },
              { icon: '📱', title: 'Mobile friendly', desc: 'Funguje na mobile' },
              { icon: '🔍', title: 'SEO základy', desc: 'Viditeľnosť na Google' },
              { icon: '📧', title: 'Kontaktný formulár', desc: 'Dopyty priamo k vám' },
              { icon: '📍', title: 'Google Maps', desc: 'Lokálne vyhľadávanie' },
              { icon: '💼', title: 'Firemný email', desc: 'Profesionálny dojem' },
            ].map(item => (
              <div key={item.title} style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 14, padding: '16px 14px' }}>
                <span style={{ fontSize: 22, display: 'block', marginBottom: 8 }}>{item.icon}</span>
                <p style={{ fontSize: 13, fontWeight: 700, color: '#f5f2eb', marginBottom: 3 }}>{item.title}</p>
                <p style={{ fontSize: 11, color: 'rgba(245,242,235,0.3)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <button className="btn-yellow" onClick={scrollToForm} style={{ background: '#ffd200', color: '#1a1a1a', border: 'none', padding: '14px 40px', borderRadius: 100, fontSize: 16, fontWeight: 800, cursor: 'pointer' }}>
              Chcem web za 299 € →
            </button>
          </div>
        </div>
      </div>

      {/* ── 6. HOW IT WORKS ── */}
      <div style={{ background: '#1a1a1a', padding: '64px 24px' }}>
        <div style={{ maxWidth: 660, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: 900, letterSpacing: -1, textAlign: 'center', marginBottom: 36 }}>Ako to funguje</h2>
          <div className="steps-row" style={{ display: 'flex' }}>
            {[
              { num: '01', title: 'Kontaktujete nás', desc: 'Formulár za 2 minúty' },
              { num: '02', title: 'Dostanete návrh', desc: 'Do 24 hodín' },
              { num: '03', title: 'Web je online', desc: 'Za 5 dní' },
            ].map((s, i) => (
              <div key={i} style={{ flex: 1, padding: '22px 14px', textAlign: 'center', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <div style={{ fontSize: 34, fontWeight: 900, color: '#ffd200', opacity: 0.6, lineHeight: 1, marginBottom: 10 }}>{s.num}</div>
                <p style={{ fontSize: 14, fontWeight: 700, color: '#f5f2eb', marginBottom: 4 }}>{s.title}</p>
                <p style={{ fontSize: 12, color: 'rgba(245,242,235,0.3)' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 7. REVIEWS ── */}
      <div style={{ padding: '64px 24px', background: '#0f0f0f' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: 900, letterSpacing: -1, textAlign: 'center', marginBottom: 24 }}>Čo hovoria klienti</h2>
          <div className="reviews-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              { author: 'Marek Novák', company: 'Novák & syn s.r.o.', text: 'Web bol hotový za 5 dní presne podľa predstáv. Zákazníci píšu, že vyzerá profesionálne.' },
              { author: 'Jana Kováčová', company: 'Kaderníctvo Jana', text: 'Konečne mám pekný web! Komunikácia super, cena výborná.' },
            ].map((r, i) => (
              <div key={i} style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: '20px 18px' }}>
                <div style={{ color: '#ffd200', fontSize: 12, marginBottom: 8 }}>★★★★★</div>
                <p style={{ fontSize: 13, color: 'rgba(245,242,235,0.6)', lineHeight: 1.65, marginBottom: 12 }}>"{r.text}"</p>
                <p style={{ fontWeight: 700, color: '#f5f2eb', fontSize: 13 }}>{r.author}</p>
                <p style={{ fontSize: 12, color: '#444' }}>{r.company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 8. TRUST ── */}
      <div style={{ background: '#1a1a1a', padding: '64px 24px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: 900, letterSpacing: -1, textAlign: 'center', marginBottom: 28 }}>Prečo nám firmy dôverujú</h2>
          <div className="trust-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
            {[
              { icon: '⚡', title: 'Rýchla komunikácia', desc: 'Odpoveď do 24 hodín' },
              { icon: '💰', title: 'Férová cena', desc: 'Konečná cena, žiadne skryté poplatky' },
              { icon: '📈', title: 'Reálne výsledky', desc: 'Weby, ktoré generujú dopyty' },
              { icon: '🏆', title: '80+ projektov', desc: 'Overené na SK & CZ trhu' },
            ].map(item => (
              <div key={item.title} style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 14, padding: '20px 18px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: '#f5f2eb', marginBottom: 3 }}>{item.title}</p>
                  <p style={{ fontSize: 12, color: 'rgba(245,242,235,0.35)' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 9. FAQ ── */}
      <div style={{ padding: '64px 24px', background: '#0f0f0f' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: 900, letterSpacing: -1, textAlign: 'center', marginBottom: 36 }}>Najčastejšie otázky</h2>
          <div>
            {faqs.map((item, i) => (
              <div key={i} className="faq-item">
                <button className="faq-btn" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span style={{ fontSize: 15, fontWeight: 600 }}>{item.q}</span>
                  <span style={{ color: '#ffd200', fontSize: 22, fontWeight: 700, flexShrink: 0, transition: 'transform .2s', transform: openFaq === i ? 'rotate(45deg)' : 'none', display: 'inline-block' }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{ paddingBottom: 18, fontSize: 14, color: 'rgba(245,242,235,0.5)', lineHeight: 1.7 }}>{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 10. SCARCITY + MID CTA ── */}
      <div style={{ background: '#1a1a1a', padding: '48px 24px' }}>
        <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ background: 'rgba(255,210,0,0.07)', border: '1px solid rgba(255,210,0,0.25)', borderRadius: 16, padding: '28px 24px', marginBottom: 28 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: '#ffd200', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }}>⚠ Obmedzená kapacita</p>
            <h2 style={{ fontSize: 'clamp(18px, 3vw, 26px)', fontWeight: 900, letterSpacing: -0.5, color: '#f5f2eb', marginBottom: 8, lineHeight: 1.2 }}>
              Pracujeme len s obmedzeným počtom klientov mesačne
            </h2>
            <p style={{ fontSize: 14, color: 'rgba(245,242,235,0.45)', marginBottom: 0 }}>
              Aby sme udržali kvalitu výsledkov — aktuálne zostávajú <strong style={{ color: '#ffd200' }}>2 voľné miesta</strong>.
            </p>
          </div>
          <button className="btn-yellow" onClick={scrollToForm} style={{ background: '#ffd200', color: '#1a1a1a', border: 'none', padding: '18px 48px', borderRadius: 100, fontWeight: 800, fontSize: 18, cursor: 'pointer', marginBottom: 12 }}>
            Rezervovať miesto →
          </button>
          <p style={{ fontSize: 13, color: 'rgba(245,242,235,0.22)' }}>Bez záväzkov · Odpoveď do 24 hodín</p>
        </div>
      </div>

      {/* ── 11. FINAL CTA YELLOW ── */}
      <div style={{ background: '#ffd200', padding: '52px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px, 4vw, 38px)', fontWeight: 900, letterSpacing: -1.5, color: '#1a1a1a', marginBottom: 10, lineHeight: 1.1 }}>
            Chcete web, ktorý získava zákazníkov?
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(26,26,26,0.55)', marginBottom: 24 }}>Hotový za 5 dní. Bez mesačných poplatkov. Bez rizika.</p>
          <button className="btn-yellow" onClick={scrollToForm} style={{ background: '#1a1a1a', color: '#ffd200', border: 'none', padding: '18px 48px', borderRadius: 100, fontSize: 18, fontWeight: 800, cursor: 'pointer', marginBottom: 16 }}>
            Chcem web za 299 € →
          </button>
          <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap', marginTop: 4 }}>
            {['Odpoveď do 24 hodín', 'Bez záväzkov', 'Hotový za 5 dní'].map(t => (
              <span key={t} style={{ fontSize: 13, color: 'rgba(26,26,26,0.5)', display: 'flex', alignItems: 'center', gap: 4 }}>
                <span>✓</span> {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── 12. FORM ── */}
      <div id="form299" style={{ padding: '64px 24px 80px', background: '#1a1a1a' }}>
        <div style={{ maxWidth: 500, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: 900, letterSpacing: -1, textAlign: 'center', marginBottom: 6 }}>Rezervujte si miesto</h2>
          <p style={{ textAlign: 'center', color: 'rgba(245,242,235,0.35)', fontSize: 14, marginBottom: 28 }}>Vyplňte formulár — ozveme sa do 24 hodín.</p>
          {formStatus === 'success' ? (
            <div style={{ background: '#0f0f0f', border: '1px solid rgba(255,210,0,0.2)', borderRadius: 20, padding: '48px 32px', textAlign: 'center' }}>
              <div style={{ fontSize: 48, marginBottom: 14 }}>🎉</div>
              <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 10, color: '#ffd200' }}>Ďakujeme!</h3>
              <p style={{ color: 'rgba(245,242,235,0.5)', fontSize: 15 }}>Ozveme sa vám do 24 hodín.</p>
            </div>
          ) : (
            <div style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { key: 'name', label: 'Meno a priezvisko *', type: 'text', placeholder: 'Ján Novák' },
                { key: 'email', label: 'Email *', type: 'email', placeholder: 'jan@firma.sk' },
                { key: 'phone', label: 'Telefón', type: 'tel', placeholder: '+421 900 000 000' },
                { key: 'biz', label: 'Čo robíte?', type: 'text', placeholder: 'napr. kaderníctvo, reštaurácia...' },
              ].map(f => (
                <div key={f.key}>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, marginBottom: 6, color: 'rgba(245,242,235,0.4)', textTransform: 'uppercase', letterSpacing: 0.5 }}>{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder} value={form[f.key]} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))} style={{ width: '100%', padding: '12px 15px', background: '#1a1a1a', border: '1.5px solid rgba(255,255,255,0.1)', borderRadius: 10, fontSize: 15, color: '#f5f2eb', fontFamily: 'inherit' }} />
                </div>
              ))}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginTop: 4 }}>
                <input id="c299" type="checkbox" checked={form.consent} onChange={e => { setForm(p => ({ ...p, consent: e.target.checked })); setConsentError(false); }} style={{ marginTop: 3, width: 16, height: 16, cursor: 'pointer', accentColor: '#ffd200', flexShrink: 0 }} />
                <label htmlFor="c299" style={{ fontSize: 12, color: 'rgba(245,242,235,0.3)', lineHeight: 1.5, cursor: 'pointer' }}>
                  Súhlasím so{' '}
                  <Link to="/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#ffd200', textDecoration: 'underline' }}>
                    spracovaním osobných údajov
                  </Link>{' *'}
                </label>
              </div>
              {consentError && <p style={{ color: '#e24b4a', fontSize: 13, marginTop: -4 }}>⚠️ Potvrďte súhlas so spracovaním údajov.</p>}
              {formStatus === 'error' && <p style={{ color: '#e24b4a', fontSize: 13 }}>❌ Chyba. Skúste znova alebo nás kontaktujte priamo.</p>}
              <button className="btn-yellow" onClick={handleSubmit} disabled={formStatus === 'loading'} style={{ background: '#ffd200', color: '#1a1a1a', border: 'none', padding: '16px', borderRadius: 100, fontSize: 17, fontWeight: 800, cursor: 'pointer', marginTop: 4, opacity: formStatus === 'loading' ? 0.7 : 1 }}>
                {formStatus === 'loading' ? 'Odosielam...' : 'Chcem web za 299 € →'}
              </button>
              <p style={{ textAlign: 'center', fontSize: 12, color: 'rgba(245,242,235,0.18)' }}>Bez záväzkov · Bezplatná konzultácia</p>
            </div>
          )}
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ padding: '22px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <p style={{ fontSize: 12, color: 'rgba(245,242,235,0.18)' }}>© 2025 Web Klienti · info@webklienti.com · +421 907 890 600</p>
      </div>

      {/* STICKY MOBILE CTA */}
      <div style={{ display: 'none' }} className="sticky-mobile-cta">
        <style>{`.sticky-mobile-cta { display: none !important; } @media (max-width: 640px) { .sticky-mobile-cta { display: block !important; position: fixed; bottom: 0; left: 0; right: 0; z-index: 998; background: #1a1a1a; border-top: 1px solid rgba(255,210,0,0.3); padding: 12px 16px 20px; } }`}</style>
        <button onClick={scrollToForm} className="btn-yellow" style={{ width: '100%', background: '#ffd200', color: '#1a1a1a', border: 'none', padding: '16px', borderRadius: 100, fontSize: 16, fontWeight: 800, cursor: 'pointer' }}>
          Chcem web za 299 € →
        </button>
      </div>

    </div>
  );
}
