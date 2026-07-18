import type { CSSProperties, ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  duration?: number;
  className?: string;
}

/**
 * Seamless marquee: two identical halves, each repeating the content three
 * times so the loop never shows a gap, even on ultrawide screens.
 */
export function Marquee({ children, duration = 40, className }: MarqueeProps) {
  const half = (
    <div className="flex shrink-0 items-center">
      {children}
      {children}
      {children}
    </div>
  );
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className ?? ""}`} aria-hidden>
      <div
        className="animate-marquee flex w-max items-center"
        style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
      >
        {half}
        {half}
      </div>
    </div>
  );
}
