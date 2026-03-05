/**
 * Generate sitemap.xml at build time
 */
import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'
import { ROUTES, SITE_URL } from '../src/lib/site-config'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outPath = join(__dirname, '../public/sitemap.xml')

const now = new Date().toISOString().split('T')[0]

const urls = ROUTES.map(
  (r) => `  <url>
    <loc>${SITE_URL}${r.path === '/' ? '' : r.path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${r.path === '/' ? '1.0' : '0.8'}</priority>
  </url>`
).join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

writeFileSync(outPath, sitemap, 'utf-8')
console.log('sitemap.xml generated')
