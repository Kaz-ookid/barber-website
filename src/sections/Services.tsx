import { useState } from "react";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { services, site } from "../data/site";

export function Services() {
  const [showAll, setShowAll] = useState(false);
  const hiddenCount = services.filter((s, i) => !s.featured && i >= 3).length;

  return (
    <section id="prestations" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          kicker="Prestations"
          title="Le menu,"
          accent="prix nets."
          lead="Chaque prestation comprend le diagnostic, le shampoing, le coiffage et les conseils pour entretenir et recoiffer ta coupe à la maison. Paiement au salon."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service, i) => {
            const alwaysVisible = service.featured || i < 3;
            return (
              <Reveal
                key={service.name}
                delay={Math.min(i * 0.05, 0.3)}
                y={20}
                className={alwaysVisible || showAll ? "" : "hidden md:block"}
              >
                <a
                  href={site.planityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`card group flex h-full items-start justify-between gap-6 px-6 py-5 transition-colors hover:border-gold/40 ${
                    service.featured ? "border-gold/40 bg-gold/5" : ""
                  }`}
                >
                  <div>
                    <p className="font-display text-lg font-medium">
                      {service.name}
                      {service.featured && (
                        <span className="ml-2.5 rounded-full bg-gold px-2.5 py-0.5 align-middle text-[11px] font-bold uppercase tracking-wide text-night">
                          Signature
                        </span>
                      )}
                    </p>
                    <p className="mt-1 text-sm text-mist">
                      {service.duration}
                      {service.note && <span> · {service.note}</span>}
                    </p>
                  </div>
                  <p className="font-display shrink-0 text-xl font-medium text-gold">
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
          className="btn-ghost mt-5 w-full md:hidden"
        >
          {showAll ? "Réduire le menu" : `Voir le menu complet (+${hiddenCount})`}
        </button>

        <Reveal delay={0.2}>
          <p className="mt-8 text-sm text-mist">
            Coupe à domicile et accès prioritaire disponibles sur demande, au{" "}
            <a href="#contact" className="text-gold underline-offset-4 hover:underline">
              salon ou par téléphone
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
