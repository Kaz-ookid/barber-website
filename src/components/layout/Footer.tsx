import { site } from "../../data/site";

const socials = [
  { label: "Instagram", href: site.instagram },
  { label: "TikTok", href: site.tiktok },
  { label: "YouTube", href: site.youtube },
];

export function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-ink">
      <div className="container-x flex flex-col items-center gap-6 py-10 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-display text-base font-semibold uppercase tracking-[0.18em]">
            Burtin Barber
          </p>
          <p className="mt-1.5 text-xs tracking-wide text-mist">
            {site.address} ·{" "}
            <a href={site.phoneHref} className="transition-colors hover:text-cream">
              {site.phone}
            </a>
          </p>
        </div>
        <div className="flex gap-7">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-medium uppercase tracking-[0.22em] text-mist transition-colors hover:text-gold"
            >
              {social.label}
            </a>
          ))}
        </div>
        <p className="text-xs tracking-wide text-mist">
          © {new Date().getFullYear()} {site.name} · {site.city}
        </p>
      </div>
    </footer>
  );
}
