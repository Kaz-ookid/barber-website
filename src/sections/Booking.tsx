import { Reveal, RevealSection } from "../components/ui/Reveal";
import { site } from "../data/site";

export function Booking() {
  return (
    <RevealSection id="reserver" className="relative py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <div className="card relative mx-auto max-w-4xl overflow-hidden bg-gradient-to-b from-gold/8 via-transparent to-transparent px-6 py-14 text-center md:px-16 md:py-20">
            <p className="eyebrow relative">Réservation</p>
            <h2 className="font-display relative mt-4 text-4xl font-medium leading-tight tracking-tight md:text-5xl">
              Réserve ton <span className="shine-text italic">créneau.</span>
            </h2>
            <p className="relative mx-auto mt-4 max-w-lg text-base leading-relaxed text-mist md:text-lg">
              Disponibilités en temps réel, confirmation immédiate par SMS.
              Créneaux dès 7h40, toutes les 40 minutes.
            </p>
            <div className="relative mt-9">
              <a
                href={site.planityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold !px-10 !py-4 text-base"
              >
                Réserver sur Planity →
              </a>
            </div>
            <p className="relative mt-5 text-sm text-mist">
              ou par téléphone :{" "}
              <a href={site.phoneHref} className="font-semibold text-gold hover:underline">
                {site.phone}
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </RevealSection>
  );
}
