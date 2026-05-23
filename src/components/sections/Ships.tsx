const ships = [
  {
    title: "malpres.com",
    role: "frontend contributor",
    description: "navbar, footer, faq, coming soon, galeri, about",
    href: "https://malpres.com",
  },
  {
    title: "ctf-writeups",
    role: "security research",
    description: "picoctf web exploitation + forensics — retired challenges only",
    href: "https://github.com/kecebong111/ctf-writeups",
  },
  {
    title: "portfolio",
    role: "this site",
    description: "what you are looking at right now",
    href: "https://kecebong111-portfolio.vercel.app",
  },
];

export default function Ships() {
  return (
    <section id="ships" className="px-6 py-32 relative">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
          (02) ships
        </span>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {ships.map((s) => (
            <a
              key={s.title}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-background p-8 flex flex-col gap-3 hover:bg-accent transition-colors"
            >
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                {s.role}
              </span>
              <h3 className="font-mono text-lg text-foreground group-hover:text-foreground">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.description}
              </p>
              <span className="mt-auto text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                visit →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}