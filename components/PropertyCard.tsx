// app/components/PropertyCard.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

export type PropertyStatus = "available" | "pending" | "sold";

export type Property = {
  slug?: string;
  title: string;
  price?: string | number;
  acres?: number | string;
  heroImage?: string;
  heroSrc?: string;
  gallery?: string[];
  location?: string;
  highlights?: string[];
  /** Optional raw markers that we normalize into a status */
  status?: string;
  sold?: boolean;
  /** Optional extra fields are allowed */
  [key: string]: unknown;
};

export type PropertyCardProps = {
  property: Property;
  /** Optional: force a visual style if you ever want a “featured” look later */
  variant?: "default" | "featured";
  /** Optional: how many highlights to show on the card */
  highlightCount?: number;
};

/* ---------------------------
   Helpers (kept here so the card is drop-in reusable)
----------------------------*/
function computeStatus(p: Property): PropertyStatus {
  const raw =
    (typeof p.status === "string" ? p.status : undefined) ??
    (p.sold ? "sold" : "available");
  const s = raw.toLowerCase();
  if (s.includes("pend")) return "pending";
  if (s.includes("sold")) return "sold";
  return "available";
}

function badgeStyles(status: PropertyStatus) {
  switch (status) {
    case "available":
      return "bg-emerald-600 text-white";
    case "pending":
      return "bg-amber-600 text-white";
    case "sold":
      return "bg-zinc-800 text-white";
  }
}

function formatPrice(price?: string | number) {
  if (price == null || price === "") return "";
  if (typeof price === "number") return `$${price.toLocaleString()}`;
  const s = String(price).trim();
  return s ? (s.startsWith("$") ? s : `$${s}`) : "";
}

function formatAcres(acres?: string | number) {
  if (acres == null || acres === "") return "";
  if (typeof acres === "number") return `${acres.toLocaleString()}± acres`;
  const s = String(acres).trim();
  return s ? `${s}± acres` : "";
}

function heroFor(p: Property) {
  return p.heroImage ?? p.heroSrc ?? "/images/properties/fallback.jpg";
}

/* ---------------------------
   Component
----------------------------*/
export default function PropertyCard({
  property,
  variant = "default",
  highlightCount = 3,
}: PropertyCardProps) {
  const status = computeStatus(property);
  const price = formatPrice(property.price);
  const acres = formatAcres(property.acres);
  const hero = heroFor(property);
  const href = property.slug ? `/properties/${property.slug}` : undefined;

  const showCallCta = status !== "sold";
  const showWaitlistCta = status === "sold" || status === "pending";

  return (
    <li className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={hero}
          alt={property.title ?? "Property hero image"}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
          priority={false}
        />
        {/* Status Badge */}
        <div className="absolute left-3 top-3">
          <span
            className={
              "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold shadow-sm " +
              badgeStyles(status)
            }
          >
            {status === "available"
              ? "Available"
              : status === "pending"
              ? "Pending"
              : "Sold"}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-zinc-900">
          {href ? (
            <Link href={href} className="hover:underline">
              {property.title ?? "Untitled Property"}
            </Link>
          ) : (
            <span>{property.title ?? "Untitled Property"}</span>
          )}
        </h3>

        <div className="mt-1 text-sm text-zinc-600">
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            {acres && <span>{acres}</span>}
            {property.location && <span className="text-zinc-500">•</span>}
            {property.location && <span>{property.location}</span>}
          </div>
          {price && <div className="mt-1 font-semibold text-zinc-900">{price}</div>}
        </div>

        {/* Highlights */}
        {Array.isArray(property.highlights) && property.highlights.length > 0 && (
          <ul className="mt-3 list-inside list-disc text-sm text-zinc-700">
            {property.highlights.slice(0, highlightCount).map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        )}

        {/* CTAs */}
        <div className="mt-5 flex flex-wrap gap-2">
          {href && (
            <Link
              href={href}
              className="inline-flex flex-1 items-center justify-center rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 sm:flex-none"
            >
              View Details
            </Link>
          )}

          {showCallCta && (
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              Free Strategy Call
            </Link>
          )}

          {showWaitlistCta && (
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-emerald-200 px-4 py-2 text-sm font-semibold text-emerald-800 hover:bg-emerald-50"
            >
              Join Waitlist
            </Link>
          )}
        </div>

        {/* Proof nudge */}
        <p className="mt-3 text-xs text-zinc-500">
          Turnkey habitat design • Access & stand strategy • “Hunt big bucks Day One”
        </p>
      </div>
    </li>
  );
}
