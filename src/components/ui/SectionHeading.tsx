import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  index: string;
  kicker: string;
  title: string;
  accent?: string;
  light?: boolean;
}

export function SectionHeading({ index, kicker, title, accent, light }: SectionHeadingProps) {
  return (
    <Reveal>
      <div className="mb-12 md:mb-20">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-blade">
          {index} · {kicker}
        </p>
        <h2
          className={`font-display mt-4 text-[13vw] leading-[0.95] uppercase sm:text-6xl md:text-8xl ${
            light ? "text-ink" : "text-bone"
          }`}
        >
          {title}{" "}
          {accent && (
            <span className="font-serif italic normal-case tracking-normal text-blade">
              {accent}
            </span>
          )}
        </h2>
      </div>
    </Reveal>
  );
}
