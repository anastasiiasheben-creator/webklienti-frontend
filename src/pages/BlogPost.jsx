import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import logoImg from '../assets/logo.webp';

const posts = {
  'preco-kazda-mala-firma-potrebuje-web': {
    title: 'Prečo dnes každá malá firma potrebuje web?',
    excerpt: '87 % zákazníkov hľadá firmy online. Ak nie ste na internete, prichádzate o zákazníkov v prospech konkurencie.',
    date: '12. februára 2025',
    readTime: '4 min čítania',
    content: `
Každý deň ľudia vo vašom okolí hľadajú služby, ktoré ponúkate. Ak však nemáte web, väčšina z nich skončí u konkurencie.

Dnes zákazníci hľadajú firmy cez Google. Ak vás tam nenájdu, pre nich prakticky neexistujete. Nestačí mať len Facebook — firma bez webu často pôsobí menej dôveryhodne a prichádza o klientov ešte pred prvým kontaktom.

## Web pracuje za vás 24/7

Profesionálny web:

- prezentuje vaše služby
- buduje dôveru
- privádza nových zákazníkov
- umožňuje klientom kontaktovať vás kedykoľvek

Aj keď pracujete alebo spíte, váš web stále získava nových klientov.

## Prvý dojem rozhoduje

Ľudia si dnes firmu preverujú online ešte pred telefonátom. Moderný a rýchly web vytvára profesionálny dojem a výrazne zvyšuje šancu, že si zákazník vyberie práve vás.

Firma bez webu dnes stráca dôveru aj objednávky.

## Web nemusí byť drahý

Profesionálny firemný web dnes nemusí stáť tisíce eur. U nás začína od 299 €:

- moderný dizajn
- mobilná verzia
- rýchle dodanie do 5 dní
- bez skrytých poplatkov

Pre väčšinu firiem sa investícia vráti už pri prvom novom zákazníkovi.

## Nečakajte, kým vás konkurencia predbehne

Každý deň bez webu znamená stratených zákazníkov. Čím dlhšie čakáte, tým viac klientov získava vaša konkurencia.

Váš nový web môžete mať hotový už za 5 dní.
    `,
  },
  'ai-na-webstranke-konkurecna-vyhoda': {
    title: 'AI na vašej webstránke: konkurenčná výhoda, ktorú už používajú úspešné firmy',
    excerpt: 'AI chatboty, inteligentné vyhľadávanie a personalizovaný obsah dnes pomáhajú firmám zvyšovať konverzie, šetriť čas a zlepšovať zákaznícku podporu.',
    date: '19. mája 2026',
    readTime: '6 min čítania',
    content: `
Pamätáte si, keď zákazník čakal na odpoveď celé hodiny — niekedy dni? Alebo keď návštevník odišiel z webu len preto, že nenašiel to, čo hľadal?

Dnes už moderný web nemusí byť len „online vizitka". Vďaka umelej inteligencii sa dokáže aktívne rozprávať so zákazníkom, pomáhať mu pri rozhodovaní a automatizovať procesy, ktoré firmám denne zaberajú desiatky hodín.

A to nie je budúcnosť. To je realita dnešných úspešných webstránok.

## AI chatbot, ktorý naozaj rozumie zákazníkom

Staré chatboty fungovali ako automatická telefónna linka — zopár preddefinovaných odpovedí a nekonečné „Prepáčte, nerozumiem otázke."

Moderné AI chatboty pre web rozumejú kontextu, zámeru aj prirodzenému jazyku.

Výsledok?

- rýchlejšia zákaznícka podpora
- menej manuálnej práce
- vyššia spokojnosť zákazníkov
- dostupnosť 24/7

## Personalizovaný obsah, ktorý zvyšuje konverzie

AI dokáže analyzovať správanie používateľa a prispôsobiť obsah webu v reálnom čase.

## AI na webe už nie je luxus

Firmy, ktoré implementujú AI už dnes, zlepšujú zákaznícky servis, automatizujú opakujúce sa úlohy a získavajú výrazný náskok pred konkurenciou.
    `,
  },
  'preco-je-seo-klucove': {
    title: 'Prečo je SEO kľúčové pre úspech vášho podnikania',
    excerpt: 'Dnes už nestačí mať len peknú webovú stránku. Ak sa váš web nezobrazuje vo vyhľadávačoch, väčšina zákazníkov vás nenájde. Zistite prečo je SEO nevyhnutnosť.',
    date: '18. marca 2025',
    readTime: '3 min čítania',
    content: `
Dnes už nestačí mať len peknú webovú stránku. Ak sa váš web nezobrazuje vo vyhľadávačoch ako Google, väčšina potenciálnych zákazníkov vás jednoducho nenájde.

## SEO pomáha:

- zvýšiť viditeľnosť vašej firmy
- priviesť na web viac reálnych zákazníkov
- budovať dôveru a profesionálny imidž
- získať výhodu pred konkurenciou
- znížiť náklady na platenú reklamu

Ak chcete, aby váš web pracoval pre váš biznis 24/7 a prinášal viac objednávok, SEO je nevyhnutnosť.
    `,
  },
  'google-search-console-a-google-analytics': {
    title: 'Prečo sú Google Search Console a Google Analytics nevyhnutné pre moderný web?',
    excerpt: 'Google Search Console a Google Analytics pomáhajú firmám sledovať návštevnosť, zlepšovať SEO a robiť lepšie rozhodnutia na základe dát.',
    date: '28. júna 2025',
    readTime: '5 min čítania',
    content: `
V dnešnom digitálnom svete nestačí mať iba peknú webstránku. Potrebujete rozumieť tomu, ako sa ľudia na vašom webe správajú a ako vás nachádzajú vo vyhľadávači Google.

## Google Search Console

Pomáha sledovať výkon stránky vo výsledkoch vyhľadávania Google, analyzovať kľúčové slová a odhaliť technické problémy.

## Google Analytics

Poskytuje detailné štatistiky o návštevnosti webu a správaní používateľov.

Moderné firmy dnes rozhodujú na základe dát. Web bez analytiky funguje naslepo.
    `,
  },
  'kolko-stoji-webstranka-na-slovensku': {
    title: 'Koľko stojí webstránka na Slovensku?',
    excerpt: 'Ceny webstránok sa pohybujú od 200 € až po tisíce eur. Ako sa v tom vyznať a za čo vlastne platíte? Úprimný prehľad trhu.',
    date: '3. apríla 2025',
    readTime: '5 min čítania',
    content: `
Jedna z najčastejších otázok: "Koľko stojí webstránka?" Ceny sa líšia enormne — od 0 € až po desiatky tisíc eur.

## Možnosti a ich ceny

### 1. Zadarmo (šablóny ako Wix, Webflow free)
**Cena: 0 € — 20 €/mesiac**

Vhodné pre hobby projekty, nie pre seriózny biznis.

### 2. Profesionálny freelancer alebo malá agentúra
**Cena: 299 € — 1500 €**

Zlatá stredná cesta pre malé firmy.

**U nás:**
- One-page web od **299 €**
- Prezentačný web od **499 €**
- E-shop od **999 €**

## Záver

Pre malú firmu je optimálna investícia **299 € — 800 €** za kvalitný web, ktorý skutočne prináša zákazníkov.
    `,
  },
  'preco-web-neprinas-zakaznikov': {
    title: 'Prečo vám web neprináša zákazníkov (a ako to zmeniť)',
    excerpt: 'Váš web môže vyzerať dobre, ale ak neprináša dopyty, nie je problém v trhu — ale vo webe. Zistite 3 hlavné dôvody a ako ich opraviť.',
    date: '29. apríla 2025',
    readTime: '3 min čítania',
    content: `
Váš web môže vyzerať dobre. Ale ak neprináša dopyty, nie je problém v trhu — ale v ňom.

## 1. Strácate ľudí na mobile

Väčšina návštev prichádza z telefónu. Ak web sa pomaly načítava — zákazník odchádza do pár sekúnd.

## 2. Návštevník nevie, čo má robiť

Ak nie je hneď jasné čo ponúkate a ako vás kontaktovať — nemáte šancu na zákazku.

## 3. Nepôsobíte dôveryhodne

Zákazník porovnáva. Ak web nevyzerá profesionálne — vyberie konkurenciu.

## Čo funguje

- rýchly web
- jasná ponuka do pár sekúnd
- mobilná optimalizácia
- výrazné tlačidlo kontaktu
- dôkazy dôvery (recenzie, práce, referencie)
    `,
  },
  'preco-vas-eshop-nepredava': {
    title: 'Prečo váš e-shop nepredáva?',
    excerpt: 'Ľudia prídu, ale nekúpia. Je problém v nich, alebo vo vás? 5 otázok, ktoré vám otvoria oči o vašom e-shope.',
    date: '11. mája 2026',
    readTime: '4 min čítania',
    content: `
Ak ľudia prídu, ale nekúpia… je problém v nich, alebo vo vás?

## Rozumie váš e-shop zákazníkovi do 5 sekúnd?

Ak si zákazník nie je istý čo ponúkate — odchádza.

## Je váš e-shop dôveryhodný?

Čo vidí zákazník?
- recenzie?
- jasné informácie?
- profesionálny dojem?

## Záver

Nie je otázka, či máte e-shop. Otázka je, či e-shop pracuje pre vás… alebo proti vám.
    `,
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
            <li key={idx} style={{ fontSize: 16, color: '#444', lineHeight: 1.8 }}>
              {renderInline(item)}
            </li>
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
      result.push(<h2 key={i} style={{ fontSize: 24, fontWeight: 800, color: '#1a1a1a', margin: '40px 0 16px' }}>{l.replace('## ', '')}</h2>);
    } else if (l.startsWith('### ')) {
      flushList(i);
      result.push(<h3 key={i} style={{ fontSize: 18, fontWeight: 700, color: '#1a1a1a', margin: '28px 0 12px' }}>{l.replace('### ', '')}</h3>);
    } else if (l.startsWith('- ')) {
      listBuffer.push(l.replace('- ', ''));
    } else if (l.match(/^\d+\.\s/)) {
      listBuffer.push(l.replace(/^\d+\.\s/, ''));
    } else if (l.trim() === '') {
      flushList(i);
      result.push(<br key={i} />);
    } else {
      flushList(i);
      result.push(<p key={i} style={{ fontSize: 16, color: '#444', lineHeight: 1.8, margin: '8px 0' }}>{renderInline(l)}</p>);
    }
  });

  flushList('end');
  return result;
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts[slug];

  if (!post) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 40px', fontFamily: "'Segoe UI', sans-serif" }}>
        <h1>Článok nenájdený</h1>
        <Link to="/blog">← Späť na blog</Link>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: '#f5f2eb', minHeight: '100vh' }}>

      <Helmet>
        <title>{post.title} | WebKlienti</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://www.webklienti.com/blog/${slug}`} />
      </Helmet>

      <nav style={{ background: 'rgba(26,26,26,0.97)', padding: '0 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 64 }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src={logoImg} alt="WebKlienti logo" style={{ height: 44, width: 44, objectFit: 'contain', mixBlendMode: 'screen' }} />
          <span style={{ fontWeight: 800, fontSize: 18, color: '#f5f2eb' }}>
            Web<span style={{ color: '#ffd200' }}>Klienti</span>
          </span>
        </Link>
        <Link to="/blog" style={{ color: 'rgba(245,242,235,0.7)', textDecoration: 'none', fontSize: 14 }}>← Späť na blog</Link>
      </nav>

      <article style={{ maxWidth: 720, margin: '0 auto', padding: '80px 40px' }}>
        <div style={{ display: 'flex', gap: 16, marginBottom: 24, fontSize: 13, color: '#888' }}>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
        <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 900, letterSpacing: -1, color: '#1a1a1a', marginBottom: 40, lineHeight: 1.2 }}>
          {post.title}
        </h1>
        <div style={{ background: '#fff', borderRadius: 20, padding: '48px 40px' }}>
          {renderContent(post.content)}
        </div>

        <div style={{ background: '#1a1a1a', borderRadius: 20, padding: '48px 40px', textAlign: 'center', marginTop: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: '#f5f2eb', marginBottom: 12 }}>Potrebujete web pre vašu firmu?</h2>
          <p style={{ color: 'rgba(245,242,235,0.5)', marginBottom: 24 }}>Hotový za 5 dní od 299 €. Bez mesačných poplatkov.</p>
          <Link to="/" style={{ background: '#ffd200', color: '#1a1a1a', padding: '14px 32px', borderRadius: 100, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
            Objednať web →
          </Link>
        </div>
      </article>

    </div>
  );
}
