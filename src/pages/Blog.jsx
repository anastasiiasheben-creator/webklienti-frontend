import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import logoImg from '../assets/logo.webp';
import { newBlogPosts } from '../lib/newBlogPosts';

const C = {
  blue: '#2563EB', bg: '#F9FAFB', white: '#FFFFFF',
  border: '#E5E7EB', text: '#111827', textSub: '#6B7280', dark: '#0F172A',
};

const posts = [
  { slug: 'preco-kazda-mala-firma-potrebuje-web', title: 'PreДЌo dnes kaЕѕdГЎ malГЎ firma potrebuje web?', excerpt: '87 % zГЎkaznГ­kov hДѕadГЎ firmy na Google. Zistite, preДЌo bez webu strГЎcate zГЎkaznГ­kov v prospech konkurencie a ako lacno a rГЅchlo zГ­skaЕҐ vlastnГЅ web.', date: '12. februГЎra 2025', readTime: '8 min ДЌГ­tania' },
  { slug: 'ai-na-webstranke-konkurencna-vyhoda', title: 'AI na vaЕЎej webstrГЎnke: konkurenДЌnГЎ vГЅhoda, ktorГє uЕѕ pouЕѕГ­vajГє ГєspeЕЎnГ© firmy', excerpt: 'AI chatboty a inteligentnГ© vyhДѕadГЎvanie na webe zvyЕЎujГє poДЌet dopytov a ЕЎetria ДЌas. Zistite, ako AI funguje na webe malej firmy a ДЌo naozaj prinГЎЕЎa.', date: '19. mГЎja 2026', readTime: '8 min ДЌГ­tania' },
  { slug: 'preco-je-seo-klucove', title: 'PreДЌo je SEO kДѕГєДЌovГ© pre Гєspech vГЎЕЎho podnikania', excerpt: 'VГ¤ДЌЕЎina nГЎkupnГЅch rozhodnutГ­ sa dnes zaДЌГ­na vo vyhДѕadГЎvaДЌi Google. Ak sa vaЕЎa firma nezobrazuje medzi prvГЅmi vГЅsledkami, kaЕѕdГЅ deЕ€ prichГЎdzate o zГЎkaznГ­kov, ktorГ­ aktГ­vne hДѕadajГє vaЕЎe sluЕѕby.', date: '18. marca 2025', readTime: '6 min ДЌГ­tania' },
  { slug: 'google-search-console-a-google-analytics', title: 'Google Search Console a Google Analytics: PreДЌo sГє nevyhnutnГ© pre modernГЅ web', excerpt: 'Zistite, preДЌo sГє Google Search Console a Google Analytics nevyhnutnГ© pre ГєspeЕЎnГЅ web. NauДЌte sa sledovaЕҐ nГЎvЕЎtevnosЕҐ, SEO vГЅsledky a sprГЎvanie zГЎkaznГ­kov.', date: '28. jГєna 2025', readTime: '8 min ДЌГ­tania' },
  { slug: 'kolko-stoji-webstranka-na-slovensku', title: 'KoДѕko stojГ­ webstrГЎnka na Slovensku v roku 2026?', excerpt: 'Ceny webstrГЎnok na Slovensku sa pohybujГє od 200 в‚¬ po desiatky tisГ­c. Zistite, za ДЌo skutoДЌne platГ­te a akГє cenu mГЎ zmysel zaplatiЕҐ za vГЎЕЎ web.', date: '30. mГЎja 2026', readTime: '9 min ДЌГ­tania' },
  { slug: 'preco-web-neprinas-zakaznikov', title: 'PreДЌo vГЎm web neprinГЎЕЎa zГЎkaznГ­kov (a ako to zmeniЕҐ)', excerpt: 'VГЎЕЎ web vyzerГЎ dobre, ale telefГіn nezvonГ­? Zistite 5 najДЌastejЕЎГ­ch dГґvodov, preДЌo web neprinГЎЕЎa dopyty, a konkrГ©tne kroky, ako to zmeniЕҐ.', date: '29. aprГ­la 2025', readTime: '8 min ДЌГ­tania' },
  { slug: 'preco-vas-eshop-nepredava', title: 'PreДЌo vГЎЕЎ e-shop nepredГЎva?', excerpt: 'ДЅudia na e-shop prГ­du, ale nekГєpia? Zistite 6 najДЌastejЕЎГ­ch dГґvodov, preДЌo e-shop nepredГЎva, a konkrГ©tne kroky, ako zvГЅЕЎiЕҐ poДЌet objednГЎvok.', date: '11. mГЎja 2026', readTime: '8 min ДЌГ­tania' },
  { slug: 'tvorba-webu-pre-zivnostnika', title: 'Tvorba webu pre ЕѕivnostnГ­ka: ДЌo by mal obsahovaЕҐ ГєspeЕЎnГЅ web', excerpt: 'Zistite presne, ДЌo musГ­ obsahovaЕҐ web pre ЕѕivnostnГ­ka, aby prinГЎЕЎal zГЎkaznГ­kov z Google a premieЕ€al nГЎvЕЎtevnГ­kov na skutoДЌnГ© dopyty.', date: '22. mГЎja 2026', readTime: '9 min ДЌГ­tania' },
  { slug: 'web-pre-kadernictvo', title: 'Web pre kadernГ­ctvo: ako zГ­skaЕҐ viac rezervГЎciГ­ online', excerpt: 'ProfesionГЎlny web pre kadernГ­ctvo prinГЎЕЎa novГ© rezervГЎcie a buduje dГґveru zГЎkaznГ­kov. Zistite, ДЌo musГ­ obsahovaЕҐ a ako vyuЕѕiЕҐ lokГЎlne SEO.', date: '25. mГЎja 2026', readTime: '8 min ДЌГ­tania' },
  { slug: 'co-musi-mat-dobry-firemny-web', title: 'ДЊo musГ­ maЕҐ dobrГЅ firemnГЅ web v roku 2026', excerpt: 'Zistite, akГ© konkrГ©tne prvky musГ­ obsahovaЕҐ modernГЅ firemnГЅ web, aby naozaj zГ­skaval zГЎkaznГ­kov a zvyЕЎoval dГґveru nГЎvЕЎtevnГ­kov.', date: '27. mГЎja 2026', readTime: '9 min ДЌГ­tania' },
  { slug: 'web-za-149-eur', title: 'Web za 149 в‚¬ вЂ“ je to dobrГЎ voДѕba?', excerpt: 'OplatГ­ sa web za 149 в‚¬? Pozrite si reГЎlne vГЅhody, nevГЅhody a konkrГ©tne situГЎcie, kedy je lacnejЕЎГ­ web tou najrozumnejЕЎou voДѕbou.', date: '29. mГЎja 2026', readTime: '8 min ДЌГ­tania' },
  { slug: 'tvorba-webu-trnava', title: 'Tvorba webu Trnava вЂ” web pre firmy z Trnavy a okolia', excerpt: 'HДѕadГЎte tvorbu webu v Trnave? Zistite, ДЌo musГ­ lokГЎlny web obsahovaЕҐ, aby vГЎs TrnavДЌania naЕЎli v Google skГґr neЕѕ konkurenciu.', date: '30. mГЎja 2026', readTime: '9 min ДЌГ­tania' },
  { slug: 'wordpress-vs-wix-vs-web-na-mieru', title: 'WordPress vs Wix vs web na mieru вЂ” ДЌo si vybraЕҐ?', excerpt: 'WordPress, Wix alebo web na mieru? Porovnanie troch najДЌastejЕЎГ­ch ciest k firemnГ©mu webu вЂ” vГЅhody, nevГЅhody a kedy sa ktorГЎ oplatГ­.', date: '30. mГЎja 2026', readTime: '9 min ДЌГ­tania' },
  { slug: 'lokalne-seo-slovensko', title: 'ДЊo je to lokГЎlne SEO a preДЌo na Е€om zГЎleЕѕГ­?', excerpt: 'Chcete, aby vГЎs zГЎkaznГ­ci naЕЎli hneДЏ, ako vo vaЕЎom meste hДѕadajГє vaЕЎe sluЕѕby? Zistite, ako ovlГЎdnГєЕҐ Google Mapy a premeniЕҐ vyhДѕadГЎvania v okolГ­ na zisk.', date: '10. jГєna 2026', readTime: '7 min ДЌГ­tania' },
  { slug: 'najcastejsie-chyby-na-firemnom-webe', title: '10 najДЌastejЕЎГ­ch chГЅb na firemnГЅch webstrГЎnkach, ktorГ© vГЎs stoja zГЎkaznГ­kov', excerpt: 'MГЎte web, ale neprinГЎЕЎa zГЎkaznГ­kov? Pozrite si najДЌastejЕЎie chyby firemnГЅch webstrГЎnok, ktorГ© zniЕѕujГє poДЌet dopytov, dГґveru zГЎkaznГ­kov aj vГЅsledky online.', date: '12. jГєla 2026', iso: '2026-07-12', readTime: '10 min ДЌГ­tania' },
  { slug: 'ako-ziskat-zakaznikov-z-google-bez-reklamy', title: 'Ako zГ­skaЕҐ prvГЅch zГЎkaznГ­kov cez Google bez platenia reklamy: PraktickГЅ SEO nГЎvod pre malГ© firmy', excerpt: 'NauДЌte sa, ako zГ­skaЕҐ prvГЅch zГЎkaznГ­kov cez Google bez platenГЅch reklГЎm. PraktickГЅ SEO nГЎvod pre malГ© firmy, lokГЎlne vyhДѕadГЎvanie a rast organickej nГЎvЕЎtevnosti.', date: '16. jГєla 2026', iso: '2026-07-16', readTime: '9 min ДЌГ­tania' },
  ...newBlogPosts,
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
        <title>Blog вЂ“ Tipy o webstrГЎnkach a SEO | WebKlienti</title>
        <meta name="description" content="PraktickГ© ДЌlГЎnky o tvorbe webstrГЎnok, SEO a online marketingu pre malГ© firmy na Slovensku." />
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
        <Link to="/" style={{ color: C.textSub, textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>в†ђ SpГ¤ЕҐ na hlavnГє</Link>
      </nav>

      {/* HEADER */}
      <div style={{ background: C.white, borderBottom: `1px solid ${C.border}`, padding: '64px 40px', textAlign: 'center' }}>
        <p style={{ fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', color: C.blue, fontWeight: 500, marginBottom: 12 }}>Blog</p>
        <h1 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', color: C.text, marginBottom: 16 }}>
          Tipy a rady pre vГЎЕЎ online biznis
        </h1>
        <p style={{ color: C.textSub, fontSize: 16, maxWidth: 500, margin: '0 auto' }}>
          PraktickГ© ДЌlГЎnky o webstrГЎnkach, SEO a online marketingu pre malГ© firmy.
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
                <span>{post.date}</span><span>В·</span><span>{post.readTime}</span>
              </div>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: C.text, marginBottom: 10, lineHeight: 1.3 }}>{post.title}</h2>
              <p style={{ fontSize: 15, color: C.textSub, lineHeight: 1.7, marginBottom: 16 }}>{post.excerpt}</p>
              <span style={{ color: C.blue, fontWeight: 600, fontSize: 14 }}>ДЊГ­taЕҐ ДЌlГЎnok в†’</span>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div style={{ background: C.blue, padding: '80px 40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 32, fontWeight: 700, color: '#fff', marginBottom: 16 }}>Potrebujete web pre vaЕЎu firmu?</h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 32, fontSize: 16 }}>HotovГЅ za 5 dnГ­ od 149 в‚¬</p>
        <Link to="/" style={{ background: '#fff', color: C.blue, padding: '14px 36px', borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none', display: 'inline-block' }}>
          ObjednaЕҐ web в†’
        </Link>
      </div>

      <footer style={{ background: C.dark, color: 'rgba(255,255,255,0.4)', textAlign: 'center', padding: '32px 24px', fontSize: 13 }}>
        <p>В© {new Date().getFullYear()} Web Klienti В· VЕЎetky prГЎva vyhradenГ©</p>
      </footer>
    </div>
  );
}

