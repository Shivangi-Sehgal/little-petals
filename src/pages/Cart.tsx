import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ageBandLabel, formatPrice } from '../data/products';

export function Cart() {
  const { items, subtotal, updateQuantity, removeItem, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="container">
        <div className="page-hero">
          <h1>Your cart</h1>
          <p>It’s empty — time to pick some petals.</p>
        </div>
        <div className="empty-state" style={{ marginBottom: '3rem' }}>
          <h3>Nothing here yet</h3>
          <p>Browse girls and boys collections, filter by age and price, then add your favorites.</p>
          <Link to="/shop" className="btn btn--primary">
            Start shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="page-hero">
        <h1>Your cart</h1>
        <p>{items.length} {items.length === 1 ? 'item' : 'items'} ready for checkout.</p>
      </div>

      <div className="cart-layout">
        <div className="cart-list">
          {items.map((item) => (
            <article key={`${item.product.id}-${item.size}`} className="cart-item">
              <Link to={`/product/${item.product.id}`}>
                <img src={item.product.image} alt={item.product.name} />
              </Link>
              <div>
                <h3>
                  <Link to={`/product/${item.product.id}`}>{item.product.name}</Link>
                </h3>
                <div className="cart-item__meta">
                  {item.product.gender === 'girls' ? 'Girls' : 'Boys'} · {ageBandLabel(item.size)}
                </div>
                <div className="cart-item__actions">
                  <div className="qty-control">
                    <button
                      type="button"
                      aria-label="Decrease"
                      onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      aria-label="Increase"
                      onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    className="remove-link"
                    onClick={() => removeItem(item.product.id, item.size)}
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="cart-item__price">{formatPrice(item.product.price * item.quantity)}</div>
            </article>
          ))}
        </div>

        <aside className="cart-summary">
          <h2>Summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          <div className="summary-row summary-row--total">
            <span>Total</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <button type="button" className="btn btn--primary" onClick={() => alert('Checkout demo — connect a payment provider to go live.')}>
            Checkout
          </button>
          <button type="button" className="btn btn--ghost" style={{ marginTop: '0.65rem' }} onClick={clearCart}>
            Clear cart
          </button>
        </aside>
      </div>
    </div>
  );
}
