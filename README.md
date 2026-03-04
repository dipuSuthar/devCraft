# DevCraft Portfolio — Next.js 15

A high-performance, visually immersive portfolio for Web Development & Shopify Solutions business.

## ✨ Features

- **Next.js 15** with App Router + Server Components
- **Three.js** interactive 3D hero (particle field + wireframe icosahedron, reacts to mouse)
- **Framer Motion** scroll-triggered animations and page transitions
- **GSAP-ready** (installed, attach to any element for scroll-based animations)
- **Lenis** buttery-smooth scroll provider
- **Custom cursor** with magnetic ring effect
- **Page loader** with animated progress bar
- **Horizontal project scroll** with glassmorphism cards
- **Animated counter stats** on scroll into view
- **Dual-direction tech stack marquee**
- **Magnetic CTA buttons** (physically follow cursor)
- **Mobile responsive** with hamburger menu
- **Dark mode** by default, neon Electric Blue / Violet accents
- **Tailwind CSS** with custom design tokens
- **TypeScript** strict mode throughout

---

## 📁 Project Structure

```
devcraft-portfolio/
├── app/
│   ├── layout.tsx          # Root layout: fonts, metadata, providers
│   ├── page.tsx            # Homepage assembling all sections
│   └── globals.css         # CSS variables, base styles, animations
│
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx         # 3D canvas hero
│   │   ├── StatsStrip.tsx          # Animated counters
│   │   ├── ServicesSection.tsx     # 6 service cards
│   │   ├── ProjectsSection.tsx     # Horizontal scroll projects
│   │   ├── TechStackSection.tsx    # Dual marquee
│   │   ├── ProcessSection.tsx      # Timeline steps
│   │   ├── TestimonialsSection.tsx # 3-column grid
│   │   └── CTASection.tsx          # Full-width CTA
│   │
│   ├── three/
│   │   └── HeroScene.tsx           # Three.js scene (SSR-safe)
│   │
│   └── ui/
│       ├── Navbar.tsx              # Sticky nav with scroll behavior
│       ├── CustomCursor.tsx        # Dual-layer magnetic cursor
│       ├── PageLoader.tsx          # Animated intro loader
│       ├── LenisProvider.tsx       # Smooth scroll wrapper
│       ├── MagneticButton.tsx      # Physics-based hover CTA
│       └── Footer.tsx              # Links + copyright
│
├── lib/
│   ├── utils.ts            # cn() utility (clsx + tailwind-merge)
│   └── useScrollReveal.ts  # IntersectionObserver hook
│
├── types/
│   └── index.ts            # TypeScript interfaces
│
├── public/                 # Static assets (add your images here)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+
- npm / yarn / pnpm

### Installation

```bash
# Clone / download the project
cd devcraft-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm run start
```

---

## 🌐 Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deploys.

---

## 🎨 Customization

### Colors (globals.css)
```css
:root {
  --blue: #00d4ff;    /* Electric blue accent */
  --violet: #7c3aed;  /* Primary violet */
  --pink: #ff2d8b;    /* Hot pink accent */
  --bg: #050508;      /* Main background */
}
```

### Adding Projects (ProjectsSection.tsx)
Add entries to the `projects` array:
```ts
{
  type: "E-commerce / Shopify",
  name: "Your Project Name",
  desc: "Project description here.",
  techs: ["Next.js", "Shopify"],
  gradient: "linear-gradient(135deg, #1a0533, #0d1f40)",
  emoji: "🛍️",
}
```

### Adding Services (ServicesSection.tsx)
Edit the `services` array with your own offerings.

### Fonts
Currently using `Syne` (display) + `Space Mono` (body). Change in `app/layout.tsx`.

---

## 🔌 Headless CMS Integration (Optional)

To connect Sanity CMS for dynamic project management:

```bash
npm install @sanity/client next-sanity
```

Create `lib/sanity.ts`:
```ts
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "YOUR_PROJECT_ID",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});
```

Then replace static arrays in section components with `async` server components fetching from Sanity.

---

## 📦 Key Dependencies

| Package | Purpose |
|---------|---------|
| `next@15` | Framework, SSR, App Router |
| `three` | 3D hero scene |
| `@react-three/fiber` | React renderer for Three.js |
| `framer-motion` | Scroll animations, page transitions |
| `gsap` | Advanced scroll-based animations |
| `lenis` | Premium smooth scrolling |
| `tailwindcss` | Utility-first styling |

---

## 🔧 Performance Tips

1. **Images**: Use `next/image` with WebP/AVIF for all project screenshots
2. **Three.js**: HeroScene is lazy-loaded with `dynamic(() => ..., { ssr: false })`
3. **Fonts**: Google Fonts loaded via `next/font` for zero layout shift
4. **Animations**: Framer Motion uses `once: true` in `useInView` to prevent re-triggering

---

## 📄 License

MIT — use freely for your business.
# devCraft
