import Hero from "@/components/sections/Hero";
import Ships from "@/components/sections/Ships";
import Ctf from "@/components/sections/Ctf";
import Achievements from "@/components/sections/Achievements";
import Footer from "@/components/sections/Footer";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="flex flex-col">
      <ThemeToggle />
      <Hero />
      <Ships />
      <Ctf />
      <Achievements />
      <Footer />
    </main>
  );
}