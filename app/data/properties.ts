// app/data/properties.ts
import type { Property } from "../types/property";

export const propertiesBySlug: Record<string, Property> = {
  "mahaffey-136": {
    slug: "mahaffey-136",
    title: "Mahaffey 136 — Bell Twp, PA",
    price: "$XXX,XXX",
    location: "Bell Township, Clearfield County, PA",
    acres: 136.38,

    // ✅ Paths point to /public/images/... so Next.js can serve them
    heroUrl: "/images/properties/mahaffey-136/hero.jpg",
    gallery: [
      "/images/properties/mahaffey-136/hero.jpg",
      "/images/properties/mahaffey-136/plot-1.jpg",
      "/images/properties/mahaffey-136/blind-1.jpg",
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

  // Example: add another property in the same shape
  "example-tract": {
    slug: "example-tract",
    title: "Example Tract — Armstrong County, PA",
    price: "$YYY,YYY",
    location: "Armstrong County, PA",
    acres: 45.91,

    heroUrl: "/images/properties/example-tract/hero.jpg",
    gallery: [
      "/images/properties/example-tract/hero.jpg",
      "/images/properties/example-tract/plot-1.jpg",
    ],

    highlights: [
      "Secluded hunting tract with diverse habitat",
      "Rolling topography with multiple access points",
    ],

    description:
      "An ideal starter property for the serious whitetail hunter. Plenty of potential for food plots and stand placement.",
  },
};
