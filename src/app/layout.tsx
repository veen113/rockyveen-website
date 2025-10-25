import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { SmoothScroll } from '@/components/smooth-scroll'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'RockyVeen - UGC Creator | Authentic Content That Drives Results',
    template: '%s | RockyVeen - UGC Creator',
  },
  description:
    'Atlanta-based UGC creator specializing in authentic, high-converting content for fashion, tech, lifestyle, and home brands. Trusted by SHEIN, C7 Skates, and more.',
  keywords: [
    'UGC creator',
    'user generated content',
    'content creator',
    'TikTok creator',
    'Instagram Reels',
    'fashion UGC',
    'tech content',
    'lifestyle UGC',
    'Atlanta creator',
    'RockyVeen',
  ],
  authors: [{ name: 'RockyVeen' }],
  creator: 'RockyVeen',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rockyveen.com',
    title: 'RockyVeen - UGC Creator | Authentic Content That Drives Results',
    description:
      'Atlanta-based UGC creator specializing in authentic, high-converting content for fashion, tech, lifestyle, and home brands.',
    siteName: 'RockyVeen - UGC Creator',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RockyVeen - UGC Creator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RockyVeen - UGC Creator',
    description: 'Authentic UGC that converts. View portfolio and book a collaboration.',
    images: ['/og-image.jpg'],
    creator: '@rockyveen',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Script
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
          strategy="beforeInteractive"
        />
        <Script
          id="emailjs-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                if (typeof emailjs !== 'undefined') {
                  emailjs.init({
                    publicKey: "R2-Rl5D330pf4fqmv",
                  });
                }
              })();
            `,
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dim"
          enableSystem={false}
          themes={['light', 'dark', 'dim']}
        >
          <SmoothScroll />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
