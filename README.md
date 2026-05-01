# CodingCup Labs — Official Website

> A structural, honest, and high-performance digital environment for the modern agency, CodingCup Labs.

## Table of Contents
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [Local Development Setup](#local-development-setup)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
  - [GitHub Actions Setup](#github-actions-setup)
  - [GitHub Pages Configuration](#github-pages-configuration)
  - [Custom Domain (Optional)](#custom-domain-optional)
- [Adding Blog Posts](#adding-blog-posts)
- [Adding Projects](#adding-projects)
- [Environment & Configuration](#environment--configuration)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

### Tech Stack
- Astro v4
- Vanilla CSS (Custom Properties)
- MDX
- GitHub Actions
- GitHub Pages

### Project Structure
```text
/
├── .github/
│   └── workflows/
│       └── deploy.yml          ← GitHub Actions deployment pipeline
├── Design/                     ← EXISTING — do not touch. Contains original design tokens
├── public/                     ← Static assets copied to dist without processing
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/             ← Reusable Astro UI components
│   │   ├── BlogCard.astro
│   │   ├── CTAButton.astro
│   │   ├── Footer.astro
│   │   ├── HeroSection.astro
│   │   ├── Navbar.astro
│   │   ├── ProjectCard.astro
│   │   └── ServiceCard.astro
│   ├── content/                ← Content collections definition and markdown content
│   │   ├── config.ts
│   │   └── blog/               ← Blog posts
│   ├── layouts/
│   │   └── BaseLayout.astro    ← HTML shell, SEO, fonts, global styles
│   ├── pages/                  ← Astro page routes
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── index.astro
│   │   ├── projects.astro
│   │   ├── services.astro
│   │   └── blog/
│   │       ├── index.astro
│   │       └── [...slug].astro
│   └── styles/
│       └── global.css          ← All CSS variables from /Design tokens
├── astro.config.mjs            ← Astro configuration
├── package.json
└── tsconfig.json
```

### Design System
All design tokens and specs live in `/Design` (exported from Stitch). The styles are strictly mapped to CSS variables in `src/styles/global.css` adhering to a Minimal Neobrutalism aesthetic.

### Local Development Setup

Prerequisites:
  - Node.js >= 18.17.1 (recommend using nvm)
  - npm >= 9.x
  - Git

Steps:
  1. Clone the repository
     `git clone https://github.com/s-saanvi/CCLABS.git`
     `cd CCLABS`
  2. Install dependencies
     `npm install`
  3. Start the development server
     `npx astro dev`
  4. Open in browser
     `http://localhost:4321`
  5. (Optional) Preview production build locally
     `npx astro build`
     `npx astro preview`

Available scripts:
  - `npm run dev`       → Start dev server with HMR
  - `npm run build`     → Build static site to /dist
  - `npm run preview`   → Preview /dist locally
  - `npm run astro`     → Run Astro CLI commands

### Building for Production
Running `npm run build` will generate an optimized, fully static site inside the `/dist` directory. This is the output that gets deployed to production.

### Deployment

#### GitHub Actions Setup
1. Ensure `.github/workflows/deploy.yml` exists.
2. Push to the `main` branch — the workflow triggers automatically.
3. Monitor the build at: https://github.com/s-saanvi/CCLABS/actions
4. Every push to `main` → auto build + deploy (no manual steps needed).
5. Manual trigger: Actions tab → "Deploy to GitHub Pages" → "Run workflow" button.

#### GitHub Pages Configuration
**Note: You MUST enable GitHub Pages in your repo settings for the Action to work.**
1. Go to your repo on GitHub
2. Click **Settings** (top nav)
3. Click **Pages** (left sidebar, under "Code and automation")
4. Under "Build and deployment" → Source → select **"GitHub Actions"**
5. Save. The first deploy will be triggered on the next push to `main`.
6. After deploy, site is live at: https://s-saanvi.github.io/CCLABS/

#### Custom Domain (Optional)
1. In Settings → Pages → Custom domain → enter your domain
2. Add a `CNAME` file to `/public/CNAME` containing your domain
3. Configure DNS with your registrar (A records or CNAME)
4. Remove the `base: '/CCLABS'` from `astro.config.mjs`
5. Update `site:` in `astro.config.mjs` to your custom domain

### Adding Blog Posts
Blog posts use Astro Content Collections. Create a new `.md` file in `src/content/blog/`.

```markdown
---
title: "Your Post Title"
description: "A short description."
pubDate: 2024-05-10
author: "CodingCup Labs"
tags: ["tech", "design"]
draft: false
---
Your markdown content goes here.
```
*Note: Setting `draft: true` hides the post from the listing.*

### Adding Projects
Currently, projects are defined in an array inside `src/pages/projects.astro`. To add a new one, just add a new object to the `projects` array:
```javascript
{
  title: 'New Project Name',
  category: 'Web Design',
  description: 'Project description here.',
  link: 'https://example.com',
}
```

### Environment & Configuration
The only required configuration is in `astro.config.mjs` ensuring the `site` and `base` match your deployment URL. No `.env` file is required since it's a completely static site.

### Troubleshooting
- **"Page not found" on GitHub Pages** → check `base` in `astro.config.mjs` matches the repo name.
- **Fonts not loading** → check Google Fonts `<link>` in `BaseLayout.astro`.
- **Build fails in CI** → check Node version matches (must be >=18.17.1).
- **CSS variables not applying** → check `global.css` is imported in `BaseLayout`.
- **Images/Links not working** → ensure all static paths use `import.meta.env.BASE_URL` or use Astro's native asset routing.
- **GitHub Actions not triggering** → check branch name is exactly "main".

### Contributing
Create a feature branch, make your changes, run tests locally, and submit a Pull Request.

### License
MIT License — CodingCup Labs 2024
