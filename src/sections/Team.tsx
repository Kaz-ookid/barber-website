import { Reveal, RevealSection } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { site, team } from "../data/site";

const socials = [
  { label: "Instagram", href: site.instagram },
  { label: "TikTok", href: site.tiktok },
  { label: "YouTube", href: site.youtube },
];

export function Team() {
  const rudy = team.find((member) => member.featured)!;
  const others = team.filter((member) => !member.featured);

  return (
    <RevealSection id="equipe" className="bg-ink py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          kicker="L'équipe"
          title="Le barbershop,"
          accent="et ses barbiers."
          lead="Fondé et tenu par Rudy Burtin. Les autres fauteuils sont occupés par des barbiers résidents, installés au salon sur la durée, chacun avec sa clientèle et son style."
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <article>
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={rudy.image}
                  alt={`${rudy.name} en plein travail`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-0 top-4 bg-ink px-4 py-1.5 text-[9px] font-medium uppercase tracking-[0.3em] text-gold">
                  Fondateur
                </span>
              </div>
              <div className="border-b border-cream/12 py-6">
                <h3 className="font-display text-3xl font-medium uppercase tracking-[0.03em]">
                  {rudy.name}
                </h3>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.25em] text-gold">
                  {rudy.role}
                </p>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-mist">{rudy.bio}</p>
                <div className="mt-5 flex gap-6">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-medium uppercase tracking-[0.22em] text-cream/70 transition-colors hover:text-gold"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>

          <div className="flex flex-col justify-center gap-8">
            {others.map((member, i) => (
              <Reveal key={member.name} delay={0.1 + i * 0.08}>
                <article className="border border-cream/15 px-7 py-7">
                  <h3 className="font-display text-2xl font-medium uppercase tracking-[0.03em] text-cream/90">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.25em] text-gold">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{member.bio}</p>
                  {member.role === "Chaise à louer" && (
                    <a href={site.chairRentalMail} className="btn-line mt-6 !px-6 !py-3">
                      Proposer sa candidature
                    </a>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
