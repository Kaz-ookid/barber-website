import { useState } from "react";
import { Reveal, RevealSection } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { services, site } from "../data/site";

export function Services() {
  const [showAll, setShowAll] = useState(false);
  const hiddenCount = services.filter((s, i) => !s.featured && i >= 3).length;

  return (
    <RevealSection id="prestations" className="bg-paper pb-24 text-ink md:pb-32">
      <div className="container-x border-t border-ink/15 pt-20 md:pt-24">
        <SectionHeading
          kicker="Prestations"
          title="Soin expert."
          accent="Prix nets."
          lead="Chaque prestation comprend le diagnostic, le shampoing, le coiffage et les conseils pour entretenir et recoiffer ta coupe à la maison. Paiement au salon."
        />

        <div className="grid gap-x-14 md:grid-cols-2">
          {services.map((service, i) => {
            const alwaysVisible = service.featured || i < 3;
            return (
              <Reveal
                key={service.name}
                delay={Math.min(i * 0.04, 0.25)}
                y={16}
                className={alwaysVisible || showAll ? "" : "hidden md:block"}
              >
                <a
                  href={site.planityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-baseline justify-between gap-6 border-b border-ink/12 py-5 transition-colors ${
                    service.featured ? "border-l border-l-gold bg-card pl-5 pr-3" : ""
                  }`}
                >
                  <div>
                    <p className="font-display text-xl font-medium uppercase tracking-[0.03em] transition-colors group-hover:text-gold md:text-2xl">
                      {service.name}
                      {service.featured && (
                        <span className="ml-3 align-middle text-[9px] font-medium uppercase tracking-[0.3em] text-gold">
                          Signature
                        </span>
                      )}
                    </p>
                    <p className="mt-1 text-xs tracking-wide text-stone">
                      {service.duration}
                      {service.note && <span> · {service.note}</span>}
                    </p>
                  </div>
                  <p className="font-display shrink-0 text-xl font-medium text-gold md:text-2xl">
                    {service.price}
                  </p>
                </a>
              </Reveal>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => setShowAll((v) => !v)}
          className="mt-6 w-full border border-ink/25 py-3.5 text-[11px] font-medium uppercase tracking-[0.25em] transition-colors hover:border-ink md:hidden"
        >
          {showAll ? "Réduire le menu" : `Voir le menu complet (+${hiddenCount})`}
        </button>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <p className="text-sm text-stone">
              Coupe à domicile et accès prioritaire disponibles sur demande, au{" "}
              <a href="#contact" className="text-ink underline decoration-gold underline-offset-4">
                salon ou par téléphone
              </a>
              .
            </p>
            <a href="#reserver" className="btn-dark shrink-0">
              Réserver
            </a>
          </div>
        </Reveal>
      </div>
    </RevealSection>
  );
}
