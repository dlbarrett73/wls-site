// app/types/property.ts
export type Property = {
  slug: string;
  title: string;
  price?: string;
  location?: string;
  acres?: number;

  // Added for hero image + fallback logic
  heroUrl?: string;      // optional: we’ll use it when present
  gallery?: string[];    // optional: first image becomes fallback if heroUrl missing

  highlights?: string[];
  description?: string;
  coordinates?: { lat: number; lng: number };
};
