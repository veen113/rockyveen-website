export interface Collaboration {
  id: string
  name: string
  category: 'food-beverage' | 'beauty-fashion' | 'tech' | 'health'
  description: string
  image: string
  link: string
  instagramLink?: string
  featured?: boolean
  badge?: 'NEW' | 'PREMIUM'
}

export const collaborations: Collaboration[] = [
  // Featured Collaborations
  {
    id: 'shein',
    name: 'SHEIN',
    category: 'beauty-fashion',
    description: 'SHEIN is a global fast-fashion brand known for trendy, affordable clothing and accessories targeting young shoppers.',
    image: '/images/shein (2).png',
    link: 'https://us.shein.com/',
    instagramLink: 'https://www.instagram.com/reel/DPv-P8uDukR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    featured: true,
    badge: 'NEW'
  },
  {
    id: 'c7-skates',
    name: 'C7 Skates',
    category: 'beauty-fashion',
    description: 'Premium roller skates designed for style and performance.',
    image: '/images/skate.jpg',
    link: 'https://c7skates.com/',
    instagramLink: 'https://www.instagram.com/reel/DPP_gR5jqHG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    featured: true
  },
  {
    id: 'glass-jars',
    name: 'Glass Jars',
    category: 'beauty-fashion',
    description: 'Elegant glass storage jars with bamboo lids for kitchen organization.',
    image: '/images/box.jpg',
    link: '#',
    instagramLink: 'https://www.instagram.com/reel/DPI7DnoDvlF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    featured: true
  },
  {
    id: 'airpods',
    name: 'Airpods',
    category: 'tech',
    description: 'Experience crystal-clear sound and all-day comfort with our premium headset — designed for seamless calls, immersive music, and ultimate focus.',
    image: '/images/headset.jpg',
    link: '#',
    instagramLink: 'https://www.instagram.com/reel/DOaPeZEDqpQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  },
  {
    id: 'car-phone-holder',
    name: 'Car Phone Holder',
    category: 'tech',
    description: 'Keep your phone secure and accessible on every drive with our durable car phone holder.',
    image: '/images/car ph.jpg',
    link: '#',
    instagramLink: 'https://www.instagram.com/reel/DOFnjHuAEx4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  },
  {
    id: 'headset',
    name: 'Headset',
    category: 'tech',
    description: 'Enjoy crystal-clear audio and all-day comfort with our premium headset.',
    image: '/images/earbud (1).jpg',
    link: 'https://beacons.ai/rockyveen',
    instagramLink: 'https://beacons.ai/rockyveen?fbclid=PAZXh0bgNhZW0CMTEAAacTw632j5QAXo3gl1H3KMyRh07R1vZaxNOfHKBofMaTWqqzSVP51bKlHlNkjA_aem__UBFQrVrIrqYvnz8d5usWQ',
    badge: 'PREMIUM'
  },
  {
    id: 'air-purifier',
    name: 'Air Purifier',
    category: 'health',
    description: 'Breathe cleaner, fresher air with our efficient and quiet air purifier.',
    image: '/images/Air purifier (1).jpg',
    link: '#',
    instagramLink: 'https://www.instagram.com/reel/DOckuVRDpMh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  },
  {
    id: 'coffee',
    name: 'Coffee',
    category: 'food-beverage',
    description: 'Savor the rich aroma and bold flavor of freshly brewed coffee.',
    image: '/images/coffee (1).jpg',
    link: '#',
    instagramLink: 'https://www.instagram.com/reel/DOQzUueDoU8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  },
  // All Brands
  {
    id: 'fritaire',
    name: 'Fritaire',
    category: 'food-beverage',
    description: 'Smart air fryers and kitchen appliances that make healthy cooking simple.',
    image: '/images/Fritaire.png',
    link: 'https://fritaire.com/'
  },
  {
    id: 'java-factory',
    name: 'Java Factory',
    category: 'food-beverage',
    description: 'Premium coffee pods and blends crafted for bold flavor lovers.',
    image: '/images/Javafactory.png',
    link: 'https://javafactory.com/'
  },
  {
    id: 'nixplay',
    name: 'Nixplay',
    category: 'tech',
    description: 'Smart digital photo frames to share memories instantly.',
    image: '/images/nixplay.png',
    link: 'https://www.nixplay.com/'
  },
  {
    id: 'tiken-ware',
    name: 'Tiken Ware',
    category: 'tech',
    description: 'Eco-friendly kitchenware designed for modern living.',
    image: '/images/Tiken.png',
    link: 'https://www.tikenware.com/'
  },
  {
    id: 'uvi-lunch-box',
    name: 'Uvi Lunch Box',
    category: 'food-beverage',
    description: 'Innovative lunch boxes that keep your meals fresh and tasty.',
    image: '/images/UVI (1).png',
    link: 'https://uvilunchbox.com/?srsltid=AfmBOop2SbW5SLRD5_d5gmPWBcjrSHqCM2OGfHtIFGkNz-TcHIrkDUvH'
  },
  {
    id: 'encool',
    name: 'Encool',
    category: 'beauty-fashion',
    description: 'Cooling solutions and lifestyle gadgets for daily comfort.',
    image: '/images/encool.png',
    link: 'https://encool.com/'
  },
  {
    id: 'slimwalt',
    name: 'Slimwalt',
    category: 'beauty-fashion',
    description: 'Compact wallets blending fashion with functionality.',
    image: '/images/SW (1).png',
    link: 'https://slimwalt.com/'
  },
  {
    id: 'pureboost',
    name: 'Pureboost',
    category: 'health',
    description: 'Clean energy drinks packed with antioxidants and vitamins.',
    image: '/images/pureboost (1).png',
    link: 'https://pureboost.com/'
  },
  {
    id: 'casa-maestri',
    name: 'Casa Maestri Distillery',
    category: 'food-beverage',
    description: 'Award-winning tequila handcrafted in the heart of Mexico.',
    image: '/images/casamaestri.png',
    link: 'https://casamaestri.com/?srsltid=AfmBOornmLkWyz4xpMu6KCOJQkjSVdLSdMfQDFYDvMqQBe8IonKkui4Q'
  },
  {
    id: 'joy-front',
    name: 'Joy Front',
    category: 'beauty-fashion',
    description: 'Elegant accessories designed to brighten your everyday style.',
    image: '/images/joyfront.png',
    link: 'https://joyfront.com/'
  },
  {
    id: 'marcala',
    name: 'Marcala Home & Auto',
    category: 'beauty-fashion',
    description: 'Trusted essentials for your home and automotive care.',
    image: '/images/marcala.png',
    link: 'https://www.marcalallc.com/'
  },
  {
    id: 'gallery-grace',
    name: 'Gallery Grace',
    category: 'beauty-fashion',
    description: 'Art-inspired décor and home pieces for modern interiors.',
    image: '/images/Galary grace.png',
    link: 'https://www.gallerygrace.com/'
  },
  {
    id: 'two-rivers-coffee',
    name: 'Two Rivers Coffee',
    category: 'food-beverage',
    description: 'Small-batch roasted coffee offering a world of flavor.',
    image: '/images/TRC.png',
    link: 'https://www.tworiversdirect.com/?srsltid=AfmBOorOZI35UO904CCjyT00H_wZYURzv1kN1Rm459pThyBVBe1GBLEV'
  },
  {
    id: 'maelreg',
    name: 'Maelreg',
    category: 'health',
    description: 'Performance-driven products for active lifestyles.',
    image: '/images/maelreg.png',
    link: 'https://www.maelreg.com/'
  },
  {
    id: 'polarpro',
    name: 'PolarPro',
    category: 'tech',
    description: 'Premium camera filters and accessories for creators.',
    image: '/images/polarpro (1).png',
    link: 'https://www.polarpro.com/'
  },
  {
    id: 'evrid-wear',
    name: 'Evrid Wear',
    category: 'tech',
    description: 'Smart apparel combining comfort with innovation.',
    image: '/images/Evrid water.png',
    link: 'https://evridwear.com/'
  },
  {
    id: 'ascrono',
    name: 'Ascrono',
    category: 'tech',
    description: 'Modern tech accessories for smart, stylish users.',
    image: '/images/ascreno.png',
    link: 'https://ascrono.com/'
  },
  {
    id: 'jabasic',
    name: 'Jabasic',
    category: 'tech',
    description: 'Trendy and durable footwear for casual comfort.',
    image: '/images/jabasic.png',
    link: 'https://jabasicshoes.com/'
  },
  {
    id: 'itour-translator',
    name: 'iTourTranslator',
    category: 'tech',
    description: 'Real-time translation tools for travelers and guides.',
    image: '/images/Itour Translatour.png',
    link: 'https://www.itourtranslator.com/?srsltid=AfmBOoqc88EgIqs4JpZMy1W7_LKR1xGfzpTfoAX_0q725XvEONBq98Dj'
  },
  {
    id: 'gratsi-wine',
    name: 'Gratsi Wine',
    category: 'health',
    description: 'Sustainable, high-quality wines for relaxed gatherings.',
    image: '/images/Gratsi.png',
    link: 'https://gratsi.com/?srsltid=AfmBOooxCcnEtKvAeLsmrdDnQalKUxfo25GkfzRGlsLZbdfaO5XVbedM'
  },
  {
    id: 'madison-park',
    name: 'Madison Park',
    category: 'health',
    description: 'Elegant home décor and bedding with timeless charm.',
    image: '/images/Madison.png',
    link: 'https://madisonpark.com/'
  },
  {
    id: 'cocinare',
    name: 'Cocinaré',
    category: 'food-beverage',
    description: 'Premium kitchen tools designed for home chefs and creators.',
    image: '/images/Cocinare.png',
    link: 'https://cocinare.com/?srsltid=AfmBOooJoneBEsWpIBvXiHJUdlAsmCZ-UIrYc0-q6z39BgxhC6ycYpDi'
  },
  {
    id: 'heb',
    name: 'H-E-B',
    category: 'food-beverage',
    description: 'A trusted grocery chain delivering freshness and quality.',
    image: '/images/H.E.B.png',
    link: 'https://www.heb.com/'
  },
  {
    id: 'lesongtoy',
    name: 'Lesongtoy',
    category: 'beauty-fashion',
    description: 'Innovative kids\' toys made to inspire creativity and fun.',
    image: '/images/Lesong.png',
    link: 'https://lesongtoy.com/'
  },
  {
    id: 'iclever',
    name: 'iClever',
    category: 'tech',
    description: 'Smart gadgets and accessories built for modern lifestyles.',
    image: '/images/iclever.png',
    link: 'https://iclever.com/'
  },
  {
    id: 'svvimer',
    name: 'Svvimer',
    category: 'health',
    description: 'Fitness wear designed for swimmers and active athletes.',
    image: '/images/SVVIMER (1).png',
    link: 'https://svvimer.com/'
  },
  {
    id: 'vantrue',
    name: 'VANTRUE',
    category: 'health',
    description: 'Advanced dash cams providing reliable safety and clarity on the road.',
    image: '/images/Vantrue (1).png',
    link: 'https://www.vantrue.com/'
  },
  {
    id: 'next-step-psychiatry',
    name: 'Next Step Psychiatry',
    category: 'health',
    description: 'Professional mental health support and wellness care.',
    image: '/images/psych.png',
    link: 'https://nextsteppsychiatry.com/'
  },
  {
    id: 'fruit-riot',
    name: 'Fruit Riot',
    category: 'food-beverage',
    description: 'Refreshing fruit-based beverages for every mood.',
    image: '/images/fruitriot.png',
    link: 'https://fruitriot.com/'
  },
  {
    id: 'iamburgerman',
    name: 'Iamburgerman',
    category: 'food-beverage',
    description: 'Juicy gourmet burgers crafted with premium ingredients.',
    image: '/images/Lamburgerman.png',
    link: 'https://www.burgerman.in/'
  },
  {
    id: 'mezbaan-kitchen',
    name: 'Mezbaan Kitchen',
    category: 'food-beverage',
    description: 'Authentic Indian dishes celebrating traditional flavors.',
    image: '/images/Mezbaaz Kitchen.png',
    link: 'https://mezbaankitchen.com/'
  },
  {
    id: 'sashka-co',
    name: 'Sashka Co. Bracelets',
    category: 'beauty-fashion',
    description: 'Handcrafted glass bead bracelets empowering artisans worldwide.',
    image: '/images/sashka.png',
    link: 'https://sashkaco.com/'
  },
  {
    id: 'modern-nails',
    name: 'Modern Nails Salon',
    category: 'beauty-fashion',
    description: 'Luxury nail treatments blending style, care, and creativity.',
    image: '/images/Mordern Nailsalon (1).png',
    link: 'https://cuttingedgenails.com/'
  },
  {
    id: 'iron-age',
    name: 'Iron Age Korean Steakhouse',
    category: 'food-beverage',
    description: 'Authentic Korean BBQ experience with modern dining flair.',
    image: '/images/iron age.png',
    link: 'https://ironagekoreansteakhouse.com/'
  },
  {
    id: 'pinchme',
    name: 'PINCHme',
    category: 'food-beverage',
    description: 'Discover and try free samples from top global brands.',
    image: '/images/pinchme.png',
    link: 'https://www.pinchme.com/'
  },
  {
    id: 'chalo-india',
    name: 'chalo India Frisco',
    category: 'food-beverage',
    description: 'Indian dining destination offering rich, authentic flavors.',
    image: '/images/Chalo India (1).png',
    link: 'https://chaloindiausa.com/'
  },
  {
    id: 'buc',
    name: 'Buc',
    category: 'beauty-fashion',
    description: 'Everyday essentials crafted for style and functionality.',
    image: '/images/Buc.png',
    link: 'https://buc-ees.com/'
  },
  {
    id: 'autel-energy',
    name: 'Autel Energy',
    category: 'health',
    description: 'Innovative EV chargers and clean energy solutions.',
    image: '/images/Autel.png',
    link: 'https://autelenergy.com/global'
  },
  {
    id: 'ovia-coffee',
    name: 'Ovia Coffee',
    category: 'food-beverage',
    description: 'Craft coffee brand offering rich, aromatic blends worldwide.',
    image: '/images/coffee.png',
    link: 'https://www.oviacoffee.com/'
  }
]

export const featuredProduct = {
  id: 'meteer-robot',
  name: 'Meteer AI Robot',
  title: 'Smartest Play Buddy!',
  description: 'Meet Meteer — the AI interactive robot toy designed to be your child\'s smartest play buddy! From chatting and dancing to playing music on command, Meteer keeps kids entertained while encouraging creativity, movement, and screen-free play. With simple Bluetooth control and an easy-to-use app, parents love the quick setup and sturdy design. Perfect for kids ages 3+, Meteer makes an unforgettable birthday or holiday gift that brings learning and fun together.',
  image: '/images/robot.png',
  instagramLink: 'https://www.instagram.com/reel/DPK6d6Gjinw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
}

export const brandPartners = [
  {
    id: 1,
    image: '/images/image1.png',
    brands: ['KSH', 'SASKALCO', 'ModernNail Saloon']
  },
  {
    id: 2,
    image: '/images/image2.png',
    brands: ['CASAMASA', 'PURE BOOST', 'ENCOOL']
  },
  {
    id: 3,
    image: '/images/image3.png',
    brands: ['iCLEVER', 'BURGER', 'VANTRUE']
  }
]
