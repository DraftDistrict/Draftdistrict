import type { Metadata } from "next";
import { ContactView } from "@/components/contact/ContactView";

export const metadata: Metadata = {
  title: "Contact Us — The Draft District Sports Bar & Grill",
  description:
    "Questions, large parties, event inquiries or feedback — reach the restaurant by phone, email, or the contact form.",
};

export default function Page() {
  return <ContactView />;
}
