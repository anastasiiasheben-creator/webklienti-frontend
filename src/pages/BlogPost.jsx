import { useParams, Link } from 'react-router-dom';
import logoImg from '../assets/logo.webp';

const posts = {
  'preco-kazda-mala-firma-potrebuje-web': {
  title: 'Prečo dnes každá malá firma potrebuje web?',
  date: '11. mája 2025',
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
  'preco-je-seo-klucove': {
  title: 'Prečo je SEO kľúčové pre úspech vášho podnikania',
  date: '11. mája 2025',
  readTime: '3 min čítania',
  content: `
  Dnes už nestačí mať len peknú webovú stránku. Ak sa váš web nezobrazuje vo vyhľadávačoch ako Google, väčšina potenciálnych zákazníkov vás jednoducho nenájde. Ľudia každý deň hľadajú produkty a služby online — a firmy, ktoré sú na prvých pozíciách, získavajú najviac objednávok, telefonátov a klientov.
  
  Práve preto je SEO (optimalizácia pre vyhľadávače) jednou z najdôležitejších investícií do rastu firmy.
  
  ## SEO pomáha:
  
  - zvýšiť viditeľnosť vašej firmy
  - priviesť na web viac reálnych zákazníkov
  - budovať dôveru a profesionálny imidž
  - získať výhodu pred konkurenciou
  - znížiť náklady na platenú reklamu
  
  Na rozdiel od reklamy SEO funguje dlhodobo. Kým reklama prestane prinášať výsledky hneď po vypnutí kampane, kvalitne optimalizovaný web môže získavať nových klientov nepretržite.
  
  Mnohí podnikatelia prichádzajú každý mesiac o zákazníkov len preto, že ich konkurencia je vo vyhľadávaní vyššie. Ak váš web nie je optimalizovaný správne, zákazník si veľmi často vyberie inú firmu — aj keď ponúkate lepšie služby alebo ceny.
  
  ## Profesionálne SEO zahŕňa:
  
  - technickú optimalizáciu webu
  - zrýchlenie načítania stránky
  - kvalitný obsah
  - správnu štruktúru webu
  - lokálne SEO
  - budovanie autority a dôveryhodnosti stránky
  
  Cieľ je jednoduchý: dostať váš web vyššie vo vyhľadávaní a premeniť návštevníkov na zákazníkov.
  
  Ak chcete, aby váš web pracoval pre váš biznis 24/7 a prinášal viac objednávok, SEO je nevyhnutnosť. Čím skôr začnete, tým väčší náskok získate pred konkurenciou.
    `,
  },
  'kolko-stoji-webstranka-na-slovensku': {
    title: 'Koľko stojí webstránka na Slovensku?',
    date: '5. mája 2025',
    readTime: '5 min čítania',
    content: `
Jedna z najčastejších otázok, ktorú dostávame: "Koľko stojí webstránka?" Odpoveď nie je jednoduchá, pretože ceny sa líšia enormne — od 0 € až po desiatky tisíc eur. Poďme si to rozobrat.

## Možnosti a ich ceny

### 1. Zadarmo (šablóny ako Wix, Webflow free)
**Cena: 0 € — 20 €/mesiac**

Vyzerá lákavo, ale má háčiky:
- Vaša stránka bude na adrese firma.wix.com (nie firma.sk)
- Obmedzené možnosti SEO
- Reklamy tretích strán
- Pri zrušení predplatného prídete o web

Vhodné pre: hobby projekty, nie pre seriózny biznis.

### 2. Freelancer začiatočník
**Cena: 150 € — 400 €**

Riziko: neistá kvalita, možné problémy s termínmi, žiadna záruka podpory po odovzdaní.

### 3. Profesionálny freelancer alebo malá agentúra
**Cena: 299 € — 1500 €**

Toto je zlatá stredná cesta pre malé firmy. Dostanete kvalitný web s SEO, mobilnou verziou a podporou.

**U nás:**
- One-page web od **299 €**
- Prezentačný web od **499 €**
- E-shop od **999 €**

### 4. Veľká agentúra
**Cena: 2000 € — 20 000 €+**

Pre korporácie a veľké projekty. Malá firma tu preplatí za procesy a overhead.

## Za čo vlastne platíte?

Keď si objednáte web, platíte za:
- **Dizajn** — ako web vyzerá
- **Programovanie** — ako web funguje
- **SEO** — aby vás našiel Google
- **Texty** — obsah ktorý predáva
- **Doménu a hosting** — kde web "býva"

## Na čo si dať pozor

- Pýtajte si **referencie** — ukážky predchádzajúcich prác
- Overte **čas dodania** — profesionál dá reálny termín
- Zistite čo je **v cene** — SEO, mobilná verzia, formuláre?
- Kto bude **vlastniť web** po odovzdaní?

## Záver

Pre malú firmu je optimálna investícia **299 € — 800 €** za kvalitný web, ktorý skutočne prináša zákazníkov. Lacnejšie riešenia vás môžu vyjsť drahšie v dlhodobom horizonte.

Máte otázky o cene? Napíšte nám — radi vám poradíme bez záväzkov.
    `,
  },
  'ako-si-vybrat-webdizajnera': {
    title: 'Ako si vybrať správneho webdizajnéra? 5 otázok ktoré musíte položiť',
    date: '1. mája 2025',
    readTime: '4 min čítania',
    content: `
Vybrať správneho webdizajnéra môže byť náročné. Na trhu sú stovky ponúk — od študentov po veľké agentúry. Ako sa rozhodnúť správne a vyhnúť sa sklamaniu?

## 1. "Môžem vidieť vaše predchádzajúce práce?"

Toto je prvá a najdôležitejšia otázka. Každý seriózny webdizajnér má portfólio — ukážky webov, ktoré vytvoril.

Na čo sa pozrieť:
- Vyzerajú weby moderne a profesionálne?
- Fungujú správne na mobile?
- Sú podobné tomu, čo chcete vy?

Ak vám odpovie "ešte nemám portfólio, ale...", poďakujte a hľadajte ďalej.

## 2. "Koľko trvá vytvorenie webu?"

Reálny čas pre jednoduché weby je 5 — 14 dní. Pre zložitejšie projekty 3 — 6 týždňov.

Pozor na:
- "Urobím to za víkend" — príliš optimistické
- "Trvá to 3 mesiace" — pre jednoduchý web príliš dlho

## 3. "Čo je zahrnuté v cene?"

Mnohí dizajnéri uvádzajú nízku cenu, ale extra účtujú za:
- Mobilnú verziu
- SEO optimalizáciu
- Kontaktný formulár
- Zmeny po odovzdaní

Pýtajte sa konkrétne: Je v cene SEO? Je v cene mobilná verzia? Koľko zmien môžem urobiť?

## 4. "Kto bude vlastniť web po odovzdaní?"

Toto je kritická otázka. Niektorí dizajnéri si nechávajú prístup k webu a účtujú mesačné poplatky za "správu". Ak prestanete platiť, stratíte web.

Požiadajte o:
- Prístup k hostingu na vaše meno
- Prístup k doméne na vaše meno
- Zdrojový kód webu

## 5. "Čo sa stane, ak budem potrebovať zmeny?"

Web nie je jednorazová vec. Budete potrebovať aktualizácie, nové texty, nové fotky.

Dobrý dizajnér vám:
- Vysvetlí ako robiť základné zmeny sami
- Ponúkne cenu za budúce úpravy
- Bude dostupný aj po odovzdaní

## Záver

Správny webdizajnér je partner, nie len dodávateľ. Hľadajte niekoho, kto rozumie vášmu biznisu a chce, aby váš web skutočne fungoval.

U nás dostanete všetky odpovede na tieto otázky vopred — bez prekvapení, bez skrytých poplatkov. Web hotový za 5 dní od 299 €.
    `,
  },  
};

function renderContent(content) {
  return content.split('\n').map((line, i) => {
    if (line.startsWith('## ')) {
      return <h2 key={i} style={{ fontSize: 24, fontWeight: 800, color: '#1a1a1a', margin: '40px 0 16px' }}>{line.replace('## ', '')}</h2>;
    }
    if (line.startsWith('### ')) {
      return <h3 key={i} style={{ fontSize: 18, fontWeight: 700, color: '#1a1a1a', margin: '28px 0 12px' }}>{line.replace('### ', '')}</h3>;
    }
    if (line.startsWith('- ')) {
      return <li key={i} style={{ fontSize: 16, color: '#444', lineHeight: 1.8, marginLeft: 20 }}>{line.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '$1')}</li>;
    }
    if (line.match(/^\d+\./)) {
      return <li key={i} style={{ fontSize: 16, color: '#444', lineHeight: 1.8, marginLeft: 20 }}>{line.replace(/^\d+\.\s/, '').replace(/\*\*(.*?)\*\*/g, '$1')}</li>;
    }
    if (line.startsWith('**') && line.endsWith('**')) {
      return <p key={i} style={{ fontSize: 16, color: '#1a1a1a', fontWeight: 700, margin: '8px 0' }}>{line.replace(/\*\*/g, '')}</p>;
    }
    if (line.trim() === '') {
      return <br key={i} />;
    }
    return <p key={i} style={{ fontSize: 16, color: '#444', lineHeight: 1.8, margin: '8px 0' }} dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />;
  });
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

      {/* NAV */}
      <nav style={{ background: 'rgba(26,26,26,0.97)', padding: '0 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 64 }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src={logoImg} alt="WebKlienti logo" style={{ height: 44, width: 44, objectFit: 'contain', mixBlendMode: 'screen' }} />
          <span style={{ fontWeight: 800, fontSize: 18, color: '#f5f2eb' }}>
            Web<span style={{ color: '#ffd200' }}>Klienti</span>
          </span>
        </Link>
        <Link to="/blog" style={{ color: 'rgba(245,242,235,0.7)', textDecoration: 'none', fontSize: 14 }}>← Späť na blog</Link>
      </nav>

      {/* ARTICLE */}
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

        {/* CTA */}
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
