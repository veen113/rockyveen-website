'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import { collaborations } from '@/data/collaborations'
import { cn } from '@/lib/utils'

const categories = [
  { value: 'all', label: 'Show All' },
  { value: 'food-beverage', label: 'Food & Beverage Brands' },
  { value: 'beauty-fashion', label: 'Beauty, Fashion & Lifestyle' },
  { value: 'tech', label: 'Tech' },
  { value: 'health', label: 'Health' }
]

export default function CollabsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredCollabs = selectedCategory === 'all' 
    ? collaborations 
    : collaborations.filter((collab) => collab.category === selectedCategory)

  return (
    <div className="pt-20 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-b from-muted/50 to-background py-16 mb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Link 
              href="/" 
              className="inline-flex items-center text-primary hover:underline mb-4"
            >
              ← HOME PAGE
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">CATEGORIES</h1>
            <p className="text-lg text-muted-foreground">
              Explore all {collaborations.length} brand collaborations across different categories
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                variant={selectedCategory === category.value ? 'default' : 'outline'}
                className={cn(
                  'transition-all duration-300',
                  selectedCategory === category.value && 'shadow-lg'
                )}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Collaborations Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredCollabs.map((collab, index) => (
            <motion.div
              key={collab.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden rounded-t-lg">
                    <Image
                      src={collab.image}
                      alt={collab.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {collab.badge && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                        {collab.badge}
                      </div>
                    )}
                  </div>
                  <div className="p-6 space-y-3">
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
                        <Button asChild size="sm" className="flex-1">
                          <a href={collab.instagramLink} target="_blank" rel="noopener noreferrer">
                            View Collab <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredCollabs.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lg text-muted-foreground">
              No collaborations found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
