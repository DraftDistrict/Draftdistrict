"use client";

import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { AnimatePresence, motion, useReducedMotion, useSpring } from "motion/react";
import { img } from "@/data/site";

const heroShots = [
  { src: img.draftDistrictBurger, alt: "The Draft District Burger topped with bacon and an onion ring" },
  { src: img.wingsGlaze, alt: "Gateway City jumbo wings with celery and carrots" },
  { src: img.tRav, alt: "St. Louis toasted ravioli" },
  { src: img.beerGlasses, alt: "Two cold draft beers on a dark bar" },
];

export function HeroFoodCard() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const resumeTimer = useRef(0);
  const rx = useSpring(0, { stiffness: 160, damping: 18 });
  const ry = useSpring(0, { stiffness: 160, damping: 18 });

  useEffect(() => {
    if (reduce || paused) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % heroShots.length), 3800);
    return () => window.clearInterval(id);
  }, [reduce, paused]);

  useEffect(() => () => window.clearTimeout(resumeTimer.current), []);

  function go(dir: number) {
    setIndex((i) => (i + dir + heroShots.length) % heroShots.length);
    setPaused(true);
    window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => setPaused(false), 9000);
  }

  function onMove(e: MouseEvent<HTMLDivElement>) {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 10);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 10);
  }

  function onLeave() {
    rx.set(0);
    ry.set(0);
  }

  const shot = heroShots[index];

  return (
    <motion.div
      className="perspective-1000 cursor-grab active:cursor-grabbing"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      data-testid="hero-food-card"
      drag="x"
      dragDirectionLock
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.14}
      onDragEnd={(_, info) => {
        if (info.offset.x <= -60 || info.velocity.x <= -400) go(1);
        else if (info.offset.x >= 60 || info.velocity.x >= 400) go(-1);
      }}
      role="group"
      aria-roledescription="carousel"
      aria-label="Featured dishes"
    >
      <motion.div
        style={{ rotateX: rx, rotateY: ry, rotate: 2 }}
        className="preserve-3d group/card relative will-change-transform"
      >
        <div className="relative overflow-hidden border border-bone/15 shadow-[0_0_110px_rgba(220,38,38,0.28)]">
          <div className="perspective-700 relative aspect-[4/5] w-full" data-testid="hero-food-image">
            <AnimatePresence mode="popLayout" initial={false}>
              {/* Framer Motion drives this element's transform/exit animations directly,
                  which next/image's wrapper doesn't expose — a plain <img> is intentional here. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <motion.img
                key={index}
                src={shot.src}
                alt={shot.alt}
                loading="eager"
                draggable={false}
                initial={{ rotateY: 85, opacity: 0.25 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -85, opacity: 0.25 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="backface-hidden absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-graphite/70 via-transparent to-transparent" aria-hidden="true" />
          <p className="absolute bottom-4 left-4 flex items-center gap-2 bg-graphite/80 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-bone backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" aria-hidden="true" />
            Every game, big screens
          </p>
          <p className="absolute bottom-4 right-4 font-mono text-[10px] font-semibold tracking-[0.22em] text-bone/80" aria-live="polite">
            {String(index + 1).padStart(2, "0")} / {String(heroShots.length).padStart(2, "0")}
          </p>
        </div>
        <p
          className="house-favorite-badge absolute -right-3 -top-3 bg-copper px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white"
          aria-hidden="true"
        >
          House Favorite
        </p>
      </motion.div>
    </motion.div>
  );
}
