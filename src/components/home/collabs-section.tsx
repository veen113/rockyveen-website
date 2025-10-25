'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { collaborations } from '@/data/collaborations'

export function CollabsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  
  // Get first 6 collaborations for preview
  const previewCollabs = collaborations.slice(0, 6)

  return (
    <section ref={ref} className="py-20 md:py-32" id="collabs">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-bold tracking-wider uppercase mb-4">
            Products That Shine
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            OUR <span className="text-gradient">COLLABS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewCollabs.map((collab, index) => (
            <motion.div
              key={collab.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border-2 hover:border-primary/30 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4 p-6">
                    <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={collab.image}
                        alt={collab.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {collab.name}
                        </h3>
                        {collab.badge && (
                          <span className="px-2 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full whitespace-nowrap">
                            {collab.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {collab.description}
                      </p>
                      {collab.instagramLink && (
                        <a
                          href={collab.instagramLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                        >
                          Check <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg">
            <Link href="/collabs">
              View All Collabs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
