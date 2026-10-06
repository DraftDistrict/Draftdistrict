import type { Metadata } from "next";
import { HomeView } from "@/components/home/HomeView";

export const metadata: Metadata = {
  title: "The Draft District Sports Bar & Grill — Maryland Heights, MO · Game Day Every Day",
  description:
    "Sports bar & grill on Dorsett Rd in Maryland Heights, MO. Gateway City jumbo wings, smash burgers, T-RAV and cold drinks, with every game on our big screens. Call to order.",
};

export default function Page() {
  return <HomeView />;
}
