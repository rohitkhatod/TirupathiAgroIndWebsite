export const siteConfig = {
  name: 'Tirupathi Agro',
  url: 'https://www.tirupathiagro.com',
  description:
    'Advanced turf agronomy solutions for golf courses, sports turf, and professional landscape management.',
  keywords: [
    'turf agronomy',
    'golf course fertilizers',
    'turf grass nutrition',
    'soil conditioners for turf',
    'professional turf management',
    'sports turf fertilizers'
  ]
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  overview: string;
  benefits: string[];
  specs: string[];
  applicationRate: string;
  usage: string;
  suitability: string;
  pdf: string;
};

export const products: Product[] = [
  {
    slug: 'terra-matrix-sc',
    name: 'Terra Matrix SC',
    category: 'Soil Conditioners',
    overview: 'A carbon-rich rootzone conditioner designed to improve CEC, drainage, and microbial resilience.',
    benefits: ['Improves infiltration', 'Reduces compaction stress', 'Builds long-term soil structure'],
    specs: ['Organic carbon: 32%', 'pH buffered', 'Granular 2-4 mm'],
    applicationRate: '80-120 kg/acre every 45 days during active growth.',
    usage: 'Broadcast after aeration and irrigate with 6-8 mm water.',
    suitability: 'Golf fairways, cricket outfields, and sod farms.',
    pdf: '/downloads/terra-matrix-sc.pdf'
  },
  {
    slug: 'chlorogreen-bio',
    name: 'ChloroGreen Bio',
    category: 'Biostimulants',
    overview: 'Seaweed and amino-acid complex for chlorophyll development and stress recovery.',
    benefits: ['Boosts photosynthesis', 'Improves abiotic stress tolerance', 'Accelerates post-play recovery'],
    specs: ['Ascophyllum extract: 18%', 'Free amino acids: 9%', 'Liquid concentrate'],
    applicationRate: '500 ml/acre foliar spray at 15-day intervals.',
    usage: 'Apply in early morning with non-ionic surfactant.',
    suitability: 'Sports turf, greens surrounds, and premium lawns.',
    pdf: '/downloads/chlorogreen-bio.pdf'
  },
  {
    slug: 'micro-pro-turf',
    name: 'MicroPro Turf',
    category: 'Micronutrients',
    overview: 'Chelated micronutrient blend for color, root metabolism, and stress resilience.',
    benefits: ['Corrects hidden deficiencies', 'Enhances turf color', 'Supports enzymatic function'],
    specs: ['Fe EDTA: 6%', 'Zn EDTA: 3%', 'Mn EDTA: 2%'],
    applicationRate: '300 g/acre in 200 L water monthly.',
    usage: 'Compatible with most foliar nutrition programs.',
    suitability: 'All managed cool and warm season turf.',
    pdf: '/downloads/micro-pro-turf.pdf'
  }
];

export const blogPosts = [
  {
    slug: 'seasonal-golf-course-fertilizer-program',
    title: 'Seasonal Fertilizer Program for Championship Golf Turf',
    excerpt: 'A scientific nutrient calendar for density, color, and playability throughout the year.',
    category: 'Golf Course Maintenance'
  },
  {
    slug: 'soil-health-metrics-for-sports-turf',
    title: 'Soil Health Metrics Every Sports Turf Manager Should Track',
    excerpt: 'From CEC to infiltration, learn the indicators that drive high-performance playing surfaces.',
    category: 'Soil Health'
  },
  {
    slug: 'biostimulants-for-heat-stress-management',
    title: 'Using Biostimulants to Manage Heat Stress in Turfgrass',
    excerpt: 'Practical strategies to reduce summer decline and improve post-stress recovery.',
    category: 'Turf Nutrition'
  }
];
