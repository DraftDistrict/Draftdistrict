import type { ReactNode } from "react";
import Image from "next/image";
import { MaskedLines, Reveal } from "@/components/Motion";

export function PageHero({
  eyebrow,
  lines,
  sub,
  image,
  imageAlt,
}: {
  eyebrow: string;
  lines: ReactNode[];
  sub?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <header className="relative overflow-hidden border-b border-line" data-testid="page-hero">
      <div className="glow-page-hero pointer-events-none absolute inset-0 opacity-[0.35]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-12 pt-28 sm:px-8 lg:grid-cols-12 lg:items-center lg:pb-16 lg:pt-36">
        <div className={image ? "lg:col-span-7" : "lg:col-span-12"}>
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.28em] text-ember">
              <span className="inline-block h-px w-10 bg-ember" aria-hidden="true" />
              {eyebrow}
            </p>
          </Reveal>
          <MaskedLines
            as="h1"
            lines={lines}
            className="mt-5 font-heading text-[clamp(2.5rem,5.5vw,4.5rem)] font-black uppercase leading-[0.98] tracking-tight text-bone"
          />
          {sub && (
            <Reveal delay={0.35}>
              <p className="mt-6 max-w-xl text-base text-fog md:text-lg">{sub}</p>
            </Reveal>
          )}
        </div>
        {image && (
          <Reveal delay={0.2} className="hidden lg:col-span-5 lg:block">
            <div className="relative ml-auto aspect-[16/10] w-full max-w-sm -rotate-2 overflow-hidden border border-line shadow-[0_0_60px_rgba(220,38,38,0.16)]">
              <Image src={image} alt={imageAlt ?? ""} fill sizes="(min-width: 1024px) 24rem, 0px" className="object-cover" priority quality={90} />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/60 to-transparent" aria-hidden="true" />
            </div>
          </Reveal>
        )}
      </div>
    </header>
  );
}
