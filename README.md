# Developer Portfolio Starter

A polished developer portfolio scaffold built with Next.js 16, TypeScript, and Tailwind CSS v4. It ships with the essential sections you need to tell your story, showcase projects, and invite new collaborations.

## ✨ Highlights

- **Hero & narrative:** Clear positioning, availability badge, and quick CTAs.
- **About & skills:** Ready-made copy structure with editable bullet points and a responsive skills grid.
- **Experience timeline:** Card layout for roles, impact statements, and career context.
- **Project gallery:** Highlight three featured projects with stack chips and outbound links.
- **Contact CTA:** Gradient call-to-action with customizable social links.

## 🚀 Quick start

Install dependencies and launch the local dev server:

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the site. Edits to files inside `app/` trigger instant refreshes.

## 🔧 Customizing

- Update personal details, sections, and data objects in `app/page.tsx` (look for the `navItems`, `stats`, `experience`, `projects`, and `contactLinks` constants).
- Adjust global typography or tokens in `app/globals.css`.
- Drop assets like logos or screenshots into `public/` and reference them with Next.js `<Image />`.
- Replace `your.name`, social handles, and URLs with your real information before deploying.

## 📦 Tech stack

- [Next.js 16](https://nextjs.org/) App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/) (PostCSS-only setup)
- [Geist](https://vercel.com/font) font family via `next/font`

## 📄 Helpful scripts

```bash
npm run dev     # Start local development
npm run build   # Generate production build
npm run start   # Serve production build
npm run lint    # Run ESLint
```

## ☁️ Deploying

Deploy effortlessly to [Vercel](https://vercel.com/) or your hosting provider of choice. The project is production-ready out of the box—just add environment variables (if any) and connect your repository.
# portfolio
