import { site } from "../../data/site";

const socials = [
  { label: "Instagram", href: site.instagram },
  { label: "TikTok", href: site.tiktok },
  { label: "YouTube", href: site.youtube },
];

export function Footer() {
  return (
    <footer className="border-t border-cream/8">
      <div className="container-x flex flex-col items-center gap-8 py-12 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div>
          <p className="font-display text-lg font-semibold">
            Burtin <span className="italic text-gold">Barber</span>
          </p>
          <p className="mt-2 text-sm text-mist">
            {site.address} ·{" "}
            <a href={site.phoneHref} className="transition-colors hover:text-cream">
              {site.phone}
            </a>
          </p>
        </div>
        <div className="flex gap-6">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-mist transition-colors hover:text-gold"
            >
              {social.label}
            </a>
          ))}
        </div>
        <p className="text-sm text-mist">
          © {new Date().getFullYear()} {site.name} · {site.city}
        </p>
      </div>
    </footer>
  );
}
