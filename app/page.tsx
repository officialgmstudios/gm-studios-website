// app/page.js
import Hero from "../components/LandingPage/Hero";
import Manifesto from "../components/Manifesto/Manisfesto";
import Network from "../components/LandingPage/Networks";
import Projects from "../components/LandingPage/Projects";
export default function HomePage() {
  return (
    <main>
      <Hero />
      <Manifesto />
      <Network />
      <Projects />
    </main>
  );
}