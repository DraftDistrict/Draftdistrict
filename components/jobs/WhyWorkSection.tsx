import Image from "next/image";
import { CalendarClock, TrendingUp, Users, UtensilsCrossed } from "lucide-react";
import { Reveal } from "@/components/Motion";
import { benefits, img } from "@/data/site";

const benefitIcons = [CalendarClock, Users, UtensilsCrossed, TrendingUp];

export function WhyWorkSection() {
  return (
    <section aria-labelledby="why-work-heading" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.28em] text-ember">
              <span className="inline-block h-px w-10 bg-ember" aria-hidden="true" />
              Why Work With Us
            </p>
            <h2 id="why-work-heading" className="mt-4 font-heading text-4xl font-black uppercase tracking-tight text-bone sm:text-5xl">
              A crew worth being part of.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="relative mt-8 aspect-[4/3] w-full rotate-1 overflow-hidden border border-line">
              <Image
                src={img.bartenderPour}
                alt="Team member pouring a drink during service"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
          {benefits.map((b, i) => {
            const Icon = benefitIcons[i];
            return (
              <Reveal key={b.title} delay={i * 0.07}>
                <div className="h-full border border-line bg-panel p-6 transition-all duration-200 hover:-translate-y-1 hover:border-ember/60" data-testid={`benefit-${i}`}>
                  <Icon className="h-6 w-6 text-ember" aria-hidden="true" />
                  <h3 className="mt-4 font-heading text-lg font-extrabold uppercase tracking-tight text-bone">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-fog">{b.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
