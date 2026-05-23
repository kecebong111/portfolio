"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const STACK = [
  "TypeScript", "React", "Next.js", "Tailwind", "Node.js",
  "Python", "Express", "MongoDB", "Linux", "Burp Suite",
];

export default function TechTicker() {
  const [paused, setPaused] = useState(false);
  const items = [...STACK, ...STACK];

  return (
    <div
      className="relative overflow-hidden border-y border-border py-4 select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-hidden="true"
    >
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {items.map((tech, i) => (
          <span
            key={i}
            className="font-mono text-xs text-muted-foreground uppercase tracking-widest"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
}