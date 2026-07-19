import { Reveal, RevealSection } from "../components/ui/Reveal";
import { site } from "../data/site";

export function Booking() {
  return (
    <RevealSection id="reserver" className="border-y border-gold/40 bg-ink py-20 md:py-24">
      <div className="container-x text-center">
        <Reveal>
          <p className="kicker">Réservation</p>
          <span className="rule-gold mx-auto mt-3" />
          <h2 className="font-display mx-auto mt-7 max-w-2xl text-4xl font-medium uppercase leading-tight tracking-[0.05em] md:text-5xl">
            Réserve ton créneau.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-mist">
            Disponibilités en temps réel, confirmation immédiate par SMS.
            Créneaux dès 7h40, toutes les 40 minutes.
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-col items-center gap-5">
            <a
              href={site.planityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-line !px-12"
            >
              Réserver sur Planity
            </a>
            <p className="text-xs tracking-wide text-mist">
              ou par téléphone :{" "}
              <a href={site.phoneHref} className="text-gold transition-opacity hover:opacity-75">
                {site.phone}
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </RevealSection>
  );
}
