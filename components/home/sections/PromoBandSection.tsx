import { promoItems } from "@/data/site";

export function PromoBandSection() {
  const half = [...promoItems, ...promoItems, ...promoItems];
  return (
    <section aria-label="Current promotions" className="overflow-hidden bg-copper py-5" data-testid="promo-band">
      <div className="marquee-track-slow flex w-max items-center whitespace-nowrap">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center">
            {half.map((p, i) => (
              <span key={`${copy}-${i}`} className="flex items-center">
                <span className="px-8 font-heading text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
                  {p}
                </span>
                <span className="inline-block h-2.5 w-2.5 rotate-45 bg-graphite" aria-hidden="true" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
