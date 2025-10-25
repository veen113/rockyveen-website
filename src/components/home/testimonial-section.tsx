'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent } from '@/components/ui/card'
import { Quote } from 'lucide-react'

export function TestimonialSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section 
      ref={ref} 
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/image (1).png"
          alt="Testimonial Background"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-2">
            <CardContent className="p-8 md:p-12 text-center space-y-8">
              <Quote className="h-16 w-16 text-primary mx-auto opacity-50" />
              
              <p className="text-2xl md:text-3xl font-bold leading-relaxed">
                I purchased the products recommended by Rockyveen, and they turned out to be incredibly beneficial and worth every penny!
              </p>

              <div className="flex items-center justify-center gap-4 pt-4">
                <div className="w-16 h-16 rounded-full overflow-hidden relative">
                  <Image
                    src="/images/testi-avatar.jpg"
                    alt="Sam Johnson"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-lg">Sam Johnson</p>
                  <p className="text-sm text-muted-foreground">Verified Customer</p>
                </div>
              </div>

              {/* Decorative separators */}
              <div className="flex items-center justify-center gap-4 pt-4">
                <div className="w-12 h-px bg-border" />
                <div className="w-12 h-px bg-border" />
                <div className="w-12 h-px bg-border" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
