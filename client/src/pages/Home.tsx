import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-background text-foreground dark:text-foreground transition-colors duration-300">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certificates />
        <Footer />
      </main>
    </div>
  );
}
