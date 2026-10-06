import type { Metadata, Viewport } from "next";
import { ClientShell } from "@/components/ClientShell";
import { site } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.fullName} — Maryland Heights, MO · Game Day Every Day`,
    template: `%s`,
  },
  description: `${site.fullName} — sports bar in Maryland Heights, MO (St. Louis County) serving Gateway City jumbo wings, smash burgers, T-RAV and cold drinks, with every game on our big screens. View the menu, see events, and call to order.`,
  applicationName: site.fullName,
  openGraph: {
    type: "website",
    siteName: site.fullName,
    title: site.fullName,
    description: "Good food. Good drinks. Good times. Game day every day at 12068 Dorsett Rd, Maryland Heights, MO — call to order.",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // draw under the notch / Safari toolbars; fixed bars pad themselves with env(safe-area-inset-*)
  viewportFit: "cover",
  themeColor: "#0D0F12",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["Restaurant", "BarOrPub"],
  name: site.fullName,
  slogan: site.slogan,
  url: site.url,
  logo: `${site.url}/brand/emblem.png`,
  image: `${site.url}/opengraph-image.jpg`,
  hasMenu: `${site.url}/menus`,
  servesCuisine: ["American", "Bar & Grill", "Wings", "Burgers"],
  priceRange: "$$",
  telephone: site.phoneTel.replace("tel:", ""),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  openingHours: ["Mo-Tu 11:00-23:00", "We-Su 11:00-01:00"],
  acceptsReservations: "False",
};

const themeInitScript = `
try {
  var savedTheme = localStorage.getItem("dd-theme");
  document.documentElement.dataset.theme = savedTheme === "light" ? "light" : "dark";
} catch (e) {
  document.documentElement.dataset.theme = "dark";
}
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <style>{`
          html, body { margin: 0; }
          html:not([data-theme="light"]) { color-scheme: dark; }
          html:not([data-theme="light"]), html:not([data-theme="light"]) body { background: #0D0F12; }
          html[data-theme="light"], html[data-theme="light"] body { background: #F6F1E8; }
        `}</style>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
