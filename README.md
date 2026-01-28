# Portfolio Website

A modern developer portfolio showcasing professional experience, skills, projects, and certifications. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## About

This is a single-page portfolio website featuring:

- **Hero Section** - Landing area with name and role
- **About** - Professional introduction and background
- **Skills** - Technical skills and expertise
- **Experience** - Work history and achievements
- **Projects** - Featured projects and work samples
- **Certifications** - Professional certifications and credentials
- **Contact** - Connect via email and social links

The site features a clean, modern design with smooth animations and full responsive support.

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation & Running

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── not-found.tsx       # 404 page
│   └── globals.css         # Global styles
├── components/
│   ├── animations/         # Animation components
│   │   ├── FadeIn.tsx
│   │   └── StaggerContainer.tsx
│   └── sections/           # Page sections
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Experience.tsx
│       ├── Projects.tsx
│       ├── Certifications.tsx
│       ├── Contact.tsx
│       ├── Footer.tsx
│       └── Navigation.tsx
├── public/
│   └── images/             # Static assets
└── package.json
```

## Customization

### Updating Your Information

To personalize the portfolio with your information, update these files:

| Section | File | What to Update |
|---------|------|----------------|
| **Page Title & SEO** | `app/layout.tsx` | Site title, description, keywords, author metadata |
| **Hero** | `components/sections/Hero.tsx` | Your name, role/title, tagline |
| **About** | `components/sections/About.tsx` | Bio, introduction, professional focus areas |
| **Skills** | `components/sections/Skills.tsx` | Your technical skills, tools, and technologies |
| **Experience** | `components/sections/Experience.tsx` | Work history, job titles, dates, responsibilities |
| **Projects** | `components/sections/Projects.tsx` | Project names, descriptions, technologies, links |
| **Certifications** | `components/sections/Certifications.tsx` | Certificates, credentials, issue dates, links |
| **Contact** | `components/sections/Contact.tsx` | Email address, social media links (GitHub, LinkedIn, etc.) |

### Adding Images

Place your images in the `public/images/` directory:

- Profile photo: `public/images/profile.jpg`
- Project screenshots: `public/images/project-name.jpg`

Then reference them in components using `/images/filename.jpg`

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
