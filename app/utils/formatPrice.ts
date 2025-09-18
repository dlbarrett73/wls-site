// app/utils/formatPrice.ts
export function formatPrice(price: number | string | undefined | null) {
  if (price == null) return "Call";
  if (typeof price === "string") return price; // lets you use "Sold", "Pending", etc.
  return `$${price.toLocaleString()}`;
}
