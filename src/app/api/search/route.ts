import { source } from "@/lib/source";
import { createSearchAPI } from "fumadocs-core/search/server";

// Make this route static so Next.js can include it during `output: 'export'` builds
export const dynamic = "force-static";

export const { GET } = createSearchAPI("advanced", {
  language: "english",
  indexes: source.getPages().map((page) => ({
    title: page.data.title,
    description: page.data.description,
    url: page.url,
    id: page.url,
    structuredData: page.data.structuredData,
    tag: "<value>",
  })),
});
