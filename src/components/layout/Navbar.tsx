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

function Logo() {
  return (
    <a href="#" className="font-display text-lg font-semibold tracking-tight">
      Burtin <span className="italic text-gold">Barber</span>
    </a>
  );
}

function BurgerButton({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
      className="relative flex h-10 w-10 items-center justify-center lg:hidden"
    >
      <span
        className={`absolute h-[1.5px] w-5 bg-cream transition-transform duration-300 ${
          open ? "rotate-45" : "-translate-y-[6px]"
        }`}
      />
      <span
        className={`absolute h-[1.5px] w-5 bg-cream transition-opacity duration-200 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute h-[1.5px] w-5 bg-cream transition-transform duration-300 ${
          open ? "-rotate-45" : "translate-y-[6px]"
        }`}
      />
    </button>
  );
}

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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
          <Logo />
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
            <BurgerButton open={open} onClick={() => setOpen(!open)} />
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex h-[100dvh] flex-col overflow-y-auto overscroll-contain bg-night/95 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-4 pt-4">
              <div className="container-x flex items-center justify-between px-5 py-3 md:px-8">
                <Logo />
                <BurgerButton open onClick={() => setOpen(false)} />
              </div>
            </div>
            <ul className="mt-10 flex flex-col gap-1 px-8">
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
                    className={`font-display block py-3 text-3xl font-medium tracking-tight ${
                      active === link.href ? "text-gold" : ""
                    }`}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-auto px-8 pb-8">
              <a
                href="#reserver"
                onClick={() => setOpen(false)}
                className="btn-gold w-full"
              >
                Réserver un créneau
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
