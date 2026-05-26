import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import logoImg from '../assets/logo.webp';

const C = {
  blue: '#2563EB', bg: '#F9FAFB', white: '#FFFFFF',
  border: '#E5E7EB', text: '#111827', textSub: '#6B7280', dark: '#0F172A',
};

export default function Privacy() {
  return (
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", background: C.bg, minHeight: '100vh' }}>
      <Helmet>
        <title>Ochrana osobných údajov | WebKlienti</title>
        <meta name="description" content="Zásady ochrany osobných údajov WebKlienti." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.webklienti.com/privacy" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>

      <style>{`* { box-sizing: border-box; margin: 0; padding: 0; }`}</style>

      <nav style={{ background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(8px)', borderBottom: `1px solid ${C.border}`, padding: '0 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 64, position: 'sticky', top: 0, zIndex: 100 }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src={logoImg} alt="WebKlienti logo" style={{ height: 36, width: 36, objectFit: 'contain', borderRadius: '50%' }} />
          <span style={{ fontWeight: 700, fontSize: 18, color: C.text }}>Web<span style={{ color: C.blue }}>Klienti</span></span>
        </Link>
        <Link to="/" style={{ color: C.textSub, textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>← Späť na hlavnú</Link>
      </nav>

      <div style={{ maxWidth: 760, margin: '0 auto', padding: '64px 40px' }}>
        <h1 style={{ fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 700, letterSpacing: '-0.02em', color: C.text, marginBottom: 8 }}>
          Zásady ochrany osobných údajov
        </h1>
        <p style={{ fontSize: 14, color: C.textSub, marginBottom: 48 }}>Platné od 1. januára 2025 | WebKlienti – Ing. Anastasiia Sheben</p>

        {[
          { num: '1.', title: 'Prevádzkovateľ', content: (<><p>Prevádzkovateľom webovej stránky www.webklienti.com je:</p><p style={{ marginTop: 12 }}><strong>Ing. Anastasiia Sheben – WebKlienti</strong><br />Ulica Mozartova 5652/12, 917 08 Trnava, Slovenská republika<br />IČO: 56360495 · DIČ: 1087134598<br />E-mail: <a href="mailto:info@webklienti.com" style={{ color: C.blue }}>info@webklienti.com</a><br />Tel.: <a href="tel:+421907890600" style={{ color: C.blue }}>+421 907 890 600</a></p></>) },
          { num: '2.', title: 'Aké údaje zbierame', content: (<><p>Pri vyplnení objednávkového formulára zbierame:</p><ul style={{ paddingLeft: 24, marginTop: 12 }}>{['Meno a priezvisko', 'E-mailovú adresu', 'Telefónne číslo', 'Informácie o požadovanej službe'].map(i => <li key={i} style={{ marginBottom: 6 }}>{i}</li>)}</ul></>) },
          { num: '3.', title: 'Účel spracovania', content: (<><p>Vaše osobné údaje spracúvame výlučne za účelom:</p><ul style={{ paddingLeft: 24, marginTop: 12 }}>{['Odpovedania na váš dopyt a zaslania cenovej ponuky', 'Plnenia zmluvného vzťahu (ak dôjde k uzavretiu zmluvy)', 'Vedenia účtovnej evidencie v zmysle zákona č. 431/2002 Z. z.'].map(i => <li key={i} style={{ marginBottom: 6 }}>{i}</li>)}</ul></>) },
          { num: '4.', title: 'Právny základ', content: <p>Spracovanie je nevyhnutné na splnenie predzmluvných opatrení (čl. 6 ods. 1 písm. b) GDPR) a na základe vášho súhlasu (čl. 6 ods. 1 písm. a) GDPR).</p> },
          { num: '5.', title: 'Uchovávanie údajov', content: <p>Vaše osobné údaje uchovávame po dobu trvania zmluvného vzťahu a 5 rokov po jeho ukončení v súlade so zákonom č. 431/2002 Z. z. o účtovníctve.</p> },
          { num: '6.', title: 'Vaše práva', content: (<><p>Máte právo:</p><ul style={{ paddingLeft: 24, marginTop: 12 }}>{['Požiadať o prístup k svojim osobným údajom', 'Požiadať o opravu alebo vymazanie údajov', 'Namietať proti spracovaniu', 'Požiadať o prenosnosť údajov', 'Podať sťažnosť na Úrad na ochranu osobných údajov SR (www.uoou.sk)'].map(i => <li key={i} style={{ marginBottom: 6 }}>{i}</li>)}</ul><p style={{ marginTop: 12 }}>Žiadosti posielajte na: <a href="mailto:info@webklienti.com" style={{ color: C.blue, fontWeight: 600 }}>info@webklienti.com</a></p></>) },
          { num: '7.', title: 'Cookies', content: (<><p>Naša stránka používa nasledovné typy cookies:</p><ul style={{ paddingLeft: 24, marginTop: 12 }}><li style={{ marginBottom: 6 }}><strong>Nevyhnutné cookies</strong> – zabezpečujú základné funkcie stránky.</li><li style={{ marginBottom: 6 }}><strong>Analytické cookies (voliteľné)</strong> – Google Analytics, ak ste dali súhlas.</li></ul></>) },
          { num: '8.', title: 'Tretie strany', content: <p>Vaše údaje nepredávame ani neposkytujeme tretím stranám za komerčným účelom.</p> },
          { num: '9.', title: 'Zmeny zásad', content: <p>Tieto zásady môžeme priebežne aktualizovať. Aktuálna verzia je vždy dostupná na tejto stránke.</p> },
        ].map((section, i, arr) => (
          <div key={i} style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: C.text, marginBottom: 14, display: 'flex', alignItems: 'baseline', gap: 8 }}>
              <span style={{ color: C.blue }}>{section.num}</span> {section.title}
            </h2>
            <div style={{ fontSize: 15, color: C.textSub, lineHeight: 1.8 }}>{section.content}</div>
            {i < arr.length - 1 && <div style={{ height: 1, background: C.border, marginTop: 40 }} />}
          </div>
        ))}
      </div>

      <footer style={{ background: C.dark, color: 'rgba(255,255,255,0.4)', textAlign: 'center', padding: '32px 24px', fontSize: 13 }}>
        <p>© 2025 Web Klienti · Ing. Anastasiia Sheben · Trnava · Slovensko</p>
      </footer>
    </div>
  );
}
