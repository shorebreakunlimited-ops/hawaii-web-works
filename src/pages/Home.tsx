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

export default function Home() {
  return (
    <>
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
