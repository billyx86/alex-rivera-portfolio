# Alex Rivera — Portfolio

A dark, refined personal portfolio for **Alex Rivera**, a full-stack / frontend-focused web developer.

**Live repo:** https://github.com/billyx86/alex-rivera-portfolio

## Aesthetic

- Near-black charcoal base (`#0c0b0a`)
- Warm amber / copper accents (not purple gradient slop)
- **Instrument Serif** for display type + **DM Sans** body + **JetBrains Mono** labels
- Subtle grid + grain texture, bento project cards, scroll reveals

## Sections

1. Sticky nav + CTA  
2. Hero with pitch and CTAs  
3. About + stats + abstract portrait  
4. Skills (Frontend / Backend / Tools)  
5. Featured projects (bento grid)  
6. Experience timeline  
7. Contact form (client-side + sonner toast) + socials  
8. Footer  

## Stack

- React 19 · TypeScript · Vite  
- TanStack Start / Router  
- Tailwind CSS v4  
- Lucide · Sonner  
- Nitro (Vercel preset, build-only)

## Commands

```bash
npm install
sh startup.sh          # idempotent dev server on 0.0.0.0:8080
npm run typecheck
npm run build
```

## Project layout

```
src/
  components/   # Nav, Hero, About, Skills, Projects, Experience, Contact, Footer
  lib/          # content data + cn()
  routes/       # TanStack file routes
  styles.css    # Tailwind v4 theme + utilities
vite.config.ts  # 0.0.0.0:8080, nitro only on build
startup.sh
```
