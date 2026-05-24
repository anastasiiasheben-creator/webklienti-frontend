import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import logoImg from '../assets/logo.webp';

export default function Privacy() {
  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: '#f5f2eb', minHeight: '100vh' }}>

      <Helmet>
        <title>Ochrana osobných údajov | WebKlienti</title>
        <meta name="description" content="Zásady ochrany osobných údajov WebKlienti. Informácie o spracovaní vašich údajov." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.webklienti.com/privacy" />
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

      {/* OBSAH */}
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '80px 40px' }}>
        <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 900, letterSpacing: -1, color: '#1a1a1a', marginBottom: 8 }}>
          Zásady ochrany osobných údajov
        </h1>
        <p style={{ fontSize: 14, color: '#888', marginBottom: 56 }}>Platné od 1. januára 2025 | WebKlienti – Ing. Anastasiia Sheben</p>

        {[
          {
            num: '1.',
            title: 'Prevádzkovateľ',
            content: (
              <>
                <p>Prevádzkovateľom webovej stránky www.webklienti.com je:</p>
                <p style={{ marginTop: 12 }}>
                  <strong>Ing. Anastasiia Sheben – WebKlienti</strong><br />
                  Ulica Mozartova 5652/12, 917 08 Trnava, Slovenská republika<br />
                  IČO: 56360495 · DIČ: 1087134598<br />
                  E-mail: <a href="mailto:info@webklienti.com" style={{ color: '#1a1a1a' }}>info@webklienti.com</a><br />
                  Tel.: <a href="tel:+421907890600" style={{ color: '#1a1a1a' }}>+421 907 890 600</a>
                </p>
              </>
            ),
          },
          {
            num: '2.',
            title: 'Aké údaje zbierame',
            content: (
              <>
                <p>Pri vyplnení objednávkového formulára zbierame:</p>
                <ul style={{ paddingLeft: 24, marginTop: 12 }}>
                  {['Meno a priezvisko', 'E-mailovú adresu', 'Telefónne číslo', 'Informácie o požadovanej službe'].map(i => (
                    <li key={i} style={{ marginBottom: 6 }}>{i}</li>
                  ))}
                </ul>
              </>
            ),
          },
          {
            num: '3.',
            title: 'Účel spracovania',
            content: (
              <>
                <p>Vaše osobné údaje spracúvame výlučne za účelom:</p>
                <ul style={{ paddingLeft: 24, marginTop: 12 }}>
                  {[
                    'Odpovedania na váš dopyt a zaslania cenovej ponuky',
                    'Plnenia zmluvného vzťahu (ak dôjde k uzavretiu zmluvy)',
                    'Vedenia účtovnej evidencie v zmysle zákona č. 431/2002 Z. z.',
                  ].map(i => (
                    <li key={i} style={{ marginBottom: 6 }}>{i}</li>
                  ))}
                </ul>
              </>
            ),
          },
          {
            num: '4.',
            title: 'Právny základ',
            content: (
              <p>Spracovanie je nevyhnutné na splnenie predzmluvných opatrení (čl. 6 ods. 1 písm. b) GDPR) a na základe vášho súhlasu (čl. 6 ods. 1 písm. a) GDPR).</p>
            ),
          },
          {
            num: '5.',
            title: 'Uchovávanie údajov',
            content: (
              <p>Vaše osobné údaje uchovávame po dobu trvania zmluvného vzťahu a 5 rokov po jeho ukončení v súlade so zákonom č. 431/2002 Z. z. o účtovníctve.</p>
            ),
          },
          {
            num: '6.',
            title: 'Vaše práva',
            content: (
              <>
                <p>Máte právo:</p>
                <ul style={{ paddingLeft: 24, marginTop: 12 }}>
                  {[
                    'Požiadať o prístup k svojim osobným údajom',
                    'Požiadať o opravu alebo vymazanie údajov',
                    'Namietať proti spracovaniu',
                    'Požiadať o prenosnosť údajov',
                    'Podať sťažnosť na Úrad na ochranu osobných údajov SR (www.uoou.sk)',
                  ].map(i => (
                    <li key={i} style={{ marginBottom: 6 }}>{i}</li>
                  ))}
                </ul>
                <p style={{ marginTop: 12 }}>Žiadosti posielajte na: <a href="mailto:info@webklienti.com" style={{ color: '#1a1a1a', fontWeight: 600 }}>info@webklienti.com</a></p>
              </>
            ),
          },
          {
            num: '7.',
            title: 'Cookies',
            content: (
              <>
                <p>Naša stránka používa nasledovné typy cookies:</p>
                <ul style={{ paddingLeft: 24, marginTop: 12 }}>
                  <li style={{ marginBottom: 6 }}><strong>Nevyhnutné cookies</strong> – zabezpečujú základné funkcie stránky.</li>
                  <li style={{ marginBottom: 6 }}><strong>Analytické cookies (voliteľné)</strong> – Google Analytics, ak ste dali súhlas.</li>
                </ul>
              </>
            ),
          },
          {
            num: '8.',
            title: 'Tretie strany',
            content: (
              <p>Vaše údaje nepredávame ani neposkytujeme tretím stranám za komerčným účelom.</p>
            ),
          },
          {
            num: '9.',
            title: 'Zmeny zásad',
            content: (
              <p>Tieto zásady môžeme priebežne aktualizovať. Aktuálna verzia je vždy dostupná na tejto stránke.</p>
            ),
          },
        ].map((section, i) => (
          <div key={i} style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 20, fontWeight: 800, color: '#1a1a1a', marginBottom: 16, display: 'flex', alignItems: 'baseline', gap: 10 }}>
              <span style={{ color: '#ffd200' }}>{section.num}</span> {section.title}
            </h2>
            <div style={{ fontSize: 15, color: '#555', lineHeight: 1.8 }}>
              {section.content}
            </div>
            {i < 8 && <div style={{ height: 1, background: '#e5e5e5', marginTop: 48 }} />}
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <footer style={{ background: '#1a1a1a', color: 'rgba(245,242,235,0.4)', textAlign: 'center', padding: '32px 40px', fontSize: 13 }}>
        <p>© 2025 Web Klienti · Ing. Anastasiia Sheben · Trnava · Slovensko</p>
      </footer>
    </div>
  );
}
