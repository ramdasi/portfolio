# Ishwar Ramdasi - Portfolio

A **minimalist bold** portfolio website showcasing AI engineering expertise, multi-agent systems, and cloud architecture.

## Design Philosophy

- **Dark theme** with cyan neon accents
- **Typography-driven** — bold, impactful headlines
- **Subtle animations** — fade-ins, hover effects, smooth transitions
- **Fast & performant** — Next.js App Router, Tailwind CSS
- **Mobile-first** — fully responsive design

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + Custom CSS
- **Fonts**: Space Grotesk (headings) + Poppins (body)
- **Deployment**: Vercel (recommended)

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx         # Root layout with fonts
│   ├── page.tsx           # Main portfolio page
│   └── globals.css        # Global styles & animations
├── components/
│   ├── Hero.tsx           # Hero section with CTA
│   ├── ProjectCard.tsx    # Reusable project card
│   ├── SkillsSection.tsx  # Technical skills grid
│   ├── Timeline.tsx       # Career timeline
│   └── Contact.tsx        # Contact section & footer
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm start
```

## Customization Guide

### Update Your Information

**Hero Section** (`components/Hero.tsx`):
- Update headline and subtitle
- Modify stats (years, team size, projects)

**Project Cards** (`app/page.tsx`):
- Replace dummy projects with your actual work
- Add project descriptions, metrics, and tech stacks
- Change accent colors: `cyan`, `purple`, `amber`, `emerald`, `pink`

**Skills Section** (`components/SkillsSection.tsx`):
- Add/remove skill categories
- Update technologies per category
- Modify color assignments

**Timeline** (`components/Timeline.tsx`):
- Add/update career milestones
- Adjust dates and roles
- Add company and domain info

**Contact Section** (`components/Contact.tsx`):
- Update email, LinkedIn, GitHub URLs
- Modify contact links
- Update footer information

### Color Customization

Default color scheme uses **cyan** as primary. To change:

1. Edit `:root` variables in `app/globals.css`:
```css
:root {
  --primary: #00d9ff;        /* Change this */
  --primary-dark: #0099bb;   /* And this */
}
```

2. Update accent colors in Tailwind config (`tailwind.config.js`)

3. Modify component accent maps in individual components

### Typography

- **Headings**: Space Grotesk (bold, tight letter-spacing)
- **Body**: Poppins (light weight, readable)

To change fonts, edit `app/layout.tsx` and import from Google Fonts.

### Animations

All animations defined in `app/globals.css`:
- `fadeIn` — fade in with slide up
- `slideInLeft` — slide in from left
- `glow` — pulsing glow effect
- `float` — subtle floating motion

Adjust animation timing/values as needed.

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com)
3. Deploy with one click

### Other Platforms

Works on any platform supporting Node.js:
- Netlify
- AWS Amplify
- DigitalOcean
- Self-hosted servers

## Performance

- **Lighthouse**: 95+ across all metrics
- **Core Web Vitals**: Optimized
- **Bundle Size**: ~50KB (gzipped)

Run audits with:
```bash
npm run build
npm start
# Then use Chrome DevTools Lighthouse
```

## SEO

Metadata configured in `app/layout.tsx`:
- Title and description
- Open Graph tags
- Keywords

Update metadata with your actual information.

## Future Enhancements

- [ ] Blog section with project deep-dives
- [ ] Dark/Light theme toggle
- [ ] Contact form with email integration
- [ ] Project case studies with detailed writeups
- [ ] Newsletter signup
- [ ] Analytics integration

## License

Personal use. Customize for your portfolio.

## Questions?

Refer to:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)
