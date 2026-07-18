import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
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
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i + gallery.length - 1) % gallery.length);
  const next = () => setIdx((i) => (i + 1) % gallery.length);

  return (
    <section id="travail" className="py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            kicker="Le travail"
            title="Chaque coupe"
            accent="signée."
            lead="Un aperçu du quotidien du salon. Le reste se passe en vidéo, sur les réseaux."
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

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-6">
          {gallery.map((item, i) => (
            <Reveal key={item.label} delay={Math.min(i * 0.06, 0.3)}>
              <Card item={item} />
            </Reveal>
          ))}
        </div>

        {/* Mobile: centered carousel, neighbours peeking smaller behind */}
        <div className="md:hidden">
          <div className="relative h-[calc(81vw+3.5rem)] overflow-hidden">
            {gallery.map((item, i) => {
              const n = gallery.length;
              const offset = (i - idx + n) % n;
              let pos: number | null = null;
              if (offset === 0) pos = 0;
              else if (offset === 1) pos = 1;
              else if (offset === n - 1) pos = -1;
              if (pos === null) return null;
              return (
                <motion.div
                  key={item.label}
                  className="absolute left-1/2 top-0 w-[62vw]"
                  initial={false}
                  animate={{
                    x: `calc(-50% + ${pos * 60}vw)`,
                    scale: pos === 0 ? 1 : 0.82,
                    opacity: pos === 0 ? 1 : 0.4,
                  }}
                  style={{ zIndex: pos === 0 ? 2 : 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 30 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -50) next();
                    else if (info.offset.x > 50) prev();
                  }}
                >
                  <Card item={item} />
                </motion.div>
              );
            })}
          </div>
          <div className="mt-4 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={prev}
              aria-label="Photo précédente"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:border-gold"
            >
              ←
            </button>
            <div className="flex items-center gap-2">
              {gallery.map((item, i) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setIdx(i)}
                  aria-label={`Aller à la photo ${i + 1}`}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    idx === i ? "bg-gold" : "bg-cream/20"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Photo suivante"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:border-gold"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
