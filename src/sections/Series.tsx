import { Marquee } from "../components/ui/Marquee";
import { Reveal } from "../components/ui/Reveal";
import { site } from "../data/site";

const crop = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=500&h=889&q=80&auto=format&fit=crop`;

const videos = [
  { id: "1599351431202-1e0f0137899a", day: "Jour 44", platform: "TikTok", href: "https://www.tiktok.com/@burtinbarber", rotate: "-rotate-3" },
  { id: "1622286342621-4bd786c2447c", day: "Jour 45", platform: "Instagram", href: "https://www.instagram.com/burtinbarber/", rotate: "rotate-2 md:translate-y-8" },
  { id: "1493256338651-d82f7acb2b38", day: "Jour 46", platform: "YouTube", href: "https://www.youtube.com/@Burtinbarber", rotate: "-rotate-2" },
];

const socials = [
  { label: "Instagram", href: site.instagram },
  { label: "TikTok", href: site.tiktok },
  { label: "YouTube", href: site.youtube },
];

export function Series() {
  return (
    <section id="serie" className="overflow-hidden bg-bone py-24 text-ink md:py-36">
      <div className="px-5 md:px-10">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-blade">04 · La série</p>
          <h2 className="font-display mt-4 text-[13vw] uppercase leading-[0.95] sm:text-6xl md:text-8xl">
            1 coupe. 1 vidéo.
            <br />
            <span className="font-serif italic normal-case text-blade">Chaque jour.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
            « Jour 46 pour trouver la coupe qui te plaît. » Rudy documente son
            travail en vidéo, tous les jours. Des transformations réelles, des
            clients réels, zéro filtre.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 flex justify-center gap-6 px-5 md:gap-10">
        {videos.map((video, i) => (
          <Reveal key={video.day} delay={i * 0.12}>
            <a
              href={video.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block w-40 shrink-0 sm:w-52 md:w-64 ${video.rotate} transition-transform duration-300 hover:rotate-0 hover:scale-105`}
            >
              <div className="relative overflow-hidden rounded-3xl border-4 border-ink bg-ink shadow-2xl">
                <img
                  src={crop(video.id)}
                  alt={`${video.day} de la série vidéo, sur ${video.platform}`}
                  loading="lazy"
                  className="aspect-[9/16] w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
                />
                <span className="absolute left-3 top-3 rounded-full bg-blade px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-ink">
                  {video.day}
                </span>
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-bone/90 pl-1 text-xl text-ink transition-transform group-hover:scale-110">
                    ▶
                  </span>
                </span>
                <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.2em] text-bone">
                  {video.platform}
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <div className="mt-20 border-y border-ink/10 py-4">
        <Marquee duration={22}>
          {socials.map((social) => (
            <span key={social.label} className="mx-8 font-display text-2xl uppercase text-ink/80">
              {site.handle} <span className="mx-6 text-blade">·</span> {social.label}
            </span>
          ))}
        </Marquee>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-4 px-5">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-ink px-8 py-3 font-mono text-xs uppercase tracking-[0.25em] transition-colors hover:bg-ink hover:text-bone"
          >
            {social.label}
          </a>
        ))}
      </div>
    </section>
  );
}
