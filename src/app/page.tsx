import Header from './(components)/header';
import Hero from './(components)/hero';
import Skills from './(components)/skills';
import Projects from './(components)/projects';
import Footer from './(components)/footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <section id="contact" className="container py-16">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Contact</h2>
          <p className="mt-4 text-muted-foreground dark:text-gray-300">
            Disponible pour un stage ou projets freelance.
          </p>
          <div className="mt-6">
            <a
              href="mailto:guillaume@example.com"
              className="btn bg-[rgb(var(--brand))] text-white hover:bg-[color-mix(in srgb, rgb(var(--brand)) 80%, black)]"
            >
              guigui.delferiere@gmail.com
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
