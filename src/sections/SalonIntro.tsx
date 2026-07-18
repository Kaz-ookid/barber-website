import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { images } from "../data/site";

const points = [
  {
    title: "Sur-mesure",
    text: "Chaque passage commence par un diagnostic : implantation, densité, forme du visage. La coupe est pensée pour toi.",
  },
  {
    title: "Expérience complète",
    text: "Accueil, shampoing, coiffage et conseils pour recoiffer ta coupe à la maison. Rien n'est laissé au hasard.",
  },
  {
    title: "Un salon qui vit",
    text: "Une équipe de barbiers résidents, des produits sélectionnés avec soin. Un lieu où l'on revient, pas juste un rendez-vous.",
  },
];

export function SalonIntro() {
  return (
    <section id="salon" className="relative py-24 md:py-32">
      <div className="glow left-[40%] top-[10%] h-[24rem] w-[24rem] bg-gold/8" />
      <div className="container-x">
        <SectionHeading
          kicker="Le salon"
          title="Un lieu pensé pour"
          accent="la précision."
          lead="Av. de Tivoli 6, à deux pas de la gare de Lausanne. Un salon chaleureux, une équipe qui monte, et une exigence : que tu ressortes avec la bonne coupe."
        />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-8">
          <Reveal className="card group relative min-h-[20rem] overflow-hidden">
            <img
              src={images.interior}
              alt="L'intérieur du salon, fauteuils et miroirs"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-6 text-sm font-semibold">
              Le salon · Lausanne
            </p>
          </Reveal>

          <div className="flex flex-col gap-6">
            {points.map((point, i) => (
              <Reveal key={point.title} delay={i * 0.08}>
                <div className="card h-full px-6 py-6 transition-colors hover:border-gold/30">
                  <h3 className="font-display text-xl font-medium">
                    <span className="mr-3 text-sm font-semibold text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {point.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-mist">{point.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
