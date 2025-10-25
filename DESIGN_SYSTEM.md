# UGC Creator Portfolio - Design System

## Brand Identity

### Name & Positioning
- **Creator Name**: Fathima Chowdhury
- **Tagline**: "UGC That Converts. Data-Driven Content That Drives Results."
- **Niches**: Beauty, Fitness, Tech, Food, Lifestyle
- **Tone**: Confident, Strategic, Warm, Results-Oriented

---

## Color System

### Light Theme
```typescript
{
  // Brand
  brand: {
    primary: '#6366F1',      // Indigo - trust, creativity
    accent: '#F59E0B',       // Amber - energy, conversion
    success: '#10B981',      // Emerald
    warning: '#F59E0B',      // Amber
    error: '#EF4444',        // Red
  },
  
  // Neutrals
  neutral: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0A0A0A',
  },
  
  // Semantic
  background: '#FFFFFF',
  surface: '#FAFAFA',
  surfaceElevated: '#FFFFFF',
  border: '#E5E5E5',
  text: {
    primary: '#171717',
    secondary: '#525252',
    tertiary: '#A3A3A3',
    inverse: '#FFFFFF',
  }
}
```

### Dark Theme
```typescript
{
  background: '#0A0A0A',
  surface: '#171717',
  surfaceElevated: '#262626',
  border: '#404040',
  text: {
    primary: '#FAFAFA',
    secondary: '#D4D4D4',
    tertiary: '#737373',
    inverse: '#171717',
  }
}
```

### Dim Theme (Preferred for Media-Heavy Portfolio)
```typescript
{
  background: '#18181B',    // Zinc-900
  surface: '#27272A',       // Zinc-800
  surfaceElevated: '#3F3F46', // Zinc-700
  border: '#52525B',        // Zinc-600
  text: {
    primary: '#FAFAFA',
    secondary: '#D4D4D8',
    tertiary: '#A1A1AA',
    inverse: '#18181B',
  }
}
```

---

## Typography

### Font Families
```css
--font-heading: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

### Type Scale (1.25 ratio)
```typescript
{
  h1: { size: '3.815rem', lineHeight: '1.1', weight: '700', letterSpacing: '-0.02em' },  // 61px
  h2: { size: '3.052rem', lineHeight: '1.15', weight: '700', letterSpacing: '-0.015em' }, // 49px
  h3: { size: '2.441rem', lineHeight: '1.2', weight: '600', letterSpacing: '-0.01em' },  // 39px
  h4: { size: '1.953rem', lineHeight: '1.25', weight: '600', letterSpacing: '-0.005em' }, // 31px
  h5: { size: '1.563rem', lineHeight: '1.3', weight: '600', letterSpacing: '0' },        // 25px
  h6: { size: '1.25rem', lineHeight: '1.4', weight: '600', letterSpacing: '0' },         // 20px
  
  body: {
    large: { size: '1.125rem', lineHeight: '1.75', weight: '400' },  // 18px
    base: { size: '1rem', lineHeight: '1.75', weight: '400' },       // 16px
    small: { size: '0.875rem', lineHeight: '1.6', weight: '400' },   // 14px
  },
  
  caption: { size: '0.75rem', lineHeight: '1.5', weight: '500', letterSpacing: '0.02em' }, // 12px
  overline: { size: '0.75rem', lineHeight: '1.5', weight: '600', letterSpacing: '0.1em', transform: 'uppercase' },
}
```

---

## Spacing System (8px grid)

```typescript
{
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
  32: '8rem',     // 128px
  40: '10rem',    // 160px
  48: '12rem',    // 192px
  56: '14rem',    // 224px
  64: '16rem',    // 256px
}
```

### Container Widths
```typescript
{
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1400px',
  '3xl': '1600px',
}
```

---

## Elevation & Shadows

```typescript
{
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  
  // Glassmorphism
  glass: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
  glassInset: 'inset 0 0 0 1px rgba(255, 255, 255, 0.1)',
}
```

---

## Border Radius

```typescript
{
  none: '0',
  sm: '0.25rem',   // 4px
  base: '0.5rem',  // 8px
  md: '0.75rem',   // 12px
  lg: '1rem',      // 16px
  xl: '1.5rem',    // 24px
  '2xl': '2rem',   // 32px
  full: '9999px',
}
```

---

## Animation & Motion

### Timing Functions
```typescript
{
  spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
  snappy: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
}
```

### Duration Scale
```typescript
{
  fast: '150ms',
  base: '250ms',
  slow: '350ms',
  slower: '500ms',
}
```

### Motion Tokens
```typescript
{
  // Hover lifts
  cardHover: { y: -4, scale: 1.01, transition: { duration: 0.25 } },
  buttonHover: { scale: 1.02, transition: { duration: 0.15 } },
  
  // Scroll reveals
  fadeUp: {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  },
  
  // Stagger children
  staggerContainer: {
    animate: { transition: { staggerChildren: 0.1 } }
  },
  
  // Page transitions
  pageTransition: {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -8 },
    transition: { duration: 0.3 }
  }
}
```

---

## Iconography

- **Library**: Lucide React
- **Sizes**: 16px (sm), 20px (base), 24px (lg), 32px (xl)
- **Stroke Width**: 2px (default), 1.5px (thin), 2.5px (bold)
- **Style**: Consistent stroke, rounded caps

---

## Component Patterns

### Buttons
```typescript
{
  primary: 'bg-brand-primary text-white hover:bg-brand-primary/90',
  secondary: 'bg-neutral-200 text-neutral-900 hover:bg-neutral-300',
  outline: 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary/10',
  ghost: 'text-brand-primary hover:bg-brand-primary/10',
  
  sizes: {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
}
```

### Cards
```typescript
{
  base: 'bg-surface rounded-lg border border-border p-6',
  elevated: 'bg-surfaceElevated rounded-lg shadow-lg p-6',
  glass: 'bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 p-6',
  
  hover: 'transition-all hover:shadow-xl hover:-translate-y-1',
}
```

### Forms
```typescript
{
  input: 'w-full px-4 py-3 rounded-lg border border-border bg-surface focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20',
  label: 'text-sm font-medium text-text-secondary mb-2',
  error: 'text-sm text-error mt-1',
  helpText: 'text-sm text-text-tertiary mt-1',
}
```

---

## Accessibility Standards

- **Color Contrast**: WCAG 2.2 AA minimum (4.5:1 for normal text, 3:1 for large)
- **Focus Indicators**: 2px solid ring with brand color, 2px offset
- **Touch Targets**: Minimum 44×44px for interactive elements
- **Motion**: Respect `prefers-reduced-motion`
- **Screen Readers**: Proper ARIA labels, semantic HTML, skip links

---

## Imagery Style

- **Aesthetic**: Vibrant, high-contrast, crisp
- **Aspect Ratios**: 16:9 (video), 4:3 (portfolio cards), 1:1 (avatars), 21:9 (hero)
- **Treatment**: Subtle vignette, 5% saturation boost, sharpening
- **Lazy Loading**: All images with blur placeholders
- **Formats**: WebP with JPEG fallback, AVIF where supported

---

## Responsive Breakpoints

```typescript
{
  sm: '640px',   // Mobile landscape
  md: '768px',   // Tablet
  lg: '1024px',  // Desktop
  xl: '1280px',  // Large desktop
  '2xl': '1536px', // Extra large
}
```

### Mobile-First Approach
- Stack vertically on mobile
- 2-column grids on tablet
- 3-4 column grids on desktop
- Touch-optimized spacing and targets
