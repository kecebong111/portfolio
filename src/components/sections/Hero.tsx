export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-32 relative"
    >
      {/* section label */}
      <span className="absolute top-8 left-6 text-xs font-mono text-muted-foreground tracking-widest uppercase">
        (01)
      </span>

      <div className="flex flex-col items-center text-center gap-6 max-w-2xl">
        {/* handle */}
        <h1 className="font-mono text-5xl sm:text-7xl md:text-8xl tracking-tight text-foreground">
          kecebong111
        </h1>

        {/* bio */}
        <p className="text-muted-foreground text-base sm:text-lg italic max-w-md leading-relaxed">
          shipping over talking. the work is the receipt.
        </p>

        {/* scroll hint */}
        <span className="mt-12 text-xs font-mono text-muted-foreground tracking-widest animate-pulse">
          scroll
        </span>
      </div>
    </section>
  );
}