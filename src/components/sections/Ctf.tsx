"use client";
import { useEffect, useRef, useState } from "react";

const LINES = [
  { delay: 0, type: "prompt", text: "ls picoctf/" },
  { delay: 600, type: "output", text: "web-exploitation/  forensics/" },
  { delay: 1000, type: "prompt", text: "cat web-exploitation.txt" },
  { delay: 1600, type: "output", text: "insp3ct0r · dont-use-client-side · logon" },
  { delay: 1900, type: "output", text: "where-are-the-robots · picobrowser · cookies" },
  { delay: 2200, type: "output", text: "scavenger-hunt · get-ahead · includes" },
  { delay: 2500, type: "output", text: "inspect-html · local-authority · search-source" },
  { delay: 2800, type: "output", text: "forbidden-paths · power-cookie · roboto-sans" },
  { delay: 3100, type: "output", text: "sql-direct · sqllite · soap · webdecode" },
  { delay: 3400, type: "output", text: "bookmarklet · introtoburp · unminify · trickster" },
  { delay: 3700, type: "output", text: "cookie-monster-secret-recipe · ssti1" },
  { delay: 4100, type: "prompt", text: "cat forensics.txt" },
  { delay: 4700, type: "output", text: "CanYouSee · Glory-of-the-Garden · information" },
  { delay: 5000, type: "output", text: "m00nwalk · WhitePages · So-Meta" },
  { delay: 5300, type: "output", text: "Shark-on-wire-1 · flags-are-stepic" },
  { delay: 5600, type: "prompt", text: "echo $STATUS" },
  { delay: 6200, type: "output", text: "retired challenges only. no active flags." },
];

export default function Ctf() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          LINES.forEach((line, i) => {
            setTimeout(() => {
              setVisibleLines((prev) => [...prev, i]);
            }, line.delay);
          });
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="ctf" ref={sectionRef} className="px-8 md:px-16 py-32">
      <div className="max-w-4xl mx-auto">
        <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
          (03) ctf
        </span>

        {/* terminal window */}
        <div className="mt-12 rounded-sm border border-border bg-card overflow-hidden">
          {/* title bar */}
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-border" />
              <div className="h-3 w-3 rounded-full bg-border" />
              <div className="h-3 w-3 rounded-full bg-border" />
            </div>
            <span className="ml-2 font-mono text-xs text-muted-foreground">
              kecebong@ctf:~$
            </span>
          </div>

          {/* terminal body */}
          <div className="p-6 font-mono text-sm min-h-[320px]">
            {LINES.map((line, i) => (
              visibleLines.includes(i) ? (
                <div key={i} className="leading-relaxed">
                  {line.type === "prompt" ? (
                    <span>
                      <span className="text-muted-foreground">$ </span>
                      <span className="text-foreground">{line.text}</span>
                    </span>
                  ) : (
                    <span className="text-muted-foreground pl-4">{line.text}</span>
                  )}
                </div>
              ) : null
            ))}
            {/* blinking cursor */}
            <span className="inline-block w-2 h-4 bg-foreground/70 animate-pulse ml-0.5 align-middle" />
          </div>
        </div>

        <div className="mt-6">
          <a
            href="https://github.com/kecebong111/ctf-writeups"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            → ctf-writeups
          </a>
        </div>
      </div>
    </section>
  );
}