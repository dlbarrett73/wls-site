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

export const propertiesBySlug = {
  "mahaffey-131": {
    slug: "mahaffey-131",
    title: "Mahaffey 131",
    price: 499000,                   // number is ideal
    acres: 131,                      // <-- was `acreage`
    county: "Clearfield",            // split these two
    state: "PA",
    heroImage: "/images/properties/mahaffey-131/hero.jpg", // <-- was `image`
    description: `Clearfield County, PA. 131± acres with food plots and 2 Stryker blinds installed. 
    Undetectable access from US 219, near Mahaffey. Ready to hunt from day one.`,
    highlights: [
      "Undetectable access from US 219",
      "Food plots installed",
      "Two Stryker blinds included",
      "Ready to hunt immediately",
    ],
    gallery: [
      "/images/properties/mahaffey-131/hero.jpg",
    ],
    // mapEmbedUrl: "<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3017.1048103798344!2d-78.77642492402275!3d40.86957402795415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDUyJzEwLjUiTiA3OMKwNDYnMjUuOSJX!5e0!3m2!1sen!2sus!4v1758230642221!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>", // optional
    // description: "Optional longer description of the property.",
  },

  // Add more properties here as needed, using the same shape
};

export default propertiesBySlug;
