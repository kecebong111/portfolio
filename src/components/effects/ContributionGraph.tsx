import { unstable_cache } from "next/cache";

interface ContribDay {
  contributionCount: number;
  date: string;
}

interface ContribWeek {
  contributionDays: ContribDay[];
}

const fetchContributions = unstable_cache(
  async () => {
    const query = `{
      user(login: "kecebong111") {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }`;

    const token = process.env.GITHUB_TOKEN;
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    if (token) headers["Authorization"] = `Bearer ${token}`;

    try {
      const res = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers,
        body: JSON.stringify({ query }),
        next: { revalidate: 3600 },
      });
      const data = await res.json();
      return data?.data?.user?.contributionsCollection?.contributionCalendar?.weeks as ContribWeek[] | null;
    } catch {
      return null;
    }
  },
  ["contributions-kecebong111"],
  { revalidate: 3600 }
);

function getLevel(count: number): number {
  if (count === 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  if (count <= 9) return 3;
  return 4;
}

const LEVEL_COLORS = [
  "oklch(0.20 0 0)",  // 0 — near-black
  "oklch(0.35 0 0)",  // 1
  "oklch(0.50 0 0)",  // 2
  "oklch(0.65 0 0)",  // 3
  "oklch(0.80 0 0)",  // 4 — light gray
];

export default async function ContributionGraph() {
  const weeks = await fetchContributions();

  if (!weeks) {
    return (
      <div className="font-mono text-xs text-muted-foreground">
        activity unavailable
      </div>
    );
  }

  const cellSize = 10;
  const gap = 2;
  const cols = weeks.length;
  const rows = 7;
  const width = cols * (cellSize + gap);
  const height = rows * (cellSize + gap);

  return (
    <svg
      data-contribution-graph
      width={width}
      height={height}
      aria-label="contribution graph"
      role="img"
    >
      {weeks.map((week, col) =>
        week.contributionDays.map((day, row) => (
          <rect
            key={day.date}
            x={col * (cellSize + gap)}
            y={row * (cellSize + gap)}
            width={cellSize}
            height={cellSize}
            rx={2}
            fill={LEVEL_COLORS[getLevel(day.contributionCount)]}
            aria-label={`${day.date}: ${day.contributionCount} contributions`}
          />
        ))
      )}
    </svg>
  );
}