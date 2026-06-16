import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import logoImg from '../assets/logo.webp';

const C = {
  blue: '#2563EB', bg: '#F9FAFB', white: '#FFFFFF',
  border: '#E5E7EB', text: '#111827', textSub: '#4B5563', dark: '#0F172A',
};

const posts = {
  'preco-kazda-mala-firma-potrebuje-web': {
    title: 'Prečo dnes každá malá firma potrebuje web?',
    excerpt: '87 % zákazníkov hľadá firmy online. Ak nie ste na internete, prichádzate o zákazníkov v prospech konkurencie.',
    date: '12. februára 2025', iso: '2025-02-12', readTime: '4 min čítania',
    content: `Každý deň ľudia vo vašom okolí hľadajú služby, ktoré ponúkate. Ak však nemáte web, väčšina z nich skončí u konkurencie.\n\nDnes zákazníci hľadajú firmy cez Google. Ak vás tam nenájdu, pre nich prakticky neexistujete. Nestačí mať len Facebook — firma bez webu často pôsobí menej dôveryhodne a prichádza o klientov ešte pred prvým kontaktom.\n\n## Web pracuje za vás 24/7\n\nProfesionálny web:\n\n- prezentuje vaše služby\n- buduje dôveru\n- privádza nových zákazníkov\n- umožňuje klientom kontaktovať vás kedykoľvek\n\n## Prvý dojem rozhoduje\n\nĽudia si dnes firmu preverujú online ešte pred telefonátom. Moderný a rýchly web vytvára profesionálny dojem a výrazne zvyšuje šancu, že si zákazník vyberie práve vás.\n\n## Web nemusí byť drahý\n\nProfesionálny firemný web dnes nemusí stáť tisíce eur. U nás začína od **299 €** — moderný dizajn, mobilná verzia, rýchle dodanie do 5 dní, bez skrytých poplatkov.`,
  },
  'ai-na-webstranke-konkurecna-vyhoda': {
    title: 'AI na vašej webstránke: konkurenčná výhoda, ktorú už používajú úspešné firmy',
    excerpt: 'AI chatboty, inteligentné vyhľadávanie a personalizovaný obsah dnes pomáhajú firmám zvyšovať konverzie.',
    date: '19. mája 2026', iso: '2026-05-19', readTime: '6 min čítania',
    content: `Dnes už moderný web nemusí byť len „online vizitka". Vďaka umelej inteligencii sa dokáže aktívne rozprávať so zákazníkom, pomáhať mu pri rozhodovaní a automatizovať procesy.\n\n## AI chatbot, ktorý naozaj rozumie zákazníkom\n\nModerné AI chatboty pre web rozumejú kontextu, zámeru aj prirodzenému jazyku.\n\n- rýchlejšia zákaznícka podpora\n- menej manuálnej práce\n- vyššia spokojnosť zákazníkov\n- dostupnosť 24/7\n\n## AI na webe už nie je luxus\n\nFirmy, ktoré implementujú AI už dnes, zlepšujú zákaznícky servis, automatizujú opakujúce sa úlohy a získavajú výrazný náskok pred konkurenciou.`,
  },
  'preco-je-seo-klucove': {
    title: 'Prečo je SEO kľúčové pre úspech vášho podnikania',
    excerpt: 'Ak sa váš web nezobrazuje vo vyhľadávačoch, väčšina zákazníkov vás nenájde.',
    date: '18. marca 2025', iso: '2025-03-18', readTime: '6 min čítania',
    content: `Predstavte si, že vlastníte kvalitnú firmu, ponúkate spoľahlivé služby, máte profesionálny web a spokojných zákazníkov. Napriek tomu vám neprichádzajú nové dopyty v takom množstve, ako by ste očakávali. Dôvod môže byť jednoduchý – potenciálni zákazníci vás na internete nedokážu nájsť.\n\nV súčasnosti sa väčšina nákupných rozhodnutí začína vo vyhľadávači Google. Keď človek potrebuje elektrikára, účtovníka, právnika, stavebnú firmu alebo chce kúpiť konkrétny produkt, prvé, čo urobí, je zadanie požiadavky do vyhľadávača. Ak sa vaša firma medzi výsledkami nezobrazuje, zákazník s najväčšou pravdepodobnosťou skončí u konkurencie.\n\nPráve preto je SEO (Search Engine Optimization) jednou z najdôležitejších investícií do online marketingu. Nejde len o technické nastavenie webu či používanie správnych kľúčových slov. SEO predstavuje dlhodobú stratégiu, ktorá pomáha zvyšovať viditeľnosť firmy, získavať nových zákazníkov, budovať dôveru a zlepšovať obchodné výsledky.\n\n## Čo je SEO?\n\nSEO, alebo optimalizácia pre vyhľadávače, je proces zlepšovania webovej stránky tak, aby sa zobrazovala na vyšších pozíciách vo výsledkoch vyhľadávania. Cieľom je dostať web pred ľudí, ktorí aktívne hľadajú produkty alebo služby, ktoré firma ponúka.\n\nVyhľadávače ako Google hodnotia stovky faktorov – od kvality obsahu, cez technický stav webu, rýchlosť načítania až po spätné odkazy a používateľskú skúsenosť. Výsledkom je poradie stránok, ktoré najlepšie zodpovedajú danej otázke používateľa.\n\nKeď používateľ zadá do Google napríklad výraz „rekonštrukcia bytov Bratislava" alebo „účtovník pre živnostníkov", vyhľadávač zobrazí stránky, ktoré považuje za najrelevantnejšie. Firmy na prvých pozíciách získavajú najväčšiu časť návštevnosti, zatiaľ čo weby na druhej či tretej strane zostávajú často nepovšimnuté.\n\nJednoducho povedané, SEO zabezpečuje, aby sa vaša firma objavila presne v momente, keď ju zákazník potrebuje.\n\n## Zvýšenie viditeľnosti vašej firmy\n\nAj ten najlepší produkt alebo služba má obmedzený potenciál, ak o nich nikto nevie. Internet dnes predstavuje najväčší zdroj informácií a zákazníci sa pri rozhodovaní spoliehajú predovšetkým na výsledky vyhľadávania.\n\nAk sa vaša firma pravidelne objavuje medzi prvými výsledkami Google, získavate obrovskú výhodu. Nielenže vás vidí viac ľudí, ale zároveň sa vaša značka dostáva do povedomia potenciálnych zákazníkov.\n\nPredstavte si dve stavebné firmy. Prvá sa zobrazuje na prvej strane výsledkov pri vyhľadávaní „rekonštrukcia domu Trnava". Druhá sa nachádza na štvrtej strane. Ktorá z nich bude pravdepodobne dostávať viac telefonátov a dopytov?\n\nOdpoveď je zrejmá.\n\nZároveň platí jednoduché pravidlo: prvé tri výsledky vo vyhľadávaní získavajú väčšinu všetkých kliknutí, zatiaľ čo zvyšok stránky už len zlomok. Viditeľnosť vo vyhľadávačoch je preto priamo prepojená s obchodnými výsledkami.\n\n## SEO privádza na web reálnych zákazníkov\n\nJednou z najväčších výhod SEO je kvalita návštevnosti. Na rozdiel od mnohých foriem reklamy neoslovujete ľudí, ktorí o vaše služby nemajú záujem. Na web prichádzajú používatelia, ktorí už hľadajú konkrétne riešenie.\n\nAk niekto zadá do Google výraz „autoservis Bratislava", „svadobný fotograf Trnava" alebo „účtovnícke služby pre s.r.o.", ide o človeka s konkrétnou potrebou a často aj pripraveným rozpočtom.\n\nPráve preto patrí organická návštevnosť medzi najhodnotnejšie zdroje zákazníkov. Takíto návštevníci majú výrazne vyššiu mieru konverzie než používatelia z bannerovej reklamy či sociálnych sietí.\n\nSEO teda neprináša len viac kliknutí. Prináša ľudí, ktorí aktívne hľadajú vaše riešenie.\n\n## Budovanie dôvery a profesionálneho imidžu\n\nDôvera je základom každého úspešného podnikania. Ľudia chcú nakupovať od spoločností, ktoré pôsobia stabilne, profesionálne a overene.\n\nPozície vo vyhľadávači majú na vnímanie značky silný psychologický efekt. Používatelia prirodzene vnímajú firmy na prvých miestach ako lídrov vo svojom odbore – aj keď si to neuvedomujú vedome.\n\nAk sa váš web opakovane zobrazuje pri rôznych relevantných vyhľadávaniach, vzniká efekt „digitálnej autority". Zákazník vás začne vnímať ako firmu, ktorá v odvetví dominuje.\n\nSEO zároveň podporuje obsahový marketing. Odborné články, návody, odpovede na otázky a prípadové štúdie zvyšujú vašu dôveryhodnosť a menia web z jednoduchej prezentácie na zdroj odborných informácií.\n\n## Konkurenčná výhoda, ktorá rozhoduje\n\nOnline prostredie je čoraz konkurenčnejšie. Vo väčšine odvetví už nestačí mať dobrú službu – treba byť aj viditeľný.\n\nAk konkurencia investuje do SEO a vy nie, rozdiel sa postupne prehlbuje. Oni získavajú návštevnosť, dopyty a zákazníkov, zatiaľ čo vy zostávate mimo ich zorného poľa.\n\nVýhodou SEO je však to, že neuprednostňuje veľkosť firmy, ale kvalitu webu. To znamená, že aj menšia lokálna firma môže predbehnúť veľkého hráča, ak má lepšie optimalizovaný obsah, technicky kvalitný web a relevantné stránky.\n\nV lokálnom vyhľadávaní to platí ešte viac – rozhoduje presnosť, relevantnosť a dôvera, nie rozpočet.\n\n## Nižšie náklady na platenú reklamu\n\nPlatená reklama prináša okamžité výsledky, ale len krátkodobo. V momente, keď prestanete platiť, návštevnosť zmizne.\n\nSEO funguje ako dlhodobý majetok. Dobre optimalizovaný článok alebo podstránka môže prinášať návštevnosť roky bez ďalších nákladov.\n\nNapríklad blogový článok, ktorý sa dostane na popredné pozície, môže mesačne generovať stabilný prísun zákazníkov bez dodatočných výdavkov.\n\nTo však neznamená, že SEO nahrádza reklamu. Najsilnejší výsledok vzniká kombináciou oboch prístupov – reklama prináša rýchlosť, SEO stabilitu.\n\n## SEO je investícia, nie náklad\n\nSEO je proces, ktorý sa neprejaví zo dňa na deň. Jeho sila spočíva v kumulatívnom efekte.\n\nKaždý nový článok, každá optimalizovaná stránka a každý kvalitný spätný odkaz zvyšuje autoritu webu. Čím dlhšie sa SEO robí, tým silnejšie výsledky prináša.\n\nPredstavte si SEO ako budovanie digitálnej nehnuteľnosti na najfrekventovanejšej ulici internetu. Na začiatku je to prázdny priestor, ale postupne sa mení na stabilný zdroj zákazníkov.\n\nFirmy, ktoré SEO robia systematicky, získavajú dlhodobú výhodu a stabilný prísun dopytov aj v čase, keď znižujú marketingové výdavky.\n\n## Budúcnosť patrí firmám, ktoré sú viditeľné\n\nZákazníci sa budú aj naďalej rozhodovať online. Rozdiel bude len v tom, ktoré firmy sa im zobrazia ako prvé.\n\nAk nie ste viditeľní vo vyhľadávačoch, každý deň prichádzate o potenciálnych zákazníkov, ktorí aktívne hľadajú vaše služby.\n\nNaopak, firmy s kvalitným SEO budujú stabilnú online prítomnosť, získavajú dôveru a posilňujú svoju pozíciu na trhu bez neustáleho zvyšovania reklamných nákladov.\n\n## Záver\n\nMať webovú stránku už nestačí. Rozhodujúce je, či vás zákazníci dokážu nájsť presne v momente, keď vás potrebujú.\n\nSEO pomáha zvýšiť viditeľnosť firmy, priviesť relevantných zákazníkov, budovať dôveru, získať konkurenčnú výhodu a znížiť závislosť od platenej reklamy. V konečnom dôsledku ide o jeden z najefektívnejších spôsobov, ako dlhodobo rásť v online prostredí.\n\nFirmy, ktoré SEO zanedbajú, zostávajú neviditeľné. Firmy, ktoré doň investujú, si budujú stabilnú a dlhodobú výhodu.\n\n**Chcete vedieť, prečo sa váš web nezobrazuje na Google tak, ako by mal? SEO analýza vám ukáže presné kroky, ako získať viac návštevníkov a zákazníkov.**`,
  },
  'google-search-console-a-google-analytics': {
    title: 'Prečo sú Google Search Console a Google Analytics nevyhnutné pre moderný web?',
    excerpt: 'Pomáhajú firmám sledovať návštevnosť, zlepšovať SEO a robiť lepšie rozhodnutia.',
    date: '28. júna 2025', iso: '2025-06-28', readTime: '5 min čítania',
    content: `V dnešnom digitálnom svete nestačí mať iba peknú webstránku. Potrebujete rozumieť tomu, ako sa ľudia na vašom webe správajú.\n\n## Google Search Console\n\nPomáha sledovať výkon stránky vo výsledkoch vyhľadávania Google, analyzovať kľúčové slová a odhaliť technické problémy.\n\n## Google Analytics\n\nPoskytuje detailné štatistiky o návštevnosti webu a správaní používateľov.\n\nModerné firmy dnes rozhodujú na základe dát. Web bez analytiky funguje naslepo.`,
  },
  'kolko-stoji-webstranka-na-slovensku': {
    title: 'Koľko stojí webstránka na Slovensku v roku 2026?',
    excerpt: 'Ceny webstránok sa pohybujú od 200 € až po tisíce eur.',
    date: '30. mája 2026', iso: '2026-05-30', readTime: '6 min čítania',
    content: `Jedna z najčastejších otázok slovenských podnikateľov: "Koľko stojí webstránka?" Ceny sa líšia enormne — od 200 € po desiatky tisíc eur. Poďme si to v roku 2026 rozmeniť na drobné.\n\n## Možnosti a ich ceny v roku 2026\n\n### Lacný web pre živnostníka (200 € – 600 €)\nJednoduchý one-page alebo malý prezentačný web. Ideálny pre začínajúce firmy a lokálne služby, ktoré potrebujú rýchlo a profesionálne pôsobiť online.\n\n### Profesionálny firemný web (600 € – 1500 €)\nViac podstránok, dizajn na mieru, pokročilé SEO. Zlatá stredná cesta pre väčšinu firiem.\n\n### E-shop a riešenia na mieru (od 999 €)\nInternetový obchod alebo web s individuálnymi funkciami.\n\n## Prečo je rozptyl taký veľký?\n\nRozdiel nie je v počte podstránok, ale v tom, čo je v cene: dizajn, SEO, rýchlosť, mobilná verzia, podpora. Lacný web, ktorý neprináša zákazníkov, je v skutočnosti ten najdrahší — platíte zaň aj stratenými príležitosťami.\n\n## Neplatí, že drahšie = lepšie\n\nNiektoré agentúry pýtajú 2000 € a viac za bežný firemný web, pričom väčšinu ceny tvorí ich réžia. Vďaka moderným nástrojom dnes vznikne profesionálny web rýchlejšie a lacnejšie než pred pár rokmi — bez kompromisov v kvalite.\n\n## Záver\n\nPre malú firmu či živnostníka je optimálna investícia okolo **299 € – 800 €** za kvalitný web, ktorý je rýchly, mobilný a optimalizovaný na získavanie zákazníkov.`
  },
  'preco-web-neprinas-zakaznikov': {
    title: 'Prečo vám web neprináša zákazníkov (a ako to zmeniť)',
    excerpt: 'Váš web môže vyzerať dobre, ale ak neprináša dopyty, nie je problém v trhu — ale vo webe.',
    date: '29. apríla 2025', iso: '2025-04-29', readTime: '3 min čítania',
    content: `Váš web môže vyzerať dobre. Ale ak neprináša dopyty, nie je problém v trhu — ale v ňom.\n\n## 1. Strácate ľudí na mobile\n\nVäčšina návštev prichádza z telefónu. Ak sa web pomaly načítava — zákazník odchádza do pár sekúnd.\n\n## 2. Návštevník nevie, čo má robiť\n\nAk nie je hneď jasné čo ponúkate a ako vás kontaktovať — nemáte šancu na zákazku.\n\n## 3. Nepôsobíte dôveryhodne\n\nZákazník porovnáva. Ak web nevyzerá profesionálne — vyberie konkurenciu.\n\n## Čo funguje\n\n- rýchly web\n- jasná ponuka do pár sekúnd\n- mobilná optimalizácia\n- výrazné tlačidlo kontaktu\n- dôkazy dôvery (recenzie, práce, referencie)`,
  },
  'preco-vas-eshop-nepredava': {
    title: 'Prečo váš e-shop nepredáva?',
    excerpt: 'Ľudia prídu, ale nekúpia. Je problém v nich, alebo vo vás?',
    date: '11. mája 2026', iso: '2026-05-11', readTime: '4 min čítania',
    content: `Ak ľudia prídu, ale nekúpia… je problém v nich, alebo vo vás?\n\n## Rozumie váš e-shop zákazníkovi do 5 sekúnd?\n\nAk si zákazník nie je istý čo ponúkate — odchádza.\n\n## Je váš e-shop dôveryhodný?\n\nČo vidí zákazník?\n- recenzie?\n- jasné informácie?\n- profesionálny dojem?\n\n## Záver\n\nNie je otázka, či máte e-shop. Otázka je, či e-shop pracuje pre vás… alebo proti vám.`,
  },
  'tvorba-webu-pre-zivnostnika': {
    title: 'Tvorba webu pre živnostníka: čo by mal obsahovať úspešný web',
    excerpt: 'Zistite, čo musí obsahovať moderný web pre živnostníka, aby získaval zákazníkov z Google a premieňal návštevníkov na dopyty.',
    date: '22. mája 2026', iso: '2026-05-22', readTime: '4 min čítania',
    content: `Mnohí živnostníci stále fungujú bez webovej stránky alebo používajú zastaraný web, ktorý neprináša žiadne výsledky. V roku 2026 je profesionálny web jedným z najdôležitejších nástrojov na získavanie nových zákazníkov.\n\n## Jasná ponuka služieb\n\nPrvá vec, ktorú by mal web obsahovať, je jasná ponuka služieb. Návštevník musí do niekoľkých sekúnd pochopiť, čo robíte a pre koho.\n\n## Budovanie dôveryhodnosti\n\nDruhým prvkom je dôveryhodnosť. Sem patria:\n\n- referencie klientov\n- fotografie realizácií\n- recenzie\n- kontaktné údaje\n\n## SEO optimalizácia\n\nTretím faktorom je SEO. Ak vás ľudia nenájdu v Google, web nebude generovať dopyty. Preto je potrebné optimalizovať stránky na relevantné kľúčové slová.\n\n## Rýchlosť načítania\n\nVeľký význam má aj rýchlosť načítania. Pomalý web znižuje konverzie a negatívne vplýva na pozície vo vyhľadávači.\n\n## Jasné CTA prvky\n\nNezabudnite na jasné výzvy k akcii:\n\n- Zavolajte nám\n- Požiadajte o cenovú ponuku\n- Získajte bezplatnú konzultáciu\n\nMnoho živnostníkov zistí, že jednoduchý a dobre nastavený web dokáže nahradiť časť platených reklám. Ak hľadáte jednoduché riešenie za fixnú cenu, pozrite si náš [web za 299 €](/web-299).\n\n## Záver\n\nWeb pre živnostníka nemusí byť komplikovaný. Musí však jasne komunikovať hodnotu, budovať dôveru a privádzať relevantných návštevníkov z Googlu.`,
  },
  'web-pre-kadernictvo': {
    title: 'Web pre kaderníctvo: ako získať viac rezervácií online',
    excerpt: 'Profesionálny web pre kaderníctvo pomáha získavať nové rezervácie a budovať dôveru zákazníkov. Zistite, čo by mal obsahovať.',
    date: '25. mája 2026', iso: '2026-05-25', readTime: '4 min čítania',
    content: `Kaderníctvo dnes nesúťaží iba kvalitou služieb. Zákazníci si často vyberajú podľa toho, čo nájdu na internete.\n\n## Čo by mal web pre kaderníctvo obsahovať\n\nModerný web pre kaderníctvo by mal obsahovať:\n\n- galériu prác\n- cenník\n- kontakty\n- rezervačný formulár\n- recenzie klientov\n\nNajdôležitejšou časťou je prezentácia výsledkov. Ľudia chcú vidieť reálne premeny a ukážky práce.\n\n## Lokálne SEO je kľúčové\n\nVeľký význam má lokálne SEO. Ak niekto hľadá „kaderníctvo Trnava" alebo „dámske kaderníctvo Bratislava", váš web by sa mal zobrazovať vo výsledkoch vyhľadávania.\n\n## Praktické tipy\n\n- Pridajte fotografie pred a po.\n- Uveďte ceny služieb.\n- Vytvorte stránku pre každú službu.\n- Zbierajte recenzie od klientov.\n- Prepojte web s Google Business Profile.\n\nMnoho kaderníctiev stále funguje iba cez sociálne siete. To však znamená závislosť od algoritmov. Web je aktívum, ktoré vlastníte vy.\n\nAk chcete rýchly štart, pozrite si naše riešenie [web za 299 €](/web-299).\n\n## Záver\n\nDobrý web pre kaderníctvo dokáže prinášať rezervácie aj mimo sociálnych sietí a vytvárať stabilný zdroj nových zákazníkov.`,
  },
  'co-musi-mat-dobry-firemny-web': {
    title: 'Čo musí mať dobrý firemný web v roku 2026',
    excerpt: 'Zistite, aké prvky musí obsahovať moderný firemný web, aby získaval zákazníkov a zvyšoval dôveru návštevníkov.',
    date: '27. mája 2026', iso: '2026-05-27', readTime: '4 min čítania',
    content: `Firemný web už nie je len online vizitka. Je to obchodný nástroj, ktorý má generovať dopyty a podporovať predaj.\n\n## Základné prvky firemného webu\n\nKaždý kvalitný firemný web by mal obsahovať:\n\n- jasnú hlavnú ponuku\n- referencie\n- kontaktné údaje\n- responzívny dizajn\n- rýchle načítanie\n- SEO optimalizáciu\n\nNajväčšou chybou je sústrediť sa iba na dizajn. Pekný web bez návštevnosti a konverzií neprináša firme žiadnu hodnotu.\n\n## Štruktúra obsahu\n\nDôležitá je aj štruktúra obsahu. Návštevník by mal okamžite nájsť odpovede na otázky:\n\n- Čo firma robí?\n- Pre koho?\n- Prečo si ju vybrať?\n- Ako ju kontaktovať?\n\n## Prípadové štúdie a blog\n\nSilným prvkom sú prípadové štúdie. Reálne výsledky budujú dôveru výrazne viac ako všeobecné marketingové tvrdenia.\n\nNezabudnite ani na blog. Pravidelný obsah pomáha získavať organickú návštevnosť z Google.\n\nAk chcete jednoduchý firemný web za pevnú cenu, pozrite si náš [web za 299 €](/web-299).\n\n## Záver\n\nÚspešný firemný web kombinuje kvalitný obsah, dôveru, SEO a jasné výzvy k akcii. Len tak dokáže generovať nové obchodné príležitosti.`,
  },
  'web-za-299-eur': {
    title: 'Web za 299 € – je to dobrá voľba?',
    excerpt: 'Oplatí sa web za 299 €? Pozrite si výhody, nevýhody a situácie, kedy je lacnejší web rozumnou voľbou.',
    date: '29. mája 2026', iso: '2026-05-29', readTime: '4 min čítania',
    content: `Jednou z najčastejších otázok malých podnikateľov je, či má zmysel investovať do webu za 299 €. Odpoveď závisí od cieľa projektu.\n\nAk začínate podnikať a potrebujete rýchlo získať online prezentáciu, môže ísť o veľmi rozumné riešenie. Získate základný web, na ktorom zákazníci nájdu informácie o vašich službách a kontaktné údaje.\n\n## Výhody\n\n- nízka vstupná investícia\n- rýchla realizácia\n- jednoduchá správa\n- profesionálnejší dojem oproti absencii webu\n\n## Nevýhody\n\n- obmedzené možnosti rozšírenia\n- menej individuálny dizajn\n- menej pokročilé funkcie\n\n## Lepšia stratégia pre malé firmy\n\nMnohé firmy robia chybu, že investujú tisíce eur do webu ešte predtým, než majú overený dopyt po svojich službách. Pre menšie firmy býva často lepšou stratégiou:\n\n- spustiť jednoduchý web\n- získať prvých klientov\n- zbierať recenzie\n- následne investovať do rozšírenia\n\nNajdôležitejšie nie je, koľko web stojí, ale či prináša výsledky. Ak chcete vidieť príklad riešenia v tejto cenovej kategórii, pozrite si náš [web za 299 €](/web-299).\n\n## Záver\n\nWeb za 299 € môže byť výborným štartom pre živnostníkov a malé firmy. Kľúčové je, aby bol správne nastavený na získavanie dopytov a budovanie dôvery.`,
  },
  'tvorba-webu-trnava': {
    title: 'Tvorba webu Trnava — web pre firmy z Trnavy a okolia',
    excerpt: 'Hľadáte tvorbu webu v Trnave? Profesionálny web pre lokálne firmy, ktorý vás dostane na Google.',
    date: '30. mája 2026', iso: '2026-05-30', readTime: '4 min čítania',
    content: `Ste firma alebo živnostník z Trnavy a hľadáte niekoho, kto vám vytvorí web? Lokálny web má jednu veľkú výhodu — zákazníci z okolia vás nájdu presne vtedy, keď vašu službu potrebujú.\n\n## Prečo je lokálny web pre Trnavu dôležitý\n\nKeď niekto v Trnave hľadá "kaderníctvo Trnava" alebo "autoservis Trnava", Google uprednostňuje firmy s lokálnym signálom — webom s adresou, Google Business profilom a obsahom viazaným na mesto. Ak ho nemáte, prichádzate o zákazníkov z vlastného okolia.\n\n## Čo by mal lokálny web obsahovať\n\n- jasnú adresu a kontakt na firmu\n- prepojenie s Google Business Profile\n- mapu s vašou prevádzkou\n- obsah, ktorý spomína Trnavu a okolie\n- rýchle načítanie a mobilnú verziu\n\n## Lokálne SEO je vaša výhoda\n\nNa rozdiel od celoslovenských fráz je konkurencia na lokálne výrazy oveľa nižšia. Web pre firmu z Trnavy sa tak vie dostať na popredné miesta v Google rýchlejšie a lacnejšie než pri všeobecných kľúčových slovách.\n\n## Záver\n\nSme z Trnavy a tvoríme weby pre lokálne firmy aj klientov po celom Slovensku.`,
  },
  'wordpress-vs-wix-vs-web-na-mieru': {
    title: 'WordPress vs Wix vs web na mieru — čo si vybrať?',
    excerpt: 'Porovnanie troch najčastejších spôsobov tvorby webu pre malé firmy. Výhody, nevýhody a kedy sa ktorá možnosť oplatí.',
    date: '30. mája 2026', iso: '2026-05-30', readTime: '5 min čítania',
    content: `Keď sa rozhodnete pre nový web, narazíte na tri hlavné cesty: WordPress, Wix alebo web na mieru. Každá má svoje pre a proti — poďme si ich porovnať.\n\n## WordPress\n\nNajrozšírenejší systém na svete. Flexibilný, s množstvom rozšírení.\n\n- veľká flexibilita a rozšíriteľnosť\n- vyžaduje údržbu a aktualizácie\n- pri zlej konfigurácii býva pomalý\n\n## Wix\n\nJednoduchý nástroj typu "potiahni a pusť".\n\n- rýchly štart bez technických znalostí\n- obmedzené možnosti úprav a SEO\n- mesačné poplatky, web nie je úplne váš\n\n## Web na mieru\n\nWeb postavený presne pre vaše potreby.\n\n- maximálna rýchlosť a kontrola\n- optimalizovaný na SEO a konverzie\n- bez mesačných poplatkov za platformu\n\n## Čo si vybrať?\n\nPre malú firmu, ktorá chce rýchly, profesionálny web bez mesačných poplatkov a s dobrým SEO, býva najlepšou voľbou web na mieru. Wix sa hodí na rýchly osobný projekt, WordPress pre tých, čo chcú do webu sami zasahovať a nevadí im údržba.\n\n## Záver\n\nU nás dostanete web na mieru bez mesačných poplatkov, optimalizovaný na Google.`,
  },
  'lokalne-seo-slovensko': {
    title: 'Čo je to lokálne SEO a prečo na ňom záleží?',
    excerpt: 'Chcete, aby vás zákazníci našli hneď, ako vo vašom meste hľadajú vaše služby? Zistite, ako ovládnúť Google Mapy a premeniť vyhľadávania v okolí na zisk.',
    date: '10. júna 2026', iso: '2026-06-10', readTime: '7 min čítania',
    content: `Predstavte si situáciu: Pokazilo sa vám auto v Nitre, hľadáte zubára v Žiline alebo potrebujete urgentne architekta v Košiciach. Čo urobíte ako prvé? Vytiahnete smartfón a do Google naťukáte „oprava autoklimatizácie Nitra“ alebo „zubná klinika Žilina“.\n\nVýsledok, ktorý vám Google ponúkne, nerozhoduje len o tom, na aký odkaz kliknete. Rozhoduje o tom, komu v ten deň necháte svoje peniaze.\n\nPre slovenské firmy, ktoré pôsobia v konkrétnom regióne, meste či štvrti, už klasické SEO nestačí. Ak chcete, aby vás zákazníci našli presne v momente, keď potrebujú vaše služby, kľúčom k úspechu je lokálne SEO.\n\nV tomto detailnom sprievodcovi sa pozrieme na to, ako funguje lokálne vyhľadávanie na Slovensku, prečo samotná šablóna webu na tento boj nestačí a ako krok za krokom dominovať na lokálnom trhu.\n\n## Čo je to lokálne SEO a prečo na ňom záleží\n\nLokálne SEO (Local Search Engine Optimization) je proces optimalizácie vašej online prezentácie tak, aby sa vaša firma zobrazovala na popredných miestach vo výsledkoch vyhľadávania pre dopyty s lokálnym zámerom (local intent).\n\nGoogle dokáže v zlomku sekundy identifikovať, kde sa používateľ nachádza a prispôsobiť tomu výsledky. Ak zadáte výraz „reštaurácia“, Google vám neukáže najlepšiu reštauráciu v Bratislave, ak práve sedíte v Poprade.\n\nSila lokálneho vyhľadávania v číslach:\n\n- Až 46 % všetkých vyhľadávaní na Google má lokálny charakter.\n- 76 % ľudí, ktorí na smartfóne hľadajú niečo vo svojom okolí, navštívi súvisiacu firmu do 24 hodín.\n- Približne 28 % týchto lokálnych vyhľadávaní vyústi do okamžitého nákupu alebo objednávky služieb.\n\nPre slovenských podnikateľov to znamená jediné: Ak nie ste viditeľní na lokálnej úrovni, dobrovoľne odovzdávate zákazníkov konkurencii, ktorá je o dve ulice ďalej.\n\n## Svätý grál lokálneho vyhľadávania: Google Map Pack\n\nKeď zadáte lokálny dopyt, Google vám na samom vrchu zobrazí mapu a tri najrelevantnejšie lokálne firmy. Tento blok sa nazýva Google Map Pack (alebo Local 3-Pack).\n\nTento blok priťahuje až 40 – 60 % všetkých kliknutí na danej stránke výsledkov. Ak sa v ňom nenachádzate, pre obrovskú časť zákazníkov jednoducho neexistujete.\n\nAby ste sa do tohto prestížneho výberu dostali, musíte pochopiť tri hlavné piliere, podľa ktorých Google lokálne firmy hodnotí:\n\n- Relevancia (Relevance) – Ako presne vaša firma zodpovedá tomu, čo používateľ hľadá.\n- Vzdialenosť (Distance) – Ako ďaleko sa nachádza vaša prevádzka od polohy vyhľadávajúceho.\n- Významnosť (Prominence) – Aká známa a dôveryhodná je vaša firma na internete (hodnotenia, spätné odkazy, zmienky).\n\n## Prípadová štúdia: Ako lokálne SEO zachránilo rodinný autoservis\n\nPozrime sa na reálny príklad z našej praxe. Pán Milan vlastní rodinný autoservis v Poprade. Mal starší web postavený na bezplatnej šablóne, no väčšinu zákazníkov mal len z odporúčaní. Keď konkurencia v meste začala rásť, počet objednávok klesol.\n\nRozhodli sme sa kompletne preopačne postaviť jeho online stratégiu. Starý web sme nahradili rýchlym webom na mieru, kompletne sme prekopali jeho Google profil a zamerali sa na kľúčové slovo „oprava prevodoviek Poprad“ a „pneuservis Poprad“.\n\nVýsledok po 4 mesiacoch:\n\n- Nárast organickej návštevnosti webu: +115 %\n- Počet priamych telefonátov z Google Mapy: +140 % (priemerne 45 nových telefonátov mesačne navyše)\n- Obsadenosť servisu: Plno na 3 týždne dopredu.\n\nPán Milan nemusel investovať tisíce eur do celonárodnej reklamy. Stačilo, aby ho videli ľudia, ktorým práve v Poprade a okolí začalo hrkať v motore.\n\n## Strategický plán pre lokálne SEO na Slovensku\n\nÚspešné lokálne SEO nie je jednorazová záležitosť, ale skladačka z viacerých dôležitých komponentov. Poďme si ich rozobrať do detailu.\n\n1. Google Profil Moja Firma – Vaša druhá domovská stránka\n\nVytvorenie a dôkladná optimalizácia profilu na Google je absolútnym základom. Je to bezplatný nástroj, no väčšina slovenských firiem ho využíva len na 20 %.\n\n- Zadajte presný a konzistentný názov: Použite reálny názov firmy. Môžete pridať jedno hlavné kľúčové slovo (napr. „AutoServis XY Nitra – Oprava prevodoviek“), ale nepreháňajte to s prepchávaním kľúčových slov, inak riskujete penalizáciu od Google.\n- Vyberte správne kategórie: Primárna kategória musí presne definovať vašu hlavnú činnosť. Ak ste kaviareň, ktorá občas pečie torty na objednávku, vaša primárna kategória je „Kaviareň“, sekundárna „Cukrárstvo“.\n- Doplňte NAP údaje (Name, Address, Phone): Tieto údaje (Názov, Adresa, Telefón) musia byť stopercentne identické na Google profile, na vašom webe aj vo všetkých online katalógoch (napr. Azet, Zlaté Stránky). Ak máte na webe napísané „Trieda SNP 12“ a na Google „Tr. SNP 12“, roboty to môže zmiasť a zníži to vašu dôveryhodnosť.\n- Využívajte príspevky (Google Updates): Google umožňuje publikovať novinky, akcie a udalosti priamo do vášho profilu. Ukážte algoritmom aj ľuďom, že vaša firma žije.\n\n2. Sila recenzií: Sociálny dôkaz, ktorý predáva\n\nSlováci sú opatrní kupujúci. Predtým, než navštívia novú reštauráciu alebo zavolajú inštalatéra, pozrú si hodnotenia. Pre Google sú recenzie priamym signálom kvality.\n\n- Pýtajte si recenzie aktívne: Po dokončení zákazky pošlite klientovi SMS alebo e-mail s priamym odkazom na udelenie recenzie.\n- Odpovedajte na každú recenziu: Na pozitívne odpovedzte s poďakovaním (môžete jemne zakomponovať kľúčové slovo, napr. „Sme radi, že vám naša pizza v Trnave chutila“). Na negatívne odpovedzte profesionálne, konštruktívne a bez emócií. Google sleduje vašu interakciu.\n\n## On-Page SEO: Prečo krabicové weby zlyhávajú\n\nMnoho začínajúcich podnikateľov siahne po lacných platformách na prenájom webov s vizuálnymi šablónami. Na začiatok to môže stačiť, no akonáhle vstúpite do konkurenčného prostredia lokálneho SEO, narazíte na tvrdé limity.\n\nGoogle dnes odmeňuje technickú dokonalosť a hĺbku. Lokálne SEO si vyžaduje špecifickú architektúru webu, ktorú šablóny často nedokážu efektívne a rýchlo spracovať.\n\n- Rýchlosť načítania a Core Web Vitals: Lokálne vyhľadávania prebiehajú primárne na mobilných zariadeniach, často na cestách a pri slabšom pripojení. Krabicové riešenia so sebou nesú balastný kód, zbytočné pluginy a ťažké skripty, ktoré web spomaľujú. Web na mieru je čistý, optimalizovaný a načíta sa okamžite.\n- Lokálne pristávacie stránky (Location Pages): Ak pôsobíte vo viacerých mestách (napr. upratovací servis v Bratislave, Trnave a Nitre), nevytvárajte jednu spoločnú podstránku. Každé mesto si zaslúži vlastnú, unikátnu podstránku optimalizovanú na daný región (napr. /upratovanie-bratislava, /upratovanie-nitra). Tieto stránky nesmú byť iba skopírovaným textom – musia obsahovať lokálne referencie, mapu a špecifické recenzie.\n- Implementácia štruktúrovaných dát (LocalBusiness Schema Markup): Ide o špeciálny kód, ktorý bežný návštevník nevidí, ale vyhľadávacím robotom presne hovorí, kto ste a kde sídlite. Správna implementácia Schema Markup dokáže výrazne posunúť web v lokálnych výsledkoch smerom nahor. Pri webe na mieru vám programátor vloží čistý JSON-LD kód priamo do štruktúry stránky bez potreby inštalácie spomaľujúcich pluginov.\n\n## Citácie a budovanie lokálnej autority\n\nAby Google vedel, že ste na slovenskom internete dôležitým hráčom, potrebujete vidieť, že o vás hovoria iné lokálne autority. Budovanie spätných odkazov pre lokálne SEO má svoje špecifiká.\n\n- Národné katalógy firiem: Registrácia na portáloch Azet, Zoznam, Atlas, Firmy.sk alebo Zlaté Stránky slúži na budovanie základnej dôvery a NAP konzistencie.\n- Regionálne spravodajstvo: Spätné odkazy z webov ako Sme Regionálne, MyBratislava, Nitralive či Košice Online prinášajú obrovskú lokálnu autoritu a relevantný traffic z okolia.\n- Lokálne partnerstvá: Weby dodávateľov alebo lokálnych športových klubov, ktoré sponzorujete, sú zdrojom pre prirodzené a vysoko relevantné lokálne odkazy.\n- Tematické slovenské portály: Weby ako Modrá Strecha (pre stavebníctvo), Wilio alebo portály o gastronómii vám pomôžu targetovať na publikum s jasným nákupným zámerom.\n\nZlaté pravidlo lokálneho linkbuildingu hovorí, že je lepšie získať jeden kvalitný odkaz z regionálneho spravodajského portálu vo vašom meste, ako 20 odkazov z generických, nekvalitných PR webov bez reálnej návštevnosti.\n\n## Analýza kľúčových slov: Ako hľadajú slovenskí zákazníci?\n\nPri analýze kľúčových slov pre lokálny trh musíte kombinovať hlavnú službu s geografickými modifikátormi. Ľudia na Slovensku vyhľadávajú tromi základnými spôsobmi:\n\n- Služba + Mesto (Implicitná lokácia): „stavebná firma Trnava“, „kaderníctvo Banská Bystrica“.\n- Služba + Okolie (Explicitná lokácia v blízkosti): „reštaurácia v mojom okolí“, „odťahová služba blízko mňa“. Google tu využíva geolokáciu zariadenia.\n- Špecifická štvrť/región: „pneuservis Bratislava Ružinov“, „chata na prenájom Liptov“.\n\nPri tvorbe obsahu na web sa nezameriavajte len na vysoko konkurenčné výrazy. Vytvárajte obsah okolo takzvaných long-tail kľúčových slov (dlhšie, špecifickejšie frázy).\n\nNamiesto článku „Ako postaviť dom“ napíšte článok „Na čo si dať pozor pri vybavovaní stavebného povolenia v Trenčíne a okolí“. Získate síce o niečo menej zobrazení, ale oslovíte ľudí, ktorí hľadajú presne vás a sú pripravení nakúpiť.\n\n## Sledujte svoje výsledky: Čo merať v lokálnom SEO?\n\nInvestícia do lokálneho SEO a webu na mieru sa musí vrátiť. Aby ste vedeli, či vaše úsilie prináša ovocie, zamerajte sa na tieto kľúčové metriky:\n\n- Zobrazenia a kliknutia v Google Business Profile: Google vám v administrácii presne ukáže, koľko ľudí si pozrelo váš profil, koľko z nich kliklo na tlačidlo „Zatelefonovať“, koľko si vyžiadalo trasu autom do vašej prevádzky a koľko prešlo na váš web.\n- Pozície v lokálnom vyhľadávaní: Sledujte, ako sa posúvate nahor v Map Packu pre kľúčové slová naviazané na vaše mesto.\n- Lokálny organický traffic: V nástroji Google Analytics 4 (GA4) sledujte návštevnosť z organického vyhľadávania očistenú o návštevy z iných krajín alebo nerelevantných miest, ak dodávate služby len lokálne.\n\n## Záver\n\nDostať sa na prvé priečky v lokálnom vyhľadávaní na Slovensku si vyžaduje kombináciu troch vecí: technicky dokonalého webu na mieru, pravidelne optimalizovaného Google profilu a autentického obsahu, ktorý rieši reálne problémy ľudí vo vašom regióne.\n\nVýhodou lokálneho SEO je, že konkurencia na slovenskom trhu v mnohých regiónoch stále spí. Mnoho firiem sa spolieha na staré weby, nefunkčné profily alebo neoptimalizované šablóny. Ak sa do toho obujete profesionálne, výsledky v podobe nových telefonátov a objednávok na seba nenechajú dlho čakať.`,
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
    if (!m) { nodes.push(...boldSplit(remaining, key)); break; }
    const before = remaining.slice(0, m.index);
    if (before) nodes.push(...boldSplit(before, key));
    key += 100;
    const url = m[2];
    nodes.push(
      <Link key={`lnk-${key}`} to={url} style={{ color: '#2563EB', fontWeight: 600 }}>{m[1]}</Link>
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

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.iso,
    dateModified: post.iso,
    author: { '@type': 'Organization', name: 'WebKlienti' },
    publisher: {
      '@type': 'Organization',
      name: 'WebKlienti',
      logo: { '@type': 'ImageObject', url: 'https://www.webklienti.com/logo.webp' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.webklienti.com/blog/${slug}` },
  };

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", background: C.bg, minHeight: '100vh' }}>
      <Helmet>
        <title>{post.title} | WebKlienti</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://www.webklienti.com/blog/${slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={`https://www.webklienti.com/blog/${slug}`} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <style>{`* { box-sizing: border-box; margin: 0; padding: 0; }`}</style>

      <nav style={{ background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(8px)', borderBottom: `1px solid ${C.border}`, padding: '0 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 64, position: 'sticky', top: 0, zIndex: 100 }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src={logoImg} alt="WebKlienti logo" width="36" height="36" style={{ height: 36, width: 36, objectFit: 'contain', borderRadius: '50%' }} />
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
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: 24 }}>Hotový za 5 dní od 299 €. Bez mesačných poplatkov.</p>
          <Link to="/" style={{ background: '#fff', color: C.blue, padding: '12px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none', display: 'inline-block' }}>
            Objednať web →
          </Link>
        </div>
      </article>

      <footer style={{ background: C.dark, color: 'rgba(255,255,255,0.7)', textAlign: 'center', padding: '32px 24px', fontSize: 13 }}>
        <p>© {new Date().getFullYear()} Web Klienti · Všetky práva vyhradené</p>
      </footer>
    </div>
  );
}
