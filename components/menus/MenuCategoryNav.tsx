"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getLenis } from "@/lib/lenis";
import { cn } from "@/lib/utils";
import type { MenuCategory } from "@/data/site";

function ScrollArrow({ dir, visible, onClick }: { dir: "left" | "right"; visible: boolean; onClick: () => void }) {
  const Icon = dir === "left" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      aria-label={dir === "left" ? "Scroll categories left" : "Scroll categories right"}
      data-testid={`menu-nav-${dir}`}
      className={cn(
        "menu-nav-arrow absolute inset-y-0 z-10 flex w-16 items-center transition-opacity duration-200",
        dir === "left" ? "menu-nav-arrow-left left-0 justify-start pl-2 sm:pl-4" : "menu-nav-arrow-right right-0 justify-end pr-2 sm:pr-4",
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      )}
    >
      <span className="flex h-9 w-9 items-center justify-center border border-line bg-panel text-bone transition-colors hover:border-ember hover:text-ember">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>
    </button>
  );
}

export function MenuCategoryNav({
  categories,
  active,
  onSelect,
}: {
  categories: MenuCategory[];
  active: string;
  onSelect: (id: string) => void;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    const ro = new ResizeObserver(updateArrows);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      ro.disconnect();
    };
  }, [updateArrows]);

  // search can hide chips, which changes the scroll width without resizing the track
  useEffect(updateArrows, [categories, updateArrows]);

  // keep the active chip in view
  useEffect(() => {
    const el = trackRef.current;
    const chip = el?.querySelector<HTMLElement>(`[data-testid="menu-tab-${active}"]`);
    if (!el || !chip) return;
    const pad = 64;
    if (chip.offsetLeft - pad < el.scrollLeft) el.scrollTo({ left: chip.offsetLeft - pad, behavior: "smooth" });
    else if (chip.offsetLeft + chip.offsetWidth + pad > el.scrollLeft + el.clientWidth)
      el.scrollTo({ left: chip.offsetLeft + chip.offsetWidth + pad - el.clientWidth, behavior: "smooth" });
  }, [active]);

  const page = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.7, behavior: "smooth" });
  };

  return (
    <nav
      aria-label="Menu categories"
      data-testid="menu-category-nav"
      className="header-glass below-header sticky z-40 border-b border-line"
    >
      <div className="relative mx-auto max-w-7xl">
        <ScrollArrow dir="left" visible={canLeft} onClick={() => page(-1)} />
        <div ref={trackRef} className="no-scrollbar flex gap-1 overflow-x-auto scroll-smooth px-5 py-3 sm:px-8">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              data-testid={`menu-tab-${c.id}`}
              aria-current={active === c.id ? "true" : undefined}
              onClick={() => {
                onSelect(c.id);
                const lenis = getLenis();
                // land the heading just below the sticky header + this ribbon (taller on notched phones)
                const offset = -((trackRef.current?.closest("nav")?.getBoundingClientRect().bottom ?? 150) + 16);
                if (lenis) lenis.scrollTo(`#${c.id}`, { offset });
                else document.getElementById(c.id)?.scrollIntoView({ behavior: "smooth" });
              }}
              className={cn(
                "min-h-11 shrink-0 border px-3.5 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] transition-all duration-200 active:scale-[0.97]",
                active === c.id
                  ? "border-copper bg-copper text-white"
                  : "border-line text-bone/70 hover:border-ember/60 hover:text-bone"
              )}
            >
              {c.label}
            </button>
          ))}
        </div>
        <ScrollArrow dir="right" visible={canRight} onClick={() => page(1)} />
      </div>
    </nav>
  );
}
