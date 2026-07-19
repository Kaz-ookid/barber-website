import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { Band } from "./components/ui/Band";
import { useLenis } from "./hooks/useLenis";
import { Booking } from "./sections/Booking";
import { Contact } from "./sections/Contact";
import { Gallery } from "./sections/Gallery";
import { Hero } from "./sections/Hero";
import { SalonIntro } from "./sections/SalonIntro";
import { Services } from "./sections/Services";
import { Shop } from "./sections/Shop";
import { Team } from "./sections/Team";

export default function App() {
  useLenis();

  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Band words="Précision. Métier. Caractère." />
        <SalonIntro />
        <Services />
        <Booking />
        <Team />
        <Gallery />
        <Shop />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
