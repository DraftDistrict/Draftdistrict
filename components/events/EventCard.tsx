import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { EventItem } from "@/data/site";

export function EventCard({ event }: { event: EventItem }) {
  return (
    <article
      className="group flex h-full flex-col overflow-hidden border border-line bg-graphite transition-all duration-200 hover:-translate-y-1 hover:border-ember/60"
      data-testid={`event-card-${event.id}`}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={event.image}
          alt={event.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 border border-line bg-graphite/90 px-3 py-1.5 text-center backdrop-blur">
          <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.24em] text-ember">{event.month}</p>
          <p className="font-heading text-xl font-black leading-none text-bone">{event.day}</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-ember">{event.type}</p>
        <h3 className="mt-2 font-heading text-lg font-extrabold uppercase tracking-tight text-bone">
          {event.name}
        </h3>
        <p className="mt-1 font-mono text-xs text-fog">{event.weekday} · {event.time}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-fog">{event.desc}</p>
        <Link
          href="/contact"
          data-testid={`event-details-${event.id}`}
          className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-ember transition-colors hover:text-bone"
        >
          Details
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
