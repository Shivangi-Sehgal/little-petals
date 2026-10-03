import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import {
  colorSwatch,
  formatAgeMonths,
  formatAgeRange,
  formatPrice,
  getProductById,
  sizesForProduct,
  WEAR_TYPES,
} from '../data/products';

export function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id ?? '');
  const { addItem } = useCart();
  const [sizeMonths, setSizeMonths] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [qty, setQty] = useState(1);
  const [toast, setToast] = useState(false);

  const wearLabel = useMemo(
    () => WEAR_TYPES.find((w) => w.value === product?.wearType)?.label,
    [product],
  );

  const sizes = useMemo(
    () => (product ? sizesForProduct(product.ageFromMonths, product.ageToMonths) : []),
    [product],
  );

  if (!product) {
    return (
      <div className="container" style={{ padding: '4rem 0' }}>
        <div className="empty-state">
          <h3>Piece not found</h3>
          <p>This petal may have drifted away.</p>
          <Link to="/shop" className="btn btn--primary">
            Back to shop
          </Link>
        </div>
      </div>
    );
  }

  const selectedSize = sizeMonths ?? sizes[0];
  const color = selectedColor ?? product.colors[0];

  const handleAdd = () => {
    addItem(product, selectedSize, qty);
    setToast(true);
    window.setTimeout(() => setToast(false), 2200);
  };

  return (
    <div className="container">
      <div className="detail">
        <div className="detail__media">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="detail__info">
          <h1>{product.name}</h1>
          <p className="detail__subtitle">
            {product.gender === 'girls' ? 'Girls' : 'Boys'} · {wearLabel}
          </p>

          <dl className="product-specs">
            <div className="product-specs__item">
              <dt>Price</dt>
              <dd className="product-specs__price">{formatPrice(product.price)}</dd>
            </div>
            <div className="product-specs__item">
              <dt>Age who can wear it</dt>
              <dd>{formatAgeRange(product.ageFromMonths, product.ageToMonths)}</dd>
            </div>
            <div className="product-specs__item">
              <dt>Colours available</dt>
              <dd>
                <ul className="color-list color-list--lg">
                  {product.colors.map((c) => (
                    <li key={c}>
                      <button
                        type="button"
                        className={`color-choice ${color === c ? 'active' : ''}`}
                        onClick={() => setSelectedColor(c)}
                        aria-pressed={color === c}
                      >
                        <span
                          className="color-dot"
                          style={{ backgroundColor: colorSwatch(c) }}
                          aria-hidden="true"
                        />
                        {c}
                      </button>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>

          <p className="detail__delivery">
            <span className="detail__delivery-pill">Instant nearby</span>
            Available depending on your distance from our boutique.
          </p>
          <p className="detail__desc">{product.description}</p>

          <span className="field-label">Age / Size</span>
          <div className="size-grid">
            {sizes.map((months) => (
              <button
                key={months}
                type="button"
                className={`chip ${selectedSize === months ? 'active' : ''}`}
                onClick={() => setSizeMonths(months)}
              >
                {formatAgeMonths(months)}
              </button>
            ))}
          </div>

          <span className="field-label">Quantity</span>
          <div className="qty-row">
            <div className="qty-control">
              <button type="button" aria-label="Decrease" onClick={() => setQty((q) => Math.max(1, q - 1))}>
                −
              </button>
              <span>{qty}</span>
              <button type="button" aria-label="Increase" onClick={() => setQty((q) => q + 1)}>
                +
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <button type="button" className="btn btn--primary" onClick={handleAdd}>
              Add to cart
            </button>
            <Link to="/shop" className="btn btn--ghost">
              Continue shopping
            </Link>
          </div>
        </div>
      </div>

      <div className={`toast ${toast ? 'show' : ''}`} role="status">
        Added to cart — {product.name} · {color} · {formatAgeMonths(selectedSize)}
      </div>
    </div>
  );
}
