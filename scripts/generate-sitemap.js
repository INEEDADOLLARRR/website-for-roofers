/**
 * Sitemap Generator
 * Run: node scripts/generate-sitemap.js
 * Generates sitemap.xml in the dist/ folder after build
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://gorrocinoroofing.com';
const CONTENT_DIR = path.resolve(__dirname, '../content/blog');
const DIST_DIR = path.resolve(__dirname, '../dist');

function generateSitemap() {
    const today = new Date().toISOString().split('T')[0];

    const staticPages = [
        { url: '/', priority: '1.0', changefreq: 'weekly', lastmod: today },
        { url: '/about', priority: '0.8', changefreq: 'monthly', lastmod: today },
        { url: '/portfolio', priority: '0.9', changefreq: 'weekly', lastmod: today },
    ];

    const allPages = [...staticPages];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    // Write to dist/
    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR, { recursive: true });
    }
    fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), xml, 'utf-8');

    console.log(`✅ Sitemap generated with ${allPages.length} URLs`);
    allPages.forEach(p => console.log(`   ${SITE_URL}${p.url}`));
}

generateSitemap();
