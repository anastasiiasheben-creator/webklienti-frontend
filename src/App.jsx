import { useState, useEffect } from 'react';
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
    heroTitle: 'Získajte viac zákazníkov z Google bez platených reklám',
    heroSub: 'Premeníme váš web na systém, ktorý prináša pravidelné dopyty a reálnych klientov.',
    heroBenefits: [
      'Viac dopytov z Google bez navyšovania trafficu',
      'Web optimalizovaný na konverzie, nie len dizajn',
      'Jasné meranie toho, čo prináša zákazníkov',
    ],
    heroCta: 'Chcem analýzu, prečo mi web neprináša zákazníkov',
    heroMicro: 'odpoveď do 24 hodín · bez záväzkov · konkrétne odporúčania',
    marketTag: '🌍 Slovensko · Česko · Európa',
    problemLabel: 'Problém',
    problemTitle: 'Prečo väčšina firemných webov nefunguje',
    problemPoints: [
      'Web vyzerá dobre, ale neprináša dopyty',
      'Návštevníci nechápu, čo majú spraviť',
      'Chýba jasná ponuka a výzva k akcii',
      'SEO je neprepojené s predajom',
      'Chýba meranie výsledkov',
    ],
    problemClose: 'Výsledok: návštevnosť existuje, ale biznis nerastie.',
    agitTitle: 'Každý mesiac bez optimalizácie = stratené zákazky',
    agitText: 'Ak váš web nepracuje ako predajný systém, platíte za návštevnosť aj dizajn — ale nevracia sa vám to v dopytoch.',
    solutionLabel: 'Riešenie',
    solutionTitle: 'Ako z webu robíme systém na získavanie zákazníkov',
    solutionSteps: [
      { num: '01', title: 'Analýza', desc: 'Zistíme, prečo web nepretvára návštevníkov na dopyty.' },
      { num: '02', title: 'Optimalizácia konverzií', desc: 'Upravíme message, UX a CTA tak, aby klient vedel, čo má spraviť.' },
      { num: '03', title: 'SEO stratégia', desc: 'Témy a obsah, ktoré prinášajú reálnych klientov z Google.' },
      { num: '04', title: 'Tracking', desc: 'Vidíte presne, čo prináša zákazníkov — žiadne dohady.' },
    ],
    pricingLabel: 'Cenník',
    pricingTitle: 'Vyberte úroveň rastu',
    pricingNote: 'Všetky balíky sa zameriavajú na zvýšenie dopytov, nie len na návštevnosť.',
    orderBtn: 'Začať s týmto balíkom →',
    cards: [
      {
        tag: 'Starter',
        badge: null,
        name: 'One-page web',
        price: '299 €',
        old: 'bežne 599 €',
        forWhom: 'Pre živnostníkov a malé lokálne firmy',
        features: ['Moderný dizajn na mieru', 'Mobile friendly', 'Kontaktný formulár + mapa', 'WhatsApp prepojenie', 'Facebook prepojenie', 'Základné SEO', 'GDPR ready', 'Google Business profil (BONUS)', 'Hotové za 5 dní'],
        featured: false,
        dark: false,
      },
      {
        tag: 'Growth',
        badge: 'Odporúčané',
        name: 'Prezentačný web',
        price: '499 €',
        old: 'bežne 999 €',
        forWhom: 'Najlepší pomer cena/výsledok pre väčšinu firiem',
        features: ['Všetko zo Starter +', '5 podstránok na mieru', 'Galéria & referencie', 'Blog — pridávate sami', 'Pokročilé SEO + analýza kľúčových slov', 'Google Analytics', 'Hotové za 7 dní'],
        featured: true,
        dark: false,
      },
      {
        tag: 'Performance',
        badge: 'High Impact',
        name: 'Internetový obchod',
        price: '999 €',
        old: 'bežne 1999 €',
        forWhom: 'Pre rast a škálovanie — predaj produktov online',
        features: ['Všetko z Growth +', 'Do 500 produktov', 'Platobná brána (karta, PayPal)', 'Automatické faktúry', 'Správa objednávok', 'WhatsApp + Facebook shop', 'Hotové za 14 dní'],
        featured: false,
        dark: true,
      },
    ],
    featuredBadge: 'ODPORÚČANÉ',
    reviewsLabel: 'Referencie',
    reviewsTitle: 'Výsledky, ktoré klienti dosahujú',
    riskTitle: 'Bez rizika',
    riskText: 'Prvý návrh webu dostanete do 24 hodín zdarma. Platíte len 50 % zálohu — zvyšok až po schválení hotového webu.',
    riskPoints: ['✓ Transparentný proces krok po kroku', '✓ Odporúčania pred realizáciou', '✓ Platíte až po schválení návrhu'],
    finalCtaTitle: 'Chcete zistiť, prečo vám web neprináša zákazníkov?',
    finalCtaSub: 'Získajte bezplatnú analýzu webu — konkrétne kroky, nie všeobecné rady.',
    finalCtaBtn: 'Získať analýzu webu zdarma →',
    stickyCtaBtn: 'Chcem analýzu webu →',
    formLabel: 'Objednávka',
    formTitle: 'Získajte 3 konkrétne spôsoby, ako získať viac zákazníkov z Google',
    formSub: 'Vyplňte formulár a do 24 hodín vám pošleme prvý návrh webu zdarma.',
    fields: [
      { key: 'name', label: 'Meno a priezvisko *', type: 'text', placeholder: 'Ján Novák' },
      { key: 'email', label: 'Email *', type: 'email', placeholder: 'jan@firma.sk' },
      { key: 'phone', label: 'Telefón', type: 'tel', placeholder: '+421 900 000 000' },
    ],
    packageLabel: 'Balík *',
    packagePlaceholder: '— Vyberte balík —',
    packages: ['One-page web — 299 €', 'Prezentačný web — 499 €', 'Internetový obchod — 999 €'],
    intentCards: [
      { value: 'One-page web — 299 €', intent: 'Chcem len web', sub: 'Rýchly profesionálny web, ktorý ma dostane na Google', price: '299 €', badge: null },
      { value: 'Prezentačný web — 499 €', intent: 'Chcem viac klientov', sub: 'Web navrhnutý na dopyty — s SEO, blogom a analýzou', price: '499 €', badge: 'Odporúčané' },
      { value: 'Internetový obchod — 999 €', intent: 'Chcem maximalizovať dopyty', sub: 'Kompletný predajný systém vrátane e-shopu a trackingu', price: '999 €', badge: null },
    ],
    intentLabel: 'Čo chcete dosiahnuť? *',
    intentNote: 'Vyberte cieľ — pomôže nám pripraviť konkrétny plán pre vás.',
    messageLabel: 'Správa',
    messagePlaceholder: 'Čo potrebujete? Aký je váš biznis?',
    submitBtn: 'Získať návrh zdarma →',
    submitting: 'Odosielam...',
    successTitle: 'Ďakujeme!',
    successMsg: 'Vaša objednávka bola prijatá. Potvrdenie sme poslali na váš email.',
    newOrder: 'Nová objednávka',
    errorMsg: '❌ Chyba. Skúste znova alebo nás kontaktujte priamo.',
    footerRights: '© 2025 Web Klienti · Všetky práva vyhradené',
    faqLabel: 'FAQ',
    faqTitle: 'Časté otázky',
    faqItems: [
      { q: 'Koľko trvá vytvorenie webu?', a: '5 pracovných dní pre One-page web, 7 dní pre Prezentačný web, 14 dní pre E-shop.' },
      { q: 'Platím niečo mesačne?', a: 'Nie. Platíte len jednorazovo za tvorbu. Hosting a doménu si zabezpečíte sami — cca 20–30 € ročne.' },
      { q: 'Kedy a koľko platím?', a: 'Po potvrdení objednávky uhradíte zálohu 50 % z ceny. Zvyšok platíte až po dokončení a schválení webu.' },
      { q: 'Pomôžete s textami a fotkami?', a: 'Áno. Ak nemáte texty, pomôžeme vám ich pripraviť. Fotky odporúčame vlastné, ale vieme použiť aj stockové.' },
      { q: 'Budem vlastniť web?', a: 'Áno. Po odovzdaní je web 100% váš. Dostanete prístupy ku všetkému.' },
      { q: 'Čo ak sa mi návrh nebude páčiť?', a: 'Prvý návrh pošleme do 24 hodín. Ak sa vám nebude páčiť, upravíme ho. Platíte až po schválení návrhu.' },
    ],
    guaranteeTitle: 'Bez rizika',
    guaranteeText: 'Prvý návrh webu dostanete do 24 hodín zdarma. Platíte len 50 % zálohu — zvyšok až po schválení hotového webu. Žiadne skryté poplatky.',
    guaranteeBadges: ['✓ Návrh do 24 hodín', '✓ 50 % záloha · 50 % po schválení', '✓ Web je po odovzdaní váš'],
    cookieMsg: 'Táto stránka používa cookies pre lepší zážitok a analytiku.',
    cookieAccept: 'Súhlasím',
    cookieDecline: 'Odmietnuť',
    privacyLink: 'Ochrana súkromia',
    privacyTitle: 'Ochrana osobných údajov',
    privacyContent: `Prevádzkovateľ: Web Klienti, info@webklienti.com, +421 907 890 600`,
    statNote: 'Nový projekt · Každý web robíme individuálne bez šablón',
  },
  cz: {
    nav: ['Ceník', 'Reference', 'Kontakt'],
    navOrder: 'Objednat',
    heroBadge: '🚀 Akce — 50% sleva do konce měsíce',
    heroTitle: 'Získejte více zákazníků z Google bez placené reklamy',
    heroSub: 'Přeměníme váš web na systém, který přináší pravidelné poptávky a reálné klienty.',
    heroBenefits: [
      'Více poptávek z Google bez navyšování trafficu',
      'Web optimalizovaný na konverze, ne jen design',
      'Jasné měření toho, co přináší zákazníky',
    ],
    heroCta: 'Chci analýzu, proč mi web nepřináší zákazníky',
    heroMicro: 'odpověď do 24 hodin · bez závazků · konkrétní doporučení',
    marketTag: '🌍 Slovensko · Česko · Evropa',
    problemLabel: 'Problém',
    problemTitle: 'Proč většina firemních webů nefunguje',
    problemPoints: [
      'Web vypadá dobře, ale nepřináší poptávky',
      'Návštěvníci nechápou, co mají udělat',
      'Chybí jasná nabídka a výzva k akci',
      'SEO je nepropojené s prodejem',
      'Chybí měření výsledků',
    ],
    problemClose: 'Výsledek: návštěvnost existuje, ale byznys neroste.',
    agitTitle: 'Každý měsíc bez optimalizace = ztracené zakázky',
    agitText: 'Pokud váš web nepracuje jako prodejní systém, platíte za návštěvnost i design — ale nevrací se vám to v poptávkách.',
    solutionLabel: 'Řešení',
    solutionTitle: 'Jak z webu děláme systém na získávání zákazníků',
    solutionSteps: [
      { num: '01', title: 'Analýza', desc: 'Zjistíme, proč web nepřeměňuje návštěvníky na poptávky.' },
      { num: '02', title: 'Optimalizace konverzí', desc: 'Upravíme message, UX a CTA tak, aby klient věděl, co má udělat.' },
      { num: '03', title: 'SEO strategie', desc: 'Témata a obsah, které přinášejí reálné klienty z Google.' },
      { num: '04', title: 'Tracking', desc: 'Vidíte přesně, co přináší zákazníky — žádné dohady.' },
    ],
    pricingLabel: 'Ceník',
    pricingTitle: 'Vyberte úroveň růstu',
    pricingNote: 'Všechny balíčky se zaměřují na zvýšení poptávek, ne jen na návštěvnost.',
    orderBtn: 'Začít s tímto balíčkem →',
    cards: [
      { tag: 'Starter', badge: null, name: 'One-page web', price: '299 €', old: 'běžně 599 €', forWhom: 'Pro živnostníky a malé lokální firmy', features: ['Moderní design na míru', 'Mobile friendly', 'Kontaktní formulář + mapa', 'WhatsApp propojení', 'Facebook propojení', 'Základní SEO', 'GDPR ready', 'Google Business profil (BONUS)', 'Hotovo za 5 dní'], featured: false, dark: false },
      { tag: 'Growth', badge: 'Doporučeno', name: 'Prezentační web', price: '499 €', old: 'běžně 999 €', forWhom: 'Nejlepší poměr cena/výsledek pro většinu firem', features: ['Vše ze Starter +', '5 podstránek na míru', 'Galerie & reference', 'Blog — přidáváte sami', 'Pokročilé SEO + analýza klíčových slov', 'Google Analytics', 'Hotovo za 7 dní'], featured: true, dark: false },
      { tag: 'Performance', badge: 'High Impact', name: 'Internetový obchod', price: '999 €', old: 'běžně 1999 €', forWhom: 'Pro růst a škálování — prodej produktů online', features: ['Vše z Growth +', 'Do 500 produktů', 'Platební brána (karta, PayPal)', 'Automatické faktury', 'Správa objednávek', 'WhatsApp + Facebook shop', 'Hotovo za 14 dní'], featured: false, dark: true },
    ],
    featuredBadge: 'DOPORUČENO',
    reviewsLabel: 'Reference',
    reviewsTitle: 'Výsledky, které klienti dosahují',
    riskTitle: 'Bez rizika',
    riskText: 'První návrh webu dostanete do 24 hodin zdarma. Platíte jen 50 % zálohu — zbytek až po schválení hotového webu.',
    riskPoints: ['✓ Transparentní proces krok po kroku', '✓ Doporučení před realizací', '✓ Platíte až po schválení návrhu'],
    finalCtaTitle: 'Chcete zjistit, proč vám web nepřináší zákazníky?',
    finalCtaSub: 'Získejte bezplatnou analýzu webu — konkrétní kroky, ne obecné rady.',
    finalCtaBtn: 'Získat analýzu webu zdarma →',
    stickyCtaBtn: 'Chci analýzu webu →',
    formLabel: 'Objednávka',
    formTitle: 'Získejte 3 konkrétní způsoby, jak získat více zákazníků z Google',
    formSub: 'Vyplňte formulář a do 24 hodin vám pošleme první návrh webu zdarma.',
    fields: [
      { key: 'name', label: 'Jméno a příjmení *', type: 'text', placeholder: 'Jan Novák' },
      { key: 'email', label: 'Email *', type: 'email', placeholder: 'jan@firma.cz' },
      { key: 'phone', label: 'Telefon', type: 'tel', placeholder: '+420 900 000 000' },
    ],
    packageLabel: 'Balíček *',
    packagePlaceholder: '— Vyberte balíček —',
    packages: ['One-page web — 299 €', 'Prezentační web — 499 €', 'Internetový obchod — 999 €'],
    intentCards: [
      { value: 'One-page web — 299 €', intent: 'Chci jen web', sub: 'Rychlý profesionální web, který mě dostane na Google', price: '299 €', badge: null },
      { value: 'Prezentační web — 499 €', intent: 'Chci více klientů', sub: 'Web navržený na poptávky — s SEO, blogem a analýzou', price: '499 €', badge: 'Doporučeno' },
      { value: 'Internetový obchod — 999 €', intent: 'Chci maximalizovat poptávky', sub: 'Kompletní prodejní systém včetně e-shopu a trackingu', price: '999 €', badge: null },
    ],
    intentLabel: 'Čeho chcete dosáhnout? *',
    intentNote: 'Vyberte cíl — pomůže nám připravit konkrétní plán pro vás.',
    messageLabel: 'Zpráva',
    messagePlaceholder: 'Co potřebujete? Jaký je váš byznys?',
    submitBtn: 'Získat návrh zdarma →',
    submitting: 'Odesílám...',
    successTitle: 'Děkujeme!',
    successMsg: 'Vaše objednávka byla přijata. Potvrzení jsme poslali na váš email.',
    newOrder: 'Nová objednávka',
    errorMsg: '❌ Chyba. Zkuste znovu nebo nás kontaktujte přímo.',
    footerRights: '© 2025 Web Klienti · Všechna práva vyhrazena',
    faqLabel: 'FAQ',
    faqTitle: 'Časté dotazy',
    faqItems: [
      { q: 'Jak dlouho trvá vytvoření webu?', a: '5 pracovních dní pro One-page web, 7 dní pro Prezentační web, 14 dní pro E-shop.' },
      { q: 'Platím něco měsíčně?', a: 'Ne. Platíte jen jednorázově za tvorbu. Hosting a doménu si zajistíte sami — cca 20–30 € ročně.' },
      { q: 'Kdy a kolik platím?', a: 'Po potvrzení objednávky uhradíte zálohu 50 % z ceny. Zbytek platíte až po dokončení a schválení webu.' },
      { q: 'Pomůžete s texty a fotkami?', a: 'Ano. Pokud nemáte texty, pomůžeme vám je připravit. Fotky doporučujeme vlastní, ale umíme použít i stockové.' },
      { q: 'Budu vlastnit web?', a: 'Ano. Po předání je web 100% váš. Dostanete přístupy ke všemu.' },
      { q: 'Co když se mi návrh nebude líbit?', a: 'První návrh pošleme do 24 hodin. Pokud se vám nebude líbit, upravíme ho. Platíte až po schválení návrhu.' },
    ],
    guaranteeTitle: 'Bez rizika',
    guaranteeText: 'První návrh webu dostanete do 24 hodin zdarma. Platíte jen 50 % zálohu — zbytek až po schválení hotového webu. Žádné skryté poplatky.',
    guaranteeBadges: ['✓ Návrh do 24 hodin', '✓ 50 % záloha · 50 % po schválení', '✓ Web je po předání váš'],
    cookieMsg: 'Tato stránka používá cookies pro lepší zážitek a analytiku.',
    cookieAccept: 'Souhlasím',
    cookieDecline: 'Odmítnout',
    privacyLink: 'Ochrana soukromí',
    privacyTitle: 'Ochrana osobních údajů',
    privacyContent: `Provozovatel: Web Klienti, info@webklienti.com, +421 907 890 600`,
    statNote: 'Nový projekt · Každý web děláme individuálně bez šablon',
  },
  en: {
    nav: ['Pricing', 'Reviews', 'Contact'],
    navOrder: 'Order now',
    heroBadge: '🚀 Sale — 50% off until end of month',
    heroTitle: 'Get more customers from Google without paid ads',
    heroSub: "We'll turn your website into a system that generates regular inquiries and real clients.",
    heroBenefits: [
      'More inquiries from Google without increasing traffic',
      'Website optimised for conversions, not just design',
      'Clear measurement of what actually brings customers',
    ],
    heroCta: "I want an analysis of why my website isn't bringing customers",
    heroMicro: 'reply within 24h · no commitment · concrete recommendations',
    marketTag: '🌍 Slovakia · Czech Republic · Europe',
    problemLabel: 'The problem',
    problemTitle: "Why most business websites don't work",
    problemPoints: [
      'Website looks good but brings no inquiries',
      "Visitors don't understand what to do next",
      'Missing clear offer and call to action',
      'SEO is disconnected from sales',
      'No tracking of results',
    ],
    problemClose: 'Result: traffic exists, but the business is not growing.',
    agitTitle: 'Every month without optimisation = lost business',
    agitText: "If your website isn't working as a sales system, you're paying for traffic and design — but it's not coming back as inquiries.",
    solutionLabel: 'Solution',
    solutionTitle: 'How we turn a website into a customer acquisition system',
    solutionSteps: [
      { num: '01', title: 'Analysis', desc: "We find out why the website isn't converting visitors into inquiries." },
      { num: '02', title: 'Conversion optimisation', desc: 'We adjust the message, UX and CTA so the client knows what to do.' },
      { num: '03', title: 'SEO strategy', desc: 'Topics and content that bring real clients from Google.' },
      { num: '04', title: 'Tracking', desc: 'You see exactly what brings customers — no guessing.' },
    ],
    pricingLabel: 'Pricing',
    pricingTitle: 'Choose your level of growth',
    pricingNote: 'All plans focus on increasing inquiries, not just traffic.',
    orderBtn: 'Start with this plan →',
    cards: [
      { tag: 'Starter', badge: null, name: 'One-page website', price: '299 €', old: 'usually 599 €', forWhom: 'For freelancers and small local businesses', features: ['Custom modern design', 'Mobile friendly', 'Contact form + map', 'WhatsApp integration', 'Facebook integration', 'Basic SEO', 'GDPR ready', 'Google Business profile (BONUS)', 'Ready in 5 days'], featured: false, dark: false },
      { tag: 'Growth', badge: 'Recommended', name: 'Business website', price: '499 €', old: 'usually 999 €', forWhom: 'Best value for most businesses', features: ['Everything from Starter +', '5 custom subpages', 'Gallery & testimonials', 'Blog — add articles yourself', 'Advanced SEO + keyword analysis', 'Google Analytics', 'Ready in 7 days'], featured: true, dark: false },
      { tag: 'Performance', badge: 'High Impact', name: 'Online store', price: '999 €', old: 'usually 1999 €', forWhom: 'For growth and scaling — sell products online', features: ['Everything from Growth +', 'Up to 500 products', 'Payment gateway (card, PayPal)', 'Automatic invoices', 'Order management', 'WhatsApp + Facebook shop', 'Ready in 14 days'], featured: false, dark: true },
    ],
    featuredBadge: 'RECOMMENDED',
    reviewsLabel: 'Testimonials',
    reviewsTitle: 'Results clients achieve',
    riskTitle: 'Zero risk',
    riskText: 'You get your first website draft within 24 hours, for free. Pay just a 50% deposit — the rest only after you approve the finished website.',
    riskPoints: ['✓ Transparent step-by-step process', '✓ Recommendations before execution', '✓ You pay only after approving the design'],
    finalCtaTitle: "Want to find out why your website isn't bringing customers?",
    finalCtaSub: 'Get a free website analysis — concrete steps, not generic advice.',
    finalCtaBtn: 'Get free website analysis →',
    stickyCtaBtn: 'I want a website analysis →',
    formLabel: 'Order',
    formTitle: 'Get 3 specific ways to bring more customers from Google',
    formSub: "Fill out the form and we'll send you a free first draft within 24 hours.",
    fields: [
      { key: 'name', label: 'Full name *', type: 'text', placeholder: 'John Smith' },
      { key: 'email', label: 'Email *', type: 'email', placeholder: 'john@company.com' },
      { key: 'phone', label: 'Phone', type: 'tel', placeholder: '+421 900 000 000' },
    ],
    packageLabel: 'Plan *',
    packagePlaceholder: '— Select a plan —',
    packages: ['One-page website — 299 €', 'Business website — 499 €', 'Online store — 999 €'],
    intentCards: [
      { value: 'One-page website — 299 €', intent: 'I just need a website', sub: 'A fast professional site that gets me found on Google', price: '299 €', badge: null },
      { value: 'Business website — 499 €', intent: 'I want more clients', sub: 'Website built for inquiries — with SEO, blog and analytics', price: '499 €', badge: 'Recommended' },
      { value: 'Online store — 999 €', intent: 'I want to maximise inquiries', sub: 'Complete sales system including e-shop and conversion tracking', price: '999 €', badge: null },
    ],
    intentLabel: 'What do you want to achieve? *',
    intentNote: 'Select your goal — helps us prepare a specific plan for you.',
    messageLabel: 'Message',
    messagePlaceholder: 'What do you need? What is your business?',
    submitBtn: 'Get free draft →',
    submitting: 'Sending...',
    successTitle: 'Thank you!',
    successMsg: 'Your order has been received. We sent a confirmation to your email.',
    newOrder: 'New order',
    errorMsg: '❌ Error. Please try again or contact us directly.',
    footerRights: '© 2025 Web Klienti · All rights reserved',
    faqLabel: 'FAQ',
    faqTitle: 'Frequently asked questions',
    faqItems: [
      { q: 'How long does it take to build a website?', a: '5 working days for One-page, 7 days for Business website, 14 days for Online store.' },
      { q: 'Are there monthly fees?', a: 'No. You pay once for the build. Hosting and domain are separate — around €20–30/year.' },
      { q: 'When and how much do I pay?', a: 'After confirming your order, you pay a 50% deposit. The remaining 50% is due only after the website is completed and approved.' },
      { q: 'Do you help with content and photos?', a: "Yes. If you don't have texts, we'll help you prepare them. We recommend your own photos, but stock photos work too." },
      { q: 'Will I own the website?', a: 'Yes. After delivery, the website is 100% yours. You get full access to everything.' },
      { q: "What if I don't like the design?", a: "We send the first draft within 24 hours. If you don't like it, we'll revise it. You only pay after approving the design." },
    ],
    guaranteeTitle: 'Zero risk',
    guaranteeText: 'You get your first website draft within 24 hours, for free. Pay just a 50% deposit — the rest only after you approve the finished website. No hidden fees.',
    guaranteeBadges: ['✓ Draft in 24 hours', '✓ 50% deposit · 50% after approval', '✓ Website is yours after delivery'],
    cookieMsg: 'This site uses cookies for a better experience and analytics.',
    cookieAccept: 'Accept',
    cookieDecline: 'Decline',
    privacyLink: 'Privacy Policy',
    privacyTitle: 'Privacy Policy',
    privacyContent: `Controller: Web Klienti, info@webklienti.com, +421 907 890 600`,
    statNote: 'New agency · Every website built individually, no templates',
  },
};

// ─── Design tokens ───────────────────────────────────────────
const C = {
  blue: '#2563EB',
  blueHover: '#1D4ED8',
  blueShadow: '0 8px 20px rgba(37,99,235,0.25)',
  green: '#22C55E',
  orange: '#F97316',
  red: '#EF4444',
  bg: '#F9FAFB',
  white: '#FFFFFF',
  border: '#E5E7EB',
  text: '#111827',
  textSub: '#6B7280',
  dark: '#0F172A',
};

function HomePage() {
  const [lang, setLang] = useState('sk');
  const [form, setForm] = useState({ name: '', email: '', phone: '', website: '', package: '', message: '', consent: false });
  const [consentError, setConsentError] = useState(false);
  const [formStatus, setFormStatus] = useState('idle');
  const [cookieVisible, setCookieVisible] = useState(() => !localStorage.getItem('wk_cookie'));
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [navScrolled, setNavScrolled] = useState(false);

  // Navbar shadow on scroll
  useEffect(() => {
    const handler = () => setNavScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

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
        body: JSON.stringify({ name: form.name, email: form.email, phone: form.phone, website: form.website, package: form.package, message: form.message, lang }),
      });
      const data = await res.json();
      if (data.success) {
        setFormStatus('success');
        setForm({ name: '', email: '', phone: '', website: '', package: '', message: '', consent: false });
      } else { setFormStatus('error'); }
    } catch { setFormStatus('error'); }
  };

  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); };
  const acceptCookies = () => { localStorage.setItem('wk_cookie', '1'); setCookieVisible(false); };
  const declineCookies = () => { localStorage.setItem('wk_cookie', '0'); setCookieVisible(false); };
  const navIds = ['pricing', 'reviews', 'footer'];

  const seoData = {
    sk: { title: 'Tvorba webstránok, ktoré prinášajú zákazníkov | WebKlienti', description: 'Moderné webstránky od 299 €. Web hotový do 5 dní. Tvorba webov a e-shopov pre firmy na Slovensku a v Česku. Bez mesačných poplatkov.', url: 'https://webklienti.com' },
    cz: { title: 'Tvorba webů, které přinášejí zákazníky | WebKlienti', description: 'Moderní webové stránky od 299 €. Web hotový do 5 dní. Tvorba webů a e-shopů pro firmy v ČR a SR. Bez měsíčních poplatků.', url: 'https://webklienti.com' },
    en: { title: 'Websites That Bring You Customers | WebKlienti', description: 'Professional websites from 299 €. Ready in 5 days. Web design and e-commerce for businesses in Slovakia and Czech Republic. No monthly fees.', url: 'https://webklienti.com' },
  };
  const seo = seoData[lang];

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

  const langBtn = (code) => ({
    background: lang === code ? 'rgba(37,99,235,0.1)' : 'transparent',
    border: lang === code ? `1px solid ${C.blue}` : `1px solid ${C.border}`,
    color: lang === code ? C.blue : C.textSub,
    padding: '4px 10px', borderRadius: 8, fontSize: 12, fontWeight: 700,
    cursor: 'pointer', transition: 'all .15s', letterSpacing: 1,
  });

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", background: C.bg, color: C.text, minHeight: '100vh' }}>
      <Helmet>
        <html lang={lang} />
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.url} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
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
        @media (max-width: 480px) {
          .solution-grid { grid-template-columns: 1fr !important; }
        }
        .btn-primary {
          display: inline-flex; align-items: center; justify-content: center;
          height: 52px; padding: 0 24px; border-radius: 12px;
          background: ${C.blue}; color: #fff; font-size: 16px; font-weight: 600;
          border: none; cursor: pointer; transition: all .15s; text-decoration: none;
          font-family: 'Inter', sans-serif;
        }
        .btn-primary:hover { background: ${C.blueHover}; box-shadow: ${C.blueShadow}; transform: translateY(-1px); }
        .btn-primary:active { transform: translateY(0); }
        .btn-primary:disabled { background: #93C5FD; opacity: 0.6; cursor: not-allowed; transform: none; }
        .btn-secondary {
          display: inline-flex; align-items: center; justify-content: center;
          height: 52px; padding: 0 24px; border-radius: 12px;
          background: ${C.white}; color: ${C.text}; font-size: 16px; font-weight: 600;
          border: 1px solid ${C.border}; cursor: pointer; transition: all .15s;
          font-family: 'Inter', sans-serif;
        }
        .btn-secondary:hover { background: ${C.bg}; transform: translateY(-1px); }
        .btn-secondary:active { transform: translateY(0); }
        .card {
          background: ${C.white}; border: 1px solid ${C.border};
          border-radius: 16px; padding: 24px;
          box-shadow: 0 1px 2px rgba(0,0,0,0.04);
          transition: all .2s;
        }
        .card:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(0,0,0,0.08); }
        .section-label {
          font-size: 14px; font-weight: 500; color: ${C.blue};
          text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;
        }
        .faq-btn { background: none; border: none; cursor: pointer; font-family: 'Inter', sans-serif; }
        input, select, textarea { font-family: 'Inter', sans-serif; }
        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: ${C.blue} !important;
          box-shadow: 0 0 0 3px rgba(37,99,235,0.12);
        }
        input[type="checkbox"]:focus { outline: 2px solid ${C.blue}; outline-offset: 2px; }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(8px)', borderBottom: `1px solid ${C.border}`, padding: '0 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 64, boxShadow: navScrolled ? '0 4px 20px rgba(0,0,0,0.08)' : 'none', transition: 'box-shadow .2s' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src={logoImg} alt="WebKlienti logo" style={{ height: 36, width: 36, objectFit: 'contain' }} />
          <span style={{ fontWeight: 700, fontSize: 18, color: C.text, letterSpacing: -0.5 }}>Web<span style={{ color: C.blue }}>Klienti</span></span>
        </Link>
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="desktop-nav">
          {t.nav.map((label, i) => (
            <button key={i} onClick={() => scrollTo(navIds[i])} style={{ background: 'none', border: 'none', color: C.textSub, cursor: 'pointer', fontSize: 15, fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>{label}</button>
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

      {/* ── MOBILE MENU ── */}
      {menuOpen && (
        <div style={{ position: 'fixed', top: 64, left: 0, right: 0, zIndex: 99, background: C.white, padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 16, borderBottom: `1px solid ${C.border}` }}>
          {t.nav.map((label, i) => (
            <button key={i} onClick={() => scrollTo(navIds[i])} style={{ background: 'none', border: 'none', color: C.text, cursor: 'pointer', fontSize: 18, fontWeight: 600, textAlign: 'left', padding: '8px 0', fontFamily: 'Inter, sans-serif' }}>{label}</button>
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
        {/* ── 1. HERO ── */}
        <div style={{ background: C.white, borderBottom: `1px solid ${C.border}`, padding: '96px 40px 96px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            {/* promo badge */}
            <div style={{ marginBottom: 24 }}>
              <span style={{ background: 'rgba(37,99,235,0.08)', color: C.blue, border: `1px solid rgba(37,99,235,0.2)`, padding: '5px 14px', borderRadius: 100, fontSize: 13, fontWeight: 600 }}>{t.heroBadge}</span>
            </div>
            <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 64, alignItems: 'center' }}>
              {/* LEFT */}
              <div>
                <div style={{ fontSize: 12, fontWeight: 500, color: C.textSub, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>{t.marketTag}</div>
                <h1 style={{ fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 700, lineHeight: 1.14, letterSpacing: '-0.01em', color: C.text, marginBottom: 24 }}>
                  {t.heroTitle}
                </h1>
                <p style={{ fontSize: 18, color: C.textSub, lineHeight: 1.6, marginBottom: 32 }}>{t.heroSub}</p>
                {/* 3 benefits */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 40 }}>
                  {t.heroBenefits.map((b, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 16, color: C.text }}>
                      <span style={{ color: C.green, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>{b}
                    </li>
                  ))}
                </ul>
                {/* Primary CTA */}
                <button onClick={() => scrollTo('contact')} className="btn-primary" style={{ fontSize: 16, marginBottom: 16, width: '100%', maxWidth: 480 }}>
                  👉 {t.heroCta}
                </button>
                {/* Micro trust */}
                <p style={{ fontSize: 14, color: C.textSub }}>{t.heroMicro}</p>
              </div>
              {/* RIGHT — visual placeholder */}
              <div className="hero-right" style={{ background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)', borderRadius: 20, padding: 32, border: `1px solid rgba(37,99,235,0.12)` }}>
                {/* Mini dashboard mock */}
                <div style={{ background: C.white, borderRadius: 12, padding: 20, marginBottom: 16, boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
                  <div style={{ fontSize: 12, color: C.textSub, marginBottom: 8, fontWeight: 500 }}>
                    {lang === 'en' ? 'Monthly inquiries' : lang === 'cz' ? 'Měsíční poptávky' : 'Mesačné dopyty'}
                  </div>
                  <div style={{ fontSize: 36, fontWeight: 700, color: C.blue, marginBottom: 4 }}>+3×</div>
                  <div style={{ fontSize: 13, color: C.green, fontWeight: 600 }}>↑ {lang === 'en' ? 'after optimisation' : lang === 'cz' ? 'po optimalizaci' : 'po optimalizácii'}</div>
                  {/* Bar chart mock */}
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, marginTop: 16, height: 60 }}>
                    {[20, 28, 22, 35, 32, 48, 52, 44, 58, 62, 68, 80].map((h, i) => (
                      <div key={i} style={{ flex: 1, background: i >= 6 ? C.blue : '#DBEAFE', height: `${h}%`, borderRadius: '4px 4px 0 0', transition: 'all .3s' }} />
                    ))}
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {[
                    { label: lang === 'en' ? 'Avg. inquiries/mo' : lang === 'cz' ? 'Průměr dopytů/měs' : 'Priemer dopytov/mes', val: '14', color: C.blue },
                    { label: lang === 'en' ? 'Google ranking' : 'Google pozícia', val: 'TOP 3', color: C.green },
                    { label: lang === 'en' ? 'Conversion rate' : lang === 'cz' ? 'Konverzní poměr' : 'Konverzný pomer', val: '4.2%', color: C.orange },
                    { label: lang === 'en' ? 'Delivery' : lang === 'cz' ? 'Dodání' : 'Dodanie', val: lang === 'en' ? '5 days' : '5 dní', color: C.text },
                  ].map((stat, i) => (
                    <div key={i} style={{ background: C.white, borderRadius: 10, padding: '12px 14px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                      <div style={{ fontSize: 11, color: C.textSub, marginBottom: 4, fontWeight: 500 }}>{stat.label}</div>
                      <div style={{ fontSize: 20, fontWeight: 700, color: stat.color }}>{stat.val}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── 2. PROBLEM ── */}
        <div style={{ background: C.bg, padding: '96px 40px', borderBottom: `1px solid ${C.border}` }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ maxWidth: 720 }}>
              <p className="section-label">{t.problemLabel}</p>
              <h2 style={{ fontSize: 'clamp(28px, 3vw, 36px)', fontWeight: 700, lineHeight: 1.22, letterSpacing: '-0.01em', marginBottom: 48 }}>{t.problemTitle}</h2>
            </div>
            <div className="problem-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 32 }}>
              {t.problemPoints.map((pt, i) => (
                <div key={i} className="card" style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <span style={{ color: C.red, fontSize: 18, flexShrink: 0, marginTop: 1 }}>✕</span>
                  <span style={{ fontSize: 16, color: C.text, lineHeight: 1.5 }}>{pt}</span>
                </div>
              ))}
            </div>
            {/* closing */}
            <div style={{ background: C.dark, borderRadius: 16, padding: '20px 28px', display: 'inline-block' }}>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', margin: 0, fontWeight: 500 }}>
                <span style={{ color: C.red, marginRight: 8 }}>→</span>{t.problemClose}
              </p>
            </div>
          </div>
        </div>

        {/* ── 3. AGITATION STRIP ── */}
        <div style={{ background: C.dark, padding: '64px 40px' }}>
          <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 700, color: '#fff', marginBottom: 16, letterSpacing: '-0.01em' }}>
              <span style={{ color: C.orange }}>⚠ </span>{t.agitTitle}
            </h2>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{t.agitText}</p>
          </div>
        </div>

        {/* ── LOGO STRIP (Trust) ── */}
        <div style={{ background: C.white, borderBottom: `1px solid ${C.border}`, padding: '32px 40px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: 12, fontWeight: 500, color: C.textSub, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 24 }}>
              {lang === 'en' ? 'Trusted by businesses across' : lang === 'cz' ? 'Důvěřují nám firmy po celém' : 'Dôverujú nám firmy po celom'} {lang === 'en' ? 'Slovakia & Czech Republic' : lang === 'cz' ? 'Slovensku a ČR' : 'Slovensku a ČR'}
            </p>
            <div style={{ display: 'flex', gap: 48, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', opacity: 0.5 }}>
              {['Montwell', 'WebKlienti', 'Partner 3', 'Partner 4', 'Partner 5'].map((name, i) => (
                <div key={i} style={{ fontSize: 15, fontWeight: 700, color: C.textSub, letterSpacing: -0.3, filter: 'grayscale(1)' }}>
                  {i === 0 ? <a href="https://montwell.sk" target="_blank" rel="noopener noreferrer" style={{ color: C.textSub, textDecoration: 'none' }}>{name}</a> : name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── 4. SOLUTION / PROCESS ── */}
        <div style={{ background: C.white, padding: '96px 40px', borderBottom: `1px solid ${C.border}` }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <p className="section-label">{t.solutionLabel}</p>
            <h2 style={{ fontSize: 'clamp(28px, 3vw, 36px)', fontWeight: 700, lineHeight: 1.22, letterSpacing: '-0.01em', marginBottom: 48, maxWidth: 620 }}>{t.solutionTitle}</h2>
            <div className="solution-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 48 }}>
              {t.solutionSteps.map((s, i) => (
                <div key={i} className="card" style={{ position: 'relative' }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: C.blue, background: 'rgba(37,99,235,0.08)', padding: '4px 10px', borderRadius: 8, display: 'inline-block', marginBottom: 16 }}>{s.num}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 600, color: C.text, marginBottom: 8 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: C.textSub, lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              ))}
            </div>
            {/* Mid-page CTA */}
            <div style={{ textAlign: 'center' }}>
              <button onClick={() => scrollTo('contact')} className="btn-primary">
                {lang === 'en' ? 'Get my free website draft →' : lang === 'cz' ? 'Chci svůj bezplatný návrh →' : 'Chcem môj bezplatný návrh →'}
              </button>
              <p style={{ fontSize: 14, color: C.textSub, marginTop: 12 }}>
                {lang === 'en' ? 'Free · No commitment · Reply within 24h' : lang === 'cz' ? 'Zdarma · Bez závazku · Odpovíme do 24h' : 'Zdarma · Bez záväzku · Odpovieme do 24h'}
              </p>
            </div>
          </div>
        </div>

        {/* ── 5. SOCIAL PROOF / MONTWELL ── */}
        <div style={{ background: C.bg, padding: '96px 40px', borderBottom: `1px solid ${C.border}` }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <p className="section-label">{t.reviewsLabel}</p>
            <h2 style={{ fontSize: 'clamp(28px, 3vw, 36px)', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: 48 }}>{t.reviewsTitle}</h2>
            {/* Montwell case study */}
            <div className="montwell-grid card" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center', padding: 32, marginBottom: 32 }}>
              <div style={{ borderRadius: 12, overflow: 'hidden', border: `1px solid ${C.border}` }}>
                <a href="https://montwell.sk" target="_blank" rel="noopener noreferrer">
                  <img src={montwellImg} alt="Montwell webstránka" style={{ width: '100%', display: 'block' }} loading="lazy" />
                </a>
              </div>
              <div>
                <p style={{ fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', color: C.textSub, marginBottom: 8 }}>{montwell.label}</p>
                <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 24 }}>Montwell</h3>
                <div className="montwell-facts" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 24 }}>
                  {montwell.facts.map((f, i) => (
                    <div key={i} style={{ background: C.bg, borderRadius: 10, padding: '14px 16px' }}>
                      <p style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: C.textSub, marginBottom: 4 }}>{f.label}</p>
                      <p style={{ fontSize: 13, fontWeight: 600, color: C.text, lineHeight: 1.4 }}>{f.value}</p>
                    </div>
                  ))}
                </div>
                <a href="https://montwell.sk" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ textDecoration: 'none', display: 'inline-flex', height: 44, fontSize: 14 }}>{montwell.viewBtn}</a>
              </div>
            </div>
            {staticReviews.length === 0 && (
              <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 16, padding: '32px 24px', textAlign: 'center' }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>⭐</div>
                <p style={{ fontSize: 15, color: C.textSub, lineHeight: 1.7 }}>
                  {lang === 'en' ? 'First client reviews coming soon.' : lang === 'cz' ? 'První recenze klientů budou brzy.' : 'Prvé recenzie klientov čoskoro.'}
                </p>
                <p style={{ fontSize: 13, color: C.textSub, opacity: 0.6, marginTop: 4 }}>
                  {lang === 'en' ? 'We are at the beginning — every project delivered with full commitment.' : lang === 'cz' ? 'Jsme na začátku — každý projekt s plným nasazením.' : 'Sme na začiatku — každý projekt s plným nasadením.'}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* ── 6. PRICING ── */}
        <div id="pricing" style={{ background: C.white, padding: '96px 40px', borderBottom: `1px solid ${C.border}` }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <p className="section-label">{t.pricingLabel}</p>
            <h2 style={{ fontSize: 'clamp(28px, 3vw, 36px)', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: 12 }}>{t.pricingTitle}</h2>
            <p style={{ fontSize: 16, color: C.textSub, marginBottom: 48 }}>{t.pricingNote}</p>
            <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, alignItems: 'start' }}>
              {t.cards.map((card, i) => {
                const isFeatured = card.featured;
                const isDark = card.dark;
                return (
                  <div
                    key={i}
                    className={isFeatured ? 'pricing-card-featured' : ''}
                    style={{
                      background: isDark ? C.dark : C.white,
                      color: isDark ? '#f1f5f9' : C.text,
                      border: isFeatured ? `2px solid ${C.blue}` : `1px solid ${C.border}`,
                      borderRadius: 16,
                      padding: 28,
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      transform: isFeatured ? 'scale(1.05)' : 'none',
                      boxShadow: isFeatured ? `0 20px 60px rgba(37,99,235,0.15)` : isDark ? '0 4px 20px rgba(0,0,0,0.15)' : 'none',
                    }}
                  >
                    {/* Badge */}
                    {card.badge && (
                      <div style={{
                        position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
                        background: isFeatured ? C.blue : isDark ? C.orange : C.green,
                        color: '#fff', padding: '4px 16px', borderRadius: 100,
                        fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap',
                      }}>{card.badge}</div>
                    )}
                    <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', color: isFeatured ? C.blue : isDark ? C.orange : C.textSub, marginBottom: 12 }}>{card.tag}</p>
                    <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>{card.name}</h3>
                    <p style={{ fontSize: 13, color: isDark ? 'rgba(255,255,255,0.5)' : C.textSub, marginBottom: 16, lineHeight: 1.5 }}>👤 {card.forWhom}</p>
                    <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 4 }}>{card.price}</div>
                    <p style={{ fontSize: 13, textDecoration: 'line-through', color: isDark ? 'rgba(255,255,255,0.3)' : '#bbb', marginBottom: 20 }}>{card.old}</p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, flexGrow: 1, marginBottom: 24 }}>
                      {card.features.map(f => (
                        <li key={f} style={{ fontSize: 14, color: isDark ? 'rgba(255,255,255,0.7)' : '#4B5563', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                          <span style={{ color: isFeatured ? C.blue : C.green, fontWeight: 700, flexShrink: 0 }}>✓</span>{f}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => { setForm(p => ({ ...p, package: card.name + ' — ' + card.price })); scrollTo('contact'); }}
                      className={isFeatured ? 'btn-primary' : 'btn-secondary'}
                      style={{ width: '100%', ...(isDark && !isFeatured ? { background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' } : {}) }}
                    >
                      {t.orderBtn}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── 7. RISK REVERSAL ── */}
        <div style={{ background: C.bg, padding: '96px 40px', borderBottom: `1px solid ${C.border}` }}>
          <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: 40, marginBottom: 16 }}>🛡️</div>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: 16 }}>{t.riskTitle}</h2>
            <p style={{ fontSize: 18, color: C.textSub, lineHeight: 1.7, marginBottom: 32 }}>{t.riskText}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
              {t.riskPoints.map(p => (
                <div key={p} style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 100, padding: '10px 20px', fontSize: 14, fontWeight: 500, color: C.text }}>{p}</div>
              ))}
            </div>
          </div>
        </div>

        {/* ── 8. FAQ ── */}
        <div id="faq" style={{ background: C.white, padding: '96px 40px', borderBottom: `1px solid ${C.border}` }}>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <p className="section-label">{t.faqLabel}</p>
            <h2 style={{ fontSize: 'clamp(28px, 3vw, 36px)', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: 40 }}>{t.faqTitle}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {t.faqItems.map((item, i) => (
                <div key={i} style={{ background: C.bg, borderRadius: i === 0 ? '12px 12px 0 0' : i === t.faqItems.length - 1 ? '0 0 12px 12px' : 0, overflow: 'hidden', border: `1px solid ${C.border}`, borderTop: i > 0 ? 'none' : `1px solid ${C.border}` }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="faq-btn"
                    style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 24px', borderBottom: openFaq === i ? `1px solid ${C.border}` : 'none', textAlign: 'left', gap: 16 }}
                  >
                    <span style={{ fontSize: 15, fontWeight: 600, color: C.text }}>{item.q}</span>
                    <span style={{ fontSize: 20, color: C.blue, fontWeight: 700, flexShrink: 0, transition: 'transform .2s', transform: openFaq === i ? 'rotate(45deg)' : 'none', display: 'inline-block' }}>+</span>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '16px 24px 20px', fontSize: 15, color: C.textSub, lineHeight: 1.7 }}>{item.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── 9. FINAL CTA ── */}
        <div style={{ background: C.blue, padding: '96px 40px' }}>
          <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, color: '#fff', letterSpacing: '-0.01em', marginBottom: 16 }}>{t.finalCtaTitle}</h2>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.75)', marginBottom: 40, lineHeight: 1.6 }}>{t.finalCtaSub}</p>
            <button onClick={() => scrollTo('contact')} style={{ display: 'inline-flex', alignItems: 'center', height: 56, padding: '0 32px', background: '#fff', color: C.blue, border: 'none', borderRadius: 12, fontSize: 17, fontWeight: 700, cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>
              {t.finalCtaBtn}
            </button>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', marginTop: 16 }}>{t.heroMicro}</p>
          </div>
        </div>

        {/* ── 10. CONTACT FORM ── */}
        <div id="contact" style={{ background: C.bg, padding: '96px 40px' }}>
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <p className="section-label">{t.formLabel}</p>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: 12 }}>{t.formTitle}</h2>
            <p style={{ color: C.textSub, marginBottom: 40, fontSize: 16, lineHeight: 1.6 }}>{t.formSub}</p>
            {formStatus === 'success' ? (
              <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 16, padding: '52px 32px', textAlign: 'center' }}>
                <div style={{ fontSize: 48, marginBottom: 14 }}>🎉</div>
                <h3 style={{ fontSize: 26, fontWeight: 700, marginBottom: 10 }}>{t.successTitle}</h3>
                <p style={{ color: C.textSub, fontSize: 15 }}>{t.successMsg}</p>
                <button onClick={() => setFormStatus('idle')} className="btn-primary" style={{ marginTop: 28 }}>{t.newOrder}</button>
              </div>
            ) : (
              <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 16, padding: '40px 36px', display: 'flex', flexDirection: 'column', gap: 20 }}>
                {t.fields.map(f => (
                  <div key={f.key}>
                    <label htmlFor={`field-${f.key}`} style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 8, color: C.text }}>{f.label}</label>
                    <input id={`field-${f.key}`} type={f.type} placeholder={f.placeholder} value={form[f.key]} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                      style={{ width: '100%', padding: '12px 16px', border: `1.5px solid ${C.border}`, borderRadius: 10, fontSize: 15, color: C.text, background: C.white }} />
                  </div>
                ))}
                {/* Website URL field */}
                <div>
                  <label htmlFor="field-website" style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 8, color: C.text }}>
                    {lang === 'en' ? 'Website URL' : lang === 'cz' ? 'URL webu' : 'URL webu'}
                    <span style={{ fontSize: 12, color: C.textSub, fontWeight: 400, marginLeft: 6 }}>({lang === 'en' ? 'optional' : lang === 'cz' ? 'nepovinné' : 'nepovinné'})</span>
                  </label>
                  <input id="field-website" type="url" placeholder="https://vasafirma.sk" value={form.website}
                    onChange={e => setForm(p => ({ ...p, website: e.target.value }))}
                    style={{ width: '100%', padding: '12px 16px', border: `1.5px solid ${C.border}`, borderRadius: 10, fontSize: 15, color: C.text, background: C.white }} />
                </div>
                {/* ── INTENT CARDS (replaces dropdown) ── */}
                <div>
                  <p style={{ fontSize: 14, fontWeight: 600, marginBottom: 4, color: C.text }}>{t.intentLabel}</p>
                  <p style={{ fontSize: 13, color: C.textSub, marginBottom: 12 }}>{t.intentNote}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {t.intentCards.map((card) => {
                      const selected = form.package === card.value;
                      return (
                        <button
                          key={card.value}
                          type="button"
                          onClick={() => setForm(p => ({ ...p, package: card.value }))}
                          style={{
                            width: '100%', textAlign: 'left', padding: '14px 16px',
                            border: selected ? `2px solid ${C.blue}` : `1.5px solid ${C.border}`,
                            borderRadius: 12, cursor: 'pointer', fontFamily: 'Inter, sans-serif',
                            background: selected ? 'rgba(37,99,235,0.04)' : C.white,
                            transition: 'all .15s', position: 'relative',
                            boxShadow: selected ? `0 0 0 3px rgba(37,99,235,0.08)` : 'none',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                            <div>
                              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
                                <span style={{ fontSize: 15, fontWeight: 700, color: selected ? C.blue : C.text }}>{card.intent}</span>
                                {card.badge && (
                                  <span style={{ fontSize: 11, fontWeight: 700, background: C.blue, color: '#fff', padding: '2px 8px', borderRadius: 999 }}>{card.badge}</span>
                                )}
                              </div>
                              <span style={{ fontSize: 13, color: C.textSub, lineHeight: 1.4, display: 'block' }}>{card.sub}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
                              <span style={{ fontSize: 15, fontWeight: 700, color: selected ? C.blue : C.text }}>{card.price}</span>
                              <div style={{
                                width: 20, height: 20, borderRadius: '50%', flexShrink: 0,
                                border: selected ? `6px solid ${C.blue}` : `2px solid ${C.border}`,
                                background: C.white, transition: 'all .15s',
                              }} />
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <label htmlFor="field-message" style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 8, color: C.text }}>{t.messageLabel}</label>
                  <textarea id="field-message" placeholder={t.messagePlaceholder} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} rows={4}
                    style={{ width: '100%', padding: '12px 16px', border: `1.5px solid ${C.border}`, borderRadius: 10, fontSize: 15, outline: 'none', color: C.text, background: C.white, resize: 'vertical' }} />
                </div>
                {formStatus === 'error' && <p style={{ color: C.red, fontSize: 14 }} role="alert">{t.errorMsg}</p>}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <input id="field-consent" type="checkbox" checked={form.consent}
                    onChange={e => { setForm(p => ({ ...p, consent: e.target.checked })); setConsentError(false); }}
                    style={{ marginTop: 3, width: 18, height: 18, cursor: 'pointer', accentColor: C.blue, flexShrink: 0 }} />
                  <label htmlFor="field-consent" style={{ fontSize: 13, color: C.textSub, lineHeight: 1.5, cursor: 'pointer' }}>
                    {lang === 'en' ? 'I agree to the processing of personal data per the ' : lang === 'cz' ? 'Souhlasím se zpracováním osobních údajů dle ' : 'Súhlasím so spracovaním osobných údajov podľa '}
                    <Link to="/privacy" target="_blank" rel="noopener noreferrer" style={{ color: C.blue, fontSize: 13, fontWeight: 600 }}>
                      {lang === 'en' ? 'Privacy Policy' : lang === 'cz' ? 'Ochrany osobních údajů' : 'Ochrany osobných údajov'}
                    </Link>{' *'}
                  </label>
                </div>
                {consentError && <p style={{ color: C.red, fontSize: 13 }}>⚠️ {lang === 'en' ? 'Please confirm your consent.' : lang === 'cz' ? 'Potvrďte prosím souhlas.' : 'Potvrďte prosím súhlas.'}</p>}
                <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                  {[
                    '✓ ' + (lang === 'en' ? 'First draft free' : 'Návrh zdarma'),
                    '✓ ' + (lang === 'en' ? 'Reply in 24h' : lang === 'cz' ? 'Odpovíme do 24h' : 'Odpovieme do 24h'),
                    '✓ ' + (lang === 'en' ? 'No commitment' : lang === 'cz' ? 'Bez závazku' : 'Bez záväzku'),
                  ].map(b => <span key={b} style={{ fontSize: 13, color: C.textSub, fontWeight: 500 }}>{b}</span>)}
                </div>
                <button onClick={handleSubmit} disabled={formStatus === 'loading'} className="btn-primary"
                  style={{ width: '100%', opacity: formStatus === 'loading' ? 0.7 : 1, fontSize: 16 }}>
                  {formStatus === 'loading' ? t.submitting : t.submitBtn}
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* ── FLOATING BUTTONS ── */}
      <div style={{ position: 'fixed', right: 20, bottom: 20, display: 'flex', flexDirection: 'column', gap: 12, zIndex: 999 }}>
        <a href="https://wa.me/421907890600" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={{ width: 52, height: 52, background: '#25D366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 22, boxShadow: '0 4px 16px rgba(0,0,0,0.15)', textDecoration: 'none' }}><FaWhatsapp /></a>
        <a href="https://facebook.com/profile.php?id=61588797397714" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ width: 52, height: 52, background: '#1877F2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 20, boxShadow: '0 4px 16px rgba(0,0,0,0.15)', textDecoration: 'none' }}><FaFacebookF /></a>
      </div>

      {/* ── STICKY MOBILE CTA ── */}
      <div className="sticky-cta" style={{ display: 'none', position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 998, background: C.white, borderTop: `1px solid ${C.border}`, padding: '12px 16px 20px', boxShadow: '0 -4px 20px rgba(0,0,0,0.08)' }}>
        <button onClick={() => scrollTo('contact')} className="btn-primary" style={{ width: '100%', fontSize: 15 }}>
          {t.stickyCtaBtn}
        </button>
      </div>

      {/* ── FOOTER ── */}
      <footer id="footer" style={{ background: C.dark, color: 'rgba(255,255,255,0.4)', textAlign: 'center', padding: '48px 24px', fontSize: 14 }}>
        <img src={logoImg} alt="WebKlienti logo" style={{ height: 36, width: 36, objectFit: 'contain', marginBottom: 16, filter: 'brightness(0) invert(1)', opacity: 0.7 }} />
        <div className="footer-links" style={{ display: 'flex', gap: 24, justifyContent: 'center', marginBottom: 12, flexWrap: 'wrap' }}>
          <a href="mailto:info@webklienti.com" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>info@webklienti.com</a>
          <a href="tel:+421907890600" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>+421 907 890 600</a>
          <span>webklienti.com</span>
        </div>
        <p style={{ marginBottom: 8 }}>{t.footerRights}</p>
        <p style={{ fontSize: 12, opacity: 0.5, fontStyle: 'italic' }}>{t.statNote}</p>
        {/* Footer CTA strip */}
        <div style={{ marginTop: 32, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <button onClick={() => scrollTo('contact')} className="btn-primary" style={{ fontSize: 15 }}>
            👉 {lang === 'en' ? 'I want more customers from Google' : lang === 'cz' ? 'Chci více zákazníků z Google' : 'Chcem viac zákazníkov z Google'}
          </button>
        </div>
      </footer>

      {/* ── COOKIE BANNER ── */}
      {cookieVisible && (
        <div role="dialog" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9999, background: C.dark, borderTop: `1px solid rgba(255,255,255,0.08)`, padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, margin: 0, flex: 1 }}>
            🍪 {t.cookieMsg}{' '}
            <button onClick={() => setPrivacyOpen(true)} style={{ background: 'none', border: 'none', color: C.blue, cursor: 'pointer', fontSize: 14, textDecoration: 'underline', padding: 0, fontFamily: 'Inter, sans-serif' }}>{t.privacyLink}</button>
          </p>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={declineCookies} className="btn-secondary" style={{ height: 40, fontSize: 13, padding: '0 16px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.6)' }}>{t.cookieDecline}</button>
            <button onClick={acceptCookies} className="btn-primary" style={{ height: 40, fontSize: 13, padding: '0 18px' }}>{t.cookieAccept}</button>
          </div>
        </div>
      )}

      {/* ── PRIVACY MODAL ── */}
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
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  );
}
