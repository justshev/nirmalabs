import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Clients from "@/components/Clients";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <Hero />
      <Highlights />
      <Services />
      <Projects />
      <Clients />
      <Team />

      <Footer />
    </main>
  );
}
