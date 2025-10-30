import Header from './(components)/header';
import Hero from './(components)/hero';
import Skills from './(components)/skills';
import Projects from './(components)/projects';
import Footer from './(components)/footer';
import Formations from './(components)/formations';
import Contact from './(components)/contact';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Formations />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
