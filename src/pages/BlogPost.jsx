import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
 
const C = {
  blue: '#2563EB', bg: '#F9FAFB', white: '#FFFFFF',
  border: '#E5E7EB', text: '#111827', textSub: '#4B5563', dark: '#0F172A',
};

const posts = {
  'preco-kazda-mala-firma-potrebuje-web': {
    title: 'Prečo dnes každá malá firma potrebuje web?',
    excerpt: '87 % zákazníkov hľadá firmy online. Ak nie ste na internete, prichádzate o zákazníkov v prospech konkurencie.',
    date: '12. februára 2025', iso: '2025-02-12', readTime: '4 min čítania',
    content: `Každý deň ľudia vo vašom okolí hľadajú služby, ktoré ponúkate. Ak však nemáte web, väčšina z nich skončí u konkurencie...`,
  },
  // ... ostatné príspevky z tvojho zoznamu
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts[slug];

  if (!post) return <div>Príspevok sa nenašiel.</div>;

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
      { '@type': 'ListItem', position: 1, name: 'Domov', item: 'https://www.webklienti.com/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.webklienti.com/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://www.webklienti.com/blog/${slug}` },
    ],
  };

  return (
    <div style={{ background: C.bg, minHeight: '100vh', color: C.text }}>
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

      {/* Tu nasleduje zvyšok tvojho komponentu (renderovanie obsahu článku...) */}

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
};

export default BlogPost;
