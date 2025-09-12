// lib/properties.ts

export type Property = {
  id: string;
  title: string;
  acres: number;
  county: string;
  state: string;
  price?: string;
  image?: string;
  slug?: string;
  highlights: string[];
  description?: string;
  gallery?: string[];
  mapEmbedUrl?: string;
};

export const PROPERTIES: Property[] = [
  {
    id: "ALLEGHENY-RIDGE-54",              // any unique id (internal)
    title: "Allegheny Ridge 54",           // DISPLAY TITLE
    acres: 54,                             // NUMBER ONLY
    county: "Armstrong",                   // COUNTY
    state: "PA",                           // STATE (2 letters)
    price: "$329,000",                     // OPTIONAL (string with $ and commas)
    image: "/props/allegheny-ridge.jpg",   // HERO IMAGE in /public/props
    slug: "allegheny-ridge-54",            // URL slug — no spaces, lowercase-hyphens
    highlights: [
      "Access-first design with undetectable entry/exit",
      "Food plot system and edge diversity for daylight movement",
      "Ready-to-hunt stand sites sequenced for prevailing winds",
    ],
    description:
      "Engineered for daylight movement with access-first approach, strategic food/cover placement, and stand sites aligned to prevailing winds. Timber and topography create natural funnels and low-pressure bedding.",
    gallery: [
      "/props/allegheny-ridge-1.jpg",
      "/props/allegheny-ridge-2.jpg",
      "/props/allegheny-ridge-3.jpg",
    ],
    // Optional: Google Maps embed (replace URL with your map’s embed link)
    // To get it: Google Maps → search property → Share → Embed a map → copy src URL
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=YOUR_EMBED_URL_HERE",
  },
];


export function getBySlug(slug: string): Property | undefined {
  return PROPERTIES.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return PROPERTIES.filter((p) => !!p.slug).map((p) => p.slug!) as string[];
}
