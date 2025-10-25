'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent } from '@/components/ui/card'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    id: 1,
    quote: "I purchased the products recommended by Rockyveen, and they turned out to be incredibly beneficial and worth every penny!",
    author: "Sam Johnson",
    role: "Verified Customer",
    avatar: "/images/coffee.jpg"
  },
  {
    id: 2,
    quote: "RockyVeen's content is authentic and engaging. His reviews helped me make confident purchasing decisions. Highly recommend!",
    author: "Emily Chen",
    role: "Fashion Enthusiast",
    avatar: "/images/shoe.jpg"
  },
  {
    id: 3,
    quote: "Working with Rocky was amazing! His UGC content drove real results for our brand. Professional, creative, and reliable.",
    author: "Marcus Williams",
    role: "Brand Manager",
    avatar: "/images/headset.jpg"
  },
  {
    id: 4,
    quote: "The quality of Rocky's content is top-notch. His authentic approach really resonates with our target audience.",
    author: "Sarah Martinez",
    role: "Marketing Director",
    avatar: "/images/box.jpg"
  }
]

export function TestimonialSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const handlePrevious = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What People Say
            </h2>
            <p className="text-muted-foreground">
              Trusted by customers and brands alike
            </p>
          </div>

          <div className="relative">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
              >
                <Card className="border-2">
                  <CardContent className="p-8 md:p-12 text-center space-y-8">
                    <Quote className="h-16 w-16 text-primary mx-auto opacity-50" />
                    
                    <p className="text-xl md:text-2xl font-semibold leading-relaxed min-h-[120px] flex items-center justify-center">
                      {testimonials[currentIndex].quote}
                    </p>

                    <div className="flex items-center justify-center gap-4 pt-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden relative bg-muted">
                        <Image
                          src={testimonials[currentIndex].avatar}
                          alt={testimonials[currentIndex].author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-lg">{testimonials[currentIndex].author}</p>
                        <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrevious}
                className="pointer-events-auto rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                className="pointer-events-auto rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'w-8 bg-primary' 
                      : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
