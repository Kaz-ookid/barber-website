import { useState } from "react";
import { Reveal } from "../components/ui/Reveal";
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
    <section id="salon" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          kicker="Le salon"
          title="Un lieu pensé pour"
          accent="la précision."
          lead="Av. de Tivoli 6, à deux pas de la gare de Lausanne. Un salon chaleureux, une équipe qui monte, et une exigence : que tu ressortes avec la bonne coupe."
        />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-8">
          <Reveal className="card relative min-h-[20rem] overflow-hidden">
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
            <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-6 text-sm font-semibold">
              {points[active].caption}
            </p>
          </Reveal>

          <div className="hidden flex-col gap-6 md:flex">
            {points.map((point, i) => (
              <Reveal key={point.title} delay={i * 0.08}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`card h-full w-full px-6 py-6 text-left transition-all duration-300 ${
                    active === i
                      ? "border-gold/60 bg-gold/5 shadow-[0_0_35px_rgb(207_161_95/0.12)]"
                      : "hover:border-cream/25"
                  }`}
                >
                  <h3 className="font-display text-xl font-medium">
                    <span
                      className={`mr-3 text-sm font-semibold transition-colors ${
                        active === i ? "text-gold" : "text-mist"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {point.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-mist">{point.text}</p>
                </button>
              </Reveal>
            ))}
          </div>

          <div className="md:hidden">
            <div className="card min-h-[11rem] px-6 py-6">
              <h3 className="font-display text-xl font-medium">
                <span className="mr-3 text-sm font-semibold text-gold">
                  {String(active + 1).padStart(2, "0")}
                </span>
                {points[active].title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-mist">{points[active].text}</p>
            </div>
            <div className="mt-4 flex items-center justify-center gap-6">
              <button
                type="button"
                onClick={() => setActive((active + points.length - 1) % points.length)}
                aria-label="Point précédent"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:border-gold"
              >
                ←
              </button>
              <div className="flex items-center gap-2">
                {points.map((point, i) => (
                  <button
                    key={point.title}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Aller au point ${i + 1}`}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      active === i ? "bg-gold" : "bg-cream/20"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => setActive((active + 1) % points.length)}
                aria-label="Point suivant"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:border-gold"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
