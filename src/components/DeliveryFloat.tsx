export function DeliveryFloat() {
  return (
    <aside className="delivery-float" aria-label="Instant delivery">
      <div className="delivery-float__orb" aria-hidden>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 12h3l2-5h8l2 5h3" />
          <path d="M5 12v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5" />
          <circle cx="8" cy="18" r="1.4" />
          <circle cx="16" cy="18" r="1.4" />
        </svg>
      </div>
      <div className="delivery-float__copy">
        <p className="delivery-float__eyebrow">Near our boutique</p>
        <h2>Instant petals, when you’re close</h2>
        <p>
          Same-day &amp; instant delivery bloom based on your distance from our store.
          Share your pin at checkout — we’ll tell you what’s possible.
        </p>
      </div>
      <span className="delivery-float__petal delivery-float__petal--a" aria-hidden />
      <span className="delivery-float__petal delivery-float__petal--b" aria-hidden />
      <span className="delivery-float__petal delivery-float__petal--c" aria-hidden />
    </aside>
  );
}
