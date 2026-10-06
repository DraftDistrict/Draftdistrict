import Link from "next/link";
import { Navigation, Phone, UtensilsCrossed } from "lucide-react";
import { site } from "@/data/site";

export function MobileActionBar() {
  return (
    <nav
      className="safe-bottom fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-line bg-graphite md:hidden"
      aria-label="Quick actions"
      data-testid="mobile-action-bar"
    >
      <Link
        href="/menus"
        data-testid="mobile-bar-menu"
        className="flex min-h-16 flex-col items-center justify-center gap-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-bone/80 transition-colors hover:text-ember"
      >
        <UtensilsCrossed className="h-5 w-5" aria-hidden="true" />
        Menu
      </Link>
      <a
        href={site.phoneTel}
        data-testid="mobile-bar-call"
        aria-label={`Call ${site.fullName} at ${site.phoneDisplay} to place your order`}
        className="flex min-h-16 flex-col items-center justify-center gap-1 bg-copper font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-colors active:bg-copper-deep"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        Call
      </a>
      <a
        href={site.directionsUrl}
        target="_blank"
        rel="noreferrer"
        data-testid="mobile-bar-directions"
        className="flex min-h-16 flex-col items-center justify-center gap-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-bone/80 transition-colors hover:text-ember"
      >
        <Navigation className="h-5 w-5" aria-hidden="true" />
        Directions
      </a>
    </nav>
  );
}
