import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "../../data/site";

const links = [
  { label: "Le barbier", href: "#barbier" },
  { label: "Prestations", href: "#prestations" },
  { label: "Le travail", href: "#travail" },
  { label: "La série", href: "#serie" },
  { label: "Le salon", href: "#salon" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY && y > 120);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 mix-blend-difference transition-transform duration-500 ease-out ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <nav className="flex items-center justify-between px-5 py-5 md:px-10">
          <a href="#" className="font-display text-xl uppercase tracking-wide text-white">
            Burtin<span className="text-blade">.</span>
          </a>
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-xs uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-60"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <a
              href={site.planityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full border border-white px-5 py-2 font-mono text-xs uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black md:inline-block"
            >
              Réserver
            </a>
            <button
              onClick={() => setOpen(true)}
              className="font-mono text-xs uppercase tracking-[0.2em] text-white md:hidden"
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
            className="fixed inset-0 z-[60] flex flex-col bg-blade px-6 py-6 text-ink"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-xl uppercase">Burtin.</span>
              <button
                onClick={() => setOpen(false)}
                className="font-mono text-xs uppercase tracking-[0.2em]"
                aria-label="Fermer le menu"
              >
                Fermer
              </button>
            </div>
            <ul className="mt-16 flex flex-col gap-2">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.06 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-5xl uppercase leading-tight"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <a
              href={site.planityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto rounded-full border-2 border-ink py-4 text-center font-mono text-sm uppercase tracking-[0.25em]"
            >
              Réserver un créneau
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
