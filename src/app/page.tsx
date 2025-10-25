'use client'

import { HeroSection } from '@/components/home/hero-section'
import { ServicesSection } from '@/components/home/services-section'
import { AboutSection } from '@/components/home/about-section'
import { CollabsSection } from '@/components/home/collabs-section'
import { FeaturedProduct } from '@/components/home/featured-product'
import { TestimonialSection } from '@/components/home/testimonial-section'
import { ContactSection } from '@/components/home/contact-section'
import { BrandPartners } from '@/components/home/brand-partners'


export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <CollabsSection />
      <FeaturedProduct />
      <TestimonialSection />
      <ContactSection />
      <BrandPartners />
    </>
  )
}
