"use client";
export function HeroFallback() {
  return (
    <svg
      data-fallback="hero"
      viewBox="0 0 400 600"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden="true"
      style={{ background: "transparent" }}
    >
      <defs>
        <filter id="blur-fallback">
          <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="4" seed="5" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3" />
          </feComponentTransfer>
        </filter>
      </defs>
      <rect width="400" height="600" fill="transparent" />
      <rect width="400" height="600" filter="url(#blur-fallback)" opacity="0.5" fill="oklch(0.5 0 0)" />
    </svg>
  );
}