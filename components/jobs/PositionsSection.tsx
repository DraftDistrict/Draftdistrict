"use client";

import { Reveal } from "@/components/Motion";
import { getLenis } from "@/lib/lenis";
import { positions } from "@/data/site";

export function PositionsSection({ onApply }: { onApply: (title: string) => void }) {
  return (
    <section aria-labelledby="positions-heading" className="border-y border-line bg-panel">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <Reveal>
          <h2 id="positions-heading" className="font-heading text-4xl font-black uppercase tracking-tight text-bone sm:text-5xl">
            Open Positions
          </h2>
        </Reveal>
        <div className="mt-10 space-y-4">
          {positions.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <article
                className="flex flex-col gap-4 border border-line bg-graphite p-6 transition-all duration-200 hover:border-ember/60 sm:flex-row sm:items-center"
                data-testid={`position-${i}`}
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-heading text-xl font-extrabold uppercase tracking-tight text-bone">
                      {p.title}
                    </h3>
                    <span className="border border-turf px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-green-400">
                      {p.type}
                    </span>
                  </div>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-fog">{p.desc}</p>
                </div>
                <button
                  type="button"
                  data-testid={`apply-${p.title.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => {
                    onApply(p.title);
                    const lenis = getLenis();
                    if (lenis) lenis.scrollTo("#apply", { offset: -90 });
                    else document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex min-h-12 shrink-0 items-center justify-center border border-bone/30 px-6 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-bone transition-all duration-200 hover:border-ember hover:text-ember active:scale-[0.97]"
                >
                  Apply Now
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
