import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { PortfolioItem } from "../data/site";
import { portfolio, site } from "../data/site";

function Card({ item, index }: { item: PortfolioItem; index: number }) {
  return (
    <figure className="group relative w-[75vw] shrink-0 snap-start overflow-hidden sm:w-[45vw] md:w-[28vw]">
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <figcaption className="mt-3 flex items-baseline justify-between">
        <span className="font-display text-lg uppercase text-bone">{item.label}</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-smoke">
          {String(index + 1).padStart(2, "0")} · {item.tag}
        </span>
      </figcaption>
    </figure>
  );
}

export function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-62%"]);

  return (
    <section id="travail">
      {/* Desktop: pinned horizontal scroll */}
      <div ref={ref} className="relative hidden h-[300vh] md:block">
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div className="px-10">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-blade">03 · Le travail</p>
            <h2 className="font-display mt-4 text-8xl uppercase text-bone">
              Chaque coupe <span className="font-serif italic normal-case text-blade">signée</span>
            </h2>
          </div>
          <motion.div style={{ x }} className="mt-14 flex gap-8 pl-10">
            {portfolio.map((item, i) => (
              <Card key={item.label} item={item} index={i} />
            ))}
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-[28vw] shrink-0 items-center justify-center border border-bone/20 transition-colors hover:border-blade"
            >
              <span className="text-center font-display text-3xl uppercase leading-tight text-bone">
                Tout voir sur
                <br />
                <span className="text-blade">Instagram →</span>
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Mobile: swipe row */}
      <div className="px-5 py-24 md:hidden">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-blade">03 · Le travail</p>
        <h2 className="font-display mt-4 mb-10 text-[13vw] uppercase leading-[0.95] text-bone">
          Chaque coupe <span className="font-serif italic normal-case text-blade">signée</span>
        </h2>
        <div className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4">
          {portfolio.map((item, i) => (
            <Card key={item.label} item={item} index={i} />
          ))}
        </div>
        <a
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block font-mono text-xs uppercase tracking-[0.2em] text-blade"
        >
          Tout voir sur Instagram →
        </a>
      </div>
    </section>
  );
}
