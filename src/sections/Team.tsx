import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { site, team } from "../data/site";

export function Team() {
  const rudy = team.find((member) => member.featured)!;
  const others = team.filter((member) => !member.featured);

  return (
    <section id="equipe" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          kicker="L'équipe"
          title="Le barbershop,"
          accent="et ses barbiers."
          lead="Fondé et tenu par Rudy Burtin. Les autres fauteuils sont occupés par des barbiers résidents, installés au salon sur la durée, chacun avec sa clientèle et son style."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="card group overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={rudy.image}
                  alt={`${rudy.name} en plein travail`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-night">
                  Fondateur
                </span>
              </div>
              <div className="px-6 py-6">
                <h3 className="font-display text-2xl font-medium">{rudy.name}</h3>
                <p className="mt-1 text-sm font-semibold text-gold">{rudy.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-mist">{rudy.bio}</p>
                <div className="mt-5 flex gap-5 text-sm font-semibold">
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/80 transition-colors hover:text-gold"
                  >
                    Instagram
                  </a>
                  <a
                    href={site.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/80 transition-colors hover:text-gold"
                  >
                    TikTok
                  </a>
                  <a
                    href={site.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/80 transition-colors hover:text-gold"
                  >
                    YouTube
                  </a>
                </div>
              </div>
            </article>
          </Reveal>

          <div className="flex flex-col gap-6">
            {others.map((member, i) => (
              <Reveal key={member.name} delay={0.1 + i * 0.08}>
                <article className="card flex h-full flex-col border-dashed px-6 py-6">
                  <h3 className="font-display text-xl font-medium text-cream/90">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-gold">{member.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{member.bio}</p>
                  {member.role === "Chaise à louer" && (
                    <a href={site.chairRentalMail} className="btn-ghost mt-5 self-start !px-5 !py-2.5 text-sm">
                      Proposer sa candidature
                    </a>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
