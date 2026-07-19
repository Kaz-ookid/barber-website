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
    <a href="#" className="block leading-none">
      <span className="font-display block text-lg font-semibold uppercase tracking-[0.18em]">
        Burtin Barber
      </span>
      <span className="mt-1 block text-[8px] font-medium uppercase tracking-[0.45em] text-gold">
        Barbershop · Lausanne
      </span>
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
        className={`absolute h-px w-6 bg-cream transition-transform duration-300 ${
          open ? "rotate-45" : "-translate-y-[4px]"
        }`}
      />
      <span
        className={`absolute h-px w-6 bg-cream transition-transform duration-300 ${
          open ? "-rotate-45" : "translate-y-[4px]"
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
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
          scrolled ? "border-cream/10 bg-ink/95" : "border-transparent bg-transparent"
        }`}
      >
        <nav className="container-x flex items-center justify-between py-4">
          <Logo />
          <ul className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  className={`text-[11px] font-medium uppercase tracking-[0.22em] transition-colors duration-300 hover:text-cream ${
                    active === link.href ? "text-gold" : "text-cream/65"
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
            <a href="#reserver" className="btn-line hidden !px-6 !py-2.5 lg:inline-flex">
              Réserver
            </a>
            <BurgerButton open={open} onClick={() => setOpen(!open)} />
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex h-[100dvh] flex-col overflow-y-auto overscroll-contain bg-ink"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="container-x flex items-center justify-between py-4">
              <Logo />
              <BurgerButton open onClick={() => setOpen(false)} />
            </div>
            <ul className="container-x mt-10 flex flex-col">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.05 }}
                  className="border-b border-cream/8"
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`font-display block py-4 text-3xl font-medium uppercase tracking-[0.08em] ${
                      active === link.href ? "text-gold" : ""
                    }`}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="container-x mt-auto pb-8">
              <a
                href="#reserver"
                onClick={() => setOpen(false)}
                className="btn-line w-full"
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
