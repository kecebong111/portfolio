"use client";
export function HeroFallback() {
  return (
    <svg
      data-fallback="hero"
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <filter id="blur-fallback">
          <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="4" seed="2" />
          <feColorMatrix type="saturate" values="0" />
          <feBlend in="SourceGraphic" mode="multiply" />
        </filter>
      </defs>
      <rect width="400" height="400" fill="oklch(0.07 0.003 80)" />
      <rect width="400" height="400" filter="url(#blur-fallback)" opacity="0.4" />
    </svg>
  );
}