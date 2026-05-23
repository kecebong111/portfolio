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
    description: "production-ready frontend for a large-scale university event. built navbar, footer, faq, coming soon page, galeri, and about sections. collaborated with the OMAHTI team to serve 100+ users.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Node.js"],
    href: "https://malpres.com",
    status: "live",
  },
  {
    num: "02",
    title: "ctf-writeups",
    role: "security research",
    year: "2025–",
    description: "33 writeups covering every easy PicoCTF web exploitation challenge + 8 forensics challenges. learning notes written in personal voice — recon, failed checks, solution, lessons learned.",
    tech: ["Wireshark", "exiftool", "Burp Suite", "Python", "SQL"],
    href: "https://github.com/kecebong111/ctf-writeups",
    status: "active",
  },
  {
    num: "03",
    title: "portfolio",
    role: "design + engineering",
    year: "2026",
    description: "what you are looking at right now. cinematic redesign with Three.js monochrome shader, GSAP-pinned scroll cards, faux terminal CTF section, Cmd+K command palette, and Lenis smooth scroll.",
    tech: ["Next.js 16", "Three.js", "GSAP", "Lenis", "Framer Motion"],
    href: "https://github.com/kecebong111/portfolio",
    status: "live",
  },
];

export default function Ships() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
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

      {ships.map((ship, i) => (
        <div
          key={ship.title}
          ref={(el) => { if (el) cardsRef.current[i] = el; }}
          className="flex min-h-screen flex-col justify-center border-b border-border px-8 md:px-16 py-24"
        >
          <div className="max-w-2xl">
            {/* header row */}
            <div className="flex items-baseline justify-between mb-6">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-muted-foreground">{ship.num}</span>
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">{ship.role}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-muted-foreground">{ship.year}</span>
                <span className="font-mono text-xs border border-border px-2 py-0.5 rounded-sm text-muted-foreground">
                  {ship.status}
                </span>
              </div>
            </div>

            {/* title */}
            <h2 className="font-mono text-[clamp(2rem,6vw,5rem)] font-bold uppercase leading-none tracking-tighter text-foreground mb-6">
              {ship.title}
            </h2>

            {/* description */}
            <p className="font-sans text-base text-muted-foreground leading-relaxed max-w-md mb-8">
              {ship.description}
            </p>

            {/* tech stack */}
            <div className="flex flex-wrap gap-2 mb-10">
              {ship.tech.map((t) => (
                <span key={t} className="font-mono text-xs text-muted-foreground border border-border px-2 py-1 rounded-sm">
                  {t}
                </span>
              ))}
            </div>

            {/* link */}
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