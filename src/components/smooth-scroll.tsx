'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export function SmoothScroll() {
  const router = useRouter()

  useEffect(() => {
    // Add smooth scroll behavior to the document
    document.documentElement.style.scrollBehavior = 'smooth'
    
    // Handle anchor link clicks
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a')
      
      if (anchor) {
        const href = anchor.getAttribute('href')
        
        // Handle links like /#services from other pages
        if (href && href.startsWith('/#')) {
          e.preventDefault()
          const hash = href.substring(1) // Remove the leading /
          
          // If we're not on the home page, navigate there first
          if (window.location.pathname !== '/') {
            router.push(href)
          } else {
            // We're already on home page, just scroll
            const element = document.querySelector(hash)
            if (element) {
              const headerOffset = 80
              const elementPosition = element.getBoundingClientRect().top
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset

              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              })
            }
          }
        }
        // Handle regular anchor links like #services
        else if (href && href.startsWith('#')) {
          e.preventDefault()
          const element = document.querySelector(href)
          if (element) {
            const headerOffset = 80
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
          }
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    // Handle hash on page load (for links like /#services)
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          const headerOffset = 80
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }, 100)
    }

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [router])

  return null
}
