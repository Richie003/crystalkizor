import { useIntroReady } from "../lib/motion";

const items = [
  "Climate-responsive architecture from Enugu",
  "Studio COKA · Architecture, interiors & construction",
  "ELEvated · Furniture and spatial objects",
  "The Effective Architect · Practice, media & teaching",
  "AKO Alliance & Alive and Free · Education and restoration",
  "TEDxPortHarcourt · Buildings that work with climate",
];

export function MarqueeBar() {
  const ready = useIntroReady();
  const sequence = (
    <div className="flex items-center gap-8 pr-8">
      {items.map((item, index) => (
        <span key={item} className="flex items-center gap-8">
          {index === 0 ? (
            <span className="inline-flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 bg-clay" aria-hidden="true" />
              {item}
            </span>
          ) : (
            item
          )}
          <span className="opacity-40" aria-hidden="true">
            ·
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden border-b border-forest-deep bg-forest-deep py-2.5 text-[0.68rem] uppercase tracking-[0.18em] text-ivory/70 select-none">
      <div className={`marquee-track ${ready ? "" : "is-paused"}`}>
        {sequence}
        {sequence}
      </div>
    </div>
  );
}
