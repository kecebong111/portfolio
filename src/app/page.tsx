import Hero from "@/components/sections/Hero";
import Ships from "@/components/sections/Ships";
import Ctf from "@/components/sections/Ctf";
import Achievements from "@/components/sections/Achievements";
import Footer from "@/components/sections/Footer";
import TechTicker from "@/components/effects/TechTicker";

export default function Home() {
  return (
    <main className="flex flex-col relative">
      <Hero />
      <TechTicker />
      <div className="dot-grid">
        <Ships />
        <Ctf />
        <Achievements />
      </div>
      <Footer />
    </main>
  );
}