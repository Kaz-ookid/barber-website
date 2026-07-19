import { Coverflow } from "../components/ui/Coverflow";
import { Reveal, RevealSection } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { StoryBubble } from "../components/ui/StoryBubble";
import type { GalleryItem } from "../data/site";
import { gallery, site } from "../data/site";

function Card({ item }: { item: GalleryItem }) {
  return (
    <figure className="group">
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <figcaption className="flex h-11 items-center justify-between gap-3 border-b border-ink/12">
        <span className="font-display truncate text-base font-medium uppercase tracking-[0.05em]">
          {item.label}
        </span>
        <span className="shrink-0 text-[10px] font-medium uppercase tracking-[0.25em] text-stone">
          {item.tag}
        </span>
      </figcaption>
    </figure>
  );
}

export function Gallery() {
  return (
    <RevealSection id="travail" className="bg-paper py-24 text-ink md:py-32">
      <div className="container-x">
        <SectionHeading
          kicker="Le travail"
          title="Chaque coupe"
          accent="signée."
          lead="Un aperçu du quotidien du salon. Le reste se passe en vidéo, sur les réseaux."
        />

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-8">
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
            stageClassName="h-[calc(78vw+3rem)]"
            cardClassName="w-[62vw]"
            shiftVw={60}
          />
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 md:mt-16">
            <StoryBubble />
            <span className="hidden h-4 w-px bg-ink/20 sm:block" />
            <div className="flex gap-8">
              <a
                href={site.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-medium uppercase tracking-[0.25em] transition-colors hover:text-gold"
              >
                TikTok
              </a>
              <a
                href={site.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-medium uppercase tracking-[0.25em] transition-colors hover:text-gold"
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
