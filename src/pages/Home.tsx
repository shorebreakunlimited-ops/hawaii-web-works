import Nav from '@/sections/Nav';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Services from '@/sections/Services';
import Portfolio from '@/sections/Portfolio';
import Book from '@/sections/Book';
import Consult from '@/sections/Consult';
import Education from '@/sections/Education';
import Reviews from '@/sections/Reviews';
import Faq from '@/sections/Faq';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';
import { DEMO_MODE } from '@/config/salon';

export default function Home() {
  return (
    <>
      {DEMO_MODE && (
        <div className="sticky top-0 z-[60] bg-ink px-4 py-2 text-center text-[12px] font-medium tracking-wide text-champagne">
          Template preview — placeholder content, not a real business. Built by Hawaii Web
          Works.
        </div>
      )}
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Book />
        <Consult />
        <Education />
        <Reviews />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
