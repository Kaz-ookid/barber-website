import { Reveal } from "../components/ui/Reveal";
import { site } from "../data/site";

const crop = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=440&h=782&q=80&auto=format&fit=crop`;

const videos = [
  {
    id: "1599351431202-1e0f0137899a",
    day: "Jour 44",
    platform: "TikTok",
    href: site.tiktok,
    className: "lg:-rotate-2 lg:translate-y-3",
  },
  {
    id: "1622286342621-4bd786c2447c",
    day: "Jour 45",
    platform: "Instagram",
    href: site.instagram,
    className: "lg:translate-y-0",
  },
  {
    id: "1493256338651-d82f7acb2b38",
    day: "Jour 46",
    platform: "YouTube",
    href: site.youtube,
    className: "lg:rotate-2 lg:translate-y-3",
  },
];

export function Series() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="glow left-[10%] bottom-[0%] h-[26rem] w-[26rem] bg-gold/10" />
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <div>
          <Reveal>
            <p className="eyebrow">La série</p>
            <h2 className="font-display mt-3 text-4xl font-medium leading-tight tracking-tight md:text-5xl">
              1 coupe. 1 vidéo.
              <span className="block italic text-gold">Chaque jour.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-md text-base leading-relaxed text-mist md:text-lg">
              « Jour 46 pour trouver la coupe qui te plaît. » Rudy documente son
              travail en vidéo, tous les jours. Des transformations réelles, des
              clients réels, zéro filtre.
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
            <p className="mt-4 text-sm font-semibold text-gold">{site.handle}</p>
          </Reveal>
        </div>

        <div className="flex justify-center gap-4 md:gap-6">
          {videos.map((video, i) => (
            <Reveal key={video.day} delay={i * 0.1}>
              <a
                href={video.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block w-32 sm:w-40 lg:w-44 ${video.className} transition-transform duration-300 hover:-translate-y-1.5`}
              >
                <div className="relative overflow-hidden rounded-2xl border border-cream/12">
                  <img
                    src={crop(video.id)}
                    alt={`${video.day} de la série vidéo, sur ${video.platform}`}
                    loading="lazy"
                    className="aspect-[9/16] w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
                  />
                  <span className="absolute left-2.5 top-2.5 rounded-full bg-night/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-gold backdrop-blur">
                    {video.day}
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cream/90 pl-0.5 text-sm text-night transition-transform group-hover:scale-110">
                      ▶
                    </span>
                  </span>
                  <span className="absolute bottom-2.5 left-2.5 text-[10px] font-bold uppercase tracking-wide text-cream/80">
                    {video.platform}
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
