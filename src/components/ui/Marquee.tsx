import type { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  duration?: number;
  reverse?: boolean;
  className?: string;
}

export function Marquee({ children, duration = 28, reverse, className }: MarqueeProps) {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className ?? ""}`} aria-hidden>
      <div
        className={`animate-marquee inline-flex w-max items-center ${reverse ? "marquee-reverse" : ""}`}
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        <div className="inline-flex items-center">{children}</div>
        <div className="inline-flex items-center">{children}</div>
      </div>
    </div>
  );
}
