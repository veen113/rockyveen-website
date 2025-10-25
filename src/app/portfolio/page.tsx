'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import { collaborations } from '@/data/collaborations'

const categories = [
  { value: 'all', label: 'All' },
  { value: 'food-beverage', label: 'Food & Beverage' },
  { value: 'beauty-fashion', label: 'Beauty & Fashion' },
  { value: 'tech', label: 'Tech' },
  { value: 'health', label: 'Health' }
]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredCollabs = selectedCategory === 'all'
    ? collaborations
    : collaborations.filter((collab) => collab.category === selectedCategory)

  return (
    <div className="pt-20 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Our <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore {collaborations.length} brand collaborations across different categories
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mb-12">
          <p className="text-sm font-medium mb-3">Category</p>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.value)}
                className={selectedCategory === category.value ? 'gradient-primary border-0' : ''}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <p className="text-sm text-muted-foreground mb-6">
          Showing {filteredCollabs.length} {filteredCollabs.length === 1 ? 'collaboration' : 'collaborations'}
        </p>

        {/* Collaborations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCollabs.map((collab, index) => (
            <motion.div
              key={collab.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="group overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border-2 hover:border-primary/30 hover:-translate-y-1 h-full">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={collab.image}
                    alt={collab.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Badge */}
                  {collab.badge && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-3 py-1 rounded-full gradient-primary text-white text-xs font-bold shadow-lg">
                        {collab.badge}
                      </span>
                    </div>
                  )}
                  
                  {/* Featured Badge */}
                  {collab.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold shadow-lg">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {collab.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {collab.description}
                  </p>
                  <div className="flex gap-2 pt-2">
                    {collab.link && collab.link !== '#' && (
                      <Button asChild variant="outline" size="sm" className="flex-1">
                        <a href={collab.link} target="_blank" rel="noopener noreferrer">
                          Visit <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </Button>
                    )}
                    {collab.instagramLink && (
                      <Button asChild size="sm" className="flex-1 gradient-primary border-0">
                        <a href={collab.instagramLink} target="_blank" rel="noopener noreferrer">
                          View Collab <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCollabs.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lg text-muted-foreground mb-4">
              No collaborations found in this category.
            </p>
            <Button
              variant="outline"
              onClick={() => setSelectedCategory('all')}
            >
              Show All
            </Button>
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center p-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to <span className="text-gradient">Collaborate?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's create authentic content that drives real results for your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gradient-primary border-0">
              <Link href="/#contact">Get In Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
