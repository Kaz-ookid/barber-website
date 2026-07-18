import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { label: "Le salon", href: "#salon" },
  { label: "Prestations", href: "#prestations" },
  { label: "L'équipe", href: "#equipe" },
  { label: "Le travail", href: "#travail" },
  { label: "Boutique", href: "#boutique" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const mid = window.scrollY + window.innerHeight * 0.4;
      let current = "";
      for (const section of sections) {
        if (section.offsetTop <= mid) current = `#${section.id}`;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <nav
          className={`container-x flex items-center justify-between rounded-full border px-5 py-3 transition-colors duration-300 md:px-8 ${
            scrolled
              ? "border-cream/10 bg-night/80 backdrop-blur-md"
              : "border-transparent bg-transparent"
          }`}
        >
          <a href="#" className="font-display text-lg font-semibold tracking-tight">
            Burtin <span className="italic text-gold">Barber</span>
          </a>
          <ul className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-cream ${
                    active === link.href ? "text-gold" : "text-cream/70"
                  }`}
                >
                  {link.label}
                </a>
                {active === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-1.5 left-0 right-0 h-px bg-gold"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <a href="#reserver" className="btn-gold hidden !px-6 !py-2.5 lg:inline-flex">
              Réserver
            </a>
            <button
              onClick={() => setOpen(true)}
              className="rounded-full border border-cream/20 px-4 py-2 text-sm font-semibold lg:hidden"
              aria-label="Ouvrir le menu"
            >
              Menu
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col bg-night/95 px-6 py-6 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-lg font-semibold">
                Burtin <span className="italic text-gold">Barber</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full border border-cream/20 px-4 py-2 text-sm font-semibold"
                aria-label="Fermer le menu"
              >
                Fermer
              </button>
            </div>
            <ul className="mt-14 flex flex-col gap-1">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display block py-3 text-3xl font-medium tracking-tight"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <a
              href="#reserver"
              onClick={() => setOpen(false)}
              className="btn-gold mt-auto w-full"
            >
              Réserver un créneau
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
