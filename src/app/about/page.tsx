'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Camera, Mic, Lightbulb, Edit } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const equipment = [
  { icon: Camera, name: 'Camera', detail: 'Sony A7 IV with cinema lenses' },
  { icon: Mic, name: 'Audio', detail: 'Rode Wireless GO II' },
  { icon: Lightbulb, name: 'Lighting', detail: 'Aputure MC RGBWW panels' },
  { icon: Edit, name: 'Editing', detail: 'Adobe Premiere Pro, CapCut' },
]

const niches = ['Beauty', 'Fitness', 'Tech', 'Food', 'Lifestyle']

const funFacts = [
  { emoji: '☕', text: 'Coffee enthusiast (3+ cups daily)' },
  { emoji: '🏋️', text: 'Fitness junkie & early riser' },
  { emoji: '🎯', text: 'Always testing new hooks' },
  { emoji: '📊', text: 'Data nerd at heart' },
]

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="relative aspect-square rounded-2xl bg-muted overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <p className="text-sm">Profile Photo</p>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-widest">
                  About Me
                </p>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Hi, I'm Fathima
                </h1>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a UGC creator and content strategist obsessed with turning views into revenue.
                </p>
                <p>
                  I started creating content in 2020 when I realized most brands were missing a massive 
                  opportunity: authentic, relatable videos that actually convert. Since then, I've worked 
                  with 50+ brands across beauty, fitness, tech, food, and lifestyle, helping them crack 
                  the code on scroll-stopping UGC.
                </p>
                <p>
                  My approach is simple: <strong className="text-foreground">data over vanity metrics</strong>. 
                  Every video I create is engineered for performance—from the hook that captures attention 
                  in 0.5 seconds to the CTA that drives action. I don't just make pretty content; I make 
                  content that works.
                </p>
                <p>
                  When I'm not filming, you'll find me analyzing TikTok trends, testing new hooks, or 
                  perfecting my cold brew recipe. I'm a firm believer that great UGC is equal parts art 
                  and science—and I bring both to every project.
                </p>
              </div>

              <Button asChild size="lg">
                <Link href="/contact">Let's Collaborate</Link>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Niches */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">My Niches</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {niches.map((niche) => (
              <div
                key={niche}
                className="px-6 py-3 rounded-full bg-primary/10 text-primary font-medium"
              >
                {niche}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Equipment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Equipment & Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipment.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card>
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.detail}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">How I Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                step: '01',
                title: 'Discovery',
                desc: 'Deep dive into your brand, audience, and goals',
              },
              {
                step: '02',
                title: 'Strategy',
                desc: 'Develop hooks and concepts based on data',
              },
              {
                step: '03',
                title: 'Production',
                desc: 'Professional filming with attention to detail',
              },
              {
                step: '04',
                title: 'Optimization',
                desc: 'Revisions and performance recommendations',
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex gap-4 p-6 rounded-lg bg-muted/30"
              >
                <div className="text-4xl font-bold text-primary/20">{item.step}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Fun Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-4 p-4 rounded-lg bg-muted/30"
              >
                <span className="text-3xl">{fact.emoji}</span>
                <p className="text-sm font-medium">{fact.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center p-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Create Content That Doesn't Just Get Views—It Gets Results
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Ready to work together? Let's discuss your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/portfolio">View My Work</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
