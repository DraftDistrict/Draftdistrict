"use client";

import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Motion";
import { FeaturedEventSection } from "@/components/events/FeaturedEventSection";
import { EventFilters, eventFilters } from "@/components/events/EventFilters";
import type { EventFilter } from "@/components/events/EventFilters";
import { EventCard } from "@/components/events/EventCard";
import { GroupNightCta } from "@/components/events/GroupNightCta";
import { events, img } from "@/data/site";
import type { EventType } from "@/data/site";

export function EventsView() {
  const [filter, setFilter] = useState<EventFilter>(eventFilters[0]);
  const featured = events.find((e) => e.featured) ?? events[0];
  const shown = events.filter((e) => filter === "ALL" || e.type === (filter as EventType));

  return (
    <>
      <PageHero
        eyebrow="What's On"
        lines={["Events &", "Game Nights"]}
        sub="There's always something happening."
        image={img.boothTv}
        imageAlt="Booth seating with a TV screen ready for game night"
      />

      <FeaturedEventSection event={featured} />

      <section aria-labelledby="upcoming-events-heading" className="border-t border-line bg-panel">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <Reveal>
            <h2 id="upcoming-events-heading" className="font-heading text-4xl font-black uppercase tracking-tight text-bone sm:text-5xl">
              Upcoming Events
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <EventFilters active={filter} onSelect={setFilter} />
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((ev, i) => (
              <Reveal key={ev.id} delay={i * 0.05}>
                <EventCard event={ev} />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <GroupNightCta />
          </Reveal>
        </div>
      </section>
    </>
  );
}
