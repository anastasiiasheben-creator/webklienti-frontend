import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import logoImg from '../assets/logo.webp';

const C = {
  blue: '#2563EB',
  bg: '#F9FAFB',
  white: '#FFFFFF',
  border: '#E5E7EB',
  text: '#111827',
  textSub: '#4B5563',
  dark: '#0F172A',
};

const posts = {
  'preco-kazda-mala-firma-potrebuje-web': {
    title: 'Prečo dnes každá malá firma potrebuje web?',
    excerpt: '87 % zákazníkov hľadá firmy online. Ak nie ste na internete, prichádzate o zákazníkov v prospech konkurencie.',
    date: '12. februára 2025',
    iso: '2025-02-12',
    readTime: '4 min čítania',
    content: `Každý deň ľudia vo vašom okolí hľadajú služby, ktoré ponúkate. Ak však nemáte web, väčšina z nich skončí u konkurencie.

Dnes zákazníci hľadajú firmy cez Google. Ak vás tam nenájdu, pre nich prakticky neexistujete. Nestačí mať len Facebook — firma bez webu často pôsobí menej dôveryhodne a prichádza o klientov ešte pred prvým kontaktom.

## Web pracuje za vás 24/7

Profesionálny web:

- prezentuje vaše služby
- buduje dôveru
- privádza nových zákazníkov
- umožňuje klientom kontaktovať vás kedykoľvek

## Prvý dojem rozhoduje

Ľudia si dnes firmu preverujú online ešte pred telefonátom. Moderný a rýchly web vytvára profesionálny dojem a výrazne zvyšuje šancu, že si zákazník vyberie práve vás.

## Web nemusí byť drahý

Profesionálny firemný web dnes nemusí stáť tisíce eur. U nás začína od **299 €** — moderný dizajn, mobilná verzia, rýchle dodanie do 5 dní, bez skrytých poplatkov.`,
  },
  'ai-na-webstranke-konkurencna-vyhoda': {
    title: 'AI na vašej webstránke: konkurenčná výhoda, ktorú už používajú úspešné firmy',
    excerpt: 'AI chatboty, inteligentné vyhľadávanie a personalizovaný obsah dnes pomáhajú firmám zvyšovať konverzie.',
    date: '19. mája 2026',
    iso: '2026-05-19',
    readTime: '6 min čítania',
    content: `Dnes už moderný web nemusí byť len „online vizitka". Vďaka umelej inteligencii sa dokáže aktívne rozprávať so zákazníkom, pomáhať mu pri rozhodovaní a automatizovať procesy.

## AI chatbot, ktorý naozaj rozumie zákazníkom

Moderné AI chatboty pre web rozumejú kontextu, zámeru aj prirodzenému jazyku.

- rýchlejšia zákaznícka podpora
- menej manuálnej práce
- vyššia spokojnosť zákazníkov
- dostupnosť 24/7

## AI na webe už nie je luxus

Firmy, ktoré implementujú AI už dnes, zlepšujú zákaznícky servis, automatizujú opakujúce sa úlohy a získavajú výrazný náskok pred konkurenciou.`,
  },
  'preco-je-seo-klucove': {
    title: 'Prečo je SEO kľúčové pre úspech vášho podnikania',
    excerpt: 'Ak sa váš web nezobrazuje vo vyhľadávačoch, väčšina zákazníkov vás nenájde.',
    date: '18. marca 2025',
    iso: '2025-03-18',
    readTime: '6 min čítania',
    content: `Predstavte si, že vlastníte kvalitnú firmu, ponúkate spoľahlivé služby, máte profesionálny web a spokojných zákazníkov. Napriek tomu vám neprichádzajú nové dopyty v takom množstve, ako by ste očakávali. Dôvod môže byť jednoduchý – potenciálni zákazníci vás na internete nedokážu nájsť.

V súčasnosti sa väčšina nákupných rozhodnutí začína vo vyhľadávači Google. Keď človek potrebuje elektrikára, účtovníka, právnika, stavebnú firmu alebo chce kúpiť konkrétny produkt, prvé, čo urobí, je zadanie požiadavky do vyhľadávača. Ak sa vaša firma medzi výsledkami nezobrazuje, zákazník s najväčšou pravdepodobnosťou skončí u konkurencie.

Práve preto je SEO (Search Engine Optimization) jednou z najdôležitejších investícií do online marketingu. Nejde len o technické nastavenie webu či používanie správnych kľúčových slov. SEO predstavuje dlhodobú stratégiu, ktorá pomáha zvyšovať viditeľnosť firmy, získavať nových zákazníkov, budovať dôveru a zlepšovať obchodné výsledky.

## Čo je SEO?

SEO, alebo optimalizácia pre vyhľadávače, je proces zlepšovania webovej stránky tak, aby sa zobrazovala na vyšších pozíciách vo výsledkoch vyhľadávania. Cieľom je dostať web pred ľudí, ktorí aktívne hľadajú produkty alebo služby, ktoré firma ponúka.

Vyhľadávače ako Google hodnotia stovky faktorov – od kvality obsahu, cez technický stav webu, rýchlosť načítania až po spätné odkazy a používateľskú skúsenosť. Výsledkom je poradie stránok, ktoré najlepšie zodpovedajú danej otázke používateľa.

Keď používateľ zadá do Google napríklad výraz „rekonštrukcia bytov Bratislava" alebo „účtovník pre živnostníkov", vyhľadávač zobrazí stránky, ktoré považuje za najrelevantnejšie. Firmy na prvých pozíciách získavajú najväčšiu časť návštevnosti, zatiaľ čo weby na druhej či tretej strane zostávajú často nepovšimnuté.

Jednoducho povedané, SEO zabezpečuje, aby sa vaša firma objavila presne v momente, keď ju zákazník potrebuje.

## Zvýšenie viditeľnosti vašej firmy

Aj ten najlepší produkt alebo služba má obmedzený potenciál, ak o nich nikto nevie. Internet dnes predstavuje najväčší zdroj informácií a zákazníci sa pri rozhodovaní spoliehajú predovšetkým na výsledky vyhľadávania.

Ak sa vaša firma pravidelne objavuje medzi prvými výsledkami Google, získavate obrovskú výhodu. Nielenže vás vidí viac ľudí, ale zároveň sa vaša značka dostáva do povedomia potenciálnych zákazníkov.

Predstavte si dve stavebné firmy. Prvá sa zobrazuje na prvej strane výsledkov pri vyhľadávaní „rekonštrukcia domu Trnava". Druhá sa nachádza na štvrtej strane. Ktorá z nich bude pravdepodobne dostávať viac telefonátov a dopytov?

Odpoveď je zrejmá.

Zároveň platí jednoduché pravidlo: prvé tri výsledky vo vyhľadávaní získavajú väčšinu všetkých kliknutí, zatiaľ čo zvyšok stránky už len zlomok. Viditeľnosť vo vyhľadávačoch je preto priamo prepojená s obchodnými výsledkami.

## SEO privádza na web reálnych zákazníkov

Jednou z najväčších výhod SEO je kvalita návštevnosti. Na rozdiel od mnohých foriem reklamy neoslovujete ľudí, ktorí o vaše služby nemajú záujem. Na web prichádzajú používatelia, ktorí už hľadajú konkrétne riešenie.

Ak niekto zadá do Google výraz „autoservis Bratislava", „svadobný fotograf Trnava" alebo „účtovnícke služby pre s.r.o.", ide o človeka s konkrétnou potrebou a často aj pripraveným rozpočtom.

Práve preto patrí organická návštevnosť medzi najhodnotnejšie zdroje zákazníkov. Takíto návštevníci majú výrazne vyššiu mieru konverzie než používatelia z bannerovej reklamy či sociálnych sietí.

SEO teda neprináša len viac kliknutí. Prináša ľudí, ktorí aktívne hľadajú vaše riešenie.

## Budovanie dôvery a profesionálneho imidžu

Dôvera je základom každého úspešného podnikania. Ľudia chcú nakupovať od spoločností, ktoré pôsobia stabilne, profesionálne a overene.

Pozície vo vyhľadávači majú na vnímanie značky silný psychologický efekt. Používatelia prirodzene vnímajú firmy na prvých miestach ako lídrov vo svojom odbore – aj keď si to neuvedomujú vedome.

Ak sa váš web opakovane zobrazuje pri rôznych relevantných vyhľadávaniach, vzniká efekt „digitálnej autority". Zákazník vás začne vnímať ako firmu, ktorá v odvetví dominuje.

SEO zároveň podporuje obsahový marketing. Odborné články, návody, odpovede na otázky a prípadové štúdie zvyšujú vašu dôveryhodnosť a menia web z jednoduchej prezentácie na zdroj odborných informácií.

## Konkurenčná výhoda, ktorá rozhoduje

Online prostredie je čoraz konkurenčnejšie. Vo väčšine odvetví už nestačí mať dobrú službu – treba byť aj viditeľný.

Ak konkurencia investuje do SEO a vy nie, rozdiel sa postupne prehlbuje. Oni získavajú návštevnosť, dopyty a zákazníkov, zatiaľ čo vy zostávate mimo ich zorného poľa.

Výhodou SEO je však to, že neuprednostňuje veľkosť firmy, ale kvalitu webu. To znamená, že aj menšia lokálna firma môže predbehnúť veľkého hráča, ak má lepšie optimalizovaný obsah, technicky kvalitný web a relevantné stránky.

V lokálnom vyhľadávaní to platí ešte viac – rozhoduje presnosť, relevantnosť a dôvera, nie rozpočet.

## Nižšie náklady na platenú reklamu

Platená reklama prináša okamžité výsledky, ale len krátkodobo. V momente, keď prestanete platiť, návštevnosť zmizne.

SEO funguje ako dlhodobý majetok. Dobre optimalizovaný článok alebo podstránka môže prinášať návštevnosť roky bez ďalších nákladov.

Napríklad blogový článok, ktorý sa dostane na popredné pozície, môže mesačne generovať stabilný prísun zákazníkov bez dodatočných výdavkov.

To však neznamená, že SEO nahrádza reklamu. Najsilnejší výsledok vzniká kombináciou oboch prístupov – reklama prináša rýchlosť, SEO stabilitu.

## SEO je investícia, nie náklad

SEO je proces, ktorý sa neprejaví zo dňa na deň. Jeho sila spočíva v kumulatívnom efekte.

Každý nový článok, každá optimalizovaná stránka a každý kvalitný spätný odkaz zvyšuje autoritu webu. Čím dlhšie sa SEO robí, tým silnejšie výsledky prináša.

Predstavte si SEO ako budovanie digitálnej nehnuteľnosti na najfrekventovanejšej ulici internetu. Na začiatku je to prázdny priestor, ale postupne sa mení na stabilný zdroj zákazníkov.

Firmy, ktoré SEO robia systematicky, získavajú dlhodobú výhodu a stabilný prísun dopytov aj v čase, keď znižujú marketingové výdavky.

## Budúcnosť patrí firmám, ktoré sú viditeľné

Zákazníci sa budú aj naďalej rozhodovať online. Rozdiel bude len v tom, ktoré firmy sa im zobrazia ako prvé.

Ak nie ste viditeľní vo vyhľadávačoch, každý deň prichádzate o potenciálnych zákazníkov, ktorí aktívne hľadajú vaše služby.

Naopak, firmy s kvalitným SEO budujú stabilnú online prítomnosť, získavajú dôveru a posilňujú svoju pozíciu na trhu bez neustáleho zvyšovania reklamných nákladov.

## Záver

Mať webovú stránku už nestačí. Rozhodujúce je, či vás zákazníci dokážu nájsť presne v momente, keď vás potrebujú.

SEO pomáha zvýšiť viditeľnosť firmy, priviesť relevantných zákazníkov, budovať dôveru, získať konkurenčnú výhodu a znížiť závislosť od platenej reklamy. V konečnom dôsledku ide o jeden z najefektívnejších spôsobov, ako dlhodobo rásť v online prostredí.

Firmy, ktoré SEO zanedbajú, zostávajú neviditeľné. Firmy, ktoré doň investujú, si budujú stabilnú a dlhodobú výhodu.

**Chcete vedieť, prečo sa váš web nezobrazuje na Google tak, ako by mal? SEO analýza vám ukáže presné kroky, ako získať viac návštevníkov a zákazníkov.**`,
  },
  'google-search-console-a-google-analytics': {
    title: 'Prečo sú Google Search Console a Google Analytics nevyhnutné pre moderný web?',
    excerpt: 'Pomáhajú firmám sledovať návštevnosť, zlepšovať SEO a robiť lepšie rozhodnutia.',
    date: '28. júna 2025',
    iso: '2025-06-28',
    readTime: '5 min čítania',
    content: `V dnešnom digitálnom svete nestačí mať iba peknú webstránku. Potrebujete rozumieť tomu, ako sa ľudia na vašom webe správajú.

## Google Search Console

Pomáha sledovať výkon stránky vo výsledkoch vyhľadávania Google, analyzovať kľúčové slová a odhaliť technické problémy.

## Google Analytics

Poskytuje detailné štatistiky o návštevnosti webu a správaní používateľov.

Moderné firmy dnes rozhodujú na základe dát. Web bez analytiky funguje naslepo.`,
  },
  'kolko-stoji-webstranka-na-slovensku': {
    title: 'Koľko stojí webstránka na Slovensku v roku 2026?',
    excerpt: 'Ceny webstránok sa pohybujú od 200 € až po tisíce eur.',
    date: '30. mája 2026',
    iso: '2026-05-30',
    readTime: '6 min čítania',
    content: `Jedna z najčastejších otázok slovenských podnikateľov: "Koľko stojí webstránka?" Ceny sa líšia enormne — od 200 € po desiatky tisíc eur. Poďme si to v roku 2026 rozmeniť na drobné.

## Možnosti a ich ceny v roku 2026

### Lacný web pre živnostníka (200 € – 600 €)
Jednoduchý one-page alebo malý prezentačný web. Ideálny pre začínajúce firmy a lokálne služby, ktoré potrebujú rýchlo a profesionálne pôsobiť online.

### Profesionálny firemný web (600 € – 1500 €)
Viac podstránok, dizajn na mieru, pokročilé SEO. Zlatá stredná cesta pre väčšinu firiem.

### E-shop a riešenia na mieru (od 999 €)
Internetový obchod alebo web s individuálnymi funkciami.

## Prečo je rozptyl taký veľký?

Rozdiel nie je v počte podstránok, ale v tom, čo je v cene: dizajn, SEO, rýchlosť, mobilná verzia, podpora. Lacný web, ktorý neprináša zákazníkov, je v skutočnosti ten najdrahší — platíte zaň aj stratenými príležitosťami.

## Neplatí, že drahšie = lepšie

Niektoré agentúry pýtajú 2000 € a viac za bežný firemný web, pričom väčšinu ceny tvorí ich réžia. Vďaka moderným nástrojom dnes vznikne profesionálny web rýchlejšie a lacnejšie než pred pár rokmi — bez kompromisov v kvalite.

## Záver

Pre malú firmu či živnostníka je optimálna investícia okolo **299 € – 800 €** za kvalitný web, ktorý je rýchly, mobilný a optimalizovaný na získavanie zákazníkov.`,
  },
  'preco-web-neprinas-zakaznikov': {
    title: 'Prečo vám web neprináša zákazníkov (a ako to zmeniť)',
    excerpt: 'Váš web môže vyzerať dobre, ale ak neprináša dopyty, nie je problém v trhu — ale vo webe.',
    date: '29. apríla 2025',
    iso: '2025-04-29',
    readTime: '3 min čítania',
    content: `Váš web môže vyzerať dobre. Ale ak neprináša dopyty, nie je problém v trhu — ale v ňom.

## 1. Strácate ľudí na mobile

Väčšina návštev prichádza z telefónu. Ak sa web pomaly načítava — zákazník odchádza do pár sekúnd.

## 2. Návštevník nevie, čo má robiť

Ak nie je hneď jasné čo ponúkate a ako vás kontaktovať — nemáte šancu na zákazku.

## 3. Nepôsobíte dôveryhodne

Zákazník porovnáva. Ak web nevyzerá profesionálne — vyberie konkurenciu.

## Čo funguje

- rýchly web
- jasná ponuka do pár sekúnd
- mobilná optimalizácia
- výrazné tlačidlo kontaktu
- dôkazy dôvery (recenzie, práce, referencie)`,
  },
  'preco-vas-eshop-nepredava': {
    title: 'Prečo váš e-shop nepredáva?',
    excerpt: 'Ľudia prídu, ale nekúpia. Je problém v nich, alebo vo vás?',
    date: '11. mája 2026',
    iso: '2026-05-11',
    readTime: '4 min čítania',
    content: `Ak ľudia prídu, ale nekúpia… je problém v nich, alebo vo vás?

## Rozumie váš e-shop zákazníkovi do 5 sekúnd?

Ak si zákazník nie je istý čo ponúkate — odchádza.

## Je váš e-shop dôveryhodný?

Čo vidí zákazník?
- recenzie?
- jasné informácie?
- profesionálny dojem?

## Záver

Nie je otázka, či máte e-shop. Otázka je, či e-shop pracuje pre vás… alebo proti vám.`,
  },
  'tvorba-webu-pre-zivnostnika': {
    title: 'Tvorba webu pre živnostníka: čo by mal obsahovať úspešný web',
    excerpt: 'Zistite, čo musí obsahovať moderný web pre živnostníka, aby získaval zákazníkov z Google a premieňal návštevníkov na dopyty.',
    date: '22. mája 2026',
    iso: '2026-05-22',
    readTime: '4 min čítania',
    content: `Mnohí živnostníci stále fungujú bez webovej stránky alebo používajú zastaraný web, ktorý neprináša žiadne výsledky. V roku 2026 je profesionálny web jedným z najdôležitejších nástrojov na získavanie nových zákazníkov.

## Jasná ponuka služieb

Prvá vec, ktorú by mal web obsahovať, je jasná ponuka služieb. Návštevník musí do niekoľkých sekúnd pochopiť, čo robíte a pre koho.

## Budovanie dôveryhodnosti

Druhým prvkom je dôveryhodnosť. Sem patria:

- referencie klientov
- fotografie realizácií
- recenzie
- kontaktné údaje

## SEO optimalizácia

Tretím faktorom je SEO. Ak vás ľudia nenájdu v Google, web nebude generovať dopyty. Preto je potrebné optimalizovať stránky na relevantné kľúčové slová.

## Rýchlosť načítania

Veľký význam má aj rýchlosť načítania. Pomalý web znižuje konverzie a negatívne vplýva na pozície vo vyhľadávači.

## Jasné CTA prvky

Nezabudnite na jasné výzvy k akcii:

- Zavolajte nám
- Požiadajte o cenovú ponuku
- Získajte bezplatnú konzultáciu

Mnoho živnostníkov zistí, že jednoduchý a dobre nastavený web dokáže nahradiť časť platených reklám. Ak hľadáte jednoduché riešenie za fixnú cenu, pozrite si náš [web za 299 €](/web-299).

## Záver

Web pre živnostníka nemusí byť komplikovaný. Musí však jasne komunikovať hodnotu, budovať dôveru a privádzať relevantných návštevníkov z Googlu.`,
  },
  'web-pre-kadernictvo': {
    title: 'Web pre kaderníctvo: ako získať viac rezervácií online',
    excerpt: 'Profesionálny web pre kaderníctvo pomáha získavať nové rezervácie a budovať dôveru zákazníkov. Zistite, čo by mal obsahovať.',
    date: '25. mája 2026',
    iso: '2026-05-25',
    readTime: '4 min čítania',
    content: `Kaderníctvo dnes nesúťaží iba kvalitou služieb. Zákazníci si často vyberajú podľa toho, čo nájdu na internete.

## Čo by mal web pre kaderníctvo obsahovať

Moderný web pre kaderníctvo by mal obsahovať:

- galériu prác
- cenník
- kontakty
- rezervačný formulár
- recenzie klientov

Najdôležitejšou časťou je prezentácia výsledkov. Ľudia chcú vidieť reálne premeny a ukážky práce.

## Lokálne SEO je kľúčové

Veľký význam má lokálne SEO. Ak niekto hľadá „kaderníctvo Trnava" alebo „dámske kaderníctvo Bratislava", váš web by sa mal zobrazovať vo výsledkoch vyhľadávania.

## Praktické tipy

- Pridajte fotografie pred a po.
- Uveďte ceny služieb.
- Vytvorte stránku pre každú službu.
- Zbierajte recenzie od klientov.
- Prepojte web s Google Business Profile.

Mnoho kaderníctiev stále funguje iba cez sociálne siete. To však znamená závislosť od algoritmov. Web je aktívum, ktoré vlastníte vy.

Ak chcete rýchly štart, pozrite si naše riešenie [web za 299 €](/web-299).

## Záver

Dobrý web pre kaderníctvo dokáže prinášať rezervácie aj mimo sociálnych sietí a vytvárať stabilný zdroj nových zákazníkov.`,
  },
  'co-musi-mat-dobry-firemny-web': {
    title: 'Čo musí mať dobrý firemný web v roku 2026',
    excerpt: 'Zistite, aké prvky musí obsahovať moderný firemný web, aby získaval zákazníkov a zvyšoval dôveru návštevníkov.',
    date: '27. mája 2026',
    iso: '2026-05-27',
    readTime: '4 min čítania',
    content: `Firemný web už nie je len online vizitka. Je to obchodný nástroj, ktorý má generovať dopyty a podporovať predaj.

## Základné prvky firemného webu

Každý kvalitný firemný web by mal obsahovať:

- jasnú hlavnú ponuku
- referencie
- kontaktné údaje
- responzívny dizajn
- rýchle načítanie
- SEO optimalizáciu

Najväčšou chybou je sústrediť sa iba na dizajn. Pekný web bez návštevnosti a konverzií neprináša firme žiadnu hodnotu.

## Štruktúra obsahu

Dôležitá je aj štruktúra obsahu. Návštevník by mal okamžite nájsť odpovede na otázky:

- Čo firma robí?
- Pre koho?
- Prečo si ju vybrať?
- Ako ju kontaktovať?

## Prípadové štúdie a blog

Silným prvkom sú prípadové štúdie. Reálne výsledky budujú dôveru výrazne viac ako všeobecné marketingové tvrdenia.

Nezabudnite ani na blog. Pravidelný obsah pomáha získavať organickú návštevnosť z Google.

Ak chcete jednoduchý firemný web za pevnú cenu, pozrite si náš [web za 299 €](/web-299).

## Záver

Úspešný firemný web kombinuje kvalitný obsah, dôveru, SEO a jasné výzvy k akcii. Len tak dokáže generovať nové obchodné príležitosti.`,
  },
  'web-za-299-eur': {
    title: 'Web za 299 € – je to dobrá voľba?',
    excerpt: 'Oplatí sa web za 299 €? Pozrite si výhody, nevýhody a situácie, kedy je lacnejší web rozumnou voľbou.',
    date: '29. mája 2026',
    iso: '2026-05-29',
    readTime: '4 min čítania',
    content: `Jednou z najčastejších otázok malých podnikateľov je, či má zmysel investovať do webu za 299 €. Odpoveď závisí od cieľa projektu.

Ak začínate podnikať a potrebujete rýchlo získať online prezentáciu, môže ísť o veľmi rozumné riešenie. Získate základný web, na ktorom zákazníci nájdu informácie o vašich službách a kontaktné údaje.

## Výhody

- nízka vstupná investícia
- rýchla realizácia
- jednoduchá správa
- profesionálnejší dojem oproti absencii webu

## Nevýhody

- obmedzené možnosti rozšírenia
- menej individuálny dizajn
- menej pokročilé funkcie

## Lepšia stratégia pre malé firmy

Mnohé firmy robia chybu, že investujú tisíce eur do webu ešte predtým, než majú overený dopyt po svojich službách. Pre menšie firmy býva často lepšou stratégiou:

- spustiť jednoduchý web
- získať prvých klientov
- zbierať recenzie
- následne investovať do rozšírenia

Najdôležitejšie nie je, koľko web stojí, ale či prináša výsledky. Ak chcete vidieť príklad riešenia v tejto cenovej kategórii, pozrite si náš [web za 299 €](/web-299).

## Záver

Web za 299 € môže byť výborným štartom pre živnostníkov a malé firmy. Kľúčové je, aby bol správne nastavený na získavanie dopytov a budovanie dôvery.`,
  },
  'tvorba-webu-trnava': {
    title: 'Tvorba webu Trnava — web pre firmy z Trnavy a okolia',
    excerpt: 'Hľadáte tvorbu webu v Trnave? Profesionálny web pre lokálne firmy, ktorý vás dostane na Google.',
    date: '30. mája 2026',
    iso: '2026-05-30',
    readTime: '4 min čítania',
    content: `Ste firma alebo živnostník z Trnavy a hľadáte niekoho, kto vám vytvorí web? Lokálny web má jednu veľkú výhodu — zákazníci z okolia vás nájdu presne vtedy, keď vašu službu potrebujú.

## Prečo je lokálny web pre Trnavu dôležitý

Keď niekto v Trnave hľadá "kaderníctvo Trnava" alebo "autoservis Trnava", Google uprednostňuje firmy s lokálnym signálom — webom s adresou, Google Business profilom a obsahom viazaným na mesto. Ak ho nemáte, prichádzate o zákazníkov z vlastného okolia.

## Čo by mal lokálny web obsahovať

- jasnú adresu a kontakt na firmu
- prepojenie s Google Business Profile
- mapu s vašou prevádzkou
- obsah, ktorý spomína Trnavu a okolie
- rýchle načítanie a mobilnú verziu

## Lokálne SEO je vaša výhoda

Na rozdiel od celoslovenských fráz je konkurencia na lokálne výrazy oveľa nižšia. Web pre firmu z Trnavy sa tak vie dostať na popredné miesta v Google rýchlejšie a lacnejšie než pri všeobecných kľúčových slovách.

## Záver

Sme z Trnavy a tvoríme weby pre lokálne firmy aj klientov po celom Slovensku.`,
  },
  'wordpress-vs-wix-vs-web-na-mieru': {
    title: 'WordPress vs Wix vs web na mieru — čo si vybrať?',
    excerpt: 'Porovnanie troch najčastejších spôsobov tvorby webu pre malé firmy. Výhody, nevýhody a kedy sa ktorá možnosť oplatí.',
    date: '30. mája 2026',
    iso: '2026-05-30',
    readTime: '5 min čítania',
    content: `Keď sa rozhodnete pre nový web, narazíte na tri hlavné cesty: WordPress, Wix alebo web na mieru. Každá má svoje pre a proti — poďme si ich porovnať.

## WordPress

Najrozšírenejší systém na svete. Flexibilný, s množstvom rozšírení.

- veľká flexibilita a rozšíriteľnosť
- vyžaduje údržbu a aktualizácie
- pri zlej konfigurácii býva pomalý

## Wix

Jednoduchý nástroj typu "potiahni a pusť".

- rýchly štart bez technických znalostí
- obmedzené možnosti úprav a SEO
- mesačné poplatky, web nie je úplne váš

## Web na mieru

Web postavený presne pre vaše potreby.

- maximálna rýchlosť a kontrola
- optimalizovaný na SEO a konverzie
- bez mesačných poplatkov za platformu

## Čo si vybrať?

Pre malú firmu, ktorá chce rýchly, profesionálny web bez mesačných poplatkov a s dobrým SEO, býva najlepšou voľbou web na mieru. Wix sa hodí na rýchly osobný projekt, WordPress pre tých, čo chcú do webu sami zasahovať a nevadí im údržba.

## Záver

U nás dostanete web na mieru bez mesačných poplatkov, optimalizovaný na Google.`,
  },
  'lokalne-seo-slovensko': {
    title: 'Čo je to lokálne SEO a prečo na ňom záleží?',
    excerpt: 'Chcete, aby vás zákazníci našli hneď, ako vo vašom meste hľadajú vaše služby? Zistite, ako ovládnúť Google Mapy a premeniť vyhľadávania v okolí na zisk.',
    date: '10. júna 2026',
    iso: '2026-06-10',
    readTime: '7 min čítania',
    content: `Predstavte si situáciu: Pokazilo sa vám auto v Nitre, hľadáte zubára v Žiline alebo potrebujete urgentne architekta v Košiciach. Čo urobíte ako prvé? Vytiahnete smartfón a do Google naťukáte „oprava autoklimatizácie Nitra" alebo „zubná klinika Žilina".

Výsledok, ktorý vám Google ponúkne, nerozhoduje len o tom, na aký odkaz kliknete. Rozhoduje o tom, komu v ten deň necháte svoje peniaze.

Pre slovenské firmy, ktoré pôsobia v konkrétnom regióne, meste či štvrti, už klasické SEO nestačí. Ak chcete, aby vás zákazníci našli presne v momente, keď potrebujú vaše služby, kľúčom k úspechu je lokálne SEO.

V tomto detailnom sprievodcovi sa pozrieme na to, ako funguje lokálne vyhľadávanie na Slovensku, prečo samotná šablóna webu na tento boj nestačí a ako krok za krokom dominovať na lokálnom trhu.

## Čo je to lokálne SEO a prečo na ňom záleží

Lokálne SEO (Local Search Engine Optimization) je proces optimalizácie vašej online prezentácie tak, aby sa vaša firma zobrazovala na popredných miestach vo výsledkoch vyhľadávania pre dopyty s lokálnym zámerom (local intent).

Google dokáže v zlomku sekundy identifikovať, kde sa používateľ nachádza a prispôsobiť tomu výsledky. Ak zadáte výraz „reštaurácia", Google vám neukáže najlepšiu reštauráciu v Bratislave, ak práve sedíte v Poprade.

Sila lokálneho vyhľadávania v číslach:

- Až 46 % všetkých vyhľadávaní na Google má lokálny charakter.
- 76 % ľudí, ktorí na smartfóne hľadajú niečo vo svojom okolí, navštívi súvisiacu firmu do 24 hodín.
- Približne 28 % týchto lokálnych vyhľadávaní vyústi do okamžitého nákupu alebo objednávky služieb.

Pre slovenských podnikateľov to znamená jediné: Ak nie ste viditeľní na lokálnej úrovni, dobrovoľne odovzdávate zákazníkov konkurencii, ktorá je o dve ulice ďalej.

## Svätý grál lokálneho vyhľadávania: Google Map Pack

Keď zadáte lokálny dopyt, Google vám na samom vrchu zobrazí mapu a tri najrelevantnejšie lokálne firmy. Tento blok sa nazýva Google Map Pack (alebo Local 3-Pack).

Tento blok priťahuje až 40 – 60 % všetkých kliknutí na danej stránke výsledkov. Ak sa v ňom nenachádzate, pre obrovskú časť zákazníkov jednoducho neexistujete.

Aby ste sa do tohto prestížneho výberu dostali, musíte pochopiť tri hlavné piliere, podľa ktorých Google lokálne firmy hodnotí:

- Relevancia (Relevance) – Ako presne vaša firma zodpovedá tomu, čo používateľ hľadá.
- Vzdialenosť (Distance) – Ako ďaleko sa nachádza vaša prevádzka od polohy vyhľadávajúceho.
- Významnosť (Prominence) – Aká známa a dôveryhodná je vaša firma na internete (hodnotenia, spätné odkazy, zmienky).

## Prípadová štúdia: Ako lokálne SEO zachránilo rodinný autoservis

Pozrime sa na reálny príklad z našej praxe. Pán Milan vlastní rodinný autoservis v Poprade. Mal starší web postavený na bezplatnej šablóne, no väčšinu zákazníkov mal len z odporúčaní. Keď konkurencia v meste začala rásť, počet objednávok klesol.

Rozhodli sme sa kompletne preopačne postaviť jeho online stratégiu. Starý web sme nahradili rýchlym webom na mieru, kompletne sme prekopali jeho Google profil a zamerali sa na kľúčové slovo „oprava prevodoviek Poprad" a „pneuservis Poprad".

Výsledok po 4 mesiacoch:

- Nárast organickej návštevnosti webu: +115 %
- Počet priamych telefonátov z Google Mapy: +140 % (priemerne 45 nových telefonátov mesačne navyše)
- Obsadenosť servisu: Plno na 3 týždne dopredu.

Pán Milan nemusel investovať tisíce eur do celonárodnej reklamy. Stačilo, aby ho videli ľudia, ktorým práve v Poprade a okolí začalo hrkať v motore.

## Strategický plán pre lokálne SEO na Slovensku

Úspešné lokálne SEO nie je jednorazová záležitosť, ale skladačka z viacerých dôležitých komponentov. Poďme si ich rozobrať do detailu.

### 1. Google Profil Moja Firma – Vaša druhá domovská stránka

Vytvorenie a dôkladná optimalizácia profilu na Google je absolútnym základom. Je to bezplatný nástroj, no väčšina slovenských firiem ho využíva len na 20 %.

- Zadajte presný a konzistentný názov: Použite reálny názov firmy. Môžete pridať jedno hlavné kľúčové slovo (napr. „AutoServis XY Nitra – Oprava prevodoviek"), ale nepreháňajte to s prepchávaním kľúčových slov, inak riskujete penalizáciu od Google.
- Vyberte správne kategórie: Primárna kategória musí presne definovať vašu hlavnú činnosť. Ak ste kaviareň, ktorá občas pečie torty na objednávku, vaša primárna kategória je „Kaviareň", sekundárna „Cukrárstvo".
- Doplňte NAP údaje (Name, Address, Phone): Tieto údaje (Názov, Adresa, Telefón) musia byť stopercentne identické na Google profile, na vašom webe aj vo všetkých online katalógoch (napr. Azet, Zlaté Stránky). Ak máte na webe napísané „Trieda SNP 12" a na Google „Tr. SNP 12", roboty to môže zmiasť a zníži to vašu dôveryhodnosť.
- Využívajte príspevky (Google Updates): Google umožňuje publikovať novinky, akcie a udalosti priamo do vášho profilu. Ukážte algoritmom aj ľuďom, že vaša firma žije.

### 2. Sila recenzií: Sociálny dôkaz, ktorý predáva

Slováci sú opatrní kupujúci. Predtým, než navštívia novú reštauráciu alebo zavolajú inštalatéra, pozrú si hodnotenia. Pre Google sú recenzie priamym signálom kvality.

- Pýtajte si recenzie aktívne: Po dokončení zákazky pošlite klientovi SMS alebo e-mail s priamym odkazom na udelenie recenzie.
- Odpovedajte na každú recenziu: Na pozitívne odpovedzte s poďakovaním (môžete jemne zakomponovať kľúčové slovo, napr. „Sme radi, že vám naša pizza v Trnave chutila"). Na negatívne odpovedzte profesionálne, konštruktívne a bez emócií. Google sleduje vašu interakciu.

## On-Page SEO: Prečo krabicové weby zlyhávajú

Mnoho začínajúcich podnikateľov siahne po lacných platformách na prenájom webov s vizuálnymi šablónami. Na začiatok to môže stačiť, no akonáhle vstúpite do konkurenčného prostredia lokálneho SEO, narazíte na tvrdé limity.

Google dnes odmeňuje technickú dokonalosť a hĺbku. Lokálne SEO si vyžaduje špecifickú architektúru webu, ktorú šablóny často nedokážu efektívne a rýchlo spracovať.

- Rýchlosť načítania a Core Web Vitals: Lokálne vyhľadávania prebiehajú primárne na mobilných zariadeniach, často na cestách a pri slabšom pripojení. Krabicové riešenia so sebou nesú balastný kód, zbytočné pluginy a ťažké skripty, ktoré web spomaľujú. Web na mieru je čistý, optimalizovaný a načíta sa okamžite.
- Lokálne pristávacie stránky (Location Pages): Ak pôsobíte vo viacerých mestách (napr. upratovací servis v Bratislave, Trnave a Nitre), nevytvárajte jednu spoločnú podstránku. Každé mesto si zaslúži vlastnú, unikátnu podstránku optimalizovanú na daný región (napr. /upratovanie-bratislava, /upratovanie-nitra). Tieto stránky nesmú byť iba skopírovaným textom – musia obsahovať lokálne referencie, mapu a špecifické recenzie.
- Implementácia štruktúrovaných dát (LocalBusiness Schema Markup): Ide o špeciálny kód, ktorý bežný návštevník nevidí, ale vyhľadávacím robotom presne hovorí, kto ste a kde sídlite. Správna implementácia Schema Markup dokáže výrazne posunúť web v lokálnych výsledkoch smerom nahor. Pri webe na mieru vám programátor vloží čistý JSON-LD kód priamo do štruktúry stránky bez potreby inštalácie spomaľujúcich pluginov.

## Citácie a budovanie lokálnej autority

Aby Google vedel, že ste na slovenskom internete dôležitým hráčom, potrebujete vidieť, že o vás hovoria iné lokálne autority. Budovanie spätných odkazov pre lokálne SEO má svoje špecifiká.

- Národné katalógy firiem: Registrácia na portáloch Azet, Zoznam, Atlas, Firmy.sk alebo Zlaté Stránky slúži na budovanie základnej dôvery a NAP konzistencie.
- Regionálne spravodajstvo: Spätné odkazy z webov ako Sme Regionálne, MyBratislava, Nitralive či Košice Online prinášajú obrovskú lokálnu autoritu a relevantný traffic z okolia.
- Lokálne partnerstvá: Weby dodávateľov alebo lokálnych športových klubov, ktoré sponzorujete, sú zdrojom pre prirodzené a vysoko relevantné lokálne odkazy.
- Tematické slovenské portály: Weby ako Modrá Strecha (pre stavebníctvo), Wilio alebo portály o gastronómii vám pomôžu targetovať na publikum s jasným nákupným zámerom.

Zlaté pravidlo lokálneho linkbuildingu hovorí, že je lepšie získať jeden kvalitný odkaz z regionálneho spravodajského portálu vo vašom meste, ako 20 odkazov z generických, nekvalitných PR webov bez reálnej návštevnosti.

## Analýza kľúčových slov: Ako hľadajú slovenskí zákazníci?

Pri analýze kľúčových slov pre lokálny trh musíte kombinovať hlavnú službu s geografickými modifikátormi. Ľudia na Slovensku vyhľadávajú tromi základnými spôsobmi:

- Služba + Mesto (Implicitná lokácia): „stavebná firma Trnava", „kaderníctvo Banská Bystrica".
- Služba + Okolie (Explicitná lokácia v blízkosti): „reštaurácia v mojom okolí", „odťahová služba blízko mňa". Google tu využíva geolokáciu zariadenia.
- Špecifická štvrť/región: „pneuservis Bratislava Ružinov", „chata na prenájom Liptov".

Pri tvorbe obsahu na web sa nezameriavajte len na vysoko konkurenčné výrazy. Vytvárajte obsah okolo takzvaných long-tail kľúčových slov (dlhšie, špecifickejšie frázy).

Namiesto článku „Ako postaviť dom" napíšte článok „Na čo si dať pozor pri vybavovaní stavebného povolenia v Trenčíne a okolí". Získate síce o niečo menej zobrazení, ale oslovíte ľudí, ktorí hľadajú presne vás a sú pripravení nakúpiť.

## Sledujte svoje výsledky: Čo merať v lokálnom SEO?

Investícia do lokálneho SEO a webu na mieru sa musí vrátiť. Aby ste vedeli, či vaše úsilie prináša ovocie, zamerajte sa na tieto kľúčové metriky:

- Zobrazenia a kliknutia v Google Business Profile: Google vám v administrácii presne ukáže, koľko ľudí si pozrelo váš profil, koľko z nich kliklo na tlačidlo „Zatelefonovať", koľko si vyžiadalo trasu autom do vašej prevádzky a koľko prešlo na váš web.
- Pozície v lokálnom vyhľadávaní: Sledujte, ako sa posúvate nahor v Map Packu pre kľúčové slová naviazané na vaše mesto.
- Lokálny organický traffic: V nástroji Google Analytics 4 (GA4) sledujte návštevnosť z organického vyhľadávania očistenú o návštevy z iných krajín alebo nerelevantných miest, ak dodávate služby len lokálne.

## Záver

Dostať sa na prvé priečky v lokálnom vyhľadávaní na Slovensku si vyžaduje kombináciu troch vecí: technicky dokonalého webu na mieru, pravidelne optimalizovaného Google profilu a autentického obsahu, ktorý rieši reálne problémy ľudí vo vašom regióne.

Výhodou lokálneho SEO je, že konkurencia na slovenskom trhu v mnohých regiónoch stále spí. Mnoho firiem sa spolieha na staré weby, nefunkčné profily alebo neoptimalizované šablóny. Ak sa do toho obujete profesionálne, výsledky v podobe nových telefonátov a objednávok na seba nenechajú dlho čakať.`,
  },
  'najcastejsie-chyby-na-firemnom-webe': {
    title: '10 najčastejších chýb na firemných webstránkach, ktoré vás stoja zákazníkov',
    excerpt: 'Máte web, ale neprináša zákazníkov? Pozrite si najčastejšie chyby firemných webstránok, ktoré znižujú dôveru, počet dopytov a online výsledky.',
    date: '12. júla 2026',
    iso: '2026-07-12',
    readTime: '10 min čítania',
    content: `Mnoho firiem dnes webstránku má. Nie každá webstránka však skutočne pracuje pre firmu. Častý problém nie je v tom, že by firma nemala kvalitné služby alebo produkty. Problém býva v samotnom webe. Návštevník príde, pozrie si stránku a odíde bez toho, aby zavolal alebo poslal dopyt. Web môže byť vizuálne pekný, ale ak návštevník rýchlo nezistí, čo robíte, pre koho to robíte a prečo by si mal vybrať práve vás, prichádzate o zákazníkov.

Firemná webstránka dnes nie je iba online vizitka. Je to nástroj, ktorý má budovať dôveru a prinášať nové obchodné príležitosti.

## 1. Návštevník okamžite nevie, čo robíte

Prvá chyba, ktorú vidíme na mnohých firemných weboch, je nejasná úvodná stránka. Človek, ktorý príde prvýkrát na váš web, by mal do niekoľkých sekúnd pochopiť:

- aké služby ponúkate
- komu pomáhate
- aký problém riešite
- prečo si vybrať práve vás

Texty ako "Vitajte na našej stránke" alebo "Sme profesionálna spoločnosť" návštevníkovi nepomôžu rozhodnúť sa. Dobrá úvodná stránka musí hovoriť hlavne o zákazníkovi a jeho potrebe.

## 2. Web nemá jasný cieľ

Každý kvalitný web by mal mať jeden hlavný cieľ. Najčastejšie:

- získavať dopyty
- získavať telefonáty
- predávať produkty
- rezervovať služby

Častou chybou je web, ktorý iba prezentuje informácie, ale návštevníkovi nepovie, čo má urobiť ďalej. Používajte jasné výzvy:

- Vyžiadať cenovú ponuku
- Kontaktovať nás
- Objednať konzultáciu

## 3. Chýba dôvera

Zákazník sa pred rozhodnutím snaží zistiť, či vám môže veriť. Ak na stránke chýbajú:

- referencie
- ukážky práce
- fotografie realizácií
- skúsenosti klientov

návštevník môže mať pochybnosti. Dôvera často rozhoduje o tom, či zákazník osloví vás alebo konkurenciu.

## 4. Web sa načítava pomaly

Rýchlosť webu je dnes veľmi dôležitá. Nikto nechce čakať niekoľko sekúnd, kým sa stránka otvorí. Najčastejšie príčiny pomalého webu:

- veľké fotografie
- nekvalitný hosting
- zbytočné doplnky
- neoptimalizovaný kód

Rýchly web zlepšuje používateľský zážitok a pomáha aj pri SEO.

## 5. Web nie je pripravený pre mobily

Veľká časť návštevníkov používa mobilné zariadenia. Ak sa stránka zle ovláda, text je príliš malý alebo tlačidlá nefungujú správne, používateľ odíde. Moderná webstránka musí fungovať perfektne na počítači aj mobile.

## 6. Texty hovoria iba o firme

Mnohé firmy píšu iba o sebe. Napríklad:

- máme dlhoročné skúsenosti
- poskytujeme kvalitné služby
- sme profesionáli

Zákazník však rieši hlavne svoj problém. Potrebuje vedieť:

- ako mu pomôžete
- aký výsledok môže očakávať
- prečo ste lepšia voľba

Dobré texty na webe predávajú riešenie, nie iba službu.

## 7. Kontakt sa ťažko hľadá

Ak zákazník musí hľadať telefón alebo formulár, je to problém. Kontakt by mal byť dostupný okamžite. Odporúčame mať:

- telefón v hornej časti stránky
- viditeľné tlačidlo kontaktu
- jednoduchý formulár

Každý zbytočný krok znižuje šancu na získanie zákazníka.

## 8. Nekvalitné fotografie

Fotografie vytvárajú prvý dojem. Používanie náhodných obrázkov z internetu často pôsobí nedôveryhodne. Lepšie fungujú vlastné fotografie:

- tímu
- prevádzky
- produktov
- realizácií

Autentický obsah pomáha budovať vzťah so zákazníkom.

## 9. Chýbajú odpovede na otázky zákazníkov

Pred kontaktovaním firmy má zákazník často množstvo otázok. Zaujíma ho:

- cena
- priebeh spolupráce
- čas realizácie
- miesto pôsobenia
- čo všetko získava

Ak odpovede nenájde na vašom webe, začne hľadať inde.

## 10. Web sa po spustení neaktualizuje

Web nie je hotový navždy v deň spustenia. Firma rastie, menia sa služby, pribúdajú nové skúsenosti a referencie. Aktualizovaný web pôsobí profesionálnejšie a pomáha získavať viac návštevníkov z vyhľadávačov.

## Ako zistiť, či váš web potrebuje zlepšenie?

Položte si tieto otázky:

- Je do 5 sekúnd jasné, čo firma ponúka?
- Funguje web dobre na mobile?
- Nájde zákazník kontakt okamžite?
- Obsahuje reálne referencie?
- Vedie návštevníka k ďalšiemu kroku?

Ak ste pri viacerých otázkach odpovedali nie, váš web pravdepodobne prichádza o zákazníkov.

## Záver

Dobrý firemný web nie je iba pekný dizajn. Je to nástroj, ktorý má pomáhať firme rásť. Ak web neprináša zákazníkov, často nemusí byť problém v celej stránke. Niekedy stačí odstrániť niekoľko chýb, zlepšiť obsah, zrýchliť načítanie a jasnejšie komunikovať hodnotu.

Vo WebKlienti tvoríme webstránky pre živnostníkov a malé firmy, ktoré chcú mať profesionálnu prezentáciu a získavať viac zákazníkov online.`,
  },
};

function renderInline(text) {
  // handle markdown links [text](url) and **bold**
  const nodes = [];
  let remaining = text;
  let key = 0;
  const linkRe = /\[([^\]]+)\]\(([^)]+)\)/;
  while (remaining.length) {
    const m = remaining.match(linkRe);
    if (!m) {
      nodes.push(...boldSplit(remaining, key));
      break;
    }
    const before = remaining.slice(0, m.index);
    if (before) nodes.push(...boldSplit(before, key));
    key += 100;
    const url = m[2];
    nodes.push(
      <Link key={`lnk-${key}`} to={url} style={{ color: '#2563EB', fontWeight: 600 }}>
        {m[1]}
      </Link>
    );
    remaining = remaining.slice(m.index + m[0].length);
    key += 1;
  }
  return nodes;
}

function boldSplit(text, baseKey) {
  return text.split(/\*\*(.*?)\*\*/g).map((part, idx) =>
    idx % 2 === 1 ? <strong key={`b-${baseKey}-${idx}`}>{part}</strong> : part
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
            <li key={idx} style={{ fontSize: 16, color: C.textSub, lineHeight: 1.8 }}>
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
      result.push(
        <h2 key={i} style={{ fontSize: 22, fontWeight: 700, color: C.text, margin: '36px 0 14px', letterSpacing: '-0.01em' }}>
          {l.replace('## ', '')}
        </h2>
      );
    } else if (l.startsWith('### ')) {
      flushList(i);
      result.push(
        <h3 key={i} style={{ fontSize: 17, fontWeight: 600, color: C.text, margin: '24px 0 10px' }}>
          {l.replace('### ', '')}
        </h3>
      );
    } else if (l.startsWith('- ')) {
      listBuffer.push(l.replace('- ', ''));
    } else if (l.trim() === '') {
      flushList(i);
    } else {
      flushList(i);
      result.push(
        <p key={i} style={{ fontSize: 16, color: C.textSub, lineHeight: 1.8, margin: '10px 0' }}>
          {renderInline(l)}
        </p>
      );
    }
  });
  flushList('end');
  return result;
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts[slug];

  if (!post)
    return (
      <div style={{ textAlign: 'center', padding: '100px 40px', fontFamily: "'Inter', sans-serif" }}>
        <h1 style={{ color: C.text }}>Článok nenájdený</h1>
        <Link to="/blog" style={{ color: C.blue, marginTop: 16, display: 'block' }}>
          ← Späť na blog
        </Link>
      </div>
    );

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `https://www.webklienti.com/og/blog/${slug}.jpg`,
    datePublished: post.iso,
    dateModified: post.iso,
    inLanguage: 'sk-SK',
    url: `https://www.webklienti.com/blog/${slug}`,
    wordCount: post.content.split(/\s+/).length,
    articleSection: 'Blog',
    author: {
      '@type': 'Organization',
      name: 'WebKlienti',
    },
    publisher: {
      '@type': 'Organization',
      name: 'WebKlienti',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.webklienti.com/logo.webp',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.webklienti.com/blog/${slug}`,
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Domov',
        item: 'https://www.webklienti.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://www.webklienti.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://www.webklienti.com/blog/${slug}`,
      },
    ],
  };

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", background: C.bg, minHeight: '100vh' }}>
      <Helmet>
        <title>{post.title} | WebKlienti</title>

        <meta name="description" content={post.excerpt} />
        <meta name="robots" content="index,follow,max-image-preview:large" />

        <link rel="canonical" href={`https://www.webklienti.com/blog/${slug}`} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={`https://www.webklienti.com/blog/${slug}`} />
        <meta property="og:site_name" content="WebKlienti" />
        <meta property="og:locale" content="sk_SK" />
        <meta property="article:published_time" content={post.iso} />
        <meta property="article:modified_time" content={post.iso} />

        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>

        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <style>{`* { box-sizing: border-box; margin: 0; padding: 0; }`}</style>

      <nav
        style={{
          background: 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(8px)',
          borderBottom: `1px solid ${C.border}`,
          padding: '0 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 64,
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}
      >
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img
            src={logoImg}
            alt="WebKlienti logo"
            width="36"
            height="36"
            style={{ height: 36, width: 36, objectFit: 'contain', borderRadius: '50%' }}
          />
          <span style={{ fontWeight: 700, fontSize: 18, color: C.text }}>
            Web<span style={{ color: C.blue }}>Klienti</span>
          </span>
        </Link>
        <Link to="/blog" style={{ color: C.textSub, textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>
          ← Späť na blog
        </Link>
      </nav>

      <article style={{ maxWidth: 720, margin: '0 auto', padding: '64px 40px' }}>
        <div style={{ display: 'flex', gap: 16, marginBottom: 20, fontSize: 13, color: C.textSub }}>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>

        <h1
          style={{
            fontSize: 'clamp(26px, 3.5vw, 40px)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: C.text,
            marginBottom: 40,
            lineHeight: 1.2,
          }}
        >
          {post.title}
        </h1>

        <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 16, padding: '40px' }}>
          {renderContent(post.content)}
        </div>

        <div style={{ background: C.blue, borderRadius: 16, padding: '40px', textAlign: 'center', marginTop: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 10 }}>
            Potrebujete web pre vašu firmu?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: 24 }}>
            Hotový za 5 dní od 299 €. Bez mesačných poplatkov.
          </p>
          <Link
            to="/"
            style={{
              background: '#fff',
              color: C.blue,
              padding: '12px 28px',
              borderRadius: 10,
              fontWeight: 700,
              fontSize: 15,
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Objednať web →
          </Link>
        </div>
      </article>

      <footer
        style={{
          background: C.dark,
          color: 'rgba(255,255,255,0.7)',
          textAlign: 'center',
          padding: '32px 24px',
          fontSize: 13,
        }}
      >
        <p style={{ marginBottom: 8 }}>
          © {new Date().getFullYear()} WebKlienti · Všetky práva vyhradené
        </p>

        <p style={{ color: 'rgba(255,255,255,0.5)' }}>
          Profesionálna tvorba webových stránok, SEO optimalizácia a AI riešenia pre firmy na Slovensku.
        </p>
      </footer>
    </div>
  );
}
