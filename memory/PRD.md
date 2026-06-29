# PRD — Anil Kumar Patnana | DevOps Portfolio

## Original Problem Statement
Build a single-page portfolio website for **Anil Kumar Patnana**, a DevOps Engineer specialising in AWS, Docker, Kubernetes, Jenkins, Terraform and Linux. Sections required: Hero, About Me, Featured Projects, Testimonials, Contact. Contact CTA: "Get In Touch" → mailto. LinkedIn link in footer.

## User Choices (Dec 2025)
- Design: **Dark, terminal/code-inspired** (developer aesthetic)
- Contact: **mailto:** to `anilkumarpatnana555@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/patnana-anil-kumar-662191182`
- Projects: realistic DevOps sample projects (user can edit)
- Testimonials: placeholder testimonials (user can edit)

## Architecture
- Frontend: React 19 + Tailwind + lucide-react. No backend, no database, no API calls.
- Single route `/` → `Home` page that composes section components.
- Files:
  - `/app/frontend/src/pages/Home.jsx`
  - `/app/frontend/src/components/Navigation.jsx`
  - `/app/frontend/src/components/Hero.jsx`
  - `/app/frontend/src/components/TechMarquee.jsx`
  - `/app/frontend/src/components/About.jsx`
  - `/app/frontend/src/components/Projects.jsx`
  - `/app/frontend/src/components/Testimonials.jsx`
  - `/app/frontend/src/components/Contact.jsx`
  - `/app/frontend/src/components/Footer.jsx`

## Design System
- Palette: `#0A0E17` bg, `#111827` surface, `#1E293B` border, `#10B981` primary (terminal green), `#38BDF8` secondary (cloud cyan).
- Type: Outfit (sans), JetBrains Mono (mono).
- Motifs: macOS terminal window, code editor (about.yaml), server log (testimonials), control room grid (projects), grid background + radial glows.

## Implemented (Dec 2025)
- Sticky glass-blur Navigation with mobile menu
- Hero: terminal window + typewriter, headline, stats grid, dual CTA
- Tech marquee (infinite scroll)
- About: YAML code editor card + narrative + 4 highlight tiles
- Projects: 4 cards (CI/CD, IaC, K8s, Monitoring) with tags and metrics
- Testimonials: terminal log-style entries (3 placeholders)
- Contact: terminal CTA with mailto + LinkedIn buttons + plain text contact lines
- Footer with email and LinkedIn icons
- 100% frontend test pass

## Backlog / Next Action Items
- P1: Replace placeholder testimonials with real ones (names, roles, photos optional)
- P1: Replace sample projects with user's real project links (case_study + source URLs)
- P2: Add a resume/CV download button in Hero or Contact
- P2: Add a Skills/Certifications section (AWS certs, badges)
- P2: Add blog / writing section if user wants to share posts
- P3: Server-side contact form (Resend/SendGrid) instead of mailto
- P3: Light/dark theme toggle
