import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { hours, images, site } from "../data/site";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          kicker="Contact"
          title="Passe nous"
          accent="voir."
          lead="À deux pas de la gare de Lausanne. Sans rendez-vous pour les produits, sur réservation pour le fauteuil."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal className="card group relative min-h-[16rem] overflow-hidden lg:col-span-1">
            <img
              src={images.chair}
              alt="Fauteuil du salon"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night/85 via-night/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="font-display text-lg font-medium">{site.address}</p>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-semibold text-gold transition-opacity hover:opacity-75"
              >
                Itinéraire →
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="card px-6 py-6">
            <h3 className="text-xs font-bold uppercase tracking-wide text-gold">Horaires</h3>
            <table className="mt-4 w-full">
              <caption className="sr-only">Horaires d'ouverture</caption>
              <tbody>
                {hours.map((row) => (
                  <tr key={row.day} className="border-b border-cream/6 last:border-0">
                    <th scope="row" className="py-2.5 text-left text-sm font-medium text-mist">
                      {row.day}
                    </th>
                    <td
                      className={`py-2.5 text-right text-sm font-semibold tabular-nums ${
                        row.closed ? "text-gold" : "text-cream"
                      }`}
                    >
                      {row.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          <Reveal delay={0.16} className="card flex flex-col px-6 py-6">
            <h3 className="text-xs font-bold uppercase tracking-wide text-gold">Nous joindre</h3>
            <a
              href={site.phoneHref}
              className="font-display mt-4 text-2xl font-medium transition-colors hover:text-gold"
            >
              {site.phone}
            </a>
            <p className="mt-2 text-sm text-mist">Appels et messages, du lundi au samedi.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost !px-5 !py-2.5 text-sm"
              >
                Instagram
              </a>
              <a
                href={site.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost !px-5 !py-2.5 text-sm"
              >
                TikTok
              </a>
            </div>
            <a
              href={site.planityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-auto pt-3.5"
            >
              Réserver un créneau
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
