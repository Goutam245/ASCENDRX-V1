import peptideBpc from '@/assets/peptide-bpc.png';
import peptideTb500 from '@/assets/peptide-tb500.png';
import peptideCjc from '@/assets/peptide-cjc.png';
import peptideEpitalon from '@/assets/peptide-epitalon.png';
import peptideSemax from '@/assets/peptide-semax.png';
import peptideGhk from '@/assets/peptide-ghk.png';
import peptideMk677 from '@/assets/peptide-mk677.png';
import peptidePt141 from '@/assets/peptide-pt141.png';
import blogFitness from '@/assets/blog-fitness.png';
import blogResearch from '@/assets/blog-research.png';
import blogLongevity from '@/assets/blog-longevity.png';

export const products = [
  {
    id: '1',
    name: 'BPC-157 Pro+',
    slug: 'bpc-157-pro',
    category: 'recovery',
    description: 'Advanced tissue repair and recovery peptide with maximum bioavailability.',
    longDescription: "BPC-157 Pro+ isn't just another peptide—it's your body's reset button. This pharmaceutical-grade formulation (99.9% pure, batch tested) accelerates tissue repair at the cellular level, helping you recover 40% faster from intense training. Backed by 15+ clinical studies and trusted by elite athletes worldwide.",
    price: 89.99,
    originalPrice: 109.99,
    image: peptideBpc,
    purity: 99.9,
    rating: 4.9,
    reviewCount: 248,
    inStock: true,
    stockCount: 45,
    dosages: ['5mg', '10mg', '15mg'],
    benefits: ['Accelerated Recovery', 'Tissue Repair', 'Reduced Inflammation', 'Joint Health'],
    tags: ['Best Seller', 'Research Backed'],
    featured: true,
  },
  {
    id: '2',
    name: 'TB-500 Elite',
    slug: 'tb-500-elite',
    category: 'recovery',
    description: 'Premium healing peptide for enhanced tissue regeneration and flexibility.',
    longDescription: 'TB-500 Elite represents the pinnacle of regenerative peptide science. This powerful thymosin beta-4 fragment promotes angiogenesis, cell migration, and tissue repair at the molecular level. Ideal for athletes seeking accelerated wound healing and improved flexibility.',
    price: 79.99,
    originalPrice: null,
    image: peptideTb500,
    purity: 99.8,
    rating: 4.8,
    reviewCount: 186,
    inStock: true,
    stockCount: 32,
    dosages: ['2mg', '5mg', '10mg'],
    benefits: ['Tissue Regeneration', 'Flexibility', 'Wound Healing', 'Cell Migration'],
    tags: ['Popular'],
    featured: true,
  },
  {
    id: '3',
    name: 'CJC-1295 + Ipamorelin',
    slug: 'cjc-1295-ipamorelin',
    category: 'muscle',
    description: 'Synergistic growth hormone releasing blend for lean muscle and recovery.',
    longDescription: 'The ultimate growth hormone optimization stack. This precisely dosed combination of CJC-1295 and Ipamorelin works synergistically to stimulate natural GH release, promoting lean muscle development, fat metabolism, and deep restorative sleep.',
    price: 149.99,
    originalPrice: 179.99,
    image: peptideCjc,
    purity: 99.9,
    rating: 4.9,
    reviewCount: 312,
    inStock: true,
    stockCount: 28,
    dosages: ['Blend 2.5mg', 'Blend 5mg', 'Blend 10mg'],
    benefits: ['Muscle Growth', 'Fat Loss', 'Better Sleep', 'Anti-Aging'],
    tags: ['Best Seller', 'Stack'],
    featured: true,
  },
  {
    id: '4',
    name: 'Epitalon Pure',
    slug: 'epitalon-pure',
    category: 'longevity',
    description: 'Telomerase activating peptide for cellular longevity and anti-aging.',
    longDescription: 'Epitalon Pure is at the forefront of longevity science. This tetrapeptide has been shown to activate telomerase, the enzyme responsible for maintaining telomere length—a key marker of cellular aging. Experience the science of living longer, better.',
    price: 129.99,
    originalPrice: null,
    image: peptideEpitalon,
    purity: 99.9,
    rating: 4.7,
    reviewCount: 94,
    inStock: true,
    stockCount: 18,
    dosages: ['10mg', '20mg', '50mg'],
    benefits: ['Telomere Support', 'Anti-Aging', 'Sleep Quality', 'Cellular Health'],
    tags: ['Longevity'],
    featured: true,
  },
  {
    id: '5',
    name: 'Semax Nootropic',
    slug: 'semax-nootropic',
    category: 'cognitive',
    description: 'Cognitive enhancement peptide for focus, memory, and mental clarity.',
    longDescription: 'Semax is a synthetic analog of ACTH that has been extensively studied for its nootropic and neuroprotective properties. Enhance your cognitive performance, improve memory formation, and experience unparalleled mental clarity.',
    price: 69.99,
    originalPrice: null,
    image: peptideSemax,
    purity: 99.8,
    rating: 4.8,
    reviewCount: 156,
    inStock: true,
    stockCount: 52,
    dosages: ['0.1%', '0.5%', '1%'],
    benefits: ['Focus', 'Memory', 'Mental Clarity', 'Neuroprotection'],
    tags: ['Nootropic'],
    featured: false,
  },
  {
    id: '6',
    name: 'GHK-Cu Complex',
    slug: 'ghk-cu-complex',
    category: 'longevity',
    description: 'Copper peptide complex for skin rejuvenation and wound healing.',
    longDescription: 'GHK-Cu is a naturally occurring copper complex that declines with age. This powerful peptide promotes collagen synthesis, skin regeneration, and has been shown to have remarkable anti-aging effects on both skin and systemic health.',
    price: 59.99,
    originalPrice: 74.99,
    image: peptideGhk,
    purity: 99.7,
    rating: 4.6,
    reviewCount: 203,
    inStock: true,
    stockCount: 67,
    dosages: ['50mg', '100mg', '200mg'],
    benefits: ['Skin Health', 'Collagen Synthesis', 'Wound Healing', 'Hair Growth'],
    tags: ['Sale'],
    featured: false,
  },
  {
    id: '7',
    name: 'MK-677 Oral',
    slug: 'mk-677-oral',
    category: 'muscle',
    description: 'Growth hormone secretagogue for muscle mass and bone density.',
    longDescription: 'MK-677 (Ibutamoren) is a potent, long-acting, orally-active growth hormone secretagogue. It mimics the GH stimulating action of ghrelin, leading to sustained increases in GH and IGF-1 levels. Perfect for those seeking enhanced muscle mass and bone density.',
    price: 99.99,
    originalPrice: null,
    image: peptideMk677,
    purity: 99.5,
    rating: 4.7,
    reviewCount: 278,
    inStock: true,
    stockCount: 41,
    dosages: ['10mg/30caps', '25mg/30caps', '25mg/60caps'],
    benefits: ['Muscle Mass', 'Bone Density', 'Sleep Quality', 'Recovery'],
    tags: ['Oral'],
    featured: false,
  },
  {
    id: '8',
    name: 'PT-141 Bremelanotide',
    slug: 'pt-141-bremelanotide',
    category: 'wellness',
    description: 'FDA-approved peptide for enhanced desire and performance.',
    longDescription: 'PT-141 works directly through the nervous system to increase desire, making it unique among enhancement options. This melanocortin receptor agonist has been FDA-approved and represents a breakthrough in intimate wellness.',
    price: 84.99,
    originalPrice: null,
    image: peptidePt141,
    purity: 99.8,
    rating: 4.5,
    reviewCount: 89,
    inStock: true,
    stockCount: 23,
    dosages: ['2mg', '5mg', '10mg'],
    benefits: ['Enhanced Desire', 'Performance', 'Wellness', 'Confidence'],
    tags: ['Wellness'],
    featured: false,
  },
];

export const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'muscle', name: 'Muscle & Strength', count: products.filter(p => p.category === 'muscle').length },
  { id: 'recovery', name: 'Recovery', count: products.filter(p => p.category === 'recovery').length },
  { id: 'longevity', name: 'Longevity', count: products.filter(p => p.category === 'longevity').length },
  { id: 'cognitive', name: 'Cognitive', count: products.filter(p => p.category === 'cognitive').length },
  { id: 'wellness', name: 'Wellness', count: products.filter(p => p.category === 'wellness').length },
];

export const testimonials = [
  {
    id: 1,
    name: 'Michael R.',
    age: 34,
    location: 'Austin, TX',
    rating: 5,
    product: 'BPC-157 Pro+',
    result: 'Recovered from a chronic shoulder injury in just 6 weeks',
    quote: "After 2 years of dealing with a nagging rotator cuff issue, BPC-157 Pro+ changed everything. I'm back to lifting heavy and pain-free. The quality and purity are unmatched.",
    verified: true,
  },
  {
    id: 2,
    name: 'Sarah K.',
    age: 29,
    location: 'Miami, FL',
    rating: 5,
    product: 'CJC-1295 + Ipamorelin',
    result: 'Lost 15 lbs of fat while gaining lean muscle',
    quote: "The body recomposition results have been incredible. Better sleep, more energy, and my body composition has completely transformed. This stack is worth every penny.",
    verified: true,
  },
  {
    id: 3,
    name: 'David L.',
    age: 52,
    location: 'Denver, CO',
    rating: 5,
    product: 'Epitalon Pure',
    result: 'Improved sleep and energy levels dramatically',
    quote: "As someone focused on longevity, Epitalon has been a game-changer. My sleep quality improved within the first week, and I feel more vital than I have in years.",
    verified: true,
  },
  {
    id: 4,
    name: 'Jennifer M.',
    age: 41,
    location: 'Seattle, WA',
    rating: 5,
    product: 'GHK-Cu Complex',
    result: 'Visible skin improvement and faster wound healing',
    quote: "I was skeptical at first, but the results speak for themselves. My skin texture has improved dramatically, and a cut that would normally take weeks healed in days.",
    verified: true,
  },
];

export const blogPosts = [
  {
    id: 1,
    slug: 'science-of-peptide-bioavailability',
    title: 'The Science of Peptide Bioavailability',
    excerpt: 'Understanding how peptides are absorbed and utilized by your body is crucial for maximizing their benefits.',
    content: `Peptide bioavailability refers to the proportion of a peptide that enters the circulation when introduced into the body and is able to have an active effect. Understanding this concept is crucial for anyone looking to maximize the benefits of peptide therapy.

## What Affects Bioavailability?

Several factors influence how well your body absorbs and utilizes peptides:

### 1. Route of Administration
- **Subcutaneous injection**: Generally provides the highest bioavailability (85-100%)
- **Oral administration**: Lower bioavailability due to digestive enzyme degradation
- **Nasal spray**: Moderate bioavailability, good for certain peptides

### 2. Peptide Stability
The molecular structure of a peptide affects its stability in the body. Some peptides are more resistant to enzymatic breakdown than others.

### 3. Timing and Dosing
Taking peptides at the right time and in the correct dose is essential for optimal absorption and effectiveness.

## Maximizing Your Results

To get the most from your peptide protocol:
- Follow proper storage guidelines
- Administer at consistent times
- Stay hydrated
- Work with a qualified healthcare provider`,
    category: 'Research',
    image: blogResearch,
    author: 'Dr. James Chen',
    authorRole: 'Chief Science Officer',
    readTime: '8 min read',
    date: 'Dec 15, 2024',
  },
  {
    id: 2,
    slug: 'optimizing-recovery-complete-guide',
    title: 'Optimizing Recovery: A Complete Guide',
    excerpt: 'Learn the latest strategies combining peptides with lifestyle factors for ultimate recovery.',
    content: `Recovery is where the magic happens. Whether you're an athlete pushing your limits or someone recovering from injury, optimizing your recovery protocol can dramatically improve your results.

## The Science of Recovery

Your body repairs and strengthens itself during rest periods. This process involves:
- Protein synthesis
- Hormone optimization
- Tissue repair
- Inflammation management

## Peptides for Recovery

### BPC-157
Known as the "body protection compound," BPC-157 has shown remarkable effects on tissue healing and recovery.

### TB-500
Thymosin Beta-4 promotes angiogenesis and cell migration, accelerating the healing process.

## Lifestyle Factors

Peptides work best when combined with:
- **Quality sleep**: Aim for 7-9 hours
- **Proper nutrition**: Adequate protein and micronutrients
- **Stress management**: Chronic stress impairs recovery
- **Active recovery**: Light movement promotes blood flow`,
    category: 'Guides',
    image: blogFitness,
    author: 'Alex Thompson',
    authorRole: 'Performance Coach',
    readTime: '12 min read',
    date: 'Dec 10, 2024',
  },
  {
    id: 3,
    slug: 'longevity-peptides-research',
    title: 'Longevity Peptides: What the Research Shows',
    excerpt: 'A deep dive into the clinical evidence behind the most promising anti-aging peptides.',
    content: `The quest for longevity has led scientists to explore peptides that may slow or even reverse aspects of aging. Here's what the latest research tells us.

## Understanding Cellular Aging

Aging occurs at the cellular level through several mechanisms:
- Telomere shortening
- Mitochondrial dysfunction
- Cellular senescence
- Oxidative stress

## Key Longevity Peptides

### Epitalon
This tetrapeptide has been shown to activate telomerase, the enzyme that maintains telomere length. Studies suggest it may:
- Extend cellular lifespan
- Improve sleep quality
- Enhance immune function

### GHK-Cu
This copper peptide naturally declines with age. Research shows it:
- Promotes collagen synthesis
- Reduces inflammation
- Supports wound healing

### Thymalin
Derived from the thymus gland, thymalin may help restore immune function that typically declines with age.

## The Future of Longevity

As research continues, we're discovering more peptides with potential anti-aging benefits. The key is combining these interventions with healthy lifestyle practices.`,
    category: 'Research',
    image: blogLongevity,
    author: 'Dr. Sarah Williams',
    authorRole: 'Longevity Researcher',
    readTime: '10 min read',
    date: 'Dec 5, 2024',
  },
];

export const faqData = [
  {
    category: 'General',
    questions: [
      {
        question: 'What are peptides?',
        answer: 'Peptides are short chains of amino acids that serve as building blocks for proteins. They play crucial roles in various biological functions including hormone regulation, tissue repair, and cellular signaling.'
      },
      {
        question: 'Are your peptides pharmaceutical-grade?',
        answer: 'Yes, all ASCENDRX peptides are pharmaceutical-grade with 99%+ purity. Each batch is third-party tested and comes with a Certificate of Analysis (COA).'
      },
      {
        question: 'How do I store peptides?',
        answer: 'Unreconstituted peptides should be stored in a freezer. Once reconstituted, store in a refrigerator and use within 30 days for optimal potency.'
      }
    ]
  },
  {
    category: 'Ordering',
    questions: [
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and cryptocurrency (Bitcoin, Ethereum).'
      },
      {
        question: 'How long does shipping take?',
        answer: 'Standard shipping takes 5-7 business days. Express shipping (2-3 days) and Priority shipping (1-2 days) are also available.'
      },
      {
        question: 'Do you ship internationally?',
        answer: 'Yes, we ship to most countries worldwide. International shipping typically takes 7-14 business days depending on the destination.'
      }
    ]
  },
  {
    category: 'Returns',
    questions: [
      {
        question: 'What is your return policy?',
        answer: 'We offer a 30-day money-back guarantee on all unopened products. If you are not satisfied, contact our support team for a full refund.'
      },
      {
        question: 'How do I initiate a return?',
        answer: 'Contact our customer support team at support@ascendrx.com with your order number. We will provide you with a prepaid return label.'
      }
    ]
  }
];

export const teamMembers = [
  {
    name: 'Dr. James Chen',
    role: 'Chief Science Officer',
    bio: 'PhD in Biochemistry from MIT. 15+ years in peptide research.',
    image: null
  },
  {
    name: 'Sarah Williams, MD',
    role: 'Medical Director',
    bio: 'Board-certified in Anti-Aging Medicine. Harvard Medical School.',
    image: null
  },
  {
    name: 'Michael Torres',
    role: 'CEO & Co-Founder',
    bio: 'Former professional athlete turned biohacking advocate.',
    image: null
  },
  {
    name: 'Dr. Emily Park',
    role: 'Head of Quality Assurance',
    bio: 'PhD in Pharmaceutical Sciences. FDA regulatory expert.',
    image: null
  }
];
