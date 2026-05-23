"use client";
import { useEffect, useRef } from "react";

export default function InteractiveBg() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let x = 50, y = 50;
    let cx = 50, cy = 50;
    let raf: number;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const onMove = (e: MouseEvent) => {
      x = (e.clientX / window.innerWidth) * 100;
      y = (e.clientY / window.innerHeight) * 100;
    };

    const animate = () => {
      cx = lerp(cx, x, 0.05);
      cy = lerp(cy, y, 0.05);
      if (bgRef.current) {
        bgRef.current.style.background = `
          radial-gradient(ellipse 80vw 60vh at ${cx}% ${cy}%,
            oklch(0.18 0 0) 0%,
            oklch(0.10 0 0) 40%,
            oklch(0.07 0 0) 100%
          )
        `;
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={bgRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 transition-none"
      style={{
        background: "oklch(0.07 0 0)",
      }}
    />
  );
}