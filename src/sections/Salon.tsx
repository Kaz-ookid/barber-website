import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { hours, images, site } from "../data/site";

export function Salon() {
  return (
    <section id="salon" className="px-5 py-24 md:px-10 md:py-36">
      <SectionHeading index="05" kicker="Le salon" title="Tivoli" accent="six" />

      <div className="grid gap-12 md:grid-cols-2 md:gap-20">
        <Reveal className="relative aspect-[4/3] overflow-hidden">
          <img
            src={images.shopInterior}
            alt="Fauteuils et miroirs du salon"
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 rounded-full bg-bone px-5 py-2.5 font-mono text-xs uppercase tracking-[0.2em] text-ink transition-transform hover:scale-105"
          >
            Itinéraire →
          </a>
        </Reveal>

        <div>
          <Reveal>
            <address className="font-display text-3xl uppercase not-italic leading-tight text-bone md:text-5xl">
              Av. de Tivoli 6<br />
              <span className="text-smoke">1007 Lausanne</span>
            </address>
            <a
              href={site.phoneHref}
              className="mt-4 inline-block font-mono text-sm tracking-[0.15em] text-blade transition-opacity hover:opacity-70"
            >
              {site.phone}
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <table className="mt-10 w-full border-t border-bone/10">
              <caption className="sr-only">Horaires d'ouverture</caption>
              <tbody>
                {hours.map((row) => (
                  <tr key={row.day} className="border-b border-bone/10">
                    <th
                      scope="row"
                      className="py-3 text-left font-mono text-xs uppercase tracking-[0.2em] text-smoke"
                    >
                      {row.day}
                    </th>
                    <td
                      className={`py-3 text-right font-mono text-xs uppercase tracking-[0.2em] ${
                        row.closed ? "text-blade" : "text-bone"
                      }`}
                    >
                      {row.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-8 font-serif text-xl italic text-smoke">
              Ouvert dès 7h : passe avant le boulot, repars impeccable.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
