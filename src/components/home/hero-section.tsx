'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, MapPin, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

const slides = [
  {
    image: '/images/3785.jpg',
    subtitle: 'RockyVeen – Explore Creativity & Connections',
    title: 'Where Creativity Connects',
    description: 'Step into RockyVeen\'s World of Creativity'
  },
  {
    image: '/images/3783 (1).jpg',
    subtitle: 'RockyVeen | Visuals, Stories & Collaborations',
    title: 'Craft, Share, Inspire',
    description: 'Design. Influence. Collaborate. Thrive.'
  }
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <>
      {/* Top Bar */}
      <div className="bg-muted/50 border-b border-border pt-20">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Atlanta, United States of America</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="tel:+19452321969" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span>+1 945-232-1969</span>
              </a>
              <a href="mailto:collabs@rockyveen.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                <span>collabs@rockyveen.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Slider */}
      <section className="relative h-[90vh] overflow-hidden gradient-mesh">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              className="object-cover"
              priority={currentSlide === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/30" />
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="relative h-full flex items-center justify-center text-center z-10">
          <div className="container mx-auto px-4">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto space-y-6"
            >
              <p className="text-accent text-sm md:text-base font-bold tracking-wider uppercase drop-shadow-lg">
                {slides[currentSlide].subtitle}
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-2xl">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto drop-shadow-lg">
                {slides[currentSlide].description}
              </p>
              <div className="pt-4 flex gap-4 justify-center">
                <Button asChild size="lg" className="text-base gradient-primary border-0 shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                  <Link href="/portfolio">View Our Collabs</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 shadow-xl">
                  <Link href="/#contact">Get In Touch</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors flex items-center justify-center text-white"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors flex items-center justify-center text-white"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Quick Action Button */}
        <Link 
          href="/#contact" 
          className="absolute bottom-8 right-8 z-20 group"
        >
          <div className="relative w-20 h-20 rounded-full bg-primary hover:scale-110 transition-transform">
            <Image
              src="/images/3785.jpg"
              alt="Order Fast"
              fill
              className="rounded-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-medium">Order Fast</span>
            </div>
          </div>
        </Link>
      </section>
    </>
  )
}
