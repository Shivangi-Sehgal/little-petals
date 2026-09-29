import { AGE_BANDS, PRICE_MAX, PRICE_MIN, WEAR_TYPES } from '../data/products';
import type { AgeBand, Gender, ShopFilters, WearType } from '../types';

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
        <h3>Age Range</h3>
        <div className="chip-row">
          <button
            type="button"
            className={`chip ${filters.ageBand === 'all' ? 'active' : ''}`}
            onClick={() => onChange({ ageBand: 'all' })}
          >
            All ages
          </button>
          {AGE_BANDS.map((a) => (
            <button
              key={a.value}
              type="button"
              className={`chip ${filters.ageBand === a.value ? 'active' : ''}`}
              onClick={() => onChange({ ageBand: a.value as AgeBand })}
            >
              {a.label}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <h3>Price Range</h3>
        <div className="price-range">
          <div className="price-range__values">
            <span>${filters.minPrice}</span>
            <span>${filters.maxPrice}</span>
          </div>
          <label>
            <span className="field-label">Min</span>
            <input
              type="range"
              min={PRICE_MIN}
              max={PRICE_MAX}
              step={1}
              value={filters.minPrice}
              onChange={(e) => {
                const minPrice = Math.min(Number(e.target.value), filters.maxPrice);
                onChange({ minPrice });
              }}
            />
          </label>
          <label>
            <span className="field-label">Max</span>
            <input
              type="range"
              min={PRICE_MIN}
              max={PRICE_MAX}
              step={1}
              value={filters.maxPrice}
              onChange={(e) => {
                const maxPrice = Math.max(Number(e.target.value), filters.minPrice);
                onChange({ maxPrice });
              }}
            />
          </label>
        </div>
      </div>

      <button type="button" className="btn btn--ghost btn--sm" onClick={onReset} style={{ width: '100%' }}>
        Reset filters
      </button>
    </aside>
  );
}
