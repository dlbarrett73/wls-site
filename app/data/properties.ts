// Simple in-memory data store for property pages.
// Add future properties by adding new entries to `propertiesBySlug`.

export type MediaItem =
  | { type: "image"; src: string; alt?: string; caption?: string }
  | { type: "video"; src: string; caption?: string }; // mp4 or hosted file

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

  // --- NEW FIELDS ---
  photos?: string[]; // gallery images
  trailCam?: MediaItem[]; // trail-cam images/videos
  droneVideoUrl?: string; // YouTube share URL or direct mp4
  documents?: { label: string; href: string }[]; // e.g., “Download Sales Packet (PDF)”
  facts?: Record<string, string | number>; // quick facts (taxes, frontage, access notes, etc.)
  seo?: {
    description?: string;
    keywords?: string[];
    image?: string; // OG image override
  };
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
    map: { q: "Mahaffey, PA" },
    ctaHref: "/contact",
    ctaLabel: "Request a Private Tour",

    // --- NEW DATA ---
    photos: [
      "/images/properties/mahaffey-136/gallery/plot-1.jpg",
      "/images/properties/mahaffey-136/gallery/plot-2.jpg",
      "/images/properties/mahaffey-136/gallery/trail-1.jpg",
      "/images/properties/mahaffey-136/gallery/view-1.jpg",
      "/images/properties/mahaffey-136/gallery/blind-1.jpg",
    ],
    trailCam: [
      { type: "image", src: "/images/properties/mahaffey-136/trailcam/buck-1.jpg", alt: "Mature buck at dusk", caption: "Early October movement" },
      { type: "image", src: "/images/properties/mahaffey-136/trailcam/buck-2.jpg", alt: "Heavy 8-point working a scrape", caption: "Primary scrape line" },
      { type: "video", src: "/videos/properties/mahaffey-136/trailcam/buck-working-licking-branch.mp4", caption: "Nighttime corridor activity" },
    ],
    // YouTube link OR direct MP4. YouTube is easiest to embed nicely:
    droneVideoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    documents: [
      { label: "Download Sales Packet (PDF)", href: "/docs/mahaffey-136-sales-packet.pdf" },
      { label: "Property Map (PDF)", href: "/docs/mahaffey-136-map.pdf" },
    ],
    facts: {
      County: "Clearfield",
      Township: "Bell",
      "Road Frontage": "US-219",
      Access: "Undetectable access via screened trail",
      Improvements: "Food plots, 2 Stryker blinds, interior trails",
      Taxes: "$1,950 (est.)",
      "Nearest Town": "Mahaffey",
      "Power/Utilities": "Nearby",
    },
    seo: {
      description:
        "Turnkey 136.38± acre whitetail hunting property in Clearfield County with food plots, access trails, blinds, and proven deer movement. Private tours by request.",
      keywords: [
        "whitetail hunting land for sale",
        "Pennsylvania hunting property",
        "Clearfield County land",
        "turnkey hunting property",
      ],
      image: "/images/properties/mahaffey-136/hero.jpg",
    },
  },
};
