import Hero from "@/components/sections/Hero";
import Ships from "@/components/sections/Ships";
import Ctf from "@/components/sections/Ctf";
import Achievements from "@/components/sections/Achievements";
import Footer from "@/components/sections/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import MotionSection from "@/components/MotionSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <ThemeToggle />
      <Hero />
      <MotionSection>
        <Ships />
      </MotionSection>
      <MotionSection>
        <Ctf />
      </MotionSection>
      <MotionSection>
        <Achievements />
      </MotionSection>
      <MotionSection>
        <Footer />
      </MotionSection>
    </main>
  );
}