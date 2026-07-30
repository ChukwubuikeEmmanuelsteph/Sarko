import "./FloatingCards.css";

const cards = [
  {
    title: "Innovative Technology",
    desc: "We leverage innovative technology to transform challenges into opportunities, driving efficiency and growth in a rapidly evolving digital world.",
    icon: (
      <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Database Solutions",
    desc: "We leverage innovative technology to transform challenges into opportunities, driving efficiency and growth in a rapidly evolving digital world.",
    icon: (
      <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
        <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
      </svg>
    ),
  },
  {
    title: "Artificial Intelligence",
    desc: "We leverage innovative technology to transform challenges into opportunities, driving efficiency and growth in a rapidly evolving digital world.",
    icon: (
      <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="7" width="16" height="12" rx="2" />
        <path d="M12 7V3" />
        <circle cx="9" cy="13" r="1" />
        <circle cx="15" cy="13" r="1" />
      </svg>
    ),
  },
];

function FloatingCards() {
  return (
    <section className="floating-cards">
      <div className="container">
        {cards.map((card) => (
          <div className="floating-card" key={card.title}>
            <div className="floating-card__icon">{card.icon}</div>

            <h3>{card.title}</h3>

            <p>{card.desc}</p>

            <a href="#services" className="floating-card__link">
              Read More

              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FloatingCards;