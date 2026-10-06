"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Phone } from "lucide-react";
import { SiFacebook, SiInstagram, SiTiktok } from "@icons-pack/react-simple-icons";
import { getLenis } from "@/lib/lenis";
import { ThemeToggle } from "@/components/ThemeToggle";
import { BrandLogo } from "@/components/BrandLogo";
import { navLinks, site } from "@/data/site";

const EASE = [0.16, 1, 0.3, 1] as const;
const links = [...navLinks, { to: "/order-now", label: "Order Now" }];

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const lenis = getLenis();
    if (open) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
      document.body.dataset.menuOpen = "true";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
      delete document.body.dataset.menuOpen;
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-menu"
          data-testid="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)", transitionEnd: { clipPath: "none" } }}
          exit={{ clipPath: ["inset(0 0 0% 0)", "inset(0 0 100% 0)"] }}
          transition={{ duration: 0.55, ease: EASE }}
          data-lenis-prevent
          className="fixed inset-0 z-[60] flex flex-col overflow-y-auto overscroll-contain bg-graphite lg:hidden"
        >
          <div className="glow-mobile-menu pointer-events-none fixed inset-0" aria-hidden="true" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, delay: 0.2 }}
            className="safe-top sticky top-0 z-10 bg-graphite"
          >
            <div className="flex h-16 items-center justify-between px-5">
              <BrandLogo className="h-12" sizes="140px" />
              <div className="flex items-center gap-3">
                <ThemeToggle />
                <button
                  type="button"
                  data-testid="mobile-menu-close"
                  aria-label="Close navigation menu"
                  onClick={onClose}
                  className="group relative flex h-11 w-11 items-center justify-center text-bone transition-colors hover:text-ember"
                >
                  <span className="absolute h-[2px] w-7 rotate-45 bg-current" aria-hidden="true" />
                  <span className="absolute h-[2px] w-7 -rotate-45 bg-current" aria-hidden="true" />
                </button>
              </div>
            </div>
          </motion.div>

          <nav className="relative flex flex-1 flex-col justify-center px-8 pt-6" aria-label="Mobile">
            {links.map((l, i) => (
              <span key={l.to} className="block overflow-hidden border-b border-line/70">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "110%" }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.06, ease: EASE }}
                >
                  <Link
                    href={l.to}
                    onClick={onClose}
                    data-testid={`mobile-nav-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className="group flex min-h-12 items-center gap-4 py-3.5"
                  >
                    <span className="font-mono text-xs font-medium text-ember">
                      0{i + 1}
                    </span>
                    <span className="font-heading text-3xl font-black uppercase tracking-tight text-bone transition-colors group-hover:text-ember group-active:text-ember">
                      {l.label}
                    </span>
                    <ArrowUpRight className="ml-auto h-5 w-5 shrink-0 text-fog transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ember" aria-hidden="true" />
                  </Link>
                </motion.span>
              </span>
            ))}
          </nav>

          <motion.div
            className="menu-footer-pad relative px-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.55, ease: EASE }}
          >
            <a
              href={site.phoneTel}
              data-testid="mobile-menu-call-button"
              aria-label={`Call ${site.fullName} at ${site.phoneDisplay} to place your order`}
              className="flex min-h-14 items-center justify-center gap-2.5 bg-copper font-mono text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_0_32px_rgba(220,38,38,0.35)] transition-colors active:bg-copper-deep"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call {site.phoneDisplay}
            </a>
            <div className="mt-6 flex flex-col gap-4">
              <ul className="space-y-1 font-mono text-[11px] uppercase tracking-[0.2em] text-fog">
                {site.hours.map((h) => (
                  <li key={h.days}>
                    {h.short} · {h.time}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3">
                {[
                  { Icon: SiFacebook, label: "Facebook", href: site.socials.facebook, id: "mobile-menu-social-facebook" },
                  { Icon: SiInstagram, label: "Instagram", href: site.socials.instagram, id: "mobile-menu-social-instagram" },
                  { Icon: SiTiktok, label: "TikTok", href: site.socials.tiktok, id: "mobile-menu-social-tiktok" },
                ].map(({ Icon, label, href, id }) => (
                  <a
                    key={id}
                    href={href}
                    data-testid={id}
                    aria-label={`${site.name} on ${label}`}
                    className="flex h-10 w-10 items-center justify-center border border-line text-fog transition-colors hover:border-ember hover:text-ember"
                  >
                    <Icon size={15} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
