import { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 'Starting at $500',
    description: 'Perfect for brands testing UGC or launching a single Instagram campaign',
    features: [
      '3 Instagram Reels (15-60 seconds each)',
      '2 hook variations per video',
      'Optimized for Reels & Stories',
      'Raw footage included',
      '1 round of revisions',
      '5-7 day turnaround',
      'Perpetual UGC usage rights',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 'Starting at $1,200',
    popular: true,
    description: 'For brands running active Instagram campaigns who need volume and variety',
    features: [
      '8 Instagram Reels (15-60 seconds each)',
      '3-5 hook variations per video',
      'Reels, Stories & Feed formats',
      'Raw footage + B-roll included',
      '2 rounds of revisions',
      'Priority 3-5 day turnaround',
      'Perpetual UGC usage rights',
      'Instagram performance optimization',
    ],
  },
  {
    id: 'retainer',
    name: 'Retainer',
    price: 'Custom (typically $3,000-$5,000/month)',
    description: 'For brands who need ongoing, high-volume Instagram content with strategic support',
    features: [
      '20-30 Instagram Reels per month',
      'Unlimited hook variations',
      'All Instagram formats (Reels, Stories, Feed)',
      'Raw footage + B-roll library',
      'Unlimited revisions',
      '48-hour rush turnaround available',
      'Perpetual UGC usage rights',
      'Monthly Instagram strategy calls',
      'A/B testing recommendations',
      'Dedicated Slack channel',
    ],
  },
]

export const faqs = [
  {
    question: "What's your typical turnaround time?",
    answer: "Standard turnaround is 5-7 business days from brief approval to final delivery. Rush delivery (2-3 days) is available for an additional fee. Retainer clients get priority scheduling and faster turnaround.",
  },
  {
    question: 'Do you provide usage rights for the content?',
    answer: "Yes! All packages include perpetual UGC usage rights for paid advertising. You own the content and can use it across all your marketing channels—social ads, website, email, etc.",
  },
  {
    question: "What's included in your revision policy?",
    answer: 'Every package includes 2 rounds of revisions. This covers edits to pacing, music, captions, color grading, and minor script adjustments. Major concept changes may require additional fees.',
  },
  {
    question: 'What Instagram formats do you create?',
    answer: "I create content optimized for all Instagram formats: Reels (9:16), Stories (9:16), and Feed posts (1:1 and 4:5). All content is designed to maximize engagement and performance on Instagram.",
  },
  {
    question: 'How do you ensure content aligns with our brand?',
    answer: "Before production, I review your brand guidelines, previous content, and competitor landscape. You'll approve storyboards and hooks before filming. I also provide a brand questionnaire to capture your voice, values, and visual preferences.",
  },
  {
    question: 'What niches do you specialize in?',
    answer: "I have deep expertise in Beauty, Fitness, Tech, Food, and Lifestyle. I've worked with 50+ brands across these verticals and understand the unique hooks, pain points, and conversion triggers for each audience.",
  },
  {
    question: 'Do you offer script writing or just production?',
    answer: "I offer full-service UGC creation, including concept development, scriptwriting, hook testing, filming, and editing. You can also bring your own scripts if you prefer—I'm flexible!",
  },
  {
    question: 'What equipment do you use?',
    answer: 'I shoot on a Sony A7 IV with cinema lenses for crisp, professional footage. Audio is captured with Rode Wireless GO II for crystal-clear sound. Lighting is handled with Aputure MC RGBWW panels. Editing is done in Adobe Premiere Pro and CapCut.',
  },
]
