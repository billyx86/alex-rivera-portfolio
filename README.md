# Alex Rivera — Portfolio

A dark, refined personal portfolio for **Alex Rivera**, a full-stack / frontend-focused web developer.

**Repository:** https://github.com/billyx86/alex-rivera-portfolio  
**Instant demo (no build):** open [`docs/index.html`](./docs/index.html) in any browser — fully self-contained.

## Aesthetic

- Near-black charcoal base (`#0c0b0a`)
- Warm amber / copper accents (no purple-gradient cliché)
- **Instrument Serif** (display) + **DM Sans** (body) + **JetBrains Mono** (labels)
- Subtle grid + film grain, bento project cards, scroll reveals
- Mobile-first, works cleanly at ~390px

## Sections

1. Sticky nav + Hire me CTA  
2. Hero — pitch, availability, CTAs  
3. About + stats + abstract portrait  
4. Skills (Frontend / Backend / Tools)  
5. Featured projects (bento grid)  
6. Experience timeline  
7. Contact form (client-side toast) + socials  
8. Footer  

## Two ways to run

### A. Static (zero install)

```bash
# open the single-file demo
open docs/index.html
# or serve it
cd docs && python3 -m http.server 8080 --bind 0.0.0.0
```

### B. Full React / TanStack Start app

```bash
npm install
sh startup.sh          # idempotent dev server on 0.0.0.0:8080
npm run typecheck
npm run build
```

## Stack (React app)

- React 19 · TypeScript · Vite  
- TanStack Start / Router  
- Tailwind CSS v4  
- Lucide · Sonner  
- Nitro (Vercel preset, build-only)

## Layout

```
docs/index.html   # polished static single-file portfolio
src/
  components/     # Nav, Hero, About, Skills, Projects, Experience, Contact, Footer
  lib/            # content data + cn()
  routes/         # TanStack file routes
  styles.css      # Tailwind v4 theme + utilities
vite.config.ts    # 0.0.0.0:8080, nitro only on build
startup.sh
```
