import type { MetadataRoute } from "next";
import { site } from "@/data/site";

const routes = ["", "/menus", "/delivery", "/events", "/jobs", "/contact", "/order-now"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.url;

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
