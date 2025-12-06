// app/page.js
import Hero from "./_components/Hero";
import Manifesto from "./_components/Manisfesto";
import Network from "./_components/Networks";
import Projects from "./_components/Projects";
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