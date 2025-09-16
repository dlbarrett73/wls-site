// Simple in-memory data store for property pages.
// Add future properties by adding new entries to `propertiesBySlug`.

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
};

export const propertiesBySlug: Record<string, Property> = {
  // --- EXAMPLE: Mahaffey 136 ---
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
    // Either lat/lng:
    // map: { lat: 40.8751, lng: -78.7304 },
    // Or a query string (address/coords); easiest if you don’t want to expose exact location:
    map: { q: "Mahaffey, PA" },
    ctaHref: "/contact",
    ctaLabel: "Request a Private Tour",
  },
};
