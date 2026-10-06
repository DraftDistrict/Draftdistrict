import type { Metadata } from "next";
import { MenusView } from "@/components/menus/MenusView";

export const metadata: Metadata = {
  title: "Menus — The Draft District Sports Bar & Grill",
  description:
    "Gateway City jumbo wings, appetizers like T-RAV, burgers, sandwiches, wraps, pizza, tacos, quesadillas, pastas, salads, entrées and desserts. Call to order.",
};

export default function Page() {
  return <MenusView />;
}
