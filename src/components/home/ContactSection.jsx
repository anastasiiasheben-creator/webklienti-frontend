import { Link } from 'react-router-dom';
import { C } from '../../lib/constants';

export default function ContactSection({ t, lang, form, setForm, formStatus, setFormStatus, consentError, setConsentError, onSubmit }) {
  return (
    <div id="contact" style={{ background: C.bg, padding: '96px 40px 140px' }}>
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        <p className="section-label">{t.formLabel}</p>
        <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: 12 }}>{t.formTitle}</h2>
        <p style={{ color: C.textSub, marginBottom: 40, fontSize: 16, lineHeight: 1.6 }}>{t.formSub}</p>
        {formStatus === 'success' ? (
          <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 16, padding: '52px 32px', textAlign: 'center' }}>
            <div style={{ fontSize: 48, marginBottom: 14 }}>🎉</div>
            <h3 style={{ fontSize: 26, fontWeight: 700, marginBottom: 10 }}>{t.successTitle}</h3>
            <p style={{ color: C.textSub, fontSize: 15 }}>{t.successMsg}</p>
            <button onClick={() => setFormStatus('idle')} className="btn-primary" style={{ marginTop: 28 }}>{t.newOrder}</button>
          </div>
        ) : (
          <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 16, padding: '40px 36px', display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Standard fields */}
            {t.fields.map(f => (
              <div key={f.key}>
                <label htmlFor={`field-${f.key}`} style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 8, color: C.text }}>{f.label}</label>
                <input
                  id={`field-${f.key}`} type={f.type} placeholder={f.placeholder}
                  value={form[f.key]} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                  style={{ width: '100%', padding: '12px 16px', border: `1.5px solid ${C.border}`, borderRadius: 10, fontSize: 15, color: C.text, background: C.white }}
                />
              </div>
            ))}
            {/* Website URL */}
            <div>
              <label htmlFor="field-website" style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 8, color: C.text }}>
                {lang === 'en' ? 'Do you already have a website?' : 'Máte už web?'}
                <span style={{ fontSize: 12, color: C.textSub, fontWeight: 400, marginLeft: 6 }}>
                  ({lang === 'en' ? 'optional' : 'nepovinné — ak áno, zadajte URL'})
                </span>
              </label>
              <input
                id="field-website" type="url" placeholder="https://vasafirma.sk"
                value={form.website} onChange={e => setForm(p => ({ ...p, website: e.target.value }))}
                style={{ width: '100%', padding: '12px 16px', border: `1.5px solid ${C.border}`, borderRadius: 10, fontSize: 15, color: C.text, background: C.white }}
              />
            </div>
            {/* Intent cards */}
            <div>
              <p style={{ fontSize: 14, fontWeight: 600, marginBottom: 4, color: C.text }}>{t.intentLabel}</p>
              <p style={{ fontSize: 13, color: C.textSub, marginBottom: 12 }}>{t.intentNote}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {t.intentCards.map((card) => {
                  const selected = form.package === card.value;
                  return (
                    <button
                      key={card.value}
                      type="button"
                      onClick={() => setForm(p => ({ ...p, package: card.value }))}
                      style={{
                        width: '100%', textAlign: 'left', padding: '14px 16px',
                        border: selected ? `2px solid ${C.blue}` : `1.5px solid ${C.border}`,
                        borderRadius: 12, cursor: 'pointer', fontFamily: 'Inter, sans-serif',
                        background: selected ? 'rgba(37,99,235,0.04)' : C.white,
                        transition: 'all .15s',
                        boxShadow: selected ? `0 0 0 3px rgba(37,99,235,0.08)` : 'none',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
                            <span style={{ fontSize: 15, fontWeight: 700, color: selected ? C.blue : C.text }}>{card.intent}</span>
                            {card.badge && (
                              <span style={{ fontSize: 11, fontWeight: 700, background: C.blue, color: '#fff', padding: '2px 8px', borderRadius: 999 }}>{card.badge}</span>
                            )}
                          </div>
                          <span style={{ fontSize: 13, color: C.textSub, lineHeight: 1.4, display: 'block' }}>{card.sub}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
                          <span style={{ fontSize: 15, fontWeight: 700, color: selected ? C.blue : C.text }}>{card.price}</span>
                          <div style={{ width: 20, height: 20, borderRadius: '50%', flexShrink: 0, border: selected ? `6px solid ${C.blue}` : `2px solid ${C.border}`, background: C.white, transition: 'all .15s' }} />
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
            {/* Message */}
            <div>
              <label htmlFor="field-message" style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 8, color: C.text }}>{t.messageLabel}</label>
              <textarea
                id="field-message" placeholder={t.messagePlaceholder}
                value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} rows={4}
                style={{ width: '100%', padding: '12px 16px', border: `1.5px solid ${C.border}`, borderRadius: 10, fontSize: 15, color: C.text, background: C.white, resize: 'vertical' }}
              />
            </div>
            {formStatus === 'error' && <p style={{ color: C.red, fontSize: 14 }} role="alert">{t.errorMsg}</p>}
            {/* Consent */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
              <input
                id="field-consent" type="checkbox" checked={form.consent}
                onChange={e => { setForm(p => ({ ...p, consent: e.target.checked })); setConsentError(false); }}
                style={{ marginTop: 3, width: 18, height: 18, cursor: 'pointer', accentColor: C.blue, flexShrink: 0 }}
              />
              <label htmlFor="field-consent" style={{ fontSize: 13, color: C.textSub, lineHeight: 1.5, cursor: 'pointer' }}>
                {t.consentLabel}{' '}
                <Link to="/privacy" target="_blank" rel="noopener noreferrer" style={{ color: C.blue, fontSize: 13, fontWeight: 600 }}>
                  {t.consentLink}
                </Link>{' *'}
              </label>
            </div>
            {consentError && <p style={{ color: C.red, fontSize: 13 }}>⚠️ {t.consentError}</p>}
            {/* Trust bullets */}
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              {[
                '✓ ' + (lang === 'en' ? 'First draft free' : 'Návrh zdarma'),
                '✓ ' + (lang === 'en' ? 'Reply in 24h' : lang === 'cz' ? 'Odpovíme do 24h' : 'Odpovieme do 24h'),
                '✓ ' + (lang === 'en' ? 'No commitment' : lang === 'cz' ? 'Bez závazku' : 'Bez záväzku'),
              ].map(b => <span key={b} style={{ fontSize: 13, color: C.textSub, fontWeight: 500 }}>{b}</span>)}
            </div>
            {/* Submit */}
            <button
              onClick={onSubmit} disabled={formStatus === 'loading'} className="btn-primary"
              style={{ width: '100%', opacity: formStatus === 'loading' ? 0.7 : 1, fontSize: 16 }}
            >
              {formStatus === 'loading' ? t.submitting : t.submitBtn}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
