// app/data/properties.ts

export type Property = {
  slug: string;
  title: string;
  price?: string;
  acres?: number | string;
  heroSrc?: string;      // either heroSrc
  heroImage?: string;    // ...or heroImage (both supported by pages)
  gallery?: string[];
  location?: string;
  highlights?: string[];
  description?: string;
  mapEmbedUrl?: string;
};

export const propertiesBySlug: Record<string, Property> = {
  "mahaffey-131": {
    slug: "mahaffey-131",
    title: "Mahaffey 131",
    price: "$500,000",
    acres: 131, // ✅ number, with comma at the end
    heroSrc: "/images/properties/mahaffey-131/hero.jpg", // ✅ updated folder/path
    location: "Mahaffey, PA",
    highlights: [
      "Frontage + undetectable access from US 219",
      "Diverse habitat: benches, cover, and food plot potential",
      "Proven travel corridors and stand locations",
    ],
    gallery: [
      "/images/properties/mahaffey-131/hero.jpg",
      // add more images here as you upload them
    ],
    // mapEmbedUrl: "https://www.google.com/maps/embed?pb=...", // optional
    // description: "Optional longer description of the property.",
  },

  // Add more properties here as needed, using the same shape
};

export default propertiesBySlug;
