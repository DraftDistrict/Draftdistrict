import { MapPin, Navigation, Phone } from "lucide-react";
import { Reveal } from "@/components/Motion";
import { CallButton } from "@/components/ui/Button";
import { site } from "@/data/site";

export function VisitUsSection() {
  return (
    <section aria-labelledby="visit-heading" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
      <Reveal>
        <p className="flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.28em] text-ember">
          <span className="inline-block h-px w-10 bg-ember" aria-hidden="true" />
          05 — Find Us
        </p>
        <h2 id="visit-heading" className="mt-4 font-heading text-4xl font-black uppercase tracking-tight text-bone sm:text-5xl lg:text-6xl">
          Visit Us
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="flex h-full flex-col gap-8 border border-line bg-panel p-7 lg:p-9">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-ember" aria-hidden="true" />
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-fog">Address</p>
                  <p className="mt-1 text-bone">
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.state} {site.address.zip}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-ember" aria-hidden="true" />
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-fog">Phone</p>
                  <a href={site.phoneTel} data-testid="visit-phone-link" className="mt-1 block font-mono text-lg font-semibold text-bone transition-colors hover:text-ember">
                    {site.phoneDisplay}
                  </a>
                </div>
              </div>
              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-fog">Hours</p>
                <ul className="mt-2 space-y-1.5">
                  {site.hours.map((h) => (
                    <li key={h.days} className="flex items-baseline text-sm text-bone/85">
                      <span>{h.days}</span>
                      <span className="dot-leader" aria-hidden="true" />
                      <span className="font-mono text-xs text-fog">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-auto flex flex-wrap gap-4">
              <a
                href={site.directionsUrl}
                target="_blank"
                rel="noreferrer"
                data-testid="visit-directions-button"
                className="inline-flex min-h-12 items-center gap-2 bg-copper px-6 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-copper-deep"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Get Directions
              </a>
              <CallButton label="Call Us" testId="visit-call-button" dominant={false} />
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <iframe
            title={`Map to ${site.fullName}`}
            src={site.mapEmbedUrl}
            className="map-dark h-full min-h-[360px] w-full border border-line"
            loading="lazy"
            data-testid="visit-map"
          />
        </Reveal>
      </div>
    </section>
  );
}
