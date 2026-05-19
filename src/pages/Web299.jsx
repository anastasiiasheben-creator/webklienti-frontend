import { useState } from 'react';

const API = 'https://webklienti-backend.onrender.com';

const beforeImg = '/images/konturmont-before.jpg'; // Instagram screenshot
const afterImg = '/images/konturmont-after.jpg';   // Website screenshot

// ── TEXTS (SK default, can extend to CZ/EN) ──
const T = {
  badge: '✓ Odpoveď do 24 hodín · Bez záväzkov',
  heroTag: 'Webstránka pre malú firmu',
  heroTitle: 'Webstránka, ktorá\nprináša klientov',
  heroTitle2: 'za 299 €',
  heroSub: '87% zákazníkov hľadá firmy online.\nNájdu vás — alebo vašu konkurenciu?',
  heroCta: 'Získať nezáväznú ponuku →',
  heroTrust: ['✓ Hotová za 5 dní', '✓ Mobile friendly', '✓ SEO pripravená', '✓ Bez mesačných poplatkov'],
  whatTitle: 'Čo dostanete za 299 €',
  whatItems: [
    { icon: '🎨', title: 'Dizajn na mieru', desc: 'Moderný a profesionálny web presne pre váš biznis' },
    { icon: '📱', title: 'Mobile friendly', desc: 'Perfektne vyzerá na mobile, tablete aj PC' },
    { icon: '🔍', title: 'SEO základy', desc: 'Zákazníci vás nájdu na Google' },
    { icon: '📧', title: 'Kontaktný formulár', desc: 'Zákazníci vám píšu priamo z webu' },
    { icon: '📍', title: 'Google Maps', desc: 'Zobrazíte sa na mapách pri hľadaní' },
    { icon: '💼', title: 'Firemný email', desc: 'info@vásabiznis.sk — vyzerá profesionálne' },
  ],
  caseTitle: 'Príklad z praxe',
  caseName: 'Konturmont s.r.o.',
  caseTag: 'Výroba a montáž nábytku · Slovensko',
  caseBefore: 'Pred',
  caseAfter: 'Po',
  caseBeforeDesc: 'Len Instagram — 64 sledovateľov, žiadny web',
  caseAfterDesc: 'Profesionálny web s galériou a kontaktným formulárom',
  caseResult: '🎯 Prvé dopyty do 48 hodín od spustenia',
  caseLink: 'Pozrieť web →',
  stepsTitle: 'Ako to funguje',
  steps: [
    { num: '01', title: 'Kontaktujete nás', desc: 'Vyplníte krátky formulár — trvá 2 minúty.' },
    { num: '02', title: 'Dostanete návrh', desc: 'Do 24 hodín vám pošleme ukážku dizajnu.' },
    { num: '03', title: 'Spustíme web', desc: 'Za 5 dní máte hotovú webstránku online.' },
  ],
  reviewsTitle: 'Čo hovoria klienti',
  reviews: [
    { author: 'Marek Novák', company: 'Novák & syn s.r.o.', text: 'Web bol hotový za 5 dní presne podľa predstáv. Zákazníci píšu, že web vyzerá profesionálne.', rating: 5 },
    { author: 'Jana Kováčová', company: 'Kaderníctvo Jana', text: 'Konečne mám pekný web! Komunikácia bola super, cena výborná.', rating: 5 },
  ],
  formTitle: 'Získajte nezáväznú ponuku',
  formSub: 'Vyplňte formulár — ozveme sa do 24 hodín.',
  fieldName: 'Meno a priezvisko *',
  fieldEmail: 'Email *',
  fieldPhone: 'Telefón',
  fieldBiz: 'Čo robíte? (typ biznisu)',
  fieldMsg: 'Správa',
  fieldMsgPlaceholder: 'Napíšte čo potrebujete...',
  consentLabel: 'Súhlasím so spracovaním osobných údajov',
  consentError: 'Potvrďte súhlas so spracovaním údajov.',
  submitBtn: 'Odoslať ponuku →',
  submitting: 'Odosielam...',
  successTitle: 'Ďakujeme!',
  successMsg: 'Ozveme sa vám do 24 hodín.',
  errorMsg: '❌ Chyba. Skúste znova alebo nás kontaktujte priamo.',
  footerText: '© 2025 Web Klienti · info@webklienti.com · +421 907 890 600',
  urgency: '🔥 Aktuálne máme voľné miesto pre 2 klientov tento mesiac',
};

export default function Web299() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', biz: '', message: '', consent: false, package: 'One-page web — 299 €' });
  const [formStatus, setFormStatus] = useState('idle');

  const scrollToForm = () => document.getElementById('form299')?.scrollIntoView({ behavior: 'smooth' });

  const handleSubmit = async () => {
    if (!form.name || !form.email) {
      alert('Vyplňte meno a email.');
      return;
    }
    if (!form.consent) { alert(T.consentError); return; }
    setFormStatus('loading');
    try {
      const res = await fetch(`${API}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, lang: 'sk' }),
      });
      const data = await res.json();
      if (data.success) {
        setFormStatus('success');
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: 'form_submit_success' });
        setForm({ name: '', email: '', phone: '', biz: '', message: '', consent: false, package: 'One-page web — 299 €' });
      } else { setFormStatus('error'); }
    } catch { setFormStatus('error'); }
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: '#0f0f0f', color: '#f5f2eb', minHeight: '100vh' }}>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @media (max-width: 640px) {
          .what-grid { grid-template-columns: 1fr 1fr !important; }
          .steps-row { flex-direction: column !important; }
          .case-split { flex-direction: column !important; }
          .hero-title { font-size: 38px !important; }
          .reviews-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 400px) {
          .what-grid { grid-template-columns: 1fr !important; }
        }
        input:focus, textarea:focus, select:focus { border-color: #ffd200 !important; outline: none; }
        .btn-main { transition: transform 0.15s, box-shadow 0.15s; }
        .btn-main:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(255,210,0,0.3); }
      `}</style>

      {/* ── TOP BAR ── */}
      <div style={{ background: '#ffd200', padding: '10px 24px', textAlign: 'center' }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: '#1a1a1a', letterSpacing: 0.3 }}>{T.urgency}</span>
      </div>

      {/* ── MINIMAL HEADER ── */}
      <div style={{ padding: '20px 40px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontWeight: 800, fontSize: 18, color: '#f5f2eb' }}>Web<span style={{ color: '#ffd200' }}>Klienti</span></span>
        <a href="tel:+421907890600" style={{ color: '#ffd200', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>+421 907 890 600</a>
      </div>

      {/* ── HERO ── */}
      <div style={{ padding: '72px 24px 80px', textAlign: 'center', maxWidth: 720, margin: '0 auto', position: 'relative' }}>
        <div style={{ display: 'inline-block', background: 'rgba(255,210,0,0.1)', border: '1px solid rgba(255,210,0,0.25)', color: '#ffd200', padding: '6px 18px', borderRadius: 100, fontSize: 12, fontWeight: 600, marginBottom: 24, letterSpacing: 1, textTransform: 'uppercase' }}>{T.heroTag}</div>
        <h1 className="hero-title" style={{ fontSize: 'clamp(36px, 6vw, 68px)', fontWeight: 900, lineHeight: 1.08, letterSpacing: -2.5, marginBottom: 16, whiteSpace: 'pre-line' }}>
          {T.heroTitle}
        </h1>
        <div style={{ display: 'inline-block', background: '#ffd200', color: '#1a1a1a', fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 900, letterSpacing: -2, padding: '4px 24px', borderRadius: 12, marginBottom: 32 }}>{T.heroTitle2}</div>
        <p style={{ fontSize: 18, color: 'rgba(245,242,235,0.55)', lineHeight: 1.7, whiteSpace: 'pre-line', marginBottom: 40 }}>{T.heroSub}</p>
        <button className="btn-main" onClick={scrollToForm} style={{ background: '#ffd200', color: '#1a1a1a', border: 'none', padding: '18px 44px', borderRadius: 100, fontWeight: 800, fontSize: 18, cursor: 'pointer', display: 'inline-block', marginBottom: 32 }}>{T.heroCta}</button>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
          {T.heroTrust.map(b => (
            <span key={b} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '7px 16px', borderRadius: 100, fontSize: 13, color: 'rgba(245,242,235,0.6)', whiteSpace: 'nowrap' }}>{b}</span>
          ))}
        </div>
      </div>

      {/* ── WHAT YOU GET ── */}
      <div style={{ background: '#1a1a1a', padding: '72px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 900, letterSpacing: -1.5, textAlign: 'center', marginBottom: 48 }}>{T.whatTitle}</h2>
          <div className="what-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {T.whatItems.map(item => (
              <div key={item.title} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: '28px 24px' }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#f5f2eb', marginBottom: 6 }}>{item.title}</h3>
                <p style={{ fontSize: 13, color: 'rgba(245,242,235,0.45)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <button className="btn-main" onClick={scrollToForm} style={{ background: 'transparent', color: '#ffd200', border: '1.5px solid rgba(255,210,0,0.4)', padding: '14px 36px', borderRadius: 100, fontSize: 16, fontWeight: 700, cursor: 'pointer' }}>{T.heroCta}</button>
          </div>
        </div>
      </div>

      {/* ── CASE STUDY ── */}
      <div style={{ padding: '72px 24px', background: '#0f0f0f' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#666', marginBottom: 12, textAlign: 'center', fontWeight: 700 }}>{T.caseTitle}</p>
          <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 36px)', fontWeight: 900, letterSpacing: -1, textAlign: 'center', marginBottom: 8 }}>{T.caseName}</h2>
          <p style={{ textAlign: 'center', fontSize: 13, color: '#666', marginBottom: 40 }}>{T.caseTag}</p>

          {/* Before / After */}
          <div className="case-split" style={{ display: 'flex', gap: 16, marginBottom: 28 }}>
            <div style={{ flex: 1, borderRadius: 16, overflow: 'hidden', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 12, left: 12, zIndex: 2, background: '#e24b4a', color: '#fff', padding: '4px 12px', borderRadius: 100, fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>{T.caseBefore}</div>
              {/* Instagram mockup */}
              <div style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: '32px 24px', minHeight: 200, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28 }}>📷</div>
                <p style={{ fontSize: 14, fontWeight: 700, color: '#f5f2eb' }}>@konturmont</p>
                <div style={{ display: 'flex', gap: 20, fontSize: 13, color: 'rgba(245,242,235,0.4)' }}>
                  <span>15 príspevkov</span>
                  <span>64 sledovateľov</span>
                </div>
                <p style={{ fontSize: 12, color: 'rgba(245,242,235,0.3)', textAlign: 'center', marginTop: 4 }}>{T.caseBeforeDesc}</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', fontSize: 24, color: '#ffd200', fontWeight: 900, flexShrink: 0 }}>→</div>

            <div style={{ flex: 1, borderRadius: 16, overflow: 'hidden', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 12, left: 12, zIndex: 2, background: '#4ade80', color: '#1a1a1a', padding: '4px 12px', borderRadius: 100, fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>{T.caseAfter}</div>
              <div style={{ background: '#1a1a1a', border: '1px solid rgba(255,210,0,0.2)', borderRadius: 16, padding: '32px 24px', minHeight: 200, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(255,210,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28 }}>🌐</div>
                <p style={{ fontSize: 14, fontWeight: 700, color: '#ffd200' }}>konturmont.netlify.app</p>
                <div style={{ display: 'flex', gap: 20, fontSize: 13, color: 'rgba(245,242,235,0.4)' }}>
                  <span>150+ realizácií</span>
                  <span>Profesionálny web</span>
                </div>
                <p style={{ fontSize: 12, color: 'rgba(245,242,235,0.3)', textAlign: 'center', marginTop: 4 }}>{T.caseAfterDesc}</p>
              </div>
            </div>
          </div>

          <div style={{ background: 'rgba(255,210,0,0.08)', border: '1px solid rgba(255,210,0,0.2)', borderRadius: 16, padding: '20px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
            <span style={{ fontSize: 16, fontWeight: 700, color: '#ffd200' }}>{T.caseResult}</span>
            <a href="https://konturmont.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ color: '#ffd200', fontSize: 14, fontWeight: 600, textDecoration: 'none', border: '1px solid rgba(255,210,0,0.3)', padding: '8px 18px', borderRadius: 100 }}>{T.caseLink}</a>
          </div>
        </div>
      </div>

      {/* ── HOW IT WORKS ── */}
      <div style={{ background: '#1a1a1a', padding: '72px 24px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 900, letterSpacing: -1.5, textAlign: 'center', marginBottom: 48 }}>{T.stepsTitle}</h2>
          <div className="steps-row" style={{ display: 'flex', gap: 0, position: 'relative' }}>
            {T.steps.map((s, i) => (
              <div key={i} style={{ flex: 1, padding: '32px 28px', textAlign: 'center', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                <div style={{ fontSize: 48, fontWeight: 900, color: '#ffd200', opacity: 0.7, lineHeight: 1, marginBottom: 16 }}>{s.num}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#f5f2eb', marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: 'rgba(245,242,235,0.45)', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── REVIEWS ── */}
      <div style={{ padding: '72px 24px', background: '#0f0f0f' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 900, letterSpacing: -1.5, textAlign: 'center', marginBottom: 40 }}>{T.reviewsTitle}</h2>
          <div className="reviews-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {T.reviews.map((r, i) => (
              <div key={i} style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: '28px 24px' }}>
                <div style={{ color: '#ffd200', fontSize: 14, marginBottom: 12 }}>{'★'.repeat(r.rating)}</div>
                <p style={{ fontSize: 14, color: 'rgba(245,242,235,0.65)', lineHeight: 1.7, marginBottom: 20 }}>"{r.text}"</p>
                <p style={{ fontWeight: 700, color: '#f5f2eb', fontSize: 14 }}>{r.author}</p>
                <p style={{ fontSize: 12, color: '#666' }}>{r.company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FORM ── */}
      <div id="form299" style={{ padding: '72px 24px', background: '#1a1a1a' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 900, letterSpacing: -1.5, textAlign: 'center', marginBottom: 8 }}>{T.formTitle}</h2>
          <p style={{ textAlign: 'center', color: 'rgba(245,242,235,0.45)', fontSize: 15, marginBottom: 36 }}>{T.formSub}</p>

          {formStatus === 'success' ? (
            <div style={{ background: '#0f0f0f', border: '1px solid rgba(255,210,0,0.2)', borderRadius: 24, padding: '56px 40px', textAlign: 'center' }}>
              <div style={{ fontSize: 52, marginBottom: 16 }}>🎉</div>
              <h3 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, color: '#ffd200' }}>{T.successTitle}</h3>
              <p style={{ color: 'rgba(245,242,235,0.55)', fontSize: 15 }}>{T.successMsg}</p>
            </div>
          ) : (
            <div style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 24, padding: '40px 36px', display: 'flex', flexDirection: 'column', gap: 18 }}>
              {[
                { key: 'name', label: T.fieldName, type: 'text', placeholder: 'Ján Novák' },
                { key: 'email', label: T.fieldEmail, type: 'email', placeholder: 'jan@firma.sk' },
                { key: 'phone', label: T.fieldPhone, type: 'tel', placeholder: '+421 900 000 000' },
                { key: 'biz', label: T.fieldBiz, type: 'text', placeholder: 'napr. kaderníctvo, autoservis...' },
              ].map(f => (
                <div key={f.key}>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 8, color: 'rgba(245,242,235,0.6)' }}>{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder} value={form[f.key]} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))} style={{ width: '100%', padding: '13px 16px', background: '#1a1a1a', border: '1.5px solid rgba(255,255,255,0.12)', borderRadius: 12, fontSize: 15, color: '#f5f2eb', fontFamily: 'inherit', transition: 'border-color 0.2s' }} />
                </div>
              ))}
              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 8, color: 'rgba(245,242,235,0.6)' }}>{T.fieldMsg}</label>
                <textarea placeholder={T.fieldMsgPlaceholder} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} rows={3} style={{ width: '100%', padding: '13px 16px', background: '#1a1a1a', border: '1.5px solid rgba(255,255,255,0.12)', borderRadius: 12, fontSize: 15, color: '#f5f2eb', fontFamily: 'inherit', resize: 'vertical' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <input id="consent299" type="checkbox" checked={form.consent} onChange={e => setForm(p => ({ ...p, consent: e.target.checked }))} style={{ marginTop: 3, width: 16, height: 16, cursor: 'pointer', accentColor: '#ffd200', flexShrink: 0 }} />
                <label htmlFor="consent299" style={{ fontSize: 13, color: 'rgba(245,242,235,0.4)', lineHeight: 1.5, cursor: 'pointer' }}>{T.consentLabel} *</label>
              </div>
              {formStatus === 'error' && <p style={{ color: '#e24b4a', fontSize: 14 }}>{T.errorMsg}</p>}
              <button className="btn-main" onClick={handleSubmit} disabled={formStatus === 'loading' || !form.consent} style={{ background: form.consent ? '#ffd200' : 'rgba(255,210,0,0.2)', color: form.consent ? '#1a1a1a' : 'rgba(255,210,0,0.3)', border: 'none', padding: '17px', borderRadius: 100, fontSize: 17, fontWeight: 800, cursor: form.consent ? 'pointer' : 'not-allowed', transition: 'all 0.2s' }}>
                {formStatus === 'loading' ? T.submitting : T.submitBtn}
              </button>
              <p style={{ textAlign: 'center', fontSize: 12, color: 'rgba(245,242,235,0.25)' }}>Bez záväzkov · Odpoveď do 24 hodín · Bezplatná konzultácia</p>
            </div>
          )}
        </div>
      </div>

      {/* ── FOOTER ── */}
      <div style={{ padding: '28px 24px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <p style={{ fontSize: 13, color: 'rgba(245,242,235,0.25)' }}>{T.footerText}</p>
      </div>
    </div>
  );
}
