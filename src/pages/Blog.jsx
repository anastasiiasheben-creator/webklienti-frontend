import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import logoImg from '../assets/logo.webp';

const posts = [
  {
    slug: 'preco-kazda-mala-firma-potrebuje-web',
    title: 'Prečo dnes každá malá firma potrebuje web?',
    excerpt: '87 % zákazníkov hľadá firmy online. Ak nie ste na internete, prichádzate o zákazníkov v prospech konkurencie.',
    date: '12. februára 2025',
    readTime: '4 min čítania',
  },
  {
    slug: 'ai-na-webstranke-konkurecna-vyhoda',
    title: 'AI na vašej webstránke: konkurenčná výhoda, ktorú už používajú úspešné firmy',
    excerpt: 'AI chatboty, inteligentné vyhľadávanie a personalizovaný obsah dnes pomáhajú firmám zvyšovať konverzie, šetriť čas a zlepšovať zákaznícku podporu.',
    date: '19. mája 2026',
    readTime: '6 min čítania',
  },
  {
    slug: 'preco-je-seo-klucove',
    title: 'Prečo je SEO kľúčové pre úspech vášho podnikania',
    excerpt: 'Dnes už nestačí mať len peknú webovú stránku. Ak sa váš web nezobrazuje vo vyhľadávačoch, väčšina zákazníkov vás nenájde. Zistite prečo je SEO nevyhnutnosť.',
    date: '18. marca 2025',
    readTime: '3 min čítania',
  },
  {
    slug: 'google-search-console-a-google-analytics',
    title: 'Prečo sú Google Search Console a Google Analytics nevyhnutné pre moderný web?',
    excerpt: 'Google Search Console a Google Analytics pomáhajú firmám sledovať návštevnosť, zlepšovať SEO a robiť lepšie rozhodnutia na základe dát.',
    date: '28. júna 2025',
    readTime: '5 min čítania',
  },
  {
    slug: 'kolko-stoji-webstranka-na-slovensku',
    title: 'Koľko stojí webstránka na Slovensku?',
    excerpt: 'Ceny webstránok sa pohybujú od 200 € až po tisíce eur. Ako sa v tom vyznať a za čo vlastne platíte? Úprimný prehľad trhu.',
    date: '3. apríla 2025',
    readTime: '5 min čítania',
  },
  {
    slug: 'preco-web-neprinas-zakaznikov',
    title: 'Prečo vám web neprináša zákazníkov (a ako to zmeniť)',
    excerpt: 'Váš web môže vyzerať dobre, ale ak neprináša dopyty, nie je problém v trhu — ale vo webe. Zistite 3 hlavné dôvody a ako ich opraviť.',
    date: '29. apríla 2025',
    readTime: '3 min čítania',
  },
  {
    slug: 'preco-vas-eshop-nepredava',
    title: 'Prečo váš e-shop nepredáva?',
    excerpt: 'Ľudia prídu, ale nekúpia. Je problém v nich, alebo vo vás? 5 otázok, ktoré vám otvoria oči o vašom e-shope.',
    date: '11. mája 2026',
    readTime: '4 min čítania',
  },
];

export default function Blog() {
  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: '#f5f2eb', minHeight: '100vh' }}>

      <Helmet>
        <title>Blog – Tipy o webstránkach a SEO | WebKlienti</title>
        <meta name="description" content="Praktické články o tvorbe webstránok, SEO a online marketingu pre malé firmy na Slovensku." />
        <link rel="canonical" href="https://www.webklienti.com/blog" />
      </Helmet>

      {/* NAV */}
      <nav style={{ background: 'rgba(26,26,26,0.97)', padding: '0 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 64 }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src={logoImg} alt="WebKlienti logo" style={{ height: 44, width: 44, objectFit: 'contain', mixBlendMode: 'screen' }} />
          <span style={{ fontWeight: 800, fontSize: 18, color: '#f5f2eb' }}>
            Web<span style={{ color: '#ffd200' }}>Klienti</span>
          </span>
        </Link>
        <Link to="/" style={{ color: 'rgba(245,242,235,0.7)', textDecoration: 'none', fontSize: 14 }}>← Späť na hlavnú</Link>
      </nav>

      {/* HEADER */}
      <div style={{ background: '#1a1a1a', padding: '80px 40px', textAlign: 'center' }}>
        <p style={{ fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', color: '#666', marginBottom: 12 }}>Blog</p>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900, letterSpacing: -2, color: '#f5f2eb', marginBottom: 16 }}>
          Tipy a rady pre váš <span style={{ color: '#ffd200' }}>online biznis</span>
        </h1>
        <p style={{ color: 'rgba(245,242,235,0.5)', fontSize: 16, maxWidth: 500, margin: '0 auto' }}>
          Praktické články o webstránkach, SEO a online marketingu pre malé firmy.
        </p>
      </div>

      {/* POSTS */}
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '80px 40px' }}>
        {posts.map((post, i) => (
          <Link key={i} to={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
            <div style={{ background: '#fff', borderRadius: 20, padding: '40px', marginBottom: 24, transition: 'transform .2s, box-shadow .2s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div style={{ display: 'flex', gap: 16, marginBottom: 12, fontSize: 13, color: '#888' }}>
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: '#1a1a1a', marginBottom: 12, lineHeight: 1.3 }}>{post.title}</h2>
              <p style={{ fontSize: 15, color: '#555', lineHeight: 1.7, marginBottom: 20 }}>{post.excerpt}</p>
              <span style={{ color: '#1a1a1a', fontWeight: 700, fontSize: 14 }}>Čítať článok →</span>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div style={{ background: '#1a1a1a', padding: '80px 40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 32, fontWeight: 900, color: '#f5f2eb', marginBottom: 16 }}>Potrebujete web pre vašu firmu?</h2>
        <p style={{ color: 'rgba(245,242,235,0.5)', marginBottom: 32, fontSize: 16 }}>Hotový za 5 dní od 299 €</p>
        <Link to="/#contact" style={{ background: '#ffd200', color: '#1a1a1a', padding: '16px 40px', borderRadius: 100, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
          Objednať web →
        </Link>
      </div>

    </div>
  );
}
