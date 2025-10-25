export interface Project {
  id: string
  slug: string
  title: string
  niche: string[]
  platform: string[]
  format: string[]
  thumbnail: string
  images: string[]
  videoUrl?: string
  description: string
  client: string
  timeline: string
  deliverables: string[]
  challenge: string
  strategy: string
  results: {
    metric: string
    value: string
    description?: string
  }[]
  testimonial?: {
    quote: string
    author: string
    role: string
    company: string
    avatar?: string
  }
  tags: string[]
  featured: boolean
  publishedAt: string
}

export interface Service {
  id: string
  name: string
  price: string
  popular?: boolean
  features: string[]
  description: string
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  avatar?: string
  rating?: number
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  thumbnail: string
  category: string
  tags: string[]
  publishedAt: string
  readTime: number
}

export interface MediaKit {
  reach: {
    total: string
    platforms: {
      name: string
      followers: string
      engagement: string
    }[]
  }
  demographics: {
    age: { range: string; percentage: number }[]
    gender: { type: string; percentage: number }[]
    locations: { country: string; percentage: number }[]
  }
  collaborations: string[]
  contact: {
    email: string
    social: { platform: string; handle: string; url: string }[]
  }
}
