import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { RiskSection } from '../components/home/MiscSections';
import sk from '../i18n/sk';
import logoImg from '../assets/logo.webp';
import montwellImg from '../assets/montwell-preview.webp';

const API = 'https://webklienti-backend-1.onrender.com';

const C = {
  bg: '#F9FAFB', white: '#FFFFFF', text: '#111827', textSub: '#4B5563',
  border: '#E5E7EB', blue: '#2563EB', blueDark: '#1D4ED8',
  green: '#16A34A', red: '#DC2626', orange: '#C2410C',
};

export default function Web149() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', website: '', message: '', consent: false, package: 'Landing page вЂ” 149 в‚¬' });
  const [formStatus, setFormStatus] = useState('idle');
  const [consentError, setConsentError] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [finalCtaVisible, setFinalCtaVisible] = useState(false);

  const scrollToForm = () => { document.getElementById('form149')?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); };

  useEffect(() => {
    const el = document.getElementById('form149');
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
    if (!form.name || !form.email) { alert('VyplЕ€te meno a email.'); return; }
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
        setForm({ name: '', email: '', phone: '', website: '', message: '', consent: false, package: 'Landing page вЂ” 149 в‚¬' });
      } else { setFormStatus('error'); }
    } catch { setFormStatus('error'); }
  };

  const faqs = [
    { q: 'Je to jednorazovГЎ platba bez mesaДЌnГЅch poplatkov?', a: 'Nie. U nГЎs platГ­te len jednorazovo za kompletnГ© zhotovenie webu. Web je po odovzdanГ­ 100 % vГЎЕЎ. JedinГ© roДЌnГ© nГЎklady sГє za vaЕЎu domГ©nu a webhosting (cca 20вЂ“30 в‚¬ roДЌne), ktorГ© platГ­te priamo poskytovateДѕovi hostingu вЂ” s ich vГЅberom a nastavenГ­m vГЎm kompletne pomГґЕѕeme.' },
    { q: 'Ako prebieha platba a kedy posielam peniaze?', a: 'ZaДЌiatok je Гєplne bezpeДЌnГЅ. VyplnГ­te formulГЎr, my spravГ­me analГЅzu a do 24 hodГ­n vГЎm poЕЎleme prvГЅ vizuГЎlny koncept zdarma. Ak poviete \'ГЎno, toto sa nГЎm pГЎДЌi\', podpГ­ЕЎeme zmluvu a uhradГ­te 50% zГЎlohu. ZvyЕЎnГЅch 50% platГ­te aЕѕ vtedy, keДЏ je web hotovГЅ, otestovanГЅ a pripravenГЅ na spustenie.' },
    { q: 'PreДЌo sГє vaЕЎe ceny vГЅrazne niЕѕЕЎie ako u klasickГЅch agentГєr?', a: 'NeplatГ­me drahГ© kancelГЎrie v centre mesta, manaЕѕГ©rov ani sekretГЎrky. Sme efektГ­vny tГ­m vГЅvojГЎrov a dizajnГ©rov. Vyvinuli sme vlastnГ© optimalizovanГ© postupy, vДЏaka ktorГЅm dokГЎЕѕeme eliminovaЕҐ zbytoДЌnГ© prestoje a dodaЕҐ ЕЎpiДЌkovГЅ firemnГЅ web za zlomok beЕѕnej ceny.' },
    { q: 'ДЊo ak nemГЎm Еѕiadne texty ani profesionГЎlne fotografie?', a: 'ЕЅiadny problГ©m, postarГЎme sa o to. Na zГЎklade krГЎtkeho rozhovoru o vaЕЎom biznise napГ­ЕЎeme konverznГ© texty za vГЎs. PokiaДѕ nemГЎte vlastnГ© fotky z produkcie, vyberieme licencovanГ© a vysoko profesionГЎlne snГ­mky z prГ©miovГЅch fotobГЎnk, ktorГ© dokonale sadnГє k vaЕЎej znaДЌke.' },
    { q: 'Kto bude vlastniЕҐ hotovГє webstrГЎnku?', a: 'Vy. Na rozdiel od inГЅch firiem, ktorГ© vГЎs uzamknГє do vlastnГЅch platforiem na mesaДЌnГ© prenГЎjmy, od nГЎs dostanete plnГ© administrГЎtorskГ© prГ­stupy. Web funguje nezГЎvisle a mГґЕѕete si s nГ­m robiЕҐ ДЌokoДѕvek.' },
    { q: 'ДЊo sa stane, ak sa mi vГЎЕЎ prvГЅ nГЎvrh do 24 hodГ­n nebude pГЎДЌiЕҐ?', a: 'Jednoducho nГЎm poviete, ДЌo mГЎme zmeniЕҐ a my nГЎvrh upravГ­me. Ak by ste mali pocit, Еѕe sme sa Гєplne minuli vaЕЎej predstave, spoluprГЎcu mГґЕѕete bez akГЅchkoДѕvek otГЎzok a poplatkov ukonДЌiЕҐ. KeДЏЕѕe ste pred nГЎvrhom niДЌ neplatili, neriskujete vГґbec niДЌ.' },
  ];



  return (
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", background: C.white, color: C.text, minHeight: '100vh' }}>

      <Helmet>
        <title>Landing page za 150 в‚¬ вЂ“ WebstrГЎnka od 3 dnГ­ | WebKlienti</title>
        <meta name="description" content="Landing page od 150 в‚¬. Dizajn navrhnutГЅ na zГ­skavanie zГЎkaznГ­kov, mobilnГЎ verzia, SEO zГЎklady a kontaktnГЅ formulГЎr. Dodanie od 3 dnГ­." />
        <link rel="canonical" href="https://www.webklienti.com/web-149" />
        <link rel="alternate" hreflang="sk" href="https://www.webklienti.com/web-149" />
        <link rel="alternate" hreflang="x-default" href="https://www.webklienti.com/web-149" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.webklienti.com/web-149" />
        <meta property="og:title" content="Landing page za 149 в‚¬ вЂ“ WebstrГЎnka od 3 dnГ­" />
        <meta property="og:description" content="Landing page od 149 в‚¬. MobilnГЎ verzia, SEO, kontaktnГЅ formulГЎr. Bez mesaДЌnГЅch poplatkov. Dodanie od 3 dnГ­." />
        <meta property="og:image" content="https://www.webklienti.com/og-image.jpg" />
        <meta property="og:locale" content="sk_SK" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"Product","name":"Landing page za 149 в‚¬","description":"ProfesionГЎlna landing page pre malГ© firmy. MobilnГЎ verzia, SEO zГЎklady, kontaktnГЅ formulГЎr, Google Maps. Dodanie od 3 dnГ­.","image":"https://www.webklienti.com/og-image.jpg","brand":{"@type":"Brand","name":"WebKlienti"},"url":"https://www.webklienti.com/web-149","offers":{"@type":"Offer","price":"149","priceCurrency":"EUR","availability":"https://schema.org/InStock","seller":{"@type":"Organization","name":"WebKlienti","url":"https://www.webklienti.com"}},"aggregateRating":{"@type":"AggregateRating","ratingValue":"5","reviewCount":"1","bestRating":"5","worstRating":"1"},"review":[{"@type":"Review","author":{"@type":"Person","name":"Matus K."},"reviewRating":{"@type":"Rating","ratingValue":"5","bestRating":"5"},"reviewBody":"Super sluЕѕby! Som veДѕmi spokojnГЅ."}]}`}</script>
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
          .montwell-grid { grid-template-columns: 1fr !important; }
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
          рџ”Ґ Akcia вЂ” 50% zДѕava na spustenie projektu В· PrijГ­mame len 2 novГ© projekty tГЅЕѕdenne
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
          <a href="#cena" style={{ fontSize: 14, color: C.textSub, textDecoration: 'none', fontWeight: 500 }}>CennГ­k</a>
          <a href="#faq" style={{ fontSize: 14, color: C.textSub, textDecoration: 'none', fontWeight: 500 }}>FAQ</a>
          <button onClick={scrollToForm} className="btn-primary" style={{ height: 40, fontSize: 14, padding: '0 18px' }}>ZГ­skaЕҐ nГЎvrh zdarma</button>
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
          {[['#portfolio', 'Referencie'], ['#cena', 'CennГ­k'], ['#faq', 'FAQ']].map(([href, label]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)} style={{ color: C.text, textDecoration: 'none', fontSize: 18, fontWeight: 600, padding: '8px 0', borderBottom: `1px solid ${C.border}` }}>{label}</a>
          ))}
          <button onClick={scrollToForm} className="btn-primary" style={{ width: '100%', marginTop: 8 }}>ZГ­skaЕҐ nГЎvrh zdarma</button>
        </div>
      )}

      {/* 1. HERO */}
      <div style={{ background: C.white, borderBottom: `1px solid ${C.border}`, padding: '56px 24px 48px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(37,99,235,0.07)', border: `1px solid rgba(37,99,235,0.18)`, padding: '5px 14px', borderRadius: 100, fontSize: 13, fontWeight: 600, color: C.blue, marginBottom: 20 }}>
            вњ“ RealizГЎcia Montwell.sk вЂ“ web, ktorГЅ prinГЎЕЎa dopyty z Google aj priamo z prehliadaДЌa
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5.5vw, 56px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: -2, color: C.text, marginBottom: 16 }}>
            Web, ktorГЅ vaЕЎej firme reГЎlne<br />
            <span style={{ color: C.blue }}>prinesie novГЅch zГЎkaznГ­kov</span>
          </h1>
          <p style={{ fontSize: 17, color: C.textSub, lineHeight: 1.65, marginBottom: 28, maxWidth: 580, margin: '0 auto 28px' }}>
            ModernГЅ dizajn navrhnutГЅ na zГ­skavanie dopytov + silnГ© SEO + kontaktnГЅ formulГЎr a mapy вЂ” vЕЎetko v cene.<br />
            <strong style={{ color: C.text }}>Hotovo uЕѕ od 3 dnГ­ za 149 в‚¬.</strong>
          </p>
          <div className="benefit-list" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 16px', maxWidth: 560, margin: '0 auto 28px', textAlign: 'left' }}>
            {[
              'Dizajn navrhnutГЅ tak, aby nГЎvЕЎtevnГ­ka premenil na dopyt',
              'BezchybnГ© zobrazenie na mobiloch a tabletoch',
              'KontaktnГ© formulГЎre, mapy a prepojenia v cene',
              'SEO optimalizГЎcie, aby vГЎs klienti naЕЎli na Google',
              'BleskovГ© dodanie od 3 dnГ­ bez zbytoДЌnГ©ho naЕҐahovania',
              'ГљvodnГЅ vizuГЎlny nГЎvrh do 24 hodГ­n ZDARMA',
            ].map(b => (
              <div key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 14, color: C.textSub }}>
                <span style={{ color: C.green, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>вњ“</span> {b}
              </div>
            ))}
          </div>
          <div className="hero-ctas" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={scrollToForm} className="btn-primary btn-primary-lg">Chcem nezГЎvГ¤znГЅ nГЎvrh webu zdarma</button>
            <a href="https://wa.me/421907890600" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ height: 56, fontSize: 15 }}>рџ’¬ WhatsApp</a>
          </div>
          <p style={{ fontSize: 13, color: C.textSub, marginTop: 12 }}>prvГЅ koncept do 24 hodГ­n В· Гєplne bez zГЎvГ¤zkov В· ukГЎЕѕeme vГЎm, ako predГЎvaЕҐ viac</p>
        </div>
      </div>

      {/* 2. ДЊO ZГЌSKATE */}
      <div id="cena" style={{ background: C.bg, padding: '64px 24px', borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p className="section-label" style={{ textAlign: 'center' }}>TransparentnГ© ceny</p>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 800, letterSpacing: -1, textAlign: 'center', marginBottom: 8 }}>ДЊo zГ­skate za 149 в‚¬</h2>
          <p style={{ textAlign: 'center', color: C.textSub, fontSize: 15, marginBottom: 36 }}>KompletnГ© rieЕЎenie. ЕЅiadne skrytГ© poplatky. NiДЌ navyЕЎe nepotrebujete.</p>
          <div className="what-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 32 }}>
            {[
              { icon: 'рџЋЁ', title: 'PredajnГЅ dizajn na mieru', desc: 'Nie template вЂ” web navrhnutГЅ na premenu nГЎvЕЎtevnГ­kov na dopyty' },
              { icon: 'рџ“±', title: 'MobilnГЎ verzia', desc: 'Prvotriedna rГЅchlosЕҐ a bezchybnГ© zobrazenie na smartfГіnoch' },
              { icon: 'рџ”Ќ', title: 'SEO zГЎklady', desc: 'Meta tagy, rГЅchlosЕҐ, ЕЎtruktГєra pre lokГЎlne vyhДѕadГЎvanie na Google' },
              { icon: 'рџ“§', title: 'KontaktnГЅ formulГЎr', desc: 'Dopyty a objednГЎvky chodia priamo na vГЎЕЎ email' },
              { icon: 'рџ“Ќ', title: 'Google Maps + prepojenia', desc: 'Hovor, email, mapa a WhatsApp вЂ” vЕЎetko jednГЅm kliknutГ­m' },
              { icon: 'рџ”’', title: 'GDPR + Google Business', desc: 'Cookies liЕЎta, SSL a BONUS: audit / nastavenie Google Business profilu' },
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
              <p style={{ fontSize: 13, fontWeight: 600, color: C.blue, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6 }}>JednorazovГЎ cena В· ЕЅiadne mesaДЌnГ© poplatky</p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                <span style={{ fontSize: 48, fontWeight: 800, color: C.text, letterSpacing: -2 }}>149 в‚¬</span>
                <span style={{ fontSize: 16, color: C.textSub, textDecoration: 'line-through' }}>beЕѕne 599 в‚¬</span>
              </div>
              <p style={{ fontSize: 14, color: C.textSub, marginTop: 4 }}>KompletnГ© odovzdanie od 3 pracovnГЅch dnГ­</p>
            </div>
            <button onClick={scrollToForm} className="btn-primary btn-primary-lg" style={{ width: '100%', maxWidth: 280 }}>ZvoliЕҐ tento balГ­k a zГ­skaЕҐ nГЎvrh в†’</button>
          </div>
        </div>
      </div>

      {/* 3. PORTFOLIO / REFERENCIE */}
      <div id="portfolio" style={{ background: C.white, padding: '64px 24px', borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p className="section-label" style={{ textAlign: 'center' }}>Case Study</p>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 800, letterSpacing: -1, textAlign: 'center', marginBottom: 40 }}>OverenГЅ projekt</h2>
          
          <div className="card" style={{ padding: 32, marginBottom: 24 }}>
            <div className="montwell-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'stretch', marginBottom: 28 }}>
              <div style={{ borderRadius: 12, overflow: 'hidden', border: `1px solid ${C.border}`, display: 'flex' }}>
                <a href="https://montwell.sk" target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%' }}>
                  <img src={montwellImg} alt="Montwell webstrГЎnka" width="600" height="324" style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} loading="lazy" />
                </a>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: 14, color: C.textSub, marginBottom: 12 }}>ReГЎlny vГЅsledok prГЎce s klientom вЂ” bez ЕЎablГіn</p>
                <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 20 }}>Montwell</h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, flexGrow: 1, alignItems: 'stretch' }}>
                  {/* PRED */}
                  <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 12, padding: '20px 18px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'inline-block', background: '#FEE2E2', color: '#991B1B', padding: '2px 10px', borderRadius: 100, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 14, alignSelf: 'flex-start' }}>PRED</div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 16 }}>Len Instagram</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flexGrow: 1, justifyContent: 'center' }}>
                      {['MajГє len Instagram profil', 'ЕЅiadny web', 'Е¤aЕѕko nГЎjdateДѕnГ­ na Google'].map((pt, index) => (
                        <div key={index} style={{ fontSize: 13, color: C.textSub, display: 'flex', gap: 8, alignItems: 'center' }}>
                          <span style={{ color: '#B91C1C', fontWeight: 700, flexShrink: 0 }}>вњ•</span> {pt}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* PO */}
                  <div style={{ background: '#F0FDF4', border: '1.5px solid #86EFAC', borderRadius: 12, padding: '20px 18px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'inline-block', background: '#DCFCE7', color: '#166534', padding: '2px 10px', borderRadius: 100, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 14, alignSelf: 'flex-start' }}>PO</div>
                    <p style={{ fontSize: 14, fontWeight: 700, marginBottom: 16 }}>
                      <a href="https://montwell.sk" target="_blank" rel="noopener noreferrer" style={{ color: C.blue, textDecoration: 'none' }}>
                        ReГЎlny predajnГЅ web: montwell.sk в†—
                      </a>
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flexGrow: 1, justifyContent: 'center' }}>
                      {['ProfesionГЎlny web', 'GalГ©ria realizГЎciГ­', 'Klienti ich dnes nГЎjdu cez Google vyhДѕadГЎvanie', 'PrvГ© dopyty a objednГЎvky uЕѕ v prvГЅch tГЅЕѕdЕ€och'].map((pt, index) => (
                        <div key={index} style={{ fontSize: 13, color: '#166534', display: 'flex', gap: 8, alignItems: 'center' }}>
                          <span style={{ color: C.green, fontWeight: 700, flexShrink: 0 }}>вњ“</span> {pt}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Result bar */}
            <div style={{ background: 'rgba(37,99,235,0.05)', border: `1px solid rgba(37,99,235,0.15)`, borderRadius: 12, padding: '14px 20px' }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: C.blue }}>рџЋЇ Montwell.sk spustenГЅ od 3 pracovnГЅch dnГ­ В· profesionГЎlny web, ktorГЅ buduje dГґveru</span>
            </div>
            <Link to="/blog/spolupraca-s-montwell-webstranka" style={{ display: 'inline-block', marginTop: 16, color: C.blue, fontWeight: 700, textDecoration: 'none' }}>
              PreДЌГ­taЕҐ case study o spoluprГЎci s Montwell в†’
            </Link>
          </div>

          {/* REVIEWS */}
          <p style={{ fontSize: 12, fontWeight: 600, color: C.textSub, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16, marginTop: 48 }}>Hodnotenia klientov</p>
          <h3 style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: 24 }}>ДЊo hovoria naЕЎi klienti</h3>

          <style>{`.google-cta-card:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(0,0,0,0.08); }`}</style>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 24 }}>
            {/* Single real review */}
            <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 12, transition: 'all .2s' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <div style={{ color: '#FBBF24', fontSize: 14, letterSpacing: 1 }}>в…в…в…в…в…</div>
              </div>
              <p style={{ fontSize: 15, color: C.text, lineHeight: 1.7, fontStyle: 'italic', flexGrow: 1 }}>вЂћSuper sluЕѕby! Som veДѕmi spokojnГЅ."</p>
              <div>
                <p style={{ fontWeight: 700, color: C.text, fontSize: 14 }}>Matus K.</p>
                <p style={{ fontSize: 12, color: C.textSub, marginTop: 2 }}>OverenГЎ recenzia Google</p>
              </div>
            </div>

            {/* CTA card вЂ” more reviews on Google */}
            <a href="https://maps.app.goo.gl/tDf7dRkYB2eZ3j9d7" target="_blank" rel="noopener noreferrer" className="card google-cta-card"
              style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, cursor: 'pointer', transition: 'all .2s' }}
            >
              <div style={{ fontSize: 32 }}>в­ђ</div>
              <p style={{ fontSize: 15, fontWeight: 600, color: C.text, textAlign: 'center', lineHeight: 1.4 }}>PozrieЕҐ vЕЎetky Google hodnotenia в†’</p>
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

      {/* 4. PROCES */}
      <div style={{ background: C.bg, padding: '64px 24px', borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <p className="section-label" style={{ textAlign: 'center' }}>NГЎЕЎ proces</p>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 800, letterSpacing: -1, textAlign: 'center', marginBottom: 8 }}>OdoslanГ­m formulГЎra k novГЅm zГЎkaznГ­kom od 3 dnГ­</h2>
          <p style={{ textAlign: 'center', color: C.textSub, fontSize: 15, marginBottom: 40 }}>JednoduchГЅ a transparentnГЅ proces bez zbytoДЌnГ©ho technickГ©ho ЕѕargГіnu.</p>
          <div className="steps-row" style={{ display: 'flex', background: C.white, border: `1px solid ${C.border}`, borderRadius: 16, overflow: 'hidden' }}>
            {[
              { num: '01', title: 'NezГЎvГ¤znГЅ dopyt', desc: 'VyplnГ­te krГЎtky formulГЎr o vaЕЎom biznise вЂ” za 2 minГєty.', icon: 'рџ“‹' },
              { num: '02', title: 'Koncept do 24 hodГ­n', desc: 'Гљplne zdarma vГЎm vypracujeme ГєvodnГЅ vizuГЎlny nГЎvrh rieЕЎenia.', icon: 'рџЋЁ' },
              { num: '03', title: 'Vyladenie detailov', desc: 'DoladГ­me texty, ЕЎtruktГєru a funkcie presne podДѕa vГЎs.', icon: 'вљ™пёЏ' },
              { num: '04', title: 'Spustenie od 3 dnГ­', desc: 'Web nasadГ­me na vaЕЎu domГ©nu a odovzdГЎme vГЎm kДѕГєДЌe.', icon: 'рџљЂ' },
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
            <button onClick={scrollToForm} className="btn-primary btn-primary-lg" style={{ width: '100%', maxWidth: 360 }}>ZГ­skaЕҐ nezГЎvГ¤znГЅ nГЎvrh rieЕЎenia в†’</button>
          </div>
        </div>
      </div>

      {/* 5. GARANCIA / RISK вЂ” use shared RiskSection for exact match */}
      <RiskSection t={sk} />

      {/* 6. FAQ вЂ” accordion ЕЎtГЅl ako hlavnГЅ web */}
      <div id="faq" style={{ background: C.white, padding: '96px 24px', borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <p className="section-label">OdpovedГЎme</p>
          <h2 style={{ fontSize: 'clamp(28px, 3vw, 36px)', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: 40 }}>VЕЎetko, ДЌo potrebujete vedieЕҐ pred ЕЎtartom</h2>
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
            Chcete web, ktorГЅ bude pre vaЕЎu firmu reГЎlne zarГЎbaЕҐ?
          </h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.92)', marginBottom: 40, lineHeight: 1.6 }}>
            NeДЌakajte, kГЅm vГЎs konkurencia predbehne Гєplne. VyplЕ€te formulГЎr a zajtra mГЎte na stole rieЕЎenie.
          </p>
          <button onClick={scrollToForm} style={{ display: 'inline-flex', alignItems: 'center', height: 56, padding: '0 32px', background: '#fff', color: C.blue, border: 'none', borderRadius: 12, fontSize: 17, fontWeight: 700, cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>
            ZГ­skaЕҐ nezГЎvГ¤znГЅ nГЎvrh rieЕЎenia в†’
          </button>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.9)', marginTop: 16 }}>prvГЅ koncept do 24 hodГ­n В· Гєplne bez zГЎvГ¤zkov В· ukГЎЕѕeme vГЎm, ako predГЎvaЕҐ viac</p>
        </div>
      </div>

      {/* 9. FORM */}
      <div id="form149" style={{ padding: '96px 24px 140px', background: C.bg }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <p className="section-label">RГЅchly dopyt</p>
          <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: 12 }}>ZГ­skajte profesionГЎlny nГЎvrh webu do 24 hodГ­n zdarma</h2>
          <p style={{ color: C.textSub, marginBottom: 40, fontSize: 16, lineHeight: 1.6 }}>NapГ­ЕЎte nГЎm zГЎkladnГ© detaily. NГЎvrh je nezГЎvГ¤znГЅ вЂ” ak sa vГЎm nebude pГЎДЌiЕҐ, niДЌ neplatГ­te.</p>
          
          {formStatus === 'success' ? (
            <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 16, padding: '52px 32px', textAlign: 'center' }}>
              <div style={{ fontSize: 48, marginBottom: 14 }}>рџЋ‰</div>
              <h3 style={{ fontSize: 26, fontWeight: 700, marginBottom: 10 }}>SkvelГ©, dГЎta dorazili!</h3>
              <p style={{ color: C.textSub, fontSize: 15 }}>VГЎЕЎ dopyt sme zaevidovali. IhneДЏ sa pГєЕЎЕҐame do analГЅzy a do 24 hodГ­n vГЎs budeme kontaktovaЕҐ s hotovГЅm nГЎvrhom.</p>
            </div>
          ) : (
            <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 16, padding: '40px 36px', display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { key: 'name', label: 'VaЕЎe meno a priezvisko *', type: 'text', placeholder: 'napr. JГЎn NovГЎk' },
                { key: 'email', label: 'KontaktnГЅ e-mail *', type: 'email', placeholder: 'jan@firma.sk' },
                { key: 'phone', label: 'TelefГіnne ДЌГ­slo (pre rГЅchle upresnenie)', type: 'tel', placeholder: '+421 911 111 222' },
                { key: 'website', label: 'VГЎЕЎ aktuГЎlny web (ak mГЎte)', type: 'url', placeholder: 'napr. www.mojastranka.sk' },
                { key: 'message', label: 'ДЊo je hlavnГЅm cieДѕom vГЎЕЎho novГ©ho webu?', type: 'text', placeholder: 'ДЊomu sa venujete? ДЊo od novГ©ho webu oДЌakГЎvate?' },
              ].map(f => (
                <div key={f.key}>
                  <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 8, color: C.text }}>{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder} value={form[f.key]}
                    onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                    style={{ width: '100%', padding: '12px 16px', background: C.white, border: `1.5px solid ${C.border}`, borderRadius: 10, fontSize: 15, color: C.text, fontFamily: 'Inter, sans-serif' }} />
                </div>
              ))}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <input id="c149" type="checkbox" checked={form.consent}
                  onChange={e => { setForm(p => ({ ...p, consent: e.target.checked })); setConsentError(false); }}
                  style={{ marginTop: 3, width: 18, height: 18, cursor: 'pointer', accentColor: C.blue, flexShrink: 0 }} />
                <label htmlFor="c149" style={{ fontSize: 13, color: C.textSub, lineHeight: 1.5, cursor: 'pointer' }}>
                  SГєhlasГ­m so spracovanГ­m osobnГЅch Гєdajov za ГєДЌelom vypracovania nezГЎvГ¤znej ponuky v sГєlade s{' '}
                  <Link to="/privacy" target="_blank" rel="noopener noreferrer" style={{ color: C.blue, fontWeight: 600 }}>ZГЎsadami ochrany sГєkromia</Link>{' *'}
                </label>
              </div>
              {consentError && <p style={{ color: C.red, fontSize: 13 }}>вљ пёЏ Pre odoslanie dopytu musГ­te potvrdiЕҐ sГєhlas so spracovanГ­m osobnГЅch Гєdajov.</p>}
              {formStatus === 'error' && <p style={{ color: C.red, fontSize: 13 }}>вќЊ SystГ©mu sa nepodarilo odoslaЕҐ formulГЎr. SkГєste to znova.</p>}
              <button onClick={handleSubmit} disabled={formStatus === 'loading'}
                className="btn-primary" style={{ width: '100%', height: 52, fontSize: 16, fontWeight: 700, opacity: formStatus === 'loading' ? 0.7 : 1 }}>
                {formStatus === 'loading' ? 'Pripravujem dГЎta...' : 'OdoslaЕҐ dopyt a zГ­skaЕҐ nГЎvrh zdarma в†’'}
              </button>
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
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>IДЊO: 56360495 В· Trnava, Slovensko</p>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>В© {new Date().getFullYear()} WebKlienti В· ProfesionГЎlny webdizajn zameranГЅ na vГЅsledky</p>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', fontStyle: 'italic' }}>KaЕѕdГЅ projekt staviame od prvej lГ­nie kГіdu pre maximГЎlny vГЅkon a rГЅchlosЕҐ. ЕЅiadne pomalГ©, kupovanГ© ЕЎablГіny.</p>
        <div style={{ marginTop: 32, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <button onClick={scrollToForm} className="btn-primary" style={{ fontSize: 15 }}>Chcem nezГЎvГ¤znГЅ nГЎvrh webu zdarma</button>
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
          Chcem landing page od 149 в‚¬ в†’
        </button>
      </div>

    </div>
  );
}

