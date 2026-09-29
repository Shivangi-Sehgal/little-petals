export function FlowerMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <g fill="#E8A0B0">
        <ellipse cx="32" cy="14" rx="8" ry="13" />
        <ellipse cx="32" cy="50" rx="8" ry="13" />
        <ellipse cx="14" cy="32" rx="13" ry="8" />
        <ellipse cx="50" cy="32" rx="13" ry="8" />
      </g>
      <g fill="#F0D6DC" opacity="0.9">
        <ellipse cx="20" cy="20" rx="6" ry="10" transform="rotate(-45 20 20)" />
        <ellipse cx="44" cy="20" rx="6" ry="10" transform="rotate(45 44 20)" />
        <ellipse cx="20" cy="44" rx="6" ry="10" transform="rotate(45 20 44)" />
        <ellipse cx="44" cy="44" rx="6" ry="10" transform="rotate(-45 44 44)" />
      </g>
      <circle cx="32" cy="32" r="8" fill="#F2D4A8" />
    </svg>
  );
}

export function FallingPetals() {
  const petals = [
    { left: '8%', delay: '0s', duration: '14s', size: 16 },
    { left: '22%', delay: '2s', duration: '16s', size: 12 },
    { left: '38%', delay: '5s', duration: '13s', size: 18 },
    { left: '55%', delay: '1s', duration: '17s', size: 14 },
    { left: '70%', delay: '3.5s', duration: '15s', size: 20 },
    { left: '85%', delay: '6s', duration: '14s', size: 13 },
    { left: '48%', delay: '8s', duration: '18s', size: 11 },
  ];

  return (
    <div className="hero__petals" aria-hidden="true">
      {petals.map((p, i) => (
        <span
          key={i}
          className="petal"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            width: p.size,
            height: p.size * 1.4,
          }}
        />
      ))}
    </div>
  );
}
