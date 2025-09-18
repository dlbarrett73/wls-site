// app/data/properties.ts
import type { Property } from "../types/property";

export const propertiesBySlug: Record<string, Property> = {
  "mahaffey-131": {
    slug: "mahaffey-131",
    title: "Mahaffey 131 — Bell Twp, PA",
    price: "$500,000",
    location: "Bell Township, Clearfield County, PA",
    acres: 131

    // ✅ Paths point to /public/images/... so Next.js can serve them
    heroUrl: "/images/properties/mahaffey-131/hero.jpg",
    gallery: [
      "/images/properties/mahaffey-131/hero.jpg"
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
