import { Link } from 'react-router-dom';
import type { Theme } from '../types';
import { DeliveryFloat } from '../components/DeliveryFloat';
import { FallingPetals } from '../components/Floral';
import { ProductCard } from '../components/ProductCard';
import { ReviewsMarquee } from '../components/ReviewsMarquee';
import { products, THEMES } from '../data/products';

export function Home() {
  const featured = products.filter((p) => p.featured).slice(0, 6);
  const trending = products.filter((p) => p.trending).slice(0, 6);

  return (
    <>
      <section className="hero">
        <div className="hero__media">
          <img
            src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1600&q=80"
            alt="Children in soft cream clothing among flowers"
          />
          <div className="hero__veil" />
        </div>
        <FallingPetals />
        <div className="hero__content">
          <h1 className="hero__brand">
            Little Petals
            <span>clothing that blooms</span>
          </h1>
          <p className="hero__tagline">
            Soft cream & white pieces for girls and boys — from first months to fifteen.
          </p>
          <div className="hero__ctas">
            <Link to="/shop" className="btn btn--primary">
              Shop the collection
            </Link>
            <Link to="/shop?wear=party" className="btn btn--ghost">
              Party wear
            </Link>
          </div>
        </div>
      </section>

      <div className="container delivery-float-wrap delivery-float-wrap--early">
        <DeliveryFloat />
      </div>

      <section className="section">
        <div className="container">
          <div className="section__head">
            <h2>Choose their world</h2>
            <p>Browse by girls or boys, then refine by age and wear type.</p>
          </div>
          <div className="gender-grid">
            <Link to="/shop?gender=girls" className="gender-tile">
              <img
                src="https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=900&q=80"
                alt="Girls collection"
              />
              <div className="gender-tile__veil" />
              <div className="gender-tile__content">
                <h3>Girls</h3>
                <p>Dresses, sets & dreamy layers</p>
                <span className="btn btn--blush btn--sm">Explore girls</span>
              </div>
            </Link>
            <Link to="/shop?gender=boys" className="gender-tile">
              <img
                src="https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=900&q=80"
                alt="Boys collection"
              />
              <div className="gender-tile__veil" />
              <div className="gender-tile__content">
                <h3>Boys</h3>
                <p>Everyday ease & celebration looks</p>
                <span className="btn btn--blush btn--sm">Explore boys</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section__head">
            <h2>Dress the day</h2>
            <p>Daily, night, party, and festive wear — filtered to how they live.</p>
          </div>
          <div className="wear-row">
            <Link to="/shop?wear=daily" className="wear-link">
              <div className="wear-link__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M5 19l1.5-1.5" />
                </svg>
              </div>
              <h3>Daily Wear</h3>
              <p>Soft cottons for play and school</p>
            </Link>
            <Link to="/shop?wear=night" className="wear-link">
              <div className="wear-link__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4 7 7 0 0 0 20 14.5z" />
                </svg>
              </div>
              <h3>Night Wear</h3>
              <p>Cozy sets for bedtime stories</p>
            </Link>
            <Link to="/shop?wear=party" className="wear-link">
              <div className="wear-link__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 3l2.2 6.6H21l-5.4 4 2.1 6.4L12 16.4 6.3 20l2.1-6.4L3 9.6h6.8L12 3z" />
                </svg>
              </div>
              <h3>Party Wear</h3>
              <p>Celebration looks that sparkle softly</p>
            </Link>
            <Link to="/shop?wear=festive" className="wear-link">
              <div className="wear-link__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 2v4M8 4l1.5 2.5M16 4l-1.5 2.5" />
                  <path d="M6 10h12l-1 10H7L6 10z" />
                  <path d="M9 14h6" />
                </svg>
              </div>
              <h3>Festive Wear</h3>
              <p>Tradition-ready looks for big days</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section__head">
            <h2>Children’s themes</h2>
            <p>Pick a world — garden days, dreamland nights, parties, adventures, fairy tales, and festivals.</p>
          </div>
          <div className="theme-row">
            {THEMES.map((theme) => (
              <Link key={theme.value} to={`/shop?theme=${theme.value}`} className="wear-link">
                <div className="wear-link__icon" aria-hidden="true">
                  <ThemeIcon theme={theme.value} />
                </div>
                <h3>{theme.label}</h3>
                <p>{theme.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--trending">
        <div className="container">
          <div className="section__head">
            <h2>Trending now</h2>
            <p>What little ones are wearing this season — priced in ₹.</p>
          </div>
          <div className="product-grid">
            {trending.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--featured">
        <div className="container">
          <div className="section__head">
            <h2>Blooming favorites</h2>
            <p>A few petals from our cream & white collection.</p>
          </div>
          <div className="product-grid">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <div className="container">
        <div className="cta-band">
          <h2>Find their perfect fit</h2>
          <p>Filter by age from 1 month to 15 years and shop in Indian Rupees.</p>
          <Link to="/shop" className="btn btn--primary">
            Open the shop
          </Link>
        </div>
      </div>

      <ReviewsMarquee />

      <section className="section section--contact" id="contact">
        <div className="container">
          <div className="contact-panel">
            <div className="contact-panel__intro">
              <p className="contact-panel__eyebrow">We’re here</p>
              <h2>Contact us</h2>
              <p>
                Questions about sizing, instant delivery near our boutique, or a special order?
                Reach out — we reply with care.
              </p>
            </div>
            <div className="contact-panel__details">
              <a className="contact-tile" href="mailto:hello@littlepetals.shop">
                <span className="contact-tile__label">Email</span>
                <strong>hello@littlepetals.shop</strong>
              </a>
              <a className="contact-tile" href="tel:+919876543210">
                <span className="contact-tile__label">Phone</span>
                <strong>+91 98765 43210</strong>
              </a>
              <div className="contact-tile">
                <span className="contact-tile__label">Boutique</span>
                <strong>Cream Lane, Indiranagar</strong>
                <span className="contact-tile__meta">Bengaluru · Mon–Sat, 10am–7pm</span>
              </div>
              <a className="contact-tile" href="https://wa.me/919876543210" target="_blank" rel="noreferrer">
                <span className="contact-tile__label">WhatsApp</span>
                <strong>Chat with us</strong>
                <span className="contact-tile__meta">Quick help for orders & delivery</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ThemeIcon({ theme }: { theme: Theme }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
  } as const;

  switch (theme) {
    case 'garden':
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3" />
          <path d="M12 11v9M9 20h6M8 14c-2 1-3 3-3 5M16 14c2 1 3 3 3 5" />
        </svg>
      );
    case 'dream':
      return (
        <svg {...common}>
          <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4 7 7 0 0 0 20 14.5z" />
        </svg>
      );
    case 'celebration':
      return (
        <svg {...common}>
          <path d="M12 3l2.2 6.6H21l-5.4 4 2.1 6.4L12 16.4 6.3 20l2.1-6.4L3 9.6h6.8L12 3z" />
        </svg>
      );
    case 'adventure':
      return (
        <svg {...common}>
          <path d="M4 18l6-12 3 6 2-3 5 9H4z" />
        </svg>
      );
    case 'fairy-tale':
      return (
        <svg {...common}>
          <path d="M12 3l1.2 4.2L17 8.5l-3.8 1.3L12 14l-1.2-4.2L7 8.5l3.8-1.3L12 3z" />
          <path d="M6 16l.6 2 2 .6-2 .6L6 21l-.6-1.8-2-.6 2-.6L6 16zM18 15l.5 1.6 1.5.5-1.5.5L18 19l-.5-1.4-1.5-.5 1.5-.5L18 15z" />
        </svg>
      );
    case 'festival':
      return (
        <svg {...common}>
          <path d="M12 3c2 3 2 5 0 8 2-1 4-1 6 1-2 0-3 1-3 3 2 0 3 2 2 4-2-1-4-1-5 1-1-2-3-2-5-1-1-2 0-4 2-4 0-2-1-3-3-3 2-2 4-2 6-1-2-3-2-5 0-8z" />
        </svg>
      );
  }
}
