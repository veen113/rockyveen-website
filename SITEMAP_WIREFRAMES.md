# UGC Creator Portfolio - Sitemap & Wireframes

## Site Map

```
/
├── / (Home)
├── /portfolio
│   └── /portfolio/[slug] (Case Study Detail)
├── /services
├── /about
├── /media-kit
├── /contact
└── /blog (optional)
    └── /blog/[slug]
```

---

## Page Wireframes & Content Structure

### 1. Home Page (`/`)

#### Hero Section
```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  [Overline: UGC CREATOR • BEAUTY • FITNESS • TECH] │
│                                                     │
│  UGC That Converts.                                 │
│  Data-Driven Content That Drives Results.           │
│                                                     │
│  [Subhead: I create scroll-stopping UGC that       │
│   turns viewers into customers. From hook to        │
│   conversion, every frame is optimized for ROI.]    │
│                                                     │
│  [CTA: View Portfolio] [CTA: Book a Call]          │
│                                                     │
│  [Featured Reel Thumbnail - autoplay on hover]     │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Layout Details**:
- Max-width: 1400px
- Hero height: 90vh (min 600px)
- Reel: 16:9 aspect ratio, muted autoplay loop
- Gradient overlay on background
- Parallax scroll effect on reel

---

#### Social Proof Bar
```
┌─────────────────────────────────────────────────────┐
│  TRUSTED BY LEADING BRANDS                          │
│                                                     │
│  [Logo] [Logo] [Logo] [Logo] [Logo] [Logo]         │
│  [Logo] [Logo] [Logo] [Logo]                       │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Layout Details**:
- Grayscale logos with hover color
- Infinite marquee animation (optional)
- 6-10 brand logos
- Responsive: 3 cols mobile, 5 cols tablet, 10 cols desktop

---

#### Value Propositions
```
┌─────────────────────────────────────────────────────┐
│  Why Brands Choose Me                               │
│                                                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐         │
│  │ [Icon]   │  │ [Icon]   │  │ [Icon]   │         │
│  │          │  │          │  │          │         │
│  │ Data-    │  │ Fast     │  │ On-Brand │         │
│  │ Driven   │  │ Turn-    │  │ Edits    │         │
│  │ Hooks    │  │ around   │  │          │         │
│  │          │  │          │  │          │         │
│  │ [Desc]   │  │ [Desc]   │  │ [Desc]   │         │
│  └──────────┘  └──────────┘  └──────────┘         │
│                                                     │
│  ┌──────────┐                                      │
│  │ [Icon]   │                                      │
│  │          │                                      │
│  │ Perform- │                                      │
│  │ ance     │                                      │
│  │ Optimiz. │                                      │
│  │          │                                      │
│  │ [Desc]   │                                      │
│  └──────────┘                                      │
└─────────────────────────────────────────────────────┘
```

**Layout Details**:
- 4 cards in 2×2 grid (mobile: 1 col, tablet: 2 cols, desktop: 4 cols)
- Card: Icon (32px), Heading (H5), Description (body-small)
- Hover: lift + shadow
- Icons: Target, Zap, Palette, TrendingUp

---

#### Featured Projects
```
┌─────────────────────────────────────────────────────┐
│  Featured Work                                      │
│  [View All Projects →]                              │
│                                                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐│
│  │ [Thumbnail] │  │ [Thumbnail] │  │ [Thumbnail] ││
│  │             │  │             │  │             ││
│  │ Project 1   │  │ Project 2   │  │ Project 3   ││
│  │ Beauty      │  │ Fitness     │  │ Tech        ││
│  │             │  │             │  │             ││
│  │ 📊 +127% CTR│  │ 📊 4.2M     │  │ 📊 $8.50    ││
│  │             │  │    Views    │  │    ROAS     ││
│  └─────────────┘  └─────────────┘  └─────────────┘│
└─────────────────────────────────────────────────────┘
```

**Layout Details**:
- 3 cards (mobile: 1 col, tablet: 2 cols, desktop: 3 cols)
- Card: 4:3 aspect ratio thumbnail, title, niche tag, 1 key KPI
- Video thumbnail with silent autoplay on hover
- Stagger animation on scroll reveal

---

#### Testimonials Carousel
```
┌─────────────────────────────────────────────────────┐
│  What Clients Say                                   │
│                                                     │
│  ┌───────────────────────────────────────────────┐ │
│  │ "Quote text lorem ipsum dolor sit amet,      │ │
│  │  consectetur adipiscing elit. Sed do eiusmod │ │
│  │  tempor incididunt ut labore."                │ │
│  │                                               │ │
│  │  [Avatar] Jane Doe                            │ │
│  │           Marketing Director, Brand Inc.      │ │
│  │           [Brand Logo]                        │ │
│  └───────────────────────────────────────────────┘ │
│                                                     │
│  [• • ○ ○ ○]  [← →]                                │
└─────────────────────────────────────────────────────┘
```

**Layout Details**:
- Carousel with 3-5 testimonials
- Auto-rotate every 6s, pause on hover
- Card: glassmorphism effect, quote, avatar (48px), name, role, brand logo
- Pagination dots + arrow controls

---

#### Process Section
```
┌─────────────────────────────────────────────────────┐
│  My Process                                         │
│                                                     │
│  01 ────→ 02 ────→ 03 ────→ 04                     │
│  Brief    Hooks    Production Iteration            │
│                                                     │
│  [Icon]   [Icon]   [Icon]     [Icon]               │
│  Understand Create   Shoot &   Refine &            │
│  your     scroll-   edit with  optimize            │
│  audience stopping  precision  for max             │
│  & goals  concepts           performance           │
└─────────────────────────────────────────────────────┘
```

**Layout Details**:
- 4 steps in horizontal timeline (mobile: vertical)
- Step: Number, Icon, Title, Description
- Connecting line with gradient
- Scroll-triggered animation (steps appear sequentially)

---

#### Final CTA
```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  Ready to Create Content That Converts?             │
│                                                     │
│  Let's discuss your next campaign. Get a custom     │
│  quote or book a 15-minute discovery call.          │
│                                                     │
│  [CTA: Get a Quote] [CTA: Book a Call]             │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Layout Details**:
- Full-width section with gradient background
- Centered content, max-width 800px
- Large heading (H2), subtext, dual CTAs

---

### 2. Portfolio Page (`/portfolio`)

```
┌─────────────────────────────────────────────────────┐
│  Portfolio                                          │
│  [Breadcrumb: Home / Portfolio]                     │
│                                                     │
│  ┌─────────────────────────────────────────────┐   │
│  │ [Search] 🔍                                  │   │
│  │                                              │   │
│  │ Filters:                                     │   │
│  │ [All] [Beauty] [Fitness] [Tech] [Food]      │   │
│  │ [TikTok] [Instagram] [YouTube]               │   │
│  │ [Short-Form] [Long-Form] [Carousel]          │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐      │
│  │[Thumb] │ │[Thumb] │ │[Thumb] │ │[Thumb] │      │
│  │Title   │ │Title   │ │Title   │ │Title   │      │
│  │[Tags]  │ │[Tags]  │ │[Tags]  │ │[Tags]  │      │
│  └────────┘ └────────┘ └────────┘ └────────┘      │
│                                                     │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐      │
│  │[Thumb] │ │[Thumb] │ │[Thumb] │ │[Thumb] │      │
│  └────────┘ └────────┘ └────────┘ └────────┘      │
│                                                     │
│  [Load More] or [← 1 2 3 4 →]                      │
└─────────────────────────────────────────────────────┘
```

**Layout Details**:
- Sticky filter bar
- Masonry grid (mobile: 1 col, tablet: 2 cols, desktop: 3-4 cols)
- Card: 4:3 thumbnail, title, tags (niche, platform, format)
- Hover: video autoplay (silent), overlay with "View Case Study"
- Filter animations: smooth fade/scale
- Pagination or infinite scroll

---

### 3. Case Study Detail (`/portfolio/[slug]`)

```
┌─────────────────────────────────────────────────────┐
│  [← Back to Portfolio]                              │
│                                                     │
│  ┌─────────────────────────────────────────────┐   │
│  │                                              │   │
│  │         [Hero Video/Image]                   │   │
│  │                                              │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
│  Project Title                                      │
│  [Beauty] [TikTok] [Short-Form]                     │
│                                                     │
│  ┌──────────────┐  ┌──────────────┐               │
│  │ Overview     │  │ Key Results  │               │
│  │              │  │              │               │
│  │ Client: ...  │  │ 📊 +127% CTR │               │
│  │ Timeline: .. │  │ 📊 4.2M Views│               │
│  │ Deliverable. │  │ 📊 $8.50 ROAS│               │
│  └──────────────┘  └──────────────┘               │
│                                                     │
│  The Challenge                                      │
│  [Description paragraph]                            │
│                                                     │
│  Creative Strategy                                  │
│  [Hook variations, storyboard images]               │
│                                                     │
│  Production                                         │
│  [Gallery: 3-6 images/videos in grid]               │
│                                                     │
│  Results & Impact                                   │
│  [Chart/graph visualization]                        │
│  [Detailed metrics breakdown]                       │
│                                                     │
│  Client Testimonial                                 │
│  ┌─────────────────────────────────────────────┐   │
│  │ "Quote..."                                   │   │
│  │ [Avatar] Name, Role @ Brand                  │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
│  Related Projects                                   │
│  [3 project cards]                                  │
│                                                     │
│  [CTA: Start Your Project]                          │
└─────────────────────────────────────────────────────┘
```

**Layout Details**:
- Hero: 21:9 aspect ratio, full-width
- Two-column layout for overview + results (mobile: stacked)
- Gallery: lightbox on click, swipeable
- Chart: animated on scroll reveal
- Related projects: 3-card carousel

---

### 4. Services & Pricing (`/services`)

```
┌─────────────────────────────────────────────────────┐
│  Services & Pricing                                 │
│                                                     │
│  Choose the package that fits your needs            │
│                                                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐         │
│  │ STARTER  │  │ PRO      │  │ RETAINER │         │
│  │          │  │ ⭐ POPULAR│  │          │         │
│  │ $XXX     │  │ $XXX     │  │ Custom   │         │
│  │          │  │          │  │          │         │
│  │ ✓ Item 1 │  │ ✓ Item 1 │  │ ✓ Item 1 │         │
│  │ ✓ Item 2 │  │ ✓ Item 2 │  │ ✓ Item 2 │         │
│  │ ✓ Item 3 │  │ ✓ Item 3 │  │ ✓ Item 3 │         │
│  │          │  │ ✓ Item 4 │  │ ✓ Item 4 │         │
│  │          │  │ ✓ Item 5 │  │ ✓ Item 5 │         │
│  │          │  │          │  │ ✓ Item 6 │         │
│  │ [Select] │  │ [Select] │  │ [Contact]│         │
│  └──────────┘  └──────────┘  └──────────┘         │
│                                                     │
│  What's Included                                    │
│  • Raw footage & B-roll                             │
│  • Multiple aspect ratios (9:16, 1:1, 16:9)         │
│  • Hook variations (3-5 per video)                  │
│  • 2 rounds of revisions                            │
│  • UGC usage rights (perpetual)                     │
│  • Turnaround: 5-7 business days                    │
│                                                     │
│  FAQ                                                │
│  [Accordion with 5-8 common questions]              │
└─────────────────────────────────────────────────────┘
```

**Layout Details**:
- 3 pricing cards (mobile: stacked, desktop: side-by-side)
- Middle card elevated/highlighted
- Inclusions list with checkmarks
- FAQ accordion with smooth expand/collapse
- Sticky CTA bar on mobile

---

### 5. About Page (`/about`)

```
┌─────────────────────────────────────────────────────┐
│  About Me                                           │
│                                                     │
│  ┌──────────┐  Hi, I'm Fathima                     │
│  │          │                                       │
│  │ [Photo]  │  [Bio paragraph 1]                    │
│  │          │  [Bio paragraph 2]                    │
│  └──────────┘                                       │
│                                                     │
│  My Niches                                          │
│  [Beauty] [Fitness] [Tech] [Food] [Lifestyle]       │
│                                                     │
│  Equipment & Tools                                  │
│  📷 Camera: Sony A7 IV                              │
│  🎤 Audio: Rode Wireless GO II                      │
│  💡 Lighting: Aputure MC RGBWW                      │
│  ✂️ Editing: Adobe Premiere Pro, CapCut            │
│                                                     │
│  How I Work                                         │
│  [4-step process with icons]                        │
│                                                     │
│  Fun Facts                                          │
│  • Coffee enthusiast ☕                             │
│  • Fitness junkie 🏋️                               │
│  • Always testing new hooks 🎯                      │
│                                                     │
│  [CTA: Let's Collaborate]                           │
└─────────────────────────────────────────────────────┘
```

**Layout Details**:
- Two-column: photo + bio (mobile: stacked)
- Photo: 1:1 aspect ratio, 400px
- Equipment list: icon + text
- Fun facts: emoji + text in grid

---

### 6. Media Kit (`/media-kit`)

```
┌─────────────────────────────────────────────────────┐
│  Media Kit                                          │
│                                                     │
│  [Download PDF] [Share Link]                        │
│                                                     │
│  ┌─────────────────────────────────────────────┐   │
│  │ Quick Stats                                  │   │
│  │                                              │   │
│  │ 📊 Total Reach: 500K+                        │   │
│  │ 📈 Avg. Engagement: 8.5%                     │   │
│  │ 🎯 Primary Audience: Women 25-34             │   │
│  │ 📍 Top Locations: US, UK, CA                 │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
│  Platform Breakdown                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐         │
│  │ TikTok   │  │ Instagram│  │ YouTube  │         │
│  │ 250K     │  │ 180K     │  │ 70K      │         │
│  │ 9.2% ER  │  │ 7.8% ER  │  │ 12K avg  │         │
│  └──────────┘  └──────────┘  └──────────┘         │
│                                                     │
│  Audience Demographics                              │
│  [Charts: Age, Gender, Location]                    │
│                                                     │
│  Past Collaborations                                │
│  [Brand logos grid]                                 │
│                                                     │
│  Contact                                            │
│  📧 hello@fathimachowdhury.com                      │
│  📱 @fathimacreates                                 │
└─────────────────────────────────────────────────────┘
```

**Layout Details**:
- Downloadable PDF button (generates on-demand)
- Stats cards with icons
- Platform cards: 3-column grid
- Charts: simple bar/pie charts
- Brand logos: 4-6 cols responsive grid

---

### 7. Contact Page (`/contact`)

```
┌─────────────────────────────────────────────────────┐
│  Get In Touch                                       │
│                                                     │
│  ┌──────────────────┐  ┌──────────────────┐        │
│  │ Send a Message   │  │ Book a Call      │        │
│  │                  │  │                  │        │
│  │ [Typeform Embed] │  │ [Calendly Embed] │        │
│  │                  │  │                  │        │
│  │ Name             │  │ [Calendar UI]    │        │
│  │ Email            │  │                  │        │
│  │ Project Type     │  │                  │        │
│  │ Budget           │  │                  │        │
│  │ Message          │  │                  │        │
│  │                  │  │                  │        │
│  │ [Submit]         │  │                  │        │
│  └──────────────────┘  └──────────────────┘        │
│                                                     │
│  Other Ways to Reach Me                             │
│  📧 hello@fathimachowdhury.com                      │
│  📱 Instagram: @fathimacreates                      │
│  💼 LinkedIn: /in/fathimachowdhury                  │
│                                                     │
│  Response Time: Within 24 hours                     │
└─────────────────────────────────────────────────────┘
```

**Layout Details**:
- Two-column: form + calendar (mobile: stacked, tabs)
- Form: Typeform embed or custom with validation
- Calendar: Calendly embed (15-min discovery call)
- Social links with icons
- Honeypot field for spam prevention

---

### 8. Blog/Insights (Optional) (`/blog`)

```
┌─────────────────────────────────────────────────────┐
│  Insights & Tips                                    │
│                                                     │
│  [Search] 🔍  [All] [Hooks] [Strategy] [Tools]     │
│                                                     │
│  ┌─────────────────────────────────────────────┐   │
│  │ [Featured Post Image]                        │   │
│  │                                              │   │
│  │ Featured: How to Write Scroll-Stopping Hooks │   │
│  │ [Read More →]                                │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐         │
│  │ [Thumb]  │  │ [Thumb]  │  │ [Thumb]  │         │
│  │ Title    │  │ Title    │  │ Title    │         │
│  │ Excerpt  │  │ Excerpt  │  │ Excerpt  │         │
│  │ [Read →] │  │ [Read →] │  │ [Read →] │         │
│  └──────────┘  └──────────┘  └──────────┘         │
└─────────────────────────────────────────────────────┘
```

**Layout Details**:
- Featured post: large card at top
- Grid: 3 cols desktop, 2 cols tablet, 1 col mobile
- Card: thumbnail, title, excerpt (120 chars), read more link
- Category filter with smooth transitions

---

## Global Components

### Header/Navigation
```
┌─────────────────────────────────────────────────────┐
│ [Logo] Portfolio Services About Media Kit Contact  │
│                                         [Theme] [⌘K]│
└─────────────────────────────────────────────────────┘
```

**Features**:
- Sticky header with auto-hide on scroll down
- Active link indicators (underline + color)
- Theme toggle (Light/Dim/Dark)
- Command palette (⌘K) for quick navigation
- Mobile: hamburger menu → full-screen overlay

---

### Footer
```
┌─────────────────────────────────────────────────────┐
│  Fathima Chowdhury                                  │
│  UGC Creator • Content Strategist                   │
│                                                     │
│  Quick Links        Services       Connect          │
│  Portfolio          Starter        Instagram        │
│  About              Pro            TikTok           │
│  Services           Retainer       LinkedIn         │
│  Contact                           Email            │
│                                                     │
│  © 2025 Fathima Chowdhury. All rights reserved.     │
│  Privacy Policy • Terms of Service                  │
└─────────────────────────────────────────────────────┘
```

**Layout**:
- 3-column grid (mobile: stacked)
- Social icons with hover effects
- Newsletter signup (optional)
- Legal links

---

### Mobile Dock Navigation (iOS-style)
```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  [Home] [Portfolio] [Services] [Contact] [More]    │
└─────────────────────────────────────────────────────┘
```

**Features**:
- Fixed bottom bar on mobile
- Icon + label
- Active state with color fill
- Smooth transitions

---

## Interaction Patterns

### Scroll Behaviors
- **Header**: Auto-hide on scroll down, show on scroll up
- **Progress Bar**: Thin bar at top showing read progress (case studies, blog)
- **Parallax**: Subtle parallax on hero images (0.5x speed)
- **Reveals**: Fade-up animations on scroll (staggered for lists)

### Hover States
- **Cards**: Lift (-4px) + shadow increase + scale (1.01)
- **Buttons**: Scale (1.02) + brightness increase
- **Links**: Underline slide-in animation
- **Videos**: Silent autoplay on hover, pause on mouse leave

### Loading States
- **Images**: Blur placeholder → sharp image fade-in
- **Buttons**: Spinner + disabled state
- **Page Transitions**: Fade + slide (8px)
- **Skeleton Screens**: For portfolio grid, testimonials

### Micro-interactions
- **Magnetic Buttons**: Cursor attracts button slightly
- **Ripple Effect**: Click ripple on primary buttons
- **Success States**: Checkmark animation on form submit
- **Toast Notifications**: Slide-in from top-right

---

## Responsive Behavior

### Mobile (< 768px)
- Single column layouts
- Hamburger menu
- Bottom dock navigation
- Touch-optimized spacing (min 44px targets)
- Swipeable carousels
- Collapsible sections

### Tablet (768px - 1024px)
- 2-column grids
- Condensed navigation
- Larger touch targets
- Side-by-side content where appropriate

### Desktop (> 1024px)
- Multi-column layouts
- Hover interactions enabled
- Sticky sidebars (case studies)
- Larger typography
- More whitespace

---

## Performance Targets

- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1
- **TTI**: < 3.5s on 4G
- **Lighthouse Mobile**: 90+
- **Lighthouse Desktop**: 95+

---

## SEO Structure

### Meta Tags (All Pages)
```html
<title>Page Title | Fathima Chowdhury - UGC Creator</title>
<meta name="description" content="..." />
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="..." />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
```

### JSON-LD Schema
- **Home**: Person, Organization
- **Portfolio**: CreativeWork, VideoObject
- **Case Study**: Article, CreativeWork
- **Services**: Service, Offer
- **Blog**: BlogPosting, Article

### URL Structure
- Clean, descriptive URLs
- Lowercase, hyphen-separated
- No trailing slashes
- Canonical tags on all pages
