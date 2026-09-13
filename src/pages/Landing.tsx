import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { Education } from "@/components/portfolio/Education";
import { Footer } from "@/components/portfolio/Footer";
import { GitHubSection } from "@/components/portfolio/GitHubSection";
import { Hero } from "@/components/portfolio/Hero";
import { Navbar } from "@/components/portfolio/Navbar";
import { LineSidebar } from "@/components/portfolio/LineSidebar";
import { LightRays } from "@/components/portfolio/LightRays";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";

export default function Landing() {
  return (
    <div className="scene-vignette film-grain relative min-h-screen overflow-x-clip">
      <LightRays />
      <Navbar />
      <LineSidebar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
