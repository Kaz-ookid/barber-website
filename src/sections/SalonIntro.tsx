import { useState } from "react";
import { Reveal, RevealSection } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { images } from "../data/site";

const points = [
  {
    title: "Sur-mesure",
    text: "Chaque passage commence par un diagnostic : implantation, densité, forme du visage. La coupe est pensée pour toi.",
    image: images.interior,
    caption: "Le salon · Lausanne",
  },
  {
    title: "Expérience complète",
    text: "Accueil, shampoing, coiffage et conseils pour recoiffer ta coupe à la maison. Rien n'est laissé au hasard.",
    image: images.pomade,
    caption: "Soins & finitions",
  },
  {
    title: "Un salon qui vit",
    text: "Une équipe de barbiers résidents, des produits sélectionnés avec soin. Un lieu où l'on revient, pas juste un rendez-vous.",
    image: images.chair,
    caption: "Les fauteuils",
  },
];

export function SalonIntro() {
  const [active, setActive] = useState(0);

  return (
    <RevealSection id="salon" className="bg-paper py-24 text-ink md:py-32">
      <div className="container-x">
        <SectionHeading
          kicker="Le salon"
          title="Un lieu pensé pour"
          accent="la précision."
          lead="Av. de Tivoli 6, à deux pas de la gare de Lausanne. Un salon chaleureux, une équipe qui monte, et une exigence : que tu ressortes avec la bonne coupe."
        />

        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <Reveal className="relative min-h-[20rem] overflow-hidden">
            {points.map((point, i) => (
              <img
                key={point.title}
                src={point.image}
                alt={point.caption}
                loading="lazy"
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-5 text-[11px] font-medium uppercase tracking-[0.25em] text-cream">
              {points[active].caption}
            </p>
          </Reveal>

          <div className="hidden flex-col md:flex">
            {points.map((point, i) => (
              <Reveal key={point.title} delay={i * 0.08}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`w-full border-b border-ink/15 py-6 text-left transition-colors first:border-t ${
                    active === i ? "" : "opacity-60 hover:opacity-90"
                  }`}
                >
                  <h3 className="font-display flex items-baseline gap-4 text-2xl font-medium uppercase tracking-[0.04em]">
                    <span
                      className={`font-display text-base transition-colors ${
                        active === i ? "text-gold" : ""
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {point.title}
                    {active === i && <span className="ml-auto h-px w-8 self-center bg-gold" />}
                  </h3>
                  <p className="mt-2.5 pl-10 text-sm leading-relaxed text-stone">{point.text}</p>
                </button>
              </Reveal>
            ))}
          </div>

          <div className="md:hidden">
            <div className="min-h-[10.5rem] border-y border-ink/15 py-5">
              <h3 className="font-display flex items-baseline gap-3 text-xl font-medium uppercase">
                <span className="text-gold">{String(active + 1).padStart(2, "0")}</span>
                {points[active].title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">{points[active].text}</p>
            </div>
            <div className="mt-4 flex items-center justify-center gap-6">
              <button
                type="button"
                onClick={() => setActive((active + points.length - 1) % points.length)}
                aria-label="Point précédent"
                className="flex h-10 w-10 items-center justify-center border border-ink/25 transition-colors hover:border-gold hover:text-gold"
              >
                ←
              </button>
              <div className="flex items-center gap-2.5">
                {points.map((point, i) => (
                  <button
                    key={point.title}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Aller au point ${i + 1}`}
                    className={`h-px w-5 transition-colors ${
                      active === i ? "bg-gold" : "bg-ink/25"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => setActive((active + 1) % points.length)}
                aria-label="Point suivant"
                className="flex h-10 w-10 items-center justify-center border border-ink/25 transition-colors hover:border-gold hover:text-gold"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
