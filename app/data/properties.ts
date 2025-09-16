// Simple in-memory data store for property pages.
// Start simple so builds succeed. We'll add gallery/trail-cam next.

export type Property = {
  slug: string;
  title: string;
  price: number; // in USD
  acres?: number;
  location: string; // "City, State"
  heroImage: string; // public path or remote URL
  highlights: string[];
  // Either provide lat/lng OR a Google Maps query string (address)
  map: { lat: number; lng: number } | { q: string };
  ctaHref?: string; // defaults to "/book"
  ctaLabel?: string; // defaults to "Book a Free Strategy Call"

  // NEW (optional)
  photos?: string[]; // gallery images
};

export const propertiesBySlug: Record<string, Property> = {
  "mahaffey-136": {
    slug: "mahaffey-136",
    title: "Mahaffey 136 • Clearfield County, PA",
    price: 500000,
    acres: 136.38,
    location: "Mahaffey, Pennsylvania",
    heroImage: "/images/properties/mahaffey-136/hero.jpg",
    highlights: [
      "136.38± acres with frontage and undetectable access from US-219",
      "2 new Stryker blinds + established food plots",
      "Proven deer travel with bedding/edge diversity",
      "Minutes to Mahaffey; easy access yet secluded",
      "Turnkey whitetail design — hunt big bucks this season",
    ],
    map: { q: "Mahaffey, PA" },
    ctaHref: "/contact",
    ctaLabel: "Request a Private Tour",

    // NEW (sample gallery paths — update to your real files)
    photos: [
      "/images/properties/mahaffey-136/gallery/plot-1.jpg",
      "/images/properties/mahaffey-136/gallery/plot-2.jpg",
      "/images/properties/mahaffey-136/gallery/trail-1.jpg",
      "/images/properties/mahaffey-136/gallery/view-1.jpg",
      "/images/properties/mahaffey-136/gallery/blind-1.jpg",
    ],
  },
};
