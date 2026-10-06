"use client";

import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Motion";
import { WhyWorkSection } from "@/components/jobs/WhyWorkSection";
import { PositionsSection } from "@/components/jobs/PositionsSection";
import { ApplicationForm } from "@/components/jobs/ApplicationForm";
import { img } from "@/data/site";

export function JobsView() {
  const [prefillPosition, setPrefillPosition] = useState("");

  return (
    <>
      <PageHero
        eyebrow="Careers"
        lines={["Join the", "Team"]}
        sub="Great food and great game days start with great people."
        image={img.bartender}
        imageAlt="Bartender preparing a drink behind the bar"
      />

      <WhyWorkSection />
      <PositionsSection onApply={setPrefillPosition} />

      <section id="apply" aria-labelledby="apply-heading" className="menu-section mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-24">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.28em] text-ember">
            <span className="inline-block h-px w-10 bg-ember" aria-hidden="true" />
            Application
          </p>
          <h2 id="apply-heading" className="mt-4 font-heading text-4xl font-black uppercase tracking-tight text-bone sm:text-5xl">
            Throw Your Hat In
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <ApplicationForm prefillPosition={prefillPosition} />
        </Reveal>
      </section>
    </>
  );
}
