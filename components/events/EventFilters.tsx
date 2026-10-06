import { cn } from "@/lib/utils";

export const eventFilters = ["ALL", "SPORTS", "LIVE MUSIC", "TRIVIA", "SPECIALS", "COMMUNITY"] as const;
export type EventFilter = (typeof eventFilters)[number];

export function EventFilters({ active, onSelect }: { active: EventFilter; onSelect: (f: EventFilter) => void }) {
  return (
    <div className="no-scrollbar mt-8 flex gap-2 overflow-x-auto" role="group" aria-label="Filter events">
      {eventFilters.map((f) => (
        <button
          key={f}
          type="button"
          data-testid={`event-filter-${f.toLowerCase().replace(/\s+/g, "-")}`}
          aria-pressed={active === f}
          onClick={() => onSelect(f)}
          className={cn(
            "min-h-11 shrink-0 border px-4 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] transition-all duration-200 active:scale-[0.97]",
            active === f
              ? "border-copper bg-copper text-white"
              : "border-line text-bone/70 hover:border-ember/60 hover:text-bone"
          )}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
