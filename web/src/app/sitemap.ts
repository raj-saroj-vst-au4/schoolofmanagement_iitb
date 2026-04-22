import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://som.iitb.ac.in";
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/#programs`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/placements`, lastModified: now, changeFrequency: "yearly", priority: 0.9 },
    { url: `${base}/#alumni`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#faculty`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#research`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];
}
