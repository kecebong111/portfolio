"use client";
import { useEffect, useState } from "react";
import { Command } from "cmdk";

const navItems = [
  { label: "origin", section: "hero" },
  { label: "ships", section: "ships" },
  { label: "ctf", section: "ctf" },
  { label: "achievements", section: "achievements" },
  { label: "footer", section: "footer" },
];

const linkItems = [
  { label: "github", href: "https://github.com/kecebong111" },
  { label: "ctf-writeups", href: "https://github.com/kecebong111/ctf-writeups" },
  { label: "malpres.com", href: "https://malpres.com" },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9998] flex items-start justify-center pt-[20vh]"
      onClick={() => setOpen(false)}
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

      {/* palette */}
      <div
        className="relative w-full max-w-md rounded-sm border border-border bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Command className="font-mono text-sm">
          <Command.Input
            placeholder="type a command..."
            className="w-full border-b border-border bg-transparent px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none"
            autoFocus
          />
          <Command.List className="max-h-64 overflow-y-auto p-2">
            <Command.Empty className="px-4 py-3 text-muted-foreground">
              no results.
            </Command.Empty>

            <Command.Group heading="navigate" className="px-2 py-1 text-xs text-muted-foreground uppercase tracking-widest">
              {navItems.map((item) => (
                <Command.Item
                  key={item.section}
                  value={item.label}
                  onSelect={() => {
                    document.getElementById(item.section)?.scrollIntoView({ behavior: "smooth" });
                    setOpen(false);
                  }}
                  className="cursor-pointer rounded-sm px-3 py-2 text-foreground hover:bg-accent aria-selected:bg-accent"
                >
                  → {item.label}
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Group heading="links" className="px-2 py-1 text-xs text-muted-foreground uppercase tracking-widest">
              {linkItems.map((item) => (
                <Command.Item
                  key={item.href}
                  value={item.label}
                  onSelect={() => {
                    window.open(item.href, "_blank");
                    setOpen(false);
                  }}
                  className="cursor-pointer rounded-sm px-3 py-2 text-foreground hover:bg-accent aria-selected:bg-accent"
                >
                  ↗ {item.label}
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>

          <div className="border-t border-border px-4 py-2 text-xs text-muted-foreground">
            <kbd className="font-mono">esc</kbd> to close · <kbd className="font-mono">↑↓</kbd> to navigate · <kbd className="font-mono">↵</kbd> to select
          </div>
        </Command>
      </div>
    </div>
  );
}