import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { Aurora } from "./components/ui/Aurora";
import { Marquee } from "./components/ui/Marquee";
import { useLenis } from "./hooks/useLenis";
import { Booking } from "./sections/Booking";
import { Contact } from "./sections/Contact";
import { Gallery } from "./sections/Gallery";
import { Hero } from "./sections/Hero";
import { SalonIntro } from "./sections/SalonIntro";
import { Services } from "./sections/Services";
import { Shop } from "./sections/Shop";
import { Social } from "./sections/Social";
import { Team } from "./sections/Team";
import { marqueeWords } from "./data/site";

export default function App() {
  useLenis();

  return (
    <>
      <Aurora />
      <Navbar />
      <main>
        <Hero />
        <div className="border-y border-cream/8 py-4">
          <Marquee duration={45}>
            {marqueeWords.map((word) => (
              <span key={word} className="mx-8 flex items-center gap-16 text-sm font-semibold uppercase tracking-[0.2em] text-mist">
                {word} <span className="text-gold">·</span>
              </span>
            ))}
          </Marquee>
        </div>
        <SalonIntro />
        <Services />
        <Booking />
        <Team />
        <Gallery />
        <Social />
        <Shop />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
