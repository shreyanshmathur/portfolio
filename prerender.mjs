// Renders every route to static HTML so crawlers and AI tools can read the
// full content without running JavaScript.
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const SITE = 'https://shreyanshportfolioconsultant.netlify.app'
const dist = path.resolve('dist')
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const { render } = await import(pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href)

const routes = [
  { url: '/', title: 'Shreyansh Mathur · Strategy & Delivery', desc: 'Shreyansh Mathur led a 60-member delivery team across 11 enterprise accounts at TrueFan AI and helped close a ₹12 Cr a year Bajaj Finance contract. Previously Strategy Associate at PwC.' },
  { url: '/experience', title: 'Experience · Shreyansh Mathur', desc: 'Roles at TrueFan AI (Project Delivery Manager), PwC (Strategy Associate, Advisory Intern), BelleVidCo (Co-Founder & CEO) and Recover Media (Marketing Team Lead).' },
  { url: '/about', title: 'About · Shreyansh Mathur', desc: 'Education at VIT (B.Tech, Computer Science), capabilities, certifications and university sponsorship roles.' },
  { url: '/contact', title: 'Contact · Shreyansh Mathur', desc: 'Contact Shreyansh Mathur by email or LinkedIn. Based in Gurgaon, India.' },
]

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

for (const r of routes) {
  const html = render(r.url)
  const canonical = SITE + (r.url === '/' ? '/' : r.url)
  let page = template
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    .replace(/<title>.*?<\/title>/, `<title>${esc(r.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(r.desc)}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(r.title)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(r.desc)}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${canonical}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${canonical}$2`)
  const outDir = r.url === '/' ? dist : path.join(dist, r.url.slice(1))
  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(path.join(outDir, 'index.html'), page)
  console.log('prerendered', r.url, Math.round(page.length / 1024) + ' KB')
}
fs.rmSync(path.resolve('dist-ssr'), { recursive: true, force: true })
