// app/data/properties.ts
import type { Property } from "../types/property";

export const propertiesBySlug: Record<string, Property> = {
  "mahaffey-136": {
    slug: "mahaffey-136",
    title: "Mahaffey 136 — Bell Twp, PA",
    price: "$XXX,XXX",
    location: "Bell Township, Clearfield County, PA",
    acres: 136.38,

    // Provide at least one of these:
    heroUrl: "/properties/mahaffey-136/hero.jpg",
    gallery: [
      "/properties/mahaffey-136/hero.jpg",
      "/properties/mahaffey-136/plot-1.jpg",
      "/properties/mahaffey-136/blind-1.jpg",
    ],

    highlights: [
      "Undetectable access from US 219",
      "Two Stryker blinds installed",
      "Established food plots",
      "Near the borough of Mahaffey, PA",
    ],
    description:
      "Turnkey whitetail property engineered for giants and designed for effortless access, strategic stand placement, and year-round attraction.",
  },

  // Add more properties in this same shape…
};

