"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BrandEmblem } from "@/components/BrandLogo";

export const AppReadyContext = createContext(false);
export const useAppReady = () => useContext(AppReadyContext);

const EASE = [0.16, 1, 0.3, 1] as const;

function FlapDigit({ value }: { value: number }) {
  return (
    <div className="perspective-500 relative h-16 w-11 sm:h-24 sm:w-16">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={value}
          initial={{ rotateX: -92, opacity: 0.25 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: 92, opacity: 0.25 }}
          transition={{ duration: 0.32, ease: "easeOut" }}
          className="preserve-3d backface-hidden absolute inset-0 flex items-center justify-center border border-line bg-panel-2 font-heading text-4xl font-black text-bone sm:text-6xl"
        >
          {value}
        </motion.span>
      </AnimatePresence>
      <span className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-black/60" aria-hidden="true" />
      <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-white/[0.05]" aria-hidden="true" />
    </div>
  );
}

export function Loader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const start = performance.now();
    const duration = 1800;
    let raf = 0;
    let timer = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setProgress(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else timer = window.setTimeout(onDone, 350);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [onDone]);

  const digits = [Math.floor(progress / 100), Math.floor(progress / 10) % 10, progress % 10];

  return (
    <motion.div
      data-testid="app-loader"
      role="status"
      aria-label="Loading The Draft District Sports Bar and Grill"
      exit={{ y: "-100%" }}
      transition={{ duration: 0.7, ease: EASE }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-graphite"
    >
      <div className="glow-loader pointer-events-none absolute inset-0" aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="mb-7"
      >
        <BrandEmblem className="h-24 sm:h-32" sizes="(min-width: 640px) 110px, 82px" priority />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="flex items-center gap-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-fog"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
        </span>
        Game day is loading
      </motion.p>

      <div className="perspective-900 mt-9">
        <motion.div
          initial={{ opacity: 0, y: 26, rotateX: 22 }}
          animate={{ opacity: 1, y: 0, rotateX: 9 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="border border-line bg-panel px-6 py-5 shadow-[0_0_90px_rgba(220,38,38,0.22)] sm:px-9 sm:py-7"
        >
          <div className="flex items-end gap-1.5 sm:gap-2.5">
            {digits.map((d, i) => (
              <FlapDigit key={i} value={d} />
            ))}
            <span className="pb-1 pl-2 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-ember sm:text-sm">
              % Set
            </span>
          </div>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="mt-9 font-mono text-[10px] font-medium uppercase tracking-[0.34em] text-fog sm:text-[11px]"
      >
        Good Food · Good Drinks · Good Times
      </motion.p>

      <div className="absolute inset-x-8 bottom-16 sm:inset-x-20" aria-hidden="true">
        <div className="relative h-[2px] w-full bg-line">
          <span
            className="absolute inset-y-0 left-0 bg-ember transition-[width] duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
          {[0, 25, 50, 75, 100].map((t) => (
            <span key={t} className="absolute -top-1 h-2.5 w-px bg-fog/40" style={{ left: `${t}%` }} />
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-fog">
          <span>Game Day Every Day</span>
          <span>The Draft District<span className="hidden sm:inline"> · Sports Bar &amp; Grill</span></span>
        </div>
      </div>
    </motion.div>
  );
}
