import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { services, site } from "../data/site";

export function Booking() {
  const [selected, setSelected] = useState<string | null>(null);
  const [confirming, setConfirming] = useState(false);
  const service = services.find((s) => s.name === selected);

  return (
    <section id="reserver" className="relative py-24 md:py-32">
      <div className="glow right-[15%] top-[5%] h-[26rem] w-[26rem] bg-gold/10" />
      <div className="container-x">
        <SectionHeading
          center
          kicker="Réservation"
          title="Réserve ton"
          accent="créneau."
          lead="Choisis ta prestation ici, puis finalise sur Planity : les disponibilités y sont en temps réel. Créneaux dès 7h40, toutes les 40 minutes."
        />

        <Reveal>
          <div className="card mx-auto max-w-3xl overflow-hidden">
            <AnimatePresence mode="wait">
              {!confirming ? (
                <motion.div
                  key="choose"
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="border-b border-cream/8 px-5 py-4 md:px-8">
                    <p className="text-xs font-bold uppercase tracking-wide text-gold">
                      1. Choisis ta prestation
                    </p>
                  </div>
                  <div className="grid gap-3 px-5 py-6 sm:grid-cols-2 md:px-8">
                    {services.map((s) => (
                      <button
                        key={s.name}
                        onClick={() => setSelected(s.name)}
                        className={`rounded-2xl border px-5 py-4 text-left transition-colors ${
                          selected === s.name
                            ? "border-gold bg-gold/10"
                            : "border-cream/10 hover:border-cream/30"
                        }`}
                      >
                        <p className="text-sm font-semibold">
                          {s.name}
                          {s.featured && (
                            <span className="ml-2 rounded-full bg-gold px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-night">
                              Signature
                            </span>
                          )}
                        </p>
                        <p className="mt-1 text-xs text-mist">
                          {s.duration} · {s.price}
                        </p>
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center justify-end border-t border-cream/8 px-5 py-4 md:px-8">
                    <button
                      onClick={() => setConfirming(true)}
                      disabled={!selected}
                      className="btn-gold !px-8 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Continuer
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="handoff"
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 24 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="border-b border-cream/8 px-5 py-4 md:px-8">
                    <p className="text-xs font-bold uppercase tracking-wide text-gold">
                      2. Choisis ton horaire sur Planity
                    </p>
                  </div>
                  <div className="px-5 py-8 text-center md:px-8">
                    <p className="text-sm text-mist">Ta sélection</p>
                    <p className="font-display mt-2 text-2xl font-medium">{service?.name}</p>
                    <p className="mt-1 text-sm text-mist">
                      {service?.duration} · <span className="text-gold">{service?.price}</span>
                    </p>
                    <div className="mx-auto mt-6 max-w-md rounded-xl bg-cream/5 px-4 py-3 text-sm leading-relaxed text-mist">
                      Sur Planity, sélectionne «{" "}
                      <span className="font-semibold text-cream">{service?.name}</span> » : le
                      calendrier te montre les créneaux libres en direct, et tu reçois la
                      confirmation par SMS.
                    </div>
                    <a
                      href={site.planityUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold mt-8 !px-10"
                    >
                      Continuer sur Planity →
                    </a>
                    <p className="mt-4 text-xs text-mist">
                      Ouverture dans un nouvel onglet · gratuit, sans compte obligatoire
                    </p>
                  </div>
                  <div className="flex items-center justify-between border-t border-cream/8 px-5 py-4 md:px-8">
                    <button
                      onClick={() => setConfirming(false)}
                      className="text-sm font-semibold text-mist transition-colors hover:text-cream"
                    >
                      ← Retour
                    </button>
                    <a
                      href={site.phoneHref}
                      className="text-sm font-semibold text-gold transition-opacity hover:opacity-75"
                    >
                      ou réserve par téléphone
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 text-center text-sm text-mist">
            Un imprévu ? Appelle le salon :{" "}
            <a href={site.phoneHref} className="font-semibold text-gold hover:underline">
              {site.phone}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
