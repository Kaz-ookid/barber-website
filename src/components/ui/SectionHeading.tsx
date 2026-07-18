import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  kicker: string;
  title: string;
  accent?: string;
  lead?: string;
  center?: boolean;
}

export function SectionHeading({ kicker, title, accent, lead, center }: SectionHeadingProps) {
  return (
    <Reveal>
      <div className={`mb-12 max-w-2xl md:mb-16 ${center ? "mx-auto text-center" : ""}`}>
        <p className="eyebrow">{kicker}</p>
        <h2 className="font-display mt-3 text-4xl font-medium leading-tight tracking-tight md:text-5xl">
          {title}
          {accent && <span className="shine-text italic"> {accent}</span>}
        </h2>
        {lead && <p className="mt-4 text-base leading-relaxed text-mist md:text-lg">{lead}</p>}
      </div>
    </Reveal>
  );
}
