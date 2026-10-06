import Image from "next/image";
import { Clock, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/Motion";
import { img, locations } from "@/data/site";

export function LocationsSection() {
  return (
    <section aria-labelledby="locations-heading" className="border-t border-line bg-panel">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <Reveal>
          <h2 id="locations-heading" className="font-heading text-3xl font-black uppercase tracking-tight text-bone sm:text-4xl">
            Call Your Location
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {locations.map((loc) => (
            <Reveal key={loc.name}>
              <article className="flex h-full flex-col border border-line bg-graphite" data-testid="location-card">
                <div className="relative aspect-[16/7] overflow-hidden">
                  <Image
                    src={img.neonTaps}
                    alt={`Inside the bar at ${loc.name}`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-5 p-7">
                  <h3 className="font-heading text-2xl font-extrabold uppercase tracking-tight text-bone">
                    {loc.name}
                  </h3>
                  <ul className="space-y-3 text-sm text-bone/80">
                    <li className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 shrink-0 text-ember" aria-hidden="true" />
                      {loc.address}
                    </li>
                    <li className="flex items-center gap-3">
                      <Clock className="h-4 w-4 shrink-0 text-ember" aria-hidden="true" />
                      {loc.hours}
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone className="h-4 w-4 shrink-0 text-ember" aria-hidden="true" />
                      <span className="font-mono">{loc.phone}</span>
                    </li>
                  </ul>
                  <a
                    href={loc.phoneTel}
                    data-testid="location-call-button"
                    aria-label={`Call ${loc.name} at ${loc.phone}`}
                    className="mt-auto inline-flex min-h-12 items-center justify-center gap-2 bg-copper px-6 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-copper-deep"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Call This Location
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
