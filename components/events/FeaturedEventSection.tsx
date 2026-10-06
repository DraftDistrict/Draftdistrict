import Image from "next/image";
import { Phone } from "lucide-react";
import { Reveal } from "@/components/Motion";
import { site } from "@/data/site";
import type { EventItem } from "@/data/site";

export function FeaturedEventSection({ event }: { event: EventItem }) {
  return (
    <section aria-labelledby="featured-event-heading" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
      <Reveal>
        <p className="flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.28em] text-ember">
          <span className="inline-block h-px w-10 bg-ember" aria-hidden="true" />
          Featured Event
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <article className="mt-8 grid overflow-hidden border border-line bg-panel lg:grid-cols-2" data-testid="featured-event">
          <div className="relative min-h-[280px] overflow-hidden">
            <Image
              src={event.image}
              alt={event.imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-graphite/60 to-transparent lg:bg-gradient-to-r" aria-hidden="true" />
            <p className="absolute left-5 top-5 flex items-center gap-2 bg-copper px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>
              This Week
            </p>
          </div>
          <div className="flex flex-col justify-center p-7 lg:p-12">
            <div className="flex items-center gap-4">
              <div className="border border-line bg-graphite px-4 py-2 text-center">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-ember">{event.month}</p>
                <p className="font-heading text-3xl font-black leading-none text-bone">{event.day}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-ember">{event.type}</p>
                <p className="mt-1 font-mono text-xs text-fog">{event.weekday} · {event.time}</p>
              </div>
            </div>
            <h2 id="featured-event-heading" className="mt-6 font-heading text-3xl font-black uppercase leading-tight tracking-tight text-bone sm:text-4xl">
              {event.name}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-fog">{event.desc}</p>
            <div className="mt-8">
              <a
                href={site.phoneTel}
                data-testid="featured-event-call"
                className="inline-flex min-h-12 items-center gap-2 bg-copper px-6 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-copper-deep"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call to Save a Spot
              </a>
            </div>
          </div>
        </article>
      </Reveal>
    </section>
  );
}
