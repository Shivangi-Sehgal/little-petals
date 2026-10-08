export type Gender = 'girls' | 'boys';

export type WearType = 'daily' | 'night' | 'party' | 'festive';

export type PriceRange = 'under-2000' | '2000-3500' | '3500-5000' | 'over-5000';

/** Children's clothing themes shoppers can filter by. */
export type Theme = 'garden' | 'dream' | 'celebration' | 'adventure' | 'fairy-tale' | 'festival';

/** Age in months — 1 month through 15 years (180 months). */
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  gender: Gender;
  wearType: WearType;
  theme: Theme;
  /** Inclusive start age in months (min 1). */
  ageFromMonths: number;
  /** Inclusive end age in months (max 180 = 15 years). */
  ageToMonths: number;
  colors: string[];
  image: string;
  featured?: boolean;
  trending?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  /** Selected age size in months. */
  sizeMonths: number;
}

export interface ShopFilters {
  gender: Gender | 'all';
  wearType: WearType | 'all';
  /** Filter: child's age from (months). */
  ageFromMonths: number;
  /** Filter: child's age to (months). */
  ageToMonths: number;
  priceRange: PriceRange | 'all';
  theme: Theme | 'all';
  sort: 'featured' | 'price-asc' | 'price-desc' | 'name';
}
