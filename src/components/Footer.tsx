import { Link } from 'react-router-dom';

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
            </ul>
          </div>
          <div>
            <h4>Ages</h4>
            <ul>
              <li>
                <Link to="/shop?age=1-6m">Babies (1–6 months)</Link>
              </li>
              <li>
                <Link to="/shop?age=1-2y">Toddlers (1–2 years)</Link>
              </li>
              <li>
                <Link to="/shop?age=6-8y">Kids (6–8 years)</Link>
              </li>
              <li>
                <Link to="/shop?age=12-15y">Teens (12–15 years)</Link>
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
