import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ageBandLabel, formatPrice, getProductById, WEAR_TYPES } from '../data/products';
import type { AgeBand } from '../types';

export function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id ?? '');
  const { addItem } = useCart();
  const [size, setSize] = useState<AgeBand | null>(null);
  const [qty, setQty] = useState(1);
  const [toast, setToast] = useState(false);

  const wearLabel = useMemo(
    () => WEAR_TYPES.find((w) => w.value === product?.wearType)?.label,
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

  const selectedSize = size ?? product.ageBands[0];

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
          <div className="detail__price">{formatPrice(product.price)}</div>
          <p className="detail__delivery">
            <span className="detail__delivery-pill">Instant nearby</span>
            Available depending on your distance from our boutique.
          </p>
          <p className="detail__desc">{product.description}</p>

          <div className="detail__tags">
            <span className="tag">{product.gender === 'girls' ? 'Girls' : 'Boys'}</span>
            <span className="tag tag--sage">{wearLabel}</span>
            {product.colors.map((c) => (
              <span key={c} className="tag">
                {c}
              </span>
            ))}
          </div>

          <span className="field-label">Age / Size</span>
          <div className="size-grid">
            {product.ageBands.map((band) => (
              <button
                key={band}
                type="button"
                className={`chip ${selectedSize === band ? 'active' : ''}`}
                onClick={() => setSize(band)}
              >
                {ageBandLabel(band)}
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
        Added to cart — {product.name} ({ageBandLabel(selectedSize)})
      </div>
    </div>
  );
}
