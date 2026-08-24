import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Journey from "@/components/Journey";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative flex-1">
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Skills />
      <Journey />
      <Services />
      <Testimonials />
      <Contact />
    </main>
  );
}
