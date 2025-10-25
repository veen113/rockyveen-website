'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Phone } from 'lucide-react'

export function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 md:py-32" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-accent text-sm font-bold tracking-wider uppercase">
              Our Story
            </p>
            <h2 className="text-3xl md:text-5xl font-bold">
              Every Brand Has a <span className="text-gradient">Story</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm Rocky Veen, a UGC creator turning products into stories that connect with audiences. 
              I've worked with brands like Iron Age, ModernNail, Sashka Co, PINCHme, Vantrue, and Fruit Pop — 
              creating authentic content that inspires engagement and lasting impact.
            </p>
            <div className="pt-4">
              <p className="text-sm font-semibold text-muted-foreground mb-2">
                Book Through Call
              </p>
              <a 
                href="tel:+19452321969" 
                className="text-2xl font-bold text-primary hover:underline inline-flex items-center gap-2"
              >
                <Phone className="h-6 w-6" />
                +1 945-232-1969
              </a>
            </div>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/10">
              <Image
                src="/images/About.jpg"
                alt="About RockyVeen"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden border-4 border-accent shadow-2xl shadow-accent/30"
            >
              <Image
                src="/images/Abb.jpg"
                alt="RockyVeen creating content"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
