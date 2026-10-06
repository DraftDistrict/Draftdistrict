import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Motion";
import { CtaOutline } from "@/components/ui/Button";
import { events } from "@/data/site";

export function UpcomingEventsSection() {
  return (
    <section aria-labelledby="home-events-heading" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.28em] text-ember">
              <span className="inline-block h-px w-10 bg-ember" aria-hidden="true" />
              03 — What&apos;s Happening
            </p>
            <h2 id="home-events-heading" className="mt-4 font-heading text-4xl font-black uppercase tracking-tight text-bone sm:text-5xl lg:text-6xl">
              Upcoming This Week
            </h2>
          </div>
          <CtaOutline to="/events" testId="home-view-all-events">View All Events</CtaOutline>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {events.slice(0, 3).map((ev, i) => (
          <Reveal key={ev.id} delay={i * 0.08}>
            <article
              className="group flex h-full flex-col border border-line bg-panel p-6 transition-all duration-200 hover:-translate-y-1 hover:border-ember/60"
              data-testid={`home-event-${ev.id}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="border border-line bg-graphite px-4 py-2.5 text-center">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-ember">{ev.month}</p>
                  <p className="font-heading text-3xl font-black leading-none text-bone">{ev.day}</p>
                </div>
                <span className="border border-ember/40 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-ember">
                  {ev.type}
                </span>
              </div>
              <h3 className="mt-5 font-heading text-xl font-extrabold uppercase tracking-tight text-bone">
                {ev.name}
              </h3>
              <p className="mt-1 font-mono text-xs font-medium uppercase tracking-[0.18em] text-fog">
                {ev.weekday} · {ev.time}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-fog">{ev.desc}</p>
              <Link
                href="/events"
                data-testid={`home-event-details-${ev.id}`}
                className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-ember transition-colors hover:text-bone"
              >
                View Details
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
