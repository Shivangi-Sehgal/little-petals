<<<<<<< HEAD
import { AGE_MAX_MONTHS, AGE_MIN_MONTHS, formatAgeMonths, PRICE_RANGES, WEAR_TYPES } from '../data/products';
import type { Gender, PriceRange, ShopFilters, WearType } from '../types';
=======
import { AGE_BANDS, PRICE_RANGES, THEMES, WEAR_TYPES } from '../data/products';
import type { AgeBand, Gender, PriceRange, ShopFilters, Theme, WearType } from '../types';
>>>>>>> ad921e3 (Added a Theme Feature.)

interface FiltersProps {
  filters: ShopFilters;
  onChange: (next: Partial<ShopFilters>) => void;
  onReset: () => void;
}

export function FilterPanel({ filters, onChange, onReset }: FiltersProps) {
  return (
    <aside className="filters" aria-label="Product filters">
      <h2>Filter & Sort</h2>

      <div className="filter-group">
        <h3>Gender</h3>
        <div className="chip-row">
          {(
            [
              ['all', 'All'],
              ['girls', 'Girls'],
              ['boys', 'Boys'],
            ] as const
          ).map(([value, label]) => (
            <button
              key={value}
              type="button"
              className={`chip ${filters.gender === value ? 'active' : ''}`}
              onClick={() => onChange({ gender: value as Gender | 'all' })}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <h3>Wear Type</h3>
        <div className="chip-row">
          <button
            type="button"
            className={`chip ${filters.wearType === 'all' ? 'active' : ''}`}
            onClick={() => onChange({ wearType: 'all' })}
          >
            All
          </button>
          {WEAR_TYPES.map((w) => (
            <button
              key={w.value}
              type="button"
              className={`chip ${filters.wearType === w.value ? 'active' : ''}`}
              onClick={() => onChange({ wearType: w.value as WearType })}
            >
              {w.label}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <h3>Age (1 month – 15 years)</h3>
        <div className="price-range age-range">
          <div className="price-range__values">
            <span>{formatAgeMonths(filters.ageFromMonths)}</span>
            <span>{formatAgeMonths(filters.ageToMonths)}</span>
          </div>
          <label>
            <span className="field-label">From</span>
            <input
              type="range"
              min={AGE_MIN_MONTHS}
              max={AGE_MAX_MONTHS}
              step={1}
              value={filters.ageFromMonths}
              onChange={(e) => {
                const ageFromMonths = Math.min(Number(e.target.value), filters.ageToMonths);
                onChange({ ageFromMonths });
              }}
            />
          </label>
          <label>
            <span className="field-label">To</span>
            <input
              type="range"
              min={AGE_MIN_MONTHS}
              max={AGE_MAX_MONTHS}
              step={1}
              value={filters.ageToMonths}
              onChange={(e) => {
                const ageToMonths = Math.max(Number(e.target.value), filters.ageFromMonths);
                onChange({ ageToMonths });
              }}
            />
          </label>
          <p className="age-range__hint">Drag to any age from 1 month up to 15 years.</p>
        </div>
      </div>

      <div className="filter-group">
        <h3>Price Range</h3>
        <div className="chip-row">
          <button
            type="button"
            className={`chip ${filters.priceRange === 'all' ? 'active' : ''}`}
            onClick={() => onChange({ priceRange: 'all' })}
          >
            All prices
          </button>
          {PRICE_RANGES.map((r) => (
            <button
              key={r.value}
              type="button"
              className={`chip ${filters.priceRange === r.value ? 'active' : ''}`}
              onClick={() => onChange({ priceRange: r.value as PriceRange })}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <h3>Theme</h3>
        <div className="chip-row">
          <button
            type="button"
            className={`chip ${filters.theme === 'all' ? 'active' : ''}`}
            onClick={() => onChange({ theme: 'all' })}
          >
            All themes
          </button>
          {THEMES.map((t) => (
            <button
              key={t.value}
              type="button"
              className={`chip ${filters.theme === t.value ? 'active' : ''}`}
              onClick={() => onChange({ theme: t.value as Theme })}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <button type="button" className="btn btn--ghost btn--sm" onClick={onReset} style={{ width: '100%' }}>
        Reset filters
      </button>
    </aside>
  );
}
