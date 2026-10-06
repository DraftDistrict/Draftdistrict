import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { DeliveryCallPanel } from "@/components/delivery/DeliveryCallPanel";
import { DeliveryInfoGrid } from "@/components/delivery/DeliveryInfoGrid";
import { HowItWorksSection } from "@/components/delivery/HowItWorksSection";
import { img } from "@/data/site";

export const metadata: Metadata = {
  title: "Delivery — The Draft District Sports Bar & Grill",
  description:
    "Your favorites, brought to you. Delivery orders are placed directly with the restaurant by phone — call to order.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Delivery · By Phone"
        lines={["Your Favorites,", "Brought to You."]}
        sub="Delivery orders are currently placed directly with the restaurant by phone. No apps, no middlemen — just call."
        image={img.burgerSpread}
        imageAlt="Table spread of burgers, nachos and craft beers"
      />

      <section aria-label="Delivery details" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <DeliveryCallPanel />
        <DeliveryInfoGrid />
      </section>

      <HowItWorksSection />
    </>
  );
}
