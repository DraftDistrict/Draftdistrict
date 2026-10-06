import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { OrderCallPanel } from "@/components/order-now/OrderCallPanel";
import { OrderSteps } from "@/components/order-now/OrderSteps";
import { LocationsSection } from "@/components/order-now/LocationsSection";

export const metadata: Metadata = {
  title: "Order Now — Call to Order · The Draft District Sports Bar & Grill",
  description:
    "Ready to order? Give us a call and we'll take care of the rest. Orders are currently accepted by phone only.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Order Now · By Phone"
        lines={["Ready to", <span key="q" className="text-outline-copper">Order?</span>]}
        sub="Give us a call and we'll take care of the rest."
      />

      <section aria-label="Call to order" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <OrderCallPanel />
        <OrderSteps />
      </section>

      <LocationsSection />
    </>
  );
}
