import { motion } from "framer-motion";
import { StoryBubble } from "../components/ui/StoryBubble";
import { images, site } from "../data/site";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-x grid min-h-svh items-center gap-12 pb-16 pt-32 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pt-36">
        <div>
          <motion.p {...fadeUp(0.05)} className="eyebrow">
            Barbershop · Av. de Tivoli 6, {site.city}
          </motion.p>
          <motion.h1
            {...fadeUp(0.15)}
            className="font-display mt-5 text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl xl:text-7xl"
          >
            Burtin <span className="shine-text italic">Barber</span>
            <span className="block text-cream/90">l'art de la coupe.</span>
          </motion.h1>
          <motion.p {...fadeUp(0.3)} className="mt-6 max-w-lg text-lg leading-relaxed text-mist">
            Une coupe pensée pour ton visage, pas pour la tendance. Coupes
            sur-mesure, dégradés précis, barbe sculptée, au cœur de Lausanne.
          </motion.p>
          <motion.div {...fadeUp(0.45)} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={site.planityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Réserver un créneau
            </a>
            <a href="#travail" className="btn-ghost">
              Voir le travail
            </a>
          </motion.div>
          <motion.div {...fadeUp(0.6)} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-mist">
            <a
              href={site.planityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-cream"
              title="Voir les avis sur Planity"
            >
              <span className="text-gold">★★★★★</span>
              {site.rating}/5 · {site.reviews} avis
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

        <div className="relative mx-auto w-[86%] max-w-sm lg:w-full lg:max-w-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="halo-spin absolute -inset-7 rounded-[3rem]"
            aria-hidden
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.35, ease }}
            className="relative"
          >
            <img
              src={images.hero}
              alt="Travail aux ciseaux au salon Burtin Barber"
              className="aspect-[4/5] w-full rounded-[2rem] border border-cream/10 object-cover shadow-[0_0_24px_rgba(207,161,95,0.22)]"
              fetchPriority="high"
            />
            <div className="card absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4 bg-night/70 px-5 py-4 backdrop-blur-md">
              <div>
                <p className="text-sm font-semibold">{site.owner}</p>
                <p className="text-xs text-mist">Fondateur & barbier</p>
              </div>
              <StoryBubble />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
