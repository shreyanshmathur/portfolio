# Shreyansh Mathur — Portfolio

Personal portfolio website for Shreyansh Mathur, Strategy Associate at PwC India. Built to target consulting roles across strategy, AI transformation, and GCC operating model design.

**Live site:** [shreyanshmathur.netlify.app](https://shreyanshmathur.netlify.app) *(deploy via Netlify)*

---

## Stack

- **React 18** + **Vite 5**
- **React Router v6** (HashRouter for static deployment)
- **CSS** — no UI framework, fully custom
- **Google Fonts** — Cormorant Garamond, Barlow Condensed, Jost, Space Mono

## Pages

| Route | Page |
|---|---|
| `/` | Home — hero, ticker, featured engagements, identity strip |
| `/about` | About — story, headshot, dual identity, certifications |
| `/experience` | Experience — 5-role timeline with metrics |
| `/projects` | Projects — 7 consulting tools and client deliverables |
| `/skills` | Skills — 4 competency areas with animated bars |
| `/contact` | Contact — channels, form, availability |

## Design

- Dark editorial palette (`#05050C` base, `#C9943A` gold)
- Ghost watermark typography on every page hero
- Intersection Observer scroll-reveal animations
- Animated skill bars, horizontal marquee tickers, asymmetric card grids
- Fully responsive down to 375px

## Local Development

```bash
npm install
npm run dev
```

Runs at `http://localhost:5173`

## Deployment

Netlify config is included (`netlify.toml`). To deploy:

1. Push to GitHub
2. Connect repo on [netlify.com](https://netlify.com)
3. Build command: `npm run build` — Publish directory: `dist`
4. Netlify auto-deploys on every push to `master`

## Contact

**Shreyansh Mathur**
- Email: shreyanshmathur12@gmail.com
- LinkedIn: [linkedin.com/in/shreyanshmathur](https://www.linkedin.com/in/shreyanshmathur)
- GitHub: [github.com/shreyanshmathur](https://github.com/shreyanshmathur)
