"use client";
import dynamic from "next/dynamic";
import { HeroFallback } from "@/components/hero/HeroFallback";

const ThreeShader = dynamic(() => import("@/components/hero/ThreeShader"), {
  ssr: false,
  loading: () => <HeroFallback />,
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* section label */}
      <span className="absolute left-6 top-8 z-10 font-mono text-xs text-muted-foreground tracking-widest">
        (01) origin
      </span>

      <div className="flex h-screen flex-col md:flex-row">
        {/* LEFT — typography */}
        <div className="flex flex-1 flex-col items-start justify-center px-8 md:px-16 py-32 z-10">
          <h1 className="font-mono text-[clamp(3rem,10vw,8rem)] font-bold uppercase leading-none tracking-tighter text-foreground">
            KECEBONG
          </h1>
          <p className="mt-6 max-w-xs font-sans text-base italic text-muted-foreground leading-relaxed">
            shipping over talking. the work is the receipt.
          </p>
          <div className="mt-16 flex flex-col gap-1">
            <span className="font-mono text-xs text-muted-foreground tracking-widest">
              fullstack · cybersec · anonymous
            </span>
          </div>
          {/* scroll hint */}
          <div className="absolute bottom-8 left-8 font-mono text-xs text-muted-foreground tracking-widest animate-pulse">
            scroll ↓
          </div>
        </div>

        {/* RIGHT — Three.js shader (desktop) / fallback (mobile) */}
        <div className="hidden md:block relative flex-1 h-full">
          <ThreeShader />
        </div>
      </div>
    </section>
  );
}