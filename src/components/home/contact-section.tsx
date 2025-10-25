'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, Mail, MapPin } from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'

declare global {
  interface Window {
    emailjs?: {
      send: (serviceId: string, templateId: string, params: Record<string, string>) => Promise<{ text: string }>
    }
  }
}

export function ContactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)
    
    const templateParams = {
      from_name: formData.get('name') as string,
      from_email: formData.get('email') as string,
      from_phone: formData.get('phone') as string,
      message: formData.get('message') as string,
      to_name: 'RockyVeen',
    }

    try {
      // EmailJS integration
      // TO ENABLE DIRECT EMAIL: Follow instructions in CONTACT_FORM_SETUP.md
      // Replace these IDs with your actual EmailJS credentials from https://www.emailjs.com/
      const SERVICE_ID = 'service_h04omy2' // ✅ Your EmailJS service ID
      const TEMPLATE_ID = 'template_mced23s' // ✅ Your EmailJS template ID
      
      if (window.emailjs) {
        // EmailJS is configured - send directly
        console.log('Sending email with:', { SERVICE_ID, TEMPLATE_ID })
        
        const response = await window.emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          templateParams
        )
        
        console.log('EmailJS response:', response)
        
        if (response.text === 'OK') {
          toast({
            title: 'Message Sent! ✅',
            description: 'Thank you for reaching out. I\'ll get back to you soon!',
          })
          form.reset()
        }
      } else {
        // EmailJS not configured - use email client fallback
        const subject = encodeURIComponent('Contact from RockyVeen Website')
        const body = encodeURIComponent(
          `Hi Rocky,\n\nName: ${templateParams.from_name}\nEmail: ${templateParams.from_email}\nPhone: ${templateParams.from_phone}\n\nMessage:\n${templateParams.message}\n\n---\nSent from rockyveen.com contact form`
        )
        window.location.href = `mailto:collabs@rockyveen.com?subject=${subject}&body=${body}`
        
        toast({
          title: 'Opening Your Email App 📧',
          description: 'Click Send in your email app to complete your message.',
        })
        form.reset()
      }
    } catch (error: any) {
      console.error('Email error:', error)
      
      // Show specific error message
      if (error?.text?.includes('service ID')) {
        toast({
          title: 'Configuration Error ⚠️',
          description: 'Please verify your EmailJS Service ID in the dashboard.',
          variant: 'destructive',
        })
      } else {
        // Fallback: Open email client
        const subject = encodeURIComponent('Contact from RockyVeen Website')
        const body = encodeURIComponent(
          `Hi Rocky,\n\nName: ${templateParams.from_name}\nEmail: ${templateParams.from_email}\nPhone: ${templateParams.from_phone}\n\nMessage:\n${templateParams.message}\n\n---\nSent from rockyveen.com contact form`
        )
        window.location.href = `mailto:collabs@rockyveen.com?subject=${subject}&body=${body}`
        
        toast({
          title: 'Opening Your Email App 📧',
          description: 'Click Send in your email app to complete your message.',
        })
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section ref={ref} className="py-20 md:py-32 bg-muted/30" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to collaborate? Let's create something amazing together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Online Query</h3>
                <p className="text-muted-foreground mb-6">
                  Booking request{' '}
                  <a href="tel:+19452321969" className="text-primary hover:underline">
                    +1 945-232-1969
                  </a>
                  {' '}or fill out the form
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      required
                      disabled={isSubmitting}
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number (Optional)"
                    disabled={isSubmitting}
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    required
                    disabled={isSubmitting}
                  />
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Contact Me'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="h-full relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <Image
                  src="/images/form-pattern.png"
                  alt="Pattern"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-8 relative z-10 h-full flex flex-col justify-center space-y-8">
                <h3 className="text-2xl font-bold">Contact Us</h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Contact Request</p>
                    <a 
                      href="tel:+19452321969" 
                      className="text-2xl font-bold text-primary hover:underline inline-flex items-center gap-2"
                    >
                      <Phone className="h-6 w-6" />
                      +1 945-232-1969
                    </a>
                  </div>

                  <div className="h-px bg-border" />

                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Location</p>
                    <div className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <address className="not-italic">
                        Atlanta, United States of America
                      </address>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Email</p>
                    <a 
                      href="mailto:collabs@rockyveen.com" 
                      className="text-lg text-primary hover:underline inline-flex items-center gap-2"
                    >
                      <Mail className="h-5 w-5" />
                      collabs@rockyveen.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
