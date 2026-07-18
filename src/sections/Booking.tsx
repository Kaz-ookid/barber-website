import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { booking, services, site, team } from "../data/site";

interface DayOption {
  date: Date;
  key: string;
  label: string;
}

const dayFormat = new Intl.DateTimeFormat("fr-CH", {
  weekday: "short",
  day: "numeric",
  month: "short",
});

const fullFormat = new Intl.DateTimeFormat("fr-CH", {
  weekday: "long",
  day: "numeric",
  month: "long",
});

function upcomingDays(): DayOption[] {
  const days: DayOption[] = [];
  const cursor = new Date();
  cursor.setDate(cursor.getDate() + 1);
  while (days.length < booking.daysAhead) {
    if (cursor.getDay() !== 0) {
      days.push({
        date: new Date(cursor),
        key: cursor.toISOString().slice(0, 10),
        label: dayFormat.format(cursor),
      });
    }
    cursor.setDate(cursor.getDate() + 1);
  }
  return days;
}

function slotsFor(day: DayOption): { time: string; taken: boolean }[] {
  const start = day.date.getDay() === 1 ? booking.slotStartMonday : booking.slotStart;
  const slots: { time: string; taken: boolean }[] = [];
  const seed = day.date.getDate() + day.date.getMonth() * 31;
  for (let m = start, i = 0; m <= booking.slotEnd; m += booking.slotStep, i++) {
    const h = Math.floor(m / 60);
    const min = String(m % 60).padStart(2, "0");
    slots.push({ time: `${h}:${min}`, taken: (i * 7 + seed * 13) % 3 === 0 });
  }
  return slots;
}

const barbers = ["Premier disponible", ...team.filter((m) => m.featured).map((m) => m.name)];

const steps = ["Prestation", "Barbier", "Créneau", "Coordonnées"];

export function Booking() {
  const days = useMemo(upcomingDays, []);
  const [step, setStep] = useState(0);
  const [service, setService] = useState<string | null>(null);
  const [barber, setBarber] = useState<string>(barbers[1] ?? barbers[0]);
  const [day, setDay] = useState<DayOption | null>(null);
  const [slot, setSlot] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [done, setDone] = useState(false);

  const chosenService = services.find((s) => s.name === service);
  const canNext =
    (step === 0 && service) ||
    (step === 1 && barber) ||
    (step === 2 && day && slot) ||
    (step === 3 && name.trim().length > 1 && phone.trim().length > 6);

  const reset = () => {
    setStep(0);
    setService(null);
    setDay(null);
    setSlot(null);
    setName("");
    setPhone("");
    setDone(false);
  };

  return (
    <section id="reserver" className="relative py-24 md:py-32">
      <div className="glow right-[15%] top-[5%] h-[26rem] w-[26rem] bg-gold/10" />
      <div className="container-x">
        <SectionHeading
          center
          kicker="Réservation"
          title="Réserve ton"
          accent="créneau."
          lead="Créneaux de 7h40 à 18h20, toutes les 40 minutes. Confirmation immédiate."
        />

        <Reveal>
          <div className="card mx-auto max-w-3xl overflow-hidden">
            {done ? (
              <div className="px-6 py-14 text-center md:px-12">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold text-2xl text-night">
                  ✓
                </span>
                <h3 className="font-display mt-6 text-2xl font-medium">
                  Demande envoyée, {name.split(" ")[0]}.
                </h3>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-mist">
                  {chosenService?.name} · {barber} · {day && fullFormat.format(day.date)} à{" "}
                  {slot}. Tu recevras une confirmation par SMS.
                </p>
                <p className="mx-auto mt-4 max-w-md rounded-xl bg-cream/5 px-4 py-3 text-xs text-mist">
                  Site de démonstration : aucune réservation réelle n'a été créée.
                </p>
                <button onClick={reset} className="btn-ghost mt-8">
                  Nouvelle réservation
                </button>
              </div>
            ) : (
              <>
                <div className="flex border-b border-cream/8">
                  {steps.map((label, i) => (
                    <button
                      key={label}
                      onClick={() => i < step && setStep(i)}
                      className={`flex-1 px-2 py-4 text-center text-[11px] font-bold uppercase tracking-wide transition-colors sm:text-xs ${
                        i === step
                          ? "border-b-2 border-gold text-gold"
                          : i < step
                            ? "text-cream/70 hover:text-cream"
                            : "text-mist/50"
                      }`}
                    >
                      {i + 1}. {label}
                    </button>
                  ))}
                </div>

                <div className="min-h-[22rem] px-5 py-6 md:px-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -24 }}
                      transition={{ duration: 0.25 }}
                    >
                      {step === 0 && (
                        <div className="grid gap-3 sm:grid-cols-2">
                          {services.map((s) => (
                            <button
                              key={s.name}
                              onClick={() => setService(s.name)}
                              className={`rounded-2xl border px-5 py-4 text-left transition-colors ${
                                service === s.name
                                  ? "border-gold bg-gold/10"
                                  : "border-cream/10 hover:border-cream/30"
                              }`}
                            >
                              <p className="text-sm font-semibold">{s.name}</p>
                              <p className="mt-1 text-xs text-mist">
                                {s.duration} · {s.price}
                              </p>
                            </button>
                          ))}
                        </div>
                      )}

                      {step === 1 && (
                        <div className="grid gap-3 sm:grid-cols-2">
                          {barbers.map((b) => (
                            <button
                              key={b}
                              onClick={() => setBarber(b)}
                              className={`rounded-2xl border px-5 py-5 text-left transition-colors ${
                                barber === b
                                  ? "border-gold bg-gold/10"
                                  : "border-cream/10 hover:border-cream/30"
                              }`}
                            >
                              <p className="text-sm font-semibold">{b}</p>
                              <p className="mt-1 text-xs text-mist">
                                {b === "Premier disponible"
                                  ? "Le premier fauteuil libre"
                                  : "Fondateur du salon"}
                              </p>
                            </button>
                          ))}
                        </div>
                      )}

                      {step === 2 && (
                        <div>
                          <div className="flex gap-2 overflow-x-auto pb-3">
                            {days.map((d) => (
                              <button
                                key={d.key}
                                onClick={() => {
                                  setDay(d);
                                  setSlot(null);
                                }}
                                className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold capitalize transition-colors ${
                                  day?.key === d.key
                                    ? "border-gold bg-gold text-night"
                                    : "border-cream/15 text-cream/80 hover:border-cream/40"
                                }`}
                              >
                                {d.label}
                              </button>
                            ))}
                          </div>
                          {day ? (
                            <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-5">
                              {slotsFor(day).map((s) => (
                                <button
                                  key={s.time}
                                  disabled={s.taken}
                                  onClick={() => setSlot(s.time)}
                                  className={`rounded-xl border px-2 py-2.5 text-sm font-semibold tabular-nums transition-colors ${
                                    slot === s.time
                                      ? "border-gold bg-gold text-night"
                                      : s.taken
                                        ? "cursor-not-allowed border-cream/5 text-mist/30 line-through"
                                        : "border-cream/12 hover:border-gold/60"
                                  }`}
                                >
                                  {s.time}
                                </button>
                              ))}
                            </div>
                          ) : (
                            <p className="mt-6 text-sm text-mist">
                              Choisis d'abord un jour pour voir les créneaux.
                            </p>
                          )}
                        </div>
                      )}

                      {step === 3 && (
                        <div className="mx-auto max-w-md">
                          <label className="block text-xs font-bold uppercase tracking-wide text-mist">
                            Nom et prénom
                            <input
                              type="text"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="Jean Dupont"
                              className="mt-2 w-full rounded-xl border border-cream/12 bg-transparent px-4 py-3 text-sm font-medium text-cream placeholder:text-mist/40 focus:border-gold focus:outline-none"
                            />
                          </label>
                          <label className="mt-5 block text-xs font-bold uppercase tracking-wide text-mist">
                            Téléphone
                            <input
                              type="tel"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="+41 79 000 00 00"
                              className="mt-2 w-full rounded-xl border border-cream/12 bg-transparent px-4 py-3 text-sm font-medium text-cream placeholder:text-mist/40 focus:border-gold focus:outline-none"
                            />
                          </label>
                          <div className="mt-6 rounded-xl bg-cream/5 px-4 py-3 text-sm text-mist">
                            {chosenService?.name} · {barber}
                            <br />
                            {day && fullFormat.format(day.date)} à {slot} ·{" "}
                            <span className="text-gold">{chosenService?.price}</span>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="flex items-center justify-between border-t border-cream/8 px-5 py-4 md:px-8">
                  <button
                    onClick={() => setStep((s) => Math.max(0, s - 1))}
                    className={`text-sm font-semibold text-mist transition-colors hover:text-cream ${
                      step === 0 ? "invisible" : ""
                    }`}
                  >
                    ← Retour
                  </button>
                  <button
                    onClick={() => (step === 3 ? setDone(true) : setStep((s) => s + 1))}
                    disabled={!canNext}
                    className="btn-gold !px-8 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {step === 3 ? "Confirmer" : "Continuer"}
                  </button>
                </div>
              </>
            )}
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
