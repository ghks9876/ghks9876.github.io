# Jeonghwan Kim — Research Homepage

Single-page academic homepage for Jeonghwan Kim. The site presents research
interests, education, publications, patents, software, projects, professional
service, skills, and contact information.

Live site: <https://ghks9876.github.io/>

## Local development

Requires Node.js 22.13 or later.

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm run build
```

## GitHub Pages

The public files served from the repository root are generated from the app:

```bash
npm run build:pages
```

The main page is implemented in `app/page.tsx`, with its visual system in
`app/globals.css` and page metadata in `app/layout.tsx`.
