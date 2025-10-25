# UGC Creator Portfolio - Production-Ready Next.js Website

A premium, conversion-focused portfolio website for UGC creators built with Next.js 14, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion.

## 🚀 Features

- **Modern Stack**: Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS
- **Premium UI**: shadcn/ui components with custom design system
- **Smooth Animations**: Framer Motion 11 + Lenis smooth scroll
- **Performance Optimized**: Lighthouse 90+ mobile score, optimized images, lazy loading
- **Fully Responsive**: Mobile-first design with touch-optimized interactions
- **Accessible**: WCAG 2.2 AA compliant with keyboard navigation
- **SEO Ready**: Meta tags, Open Graph, JSON-LD schema, sitemap
- **Theme Support**: Light, Dark, and Dim themes with smooth transitions
- **Type-Safe**: Full TypeScript coverage with strict mode

## 📁 Project Structure

```
ugc-creator-portfolio/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout with providers
│   │   ├── page.tsx           # Home page
│   │   ├── portfolio/         # Portfolio pages
│   │   ├── services/          # Services & pricing
│   │   ├── about/             # About page
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── ui/                # shadcn/ui components
│   │   ├── layout/            # Header, Footer
│   │   ├── theme-provider.tsx # Theme context
│   │   └── smooth-scroll.tsx  # Lenis integration
│   ├── lib/
│   │   └── utils.ts           # Utility functions
│   ├── types/
│   │   └── index.ts           # TypeScript types
│   └── data/
│       ├── projects.ts        # Project seed data
│       └── services.ts        # Services & FAQ data
├── public/                     # Static assets
├── DESIGN_SYSTEM.md           # Design system documentation
├── SITEMAP_WIREFRAMES.md      # Sitemap & wireframes
├── COPY_SAMPLES.md            # Sample copy & CTAs
└── QA_CHECKLIST.md            # Launch checklist

```

## 🛠️ Setup & Installation

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation Steps

1. **Clone or navigate to the project**
   ```bash
   cd "/Users/fathimachowdhury/Downloads/UGC 2"
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run format   # Format code with Prettier
```

## 🎨 Design System

The project includes a comprehensive design system documented in `DESIGN_SYSTEM.md`:

- **Colors**: Primary (Indigo), Accent (Amber), Neutrals
- **Typography**: Inter font family with modular scale (1.25 ratio)
- **Spacing**: 8px grid system
- **Components**: Buttons, Cards, Forms with consistent styling
- **Animations**: Spring, smooth, snappy, bounce easing functions
- **Themes**: Light, Dark, Dim with CSS variables

## 📄 Pages

### Home (`/`)
- Hero with value proposition and CTAs
- Social proof bar with brand logos
- Value propositions (4 cards)
- Featured projects (3 spotlight cards)
- Testimonials carousel
- Process steps (4-step timeline)
- Final CTA section

### Portfolio (`/portfolio`)
- Filterable project grid (Niche, Platform, Format)
- Project cards with hover effects
- Key metrics display
- Empty state handling

### Services (`/services`)
- 3 pricing tiers (Starter, Pro, Retainer)
- Feature comparison
- FAQ accordion
- CTA section

### About (`/about`)
- Bio with profile photo
- Niche specializations
- Equipment & tools
- Work process
- Fun facts
- CTA section

## 🎯 Key Features

### Performance
- Next.js Image optimization with blur placeholders
- Lazy loading for all images
- Code splitting and tree shaking
- Optimized fonts with `next/font`
- Preconnect to external resources

### Accessibility
- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus-visible indicators
- Screen reader optimized
- Color contrast AA compliant

### SEO
- Meta tags for all pages
- Open Graph and Twitter Cards
- JSON-LD structured data
- Sitemap and robots.txt
- Canonical URLs
- Descriptive alt text

### Animations
- Framer Motion for page transitions
- Scroll-triggered reveals with `react-intersection-observer`
- Lenis smooth scroll
- Respects `prefers-reduced-motion`
- Performant 60fps animations

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root:

```env
# Optional: Analytics
NEXT_PUBLIC_GA_ID=your-ga-id

# Optional: Form submission
NEXT_PUBLIC_FORM_ENDPOINT=your-form-endpoint

# Optional: CMS (if using Sanity/Notion)
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

### Tailwind Configuration

Customize colors, fonts, and breakpoints in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      brand: {
        primary: '#6366F1',
        accent: '#F59E0B',
      },
    },
  },
}
```

## 📦 Deployment

### Vercel (Recommended)

1. Push code to GitHub/GitLab/Bitbucket
2. Import project in [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Other Platforms

The project works on any platform that supports Next.js:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Railway
- Render

## 🎨 Customization

### Brand Colors

Update colors in `src/app/globals.css`:

```css
:root {
  --primary: 239 84% 67%;        /* Indigo */
  --accent: 38 92% 50%;          /* Amber */
}
```

### Content

1. **Projects**: Edit `src/data/projects.ts`
2. **Services**: Edit `src/data/services.ts`
3. **Copy**: Reference `COPY_SAMPLES.md` for headlines and CTAs

### Images

Place images in `public/` directory:
- `/projects/` - Project thumbnails
- `/avatars/` - Testimonial avatars
- `/og-image.jpg` - Social sharing image

## 📊 Analytics Integration

### Google Analytics 4

Add to `src/app/layout.tsx`:

```typescript
import Script from 'next/script'

// In layout component
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
```

### Plausible Analytics

```typescript
<Script
  defer
  data-domain="yourdomain.com"
  src="https://plausible.io/js/script.js"
/>
```

## 🔗 Integrations

### Calendly

Update link in components:
```typescript
<Link href="https://calendly.com/your-link">Book a Call</Link>
```

### Typeform/Airtable

Replace contact form with embed:
```typescript
<iframe src="https://form.typeform.com/to/your-form" />
```

## 🧪 Testing

### Manual Testing Checklist

See `QA_CHECKLIST.md` for comprehensive testing guide.

### Automated Testing (Optional)

```bash
# Install testing dependencies
npm install -D @testing-library/react @testing-library/jest-dom jest

# Run tests
npm test
```

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Type Errors

```bash
# Regenerate TypeScript types
npm run build
```

### Styling Issues

```bash
# Rebuild Tailwind
npm run dev
```

## 📚 Documentation

- [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) - Complete design system
- [SITEMAP_WIREFRAMES.md](./SITEMAP_WIREFRAMES.md) - Page structure and wireframes
- [COPY_SAMPLES.md](./COPY_SAMPLES.md) - Sample copy and CTAs
- [QA_CHECKLIST.md](./QA_CHECKLIST.md) - Pre-launch checklist

## 🤝 Support

For issues or questions:
1. Check documentation files
2. Review Next.js docs: https://nextjs.org/docs
3. Check shadcn/ui docs: https://ui.shadcn.com

## 📄 License

This project is proprietary. All rights reserved.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
