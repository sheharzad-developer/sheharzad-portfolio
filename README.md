# Sheharzad Salahuddin — Portfolio

Personal portfolio site built with Next.js, React, and Tailwind CSS. Showcases experience, skills, selected projects, and certifications, with a contact section linking to email, WhatsApp, Calendly, LinkedIn, and GitHub.

## Sections

- **Hero** — intro, rotating taglines, and quick stats
- **About** — background and how I work
- **Skills** — tech stack grouped by category, browsable as a carousel
- **Projects** — selected work with live/code links
- **Certifications** — courses and credentials with verify links
- **Contact** — WhatsApp, Calendly, email, and phone

## Tech stack

- [Next.js](https://nextjs.org) (App Router, Turbopack)
- React 19 + TypeScript
- Tailwind CSS v4
- [Embla Carousel](https://www.embla-carousel.com/) for the Skills/Projects/Certifications sliders
- [Lucide](https://lucide.dev/) icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

Content (profile info, skills, projects, certifications) lives in `src/lib/data.ts` — edit that file to update the site.

## Scripts

- `npm run dev` — start the local dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint

## Deployment

Deploys cleanly to [Vercel](https://vercel.com/new) or any Node host that supports Next.js.
