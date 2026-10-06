"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { MaskedLines, Reveal } from "@/components/Motion";
import { useAppReady } from "@/components/Loader";
import { CallButton, CtaPrimary } from "@/components/ui/Button";
import { HeroFoodCard } from "@/components/home/sections/HeroFoodCard";
import { useTodayHours } from "@/components/TodayHours";
import { cn } from "@/lib/utils";
import { img, site } from "@/data/site";

export function HeroSection() {
  const ready = useAppReady();
  const todayHours = useTodayHours();
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 700], [0, 110]);
  const yCard = useTransform(scrollY, [0, 700], [0, -70]);
  // the card only drifts when it sits beside the copy; stacked on mobile it would ride up over the info strip
  const [sideBySide, setSideBySide] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => setSideBySide(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden" aria-label="Welcome">
      <motion.div className="absolute inset-0" style={{ y: yBg }} aria-hidden="true">
        <div className="relative h-[115%] w-full">
          <Image
            src={img.crowdBar}
            alt=""
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-graphite/80 via-graphite/85 to-graphite" />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite/90 via-graphite/40 to-transparent" />
      </motion.div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-5 pb-20 pt-24 sm:px-8 sm:pt-32 lg:grid-cols-12 lg:items-center lg:pb-24">
        <div className="lg:col-span-7">
          {todayHours && (
            <Reveal when={ready}>
              <p
                data-testid="hero-open-badge"
                className="inline-flex items-center gap-2.5 border border-line bg-panel/80 px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-bone/90 backdrop-blur"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
                </span>
                Open today · {todayHours}
              </p>
            </Reveal>
          )}

          <p className={cn("font-mono text-xs font-semibold uppercase tracking-[0.3em] text-ember", todayHours && "mt-8")}>
            Maryland Heights, MO · Sports Bar &amp; Grill
          </p>
          <MaskedLines
            as="h1"
            when={ready}
            lines={[
              "Good Food.",
              "Good Drinks.",
              <span key="l3" className="text-outline-copper">Good Times.</span>,
            ]}
            className="mt-4 font-heading text-[clamp(2.75rem,7vw,5.75rem)] font-black uppercase leading-[0.95] tracking-tight text-bone"
          />
          <Reveal delay={0.45} when={ready}>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-bone/70 md:text-lg">
              Game day, every day. Gateway City jumbo wings, smash burgers,
              St. Louis T-RAV and cold drinks — with every game on our big screens.
            </p>
          </Reveal>

          <Reveal delay={0.55} when={ready}>
            <div className="mt-9 flex flex-wrap gap-4">
              <CtaPrimary to="/menus" testId="hero-view-menu-button">
                View Menu
              </CtaPrimary>
              <CallButton label="Call to Order" testId="hero-call-button" dominant={false} />
            </div>
          </Reveal>

          <Reveal delay={0.65} when={ready}>
            <dl
              className="mt-14 grid grid-cols-1 gap-6 border-t border-bone/15 pt-7 sm:grid-cols-3"
              data-testid="hero-info-strip"
            >
              {[
                {
                  dt: "Hours",
                  dd: (
                    <ul className="space-y-1">
                      {site.hours.map((h) => (
                        <li key={h.days}>
                          <span className="text-fog">{h.short}</span> {h.time}
                        </li>
                      ))}
                    </ul>
                  ),
                },
                { dt: "Location", dd: `${site.address.street}, ${site.address.city}` },
                { dt: "Phone", dd: site.phoneDisplay, tel: true },
              ].map((item) => (
                <div key={item.dt} className="border-l-2 border-ember/60 pl-4">
                  <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.26em] text-fog">
                    {item.dt}
                  </dt>
                  <dd className="mt-1.5 font-mono text-sm font-medium text-bone">
                    {item.tel ? (
                      <a href={site.phoneTel} className="transition-colors hover:text-ember" data-testid="hero-phone-link">
                        {item.dd}
                      </a>
                    ) : (
                      item.dd
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <motion.div
            style={sideBySide ? { y: yCard } : undefined}
            initial={{ opacity: 0, y: 60 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 1.1, delay: ready ? 0.5 : 0, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto max-w-sm lg:max-w-none"
          >
            <HeroFoodCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
