# Portfolio Website Design

**Date:** 2026-01-28
**Project:** Personal Portfolio - Software Developer
**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion

## Overview

A technical, developer-focused portfolio website with a Supabase-inspired aesthetic (dark theme with green accents). The site showcases projects, skills, experience, and contact information with smooth animations and a terminal/code-inspired design.

## Architecture & Tech Stack

### Core Framework
- **Next.js 15** with App Router
- **React 19** with Server Components for optimal performance
- **TypeScript** for type safety
- **Static Site Generation (SSG)** for blazing fast load times

### Styling & Animation
- **Tailwind CSS** for utility-first styling
- **Custom design system** inspired by Supabase (dark backgrounds, green accents)
- **Framer Motion** for smooth scroll animations and hover effects
- **CSS Grid and Flexbox** for responsive layouts

### Content Management
- **MDX files** for projects (easy to update, supports code blocks)
- **Structured data in TypeScript** for skills and experience
- **Local file-based content** (no CMS needed)

### Performance Optimizations
- Next.js Image component for optimized images
- Font optimization with next/font
- Static generation for instant page loads
- Metadata API for SEO

### Development Tools
- ESLint + Prettier for code quality
- Git for version control
- Vercel for deployment (automatic previews and production deploys)

## Visual Design

### Color Palette (Supabase-inspired)
- **Background:** Deep black (#000000) and dark gray (#0a0a0a)
- **Primary accent:** Supabase green (#3ECF8E)
- **Secondary:** Darker green (#2aa06a) for hover states
- **Text:** White (#ffffff) and gray variations (#a0a0a0, #666666)
- **Code blocks:** Terminal-style with syntax highlighting

### Typography
- **Headings:** Mono-style font (JetBrains Mono or Fira Code) for technical feel
- **Body:** Clean sans-serif (Inter or system fonts) for readability
- **Code snippets:** Monospace font with proper syntax highlighting

### Key Components

1. **Navigation Bar**
   - Sticky header with logo/name
   - Section links
   - Subtle glass morphism effect

2. **Hero Section**
   - Large terminal-style introduction
   - Typing animation
   - Animated grid background

3. **About Section**
   - Brief bio with photo
   - Fade-in animations on scroll

4. **Skills/Tech Stack**
   - Icon grid with hover effects
   - Show proficiency levels

5. **Experience Timeline**
   - Vertical timeline
   - Company logos and descriptions

6. **Projects Grid**
   - Card-based layout
   - Hover effects revealing tech stack and links
   - Grid layout with thumbnails and brief descriptions

7. **Contact Section**
   - Simple form or contact links
   - Green accent CTAs

8. **Footer**
   - Social links
   - Built with Next.js badge

### Animation Strategy
- Scroll-triggered fade-ins and slide-ups (Framer Motion)
- Hover effects on cards (scale, glow, border animations)
- Smooth page transitions
- Subtle background grid animation
- Terminal cursor blink effect in hero

## Data Flow & Content Structure

### Folder Structure
```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with fonts, metadata
│   ├── page.tsx            # Home page (all sections)
│   ├── globals.css         # Tailwind + custom CSS
│   └── api/                # Optional contact form API route
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── sections/           # Page sections (Hero, About, etc.)
│   └── animations/         # Framer Motion wrappers
├── content/
│   ├── projects/           # MDX files for each project
│   ├── experience.ts       # Experience data
│   └── skills.ts           # Skills/tech stack data
├── public/
│   ├── images/             # Project screenshots, profile photo
│   └── icons/              # Tech stack icons
└── lib/
    ├── mdx.ts              # MDX parsing utilities
    └── utils.ts            # Helper functions
```

### Content Flow
1. **Projects** - MDX files with frontmatter (title, description, tech, links, image)
2. **Skills** - TypeScript array with categories (languages, frameworks, tools)
3. **Experience** - TypeScript array with company, role, duration, responsibilities
4. **Static Assets** - Optimized images in public folder

### Data Loading Pattern
- Server Components fetch and parse MDX at build time
- Type-safe interfaces for all content
- No client-side data fetching (everything pre-rendered)
- RSS feed generation for blog potential later

### SEO & Metadata
- Dynamic metadata generation per page
- OpenGraph images for social sharing
- Structured data (JSON-LD) for rich snippets
- Sitemap generation

## Accessibility, Error Handling & Testing

### Accessibility (A11y)
- Semantic HTML elements (nav, main, section, article)
- ARIA labels for interactive elements
- Keyboard navigation support (focus states with green outline)
- Screen reader friendly (alt text, proper heading hierarchy)
- Color contrast meeting WCAG AA standards
- Reduced motion support for users with vestibular disorders

### Error Handling
- 404 page with terminal-style "command not found" aesthetic
- Error boundaries for graceful component failures
- Form validation with helpful error messages (if contact form added)
- Image fallbacks for missing project screenshots
- Graceful degradation if JavaScript disabled

### Performance Targets
- Lighthouse score: 95+ in all categories
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- Total bundle size: < 200KB (before images)

### Testing Strategy
- Type checking with TypeScript (compile-time errors)
- ESLint for code quality and consistency
- Manual testing across devices/browsers
- Lighthouse CI for performance monitoring
- Optional: Playwright for E2E testing later

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive (320px to 4K displays)
- Progressive enhancement approach

## Implementation Priorities

### Phase 1: Foundation
1. Set up Next.js project with TypeScript
2. Configure Tailwind CSS with custom green theme
3. Set up project structure (folders, basic components)
4. Implement root layout with fonts and metadata

### Phase 2: Core Sections
1. Hero section with animations
2. About section
3. Skills/Tech Stack section
4. Experience timeline
5. Projects grid with MDX support

### Phase 3: Polish
1. Navigation and footer
2. Contact section
3. Animations and interactions
4. 404 page
5. Performance optimization

### Phase 4: Deployment
1. Final testing and accessibility audit
2. Deploy to Vercel
3. Set up custom domain (if applicable)
4. Monitor performance metrics

## Success Criteria

- ✅ Fast load times (Lighthouse 95+ across all metrics)
- ✅ Responsive design (works on all screen sizes)
- ✅ Accessible (WCAG AA compliant)
- ✅ Maintainable (easy to add/update projects)
- ✅ Professional technical aesthetic
- ✅ Smooth animations that enhance UX
- ✅ SEO optimized for discoverability
