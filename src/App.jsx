import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';
import logoImg from './assets/logo.webp';

import sk from './i18n/sk';
import cz from './i18n/cz';
import en from './i18n/en';

import { C, NAV_IDS } from './lib/constants';
import { apiClient } from './lib/api';

import HeroSection from './components/home/HeroSection';
import ProblemSection from './components/home/ProblemSection';
import { AgitationStrip, SolutionSection } from './components/home/SolutionSection';
import CaseStudySection from './components/home/CaseStudySection';
import PricingSection from './components/home/PricingSection';
import { RiskSection, FAQSection, FinalCtaSection } from './components/home/MiscSections';
import ContactSection from './components/home/ContactSection';

const Blog = lazy(() => import('./pages/Blog'));
const Privacy = lazy(() => import('./pages/Privacy'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Web299 = lazy(() => import('./pages/Web299'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

const T = { sk, cz, en };
const EMPTY_FORM = { name: '', email: '', phone: '', website: '', package: '', message: '', consent: false };

function HomePage() {
  const [lang, setLang] = useState('sk');
  const [form, setForm] = useState(EMPTY_FORM);
  const [consentError, setConsentError] = useState(false);
  const [formStatus, setFormStatus] = useState('idle');
  const [cookieVisible, setCookieVisible] = useState(() => !localStorage.getItem('wk_cookie'));
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [navScrolled, setNavScrolled] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);

  useEffect(() => {
    const handler = () => setNavScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    const el = document.getElementById('contact');
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setContactVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const hero = document.querySelector('main > div:first-child');
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  // Backend keep-alive is handled externally (UptimeRobot / cron-job.org)
  // pinging /health server-side — avoids console errors on the client.

  const t = T[lang];
  const seo = { title: t.seoTitle, description: t.seoDescription, url: t.seoUrl };

  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); };
  const acceptCookies = () => { localStorage.setItem('wk_cookie', '1'); setCookieVisible(false); };
  const declineCookies = () => { localStorage.setItem('wk_cookie', '0'); setCookieVisible(false); };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.package) {
      alert(lang === 'en' ? 'Please fill in name, email and select a plan'
        : lang === 'cz' ? 'Vyplňte jméno, email a vyberte balíček'
        : 'Vyplňte meno, email a vyberte balík');
      return;
    }
    if (!form.consent) { setConsentError(true); return; }
    setConsentError(false);
    setFormStatus('loading');
    try {
      const data = await apiClient.createOrder({ ...form, lang });
      if (data.success) {
        setFormStatus('success');
        setForm(EMPTY_FORM);
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: 'form_submit_success', package: form.package });
      } else {
        console.error('Order failed:', data);
        setFormStatus('error');
      }
    } catch (err) {
      console.error('Order error:', err);
      setFormStatus('error');
    }
  };

  const handleSelectPackage = (pkg) => { setForm(p => ({ ...p, package: pkg })); scrollTo('contact'); };

  const langBtn = (code) => ({
    background: lang === code ? C.blue : 'transparent',
    border: lang === code ? `1px solid ${C.blue}` : `1px solid ${C.border}`,
    color: lang === code ? '#fff' : C.text,
    padding: '4px 10px', borderRadius: 8, fontSize: 12, fontWeight: 700,
    cursor: 'pointer', transition: 'all .15s', letterSpacing: 1,
  });

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", background: C.bg, color: C.text, minHeight: '100vh' }}>
      <Helmet>
        <html lang={lang} />
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href="https://www.webklienti.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.webklienti.com/" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content="https://www.webklienti.com/og-image.jpg" />
        <meta property="og:locale" content={lang === 'sk' ? 'sk_SK' : lang === 'cz' ? 'cs_CZ' : 'en_US'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content="https://www.webklienti.com/og-image.jpg" />
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"LocalBusiness","name":"WebKlienti","url":"https://www.webklienti.com","logo":"https://www.webklienti.com/logo.webp","image":"https://www.webklienti.com/og-image.jpg","telephone":"+421907890600","email":"info@webklienti.com","address":{"@type":"PostalAddress","streetAddress":"Ulica Mozartova 5652/12","addressLocality":"Trnava","postalCode":"917 08","addressCountry":"SK"},"areaServed":["SK","CZ"],"priceRange":"\u20ac\u20ac","openingHours":"Mo-Fr 09:00-18:00","sameAs":["https://www.facebook.com/profile.php?id=61588797397714","https://www.instagram.com/webklienti"]}`}</script>
      </Helmet>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-right { display: none !important; }
          .pricing-grid { grid-template-columns: 1fr !important; }
          .pricing-card-featured { transform: none !important; }
          .solution-grid { grid-template-columns: 1fr 1fr !important; }
          .problem-grid { grid-template-columns: 1fr !important; }
          .montwell-grid { grid-template-columns: 1fr !important; }
          .montwell-facts { grid-template-columns: 1fr 1fr !important; }
          .sticky-cta { display: flex !important; }
          .footer-links { flex-direction: column !important; gap: 8px !important; }
        }
        @media (max-width: 480px) { .solution-grid { grid-template-columns: 1fr !important; } }
        .btn-primary { display: inline-flex; align-items: center; justify-content: center; height: 52px; padding: 0 24px; border-radius: 12px; background: #2563EB; color: #fff; font-size: 16px; font-weight: 600; border: none; cursor: pointer; transition: all .15s; text-decoration: none; font-family: 'Inter', sans-serif; }
        .btn-primary:hover { background: #1D4ED8; box-shadow: 0 8px 20px rgba(37,99,235,0.25); transform: translateY(-1px); }
        .btn-primary:active { transform: translateY(0); }
        .btn-primary:disabled { background: #93C5FD; opacity: 0.6; cursor: not-allowed; transform: none; }
        .btn-secondary { display: inline-flex; align-items: center; justify-content: center; height: 52px; padding: 0 24px; border-radius: 12px; background: #FFFFFF; color: #111827; font-size: 16px; font-weight: 600; border: 1px solid #E5E7EB; cursor: pointer; transition: all .15s; font-family: 'Inter', sans-serif; }
        .btn-secondary:hover { background: #F9FAFB; transform: translateY(-1px); }
        .btn-secondary:active { transform: translateY(0); }
        .card { background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 16px; padding: 24px; box-shadow: 0 1px 2px rgba(0,0,0,0.04); transition: all .2s; }
        .card:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(0,0,0,0.08); }
        .section-label { font-size: 14px; font-weight: 500; color: #2563EB; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; }
        .faq-btn { background: none; border: none; cursor: pointer; font-family: 'Inter', sans-serif; }
        input, select, textarea { font-family: 'Inter', sans-serif; }
        input:focus, select:focus, textarea:focus { outline: none; border-color: #2563EB !important; box-shadow: 0 0 0 3px rgba(37,99,235,0.12); }
        input[type="checkbox"]:focus { outline: 2px solid #2563EB; outline-offset: 2px; }
      `}</style>

      {/* NAV */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(8px)', borderBottom: `1px solid ${C.border}`, padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 64, boxShadow: navScrolled ? '0 4px 20px rgba(0,0,0,0.08)' : 'none', transition: 'box-shadow .2s', gap: 12 }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src={logoImg} alt="WebKlienti logo" width="36" height="36" style={{ height: 36, width: 36, objectFit: 'contain', borderRadius: '50%' }} />
          <span style={{ fontWeight: 700, fontSize: 18, color: C.text, letterSpacing: -0.5 }}>Web<span style={{ color: C.blue }}>Klienti</span></span>
        </Link>
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="desktop-nav">
          {t.nav.map((label, i) => (
            <button key={i} onClick={() => scrollTo(NAV_IDS[i])} style={{ background: 'none', border: 'none', color: C.textSub, cursor: 'pointer', fontSize: 15, fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>{label}</button>
          ))}
          <Link to="/blog" style={{ color: C.textSub, textDecoration: 'none', fontSize: 15, fontWeight: 500 }}>Blog</Link>
        </div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }} className="desktop-nav">
          <div style={{ display: 'flex', gap: 4 }}>
            {['sk', 'cz', 'en'].map(code => (
              <button key={code} onClick={() => setLang(code)} style={langBtn(code)}>{code.toUpperCase()}</button>
            ))}
          </div>
          <button onClick={() => scrollTo('contact')} className="btn-primary" style={{ height: 40, fontSize: 14, padding: '0 18px' }}>{t.navOrder}</button>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger" aria-label="Menu" style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8, flexDirection: 'column', gap: 5 }}>
          <span style={{ display: 'block', width: 24, height: 2, background: menuOpen ? C.blue : C.text, transition: 'all .3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ display: 'block', width: 24, height: 2, background: menuOpen ? 'transparent' : C.text, transition: 'all .3s' }} />
          <span style={{ display: 'block', width: 24, height: 2, background: menuOpen ? C.blue : C.text, transition: 'all .3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </nav>

      {menuOpen && (
        <div style={{ position: 'fixed', top: 64, left: 0, right: 0, zIndex: 99, background: C.white, padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 16, borderBottom: `1px solid ${C.border}` }}>
          {t.nav.map((label, i) => (
            <button key={i} onClick={() => scrollTo(NAV_IDS[i])} style={{ background: 'none', border: 'none', color: C.text, cursor: 'pointer', fontSize: 18, fontWeight: 600, textAlign: 'left', padding: '8px 0', fontFamily: 'Inter, sans-serif' }}>{label}</button>
          ))}
          <Link to="/blog" onClick={() => setMenuOpen(false)} style={{ color: C.text, textDecoration: 'none', fontSize: 18, fontWeight: 600, padding: '8px 0' }}>Blog</Link>
          <div style={{ display: 'flex', gap: 8, paddingTop: 8 }}>
            {['sk', 'cz', 'en'].map(code => (
              <button key={code} onClick={() => setLang(code)} style={langBtn(code)}>{code.toUpperCase()}</button>
            ))}
          </div>
          <button onClick={() => scrollTo('contact')} className="btn-primary" style={{ width: '100%', marginTop: 8 }}>{t.navOrder}</button>
        </div>
      )}

      <main>
        <HeroSection t={t} lang={lang} onCta={() => scrollTo('contact')} />
        <ProblemSection t={t} />
        <AgitationStrip t={t} />
        <SolutionSection t={t} lang={lang} onCta={() => scrollTo('contact')} />
        <CaseStudySection t={t} lang={lang} />
        <PricingSection t={t} onSelectPackage={handleSelectPackage} />
        <RiskSection t={t} />
        <FAQSection t={t} openFaq={openFaq} setOpenFaq={setOpenFaq} />
        <FinalCtaSection t={t} onCta={() => scrollTo('contact')} />
        <ContactSection
          t={t} lang={lang}
          form={form} setForm={setForm}
          formStatus={formStatus} setFormStatus={setFormStatus}
          consentError={consentError} setConsentError={setConsentError}
          onSubmit={handleSubmit}
        />
      </main>



      {/* STICKY MOBILE CTA */}
      <div className="sticky-cta" style={{ display: 'none', position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 998, background: C.white, borderTop: `1px solid ${C.border}`, padding: '12px 16px 20px', boxShadow: '0 -4px 20px rgba(0,0,0,0.08)', visibility: (heroVisible || contactVisible) ? 'hidden' : 'visible', opacity: (heroVisible || contactVisible) ? 0 : 1, transition: 'opacity .2s, visibility .2s' }}>
        <button onClick={() => scrollTo('contact')} className="btn-primary" style={{ width: '100%', fontSize: 15 }}>{t.stickyCtaBtn}</button>
      </div>

      {/* FOOTER */}
      <footer id="footer" style={{ background: C.dark, color: 'rgba(255,255,255,0.7)', textAlign: 'center', padding: '48px 24px', fontSize: 14 }}>
        <img src={logoImg} alt="WebKlienti logo" width="36" height="36" style={{ height: 36, width: 36, objectFit: 'contain', marginBottom: 16, borderRadius: '50%' }} />
        <div className="footer-links" style={{ display: 'flex', gap: 24, justifyContent: 'center', marginBottom: 16, flexWrap: 'wrap' }}>
          <a href="mailto:info@webklienti.com" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>info@webklienti.com</a>
          <a href="tel:+421907890600" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>+421 907 890 600</a>
          <span>webklienti.com</span>
        </div>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 20 }}>
          <a href="https://wa.me/421907890600" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={{ width: 44, height: 44, background: '#25D366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 20, textDecoration: 'none' }}><FaWhatsapp /></a>
          <a href="https://www.facebook.com/profile.php?id=61588797397714" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ width: 44, height: 44, background: '#1877F2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 18, textDecoration: 'none' }}><FaFacebookF /></a>
          <a href="https://www.instagram.com/webklienti" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ width: 44, height: 44, background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 18, textDecoration: 'none' }}><FaInstagram /></a>
        </div>
        <p style={{ marginBottom: 8 }}>© {new Date().getFullYear()} Web Klienti · {lang === 'en' ? 'All rights reserved' : lang === 'cz' ? 'Všechna práva vyhrazena' : 'Všetky práva vyhradené'}</p>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', fontStyle: 'italic' }}>{t.statNote}</p>
        <div style={{ marginTop: 32, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <button onClick={() => scrollTo('contact')} className="btn-primary" style={{ fontSize: 15 }}>
            {lang === 'en' ? 'I want more customers from Google' : lang === 'cz' ? 'Chci více zákazníků z Google' : 'Chcem viac zákazníkov z Google'}
          </button>
        </div>
      </footer>

      {/* COOKIE BANNER */}
      {cookieVisible && (
        <div role="dialog" aria-label="Cookie súhlas" aria-modal="false" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9999, background: C.dark, borderTop: `1px solid rgba(255,255,255,0.08)`, padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, margin: 0, flex: 1 }}>
            🍪 {t.cookieMsg}{' '}
            <button onClick={() => setPrivacyOpen(true)} style={{ background: 'none', border: 'none', color: '#93C5FD', cursor: 'pointer', fontSize: 14, textDecoration: 'underline', padding: 0, fontFamily: 'Inter, sans-serif' }}>{t.privacyLink}</button>
          </p>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={declineCookies} className="btn-secondary" style={{ height: 40, fontSize: 13, padding: '0 16px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.6)' }}>{t.cookieDecline}</button>
            <button onClick={acceptCookies} className="btn-primary" style={{ height: 40, fontSize: 13, padding: '0 18px' }}>{t.cookieAccept}</button>
          </div>
        </div>
      )}

      {/* PRIVACY MODAL */}
      {privacyOpen && (
        <div role="dialog" aria-modal="true" style={{ position: 'fixed', inset: 0, zIndex: 10000, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
          <div style={{ background: C.white, borderRadius: 16, padding: '36px 28px', maxWidth: 580, width: '100%', maxHeight: '85vh', overflowY: 'auto', position: 'relative' }}>
            <button onClick={() => setPrivacyOpen(false)} style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', color: C.textSub, fontFamily: 'Inter, sans-serif' }}>✕</button>
            <h2 style={{ fontWeight: 700, fontSize: 20, marginBottom: 20 }}>{t.privacyTitle}</h2>
            <pre style={{ whiteSpace: 'pre-wrap', fontSize: 14, lineHeight: 1.7, color: C.textSub, fontFamily: 'inherit' }}>{t.privacyContent}</pre>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/web-299" element={<Web299 />} />
        </Routes>
      </Suspense>
    </>
  );
}
