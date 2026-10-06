import { Reveal } from "@/components/Motion";
import { CallButton, CtaOutline } from "@/components/ui/Button";
import { site } from "@/data/site";

export function OrderCallPanel() {
  return (
    <Reveal>
      <div className="relative overflow-hidden border border-copper/40 bg-panel p-8 text-center lg:p-14" data-testid="order-call-panel">
        <div className="glow-order-panel pointer-events-none absolute inset-0" aria-hidden="true" />
        <p className="relative font-mono text-xs font-semibold uppercase tracking-[0.3em] text-ember">
          Order Now — Call to Order
        </p>
        <a
          href={site.phoneTel}
          data-testid="order-phone-link"
          aria-label={`Call ${site.fullName} at ${site.phoneDisplay} to place your order`}
          className="relative mt-4 inline-block font-heading text-[clamp(2.25rem,7vw,5rem)] font-black tracking-tight text-bone transition-colors hover:text-ember"
        >
          {site.phoneDisplay}
        </a>
        <p className="relative mt-4 text-sm text-fog">
          Orders are currently accepted by phone only.
        </p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-4">
          <CallButton label="Call Now" testId="order-call-now-button" className="min-h-14 px-10 text-sm" />
          <CtaOutline to="/menus" testId="order-view-menu">View Menu</CtaOutline>
        </div>
      </div>
    </Reveal>
  );
}
