import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaWhatsapp, FaFacebookF } from "react-icons/fa";
import logoImg from './assets/logo.webp';
import montwellImg from './assets/montwell-preview.png';
import Blog from './pages/Blog';
import Privacy from './pages/Privacy';
import BlogPost from './pages/BlogPost';

const API = 'https://webklienti-backend.onrender.com';

const staticReviews = [];

const T = {
  sk: {
    nav: ['Cenník', 'Referencie', 'Kontakt'],
    navOrder: 'Objednať',
    heroBadge: '🚀 Akcia — 50% zľava do konca mesiaca',
    heroTitle: ['Webstránky, ktoré vám', 'prinášajú zákazníkov ', 'z Google'],
    heroSub: 'Moderný web od 299 € bez mesačných poplatkov.\nNavrhnutý tak, aby vám denne prinášal dopyty.',
    heroCta: 'Chcem web, ktorý predáva →',
    heroBadges: ['✓ Cena je konečná', '✓ Mobile friendly', '✓ Firemný email', '✓ Bez mesačných poplatkov'],
    marketTag: '🌍 Slovensko · Česko · Európa',
    pricingLabel: 'Cenník',
    pricingTitle: 'Vyber si svoj balík',
    orderBtn: 'Chcem tento balík →',
    howLabel: 'Postup',
    howTitle: 'Ako to funguje?',
    steps: [
      { num: 'krok 1', title: 'Vyplníte objednávku', desc: 'Vyberiete si balík a vyplníte krátky formulár za pár minút z mobilu alebo počítača.' },
      { num: 'krok 2', title: 'Potvrdíme detaily', desc: 'Spojíme sa s vami, prejdeme si vaše požiadavky a dohodneme ďalší postup.' },
      { num: 'krok 3', title: 'Vytvoríme váš web', desc: 'Pripravíme profesionálnu webstránku podľa vašich predstáv a priebežne vás budeme informovať o postupe.' },
      { num: 'krok 4', title: 'Spustenie webu', desc: 'Po schválení web spustíme a môžete ho začať prezentovať svojim zákazníkom.' },
    ],
    reviewsLabel: 'Referencie',
    reviewsTitle: 'Čo hovoria klienti',
    reviewsNote: '* Mená skrátené z dôvodu ochrany súkromia klientov.',
    faqLabel: 'FAQ',
    faqTitle: 'Časté otázky',
    faqItems: [
      { q: 'Koľko trvá vytvorenie webu?', a: '5 pracovných dní pre One-page web, 7 dní pre Prezentačný web, 14 dní pre E-shop.' },
      { q: 'Platím niečo mesačne?', a: 'Nie. Platíte len jednorazovo za tvorbu. Hosting a doménu si zabezpečíte sami, alebo vám pomôžeme — stojí to cca 20–30 € ročne.' },
      { q: 'Kedy a koľko platím za webstránku?', a: 'Po potvrdení objednávky uhradíte zálohu 50 % z ceny. Zvyšok platíte až po dokončení a schválení webu. Žiadna platba vopred v plnej výške.' },
      { q: 'Pomôžete s textami a fotkami?', a: 'Áno. Ak nemáte texty, pomôžeme vám ich pripraviť. Fotky odporúčame vlastné, ale vieme použiť aj stockové.' },
      { q: 'Budem vlastniť web?', a: 'Áno. Po odovzdaní je web 100% váš. Dostanete prístupy ku všetkému.' },
      { q: 'Môžem web neskôr upravovať?', a: 'Áno. Naučíme vás základné úpravy alebo vám pomôžeme kedykoľvek neskôr.' },
      { q: 'Čo ak sa mi návrh nebude páčiť?', a: 'Prvý návrh pošleme do 24 hodín. Ak sa vám nebude páčiť, upravíme ho. Platíte až po schválení návrhu.' },
    ],
    guaranteeTitle: 'Bez rizika',
    guaranteeText: 'Prvý návrh webu dostanete do 24 hodín zdarma. Platíte len 50 % zálohu — zvyšok až po schválení hotového webu. Žiadne skryté poplatky.',
    guaranteeBadges: ['✓ Návrh do 24 hodín', '✓ 50 % záloha · 50 % po schválení', '✓ Web je po odovzdaní váš'],
    formLabel: 'Objednávka',
    formTitle: 'Získajte bezplatný návrh',
    formSub: 'Vyplňte formulár a do 24 hodín vám pošleme prvý návrh webu zdarma.',
    fields: [
      { key: 'name', label: 'Meno a priezvisko *', type: 'text', placeholder: 'Ján Novák' },
      { key: 'email', label: 'Email *', type: 'email', placeholder: 'jan@firma.sk' },
      { key: 'phone', label: 'Telefón', type: 'tel', placeholder: '+421 900 000 000' },
    ],
    packageLabel: 'Balík *',
    packagePlaceholder: '— Vyberte balík —',
    messageLabel: 'Správa',
    messagePlaceholder: 'Čo potrebujete? Aký je váš biznis?',
    submitBtn: 'Získať bezplatný návrh →',
    submitting: 'Odosielam...',
    successTitle: 'Ďakujeme!',
    successMsg: 'Vaša objednávka bola prijatá. Potvrdenie sme poslali na váš email.',
    newOrder: 'Nová objednávka',
    errorMsg: '❌ Chyba. Skúste znova alebo nás kontaktujte priamo.',
    footerRights: '© 2025 Web Klienti · Všetky práva vyhradené',
    packages: ['One-page web — 299 €', 'Prezentačný web — 499 €', 'Internetový obchod — 999 €'],
    cards: [
      { tag: 'Základná', name: 'One-page web', price: '299 €', old: 'bežne 599 €', forWhom: 'Ideálne pre živnostníkov a malé lokálne firmy', features: ['Moderný dizajn na mieru', 'Mobile friendly (Google to miluje)', 'Kontaktný formulár + mapa', 'WhatsApp — zákazník vám napíše jedným kliknutím', 'Facebook prepojenie — budujete komunitu od 1. dňa', 'SEO — nájdu vás na Googli skôr ako konkurenciu', 'GDPR ready (Privacy Policy + cookie lišta)', 'Sekcia Google recenzií — dôvera = viac klientov', 'Firemný email', '🎁 BONUS: Google Business profil (zobrazíte sa na Mapách)', 'Hotové za 5 dní'], featured: false },
      { tag: '⭐ Najpopulárnejší', name: 'Prezentačný web', price: '499 €', old: 'bežne 999 €', forWhom: 'Najlepšia voľba pre väčšinu klientov — firmy, služby, remeselníci', features: ['Všetko z One-page +', '5 podstránok na mieru', 'Galéria & referencie', 'Blog — pridávate články sami', 'Pokročilé SEO + analýza kľúčových slov', 'Google Analytics — vidíte kto a odkiaľ prichádza', 'Hotové za 7 dní'], featured: true },
      { tag: 'E-shop', name: 'Internetový obchod', price: '999 €', old: 'bežne 1999 €', forWhom: 'Pre tých, ktorí chcú predávať produkty online', features: ['Všetko z Prezentačného webu +', 'Do 500 produktov', 'Platobná brána (karta, PayPal)', 'Automatické faktúry', 'Správa objednávok', 'WhatsApp + Facebook shop prepojenie', 'Hotové za 14 dní'], featured: false },
    ],
    featuredBadge: 'NAJPOPULÁRNEJŠÍ',
    statNote: 'Nový projekt · Každý web robíme individuálne bez šablón',
    cookieMsg: 'Táto stránka používa cookies pre lepší zážitok a analytiku.',
    cookieAccept: 'Súhlasím',
    cookieDecline: 'Odmietnuť',
    privacyLink: 'Ochrana súkromia',
    privacyTitle: 'Ochrana osobných údajov',
    privacyContent: `Prevádzkovateľ: Web Klienti, info@webklienti.com, +421 907 890 600`,
  },
  cz: {
    nav: ['Ceník', 'Reference', 'Kontakt'],
    navOrder: 'Objednat',
    heroBadge: '🚀 Akce — 50% sleva do konce měsíce',
    heroTitle: ['Weby, které vám', 'přinášejí zákazníky ', 'z Google'],
    heroSub: 'Moderní web od 299 € bez měsíčních poplatků.\nNavržený tak, aby vám denně přinášel poptávky.',
    heroCta: 'Chci web, který prodává →',
    heroBadges: ['✓ Cena je konečná', '✓ Mobile friendly', '✓ Firemní email', '✓ Bez měsíčních poplatků'],
    marketTag: '🌍 Slovensko · Česko · Evropa',
    pricingLabel: 'Ceník',
    pricingTitle: 'Vyberte si balíček',
    orderBtn: 'Chci tento balíček →',
    howLabel: 'Postup',
    howTitle: 'Jak to funguje?',
    steps: [
      { num: 'krok 1', title: 'Vyplníte objednávku', desc: 'Vyberete si balíček a vyplníte krátký formulář za pár minut z mobilu nebo počítače.' },
      { num: 'krok 2', title: 'Potvrdíme detaily', desc: 'Spojíme se s vámi, projdeme vaše požadavky a dohodneme další postup.' },
      { num: 'krok 3', title: 'Vytvoříme váš web', desc: 'Připravíme profesionální web podle vašich představ a průběžně vás budeme informovat o postupu.' },
      { num: 'krok 4', title: 'Spuštění webu', desc: 'Po schválení web spustíme a můžete ho začít prezentovat svým zákazníkům.' },
    ],
    reviewsLabel: 'Reference',
    reviewsTitle: 'Co říkají klienti',
    reviewsNote: '* Jména zkrácena z důvodu ochrany soukromí klientů.',
    faqLabel: 'FAQ',
    faqTitle: 'Časté dotazy',
    faqItems: [
      { q: 'Jak dlouho trvá vytvoření webu?', a: '5 pracovních dní pro One-page web, 7 dní pro Prezentační web, 14 dní pro E-shop.' },
      { q: 'Platím něco měsíčně?', a: 'Ne. Platíte jen jednorázově za tvorbu. Hosting a doménu si zajistíte sami, nebo vám pomůžeme — stojí to cca 20–30 € ročně.' },
      { q: 'Kdy a kolik platím za web?', a: 'Po potvrzení objednávky uhradíte zálohu 50 % z ceny. Zbytek platíte až po dokončení a schválení webu. Žádná platba předem v plné výši.' },
      { q: 'Pomůžete s texty a fotkami?', a: 'Ano. Pokud nemáte texty, pomůžeme vám je připravit. Fotky doporučujeme vlastní, ale umíme použít i stockové.' },
      { q: 'Budu vlastnit web?', a: 'Ano. Po předání je web 100% váš. Dostanete přístupy ke všemu.' },
      { q: 'Mohu web později upravovat?', a: 'Ano. Naučíme vás základní úpravy nebo vám pomůžeme kdykoliv později.' },
      { q: 'Co když se mi návrh nebude líbit?', a: 'První návrh pošleme do 24 hodin. Pokud se vám nebude líbit, upravíme ho. Platíte až po schválení návrhu.' },
    ],
    guaranteeTitle: 'Bez rizika',
    guaranteeText: 'První návrh webu dostanete do 24 hodin zdarma. Platíte jen 50 % zálohu — zbytek až po schválení hotového webu. Žádné skryté poplatky.',
    guaranteeBadges: ['✓ Návrh do 24 hodin', '✓ 50 % záloha · 50 % po schválení', '✓ Web je po předání váš'],
    formLabel: 'Objednávka',
    formTitle: 'Získejte bezplatný návrh',
    formSub: 'Vyplňte formulář a do 24 hodin vám pošleme první návrh webu zdarma.',
    fields: [
      { key: 'name', label: 'Jméno a příjmení *', type: 'text', placeholder: 'Jan Novák' },
      { key: 'email', label: 'Email *', type: 'email', placeholder: 'jan@firma.cz' },
      { key: 'phone', label: 'Telefon', type: 'tel', placeholder: '+420 900 000 000' },
    ],
    packageLabel: 'Balíček *',
    packagePlaceholder: '— Vyberte balíček —',
    messageLabel: 'Zpráva',
    messagePlaceholder: 'Co potřebujete? Jaký je váš byznys?',
    submitBtn: 'Získat bezplatný návrh →',
    submitting: 'Odesílám...',
    successTitle: 'Děkujeme!',
    successMsg: 'Vaše objednávka byla přijata. Potvrzení jsme poslali na váš email.',
    newOrder: 'Nová objednávka',
    errorMsg: '❌ Chyba. Zkuste znovu nebo nás kontaktujte přímo.',
    footerRights: '© 2025 Web Klienti · Všechna práva vyhrazena',
    packages: ['One-page web — 299 €', 'Prezentační web — 499 €', 'Internetový obchod — 999 €'],
    cards: [
      { tag: 'Základní', name: 'One-page web', price: '299 €', old: 'běžně 599 €', forWhom: 'Ideální pro živnostníky a malé lokální firmy', features: ['Moderní design na míru', 'Mobile friendly (Google to miluje)', 'Kontaktní formulář + mapa', 'WhatsApp — zákazník vám napíše jedním kliknutím', 'Facebook propojení — budujete komunitu od 1. dne', 'SEO — najdou vás na Googlu dříve než konkurenci', 'GDPR ready (Privacy Policy + cookie lišta)', 'Sekce Google recenzí — důvěra = více klientů', 'Firemní email', '🎁 BONUS: Google Business profil (zobrazíte se na Mapách)', 'Hotovo za 5 dní'], featured: false },
      { tag: '⭐ Nejpopulárnější', name: 'Prezentační web', price: '499 €', old: 'běžně 999 €', forWhom: 'Nejlepší volba pro většinu klientů — firmy, služby, řemeslníci', features: ['Vše z One-page +', '5 podstránek na míru', 'Galerie & reference', 'Blog — přidáváte články sami', 'Pokročilé SEO + analýza klíčových slov', 'Google Analytics — vidíte kdo a odkud přichází', 'Hotovo za 7 dní'], featured: true },
      { tag: 'E-shop', name: 'Internetový obchod', price: '999 €', old: 'běžně 1999 €', forWhom: 'Pro ty, kteří chtějí prodávat produkty online', features: ['Vše z Prezentačního webu +', 'Do 500 produktů', 'Platební brána (karta, PayPal)', 'Automatické faktury', 'Správa objednávek', 'WhatsApp + Facebook shop propojení', 'Hotovo za 14 dní'], featured: false },
    ],
    featuredBadge: 'NEJPOPULÁRNĚJŠÍ',
    statNote: 'Nový projekt · Každý web děláme individuálně bez šablon',
    cookieMsg: 'Tato stránka používá cookies pro lepší zážitek a analytiku.',
    cookieAccept: 'Souhlasím',
    cookieDecline: 'Odmítnout',
    privacyLink: 'Ochrana soukromí',
    privacyTitle: 'Ochrana osobních údajů',
    privacyContent: `Provozovatel: Web Klienti, info@webklienti.com, +421 907 890 600`,
  },
  en: {
    nav: ['Pricing', 'Reviews', 'Contact'],
    navOrder: 'Order now',
    heroBadge: '🚀 Sale — 50% off until end of month',
    heroTitle: ['Websites that bring', 'you customers ', 'from Google'],
    heroSub: 'Professional website from 299 €. No monthly fees.\nBuilt to generate inquiries for your business every day.',
    heroCta: 'I want a website that sells →',
    heroBadges: ['✓ Final price', '✓ Mobile friendly', '✓ Business email', '✓ No monthly fees'],
    marketTag: '🌍 Slovakia · Czech Republic · Europe',
    pricingLabel: 'Pricing',
    pricingTitle: 'Choose your plan',
    orderBtn: 'I want this plan →',
    howLabel: 'Process',
    howTitle: 'How it works',
    steps: [
      { num: 'step 1', title: 'Fill in the order', desc: 'Choose a plan and fill out a short form in a few minutes from your phone or computer.' },
      { num: 'step 2', title: 'We confirm details', desc: "We'll get in touch, go through your requirements and agree on next steps." },
      { num: 'step 3', title: 'We build your site', desc: "We prepare a professional website to your liking and keep you updated throughout the process." },
      { num: 'step 4', title: 'Launch', desc: "After your approval we launch the site and you can start presenting it to customers." },
    ],
    reviewsLabel: 'Testimonials',
    reviewsTitle: 'What clients say',
    reviewsNote: '* Names shortened to protect client privacy.',
    faqLabel: 'FAQ',
    faqTitle: 'Frequently asked questions',
    faqItems: [
      { q: 'How long does it take to build a website?', a: '5 working days for One-page, 7 days for Business website, 14 days for Online store.' },
      { q: 'Are there monthly fees?', a: "No. You pay once for the build. Hosting and domain are separate — around €20–30/year, or we can help you set it up." },
      { q: 'When and how much do I pay?', a: 'After confirming your order, you pay a 50% deposit. The remaining 50% is due only after the website is completed and approved by you. No full payment upfront.' },
      { q: 'Do you help with content and photos?', a: "Yes. If you don't have texts, we'll help you prepare them. We recommend your own photos, but stock photos work too." },
      { q: 'Will I own the website?', a: 'Yes. After delivery, the website is 100% yours. You get full access to everything.' },
      { q: 'Can I update the website later?', a: "Yes. We'll show you how to make basic edits, or we can help you anytime later." },
      { q: "What if I don't like the design?", a: "We send the first draft within 24 hours. If you don't like it, we'll revise it. You only pay after approving the design." },
    ],
    guaranteeTitle: 'Zero risk',
    guaranteeText: "You get your first website draft within 24 hours, for free. Pay just a 50% deposit — the rest only after you approve the finished website. No hidden fees.",
    guaranteeBadges: ['✓ Draft in 24 hours', '✓ 50% deposit · 50% after approval', '✓ Website is yours after delivery'],
    formLabel: 'Order',
    formTitle: 'Get a free website draft',
    formSub: "Fill out the form and we'll send you a free first draft within 24 hours.",
    fields: [
      { key: 'name', label: 'Full name *', type: 'text', placeholder: 'John Smith' },
      { key: 'email', label: 'Email *', type: 'email', placeholder: 'john@company.com' },
      { key: 'phone', label: 'Phone', type: 'tel', placeholder: '+421 900 000 000' },
    ],
    packageLabel: 'Plan *',
    packagePlaceholder: '— Select a plan —',
    messageLabel: 'Message',
    messagePlaceholder: 'What do you need? What is your business?',
    submitBtn: 'Get free draft →',
    submitting: 'Sending...',
    successTitle: 'Thank you!',
    successMsg: 'Your order has been received. We sent a confirmation to your email.',
    newOrder: 'New order',
    errorMsg: '❌ Error. Please try again or contact us directly.',
    footerRights: '© 2025 Web Klienti · All rights reserved',
    packages: ['One-page website — 299 €', 'Business website — 499 €', 'Online store — 999 €'],
    cards: [
      { tag: 'Starter', name: 'One-page website', price: '299 €', old: 'usually 599 €', forWhom: 'Perfect for freelancers and small local businesses', features: ['Custom modern design', 'Mobile friendly (Google loves it)', 'Contact form + map', 'WhatsApp — customers reach you in one click', 'Facebook link — build community from day 1', 'SEO — appear on Google before your competitors', 'GDPR ready (Privacy Policy + cookie banner)', 'Google reviews section — trust = more clients', 'Business email', '🎁 BONUS: Google Business profile (show up on Maps)', 'Ready in 5 days'], featured: false },
      { tag: '⭐ Most popular', name: 'Business website', price: '499 €', old: 'usually 999 €', forWhom: 'Best choice for most clients — companies, services, tradespeople', features: ['Everything from One-page +', '5 custom subpages', 'Gallery & testimonials', 'Blog — add articles yourself', 'Advanced SEO + keyword analysis', 'Google Analytics — see who visits and from where', 'Ready in 7 days'], featured: true },
      { tag: 'E-commerce', name: 'Online store', price: '999 €', old: 'usually 1999 €', forWhom: 'For those who want to sell products online', features: ['Everything from Business website +', 'Up to 500 products', 'Payment gateway (card, PayPal)', 'Automatic invoices', 'Order management', 'WhatsApp + Facebook shop integration', 'Ready in 14 days'], featured: false },
    ],
    featuredBadge: 'MOST POPULAR',
    statNote: 'New agency · Every website built individually, no templates',
    cookieMsg: 'This site uses cookies for a better experience and analytics.',
    cookieAccept: 'Accept',
    cookieDecline: 'Decline',
    privacyLink: 'Privacy Policy',
    privacyTitle: 'Privacy Policy',
    privacyContent: `Controller: Web Klienti, info@webklienti.com, +421 907 890 600`,
  },
};

function HomePage() {
  const [lang, setLang] = useState('sk');
  const [form, setForm] = useState({ name: '', email: '', phone: '', package: '', message: '', consent: false });
  const [consentError, setConsentError] = useState(false);
  const [formStatus, setFormStatus] = useState('idle');
  const [cookieVisible, setCookieVisible] = useState(() => !localStorage.getItem('wk_cookie'));
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const t = T[lang];

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.package) {
      alert(lang === 'en' ? 'Please fill in name, email and select a plan' : lang === 'cz' ? 'Vyplňte jméno, email a vyberte balíček' : 'Vyplňte meno, email a vyberte balík');
      return;
    }
    if (!form.consent) { setConsentError(true); return; }
    setConsentError(false);
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
        setForm({ name: '', email: '', phone: '', package: '', message: '', consent: false });
      } else { setFormStatus('error'); }
    } catch { setFormStatus('error'); }
  };

  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); };
  const acceptCookies = () => { localStorage.setItem('wk_cookie', '1'); setCookieVisible(false); };
  const declineCookies = () => { localStorage.setItem('wk_cookie', '0'); setCookieVisible(false); };
  const navIds = ['pricing', 'reviews', 'footer'];

  const langBtn = (code) => ({
    background: lang === code ? 'rgba(255,210,0,0.2)' : 'rgba(255,255,255,0.15)',
    border: lang === code ? '1px solid rgba(255,210,0,0.7)' : '1px solid rgba(255,255,255,0.3)',
    color: lang === code ? '#ffd200' : 'rgba(245,242,235,0.85)',
    padding: '4px 10px', borderRadius: 6, fontSize: 12, fontWeight: 700,
    cursor: 'pointer', transition: 'all .2s', letterSpacing: 1,
  });

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

  const seoData = {
    sk: { title: 'Tvorba webstránok, ktoré prinášajú zákazníkov | WebKlienti', description: 'Moderné webstránky od 299 €. Web hotový do 5 dní. Tvorba webov a e-shopov pre firmy na Slovensku a v Česku. Bez mesačných poplatkov.', url: 'https://webklienti.com' },
    cz: { title: 'Tvorba webů, které přinášejí zákazníky | WebKlienti', description: 'Moderní webové stránky od 299 €. Web hotový do 5 dní. Tvorba webů a e-shopů pro firmy v ČR a SR. Bez měsíčních poplatků.', url: 'https://webklienti.com' },
    en: { title: 'Websites That Bring You Customers | WebKlienti', description: 'Professional websites from 299 €. Ready in 5 days. Web design and e-commerce for businesses in Slovakia and Czech Republic. No monthly fees.', url: 'https://webklienti.com' },
  };
  const seo = seoData[lang];

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: '#f5f2eb', color: '#1a1a1a', minHeight: '100vh' }}>
      <Helmet>
        <html lang={lang} />
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.url} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seo.url} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content="https://webklienti.com/og-image.jpg" />
        <meta property="og:locale" content={lang === 'sk' ? 'sk_SK' : lang === 'cz' ? 'cs_CZ' : 'en_US'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content="https://webklienti.com/og-image.jpg" />
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"LocalBusiness","name":"WebKlienti","url":"https://webklienti.com","telephone":"+421907890600","email":"info@webklienti.com","address":{"@type":"PostalAddress","streetAddress":"Ulica Mozartova 5652/12","addressLocality":"Trnava","postalCode":"917 08","addressCountry":"SK"},"geo":{"@type":"GeoCoordinates","latitude":48.3774,"longitude":17.5872},"areaServed":["SK","CZ"],"priceRange":"\u20ac\u20ac","openingHours":"Mo-Fr 09:00-18:00","sameAs":["https://facebook.com/profile.php?id=61588797397714"]}`}</script>
      </Helmet>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
        @media (max-width: 600px) {
          .hero-stats { gap: 24px !important; }
          .hero-stats > div > div:first-child { font-size: 28px !important; }
          .montwell-grid { grid-template-columns: 1fr !important; }
          .montwell-facts { grid-template-columns: 1fr 1fr !important; }
          .prekoho-grid { grid-template-columns: 1fr 1fr !important; }
          .pricing-grid { grid-template-columns: 1fr !important; }
          .pricing-card { border-radius: 16px !important; }
          .steps-grid { grid-template-columns: 1fr !important; }
          .step-card { border-radius: 16px !important; border-right: none !important; border-bottom: 1px solid rgba(0,0,0,0.06) !important; }
          .hero-badges { gap: 6px !important; }
          .guarantee-badges { flex-direction: column !important; align-items: center !important; }
          .closing-arg { flex-direction: column !important; gap: 12px !important; align-items: flex-start !important; }
          .form-trust { flex-direction: column !important; align-items: flex-start !important; gap: 6px !important; }
          .footer-links { flex-direction: column !important; gap: 8px !important; }
          .faq-accordion { padding: 16px 20px !important; }
          .form-wrap { padding: 28px 20px !important; }
          .section-pad { padding: 60px 20px !important; }
          .hero-pad { padding: 72px 20px 80px !important; }
          .montwell-pad { padding: 60px 20px !important; }
          .contact-pad { padding: 60px 20px !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(26,26,26,0.97)', backdropFilter: 'blur(8px)', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 64 }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src={logoImg} alt="WebKlienti logo" style={{ height: 40, width: 40, objectFit: 'contain', mixBlendMode: 'screen' }} />
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
          <button onClick={() => scrollTo('contact')} style={{ background: '#ffd200', color: '#1a1a1a', border: 'none', padding: '8px 20px', borderRadius: 100, fontSize: 14, fontWeight: 600, cursor: 'pointer', marginLeft: 4 }}>{t.navOrder}</button>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger" aria-label="Menu" style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8, flexDirection: 'column', gap: 5 }}>
          <span style={{ display: 'block', width: 24, height: 2, background: menuOpen ? '#ffd200' : '#f5f2eb', transition: 'all .3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
          <span style={{ display: 'block', width: 24, height: 2, background: menuOpen ? 'transparent' : '#f5f2eb', transition: 'all .3s' }}></span>
          <span style={{ display: 'block', width: 24, height: 2, background: menuOpen ? '#ffd200' : '#f5f2eb', transition: 'all .3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
        </button>
      </nav>

      {menuOpen && (
        <div style={{ position: 'fixed', top: 64, left: 0, right: 0, zIndex: 99, background: 'rgba(26,26,26,0.98)', padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 16, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          {t.nav.map((label, i) => (
            <button key={i} onClick={() => scrollTo(navIds[i])} style={{ background: 'none', border: 'none', color: 'rgba(245,242,235,0.9)', cursor: 'pointer', fontSize: 18, fontWeight: 600, textAlign: 'left', padding: '8px 0' }}>{label}</button>
          ))}
          <Link to="/blog" onClick={() => setMenuOpen(false)} style={{ color: 'rgba(245,242,235,0.9)', textDecoration: 'none', fontSize: 18, fontWeight: 600, padding: '8px 0' }}>Blog</Link>
          <div style={{ display: 'flex', gap: 8, paddingTop: 8 }}>
            {['sk', 'cz', 'en'].map(code => (
              <button key={code} onClick={() => setLang(code)} style={langBtn(code)}>{code.toUpperCase()}</button>
            ))}
          </div>
          <button onClick={() => scrollTo('contact')} style={{ background: '#ffd200', color: '#1a1a1a', border: 'none', padding: '14px 20px', borderRadius: 100, fontSize: 16, fontWeight: 700, cursor: 'pointer', marginTop: 8 }}>{t.navOrder}</button>
        </div>
      )}

      <main>
        {/* HERO */}
        <div className="hero-pad" style={{ background: '#1a1a1a', color: '#f5f2eb', padding: '100px 40px 120px', textAlign: 'center' }}>
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(245,242,235,0.6)', padding: '5px 16px', borderRadius: 100, fontSize: 12, fontWeight: 500, marginBottom: 12 }}>{t.marketTag}</div>
            <div style={{ display: 'block', marginTop: 8 }}>
              <div style={{ display: 'inline-block', background: 'rgba(255,210,0,0.15)', color: '#ffd200', padding: '6px 18px', borderRadius: 100, fontSize: 13, fontWeight: 600, marginBottom: 24, letterSpacing: 1 }}>{t.heroBadge}</div>
            </div>
            <h1 style={{ fontSize: 'clamp(36px, 7vw, 80px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: -2, marginBottom: 24 }}>
              {t.heroTitle[0]}<br /><span style={{ color: '#ffd200' }}>{t.heroTitle[1]}</span>{t.heroTitle[2]}
            </h1>
            <p style={{ fontSize: 'clamp(16px, 2.5vw, 20px)', color: 'rgba(245,242,235,0.6)', marginBottom: 40, lineHeight: 1.6, whiteSpace: 'pre-line' }}>{t.heroSub}</p>
            <button onClick={() => scrollTo('contact')} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#ffd200', color: '#1a1a1a', padding: '16px 36px', borderRadius: 100, fontWeight: 700, fontSize: 'clamp(15px, 2vw, 18px)', cursor: 'pointer', border: 'none', marginBottom: 40 }}>{t.heroCta}</button>
            <div className="hero-stats" style={{ display: 'flex', gap: 40, justifyContent: 'center', paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.08)', marginBottom: 16 }}>
              {[
                { val: lang === 'en' ? '5 days' : '5 dní', label: lang === 'en' ? 'Website ready' : lang === 'cz' ? 'Hotový web' : 'Hotový web' },
                { val: '3×', label: lang === 'en' ? 'More inquiries' : lang === 'cz' ? 'Více poptávek' : 'Viac dopytov' },
                { val: '299€', label: lang === 'en' ? 'Starting price' : 'Od ceny' },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: 32, fontWeight: 900, color: '#ffd200', letterSpacing: -1 }}>{s.val}</div>
                  <div style={{ fontSize: 12, color: 'rgba(245,242,235,0.5)', marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 12, color: 'rgba(245,242,235,0.35)', marginBottom: 24, fontStyle: 'italic' }}>{t.statNote}</p>
            <div className="hero-badges" style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
              {t.heroBadges.map((b) => (
                <span key={b} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: 100, fontSize: 12, color: 'rgba(245,242,235,0.7)' }}>{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* MONTWELL */}
        <div className="montwell-pad" style={{ background: '#edeae0', padding: '80px 40px' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <p style={{ fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', color: '#999', marginBottom: 8 }}>{montwell.label}</p>
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 40px)', fontWeight: 900, letterSpacing: -1, marginBottom: 32 }}>Montwell</h2>
            <div className="montwell-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, alignItems: 'start' }}>
              <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.15)', border: '1px solid rgba(0,0,0,0.06)' }}>
                <a href="https://montwell.sk" target="_blank" rel="noopener noreferrer">
                  <img src={montwellImg} alt="Montwell webstránka" style={{ width: '100%', display: 'block' }} loading="lazy" />
                </a>
              </div>
              <div>
                <div className="montwell-facts" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 24 }}>
                  {montwell.facts.map((f, i) => (
                    <div key={i} style={{ background: '#fff', borderRadius: 14, padding: '16px 18px' }}>
                      <p style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: '#bbb', marginBottom: 6 }}>{f.label}</p>
                      <p style={{ fontSize: 13, fontWeight: 600, color: '#1a1a1a', lineHeight: 1.5, margin: 0 }}>{f.value}</p>
                    </div>
                  ))}
                </div>
                <a href="https://montwell.sk" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: '#1a1a1a', color: '#ffd200', padding: '12px 28px', borderRadius: 100, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>{montwell.viewBtn}</a>
              </div>
            </div>
          </div>
        </div>

        {/* PRE KOHO */}
        <div className="section-pad" style={{ background: '#f5f2eb', padding: '80px 40px' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', color: '#888', marginBottom: 12 }}>
              {lang === 'en' ? 'For who' : lang === 'cz' ? 'Pro koho' : 'Pre koho'}
            </p>
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 40px)', fontWeight: 900, letterSpacing: -1, marginBottom: 40 }}>
              {lang === 'en' ? 'WebKlienti is the right fit for you if you are…' : lang === 'cz' ? 'WebKlienti je pro vás, pokud jste…' : 'WebKlienti je pre vás, ak ste…'}
            </h2>
            <div className="prekoho-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, marginBottom: 32 }}>
              {[
                { icon: '🔨', label: lang === 'en' ? 'Tradesperson / craftsman' : lang === 'cz' ? 'Řemeslník / živnostník' : 'Remeselník / živnostník' },
                { icon: '💇', label: lang === 'en' ? 'Beauty & wellness' : lang === 'cz' ? 'Kadeřnictví, kosmetika' : 'Kaderníctvo, kozmetika' },
                { icon: '🏗️', label: lang === 'en' ? 'Construction & services' : lang === 'cz' ? 'Stavebnictví a služby' : 'Stavebníctvo a služby' },
                { icon: '🏋️', label: lang === 'en' ? 'Fitness & sport' : lang === 'cz' ? 'Fitness a sport' : 'Fitness a šport' },
                { icon: '🛒', label: lang === 'en' ? 'Starting e-shop' : lang === 'cz' ? 'Začínající e-shop' : 'Začínajúci e-shop' },
                { icon: '📍', label: lang === 'en' ? 'Local business' : lang === 'cz' ? 'Lokální podnik' : 'Lokálny podnik' },
              ].map((item, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: 14, padding: '20px 12px', textAlign: 'center' }}>
                  <div style={{ fontSize: 28, marginBottom: 8 }}>{item.icon}</div>
                  <p style={{ fontSize: 13, fontWeight: 600, color: '#1a1a1a', margin: 0 }}>{item.label}</p>
                </div>
              ))}
            </div>
            <div style={{ background: '#1a1a1a', borderRadius: 14, padding: '16px 24px', display: 'inline-block' }}>
              <p style={{ fontSize: 13, color: 'rgba(245,242,235,0.5)', margin: 0 }}>
                ❌ {lang === 'en' ? 'Not for enterprise or custom development projects' : lang === 'cz' ? 'Nejsme vhodní pro enterprise či custom dev projekty' : 'Nie sme vhodní pre enterprise alebo custom dev projekty'}
              </p>
            </div>
          </div>
        </div>

        {/* CENNÍK */}
        <div id="pricing" className="section-pad" style={{ padding: '80px 20px', maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', color: '#888', marginBottom: 12 }}>{t.pricingLabel}</p>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 48px)', fontWeight: 900, letterSpacing: -2, marginBottom: 48 }}>{t.pricingTitle}</h2>
          <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 2, alignItems: 'stretch' }}>
            {t.cards.map((card, i) => (
              <div key={i} className="pricing-card" style={{ background: card.featured ? '#1a1a1a' : '#fff', color: card.featured ? '#f5f2eb' : '#1a1a1a', padding: '36px 28px', borderRadius: i === 0 ? '24px 0 0 24px' : i === 2 ? '0 24px 24px 0' : 0, position: 'relative', display: 'flex', flexDirection: 'column' }}>
                {card.featured && <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: '#ffd200', color: '#1a1a1a', padding: '4px 16px', borderRadius: 100, fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap' }}>{t.featuredBadge}</div>}
                <p style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: card.featured ? 'rgba(245,242,235,0.5)' : '#888', marginBottom: 10 }}>{card.tag}</p>
                <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 4 }}>{card.name}</h3>
                <div style={{ fontSize: 44, fontWeight: 900, letterSpacing: -2, margin: '12px 0 4px' }}>{card.price}</div>
                <p style={{ fontSize: 13, textDecoration: 'line-through', color: card.featured ? 'rgba(245,242,235,0.4)' : '#bbb', marginBottom: 10 }}>{card.old}</p>
                {card.forWhom && <p style={{ fontSize: 12, color: card.featured ? 'rgba(255,210,0,0.8)' : '#888', background: card.featured ? 'rgba(255,210,0,0.08)' : '#f5f2eb', padding: '7px 10px', borderRadius: 8, marginBottom: 16, lineHeight: 1.5 }}>👤 {card.forWhom}</p>}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9, flexGrow: 1, marginBottom: 20, padding: 0 }}>
                  {card.features.map(f => (
                    <li key={f} style={{ fontSize: 13, color: card.featured ? 'rgba(245,242,235,0.75)' : '#555', display: 'flex', gap: 8 }}>
                      <span style={{ color: '#ffd200', fontWeight: 700, flexShrink: 0 }}>✓</span>{f}
                    </li>
                  ))}
                </ul>
                <button onClick={() => { setForm(p => ({ ...p, package: card.name + ' — ' + card.price })); scrollTo('contact'); }}
                  style={{ width: '100%', padding: '14px 12px', borderRadius: 100, fontSize: 14, fontWeight: 800, cursor: 'pointer', textAlign: 'center', background: card.featured ? '#ffd200' : 'transparent', color: '#1a1a1a', border: card.featured ? '2px solid #ffd200' : '2px solid #1a1a1a', lineHeight: 1.3, minHeight: 52 }}>
                  {t.orderBtn}
                  <span style={{ display: 'block', fontSize: 11, fontWeight: 600, opacity: 0.6, marginTop: 2 }}>{card.name} · {card.price}</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* GARANCIA */}
        <div style={{ background: '#1a1a1a', padding: '72px 24px' }}>
          <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: 44, marginBottom: 14 }}>🛡️</div>
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 900, color: '#f5f2eb', letterSpacing: -1, marginBottom: 14 }}>{t.guaranteeTitle}</h2>
            <p style={{ fontSize: 17, color: 'rgba(245,242,235,0.6)', lineHeight: 1.7, marginBottom: 28 }}>{t.guaranteeText}</p>
            <div className="guarantee-badges" style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
              {t.guaranteeBadges.map(b => (
                <span key={b} style={{ background: 'rgba(255,210,0,0.12)', border: '1px solid rgba(255,210,0,0.3)', color: '#ffd200', padding: '8px 16px', borderRadius: 100, fontSize: 13, fontWeight: 600 }}>{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* AKO TO FUNGUJE */}
        <div className="section-pad" style={{ background: '#f5f2eb', padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <p style={{ fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', color: '#aaa', marginBottom: 12 }}>{t.howLabel}</p>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 48px)', fontWeight: 900, letterSpacing: -2, marginBottom: 48 }}>{t.howTitle}</h2>
            <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
              {t.steps.map((s, i) => (
                <div key={i} className="step-card" style={{ padding: '32px 28px', background: '#fff', borderRadius: i === 0 ? '20px 0 0 20px' : i === 3 ? '0 20px 20px 0' : 0, borderRight: i < 3 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}>
                  <div style={{ fontSize: 48, fontWeight: 900, color: 'rgba(0,0,0,0.06)', lineHeight: 1, marginBottom: 16 }}>{s.num}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{s.title}</h3>
                  <p style={{ fontSize: 13, color: '#888', lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* REFERENCIE */}
        <div id="reviews" style={{ background: '#1a1a1a', padding: '72px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <p style={{ fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', color: '#666', marginBottom: 12 }}>{t.reviewsLabel}</p>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 48px)', fontWeight: 900, letterSpacing: -2, color: '#f5f2eb', marginBottom: 48 }}>{t.reviewsTitle}</h2>
            {staticReviews.length > 0 ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
                {staticReviews.map((r, i) => (
                  <div key={i} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: '28px 24px' }}>
                    <div style={{ color: '#ffd200', fontSize: 16, marginBottom: 14 }}>{'★'.repeat(r.rating)}</div>
                    <p style={{ fontSize: 15, color: 'rgba(245,242,235,0.75)', lineHeight: 1.7, marginBottom: 20 }}>"{r.text}"</p>
                    <p style={{ fontWeight: 700, color: '#f5f2eb', fontSize: 14 }}>{r.author}</p>
                    {r.company && <p style={{ fontSize: 13, color: 'rgba(245,242,235,0.4)' }}>{r.company}</p>}
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: '40px 24px', textAlign: 'center' }}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>⭐</div>
                <p style={{ fontSize: 15, color: 'rgba(245,242,235,0.5)', lineHeight: 1.7, marginBottom: 8 }}>
                  {lang === 'en' ? 'First client reviews coming soon.' : lang === 'cz' ? 'První recenze klientů budou brzy.' : 'Prvé recenzie klientov čoskoro.'}
                </p>
                <p style={{ fontSize: 13, color: 'rgba(245,242,235,0.3)' }}>
                  {lang === 'en' ? 'We are at the beginning — every project delivered with full commitment.' : lang === 'cz' ? 'Jsme na začátku — každý projekt děláme s plným nasazením.' : 'Sme na začiatku — každý projekt robíme s plným nasadením.'}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* FAQ */}
        <div id="faq" style={{ padding: '72px 24px', maxWidth: 800, margin: '0 auto' }}>
          <p style={{ fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', color: '#888', marginBottom: 12 }}>{t.faqLabel}</p>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 48px)', fontWeight: 900, letterSpacing: -2, marginBottom: 40 }}>{t.faqTitle}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {t.faqItems.map((item, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: i === 0 ? '16px 16px 0 0' : i === t.faqItems.length - 1 ? '0 0 16px 16px' : 0, overflow: 'hidden' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="faq-accordion"
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 24px', background: 'none', border: 'none', borderBottom: openFaq === i ? '1px solid #f0ece0' : 'none', cursor: 'pointer', textAlign: 'left', gap: 16, minHeight: 60 }}>
                  <span style={{ fontSize: 15, fontWeight: 600, color: '#1a1a1a' }}>{item.q}</span>
                  <span style={{ fontSize: 22, color: '#ffd200', fontWeight: 700, flexShrink: 0, transition: 'transform .2s', transform: openFaq === i ? 'rotate(45deg)' : 'none', display: 'inline-block' }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: '14px 24px 22px', fontSize: 14, color: '#666', lineHeight: 1.8 }}>{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* FORMULÁR */}
        <div id="contact" className="contact-pad" style={{ padding: '72px 24px', maxWidth: 680, margin: '0 auto' }}>
          <p style={{ fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', color: '#888', marginBottom: 12 }}>{t.formLabel}</p>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 48px)', fontWeight: 900, letterSpacing: -2, marginBottom: 12 }}>{t.formTitle}</h2>
          <p style={{ color: '#888', marginBottom: 24, fontSize: 15 }}>{t.formSub}</p>
          <div className="closing-arg" style={{ background: '#1a1a1a', borderRadius: 14, padding: '20px 24px', marginBottom: 28, display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { icon: '⚡', text: lang === 'en' ? 'Reply within 24 hours' : lang === 'cz' ? 'Odpovíme do 24 hodin' : 'Odpovieme do 24 hodín' },
              { icon: '🎨', text: lang === 'en' ? 'First draft free' : lang === 'cz' ? 'Návrh zdarma' : 'Prvý návrh zdarma' },
              { icon: '🛡️', text: lang === 'en' ? 'No commitment' : lang === 'cz' ? 'Bez závazku' : 'Bez záväzku' },
            ].map(item => (
              <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 16 }}>{item.icon}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#f5f2eb' }}>{item.text}</span>
              </div>
            ))}
          </div>
          {formStatus === 'success' ? (
            <div style={{ background: '#1a1a1a', color: '#f5f2eb', borderRadius: 20, padding: '52px 32px', textAlign: 'center' }}>
              <div style={{ fontSize: 48, marginBottom: 14 }}>🎉</div>
              <h3 style={{ fontSize: 26, fontWeight: 800, marginBottom: 10 }}>{t.successTitle}</h3>
              <p style={{ color: 'rgba(245,242,235,0.6)', fontSize: 15 }}>{t.successMsg}</p>
              <button onClick={() => setFormStatus('idle')} style={{ marginTop: 28, background: '#ffd200', color: '#1a1a1a', border: 'none', padding: '12px 28px', borderRadius: 100, fontWeight: 600, cursor: 'pointer' }}>{t.newOrder}</button>
            </div>
          ) : (
            <div className="form-wrap" style={{ background: '#fff', borderRadius: 20, padding: '40px 36px', display: 'flex', flexDirection: 'column', gap: 18 }}>
              {t.fields.map(f => (
                <div key={f.key}>
                  <label htmlFor={`field-${f.key}`} style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 7, color: '#444' }}>{f.label}</label>
                  <input id={`field-${f.key}`} type={f.type} placeholder={f.placeholder} value={form[f.key]} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                    style={{ width: '100%', padding: '13px 16px', border: '1.5px solid #e5e5e5', borderRadius: 12, fontSize: 16, outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box' }} />
                </div>
              ))}
              <div>
                <label htmlFor="field-package" style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 7, color: '#444' }}>{t.packageLabel}</label>
                <select id="field-package" value={form.package} onChange={e => setForm(p => ({ ...p, package: e.target.value }))}
                  style={{ width: '100%', padding: '13px 16px', border: '1.5px solid #e5e5e5', borderRadius: 12, fontSize: 16, outline: 'none', fontFamily: 'inherit', background: '#fff' }}>
                  <option value="">{t.packagePlaceholder}</option>
                  {t.packages.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="field-message" style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 7, color: '#444' }}>{t.messageLabel}</label>
                <textarea id="field-message" placeholder={t.messagePlaceholder} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} rows={4}
                  style={{ width: '100%', padding: '13px 16px', border: '1.5px solid #e5e5e5', borderRadius: 12, fontSize: 16, outline: 'none', fontFamily: 'inherit', resize: 'vertical', boxSizing: 'border-box' }} />
              </div>
              {formStatus === 'error' && <p style={{ color: '#e24b4a', fontSize: 14 }} role="alert">{t.errorMsg}</p>}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <input id="field-consent" type="checkbox" checked={form.consent}
                  onChange={e => { setForm(p => ({ ...p, consent: e.target.checked })); setConsentError(false); }}
                  style={{ marginTop: 3, width: 18, height: 18, cursor: 'pointer', accentColor: '#1a1a1a', flexShrink: 0 }} />
                <label htmlFor="field-consent" style={{ fontSize: 13, color: '#888', lineHeight: 1.5, cursor: 'pointer' }}>
                  {lang === 'en' ? 'I agree to the processing of personal data per the ' : lang === 'cz' ? 'Souhlasím se zpracováním osobních údajů dle ' : 'Súhlasím so spracovaním osobných údajov podľa '}
                  <Link to="/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#1a1a1a', fontSize: 13, fontWeight: 600, textDecoration: 'underline' }}>
                    {lang === 'en' ? 'Privacy Policy' : lang === 'cz' ? 'Ochrany osobních údajů' : 'Ochrany osobných údajov'}
                  </Link>{' *'}
                </label>
              </div>
              {consentError && <p style={{ color: '#e24b4a', fontSize: 13, marginTop: -8 }}>⚠️ {lang === 'en' ? 'Please confirm your consent.' : lang === 'cz' ? 'Potvrďte prosím souhlas.' : 'Potvrďte prosím súhlas.'}</p>}
              <div className="form-trust" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', padding: '4px 0' }}>
                {['✓ ' + (lang === 'en' ? 'Reply in 24h' : lang === 'cz' ? 'Odpovíme do 24h' : 'Odpovieme do 24h'),
                  '✓ ' + (lang === 'en' ? 'First draft free' : 'Návrh zdarma'),
                  '✓ ' + (lang === 'en' ? 'No commitment' : lang === 'cz' ? 'Bez závazku' : 'Bez záväzku'),
                ].map(b => <span key={b} style={{ fontSize: 12, color: '#888', fontWeight: 600 }}>{b}</span>)}
              </div>
              <button onClick={handleSubmit} disabled={formStatus === 'loading'}
                style={{ background: '#1a1a1a', color: '#ffd200', border: 'none', padding: '16px', borderRadius: 100, fontSize: 16, fontWeight: 700, cursor: 'pointer', opacity: formStatus === 'loading' ? 0.7 : 1, minHeight: 54 }}>
                {formStatus === 'loading' ? t.submitting : t.submitBtn}
              </button>
            </div>
          )}
        </div>
      </main>

      {/* FLOATING */}
      <div style={{ position: 'fixed', right: 16, bottom: 16, display: 'flex', flexDirection: 'column', gap: 12, zIndex: 999 }}>
        <a href="https://wa.me/421907890600" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={{ width: 52, height: 52, background: '#25D366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 22, boxShadow: '0 8px 20px rgba(0,0,0,0.2)' }}><FaWhatsapp /></a>
        <a href="https://facebook.com/profile.php?id=61588797397714" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ width: 52, height: 52, background: '#1877F2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 20, boxShadow: '0 8px 20px rgba(0,0,0,0.2)' }}><FaFacebookF /></a>
      </div>

      {/* FOOTER */}
      <footer id="footer" style={{ background: '#1a1a1a', color: 'rgba(245,242,235,0.4)', textAlign: 'center', padding: '36px 24px', fontSize: 13 }}>
        <img src={logoImg} alt="WebKlienti logo" style={{ height: 36, width: 36, objectFit: 'contain', marginBottom: 12, mixBlendMode: 'screen' }} />
        <div className="footer-links" style={{ display: 'flex', gap: 20, justifyContent: 'center', marginBottom: 12, flexWrap: 'wrap' }}>
          <a href="mailto:info@webklienti.com" style={{ color: 'rgba(245,242,235,0.6)', textDecoration: 'none' }}>info@webklienti.com</a>
          <a href="tel:+421907890600" style={{ color: 'rgba(245,242,235,0.6)', textDecoration: 'none' }}>+421 907 890 600</a>
          <span style={{ color: 'rgba(245,242,235,0.3)' }}>webklienti.com</span>
        </div>
        <p>{t.footerRights}</p>
      </footer>

      {/* COOKIE BANNER */}
      {cookieVisible && (
        <div role="dialog" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9999, background: '#1a1a1a', borderTop: '1px solid rgba(255,255,255,0.1)', padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
          <p style={{ color: 'rgba(245,242,235,0.75)', fontSize: 13, margin: 0, flex: 1 }}>
            🍪 {t.cookieMsg}{' '}
            <button onClick={() => setPrivacyOpen(true)} style={{ background: 'none', border: 'none', color: '#ffd200', cursor: 'pointer', fontSize: 13, textDecoration: 'underline', padding: 0 }}>{t.privacyLink}</button>
          </p>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={declineCookies} style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(245,242,235,0.6)', padding: '8px 14px', borderRadius: 100, fontSize: 13, cursor: 'pointer' }}>{t.cookieDecline}</button>
            <button onClick={acceptCookies} style={{ background: '#ffd200', border: 'none', color: '#1a1a1a', padding: '8px 18px', borderRadius: 100, fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>{t.cookieAccept}</button>
          </div>
        </div>
      )}

      {/* PRIVACY MODAL */}
      {privacyOpen && (
        <div role="dialog" aria-modal="true" style={{ position: 'fixed', inset: 0, zIndex: 10000, background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
          <div style={{ background: '#fff', borderRadius: 16, padding: '36px 28px', maxWidth: 580, width: '100%', maxHeight: '85vh', overflowY: 'auto', position: 'relative' }}>
            <button onClick={() => setPrivacyOpen(false)} style={{ position: 'absolute', top: 14, right: 14, background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', color: '#888' }}>✕</button>
            <h2 style={{ fontWeight: 800, fontSize: 20, marginBottom: 20 }}>{t.privacyTitle}</h2>
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
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  );
}
