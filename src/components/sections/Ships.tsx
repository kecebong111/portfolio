"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ships = [
  {
    num: "01",
    title: "malpres.com",
    role: "frontend contributor",
    year: "2025",
    description: "navbar, footer, faq, coming soon, galeri, about — production-ready frontend for a large-scale university event serving 100+ users.",
    href: "https://malpres.com",
  },
  {
    num: "02",
    title: "ctf-writeups",
    role: "security research",
    year: "2025–",
    description: "picoctf web exploitation + forensics writeups. retired challenges only. learning notes, not solution dumps.",
    href: "https://github.com/kecebong111/ctf-writeups",
  },
  {
    num: "03",
    title: "portfolio",
    role: "this site",
    year: "2026",
    description: "what you are looking at right now. next.js 16 + three.js + gsap + lenis.",
    href: "https://kecebong111-portfolio.vercel.app",
  },
];

export default function Ships() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Only on desktop
    if (!window.matchMedia("(min-width: 768px)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          end: `+=${window.innerHeight * 0.8}`,
          pin: true,
          pinSpacing: i === cardsRef.current.length - 1,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="ships" ref={sectionRef} className="relative">
      {/* section label */}
      <div className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur-sm px-8 py-4">
        <span className="font-mono text-xs text-muted-foreground tracking-widest">
          (02) ships
        </span>
      </div>

      {/* cards */}
      {ships.map((ship, i) => (
        <div
          key={ship.title}
          ref={(el) => { if (el) cardsRef.current[i] = el; }}
          className="flex min-h-screen flex-col items-start justify-center border-b border-border px-8 md:px-16 py-24"
        >
          <div className="max-w-2xl">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="font-mono text-xs text-muted-foreground">{ship.num}</span>
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">{ship.role}</span>
              <span className="font-mono text-xs text-muted-foreground ml-auto">{ship.year}</span>
            </div>
            <h2 className="font-mono text-[clamp(2rem,6vw,5rem)] font-bold uppercase leading-none tracking-tighter text-foreground mb-8">
              {ship.title}
            </h2>
            <p className="font-sans text-base text-muted-foreground leading-relaxed max-w-md mb-10">
              {ship.description}
            </p>
            <a
              href={ship.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-foreground hover:text-muted-foreground transition-colors"
            >
              visit →
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}