'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import { featuredProduct } from '@/data/collaborations'

export function FeaturedProduct() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative aspect-square rounded-2xl overflow-hidden"
          >
            <Image
              src={featuredProduct.image}
              alt={featuredProduct.name}
              fill
              className="object-contain"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="relative inline-block">
              <Image
                src="/images/badge-1.png"
                alt="Prime Product Badge"
                width={28}
                height={41}
                className="absolute -left-8 -top-2"
              />
              <p className="text-primary text-sm font-semibold tracking-wider uppercase">
                Prime Product
              </p>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold">
              {featuredProduct.title}
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {featuredProduct.description}
            </p>

            <Button asChild size="lg">
              <a 
                href={featuredProduct.instagramLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                View Product
                <ExternalLink className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
