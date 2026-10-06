import { Clock, MapPinned, ReceiptText, Timer } from "lucide-react";
import { Reveal } from "@/components/Motion";
import { deliveryInfo } from "@/data/site";

const infoIcons = [MapPinned, ReceiptText, ReceiptText, Timer, Clock];

export function DeliveryInfoGrid() {
  return (
    <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
      {deliveryInfo.map((d, i) => {
        const Icon = infoIcons[i] ?? ReceiptText;
        return (
          <Reveal key={d.label} delay={i * 0.06}>
            <div className="flex h-full flex-col bg-panel p-6" data-testid={`delivery-info-${i}`}>
              <Icon className="h-5 w-5 text-ember" aria-hidden="true" />
              <h2 className="mt-4 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-fog">
                {d.label}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-bone/85">{d.value}</p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
