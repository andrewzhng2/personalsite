export default function HeroStack({ stackOrder, onBringFront }) {
  return (
    <div className="hero-stack-wrap">
      <div className="hero-stack" role="list" aria-label="Featured previews">
        {stackOrder.map((item, i) => (
          <button
            key={item.key}
            type="button"
            className="hero-card"
            style={{ zIndex: 100 + (stackOrder.length - i) }}
            onClick={() => onBringFront(item.key)}
            aria-label={`Bring ${item.alt} to front`}
          >
            <img src={item.src} alt={item.alt} />
          </button>
        ))}
      </div>
    </div>
  );
}


