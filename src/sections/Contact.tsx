import { Reveal, RevealSection } from "../components/ui/Reveal";
import { hours, images, site } from "../data/site";

export function Contact() {
  return (
    <RevealSection id="contact" className="bg-ink py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <p className="kicker">Contact</p>
          <span className="rule-gold mt-3" />
        </Reveal>

        <div className="mt-12 grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <Reveal>
              <h2 className="font-display text-3xl font-medium uppercase tracking-[0.1em] md:text-4xl">
                Burtin Barber
              </h2>
              <p className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.4em] text-gold">
                Barbershop · Lausanne
              </p>
              <span className="mt-7 block h-px w-full max-w-xs bg-cream/15" />
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-8 space-y-7 text-sm">
                <div className="flex gap-4">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-gold" />
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-gold">
                      Adresse
                    </p>
                    <a
                      href={site.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1.5 block leading-relaxed text-cream/85 transition-colors hover:text-cream"
                    >
                      Av. de Tivoli 6<br />
                      1007 Lausanne, Suisse
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-gold" />
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-gold">
                      Téléphone
                    </p>
                    <a
                      href={site.phoneHref}
                      className="mt-1.5 block text-cream/85 transition-colors hover:text-cream"
                    >
                      {site.phone}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-gold" />
                  <div className="w-full max-w-xs">
                    <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-gold">
                      Horaires
                    </p>
                    <table className="mt-2 w-full">
                      <caption className="sr-only">Horaires d'ouverture</caption>
                      <tbody>
                        {hours.map((row) => (
                          <tr key={row.day}>
                            <th
                              scope="row"
                              className="py-1 text-left text-sm font-light text-cream/70"
                            >
                              {row.day}
                            </th>
                            <td
                              className={`py-1 text-right text-sm tabular-nums ${
                                row.closed ? "text-gold" : "text-cream/85"
                              }`}
                            >
                              {row.time}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <a href="#reserver" className="btn-line mt-10">
                Réserver un créneau
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="relative min-h-[24rem] overflow-hidden">
            <img
              src={images.interior}
              alt="L'intérieur du salon"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-ink/25" />
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-5 right-5 bg-ink px-6 py-3 text-[10px] font-medium uppercase tracking-[0.28em] text-gold transition-colors hover:text-cream"
            >
              Itinéraire →
            </a>
          </Reveal>
        </div>
      </div>
    </RevealSection>
  );
}
