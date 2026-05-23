"use client";
import dynamic from "next/dynamic";
import { HeroFallback } from "@/components/hero/HeroFallback";

const ThreeShader = dynamic(() => import("@/components/hero/ThreeShader"), {
  ssr: false,
  loading: () => <HeroFallback />,
});

const STATS = [
  { label: "projects shipped", value: "3+" },
  { label: "ctf challenges", value: "33" },
  { label: "stack", value: "ts / py" },
];

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
        <div className="flex flex-1 flex-col justify-center px-8 md:px-16 py-32 z-10 gap-8">
          {/* handle */}
          <div>
            <h1 className="font-mono text-[clamp(3rem,10vw,8rem)] font-bold uppercase leading-none tracking-tighter text-foreground">
              KECEBONG
            </h1>
            <p className="mt-4 max-w-sm font-sans text-base italic text-muted-foreground leading-relaxed">
              shipping over talking. the work is the receipt.
            </p>
          </div>

          {/* role tags */}
          <div className="flex flex-wrap gap-2">
            {["fullstack dev", "cybersec learner", "picoctf"].map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs text-muted-foreground border border-border px-3 py-1 rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* stats row */}
          <div className="flex gap-8 border-t border-border pt-6">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="font-mono text-lg text-foreground">{s.value}</span>
                <span className="font-mono text-xs text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </div>

          {/* links row */}
          <div className="flex gap-6">
            <a
              href="https://github.com/kecebong111"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              github ↗
            </a>
            <a
              href="https://github.com/kecebong111/ctf-writeups"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              ctf-writeups ↗
            </a>
          </div>
        </div>

        {/* RIGHT — Three.js shader (desktop) / fallback (mobile) */}
        <div className="hidden md:block relative flex-1 h-full">
          <ThreeShader />
        </div>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs text-muted-foreground tracking-widest animate-pulse">
        scroll ↓
      </div>
    </section>
  );
}