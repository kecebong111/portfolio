const achievements = [
  {
    year: "2025",
    title: "webcraft UGM",
    detail: "2nd place — fullstack",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="px-6 py-32 relative">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
          (04) achievements
        </span>

        <div className="mt-12 flex flex-col gap-px bg-border">
          {achievements.map((a) => (
            <div
              key={a.title}
              className="bg-background px-8 py-6 flex flex-col sm:flex-row sm:items-baseline gap-4"
            >
              <span className="font-mono text-sm text-muted-foreground tracking-widest min-w-[80px]">
                {a.year}
              </span>
              <div className="flex-1">
                <h3 className="font-mono text-foreground">{a.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{a.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}