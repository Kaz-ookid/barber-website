import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Marquee } from "../components/ui/Marquee";
import { images, marqueeWords, site } from "../data/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-svh flex-col overflow-hidden">
      <motion.div className="absolute inset-0 -z-10" style={{ y: bgY }}>
        <img
          src={images.hero}
          alt="Rudy Burtin au travail, ciseaux à la main"
          className="h-[120%] w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />
      </motion.div>

      <motion.div style={{ opacity: fade }} className="flex flex-1 flex-col justify-end px-5 pb-6 pt-28 md:px-10">
        <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-bone/80">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            ★ {site.rating}/5 · {site.reviews} avis
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.15, duration: 0.6 }}
            className="hidden sm:inline"
          >
            · Av. de Tivoli 6, Lausanne
          </motion.span>
        </div>

        <h1 className="font-display uppercase leading-[0.85]">
          <span className="block overflow-hidden">
            <motion.span
              className="block text-[20vw] text-bone md:text-[17vw]"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.15 }}
            >
              Burtin
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="text-stroke block text-[20vw] md:text-[17vw]"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.3 }}
            >
              Barber
            </motion.span>
          </span>
        </h1>

        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7, ease }}
            className="max-w-md font-serif text-2xl italic text-bone/90 md:text-3xl"
          >
            Une coupe pensée pour ton visage, pas pour la tendance.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7, ease }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href={site.planityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-full bg-blade px-8 py-4 font-mono text-sm uppercase tracking-[0.2em] text-ink transition-transform hover:scale-105"
            >
              Réserver
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#travail"
              className="rounded-full border border-bone/40 px-8 py-4 font-mono text-sm uppercase tracking-[0.2em] text-bone transition-colors hover:border-bone hover:bg-bone hover:text-ink"
            >
              Voir le travail
            </a>
          </motion.div>
        </div>
      </motion.div>

      <div className="border-y border-bone/10 bg-ink/60 py-4 backdrop-blur-sm">
        <Marquee duration={30}>
          {marqueeWords.map((word) => (
            <span key={word} className="mx-6 flex items-center gap-12 font-display text-xl uppercase tracking-wider text-bone/70">
              {word} <span className="text-blade">✂</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
