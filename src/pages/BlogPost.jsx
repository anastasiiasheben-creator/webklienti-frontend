import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import logoImg from '../assets/logo.webp';

const C = {
  blue: '#2563EB', bg: '#F9FAFB', white: '#FFFFFF',
  border: '#E5E7EB', text: '#111827', textSub: '#6B7280', dark: '#0F172A',
};

const posts = {
  'preco-kazda-mala-firma-potrebuje-web': {
    title: 'Prečo dnes každá malá firma potrebuje web?',
    excerpt: '87 % zákazníkov hľadá firmy online. Ak nie ste na internete, prichádzate o zákazníkov v prospech konkurencie.',
    date: '12. februára 2025', readTime: '4 min čítania',
    content: `Každý deň ľudia vo vašom okolí hľadajú služby, ktoré ponúkate. Ak však nemáte web, väčšina z nich skončí u konkurencie.\n\nDnes zákazníci hľadajú firmy cez Google. Ak vás tam nenájdu, pre nich prakticky neexistujete. Nestačí mať len Facebook — firma bez webu často pôsobí menej dôveryhodne a prichádza o klientov ešte pred prvým kontaktom.\n\n## Web pracuje za vás 24/7\n\nProfesionálny web:\n\n- prezentuje vaše služby\n- buduje dôveru\n- privádza nových zákazníkov\n- umožňuje klientom kontaktovať vás kedykoľvek\n\n## Prvý dojem rozhoduje\n\nĽudia si dnes firmu preverujú online ešte pred telefonátom. Moderný a rýchly web vytvára profesionálny dojem a výrazne zvyšuje šancu, že si zákazník vyberie práve vás.\n\n## Web nemusí byť drahý\n\nProfesionálny firemný web dnes nemusí stáť tisíce eur. U nás začína od **299 €** — moderný dizajn, mobilná verzia, rýchle dodanie do 5 dní, bez skrytých poplatkov.`,
  },
  'ai-na-webstranke-konkurecna-vyhoda': {
    title: 'AI na vašej webstránke: konkurenčná výhoda, ktorú už používajú úspešné firmy',
    excerpt: 'AI chatboty, inteligentné vyhľadávanie a personalizovaný obsah dnes pomáhajú firmám zvyšovať konverzie.',
    date: '19. mája 2026', readTime: '6 min čítania',
    content: `Dnes už moderný web nemusí byť len „online vizitka". Vďaka umelej inteligencii sa dokáže aktívne rozprávať so zákazníkom, pomáhať mu pri rozhodovaní a automatizovať procesy.\n\n## AI chatbot, ktorý naozaj rozumie zákazníkom\n\nModerné AI chatboty pre web rozumejú kontextu, zámeru aj prirodzenému jazyku.\n\n- rýchlejšia zákaznícka podpora\n- menej manuálnej práce\n- vyššia spokojnosť zákazníkov\n- dostupnosť 24/7\n\n## AI na webe už nie je luxus\n\nFirmy, ktoré implementujú AI už dnes, zlepšujú zákaznícky servis, automatizujú opakujúce sa úlohy a získavajú výrazný náskok pred konkurenciou.`,
  },
  'preco-je-seo-klucove': {
    title: 'Prečo je SEO kľúčové pre úspech vášho podnikania',
    excerpt: 'Ak sa váš web nezobrazuje vo vyhľadávačoch, väčšina zákazníkov vás nenájde.',
    date: '18. marca 2025', readTime: '3 min čítania',
    content: `Dnes už nestačí mať len peknú webovú stránku. Ak sa váš web nezobrazuje vo vyhľadávačoch ako Google, väčšina potenciálnych zákazníkov vás jednoducho nenájde.\n\n## SEO pomáha:\n\n- zvýšiť viditeľnosť vašej firmy\n- priviesť na web viac reálnych zákazníkov\n- budovať dôveru a profesionálny imidž\n- získať výhodu pred konkurenciou\n- znížiť náklady na platenú reklamu`,
  },
  'google-search-console-a-google-analytics': {
    title: 'Prečo sú Google Search Console a Google Analytics nevyhnutné pre moderný web?',
    excerpt: 'Pomáhajú firmám sledovať návštevnosť, zlepšovať SEO a robiť lepšie rozhodnutia.',
    date: '28. júna 2025', readTime: '5 min čítania',
    content: `V dnešnom digitálnom svete nestačí mať iba peknú webstránku. Potrebujete rozumieť tomu, ako sa ľudia na vašom webe správajú.\n\n## Google Search Console\n\nPomáha sledovať výkon stránky vo výsledkoch vyhľadávania Google, analyzovať kľúčové slová a odhaliť technické problémy.\n\n## Google Analytics\n\nPoskytuje detailné štatistiky o návštevnosti webu a správaní používateľov.\n\nModerné firmy dnes rozhodujú na základe dát. Web bez analytiky funguje naslepo.`,
  },
  'kolko-stoji-webstranka-na-slovensku': {
    title: 'Koľko stojí webstránka na Slovensku?',
    excerpt: 'Ceny webstránok sa pohybujú od 200 € až po tisíce eur.',
    date: '3. apríla 2025', readTime: '5 min čítania',
    content: `Jedna z najčastejších otázok: "Koľko stojí webstránka?" Ceny sa líšia enormne — od 0 € až po desiatky tisíc eur.\n\n## Možnosti a ich ceny\n\n### Zadarmo (šablóny ako Wix)\nVhodné pre hobby projekty, nie pre seriózny biznis.\n\n### Profesionálny freelancer alebo malá agentúra\nCena: **299 € — 1500 €** — zlatá stredná cesta pre malé firmy.\n\nU nás:\n- One-page web od **299 €**\n- Prezentačný web od **499 €**\n- E-shop od **999 €**\n\n## Záver\n\nPre malú firmu je optimálna investícia **299 € — 800 €** za kvalitný web, ktorý skutočne prináša zákazníkov.`,
  },
  'preco-web-neprinas-zakaznikov': {
    title: 'Prečo vám web neprináša zákazníkov (a ako to zmeniť)',
    excerpt: 'Váš web môže vyzerať dobre, ale ak neprináša dopyty, nie je problém v trhu — ale vo webe.',
    date: '29. apríla 2025', readTime: '3 min čítania',
    content: `Váš web môže vyzerať dobre. Ale ak neprináša dopyty, nie je problém v trhu — ale v ňom.\n\n## 1. Strácate ľudí na mobile\n\nVäčšina návštev prichádza z telefónu. Ak web sa pomaly načítava — zákazník odchádza do pár sekúnd.\n\n## 2. Návštevník nevie, čo má robiť\n\nAk nie je hneď jasné čo ponúkate a ako vás kontaktovať — nemáte šancu na zákazku.\n\n## 3. Nepôsobíte dôveryhodne\n\nZákazník porovnáva. Ak web nevyzerá profesionálne — vyberie konkurenciu.\n\n## Čo funguje\n\n- rýchly web\n- jasná ponuka do pár sekúnd\n- mobilná optimalizácia\n- výrazné tlačidlo kontaktu\n- dôkazy dôvery (recenzie, práce, referencie)`,
  },
  'preco-vas-eshop-nepredava': {
    title: 'Prečo váš e-shop nepredáva?',
    excerpt: 'Ľudia prídu, ale nekúpia. Je problém v nich, alebo vo vás?',
    date: '11. mája 2026', readTime: '4 min čítania',
    content: `Ak ľudia prídu, ale nekúpia… je problém v nich, alebo vo vás?\n\n## Rozumie váš e-shop zákazníkovi do 5 sekúnd?\n\nAk si zákazník nie je istý čo ponúkate — odchádza.\n\n## Je váš e-shop dôveryhodný?\n\nČo vidí zákazník?\n- recenzie?\n- jasné informácie?\n- profesionálny dojem?\n\n## Záver\n\nNie je otázka, či máte e-shop. Otázka je, či e-shop pracuje pre vás… alebo proti vám.`,
  },
};

function renderInline(text) {
  return text.split(/\*\*(.*?)\*\*/g).map((part, idx) =>
    idx % 2 === 1 ? <strong key={idx}>{part}</strong> : part
  );
}

function renderContent(content) {
  const lines = content.split('\n');
  const result = [];
  let listBuffer = [];

  const flushList = (key) => {
    if (listBuffer.length > 0) {
      result.push(
        <ul key={`ul-${key}`} style={{ paddingLeft: 24, margin: '12px 0' }}>
          {listBuffer.map((item, idx) => (
            <li key={idx} style={{ fontSize: 16, color: C.textSub, lineHeight: 1.8 }}>{renderInline(item)}</li>
          ))}
        </ul>
      );
      listBuffer = [];
    }
  };

  lines.forEach((line, i) => {
    const l = line.trimStart();
    if (l.startsWith('## ')) {
      flushList(i);
      result.push(<h2 key={i} style={{ fontSize: 22, fontWeight: 700, color: C.text, margin: '36px 0 14px', letterSpacing: '-0.01em' }}>{l.replace('## ', '')}</h2>);
    } else if (l.startsWith('### ')) {
      flushList(i);
      result.push(<h3 key={i} style={{ fontSize: 17, fontWeight: 600, color: C.text, margin: '24px 0 10px' }}>{l.replace('### ', '')}</h3>);
    } else if (l.startsWith('- ')) {
      listBuffer.push(l.replace('- ', ''));
    } else if (l.trim() === '') {
      flushList(i);
    } else {
      flushList(i);
      result.push(<p key={i} style={{ fontSize: 16, color: C.textSub, lineHeight: 1.8, margin: '10px 0' }}>{renderInline(l)}</p>);
    }
  });
  flushList('end');
  return result;
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts[slug];

  if (!post) return (
    <div style={{ textAlign: 'center', padding: '100px 40px', fontFamily: "'Inter', sans-serif" }}>
      <h1 style={{ color: C.text }}>Článok nenájdený</h1>
      <Link to="/blog" style={{ color: C.blue, marginTop: 16, display: 'block' }}>← Späť na blog</Link>
    </div>
  );

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", background: C.bg, minHeight: '100vh' }}>
      <Helmet>
        <title>{post.title} | WebKlienti</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://www.webklienti.com/blog/${slug}`} />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>

      <style>{`* { box-sizing: border-box; margin: 0; padding: 0; }`}</style>

      <nav style={{ background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(8px)', borderBottom: `1px solid ${C.border}`, padding: '0 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 64, position: 'sticky', top: 0, zIndex: 100 }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src={logoImg} alt="WebKlienti logo" style={{ height: 36, width: 36, objectFit: 'contain', borderRadius: '50%' }} />
          <span style={{ fontWeight: 700, fontSize: 18, color: C.text }}>Web<span style={{ color: C.blue }}>Klienti</span></span>
        </Link>
        <Link to="/blog" style={{ color: C.textSub, textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>← Späť na blog</Link>
      </nav>

      <article style={{ maxWidth: 720, margin: '0 auto', padding: '64px 40px' }}>
        <div style={{ display: 'flex', gap: 16, marginBottom: 20, fontSize: 13, color: C.textSub }}>
          <span>{post.date}</span><span>·</span><span>{post.readTime}</span>
        </div>
        <h1 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, letterSpacing: '-0.02em', color: C.text, marginBottom: 40, lineHeight: 1.2 }}>
          {post.title}
        </h1>
        <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 16, padding: '40px' }}>
          {renderContent(post.content)}
        </div>

        <div style={{ background: C.blue, borderRadius: 16, padding: '40px', textAlign: 'center', marginTop: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 10 }}>Potrebujete web pre vašu firmu?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 24 }}>Hotový za 5 dní od 299 €. Bez mesačných poplatkov.</p>
          <Link to="/" style={{ background: '#fff', color: C.blue, padding: '12px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none', display: 'inline-block' }}>
            Objednať web →
          </Link>
        </div>
      </article>

      <footer style={{ background: C.dark, color: 'rgba(255,255,255,0.4)', textAlign: 'center', padding: '32px 24px', fontSize: 13 }}>
        <p>© 2025 Web Klienti · Všetky práva vyhradené</p>
      </footer>
    </div>
  );
}
