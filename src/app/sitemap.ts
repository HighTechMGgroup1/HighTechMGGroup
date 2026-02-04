import { MetadataRoute } from "next";

const baseUrl = "https://hightechmg.in";

/* Example data (later DB / CMS se aayega) */
const projects = [
  { slug: "business-website" },
  { slug: "admin-dashboard" },
  { slug: "fullstack-platform" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/services",
    "/projects",
    "/work",
    "/pricing",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const staticUrls = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: page === "" ? 1.0 : 0.8,
  }));

  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticUrls, ...projectUrls];
}
