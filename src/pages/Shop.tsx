import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FilterPanel } from '../components/FilterPanel';
import { ProductCard } from '../components/ProductCard';
import { PRICE_RANGES, products } from '../data/products';
import type { AgeBand, PriceRange, ShopFilters } from '../types';

const PRICE_RANGE_VALUES: PriceRange[] = ['under-2000', '2000-3500', '3500-5000', 'over-5000'];

const defaultFilters = (): ShopFilters => ({
  gender: 'all',
  wearType: 'all',
  ageBand: 'all',
  priceRange: 'all',
  sort: 'featured',
});

function parseFilters(params: URLSearchParams): ShopFilters {
  const base = defaultFilters();
  const gender = params.get('gender');
  const wear = params.get('wear');
  const age = params.get('age');
  const price = params.get('price');
  const sort = params.get('sort');

  if (gender === 'girls' || gender === 'boys') base.gender = gender;
  if (wear === 'daily' || wear === 'night' || wear === 'party') base.wearType = wear;
  if (age) base.ageBand = age as AgeBand;
  if (price && PRICE_RANGE_VALUES.includes(price as PriceRange)) {
    base.priceRange = price as PriceRange;
  }
  if (sort === 'price-asc' || sort === 'price-desc' || sort === 'name' || sort === 'featured') {
    base.sort = sort;
  }
  return base;
}

function toParams(filters: ShopFilters): URLSearchParams {
  const p = new URLSearchParams();
  if (filters.gender !== 'all') p.set('gender', filters.gender);
  if (filters.wearType !== 'all') p.set('wear', filters.wearType);
  if (filters.ageBand !== 'all') p.set('age', filters.ageBand);
  if (filters.priceRange !== 'all') p.set('price', filters.priceRange);
  if (filters.sort !== 'featured') p.set('sort', filters.sort);
  return p;
}

export function Shop() {
  const [params, setParams] = useSearchParams();
  const filters = useMemo(() => parseFilters(params), [params]);

  const update = (next: Partial<ShopFilters>) => {
    const merged = { ...filters, ...next };
    setParams(toParams(merged), { replace: true });
  };

  const reset = () => setParams({}, { replace: true });

  const filtered = useMemo(() => {
    const range =
      filters.priceRange === 'all'
        ? null
        : PRICE_RANGES.find((r) => r.value === filters.priceRange) ?? null;

    let list = products.filter((p) => {
      if (filters.gender !== 'all' && p.gender !== filters.gender) return false;
      if (filters.wearType !== 'all' && p.wearType !== filters.wearType) return false;
      if (filters.ageBand !== 'all' && !p.ageBands.includes(filters.ageBand as AgeBand)) return false;
      if (range) {
        if (range.min != null && p.price < range.min) return false;
        if (range.max != null && p.price > range.max) return false;
      }
      return true;
    });

    list = [...list].sort((a, b) => {
      switch (filters.sort) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return Number(!!b.featured) - Number(!!a.featured);
      }
    });

    return list;
  }, [filters]);

  const titleParts: string[] = [];
  if (filters.gender !== 'all') titleParts.push(filters.gender === 'girls' ? 'Girls' : 'Boys');
  if (filters.wearType !== 'all') {
    titleParts.push(
      filters.wearType === 'daily' ? 'Daily Wear' : filters.wearType === 'night' ? 'Night Wear' : 'Party Wear',
    );
  }

  return (
    <div className="container">
      <div className="page-hero">
        <h1>{titleParts.length ? titleParts.join(' · ') : 'Shop All'}</h1>
        <p>Filter by gender, age (1 month–15 years), wear type, and price. Prices in ₹.</p>
      </div>

      <div className="shop-layout">
        <FilterPanel
          filters={filters}
          onChange={update}
          onReset={reset}
        />

        <div>
          <div className="sort-bar">
            <span className="sort-bar__count">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </span>
            <label>
              <span className="field-label" style={{ display: 'inline', marginRight: '0.5rem' }}>
                Sort
              </span>
              <select
                value={filters.sort}
                onChange={(e) => update({ sort: e.target.value as ShopFilters['sort'] })}
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Name A–Z</option>
              </select>
            </label>
          </div>

          {filtered.length === 0 ? (
            <div className="empty-state">
              <h3>No pieces in this garden</h3>
              <p>Try widening the age or price range, or reset filters.</p>
              <button type="button" className="btn btn--primary" onClick={reset}>
                Reset filters
              </button>
            </div>
          ) : (
            <div className="product-grid">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
