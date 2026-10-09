import { useState, type FormEvent } from 'react';
import type { Review } from '../data/reviews';

const STORAGE_KEY = 'little-petals-feedback';

function loadFeedback(): Review[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Review[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function Stars({ rating }: { rating: number }) {
  return (
    <span className="review-card__stars" aria-label={`${rating} out of 5 stars`}>
      {'★'.repeat(rating)}
      <span className="review-card__stars-empty">{'★'.repeat(5 - rating)}</span>
    </span>
  );
}

export function FeedbackForm() {
  const [entries, setEntries] = useState<Review[]>(loadFeedback);
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [quote, setQuote] = useState('');
  const [rating, setRating] = useState(5);
  const [error, setError] = useState('');
  const [justSent, setJustSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedCity = city.trim();
    const trimmedQuote = quote.trim();

    if (!trimmedName || !trimmedQuote) {
      setError('Please add your name and a short note.');
      return;
    }
    if (trimmedQuote.length < 12) {
      setError('Tell us a little more — at least a sentence works best.');
      return;
    }

    const entry: Review = {
      id: `fb-${Date.now()}`,
      name: trimmedName,
      city: trimmedCity || 'India',
      quote: trimmedQuote,
      rating,
    };

    const next = [entry, ...entries].slice(0, 24);
    setEntries(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setName('');
    setCity('');
    setQuote('');
    setRating(5);
    setError('');
    setJustSent(true);
  };

  return (
    <section className="section section--feedback" id="feedback" aria-label="Share feedback">
      <div className="container">
        <div className="feedback-panel">
          <div className="feedback-panel__intro">
            <p className="feedback-panel__eyebrow">Your voice</p>
            <h2>Share your feedback</h2>
            <p>
              Tried a Little Petals piece? Tell us how it felt, fit, or looked on your little one —
              we read every note.
            </p>
          </div>

          <form className="feedback-form" onSubmit={submit} noValidate>
            <div className="feedback-form__row">
              <label className="feedback-field">
                <span className="field-label">Your name</span>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="e.g. Ananya"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setJustSent(false);
                  }}
                  required
                />
              </label>
              <label className="feedback-field">
                <span className="field-label">City</span>
                <input
                  type="text"
                  name="city"
                  autoComplete="address-level2"
                  placeholder="e.g. Bengaluru"
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                    setJustSent(false);
                  }}
                />
              </label>
            </div>

            <fieldset className="feedback-field feedback-field--rating">
              <legend className="field-label">Rating</legend>
              <div className="feedback-rating" role="radiogroup" aria-label="Star rating">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    type="button"
                    role="radio"
                    aria-checked={rating === value}
                    aria-label={`${value} star${value === 1 ? '' : 's'}`}
                    className={`feedback-rating__star ${rating >= value ? 'is-active' : ''}`}
                    onClick={() => {
                      setRating(value);
                      setJustSent(false);
                    }}
                  >
                    ★
                  </button>
                ))}
              </div>
            </fieldset>

            <label className="feedback-field">
              <span className="field-label">Your note</span>
              <textarea
                name="feedback"
                rows={4}
                placeholder="Softness, fit, festive sparkle — whatever stood out…"
                value={quote}
                onChange={(e) => {
                  setQuote(e.target.value);
                  setJustSent(false);
                }}
                required
              />
            </label>

            {error ? (
              <p className="feedback-form__error" role="alert">
                {error}
              </p>
            ) : null}
            {justSent ? (
              <p className="feedback-form__success" role="status">
                Thank you — your note is blooming below.
              </p>
            ) : null}

            <button type="submit" className="btn btn--primary">
              Share feedback
            </button>
          </form>
        </div>

        {entries.length > 0 ? (
          <div className="feedback-wall">
            <h3 className="feedback-wall__title">Notes from you</h3>
            <div className="feedback-wall__grid">
              {entries.map((entry) => (
                <article key={entry.id} className="review-card feedback-wall__card">
                  <Stars rating={entry.rating} />
                  <p className="review-card__quote">“{entry.quote}”</p>
                  <footer className="review-card__author">
                    <strong>{entry.name}</strong>
                    <span>{entry.city}</span>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
