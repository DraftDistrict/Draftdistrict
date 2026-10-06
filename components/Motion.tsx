"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

export function MaskedLines({
  lines,
  className,
  lineClassName,
  delay = 0.05,
  as: Tag = "span",
  when = true,
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  as?: "span" | "h1" | "h2";
  when?: boolean;
}) {
  const reduce = useReducedMotion();
  const MTag = motion.create(Tag);
  return (
    <MTag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.09em] -mb-[0.09em]">
          <motion.span
            className={cn("block will-change-transform", lineClassName)}
            initial={{ y: reduce ? 0 : "112%" }}
            animate={{ y: when || reduce ? 0 : "112%" }}
            transition={{ duration: 0.9, delay: delay + i * 0.12, ease: EASE }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </MTag>
  );
}

export function Reveal({
  children,
  delay = 0,
  className,
  y = 28,
  when,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  when?: boolean;
}) {
  const reduce = useReducedMotion();
  const hidden = { opacity: 0, y: reduce ? 0 : y };
  const shown = { opacity: 1, y: 0 };
  return (
    <motion.div
      className={className}
      initial={hidden}
      {...(when === undefined
        ? { whileInView: shown, viewport: { once: true, margin: "-60px" } }
        : { animate: when ? shown : hidden })}
      transition={{ duration: 0.75, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
