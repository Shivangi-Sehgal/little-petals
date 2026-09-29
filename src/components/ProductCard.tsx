import { Link } from 'react-router-dom';
import { formatPrice, WEAR_TYPES } from '../data/products';
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
        <div className="product-card__meta">
          <span>
            {product.gender === 'girls' ? 'Girls' : 'Boys'} · {product.colors[0]}
          </span>
          <span className="product-card__price">{formatPrice(product.price)}</span>
        </div>
      </div>
    </Link>
  );
}
