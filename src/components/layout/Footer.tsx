import { site } from "../../data/site";

export function Footer() {
  return (
    <footer className="border-t border-bone/10 px-5 pb-10 pt-16 md:px-10">
      <p className="font-display text-[12.5vw] leading-none uppercase text-bone/10 select-none" aria-hidden>
        Burtin Barber
      </p>
      <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-smoke">
          <p>{site.address}</p>
          <a href={site.phoneHref} className="mt-2 block transition-colors hover:text-bone">
            {site.phone}
          </a>
        </div>
        <div className="flex gap-6 font-mono text-xs uppercase tracking-[0.2em]">
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-smoke transition-colors hover:text-blade"
          >
            Instagram
          </a>
          <a
            href={site.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="text-smoke transition-colors hover:text-blade"
          >
            TikTok
          </a>
          <a
            href={site.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-smoke transition-colors hover:text-blade"
          >
            YouTube
          </a>
        </div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-smoke">
          © {new Date().getFullYear()} {site.name} · {site.city}
        </p>
      </div>
    </footer>
  );
}
