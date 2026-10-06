import type { Metadata } from "next";
import { EventsView } from "@/components/events/EventsView";

export const metadata: Metadata = {
  title: "Events & Game Nights — The Draft District Sports Bar & Grill",
  description:
    "There's always something happening — game nights, trivia, live music and weekly specials at The Draft District in Maryland Heights, MO.",
};

export default function Page() {
  return <EventsView />;
}
