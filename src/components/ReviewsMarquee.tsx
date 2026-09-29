import { reviews } from '../data/reviews';

function Stars({ rating }: { rating: number }) {
  return (
    <span className="review-card__stars" aria-label={`${rating} out of 5 stars`}>
      {'★'.repeat(rating)}
      <span className="review-card__stars-empty">{'★'.repeat(5 - rating)}</span>
    </span>
  );
}

function ReviewCard({
  name,
  city,
  quote,
  rating,
}: {
  name: string;
  city: string;
  quote: string;
  rating: number;
}) {
  return (
    <article className="review-card">
      <Stars rating={rating} />
      <p className="review-card__quote">“{quote}”</p>
      <footer className="review-card__author">
        <strong>{name}</strong>
        <span>{city}</span>
      </footer>
    </article>
  );
}

export function ReviewsMarquee() {
  const loop = [...reviews, ...reviews];

  return (
    <section className="section section--reviews" aria-label="Customer reviews">
      <div className="container">
        <div className="section__head">
          <h2>Petals from parents</h2>
          <p>Kind words drifting in from families across India.</p>
        </div>
      </div>
      <div className="reviews-marquee">
        <div className="reviews-marquee__fade reviews-marquee__fade--left" aria-hidden />
        <div className="reviews-marquee__fade reviews-marquee__fade--right" aria-hidden />
        <div className="reviews-marquee__track">
          {loop.map((r, i) => (
            <ReviewCard
              key={`${r.id}-${i}`}
              name={r.name}
              city={r.city}
              quote={r.quote}
              rating={r.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
