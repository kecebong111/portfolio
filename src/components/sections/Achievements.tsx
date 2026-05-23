import { Suspense } from "react";
import ContributionGraph from "@/components/effects/ContributionGraph";

const achievements = [
  {
    year: "2025",
    title: "webcraft UGM",
    detail: "2nd place — fullstack",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="px-8 md:px-16 py-32">
      <div className="max-w-4xl mx-auto">
        <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
          (04) achievements
        </span>

        {/* contribution graph */}
        <div className="mt-12 mb-16 overflow-x-auto">
          <Suspense fallback={
            <div className="font-mono text-xs text-muted-foreground">loading activity...</div>
          }>
            <ContributionGraph />
          </Suspense>
        </div>

        {/* timeline */}
        <div className="flex flex-col divide-y divide-border">
          {achievements.map((a) => (
            <div
              key={a.title}
              className="flex flex-col sm:flex-row sm:items-baseline gap-4 py-6 group hover:bg-accent/30 transition-colors px-2 -mx-2 rounded-sm"
            >
              <span className="font-mono text-sm text-muted-foreground min-w-[60px]">
                {a.year}
              </span>
              <div className="flex-1">
                <h3 className="font-mono text-foreground">{a.title}</h3>
                <p className="font-sans text-sm text-muted-foreground mt-1">{a.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}