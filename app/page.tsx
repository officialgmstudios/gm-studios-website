// app/page.js
import Navbar from "@/components/Navbar";
import Hero from "../components/LandingPage/Hero";
import Manifesto from "../components/Manifesto/Manisfesto";
// import Network from "../components/LandingPage/Networks";
// import Projects from "../components/LandingPage/Projects";
export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Manifesto />
      {/* <Network /> */}
      {/* <Projects /> */}
    </main>
  );
}