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
        <p className="kicker">{kicker}</p>
        <span className={`rule-gold mt-3 ${center ? "mx-auto" : ""}`} />
        <h2 className="font-display mt-6 text-4xl font-medium uppercase leading-tight tracking-[0.05em] md:text-5xl">
          {title}
          {accent && <span className="text-gold"> {accent}</span>}
        </h2>
        {lead && <p className="mt-5 text-[15px] leading-relaxed opacity-65 md:text-base">{lead}</p>}
      </div>
    </Reveal>
  );
}
