import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import logoImg from '../assets/logo.webp';

const C = {
  blue: '#2563EB', bg: '#F9FAFB', white: '#FFFFFF',
  border: '#E5E7EB', text: '#111827', textSub: '#6B7280', dark: '#0F172A',
};

const posts = [
  { slug: 'preco-kazda-mala-firma-potrebuje-web', title: 'Prečo dnes každá malá firma potrebuje web?', excerpt: '87 % zákazníkov hľadá firmy online. Ak nie ste na internete, prichádzate o zákazníkov v prospech konkurencie.', date: '12. februára 2025', readTime: '4 min čítania' },
  { slug: 'ai-na-webstranke-konkurecna-vyhoda', title: 'AI na vašej webstránke: konkurenčná výhoda, ktorú už používajú úspešné firmy', excerpt: 'AI chatboty, inteligentné vyhľadávanie a personalizovaný obsah dnes pomáhajú firmám zvyšovať konverzie, šetriť čas a zlepšovať zákaznícku podporu.', date: '19. mája 2026', readTime: '6 min čítania' },
  { slug: 'preco-je-seo-klucove', title: 'Prečo je SEO kľúčové pre úspech vášho podnikania', excerpt: 'Väčšina nákupných rozhodnutí sa dnes začína vo vyhľadávači Google. Ak sa vaša firma nezobrazuje medzi prvými výsledkami, každý deň prichádzate o zákazníkov, ktorí aktívne hľadajú vaše služby.', date: '18. marca 2025', readTime: '6 min čítania' },
  { slug: 'google-search-console-a-google-analytics', title: 'Prečo sú Google Search Console a Google Analytics nevyhnutné pre moderný web?', excerpt: 'Google Search Console a Google Analytics pomáhajú firmám sledovať návštevnosť, zlepšovať SEO a robiť lepšie rozhodnutia na základe dát.', date: '28. júna 2025', readTime: '5 min čítania' },
  { slug: 'kolko-stoji-webstranka-na-slovensku', title: 'Koľko stojí webstránka na Slovensku v roku 2026?', excerpt: 'Ceny webstránok sa pohybujú od 200 € až po tisíce eur. Ako sa v tom vyznať a za čo vlastne platíte? Úprimný prehľad trhu 2026.', date: '30. mája 2026', readTime: '6 min čítania' },
  { slug: 'preco-web-neprinas-zakaznikov', title: 'Prečo vám web neprináša zákazníkov (a ako to zmeniť)', excerpt: 'Váš web môže vyzerať dobre, ale ak neprináša dopyty, nie je problém v trhu — ale vo webe. Zistite 3 hlavné dôvody a ako ich opraviť.', date: '29. apríla 2025', readTime: '3 min čítania' },
  { slug: 'preco-vas-eshop-nepredava', title: 'Prečo váš e-shop nepredáva?', excerpt: 'Ľudia prídu, ale nekúpia. Je problém v nich, alebo vo vás? 5 otázok, ktoré vám otvoria oči o vašom e-shope.', date: '11. mája 2026', readTime: '4 min čítania' },
  { slug: 'tvorba-webu-pre-zivnostnika', title: 'Tvorba webu pre živnostníka: čo by mal obsahovať úspešný web', excerpt: 'Zistite, čo musí obsahovať moderný web pre živnostníka, aby získaval zákazníkov z Google a premieňal návštevníkov na dopyty.', date: '22. mája 2026', readTime: '4 min čítania' },
  { slug: 'web-pre-kadernictvo', title: 'Web pre kaderníctvo: ako získať viac rezervácií online', excerpt: 'Profesionálny web pre kaderníctvo pomáha získavať nové rezervácie a budovať dôveru zákazníkov.', date: '25. mája 2026', readTime: '4 min čítania' },
  { slug: 'co-musi-mat-dobry-firemny-web', title: 'Čo musí mať dobrý firemný web v roku 2026', excerpt: 'Zistite, aké prvky musí obsahovať moderný firemný web, aby získaval zákazníkov a zvyšoval dôveru návštevníkov.', date: '27. mája 2026', readTime: '4 min čítania' },
  { slug: 'web-za-299-eur', title: 'Web za 299 € – je to dobrá voľba?', excerpt: 'Oplatí sa web za 299 €? Pozrite si výhody, nevýhody a situácie, kedy je lacnejší web rozumnou voľbou.', date: '29. mája 2026', readTime: '4 min čítania' },
  { slug: 'tvorba-webu-trnava', title: 'Tvorba webu Trnava — web pre firmy z Trnavy a okolia', excerpt: 'Hľadáte tvorbu webu v Trnave? Profesionálny web pre lokálne firmy, ktorý vás dostane na Google a privedie zákazníkov z okolia.', date: '30. mája 2026', readTime: '4 min čítania' },
  { slug: 'wordpress-vs-wix-vs-web-na-mieru', title: 'WordPress vs Wix vs web na mieru — čo si vybrať?', excerpt: 'Porovnanie troch najčastejších spôsobov tvorby webu pre malé firmy. Výhody, nevýhody a kedy sa ktorá možnosť oplatí.', date: '30. mája 2026', readTime: '5 min čítania' },
  { slug: 'lokalne-seo-slovensko', title: 'Čo je to lokálne SEO a prečo na ňom záleží?', excerpt: 'Chcete, aby vás zákazníci našli hneď, ako vo vašom meste hľadajú vaše služby? Zistite, ako ovládnúť Google Mapy a premeniť vyhľadávania v okolí na zisk.', date: '10. júna 2026', readTime: '7 min čítania' },
  { slug: 'chyby-na-firemnych-webstrankach', title: '10 najčastejších chýb na firemných webstránkach, ktoré vás stoja zákazníkov', excerpt: 'Máte web, ale neprináša zákazníkov? Pozrite si najčastejšie chyby firemných webstránok, ktoré znižujú počet dopytov, dôveru zákazníkov aj výsledky online.', date: '12. júla 2026', iso: '2026-07-12', readTime: '10 min čítania' },

];
  
];

export default function Blog() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: posts.map((post, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://www.webklienti.com/blog/${post.slug}`,
      name: post.title,
    })),
  };

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", background: C.bg, minHeight: '100vh' }}>
      <Helmet>
        <title>Blog – Tipy o webstránkach a SEO | WebKlienti</title>
        <meta name="description" content="Praktické články o tvorbe webstránok, SEO a online marketingu pre malé firmy na Slovensku." />
        <link rel="canonical" href="https://www.webklienti.com/blog" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
      </Helmet>

      <style>{`* { box-sizing: border-box; margin: 0; padding: 0; }`}</style>

      {/* NAV */}
      <nav style={{ background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(8px)', borderBottom: `1px solid ${C.border}`, padding: '0 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 64, position: 'sticky', top: 0, zIndex: 100 }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src={logoImg} alt="WebKlienti logo" width="36" height="36" style={{ height: 36, width: 36, objectFit: 'contain', borderRadius: '50%' }} />
          <span style={{ fontWeight: 700, fontSize: 18, color: C.text }}>Web<span style={{ color: C.blue }}>Klienti</span></span>
        </Link>
        <Link to="/" style={{ color: C.textSub, textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>← Späť na hlavnú</Link>
      </nav>

      {/* HEADER */}
      <div style={{ background: C.white, borderBottom: `1px solid ${C.border}`, padding: '64px 40px', textAlign: 'center' }}>
        <p style={{ fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', color: C.blue, fontWeight: 500, marginBottom: 12 }}>Blog</p>
        <h1 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', color: C.text, marginBottom: 16 }}>
          Tipy a rady pre váš online biznis
        </h1>
        <p style={{ color: C.textSub, fontSize: 16, maxWidth: 500, margin: '0 auto' }}>
          Praktické články o webstránkach, SEO a online marketingu pre malé firmy.
        </p>
      </div>

      {/* POSTS */}
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '64px 40px' }}>
        {posts.map((post, i) => (
          <Link key={i} to={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
            <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 16, padding: '32px', marginBottom: 16, transition: 'all .2s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div style={{ display: 'flex', gap: 16, marginBottom: 10, fontSize: 13, color: C.textSub }}>
                <span>{post.date}</span><span>·</span><span>{post.readTime}</span>
              </div>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: C.text, marginBottom: 10, lineHeight: 1.3 }}>{post.title}</h2>
              <p style={{ fontSize: 15, color: C.textSub, lineHeight: 1.7, marginBottom: 16 }}>{post.excerpt}</p>
              <span style={{ color: C.blue, fontWeight: 600, fontSize: 14 }}>Čítať článok →</span>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div style={{ background: C.blue, padding: '80px 40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 32, fontWeight: 700, color: '#fff', marginBottom: 16 }}>Potrebujete web pre vašu firmu?</h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 32, fontSize: 16 }}>Hotový za 5 dní od 299 €</p>
        <Link to="/" style={{ background: '#fff', color: C.blue, padding: '14px 36px', borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none', display: 'inline-block' }}>
          Objednať web →
        </Link>
      </div>

      <footer style={{ background: C.dark, color: 'rgba(255,255,255,0.4)', textAlign: 'center', padding: '32px 24px', fontSize: 13 }}>
        <p>© {new Date().getFullYear()} Web Klienti · Všetky práva vyhradené</p>
      </footer>
    </div>
  );
}
