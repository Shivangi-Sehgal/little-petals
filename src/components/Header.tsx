import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FlowerMark } from './Floral';

export function Header() {
  const { itemCount } = useCart();
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="logo" onClick={close}>
          <FlowerMark className="logo__mark" />
          Little Petals
        </Link>

        <nav className="nav" aria-label="Main">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/shop?gender=girls">Girls</NavLink>
          <NavLink to="/shop?gender=boys">Boys</NavLink>
        </nav>

        <div className="header__actions">
          <Link to="/cart" className="icon-btn" aria-label={`Cart, ${itemCount} items`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 7h12l-1 12H7L6 7z" />
              <path d="M9 7a3 3 0 0 1 6 0" />
            </svg>
            {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
          </Link>

          <button
            type="button"
            className="icon-btn menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="mobile-nav" aria-label="Mobile">
          <NavLink to="/" end onClick={close}>
            Home
          </NavLink>
          <NavLink to="/shop" onClick={close}>
            Shop All
          </NavLink>
          <NavLink to="/shop?gender=girls" onClick={close}>
            Girls
          </NavLink>
          <NavLink to="/shop?gender=boys" onClick={close}>
            Boys
          </NavLink>
          <NavLink to="/cart" onClick={close}>
            Cart ({itemCount})
          </NavLink>
        </nav>
      )}
    </header>
  );
}
