import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "~/components/Nav";
import { Hero } from "~/components/Hero";
import { About } from "~/components/About";
import { Skills } from "~/components/Skills";
import { Projects } from "~/components/Projects";
import { Experience } from "~/components/Experience";
import { Contact } from "~/components/Contact";
import { Footer } from "~/components/Footer";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
