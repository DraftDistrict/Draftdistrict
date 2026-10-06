import { Reveal } from "@/components/Motion";
import { CallButton } from "@/components/ui/Button";
import { site } from "@/data/site";

export function DeliveryCallPanel() {
  return (
    <Reveal>
      <div className="flex flex-col items-start justify-between gap-6 border border-copper/40 bg-panel p-7 sm:flex-row sm:items-center lg:p-9" data-testid="delivery-call-panel">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-ember">
            Call to order delivery
          </p>
          <a
            href={site.phoneTel}
            data-testid="delivery-phone-link"
            className="mt-2 block font-heading text-4xl font-black tracking-tight text-bone transition-colors hover:text-ember sm:text-5xl"
          >
            {site.phoneDisplay}
          </a>
          <p className="mt-2 text-sm text-fog">Orders are currently accepted by phone only.</p>
        </div>
        <CallButton label="Call to Order" testId="delivery-call-button" className="shrink-0" />
      </div>
    </Reveal>
  );
}
