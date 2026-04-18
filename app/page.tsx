import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Clients from "@/components/Clients";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import { Agentation } from "agentation";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Agentation />
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
