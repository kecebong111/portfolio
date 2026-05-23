export default function Footer() {
  return (
    <footer
      id="footer"
      className="px-6 py-16 border-t border-border"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 text-center">
        <a
          href="https://github.com/kecebong111"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
        >
          github
        </a>
        <p className="text-xs text-muted-foreground italic">
          pelan-pelan asal kelakon.
        </p>
      </div>
    </footer>
  );
}