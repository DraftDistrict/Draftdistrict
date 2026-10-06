"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { motion } from "motion/react";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { ThemeToggle } from "@/components/ThemeToggle";
import { BrandLogo } from "@/components/BrandLogo";
import { cn } from "@/lib/utils";
import { navLinks, site } from "@/data/site";

function Logo() {
  return (
    <Link href="/" data-testid="site-logo" className="flex shrink-0 items-center" aria-label={`${site.fullName} — home`}>
      <BrandLogo className="h-12 lg:h-14" sizes="160px" priority decorative />
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // The fixed <header> itself stays transparent: iOS Safari 26+ tints the status bar from a fixed
    // element's own background at the top edge (and would copy a transparent/glass one, letting the
    // page show through). It ignores absolutely positioned children, so the visible bar lives in one
    // and Safari falls back to the page background — the same color as the bar.
    <header className="safe-top fixed inset-x-0 top-0 z-50" data-testid="site-header">
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 -z-10 transition-all duration-300",
          // transparent over the hero at the top of the page; solid/glass once content scrolls beneath it
          scrolled ? "header-glass header-solid-touch header-line" : "border-b border-transparent"
        )}
      />
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:h-[72px]">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((l) => {
            const isActive = pathname === l.to;
            return (
              <Link
                key={l.to}
                href={l.to}
                data-testid={`nav-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={cn(
                  "group relative py-2 font-mono text-xs font-medium uppercase tracking-[0.18em] transition-colors duration-200",
                  isActive ? "text-ember" : "text-bone/80 hover:text-bone"
                )}
              >
                {l.label}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-px bg-ember transition-all duration-300",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneTel}
            data-testid="header-phone-link"
            className="hidden font-mono text-sm font-semibold text-bone/90 transition-colors hover:text-ember xl:block"
            aria-label={`Call us at ${site.phoneDisplay}`}
          >
            {site.phoneDisplay}
          </a>
          <ThemeToggle />
          <a
            href={site.phoneTel}
            data-testid="header-call-button"
            aria-label={`Call ${site.fullName} at ${site.phoneDisplay} to place your order`}
            className="hidden min-h-11 items-center gap-2 bg-copper px-5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-[0_0_28px_rgba(220,38,38,0.35)] transition-all duration-200 hover:bg-copper-deep active:scale-[0.97] sm:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call to Order
          </a>

          <button
            type="button"
            data-testid="mobile-menu-button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="group flex h-11 w-11 flex-col items-end justify-center gap-[7px] lg:hidden"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="block h-[2px] w-7 origin-center bg-bone transition-colors duration-200 group-hover:bg-ember"
              aria-hidden="true"
            />
            <motion.span
              animate={open ? { opacity: 0, x: 14 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              className="block h-[2px] w-[18px] bg-ember transition-[width] duration-300 group-hover:w-7"
              aria-hidden="true"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="block h-[2px] w-7 origin-center bg-bone transition-colors duration-200 group-hover:bg-ember"
              aria-hidden="true"
            />
          </button>
          <MobileMenu open={open} onClose={() => setOpen(false)} />
        </div>
      </div>
    </header>
  );
}
