// Po `react-scripts build` vytvorí pre každú stránku vlastný HTML súbor
// (title, description, canonical, H1 a text), aby ich videli aj vyhľadávače
// bez JavaScriptu. React tento obsah po načítaní nahradí.
const fs = require('fs');
const path = require('path');
const { parse } = require('@babel/parser');

const SITE = 'https://www.webklienti.com';
const ROOT = path.join(__dirname, '..');
const BUILD = path.join(ROOT, 'build');
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// --- dáta článkov: iba literály z objektov, bez spúšťania kódu ---
function literal(node) {
  if (node.type === 'StringLiteral') return node.value;
  if (node.type === 'TemplateLiteral' && node.expressions.length === 0) return node.quasis[0].value.cooked;
  return undefined;
}

function postFromObject(obj) {
  const post = {};
  for (const prop of obj.properties) {
    if (prop.type !== 'ObjectProperty') continue;
    const key = prop.key.name || prop.key.value;
    const value = literal(prop.value);
    if (value !== undefined) post[key] = value;
  }
  return post;
}

function findDeclaration(source, name) {
  const ast = parse(source, { sourceType: 'module', plugins: ['jsx'] });
  let found;
  (function walk(node) {
    if (found || !node || typeof node.type !== 'string') return;
    if (node.type === 'VariableDeclarator' && node.id.name === name) { found = node.init; return; }
    for (const key of Object.keys(node)) {
      const child = node[key];
      if (Array.isArray(child)) child.forEach(walk);
      else if (child && typeof child.type === 'string') walk(child);
    }
  })(ast.program);
  if (!found) throw new Error(`prerender: nenašiel som "${name}"`);
  return found;
}

const posts = [];
for (const prop of findDeclaration(read('src/pages/BlogPost.jsx'), 'posts').properties) {
  if (prop.type !== 'ObjectProperty') continue;
  posts.push({ slug: prop.key.value || prop.key.name, ...postFromObject(prop.value) });
}
for (const el of findDeclaration(read('src/lib/newBlogPosts.js'), 'newBlogPosts').elements) {
  posts.push(postFromObject(el));
}

// --- jednoduchý prevod markdownu (rovnaké prvky ako renderContent v BlogPost.jsx) ---
function inline(text) {
  return esc(text)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}

function markdown(content) {
  const out = [];
  let list = null;
  const closeList = () => { if (list) { out.push(`<ul>${list.join('')}</ul>`); list = null; } };
  for (const raw of content.split('\n')) {
    const line = raw.trim();
    if (line.startsWith('- ')) { (list = list || []).push(`<li>${inline(line.slice(2))}</li>`); continue; }
    closeList();
    if (!line) continue;
    if (line.startsWith('### ')) out.push(`<h3>${inline(line.slice(4))}</h3>`);
    else if (line.startsWith('## ')) out.push(`<h2>${inline(line.slice(3))}</h2>`);
    else out.push(`<p>${inline(line)}</p>`);
  }
  closeList();
  return out.join('\n');
}

// --- statické stránky: meta údaje z Helmetu v ich komponentoch ---
function helmetMeta(file) {
  const src = read(file);
  return {
    title: src.match(/<title>([^<{]+)<\/title>/)[1].trim(),
    description: src.match(/<meta name="description" content="([^"]+)"/)[1],
  };
}

const shell = (body) =>
  `<div style="font-family:Inter,-apple-system,sans-serif;max-width:720px;margin:0 auto;padding:64px 16px;color:#0f172a;line-height:1.6">` +
  `<p><a href="/">WebKlienti</a> · <a href="/blog">Blog</a></p>${body}</div>`;

const pages = [];

const blog = helmetMeta('src/pages/Blog.jsx');
pages.push({
  route: '/blog',
  ...blog,
  body: shell(
    `<h1>Blog</h1><p>${esc(blog.description)}</p><ul>` +
      posts.map((p) => `<li><a href="/blog/${p.slug}">${esc(p.title)}</a></li>`).join('') +
      `</ul>`
  ),
});

for (const [route, file] of [['/web-149', 'src/pages/Web149.jsx'], ['/privacy', 'src/pages/Privacy.jsx']]) {
  const meta = helmetMeta(file);
  pages.push({
    route,
    ...meta,
    body: shell(`<h1>${esc(meta.title.replace(/\s*\|\s*WebKlienti$/, ''))}</h1><p>${esc(meta.description)}</p>`),
  });
}

for (const p of posts) {
  pages.push({
    route: `/blog/${p.slug}`,
    title: p.metaTitle || `${p.title} | WebKlienti`,
    description: p.excerpt,
    ogTitle: p.title,
    article: true,
    body: shell(
      `<article><p>${esc(p.date)} · ${esc(p.readTime)}</p><h1>${esc(p.title)}</h1>\n${markdown(p.content)}</article>`
    ),
  });
}

// staré adresy článkov presmerujú na nové (inak by po pravidle /blog/:slug skončili na 404)
const legacySlugs = findDeclaration(read('src/pages/BlogPost.jsx'), 'legacySlugs').properties.map((prop) => [
  prop.key.value || prop.key.name,
  literal(prop.value),
]);
for (const [from, to] of legacySlugs) {
  const target = pages.find((p) => p.route === `/blog/${to}`);
  pages.push({ ...target, route: `/blog/${from}`, canonicalRoute: target.route, redirect: true });
}

// --- zápis ---
const template = fs.readFileSync(path.join(BUILD, 'index.html'), 'utf8');

function render(page) {
  const url = SITE + (page.canonicalRoute || page.route);
  const ogTitle = page.ogTitle || page.title.replace(/\s*\|\s*WebKlienti$/, '');
  const replacements = [
    [/<title>[^<]*<\/title>/, `<title>${esc(page.title)}</title>`],
    [/<meta name="description" content="[^"]*"/, `<meta name="description" content="${esc(page.description)}"`],
    [/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${url}"`],
    [/<link rel="alternate" hreflang="sk" href="[^"]*"/, `<link rel="alternate" hreflang="sk" href="${url}"`],
    [/<link rel="alternate" hreflang="x-default" href="[^"]*"/, `<link rel="alternate" hreflang="x-default" href="${url}"`],
    [/<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${url}"`],
    [/<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${esc(ogTitle)}"`],
    [/<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${esc(page.description)}"`],
    [/<meta name="twitter:title" content="[^"]*"/, `<meta name="twitter:title" content="${esc(ogTitle)}"`],
    [/<meta name="twitter:description" content="[^"]*"/, `<meta name="twitter:description" content="${esc(page.description)}"`],
    [/<div id="root">[\s\S]*?<\/div>\s*<\/div>\s*(?=<\/body>)/, `<div id="root">${page.body}</div>`],
  ];
  if (page.article) replacements.push([/<meta property="og:type" content="[^"]*"/, '<meta property="og:type" content="article"']);
  if (page.redirect) replacements.push([/<title>/, `<meta http-equiv="refresh" content="0; url=${page.canonicalRoute}"><title>`]);

  let html = template;
  for (const [pattern, value] of replacements) {
    if (!pattern.test(html)) throw new Error(`prerender: v index.html chýba ${pattern}`);
    html = html.replace(pattern, () => value);
  }
  return html;
}

for (const page of pages) {
  const dir = path.join(BUILD, page.route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), render(page));
}
console.log(`prerender: ${pages.length} stránok`);
