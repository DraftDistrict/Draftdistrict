import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/data/site";

export function GroupNightCta() {
  return (
    <div className="mt-14 flex flex-col items-start justify-between gap-6 border border-copper/40 bg-graphite p-7 sm:flex-row sm:items-center lg:p-9" data-testid="group-night-cta">
      <div>
        <h2 className="font-heading text-2xl font-black uppercase tracking-tight text-bone sm:text-3xl">
          Planning a Group Night?
        </h2>
        <p className="mt-2 max-w-md text-sm text-fog">
          Birthdays, fantasy drafts, watch parties — contact the restaurant and we&apos;ll set it up.
        </p>
      </div>
      <div className="flex shrink-0 flex-wrap gap-4">
        <Link
          href="/contact"
          data-testid="group-night-contact"
          className="inline-flex min-h-12 items-center gap-2 border border-bone/30 px-6 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-bone transition-colors hover:border-ember hover:text-ember"
        >
          Contact Us
        </Link>
        <a
          href={site.phoneTel}
          data-testid="group-night-call"
          className="inline-flex min-h-12 items-center gap-2 bg-copper px-6 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-copper-deep"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          {site.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
