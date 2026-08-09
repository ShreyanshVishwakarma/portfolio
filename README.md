# Shreyansh Vishwakarma — Portfolio

My personal portfolio and resume website, built with Next.js 16, TypeScript, and Tailwind CSS v4.

It features an animated hero, a bento "about" grid, quick links, a project gallery, an experience timeline, a contact page, and a password-protected résumé page — all designed to feel fast, polished, and a little extra.

## ✨ Highlights

- **Animated hero:** Fuzzy and pressure-reactive name, shimmer availability line, and quick CTAs.
- **Bento overview:** Quick links, current status, education, stats, and tech stack in a responsive grid.
- **Project gallery:** Production projects (SQLBuddy, CTF Platform, JustChatting, and more) with live demo and source links.
- **Timeline:** Journey from first code to national CTF organizer.
- **Contact & résumé:** A `/contact` page with all ways to reach me, plus a `/resume` page that requests your email before sharing the résumé.

## 🚀 Quick start

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000). Edits inside `app/` trigger instant refreshes.

## 🔧 Customizing (make it yours)

This site is built by **Shreyansh Vishwakarma**, and the content is intentionally **hardcoded** — no CMS, no database.

The easiest way to make it yours: **ask your LLM to replace the hardcoded values.** All personal data lives in a few obvious places:

- `app/page.tsx` — name, subtitle, `quickLinks`, `workProjects`, `labProjects`, `timelineEvents`, `stats`, and `contactLinks`.
- `app/contact/page.tsx` — your emails and social links.
- `app/globals.css` — theme colors and fonts.
- `app/icon.svg` — the favicon.

Swap in your own projects, links, and story, then redeploy. Everything else just works.

## 📄 Helpful scripts

```bash
npm run dev     # Start local development
npm run build   # Generate production build
npm run start   # Serve production build
npm run lint    # Run ESLint
```

## ☁️ Deploying

Deploy to [Vercel](https://vercel.com/) or any Next.js host. It's production-ready — connect your repo and you're live.
