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
  id: "mahaffey-136",
  title: "MAHAFFEY 136",
  acres: 136,
  county: "Clearfield",
  state: "PA",
  price: "$500,000",
  image: "/props/mahaffey-136.jpg",   // Hero image
  slug: "mahaffey-136",               // URL will be /properties/mahaffey-136
  highlights: [
    "Turnkey Hunting Setup – Professionally designed with food plots already established and two Stryker blinds in place, giving you instant hunting opportunities for mature whitetails.",
    "Undetectable Access – Secure frontage and stealth entry from US 219 allow you to reach prime stand and blind locations without alerting deer.",
    "Prime Whitetail Habitat – Diverse cover, rolling topography, and quality food sources create natural bedding and travel corridors ideal for holding and harvesting big bucks.",
    "Excellent Location – Just outside Mahaffey, PA, with convenient access yet enough seclusion to provide a true wilderness hunting experience.",
    "Large, Contiguous Acreage – 136+ acres of contiguous habitat with the southern adjoining parcel included, offering a rare opportunity for a legacy hunting property in Central PA."
  ],
  description:
    "Mahaffey 136 is a turnkey whitetail hunting property with established food plots, two Stryker blinds, undetectable access from US 219, and diverse habitat designed to hold mature bucks. Located in Bell Township, Clearfield County, this 136-acre tract offers both seclusion and convenience — a true legacy property in Central Pennsylvania.",
  gallery: [
    // Add more images once uploaded to /public/props/
    "/props/mahaffey-136-1.jpg",
    "/props/mahaffey-136-2.jpg",
    "/props/mahaffey-136-3.jpg",
  ],
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3017.0669909289336!2d-78.77817492402268!3d40.87040402790318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDUyJzEzLjQiTiA3OMKwNDYnMzIuMiJX!5e0!3m2!1sen!2sus!4v1757701048498!5m2!1sen!2sus",
},
];


export function getBySlug(slug: string): Property | undefined {
  return PROPERTIES.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return PROPERTIES.filter((p) => !!p.slug).map((p) => p.slug!) as string[];
}
