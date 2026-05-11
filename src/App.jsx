import { useState } from 'react';
import { FaWhatsapp, FaFacebookF } from "react-icons/fa";
import logoImg from './assets/logo.png';

const API = 'https://webklienti-backend.onrender.com';

const staticReviews = [
  { author: 'Marek Novák', company: 'Novák & syn s.r.o.', text: 'Vynikajúca práca! Web bol hotový za 5 dní a presne podľa našich predstáv. Odporúčam každému.', rating: 5 },
  { author: 'Jana Kováčová', company: 'Kaderníctvo Jana', text: 'Konečne mám pekný web! Komunikácia bola super, cena výborná. Zákazníci mi hovoria, že web vyzerá profesionálne.', rating: 5 },
  { author: 'Peter Horváth', company: 'AutoServis Horváth', text: 'Rýchlo, spoľahlivo a za rozumnú cenu. Určite budem spolupracovať aj pri ďalších projektoch.', rating: 5 },
];

const T = {
  sk: {
    nav: ['Cenník', 'Referencie', 'Kontakt'],
    navOrder: 'Objednať',
    heroBadge: '🚀 Akcia — 50% zľava do konca mesiaca',
    heroTitle: ['Weby, ktoré', 'prinášajú ', 'klientov'],
    heroSub: '87% zákazníkov hľadá firmy online.\nNájdu vás — alebo vašu konkurenciu?\nWeb za 299 €. Hotový za 5 dní.',
    heroCta: 'Chcem viac klientov →',
    heroBadges: ['✓ Cena je konečná', '✓ Mobile friendly', '✓ Firemný email', '✓ Bez mesačných poplatkov'],
    marketTag: '🌍 Slovensko · Česko · Európa',
    pricingLabel: 'Cenník',
    pricingTitle: 'Vyber si svoj balík',
    orderBtn: 'Objednať',
    howLabel: 'Postup',
    howTitle: 'Ako to funguje?',
    steps: [
      { num: 'krok 1', title: 'Objednáte online', desc: 'Vyberiete balík a vyplníte formulár za 5 minút z mobilu alebo počítača.' },
      { num: 'krok 2', title: 'Zaplatíte faktúrou', desc: 'Pošleme vám faktúru. Platba vopred, žiadne skryté poplatky.' },
      { num: 'krok 3', title: 'My tvoríme', desc: 'Náš tím pripraví váš web. Nemusíte nič pripravovať ani posielať.' },
      { num: 'krok 4', title: 'Spustenie', desc: 'Web je hotový do 5 dní a môžete ho hneď prezentovať zákazníkom.' },
    ],
    reviewsLabel: 'Referencie',
    reviewsTitle: 'Čo hovoria klienti',
    formLabel: 'Objednávka',
    formTitle: 'Objednajte si web',
    formSub: 'Vyplňte formulár a ozveme sa vám do 24 hodín.',
    fields: [
      { key: 'name', label: 'Meno a priezvisko *', type: 'text', placeholder: 'Ján Novák' },
      { key: 'email', label: 'Email *', type: 'email', placeholder: 'jan@firma.sk' },
      { key: 'phone', label: 'Telefón', type: 'tel', placeholder: '+421 900 000 000' },
    ],
    packageLabel: 'Balík *',
    packagePlaceholder: '— Vyberte balík —',
    messageLabel: 'Správa',
    messagePlaceholder: 'Čo potrebujete? Aký je váš biznis?',
    submitBtn: 'Odoslať objednávku →',
    submitting: 'Odosielam...',
    successTitle: 'Ďakujeme!',
    successMsg: 'Vaša objednávka bola prijatá. Potvrdenie sme poslali na váš email.',
    newOrder: 'Nová objednávka',
    errorMsg: '❌ Chyba. Skúste znova alebo nás kontaktujte priamo.',
    footerRights: '© 2025 Web Klienti · Všetky práva vyhradené',
    packages: ['One-page web — 299 €', 'Prezentačný web — 499 €', 'Internetový obchod — 999 €'],
    cards: [
      { tag: 'Základná', name: 'One-page web', price: '299 €', old: 'bežne 599 €', features: ['Moderný dizajn na mieru', 'Mobile friendly (Google to miluje)', 'Kontaktný formulár + mapa', 'WhatsApp — zákazník vám napíše jedným kliknutím', 'Facebook prepojenie — budujete komunitu od 1. dňa', 'SEO — nájdu vás na Googli skôr ako konkurenciu', 'GDPR ready (Privacy Policy + cookie lišta)', 'Sekcia Google recenzií — dôvera = viac klientov', 'Firemný email', '🎁 BONUS: Google Business profil (zobrazíte sa na Mapách)', 'Hotové za 5 dní'], featured: false },
      { tag: '⭐ Najpopulárnejší', name: 'Prezentačný web', price: '499 €', old: 'bežne 999 €', features: ['Všetko z One-page +', '5 podstránok na mieru', 'Galéria & referencie', 'Blog — pridávate články sami', 'Pokročilé SEO + analýza kľúčových slov', 'Google Analytics — vidíte kto a odkiaľ prichádza', 'Hotové za 7 dní'], featured: true },
      { tag: 'E-shop', name: 'Internetový obchod', price: '999 €', old: 'bežne 1999 €', features: ['Všetko z Prezentačného webu +', 'Do 500 produktov', 'Platobná brána (karta, PayPal)', 'Automatické faktúry', 'Správa objednávok', 'WhatsApp + Facebook shop prepojenie', 'Hotové za 14 dní'], featured: false },
    ],
    featuredBadge: 'NAJPOPULÁRNEJŠÍ',
    statClients: 'Spokojných klientov',
    statLeads: 'Viac dopytov',
    statDays: 'Hotový web',
    cookieMsg: 'Táto stránka používa cookies pre lepší zážitok a analytiku.',
    cookieAccept: 'Súhlasím',
    cookieDecline: 'Odmietnuť',
    privacyLink: 'Ochrana súkromia',
    privacyTitle: 'Ochrana osobných údajov',
    privacyContent: `Prevádzkovateľ: Web Klienti, info@webklienti.com, +421 907 890 600

Aké údaje zbierame:
• Meno, priezvisko, adresa, e-mail, telefón — pri odoslaní objednávky

Na čo ich používame:
Plnenie zmluvy, vedenie účtovnej evidencie a vzájomná komunikácia.

Doba uchovávania:
Po dobu trvania zmluvy a 5 rokov po jej ukončení v súlade so zákonom č. 431/2002 Z. z. o účtovníctve.

Vaše práva:
Máte právo na prístup k svojim údajom, ich opravu, vymazanie alebo prenosnosť. Žiadosť zasielajte písomne na info@webklienti.com.

Cookies:
Používame Google Analytics na sledovanie návštevnosti. Cookies môžete odmietnuť pri prvej návšteve.

Platné od: 1.1.2025`,
  },
  cz: {
    nav: ['Ceník', 'Reference', 'Kontakt'],
    navOrder: 'Objednat',
    heroBadge: '🚀 Akce — 50% sleva do konce měsíce',
    heroTitle: ['Weby, které', 'přinášejí ', 'klienty'],
    heroSub: '87% zákazníků hledá firmy online.\nNajdou vás — nebo vaši konkurenci?\nWeb za 299 €. Hotový za 5 dní.',
    heroCta: 'Chci více klientů →',
    heroBadges: ['✓ Cena je konečná', '✓ Mobile friendly', '✓ Firemní email', '✓ Bez měsíčních poplatků'],
    marketTag: '🌍 Slovensko · Česko · Evropa',
    pricingLabel: 'Ceník',
    pricingTitle: 'Vyberte si balíček',
    orderBtn: 'Objednat',
    howLabel: 'Postup',
    howTitle: 'Jak to funguje?',
    steps: [
      { num: 'krok 1', title: 'Objednáte online', desc: 'Vyberete balíček a vyplníte formulář za 5 minut z mobilu nebo počítače.' },
      { num: 'krok 2', title: 'Zaplatíte fakturou', desc: 'Pošleme vám fakturu. Platba předem, žádné skryté poplatky.' },
      { num: 'krok 3', title: 'My tvoříme', desc: 'Náš tým připraví váš web. Nemusíte nic připravovat ani posílat.' },
      { num: 'krok 4', title: 'Spuštění', desc: 'Web je hotový do 5 dnů a můžete ho hned prezentovat zákazníkům.' },
    ],
    reviewsLabel: 'Reference',
    reviewsTitle: 'Co říkají klienti',
    formLabel: 'Objednávka',
    formTitle: 'Objednejte si web',
    formSub: 'Vyplňte formulář a ozveme se vám do 24 hodin.',
    fields: [
      { key: 'name', label: 'Jméno a příjmení *', type: 'text', placeholder: 'Jan Novák' },
      { key: 'email', label: 'Email *', type: 'email', placeholder: 'jan@firma.cz' },
      { key: 'phone', label: 'Telefon', type: 'tel', placeholder: '+420 900 000 000' },
    ],
    packageLabel: 'Balíček *',
    packagePlaceholder: '— Vyberte balíček —',
    messageLabel: 'Zpráva',
    messagePlaceholder: 'Co potřebujete? Jaký je váš byznys?',
    submitBtn: 'Odeslat objednávku →',
    submitting: 'Odesílám...',
    successTitle: 'Děkujeme!',
    successMsg: 'Vaše objednávka byla přijata. Potvrzení jsme poslali na váš email.',
    newOrder: 'Nová objednávka',
    errorMsg: '❌ Chyba. Zkuste znovu nebo nás kontaktujte přímo.',
    footerRights: '© 2025 Web Klienti · Všechna práva vyhrazena',
    packages: ['One-page web — 299 €', 'Prezentační web — 499 €', 'Internetový obchod — 999 €'],
    cards: [
      { tag: 'Základní', name: 'One-page web', price: '299 €', old: 'běžně 599 €', features: ['Moderní design na míru', 'Mobile friendly (Google to miluje)', 'Kontaktní formulář + mapa', 'WhatsApp — zákazník vám napíše jedním kliknutím', 'Facebook propojení — budujete komunitu od 1. dne', 'SEO — najdou vás na Googlu dříve než konkurenci', 'GDPR ready (Privacy Policy + cookie lišta)', 'Sekce Google recenzí — důvěra = více klientů', 'Firemní email (info@vasfirma.cz)', '🎁 BONUS: Google Business profil (zobrazíte se na Mapách)', 'Hotovo za 5 dní'], featured: false },
      { tag: '⭐ Nejpopulárnější', name: 'Prezentační web', price: '499 €', old: 'běžně 999 €', features: ['Vše z One-page +', '5 podstránek na míru', 'Galerie & reference', 'Blog — přidáváte články sami', 'Pokročilé SEO + analýza klíčových slov', 'Google Analytics — vidíte kdo a odkud přichází', 'Hotovo za 7 dní'], featured: true },
      { tag: 'E-shop', name: 'Internetový obchod', price: '999 €', old: 'běžně 1999 €', features: ['Vše z Prezentačního webu +', 'Do 500 produktů', 'Platební brána (karta, PayPal)', 'Automatické faktury', 'Správa objednávek', 'WhatsApp + Facebook shop propojení', 'Hotovo za 14 dní'], featured: false },
    ],
    featuredBadge: 'NEJPOPULÁRNĚJŠÍ',
    statClients: 'Spokojených klientů',
    statLeads: 'Více poptávek',
    statDays: 'Hotový web',
    cookieMsg: 'Tato stránka používá cookies pro lepší zážitek a analytiku.',
    cookieAccept: 'Souhlasím',
    cookieDecline: 'Odmítnout',
    privacyLink: 'Ochrana soukromí',
    privacyTitle: 'Ochrana osobních údajů',
    privacyContent: `Provozovatel: Web Klienti, info@webklienti.com, +421 907 890 600

Jaké údaje sbíráme:
• Jméno, příjmení, adresa, e-mail, telefon — při odeslání objednávky

K čemu je používáme:
Plnění smlouvy, vedení účetní evidence a vzájemná komunikace.

Doba uchovávání:
Po dobu trvání smlouvy a 5 let po jejím ukončení v souladu se zákonem o účetnictví.

Vaše práva:
Máte právo na přístup ke svým údajům, jejich opravu, vymazání nebo přenositelnost. Žádost zasílejte písemně na info@webklienti.com.

Cookies:
Používáme Google Analytics ke sledování návštěvnosti. Cookies můžete odmítnout při první návštěvě.

Platné od: 1.1.2025`,
  },
  en: {
    nav: ['Pricing', 'Reviews', 'Contact'],
    navOrder: 'Order now',
    heroBadge: '🚀 Sale — 50% off until end of month',
    heroTitle: ['Websites that', 'bring you ', 'clients'],
    heroSub: '87% of customers search for businesses online.\nWill they find you — or your competitor?\nWebsite for 299 €. Ready in 5 days.',
    heroCta: 'Get more clients →',
    heroBadges: ['✓ Final price', '✓ Mobile friendly', '✓ Business email', '✓ No monthly fees'],
    marketTag: '🌍 Slovakia · Czech Republic · Europe',
    pricingLabel: 'Pricing',
    pricingTitle: 'Choose your plan',
    orderBtn: 'Order',
    howLabel: 'Process',
    howTitle: 'How it works',
    steps: [
      { num: 'step 1', title: 'Order online', desc: 'Choose a plan and fill out the form in 5 minutes from your phone or computer.' },
      { num: 'step 2', title: 'Pay by invoice', desc: 'We send you an invoice. Payment upfront, no hidden fees.' },
      { num: 'step 3', title: 'We build it', desc: 'Our team prepares your website. You don\'t need to prepare or send anything.' },
      { num: 'step 4', title: 'Launch', desc: 'Your website is ready in 5 days and you can start presenting it to customers.' },
    ],
    reviewsLabel: 'Testimonials',
    reviewsTitle: 'What clients say',
    formLabel: 'Order',
    formTitle: 'Order your website',
    formSub: 'Fill out the form and we\'ll get back to you within 24 hours.',
    fields: [
      { key: 'name', label: 'Full name *', type: 'text', placeholder: 'John Smith' },
      { key: 'email', label: 'Email *', type: 'email', placeholder: 'john@company.com' },
      { key: 'phone', label: 'Phone', type: 'tel', placeholder: '+421 900 000 000' },
    ],
    packageLabel: 'Plan *',
    packagePlaceholder: '— Select a plan —',
    messageLabel: 'Message',
    messagePlaceholder: 'What do you need? What is your business?',
    submitBtn: 'Send order →',
    submitting: 'Sending...',
    successTitle: 'Thank you!',
    successMsg: 'Your order has been received. We sent a confirmation to your email.',
    newOrder: 'New order',
    errorMsg: '❌ Error. Please try again or contact us directly.',
    footerRights: '© 2025 Web Klienti · All rights reserved',
    packages: ['One-page website — 299 €', 'Business website — 499 €', 'Online store — 999 €'],
    cards: [
      { tag: 'Starter', name: 'One-page website', price: '299 €', old: 'usually 599 €', features: ['Custom modern design', 'Mobile friendly (Google loves it)', 'Contact form + map', 'WhatsApp — customers reach you in one click', 'Facebook link — build community from day 1', 'SEO — appear on Google before your competitors', 'GDPR ready (Privacy Policy + cookie banner)', 'Google reviews section — trust = more clients', 'Business email (info@yourcompany.com)', '🎁 BONUS: Google Business profile (show up on Maps)', 'Ready in 5 days'], featured: false },
      { tag: '⭐ Most popular', name: 'Business website', price: '499 €', old: 'usually 999 €', features: ['Everything from One-page +', '5 custom subpages', 'Gallery & testimonials', 'Blog — add articles yourself', 'Advanced SEO + keyword analysis', 'Google Analytics — see who visits and from where', 'Ready in 7 days'], featured: true },
      { tag: 'E-commerce', name: 'Online store', price: '999 €', old: 'usually 1999 €', features: ['Everything from Business website +', 'Up to 500 products', 'Payment gateway (card, PayPal)', 'Automatic invoices', 'Order management', 'WhatsApp + Facebook shop integration', 'Ready in 14 days'], featured: false },
    ],
    featuredBadge: 'MOST POPULAR',
    statClients: 'Happy clients',
    statLeads: 'More inquiries',
    statDays: 'Website ready',
    cookieMsg: 'This site uses cookies for a better experience and analytics.',
    cookieAccept: 'Accept',
    cookieDecline: 'Decline',
    privacyLink: 'Privacy Policy',
    privacyTitle: 'Privacy Policy',
    privacyContent: `Controller: Web Klienti, info@webklienti.com, +421 907 890 600

Data we collect:
• Full name, address, email, phone — when submitting an order

How we use it:
Order fulfillment, accounting records and mutual communication.

Retention period:
For the duration of the contract and 5 years after its termination in accordance with accounting law.

Your rights:
You have the right to access, correct, delete or transfer your data. Send a written request to info@webklienti.com.

Cookies:
We use Google Analytics to track traffic. You can decline cookies on your first visit.

Effective from: 1.1.2025`,
  },
};

export default function App() {
  const [lang, setLang] = useState('sk');
  const [form, setForm] = useState({ name: '', email: '', phone: '', package: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle');
  const [cookieVisible, setCookieVisible] = useState(() => !localStorage.getItem('wk_cookie'));
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const t = T[lang];

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.package) {
      alert(lang === 'en' ? 'Please fill in name, email and select a plan' : lang === 'cz' ? 'Vyplňte jméno, email a vyberte balíček' : 'Vyplňte meno, email a vyberte balík');
      return;
    }
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
        setForm({ name: '', email: '', phone: '', package: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const acceptCookies = () => { localStorage.setItem('wk_cookie', '1'); setCookieVisible(false); };
  const declineCookies = () => { localStorage.setItem('wk_cookie', '0'); setCookieVisible(false); };

  const navIds = ['pricing', 'reviews', 'footer'];

  const langBtn = (code) => ({
    background: lang === code ? 'rgba(255,210,0,0.15)' : 'rgba(255,255,255,0.07)',
    border: lang === code ? '1px solid rgba(255,210,0,0.5)' : '1px solid rgba(255,255,255,0.12)',
    color: lang === code ? '#ffd200' : 'rgba(245,242,235,0.5)',
    padding: '4px 10px', borderRadius: 6, fontSize: 12, fontWeight: 700,
    cursor: 'pointer', transition: 'all .2s', letterSpacing: 1,
  });

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: '#f5f2eb', color: '#1a1a1a', minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(26,26,26,0.97)', backdropFilter: 'blur(8px)', padding: '0 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 64 }}>
        
        {/* LOGO */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={logoImg} alt="WK logo" style={{ height: 44, width: 44, objectFit: 'contain', mixBlendMode: 'screen' }} />
          <span style={{ fontWeight: 800, fontSize: 18, color: '#f5f2eb', letterSpacing: -0.5 }}>
            Web<span style={{ color: '#ffd200' }}>Klienti</span>
          </span>
        </div>

        {/* DESKTOP NAV */}
        <div style={{ display: 'flex', gap: 28, alignItems: 'center', '@media(max-width:768px)': { display: 'none' } }} className="desktop-nav">
          {t.nav.map((label, i) => (
            <button key={i} onClick={() => scrollTo(navIds[i])} style={{ background: 'none', border: 'none', color: 'rgba(245,242,235,0.7)', cursor: 'pointer', fontSize: 14, fontWeight: 500 }}>{label}</button>
          ))}
        </div>

        {/* DESKTOP RIGHT */}
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }} className="desktop-nav">
          <div style={{ display: 'flex', gap: 4 }}>
            {['sk', 'cz', 'en'].map(code => (
              <button key={code} onClick={() => setLang(code)} style={langBtn(code)}>{code.toUpperCase()}</button>
            ))}
          </div>
          <button onClick={() => scrollTo('contact')} style={{ background: '#ffd200', color: '#1a1a1a', border: 'none', padding: '8px 20px', borderRadius: 100, fontSize: 14, fontWeight: 600, cursor: 'pointer', marginLeft: 4 }}>
            {t.navOrder}
          </button>
        </div>

        {/* HAMBURGER */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger" style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8, flexDirection: 'column', gap: 5 }}>
          <span style={{ display: 'block', width: 24, height: 2, background: menuOpen ? '#ffd200' : '#f5f2eb', transition: 'all .3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
          <span style={{ display: 'block', width: 24, height: 2, background: menuOpen ? 'transparent' : '#f5f2eb', transition: 'all .3s' }}></span>
          <span style={{ display: 'block', width: 24, height: 2, background: menuOpen ? '#ffd200' : '#f5f2eb', transition: 'all .3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div style={{ position: 'fixed', top: 64, left: 0, right: 0, zIndex: 99, background: 'rgba(26,26,26,0.98)', padding: '20px 40px', display: 'flex', flexDirection: 'column', gap: 16, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          {t.nav.map((label, i) => (
            <button key={i} onClick={() => scrollTo(navIds[i])} style={{ background: 'none', border: 'none', color: 'rgba(245,242,235,0.9)', cursor: 'pointer', fontSize: 18, fontWeight: 600, textAlign: 'left', padding: '8px 0' }}>{label}</button>
          ))}
          <div style={{ display: 'flex', gap: 8, paddingTop: 8 }}>
            {['sk', 'cz', 'en'].map(code => (
              <button key={code} onClick={() => setLang(code)} style={langBtn(code)}>{code.toUpperCase()}</button>
            ))}
          </div>
          <button onClick={() => scrollTo('contact')} style={{ background: '#ffd200', color: '#1a1a1a', border: 'none', padding: '12px 20px', borderRadius: 100, fontSize: 16, fontWeight: 700, cursor: 'pointer', marginTop: 8 }}>
            {t.navOrder}
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>

      {/* HERO */}
      <div style={{ background: '#1a1a1a', color: '#f5f2eb', padding: '100px 40px 120px', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(245,242,235,0.6)', padding: '5px 16px', borderRadius: 100, fontSize: 12, fontWeight: 500, marginBottom: 12 }}>
            {t.marketTag}
          </div>
          <div style={{ display: 'block', marginTop: 8 }}>
            <div style={{ display: 'inline-block', background: 'rgba(255,210,0,0.15)', color: '#ffd200', padding: '6px 18px', borderRadius: 100, fontSize: 13, fontWeight: 600, marginBottom: 24, letterSpacing: 1 }}>
              {t.heroBadge}
            </div>
          </div>
          <h1 style={{ fontSize: 'clamp(40px, 7vw, 80px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: -3, marginBottom: 24 }}>
            {t.heroTitle[0]}<br /><span style={{ color: '#ffd200' }}>{t.heroTitle[1]}</span>{t.heroTitle[2]}
          </h1>
          <p style={{ fontSize: 20, color: 'rgba(245,242,235,0.6)', marginBottom: 48, lineHeight: 1.6, whiteSpace: 'pre-line' }}>
            {t.heroSub}
          </p>
          <button onClick={() => scrollTo('contact')} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#ffd200', color: '#1a1a1a', padding: '18px 40px', borderRadius: 100, fontWeight: 700, fontSize: 18, cursor: 'pointer', border: 'none', marginBottom: 48 }}>
            {t.heroCta}
          </button>
          <div style={{ display: 'flex', gap: 48, justifyContent: 'center', paddingTop: 40, borderTop: '1px solid rgba(255,255,255,0.08)', marginBottom: 40 }}>
            <div>
              <div style={{ fontSize: 36, fontWeight: 900, color: '#ffd200', letterSpacing: -1 }}>80+</div>
              <div style={{ fontSize: 13, color: 'rgba(245,242,235,0.5)', marginTop: 4 }}>{t.statClients}</div>
            </div>
            <div>
              <div style={{ fontSize: 36, fontWeight: 900, color: '#ffd200', letterSpacing: -1 }}>3×</div>
              <div style={{ fontSize: 13, color: 'rgba(245,242,235,0.5)', marginTop: 4 }}>{t.statLeads}</div>
            </div>
            <div>
              <div style={{ fontSize: 36, fontWeight: 900, color: '#ffd200', letterSpacing: -1 }}>5 dní</div>
              <div style={{ fontSize: 13, color: 'rgba(245,242,235,0.5)', marginTop: 4 }}>{t.statDays}</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            {t.heroBadges.map(b => (
              <span key={b} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', padding: '8px 18px', borderRadius: 100, fontSize: 13, color: 'rgba(245,242,235,0.7)' }}>{b}</span>
            ))}
          </div>
        </div>
      </div>

      {/* PRICING */}
      <div id="pricing" style={{ padding: '100px 40px', maxWidth: 1100, margin: '0 auto' }}>
        <p style={{ fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', color: '#888', marginBottom: 12 }}>{t.pricingLabel}</p>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, letterSpacing: -2, marginBottom: 56 }}>{t.pricingTitle}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 2, alignItems: 'stretch' }}>
          {t.cards.map((card, i) => (
            <div key={i} style={{ background: card.featured ? '#1a1a1a' : '#fff', color: card.featured ? '#f5f2eb' : '#1a1a1a', padding: '40px 32px', borderRadius: i === 0 ? '24px 0 0 24px' : i === 2 ? '0 24px 24px 0' : 0, position: 'relative', display: 'flex', flexDirection: 'column' }}>
              {card.featured && <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: '#ffd200', color: '#1a1a1a', padding: '4px 16px', borderRadius: 100, fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap' }}>{t.featuredBadge}</div>}
              <p style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: card.featured ? 'rgba(245,242,235,0.5)' : '#888', marginBottom: 12 }}>{card.tag}</p>
              <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4 }}>{card.name}</h3>
              <div style={{ fontSize: 48, fontWeight: 900, letterSpacing: -2, margin: '16px 0 4px' }}>{card.price}</div>
              <p style={{ fontSize: 13, textDecoration: 'line-through', color: card.featured ? 'rgba(245,242,235,0.4)' : '#bbb', marginBottom: 24 }}>{card.old}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, flexGrow: 1, marginBottom: 24 }}>
                {card.features.map(f => (
                  <li key={f} style={{ fontSize: 14, color: card.featured ? 'rgba(245,242,235,0.75)' : '#555', display: 'flex', gap: 8 }}>
                    <span style={{ color: '#ffd200', fontWeight: 700, flexShrink: 0 }}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <button onClick={() => { setForm(p => ({ ...p, package: card.name + ' — ' + card.price })); scrollTo('contact'); }} style={{ width: '70%', padding: '12px', borderRadius: 100, fontSize: 15, fontWeight: 800, cursor: 'pointer', textAlign: 'center', letterSpacing: 0.5, display: 'block', margin: '0 auto', background: card.featured ? '#ffd200' : 'transparent', color: '#1a1a1a', border: card.featured ? '2px solid #ffd200' : '2px solid #1a1a1a' }}>{t.orderBtn}</button>
            </div>
          ))}
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div style={{ background: '#1a1a1a', padding: '100px 40px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', color: '#666', marginBottom: 12 }}>{t.howLabel}</p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, letterSpacing: -2, color: '#f5f2eb', marginBottom: 56 }}>{t.howTitle}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 2 }}>
            {t.steps.map((s, i) => (
              <div key={i} style={{ padding: '36px 32px', background: 'rgba(255,255,255,0.04)', borderRadius: i === 0 ? '20px 0 0 20px' : i === 3 ? '0 20px 20px 0' : 0, borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <div style={{ fontSize: 56, fontWeight: 900, color: 'rgba(255,255,255,0.06)', lineHeight: 1, marginBottom: 20 }}>{s.num}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#f5f2eb', marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: 'rgba(245,242,235,0.5)', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* REVIEWS */}
      <div id="reviews" style={{ background: '#1a1a1a', padding: '100px 40px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', color: '#666', marginBottom: 12 }}>{t.reviewsLabel}</p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, letterSpacing: -2, color: '#f5f2eb', marginBottom: 56 }}>{t.reviewsTitle}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
            {staticReviews.map((r, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: '32px 28px' }}>
                <div style={{ color: '#ffd200', fontSize: 18, marginBottom: 16 }}>{'★'.repeat(r.rating)}</div>
                <p style={{ fontSize: 15, color: 'rgba(245,242,235,0.75)', lineHeight: 1.7, marginBottom: 24 }}>"{r.text}"</p>
                <div>
                  <p style={{ fontWeight: 700, color: '#f5f2eb', fontSize: 14 }}>{r.author}</p>
                  {r.company && <p style={{ fontSize: 13, color: 'rgba(245,242,235,0.4)' }}>{r.company}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ORDER FORM */}
      <div id="contact" style={{ padding: '100px 40px', maxWidth: 700, margin: '0 auto' }}>
        <p style={{ fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', color: '#888', marginBottom: 12 }}>{t.formLabel}</p>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, letterSpacing: -2, marginBottom: 12 }}>{t.formTitle}</h2>
        <p style={{ color: '#888', marginBottom: 48, fontSize: 16 }}>{t.formSub}</p>
        {formStatus === 'success' ? (
          <div style={{ background: '#1a1a1a', color: '#f5f2eb', borderRadius: 24, padding: '60px 40px', textAlign: 'center' }}>
            <div style={{ fontSize: 56, marginBottom: 16 }}>🎉</div>
            <h3 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12 }}>{t.successTitle}</h3>
            <p style={{ color: 'rgba(245,242,235,0.6)', fontSize: 16 }}>{t.successMsg}</p>
            <button onClick={() => setFormStatus('idle')} style={{ marginTop: 32, background: '#ffd200', color: '#1a1a1a', border: 'none', padding: '12px 28px', borderRadius: 100, fontWeight: 600, cursor: 'pointer' }}>{t.newOrder}</button>
          </div>
        ) : (
          <div style={{ background: '#fff', borderRadius: 24, padding: '48px 40px', display: 'flex', flexDirection: 'column', gap: 20 }}>
            {t.fields.map(f => (
              <div key={f.key}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 8, color: '#444' }}>{f.label}</label>
                <input type={f.type} placeholder={f.placeholder} value={form[f.key]}
                  onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                  style={{ width: '100%', padding: '12px 16px', border: '1.5px solid #e5e5e5', borderRadius: 12, fontSize: 15, outline: 'none', fontFamily: 'inherit' }} />
              </div>
            ))}
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 8, color: '#444' }}>{t.packageLabel}</label>
              <select value={form.package} onChange={e => setForm(p => ({ ...p, package: e.target.value }))}
                style={{ width: '100%', padding: '12px 16px', border: '1.5px solid #e5e5e5', borderRadius: 12, fontSize: 15, outline: 'none', fontFamily: 'inherit', background: '#fff' }}>
                <option value="">{t.packagePlaceholder}</option>
                {t.packages.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 8, color: '#444' }}>{t.messageLabel}</label>
              <textarea placeholder={t.messagePlaceholder} value={form.message}
                onChange={e => setForm(p => ({ ...p, message: e.target.value }))} rows={4}
                style={{ width: '100%', padding: '12px 16px', border: '1.5px solid #e5e5e5', borderRadius: 12, fontSize: 15, outline: 'none', fontFamily: 'inherit', resize: 'vertical' }} />
            </div>
            {formStatus === 'error' && <p style={{ color: '#e24b4a', fontSize: 14 }}>{t.errorMsg}</p>}
            <button onClick={handleSubmit} disabled={formStatus === 'loading'}
              style={{ background: '#1a1a1a', color: '#ffd200', border: 'none', padding: '16px', borderRadius: 100, fontSize: 16, fontWeight: 700, cursor: 'pointer', opacity: formStatus === 'loading' ? 0.7 : 1 }}>
              {formStatus === 'loading' ? t.submitting : t.submitBtn}
            </button>
          </div>
        )}
      </div>

      {/* FLOATING BUTTONS */}
      <div style={{ position: 'fixed', right: 20, bottom: 20, display: 'flex', flexDirection: 'column', gap: 12, zIndex: 999 }}>
        <a href="https://wa.me/421907890600" target="_blank" rel="noopener noreferrer"
          style={{ width: 56, height: 56, background: '#25D366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 24, boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}>
          <FaWhatsapp />
        </a>
        <a href="https://facebook.com/profile.php?id=61588797397714" target="_blank" rel="noopener noreferrer"
          style={{ width: 56, height: 56, background: '#1877F2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 22, boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}>
          <FaFacebookF />
        </a>
      </div>

      {/* FOOTER */}
      <div id="footer" style={{ background: '#1a1a1a', color: 'rgba(245,242,235,0.4)', textAlign: 'center', padding: '40px', fontSize: 13 }}>
        <img src={logoImg} alt="WK logo" style={{ height: 40, width: 40, objectFit: 'contain', marginBottom: 12, mixBlendMode: 'screen' }} />
        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', marginBottom: 12, flexWrap: 'wrap' }}>
          <a href="mailto:info@webklienti.com" style={{ color: 'rgba(245,242,235,0.6)', textDecoration: 'none' }}>info@webklienti.com</a>
          <a href="tel:+421907890600" style={{ color: 'rgba(245,242,235,0.6)', textDecoration: 'none' }}>+421 907 890 600</a>
          <span style={{ color: 'rgba(245,242,235,0.3)' }}>webklienti.com</span>
        </div>
        <div style={{ marginBottom: 8 }}>
          <button onClick={() => setPrivacyOpen(true)} style={{ background: 'none', border: 'none', color: 'rgba(245,242,235,0.4)', cursor: 'pointer', fontSize: 13, textDecoration: 'underline' }}>{t.privacyLink}</button>
        </div>
        <p>{t.footerRights}</p>
      </div>

      {/* COOKIE BANNER */}
      {cookieVisible && (
        <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9999, background: '#1a1a1a', borderTop: '1px solid rgba(255,255,255,0.1)', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
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

      {/* PRIVACY POLICY MODAL */}
      {privacyOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 10000, background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
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
