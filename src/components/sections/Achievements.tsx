const achievements = [
  {
    year: "2025",
    title: "webcraft UGM",
    detail: "2nd place — fullstack",
    type: "award",
  },
];

const skills = [
  { category: "frontend", items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "HTML5"] },
  { category: "backend", items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"] },
  { category: "security", items: ["Burp Suite", "Wireshark", "exiftool", "Linux", "PicoCTF"] },
];

export default function Achievements() {
  return (
    <section id="achievements" className="px-8 md:px-16 py-32">
      <div className="max-w-4xl mx-auto">
        <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
          (04) achievements
        </span>

        <div className="mt-12 flex flex-col divide-y divide-border">
          {achievements.map((a) => (
            <div
              key={a.title}
              className="flex flex-col sm:flex-row sm:items-start gap-4 py-6 group hover:bg-accent/20 transition-colors px-2 -mx-2 rounded-sm"
            >
              <div className="flex items-center gap-3 min-w-[120px]">
                <span className="font-mono text-sm text-muted-foreground">{a.year}</span>
                <span className="font-mono text-xs text-muted-foreground/60 border border-border px-1.5 py-0.5 rounded-sm">
                  {a.type}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-mono text-sm text-foreground">{a.title}</h3>
                <p className="font-sans text-sm text-muted-foreground mt-1 leading-relaxed">{a.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
            stack
          </span>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {skills.map((s) => (
              <div key={s.category}>
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                  {s.category}
                </span>
                <ul className="mt-4 flex flex-col gap-2">
                  {s.items.map((item) => (
                    <li key={item} className="font-mono text-sm text-foreground/80">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}