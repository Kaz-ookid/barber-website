import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { gallery, site } from "../data/site";

export function Gallery() {
  return (
    <section id="travail" className="py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            kicker="Le travail"
            title="Chaque coupe"
            accent="signée."
            lead="Un aperçu du quotidien du salon. Le reste se passe en vidéo, tous les jours."
          />
          <Reveal delay={0.1}>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost mb-12 md:mb-16"
            >
              Tout voir sur Instagram
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {gallery.map((item, i) => (
            <Reveal key={item.label} delay={Math.min(i * 0.06, 0.3)}>
              <figure className="card group overflow-hidden">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <figcaption className="flex items-center justify-between px-4 py-3">
                  <span className="text-sm font-semibold">{item.label}</span>
                  <span className="rounded-full border border-cream/15 px-2.5 py-0.5 text-[11px] font-semibold text-mist">
                    {item.tag}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
