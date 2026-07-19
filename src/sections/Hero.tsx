import { motion } from "framer-motion";
import { images, site } from "../data/site";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      {/* Full-bleed image, right half on desktop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.2 }}
        className="absolute inset-y-0 right-0 hidden w-[55%] lg:block"
      >
        <img
          src={images.hero}
          alt="Travail aux ciseaux au salon Burtin Barber"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/35 to-transparent" />
      </motion.div>

      <div className="container-x relative flex flex-col justify-center pb-14 pt-24 lg:min-h-svh lg:pb-16 lg:pt-28">
        <div className="max-w-xl">
          <motion.p {...fadeUp(0.1)} className="kicker">
            Barbershop · Av. de Tivoli 6, {site.city}
          </motion.p>
          <motion.span {...fadeUp(0.18)} className="rule-gold mt-4" />
          <motion.h1
            {...fadeUp(0.3)}
            className="font-display mt-6 text-[12vw] font-medium uppercase leading-[1.02] tracking-[0.04em] sm:text-6xl lg:mt-8 lg:text-7xl"
          >
            Coupe.
            <br />
            Barbe.
            <br />
            Caractère.
          </motion.h1>
          <motion.div {...fadeUp(0.4)} className="relative -mx-5 mt-6 h-[44vh] lg:hidden">
            <img
              src={images.hero}
              alt="Travail aux ciseaux au salon Burtin Barber"
              className="h-full w-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-ink" />
          </motion.div>
          <motion.p
            {...fadeUp(0.45)}
            className="relative -mt-14 max-w-md text-[15px] leading-relaxed text-cream/80 md:text-base lg:mt-7 lg:text-mist"
          >
            Une coupe pensée pour ton visage, pas pour la tendance. Le
            barbershop de Rudy Burtin, au cœur de Lausanne.
          </motion.p>
          <motion.div {...fadeUp(0.6)} className="mt-8 flex flex-wrap items-center gap-5 lg:mt-10">
            <a href="#reserver" className="btn-line">
              Réserver un créneau
            </a>
            <a
              href="#travail"
              className="text-[11px] font-medium uppercase tracking-[0.25em] text-cream/70 underline decoration-gold/60 underline-offset-8 transition-colors hover:text-cream"
            >
              Voir le travail
            </a>
          </motion.div>
          <motion.div
            {...fadeUp(0.75)}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs tracking-wide text-mist"
          >
            <a
              href={site.planityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-cream"
              title="Voir les avis sur Planity"
            >
              <span className="text-gold">★</span> {site.rating}/5 · {site.reviews} avis
            </a>
            <span>Ouvert dès 7h40</span>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-cream"
              title="Ouvrir dans Maps"
            >
              Av. de Tivoli 6
            </a>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
