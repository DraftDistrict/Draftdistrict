import { SportsTicker } from "@/components/SportsTicker";
import { HeroSection } from "@/components/home/sections/HeroSection";
import { QuickActionsSection } from "@/components/home/sections/QuickActionsSection";
import { SignatureFoodSection } from "@/components/home/sections/SignatureFoodSection";
import { ExperienceSection } from "@/components/home/sections/ExperienceSection";
import { UpcomingEventsSection } from "@/components/home/sections/UpcomingEventsSection";
import { PromoBandSection } from "@/components/home/sections/PromoBandSection";
import { ReviewsSection } from "@/components/home/sections/ReviewsSection";
import { VisitUsSection } from "@/components/home/sections/VisitUsSection";
import { tickerItems } from "@/data/site";

export function HomeView() {
  return (
    <>
      <HeroSection />
      <SportsTicker items={tickerItems} />
      <QuickActionsSection />
      <SignatureFoodSection />
      <ExperienceSection />
      <UpcomingEventsSection />
      <PromoBandSection />
      <ReviewsSection />
      <VisitUsSection />
    </>
  );
}
