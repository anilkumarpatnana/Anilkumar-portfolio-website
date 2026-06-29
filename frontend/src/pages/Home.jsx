import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import TechMarquee from "../components/TechMarquee";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div data-testid="home-page" className="relative min-h-screen bg-[#0A0E17] text-[#F8FAFC]">
      <Navigation />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
