import { Coverflow } from "../components/ui/Coverflow";
import { Reveal, RevealSection } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { StoryBubble } from "../components/ui/StoryBubble";
import type { GalleryItem } from "../data/site";
import { gallery, site } from "../data/site";

function Card({ item }: { item: GalleryItem }) {
  return (
    <figure className="card group overflow-hidden">
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </div>
      <figcaption className="flex h-12 items-center justify-between gap-3 px-4">
        <span className="truncate text-sm font-semibold">{item.label}</span>
        <span className="shrink-0 rounded-full border border-cream/15 px-2.5 py-0.5 text-[11px] font-semibold text-mist">
          {item.tag}
        </span>
      </figcaption>
    </figure>
  );
}

export function Gallery() {
  return (
    <RevealSection id="travail" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          kicker="Le travail"
          title="Chaque coupe"
          accent="signée."
          lead="Un aperçu du quotidien du salon. Le reste se passe en vidéo, sur les réseaux."
        />

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-6">
          {gallery.map((item, i) => (
            <Reveal key={item.label} delay={Math.min(i * 0.06, 0.3)}>
              <Card item={item} />
            </Reveal>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <Coverflow
            items={gallery}
            keyOf={(item) => item.label}
            render={(item) => <Card item={item} />}
            stageClassName="h-[calc(81vw+3.5rem)]"
            cardClassName="w-[62vw]"
            shiftVw={60}
          />
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-5 md:mt-14">
            <StoryBubble />
            <div className="flex gap-3">
              <a
                href={site.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost !px-5 !py-2.5 text-sm"
              >
                TikTok
              </a>
              <a
                href={site.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost !px-5 !py-2.5 text-sm"
              >
                YouTube
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </RevealSection>
  );
}
