import type { Collection, Occasion, Product, Store, Testimonial } from './types';
import { featuredImages, curatedImages, occasionImages, storeImages, instagramImages, productImages } from './images';

/* ------------------------------------------------------------------ */
/*  Collections                                                        */
/* ------------------------------------------------------------------ */

export const featuredCollections: Collection[] = [
  { slug: 'sarees', title: 'Designer Sarees', subtitle: 'Drape Stories', description: 'Handwoven luxury, reimagined for the modern muse.', tone: 2 },
  { slug: 'wedding', title: 'Wedding Lehengas', subtitle: 'The Vows Edit', description: 'Couture silhouettes for the most cherished day.', tone: 0 },
  { slug: 'anarkalis', title: 'Anarkalis', subtitle: 'Regal Flow', description: 'Floor-sweeping grace with heritage detailing.', tone: 3 },
  { slug: 'bridal-couture', title: 'Bridal Collection', subtitle: 'Forever Begins', description: 'Bespoke bridal couture, crafted to be heirlooms.', tone: 5 },
  { slug: 'festive', title: 'Festive Collection', subtitle: 'Celebrate Brightly', description: 'Radiant ensembles for every festive gathering.', tone: 1 },
  { slug: 'co-ord-sets', title: 'Fusion Wear', subtitle: 'Modern Indian', description: 'Where contemporary tailoring meets ethnic soul.', tone: 4 },
].map((c, i) => ({ ...c, image: featuredImages[i] }));

export const curatedCollections: Collection[] = [
  { slug: 'silk-edit', title: 'The Silk Edit', subtitle: 'Pure Mulberry & Kanjivaram', description: 'Liquid lustre, woven by master artisans.', tone: 2 },
  { slug: 'organza-edit', title: 'Organza Edit', subtitle: 'Featherlight Luxe', description: 'Translucent elegance with painterly motifs.', tone: 3 },
  { slug: 'cotton-stories', title: 'Cotton Stories', subtitle: 'Breathable Heritage', description: 'Handloom comfort dressed in quiet luxury.', tone: 1 },
  { slug: 'bridal-couture', title: 'Bridal Couture', subtitle: 'The Atelier', description: 'Made-to-measure bridal masterpieces.', tone: 5 },
  { slug: 'handcrafted-luxury', title: 'Handcrafted Luxury', subtitle: 'Artisan Series', description: 'Zardozi, gota, and aari by hand.', tone: 0 },
  { slug: 'signature', title: 'Signature Collection', subtitle: 'House of Suma Reddy', description: 'The designs that define our atelier.', tone: 4 },
].map((c, i) => ({ ...c, image: curatedImages[i] }));

export const allCollections: Collection[] = [
  ...featuredCollections,
  ...curatedCollections,
  { slug: 'lehengas', title: 'Lehengas', subtitle: 'Twirl-worthy', description: 'Statement lehengas for every celebration.', tone: 0 },
  { slug: 'kurta-sets', title: 'Kurta Sets', subtitle: 'Effortless Ethnic', description: 'Coordinated sets for everyday grace.', tone: 1 },
  { slug: 'gowns', title: 'Indian Gowns', subtitle: 'Red-carpet Ready', description: 'Fusion gowns with an Indian heart.', tone: 4 },
  { slug: 'new-arrivals', title: 'New Arrivals', subtitle: 'Fresh from the Atelier', description: 'The latest from our design studio.', tone: 2 },
];

/* ------------------------------------------------------------------ */
/*  Occasions                                                          */
/* ------------------------------------------------------------------ */

export const occasions: Occasion[] = [
  { slug: 'wedding', title: 'Wedding', tone: 5 },
  { slug: 'reception', title: 'Reception', tone: 4 },
  { slug: 'haldi', title: 'Haldi', tone: 1 },
  { slug: 'mehendi', title: 'Mehendi', tone: 3 },
  { slug: 'sangeet', title: 'Sangeet', tone: 0 },
  { slug: 'bridesmaid', title: 'Bridesmaid', tone: 2 },
  { slug: 'party', title: 'Party Wear', tone: 4 },
  { slug: 'festive', title: 'Festive Wear', tone: 1 },
].map((o, i) => ({ ...o, image: occasionImages[i] }));

/* ------------------------------------------------------------------ */
/*  Products                                                           */
/* ------------------------------------------------------------------ */

const fabrics = ['Pure Silk', 'Organza', 'Handloom Cotton', 'Georgette', 'Banarasi Silk', 'Tussar Silk'];
const colors = [
  ['Blush Pink', '#FF8DA7'],
  ['Lavender', '#9993CF'],
  ['Royal Mauve', '#6D5D8E'],
  ['Soft Lilac', '#9C87CC'],
  ['Ivory', '#F3EFE7'],
  ['Wine', '#5A2A3A'],
];
const embroideries = ['Zardozi', 'Aari Threadwork', 'Gota Patti', 'Sequin & Bead', 'Hand Block Print', 'Mirror Work'];

const names = [
  'Aanya', 'Meher', 'Rivaaj', 'Noor', 'Saanvi', 'Ira', 'Zoya', 'Amaira',
  'Kiara', 'Mehr', 'Anaya', 'Vaani', 'Riya', 'Tara', 'Inaaya', 'Myra',
  'Aarohi', 'Diya', 'Nyra', 'Sia', 'Avni', 'Reva', 'Kyra', 'Anvi',
];

const productCategories = [
  { cat: 'Saree', col: 'sarees', occ: ['festive', 'reception', 'party'] },
  { cat: 'Lehenga', col: 'lehengas', occ: ['wedding', 'sangeet', 'reception'] },
  { cat: 'Anarkali', col: 'anarkalis', occ: ['festive', 'mehendi', 'party'] },
  { cat: 'Bridal Lehenga', col: 'bridal-couture', occ: ['wedding', 'reception'] },
  { cat: 'Kurta Set', col: 'kurta-sets', occ: ['festive', 'haldi'] },
  { cat: 'Co-Ord Set', col: 'co-ord-sets', occ: ['party', 'sangeet'] },
  { cat: 'Gown', col: 'gowns', occ: ['reception', 'party'] },
  { cat: 'Saree', col: 'silk-edit', occ: ['wedding', 'festive'] },
];

function build(i: number): Product {
  const meta = productCategories[i % productCategories.length];
  const [colorName, colorHex] = colors[i % colors.length];
  const fabric = fabrics[i % fabrics.length];
  const embroidery = embroideries[i % embroideries.length];
  const name = names[i % names.length];
  const base = 14900 + ((i * 5300) % 120000);
  const price = Math.round(base / 100) * 100;
  const hasDiscount = i % 3 === 0;
  const slug = `${name.toLowerCase()}-${meta.cat.toLowerCase().replace(/\s+/g, '-')}-${i + 1}`;

  return {
    id: `SRS-${1000 + i}`,
    slug,
    name: `${name} ${meta.cat}`,
    category: meta.cat,
    collection: meta.col,
    occasion: meta.occ,
    fabric,
    color: colorName,
    colorHex,
    embroidery,
    image: productImages[i % productImages.length],
    price,
    compareAt: hasDiscount ? Math.round((price * 1.25) / 100) * 100 : undefined,
    rating: Number((4.4 + (i % 6) * 0.1).toFixed(1)),
    reviews: 18 + ((i * 7) % 240),
    isNew: i % 4 === 0,
    isBestSeller: i % 5 === 0,
    tone: i % 6,
    description: `A ${colorName.toLowerCase()} ${meta.cat.toLowerCase()} in ${fabric.toLowerCase()}, finished with intricate ${embroidery.toLowerCase()}. Designed in our atelier for the woman who wears tradition with quiet confidence.`,
    story: `The ${name} ${meta.cat} began at the loom, where our master weavers spent over 180 hours coaxing ${fabric.toLowerCase()} into a fluid, luminous drape. Each motif of ${embroidery.toLowerCase()} is placed by hand — a slow craft, deliberately kept alive. The result is an heirloom that moves with you and only grows more meaningful with every wear.`,
    care: [
      'Dry clean only — entrust to a specialist for embellished pieces.',
      'Store wrapped in muslin, away from direct sunlight.',
      'Avoid contact with perfume and deodorant on embroidery.',
      'Steam gently; never iron directly over embellishment.',
    ],
    styling: [
      'Pair with a sculptural polki set and a sleek low bun.',
      'Anchor with metallic juttis or strappy heels.',
      'Let the embroidery lead — keep accessories minimal.',
      'Add a contrast potli for an editorial finish.',
    ],
  };
}

export const products: Product[] = Array.from({ length: 24 }, (_, i) => build(i));

export const newArrivals = products.filter((p) => p.isNew).slice(0, 8);
export const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 8);

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCollection(slug: string): Product[] {
  if (slug === 'new-arrivals') return products.filter((p) => p.isNew);
  const direct = products.filter((p) => p.collection === slug || p.occasion.includes(slug));
  return direct.length ? direct : products;
}

export function relatedProducts(product: Product, count = 4): Product[] {
  return products
    .filter((p) => p.id !== product.id && (p.collection === product.collection || p.category === product.category))
    .slice(0, count);
}

/* ------------------------------------------------------------------ */
/*  Stores                                                             */
/* ------------------------------------------------------------------ */

export const stores: Store[] = [
  {
    id: 'hyd',
    city: 'Hyderabad',
    name: 'Suma Reddy Studio — Banjara Hills Flagship',
    address: 'Road No. 12, Banjara Hills, Hyderabad, Telangana 500034',
    phone: '+91 96187 55757',
    hours: 'Mon–Sun · 11:00 AM – 8:30 PM',
    lat: 17.4156,
    lng: 78.4347,
    image: storeImages[0],
    flagship: true,
  },
  {
    id: 'blr',
    city: 'Bangalore',
    name: 'Suma Reddy Studio — Indiranagar',
    address: '100 Ft Road, Indiranagar, Bengaluru, Karnataka 560038',
    phone: '+91 96187 55757',
    hours: 'Mon–Sun · 11:00 AM – 8:30 PM',
    lat: 12.9719,
    lng: 77.6412,
    image: storeImages[1],
  },
  {
    id: 'mum',
    city: 'Mumbai',
    name: 'Suma Reddy Studio — Bandra West',
    address: 'Linking Road, Bandra West, Mumbai, Maharashtra 400050',
    phone: '+91 96187 55757',
    hours: 'Mon–Sun · 11:00 AM – 9:00 PM',
    lat: 19.0607,
    lng: 72.8362,
    image: storeImages[2],
  },
];

/* ------------------------------------------------------------------ */
/*  Testimonials                                                       */
/* ------------------------------------------------------------------ */

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Aditi Rao',
    location: 'Hyderabad',
    rating: 5,
    quote:
      'My bridal lehenga was beyond a dream. The fit was sculpted to me, and the hand embroidery caught the light in every photograph. I felt like the truest version of myself.',
    context: 'Bridal Couture',
  },
  {
    id: 't2',
    name: 'Sneha Menon',
    location: 'Bangalore',
    rating: 5,
    quote:
      'The silk saree drapes like water. Three weddings in and people still stop me to ask where it is from. Worth every rupee — this is heirloom quality.',
    context: 'The Silk Edit',
  },
  {
    id: 't3',
    name: 'Priya Nair',
    location: 'Mumbai',
    rating: 5,
    quote:
      'From the appointment to the final fitting, the experience felt genuinely luxurious. The styling team understood exactly what I wanted before I could say it.',
    context: 'Reception Wear',
  },
  {
    id: 't4',
    name: 'Ananya Gupta',
    location: 'Delhi',
    rating: 5,
    quote:
      'I ordered the organza anarkali for my sister’s sangeet and it arrived perfectly packaged, perfectly tailored. The detailing is on another level entirely.',
    context: 'Festive Collection',
  },
];

/* ------------------------------------------------------------------ */
/*  Instagram tiles                                                    */
/* ------------------------------------------------------------------ */

export const instagramTiles = Array.from({ length: 6 }, (_, i) => ({
  id: `ig-${i}`,
  tone: i % 6,
  image: instagramImages[i],
  caption: ['#SumaReddyBride', '#TheSilkEdit', '#AtelierDiaries', '#FestiveInLavender', '#BehindTheDrape', '#SignatureSeries'][i],
}));
