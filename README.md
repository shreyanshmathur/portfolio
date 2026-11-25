# Shreyansh Mathur · portfolio

Personal site for Shreyansh Mathur, Consultant at EY (previously TrueFan AI and PwC).

React 18 + Vite, hash routing, deployed on Netlify (`npm run build`, publish `dist`).

## Where things live
- `src/data/content.js`: every fact shown on the site. Edit facts here only.
- `src/components/Graphics.jsx`: the charts and diagrams (career timeline, account growth, Bajaj Finance engine flow, delivery model, sector grid).
- `src/pages/`: Home, TrueFan (case study), Experience, About, Contact.
- `index.html` `<noscript>` block and `public/llms.txt`: plain-text copy for crawlers. Keep them in sync with `content.js`.

## Run locally
```
npm install
npm run dev
```
