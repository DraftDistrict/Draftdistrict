import { ArrowUpRight, Star } from "lucide-react";
import { Reveal } from "@/components/Motion";
import { reviews, site } from "@/data/site";

export function ReviewsSection() {
  return (
    <section aria-labelledby="reviews-heading" className="border-y border-line bg-panel text-bone">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.28em] text-ember">
            <span className="inline-block h-px w-10 bg-ember" aria-hidden="true" />
            04 — Reviews
          </p>
          <h2 id="reviews-heading" className="mt-4 font-heading text-4xl font-black uppercase tracking-tight text-bone sm:text-5xl lg:text-6xl">
            What Our Guests Say
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="flex h-full flex-col justify-between border-2 border-line p-7">
              <div>
                <p className="font-heading text-7xl font-black leading-none text-bone">{site.rating.average}</p>
                <div className="mt-3 flex gap-1" aria-label={`${site.rating.average} out of 5 stars`}>
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} className="h-5 w-5 fill-ember text-ember" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-3 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-fog">
                  Based on {site.rating.count} Google reviews
                </p>
              </div>
              <a
                href="#"
                data-testid="read-more-reviews"
                className="group mt-8 inline-flex min-h-12 items-center justify-center gap-2 border-2 border-bone/25 px-6 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-bone transition-colors hover:bg-bone hover:text-graphite"
              >
                Read More Reviews
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-3 lg:col-span-8">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.08}>
                <figure className="flex h-full flex-col border border-line bg-background/60 p-6" data-testid={`review-${i}`}>
                  <div className="flex gap-0.5" aria-label={`${r.stars} out of 5 stars`}>
                    {Array.from({ length: r.stars }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-ember text-ember" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-bone/75">
                    &ldquo;{r.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-bone">
                    {r.name}
                    <span className="mt-1 block font-medium normal-case tracking-normal text-fog">
                      via Google
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
