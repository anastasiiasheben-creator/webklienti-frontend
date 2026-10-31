// Po builde na Renderi oznámi Bingu (a ďalším vyhľadávačom cez IndexNow) stránky,
// ktoré majú v sitemap.xml lastmod z posledných 3 dní. Chyba siete build nezastaví.
const fs = require('fs');
const path = require('path');

const KEY = '0334155b739ee79d1d6d520e99047ad3'; // súbor public/<KEY>.txt
const HOST = 'www.webklienti.com';
const DAYS = 3;

async function main() {
  if (!process.env.RENDER) {
    console.log('indexnow: preskočené (nie je to build na Renderi)');
    return;
  }

  const sitemap = fs.readFileSync(path.join(__dirname, '..', 'public', 'sitemap.xml'), 'utf8');
  const since = Date.now() - DAYS * 24 * 60 * 60 * 1000;
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)]
    .filter(([, , lastmod]) => new Date(lastmod).getTime() >= since)
    .map(([, loc]) => loc);

  if (urls.length === 0) {
    console.log('indexnow: žiadne nové ani zmenené stránky');
    return;
  }

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls }),
  });
  console.log(`indexnow: ${urls.length} URL, odpoveď ${res.status}`);
}

main().catch((err) => console.log(`indexnow: chyba ${err.message}`));
