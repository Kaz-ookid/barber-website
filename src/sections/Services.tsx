import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { services, site } from "../data/site";

export function Services() {
  return (
    <section id="prestations" className="bg-coal px-5 py-24 md:px-10 md:py-36">
      <SectionHeading index="02" kicker="Prestations" title="Le" accent="menu" />

      <div className="border-t border-bone/10">
        {services.map((service, i) => (
          <Reveal key={service.name} delay={Math.min(i * 0.04, 0.3)} y={20}>
            <a
              href={site.planityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-baseline justify-between gap-4 overflow-hidden border-b border-bone/10 py-6 md:py-8 ${
                service.featured ? "border-l-2 border-l-blade pl-4 md:pl-6" : ""
              }`}
            >
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-bone transition-transform duration-300 ease-out group-hover:scale-y-100" />

              <span className="relative flex flex-col gap-1 md:flex-row md:items-baseline md:gap-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-smoke transition-colors group-hover:text-ink/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-2xl uppercase tracking-wide text-bone transition-colors group-hover:text-ink md:text-4xl">
                  {service.name}
                  {service.featured && (
                    <span className="ml-3 align-middle font-serif text-lg italic normal-case text-blade">
                      signature
                    </span>
                  )}
                </span>
                {service.note && (
                  <span className="max-w-xs font-serif text-sm italic text-smoke transition-colors group-hover:text-ink/70">
                    {service.note}
                  </span>
                )}
              </span>

              <span className="relative flex shrink-0 items-baseline gap-4 md:gap-8">
                <span className="hidden font-mono text-xs uppercase tracking-[0.2em] text-smoke transition-colors group-hover:text-ink/60 sm:inline">
                  {service.duration}
                </span>
                <span className="font-display text-xl text-bone transition-colors group-hover:text-ink md:text-3xl">
                  {service.price}
                </span>
                <span className="hidden text-blade transition-transform duration-300 group-hover:translate-x-1 md:inline">
                  →
                </span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15}>
        <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-smoke">
          Réservation en ligne via Planity · Chaque prestation comprend diagnostic, shampoing et coiffage
        </p>
      </Reveal>
    </section>
  );
}
