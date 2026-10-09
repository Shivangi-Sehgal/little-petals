import { Link } from 'react-router-dom';
import { THEMES } from '../data/products';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand">Little Petals</div>
            <p>Cream-soft clothing for girls and boys, ages 1 month to 15 years — made for play, rest, and celebration.</p>
          </div>
          <div>
            <h4>Shop</h4>
            <ul>
              <li>
                <Link to="/shop?gender=girls">Girls</Link>
              </li>
              <li>
                <Link to="/shop?gender=boys">Boys</Link>
              </li>
              <li>
                <Link to="/shop?wear=daily">Daily Wear</Link>
              </li>
              <li>
                <Link to="/shop?wear=night">Night Wear</Link>
              </li>
              <li>
                <Link to="/shop?wear=party">Party Wear</Link>
              </li>
              <li>
                <Link to="/shop?wear=festive">Festive Wear</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Themes</h4>
            <ul>
              {THEMES.map((theme) => (
                <li key={theme.value}>
                  <Link to={`/shop?theme=${theme.value}`}>{theme.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Ages</h4>
            <ul>
              <li>
                <Link to="/shop?ageFrom=1&ageTo=180">1 month – 15 years</Link>
              </li>
              <li>
                <Link to="/shop?ageFrom=1&ageTo=12">From 1 month</Link>
              </li>
              <li>
                <Link to="/shop?ageFrom=12&ageTo=60">Around 1–5 years</Link>
              </li>
              <li>
                <Link to="/shop?ageFrom=60&ageTo=180">Around 5–15 years</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Help</h4>
            <ul>
              <li>
                <a href="mailto:hello@littlepetals.shop">hello@littlepetals.shop</a>
              </li>
              <li>
                <a href="/#feedback">Share feedback</a>
              </li>
              <li>
                <Link to="/shop">Size guide</Link>
              </li>
              <li>
                <Link to="/cart">Your cart</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Little Petals</span>
          <span>Soft florals · Cream & white · Made with care</span>
        </div>
      </div>
    </footer>
  );
}
