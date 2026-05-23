"use client";
import { useEffect, useState } from "react";

function LiveTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const wib = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now);
      setTime(`${wib} WIB`);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="font-mono text-xs text-muted-foreground tabular-nums">
      {time || "--:--:-- WIB"}
    </span>
  );
}

export default function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-border px-8 py-16"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        {/* SVG kb signature */}
        <svg
          data-signature
          width="48"
          height="24"
          viewBox="0 0 48 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="kecebong signature"
          className="text-muted-foreground"
        >
          <text
            x="0"
            y="20"
            fontFamily="var(--font-jetbrains-mono)"
            fontSize="20"
            fill="currentColor"
            letterSpacing="-1"
          >
            kb
          </text>
        </svg>

        <a
          href="https://github.com/kecebong111"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          github
        </a>

        <LiveTime />

        <p className="font-sans text-xs italic text-muted-foreground">
          pelan-pelan asal kelakon.
        </p>
      </div>
    </footer>
  );
}