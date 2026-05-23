const categories = [
  {
    name: "web exploitation",
    detail: "every easy challenge — picoctf",
  },
  {
    name: "forensics",
    detail:
      "CanYouSee · Glory of the Garden · information · m00nwalk · WhitePages · So Meta · Shark on wire 1 · flags are stepic",
  },
];

export default function Ctf() {
  return (
    <section id="ctf" className="px-6 py-32 relative">
      <div className="max-w-4xl mx-auto">
        {/* section label */}
        <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
          (03) ctf
        </span>

        <p className="mt-4 text-xs font-mono text-muted-foreground">
          picoctf — retired challenges only
        </p>

        <div className="mt-12 flex flex-col gap-px bg-border">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="bg-background px-8 py-6 flex flex-col sm:flex-row sm:items-start gap-4"
            >
              <span className="font-mono text-sm text-foreground uppercase tracking-widest min-w-[180px]">
                {cat.name}
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {cat.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <a
            href="https://github.com/kecebong111/ctf-writeups"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
          >
            → ctf-writeups
          </a>
        </div>
      </div>
    </section>
  );
}