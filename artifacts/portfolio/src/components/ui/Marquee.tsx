interface MarqueeProps {
  items: string[];
  direction?: "left" | "right";
  className?: string;
  separator?: string;
}

export function Marquee({
  items,
  direction = "left",
  className = "",
  separator = "·",
}: MarqueeProps) {
  // Duplicate items for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className={`overflow-hidden select-none ${className}`}>
      <div
        className={`marquee-track ${direction === "left" ? "marquee-track--left" : "marquee-track--right"}`}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 whitespace-nowrap px-4"
          >
            <span>{item}</span>
            <span className="text-muted-foreground/50" aria-hidden="true">
              {separator}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
