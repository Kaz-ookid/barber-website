import { Cursor } from "./components/ui/Cursor";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { useLenis } from "./hooks/useLenis";
import { About } from "./sections/About";
import { BookingCta } from "./sections/BookingCta";
import { Hero } from "./sections/Hero";
import { Portfolio } from "./sections/Portfolio";
import { Salon } from "./sections/Salon";
import { Series } from "./sections/Series";
import { Services } from "./sections/Services";

export default function App() {
  useLenis();

  return (
    <div className="grain">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Series />
        <Salon />
        <BookingCta />
      </main>
      <Footer />
    </div>
  );
}
