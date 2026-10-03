import { Link } from 'react-router-dom';
import {
  colorSwatch,
  formatAgeRange,
  formatPrice,
  WEAR_TYPES,
} from '../data/products';
import type { Product } from '../types';

export function ProductCard({ product }: { product: Product }) {
  const wear = WEAR_TYPES.find((w) => w.value === product.wearType)?.label ?? product.wearType;

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-card__media">
        <img src={product.image} alt={product.name} loading="lazy" />
        <span className="product-card__badge">{wear}</span>
      </div>
      <div className="product-card__body">
        <h3>{product.name}</h3>
        <p className="product-card__gender">
          {product.gender === 'girls' ? 'Girls' : 'Boys'}
        </p>

        <dl className="product-facts">
          <div className="product-facts__row">
            <dt>Price</dt>
            <dd className="product-facts__price">{formatPrice(product.price)}</dd>
          </div>
          <div className="product-facts__row">
            <dt>Age</dt>
            <dd>{formatAgeRange(product.ageFromMonths, product.ageToMonths)}</dd>
          </div>
          <div className="product-facts__row product-facts__row--colors">
            <dt>Colours</dt>
            <dd>
              <ul className="color-list">
                {product.colors.map((c) => (
                  <li key={c}>
                    <span
                      className="color-dot"
                      style={{ backgroundColor: colorSwatch(c) }}
                      aria-hidden="true"
                    />
                    {c}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </Link>
  );
}
