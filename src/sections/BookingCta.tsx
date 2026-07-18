import { MagneticButton } from "../components/ui/MagneticButton";
import { Reveal } from "../components/ui/Reveal";
import { site } from "../data/site";

export function BookingCta() {
  return (
    <section className="relative overflow-hidden bg-blade px-5 py-28 text-center text-ink md:py-40">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.35em]">06 · Réservation</p>
        <h2 className="font-display mx-auto mt-6 max-w-5xl text-[14vw] uppercase leading-[0.9] sm:text-7xl md:text-9xl">
          Le fauteuil
          <br />
          <span className="font-serif italic normal-case">t'attend.</span>
        </h2>
      </Reveal>
      <Reveal delay={0.15}>
        <div className="mt-12 flex flex-col items-center gap-6">
          <MagneticButton
            href={site.planityUrl}
            external
            className="rounded-full bg-ink px-12 py-6 font-mono text-sm uppercase tracking-[0.25em] text-bone hover:bg-coal"
          >
            Réserver sur Planity →
          </MagneticButton>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/70">
            ou par téléphone :{" "}
            <a href={site.phoneHref} className="underline underline-offset-4 hover:opacity-70">
              {site.phone}
            </a>
          </p>
        </div>
      </Reveal>
    </section>
  );
}
