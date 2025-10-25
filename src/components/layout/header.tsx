'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun, Monitor } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About Us', href: '/#about' },
  { name: 'Our Collabs', href: '/portfolio' },
  { name: 'Contact', href: '/#contact' },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      // Update active section based on scroll position
      const sections = ['services', 'about', 'collabs', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      setActiveSection(current || '')
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dim')
    else if (theme === 'dim') setTheme('dark')
    else setTheme('light')
  }

  const getThemeIcon = () => {
    if (theme === 'light') return <Sun className="h-5 w-5" />
    if (theme === 'dark') return <Moon className="h-5 w-5" />
    return <Monitor className="h-5 w-5" />
  }

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <Image 
            src="/images/logo(1) (2).png" 
            alt="RockyVeen Logo" 
            width={160} 
            height={50}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => {
            const isActive = 
              item.href === pathname || 
              (item.href.startsWith('/#') && pathname === '/' && item.href === `/#${activeSection}`) ||
              (item.href === '/portfolio' && pathname === '/portfolio') ||
              (item.href === '/services' && pathname === '/services')
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary relative',
                  isActive
                    ? 'text-primary after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-primary'
                    : 'text-muted-foreground'
                )}
              >
                {item.name}
              </Link>
            )
          })}
        </div>

        {/* Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={cycleTheme}
            className="hidden md:flex"
            aria-label="Toggle theme"
          >
            {getThemeIcon()}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg">
          <div className="container mx-auto py-4 space-y-4 px-4">
            {navigation.map((item) => {
              const isActive = 
                item.href === pathname || 
                (item.href.startsWith('/#') && pathname === '/' && item.href === `/#${activeSection}`) ||
                (item.href === '/portfolio' && pathname === '/portfolio') ||
                (item.href === '/services' && pathname === '/services')
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'block py-2 text-base font-medium transition-colors',
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            })}
            <div className="pt-4 border-t border-border">
              <Button variant="ghost" size="sm" onClick={cycleTheme} className="w-full justify-start">
                {getThemeIcon()}
                <span className="ml-2">
                  Theme: {theme === 'light' ? 'Light' : theme === 'dark' ? 'Dark' : 'Dim'}
                </span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
