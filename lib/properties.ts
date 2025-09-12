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
  // Example listing — remove when you add real data:
  // {
  //   id: "elm-ridge-72",
  //   title: "Elm Ridge 72",
  //   acres: 72,
  //   county: "Clarion",
  //   state: "PA",
  //   price: "$329,000",
  //   image: "/props/elm-ridge.jpg",
  //   slug: "elm-ridge-72",
  //   highlights: [
  //     "Access-first layout, undetectable entry/exit",
  //     "Diverse edge + strategic food plot system",
  //     "Ready-to-hunt stand locations & travel corridors",
  //   ],
  //   description:
  //     "Engineered for daylight movement with access-first design, edge diversity, and stand sites sequenced for prevailing winds.",
  //   gallery: [
  //     "/props/elm-ridge-1.jpg",
  //     "/props/elm-ridge-2.jpg",
  //     "/props/elm-ridge-3.jpg",
  //   ],
  //   mapEmbedUrl: "https://www.google.com/maps/embed?...",
  // },
];

export function getBySlug(slug: string): Property | undefined {
  return PROPERTIES.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return PROPERTIES.filter((p) => !!p.slug).map((p) => p.slug!) as string[];
}
