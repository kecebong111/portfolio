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
      cx = lerp(cx, x, 0.04);
      cy = lerp(cy, y, 0.04);
      if (bgRef.current) {
        bgRef.current.style.background = `radial-gradient(ellipse 60vw 50vh at ${cx}% ${cy}%, oklch(0.22 0 0) 0%, transparent 70%)`;
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
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
}