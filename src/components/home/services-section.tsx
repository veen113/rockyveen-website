'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent } from '@/components/ui/card'
import { ExternalLink } from 'lucide-react'

const featuredServices = [
  {
    id: 'shein',
    name: 'SHEIN',
    image: '/images/sheinnnn.png',
    link: 'https://www.instagram.com/reel/DPv-P8uDukR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  },
  {
    id: 'c7-skates',
    name: 'C7 Skates',
    image: '/images/skate.jpg',
    link: 'https://www.instagram.com/reel/DPP_gR5jqHG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  },
  {
    id: 'glass-jars',
    name: 'Glass Jars',
    image: '/images/box.jpg',
    link: 'https://www.instagram.com/reel/DPI7DnoDvlF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  }
]

export function ServicesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 md:py-32 bg-muted/30" id="services">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-bold tracking-wider uppercase mb-4">
            Our Services
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Authentic <span className="text-gradient">UGC That Delivers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I create authentic, visually engaging content that helps brands connect with their audience and drive real results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 border-2 hover:border-primary/50">
                <a href={service.link} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-secondary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full gradient-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                      <ExternalLink className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-primary mt-2 flex items-center gap-1">
                      View Collabs <ExternalLink className="h-3 w-3" />
                    </p>
                  </CardContent>
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
