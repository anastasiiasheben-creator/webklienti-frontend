import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Statické značky z prerenderovaného HTML odstránime – každá stránka si ich vloží cez Helmet,
// inak by boli v hlavičke dvakrát (Bing to hlási ako chybu).
document.head
  .querySelectorAll('title, meta[name="description"], link[rel="canonical"]')
  .forEach((el) => el.remove());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();
