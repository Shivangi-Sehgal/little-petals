export type Gender = 'girls' | 'boys';

export type WearType = 'daily' | 'night' | 'party';

export type AgeBand =
  | '1-6m'
  | '6-12m'
  | '1-2y'
  | '2-4y'
  | '4-6y'
  | '6-8y'
  | '8-10y'
  | '10-12y'
  | '12-15y';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  gender: Gender;
  wearType: WearType;
  ageBands: AgeBand[];
  colors: string[];
  image: string;
  featured?: boolean;
  trending?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: AgeBand;
}

export interface ShopFilters {
  gender: Gender | 'all';
  wearType: WearType | 'all';
  ageBand: AgeBand | 'all';
  sort: 'featured' | 'price-asc' | 'price-desc' | 'name';
}
