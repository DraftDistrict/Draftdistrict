import type { Metadata } from "next";
import { JobsView } from "@/components/jobs/JobsView";

export const metadata: Metadata = {
  title: "Join the Team — Jobs at The Draft District Sports Bar & Grill",
  description:
    "Great food and great game days start with great people. See open positions and apply to join the team.",
};

export default function Page() {
  return <JobsView />;
}
