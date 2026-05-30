export const C = {
  blue: '#2563EB',
  blueHover: '#1D4ED8',
  blueShadow: '0 8px 20px rgba(37,99,235,0.25)',
  green: '#22C55E',          // OK for icons/accents/backgrounds
  greenText: '#15803D',      // use this when green is TEXT on light bg (≥4.5:1)
  orange: '#C2410C',         // darkened from #F97316 — now passes AA on white (4.8:1)
  orangeBright: '#F97316',   // keep bright orange for backgrounds/buttons only, NOT text
  red: '#DC2626',            // darkened from #EF4444 for better text contrast
  bg: '#F9FAFB',
  white: '#FFFFFF',
  border: '#E5E7EB',
  text: '#111827',
  textSub: '#4B5563',        // darkened from #6B7280 — now 7:1 on white (was 4.0:1, failed)
  dark: '#0F172A',
};
export const API = process.env.REACT_APP_API_URL || 'https://webklienti-backend.onrender.com';
export const NAV_IDS = ['pricing', 'reviews', 'faq', 'footer'];
