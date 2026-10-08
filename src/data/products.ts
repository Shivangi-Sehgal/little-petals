import type { PriceRange, Product, Theme, WearType } from '../types';

/** Full catalog age span: 1 month → 15 years. */
export const AGE_MIN_MONTHS = 1;
export const AGE_MAX_MONTHS = 15 * 12; // 180

export const WEAR_TYPES: { value: WearType; label: string }[] = [
  { value: 'daily', label: 'Daily Wear' },
  { value: 'night', label: 'Night Wear' },
  { value: 'party', label: 'Party Wear' },
  { value: 'festive', label: 'Festive Wear' },
];

export const THEMES: { value: Theme; label: string; blurb: string }[] = [
  { value: 'garden', label: 'Garden', blurb: 'Daisies, meadows, and wildflowers' },
  { value: 'dream', label: 'Dreamland', blurb: 'Stars, moons, and bedtime calm' },
  { value: 'celebration', label: 'Celebration', blurb: 'Birthdays, parties, and twirls' },
  { value: 'adventure', label: 'Adventure', blurb: 'Trails, coasts, and play days' },
  { value: 'fairy-tale', label: 'Fairy Tale', blurb: 'Lace, sparkle, and storybook days' },
  { value: 'festival', label: 'Festival', blurb: 'Lehengas, kurtas, and festive evenings' },
];

export function themeLabel(theme: Theme): string {
  return THEMES.find((t) => t.value === theme)?.label ?? theme;
}

export const PRICE_RANGES: {
  value: PriceRange;
  label: string;
  min: number | null;
  max: number | null;
}[] = [
  { value: 'under-2000', label: 'Under ₹2,000', min: null, max: 1999 },
  { value: '2000-3500', label: '₹2,000 – ₹3,500', min: 2000, max: 3499 },
  { value: '3500-5000', label: '₹3,500 – ₹5,000', min: 3500, max: 5000 },
  { value: 'over-5000', label: 'Over ₹5,000', min: 5001, max: null },
];

/** Standard size points along 1 month → 15 years. */
const SIZE_POINTS_MONTHS = [
  1, 3, 6, 9, 12, 18,
  24, 36, 48, 60, 72, 84, 96, 108, 120, 132, 144, 156, 168, 180,
];

export function formatAgeMonths(months: number): string {
  if (months < 12) {
    return `${months} month${months === 1 ? '' : 's'}`;
  }
  const years = Math.floor(months / 12);
  const rem = months % 12;
  if (rem === 0) {
    return `${years} year${years === 1 ? '' : 's'}`;
  }
  return `${years}y ${rem}m`;
}

export function formatAgeRange(from: number, to: number): string {
  if (from === to) return formatAgeMonths(from);
  return `${formatAgeMonths(from)} – ${formatAgeMonths(to)}`;
}

const COLOR_SWATCHES: Record<string, string> = {
  Ivory: '#F5F0E6',
  Blush: '#E8A0B0',
  Cream: '#F7F0E6',
  Rose: '#D48496',
  Cloud: '#E8EEF2',
  Sage: '#A8B89A',
  Butter: '#F2D4A8',
  'Dusty Pink': '#D4A5B0',
  Pearl: '#F4F1EC',
  'Lilac Mist': '#D8CBE0',
  White: '#FFFFFF',
  Champagne: '#E8D5B5',
  Sand: '#D4C4A8',
  Sky: '#B8D4E8',
  Olive: '#8A9A6E',
  Honey: '#D4A84B',
  Khaki: '#C4B89A',
  Stone: '#B8B0A4',
  'Navy Trim': '#3D4A5C',
  Fog: '#C8CED4',
};

export function colorSwatch(name: string): string {
  return COLOR_SWATCHES[name] ?? '#E8DFD4';
}

/** Sizes available for a product within its age span. */
export function sizesForProduct(ageFromMonths: number, ageToMonths: number): number[] {
  return SIZE_POINTS_MONTHS.filter((m) => m >= ageFromMonths && m <= ageToMonths);
}

export function productFitsAgeFilter(
  product: Product,
  filterFrom: number,
  filterTo: number,
): boolean {
  return product.ageFromMonths <= filterTo && product.ageToMonths >= filterFrom;
}

export const products: Product[] = [
  {
    id: 'g-daisy-dress',
    name: 'Daisy Garden Dress',
    description: 'A breezy cotton dress scattered with soft daisy prints — perfect for sunny park days and playdates.',
    price: 2799,
    gender: 'girls',
    wearType: 'daily',
    theme: 'garden',
    ageFromMonths: 12,
    ageToMonths: 72,
    colors: ['Ivory', 'Blush'],
    image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&q=80',
    featured: true,
    trending: true,
  },
  {
    id: 'g-petal-tutu',
    name: 'Petal Party Tutu',
    description: 'Layers of tulle in cream and soft rose for birthdays, celebrations, and twirl-worthy moments.',
    price: 3999,
    gender: 'girls',
    wearType: 'party',
    theme: 'celebration',
    ageFromMonths: 24,
    ageToMonths: 96,
    colors: ['Cream', 'Rose'],
    image: 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=800&q=80',
    featured: true,
    trending: true,
  },
  {
    id: 'g-moonbeam-pj',
    name: 'Moonbeam Night Set',
    description: 'Buttery-soft jersey pajamas with gentle floral prints for the coziest bedtime stories.',
    price: 2299,
    gender: 'girls',
    wearType: 'night',
    theme: 'dream',
    ageFromMonths: 12,
    ageToMonths: 96,
    colors: ['Cloud', 'Sage'],
    image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=800&q=80',
    featured: true,
  },
  {
    id: 'g-bloom-romper',
    name: 'Bloom Baby Romper',
    description: 'Snap-easy romper in cream cotton with embroidered flower accents for little explorers.',
    price: 2099,
    gender: 'girls',
    wearType: 'daily',
    theme: 'garden',
    ageFromMonths: 1,
    ageToMonths: 24,
    colors: ['Cream', 'Butter'],
    image: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=800&q=80',
    trending: true,
  },
  {
    id: 'g-lace-occasion',
    name: 'Ivory Lace Occasion Dress',
    description: 'Elegant ivory lace overlay with a soft lining — made for weddings, holidays, and special Sundays.',
    price: 5199,
    gender: 'girls',
    wearType: 'party',
    theme: 'fairy-tale',
    ageFromMonths: 48,
    ageToMonths: 144,
    colors: ['Ivory'],
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80',
    featured: true,
  },
  {
    id: 'g-soft-cardigan',
    name: 'Wildflower Cardigan',
    description: 'Lightweight knit cardigan with subtle floral embroidery — layer it over any daily look.',
    price: 2999,
    gender: 'girls',
    wearType: 'daily',
    theme: 'garden',
    ageFromMonths: 24,
    ageToMonths: 120,
    colors: ['Cream', 'Dusty Pink'],
    image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad5?w=800&q=80',
  },
  {
    id: 'g-starlight-gown',
    name: 'Starlight Sleep Gown',
    description: 'Flowing night gown with tiny star and blossom prints — dreamy from dusk to dawn.',
    price: 2599,
    gender: 'girls',
    wearType: 'night',
    theme: 'dream',
    ageFromMonths: 72,
    ageToMonths: 180,
    colors: ['Pearl', 'Lilac Mist'],
    image: 'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=800&q=80',
  },
  {
    id: 'g-sunday-skirt',
    name: 'Sunday Blossom Skirt Set',
    description: 'Matching blouse and skirt set with delicate floral borders for everyday elegance.',
    price: 3499,
    gender: 'girls',
    wearType: 'daily',
    theme: 'garden',
    ageFromMonths: 48,
    ageToMonths: 144,
    colors: ['White', 'Blush'],
    image: 'https://images.unsplash.com/photo-1566454825481-4e48b8c8c0b1?w=800&q=80',
    trending: true,
  },
  {
    id: 'g-party-jumpsuit',
    name: 'Champagne Sparkle Jumpsuit',
    description: 'Shimmering party jumpsuit with soft stretch — easy to wear, hard to forget.',
    price: 4499,
    gender: 'girls',
    wearType: 'party',
    theme: 'fairy-tale',
    ageFromMonths: 96,
    ageToMonths: 180,
    colors: ['Champagne'],
    image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800&q=80',
  },
  {
    id: 'b-linen-set',
    name: 'Coastal Linen Set',
    description: 'Breathable linen shirt and shorts in warm cream — weekend adventures, covered.',
    price: 3199,
    gender: 'boys',
    wearType: 'daily',
    theme: 'adventure',
    ageFromMonths: 24,
    ageToMonths: 96,
    colors: ['Cream', 'Sand'],
    image: 'https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=800&q=80',
    featured: true,
    trending: true,
  },
  {
    id: 'b-party-blazer',
    name: 'Little Gentleman Blazer',
    description: 'Soft-tailored cream blazer with a playful floral pocket square for parties and photos.',
    price: 4799,
    gender: 'boys',
    wearType: 'party',
    theme: 'celebration',
    ageFromMonths: 24,
    ageToMonths: 120,
    colors: ['Ivory', 'Sage'],
    image: 'https://images.unsplash.com/photo-1519237088770-31d8ea8e9c4e?w=800&q=80',
    featured: true,
  },
  {
    id: 'b-cloud-pj',
    name: 'Cloud Soft PJ Set',
    description: 'Ultra-soft nightwear with subtle botanical prints — built for bedtime comfort.',
    price: 2499,
    gender: 'boys',
    wearType: 'night',
    theme: 'dream',
    ageFromMonths: 12,
    ageToMonths: 96,
    colors: ['Sky', 'Cream'],
    image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800&q=80',
  },
  {
    id: 'b-explorer-tee',
    name: 'Explorer Pocket Tee',
    description: 'Everyday cotton tee with a flower-stamped pocket — made for climbing, running, and snacks.',
    price: 1499,
    gender: 'boys',
    wearType: 'daily',
    theme: 'adventure',
    ageFromMonths: 12,
    ageToMonths: 120,
    colors: ['White', 'Olive'],
    image: 'https://images.unsplash.com/photo-1519237088770-31d8ea8e9c4e?w=800&q=80',
    trending: true,
  },
  {
    id: 'b-baby-onesie',
    name: 'First Petals Onesie',
    description: 'Gentle organic cotton onesie with tiny embroidered blooms for baby’s first months.',
    price: 1799,
    gender: 'boys',
    wearType: 'daily',
    theme: 'garden',
    ageFromMonths: 1,
    ageToMonths: 12,
    colors: ['Cream', 'Sage'],
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80',
    featured: true,
  },
  {
    id: 'b-festive-shirt',
    name: 'Garden Party Shirt',
    description: 'Crisp white shirt with subtle floral trim — sharp enough for celebrations, soft enough for play.',
    price: 2999,
    gender: 'boys',
    wearType: 'party',
    theme: 'garden',
    ageFromMonths: 48,
    ageToMonths: 180,
    colors: ['White'],
    image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad5?w=800&q=80',
  },
  {
    id: 'b-night-robe',
    name: 'Honeycomb Robe',
    description: 'Cozy fleece-lined robe in warm cream for chilly mornings and story time.',
    price: 3299,
    gender: 'boys',
    wearType: 'night',
    theme: 'dream',
    ageFromMonths: 48,
    ageToMonths: 144,
    colors: ['Honey', 'Cream'],
    image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=800&q=80',
  },
  {
    id: 'b-cargo-shorts',
    name: 'Trail Day Shorts',
    description: 'Durable daily shorts with soft stretch and a floral-lined pocket detail.',
    price: 1999,
    gender: 'boys',
    wearType: 'daily',
    theme: 'adventure',
    ageFromMonths: 72,
    ageToMonths: 180,
    colors: ['Khaki', 'Stone'],
    image: 'https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=800&q=80',
  },
  {
    id: 'b-suit-set',
    name: 'Celebration Suit Set',
    description: 'Two-piece party set in soft cream — jacket and trousers that grow with big moments.',
    price: 5999,
    gender: 'boys',
    wearType: 'party',
    theme: 'celebration',
    ageFromMonths: 72,
    ageToMonths: 180,
    colors: ['Cream', 'Navy Trim'],
    image: 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=800&q=80',
    trending: true,
  },
  {
    id: 'g-knit-dress',
    name: 'Meadow Knit Dress',
    description: 'Stretch-knit dress with scattered meadow florals — school days to weekend brunches.',
    price: 3199,
    gender: 'girls',
    wearType: 'daily',
    theme: 'garden',
    ageFromMonths: 72,
    ageToMonths: 180,
    colors: ['Cream', 'Rose'],
    image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&q=80',
  },
  {
    id: 'b-sleep-shorts',
    name: 'Night Garden Shorts Set',
    description: 'Breathable night tee and shorts with quiet botanical print for restful sleep.',
    price: 2099,
    gender: 'boys',
    wearType: 'night',
    theme: 'garden',
    ageFromMonths: 96,
    ageToMonths: 180,
    colors: ['Fog', 'Cream'],
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80',
  },
  {
    id: 'g-marigold-lehenga',
    name: 'Marigold Festival Lehenga',
    description: 'Soft cream lehenga with marigold embroidery — made for Diwali evenings and family gatherings.',
    price: 5499,
    gender: 'girls',
    wearType: 'festive',
    theme: 'festival',
    ageFromMonths: 24,
    ageToMonths: 144,
    colors: ['Cream', 'Honey'],
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80',
    featured: true,
    trending: true,
  },
  {
    id: 'g-lotus-anarkali',
    name: 'Lotus Bloom Anarkali',
    description: 'Flowing anarkali with delicate lotus motifs — light enough for long festive days.',
    price: 4799,
    gender: 'girls',
    wearType: 'festive',
    theme: 'festival',
    ageFromMonths: 48,
    ageToMonths: 180,
    colors: ['Blush', 'Ivory'],
    image: 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=800&q=80',
    featured: true,
  },
  {
    id: 'b-diwali-kurta',
    name: 'Temple Bell Kurta Set',
    description: 'Cotton kurta and pants with subtle festive trim — comfortable through pooja and play.',
    price: 3699,
    gender: 'boys',
    wearType: 'festive',
    theme: 'festival',
    ageFromMonths: 12,
    ageToMonths: 120,
    colors: ['Ivory', 'Sage'],
    image: 'https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=800&q=80',
    trending: true,
  },
  {
    id: 'b-holi-sherwani',
    name: 'Celebration Sherwani Jacket',
    description: 'Soft-structured sherwani jacket in warm cream for weddings, festivals, and photo days.',
    price: 6299,
    gender: 'boys',
    wearType: 'festive',
    theme: 'festival',
    ageFromMonths: 36,
    ageToMonths: 180,
    colors: ['Cream', 'Champagne'],
    image: 'https://images.unsplash.com/photo-1519237088770-31d8ea8e9c4e?w=800&q=80',
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
}
