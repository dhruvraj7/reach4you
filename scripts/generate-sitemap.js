import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { BLOG_POSTS } from '../src/data/blogPosts.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const BASE_URL = 'https://reach4you.vercel.app';

const staticPages = [
  { path: '/', lastmod: '2026-08-01', changefreq: 'weekly', priority: '1.0' },
  { path: '/services', lastmod: '2026-08-01', changefreq: 'weekly', priority: '0.9' },
  { path: '/pricing', lastmod: '2026-08-01', changefreq: 'monthly', priority: '0.8' },
  { path: '/blog', lastmod: '2026-08-01', changefreq: 'weekly', priority: '0.8' },
  { path: '/contributor', lastmod: '2026-08-01', changefreq: 'monthly', priority: '0.7' },
  { path: '/about', lastmod: '2026-08-01', changefreq: 'monthly', priority: '0.7' },
  { path: '/contact', lastmod: '2026-08-01', changefreq: 'monthly', priority: '0.9' },
];

function formatDate(dateStr) {
  if (!dateStr) return '2026-08-01';
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return '2026-08-01';
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function generateSitemap() {
  const seenUrls = new Set();
  const urls = [];

  // Add static pages
  for (const page of staticPages) {
    const loc = `${BASE_URL}${page.path === '/' ? '/' : page.path}`;
    if (!seenUrls.has(loc)) {
      seenUrls.add(loc);
      urls.push({
        loc,
        lastmod: page.lastmod,
        changefreq: page.changefreq,
        priority: page.priority,
      });
    }
  }

  // Add blog posts
  for (const post of BLOG_POSTS) {
    const slug = post.slug || post.id;
    if (!slug) continue;
    const loc = `${BASE_URL}/blog/${slug}`;
    if (!seenUrls.has(loc)) {
      seenUrls.add(loc);
      urls.push({
        loc,
        lastmod: formatDate(post.publishDate),
        changefreq: 'monthly',
        priority: '0.7',
      });
    }
  }

  const xmlEntries = urls
    .map(
      (item) => `  <url>
    <loc>${item.loc}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
    )
    .join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries}
</urlset>
`;

  const publicPath = path.join(projectRoot, 'public', 'sitemap.xml');
  fs.writeFileSync(publicPath, sitemapXml, 'utf-8');
  console.log(`[sitemap] Successfully generated sitemap with ${urls.length} URLs at public/sitemap.xml`);

  const distDir = path.join(projectRoot, 'dist');
  if (fs.existsSync(distDir)) {
    const distPath = path.join(distDir, 'sitemap.xml');
    fs.writeFileSync(distPath, sitemapXml, 'utf-8');
    console.log(`[sitemap] Successfully updated dist/sitemap.xml`);
  }
}

// Execute if run directly via Node
if (process.argv[1] === __filename) {
  generateSitemap();
}
