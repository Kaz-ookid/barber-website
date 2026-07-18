import { Reveal } from "../components/ui/Reveal";
import { StoryBubble } from "../components/ui/StoryBubble";
import { site } from "../data/site";

const crop = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=440&h=782&q=80&auto=format&fit=crop`;

const cards = [
  {
    id: "1599351431202-1e0f0137899a",
    platform: "TikTok",
    href: site.tiktok,
    className: "lg:-rotate-2 lg:translate-y-3",
  },
  {
    id: "1622286342621-4bd786c2447c",
    platform: "Instagram",
    href: site.instagram,
    className: "lg:translate-y-0",
  },
  {
    id: "1493256338651-d82f7acb2b38",
    platform: "YouTube",
    href: site.youtube,
    className: "lg:rotate-2 lg:translate-y-3",
  },
];

export function Social() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <div>
          <Reveal>
            <p className="eyebrow">Les réseaux</p>
            <h2 className="font-display mt-3 text-4xl font-medium leading-tight tracking-tight md:text-5xl">
              Le résultat,
              <span className="shine-text block italic">en vidéo.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-md text-base leading-relaxed text-mist md:text-lg">
              Coupes du jour, transformations, avant et après : le travail du
              salon se suit sur les réseaux. Le meilleur moyen de voir si le
              style te parle avant de t'asseoir.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { label: "Instagram", href: site.instagram },
                { label: "TikTok", href: site.tiktok },
                { label: "YouTube", href: site.youtube },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost !px-5 !py-2.5 text-sm"
                >
                  {social.label}
                </a>
              ))}
            </div>
            <div className="mt-6">
              <StoryBubble />
            </div>
          </Reveal>
        </div>

        <div className="flex justify-center gap-4 md:gap-6">
          {cards.map((card, i) => (
            <Reveal key={card.platform} delay={i * 0.1}>
              <a
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block w-32 sm:w-40 lg:w-44 ${card.className} transition-transform duration-300 hover:-translate-y-1.5`}
              >
                <div className="relative overflow-hidden rounded-2xl border border-cream/12">
                  <img
                    src={crop(card.id)}
                    alt={`Aperçu des vidéos du salon sur ${card.platform}`}
                    loading="lazy"
                    className="aspect-[9/16] w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
                  />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cream/90 pl-0.5 text-sm text-night transition-transform group-hover:scale-110">
                      ▶
                    </span>
                  </span>
                  <span className="absolute bottom-2.5 left-2.5 text-[10px] font-bold uppercase tracking-wide text-cream/80">
                    {card.platform}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
