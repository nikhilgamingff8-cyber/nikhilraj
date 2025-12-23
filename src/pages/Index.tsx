import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import AnimatedStats from "@/components/AnimatedStats";
import Education from "@/components/Education";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Learning from "@/components/Learning";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <AnimatedStats />
      <Education />
      <Services />
      <Projects />
      <Learning />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
