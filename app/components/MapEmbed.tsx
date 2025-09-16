import React from "react";

type Props =
  | { lat: number; lng: number; q?: never; className?: string }
  | { q: string; lat?: never; lng?: never; className?: string };

export function MapEmbed(props: Props) {
  const className = props.className ?? "h-[420px] w-full rounded-xl border";
  const src =
    "lat" in props && "lng" in props
      ? `https://www.google.com/maps?q=${props.lat},${props.lng}&z=12&output=embed`
      : `https://www.google.com/maps?q=${encodeURIComponent(props.q)}&z=11&output=embed`;

  return (
    <div className={className}>
      <iframe
        title="Google Maps"
        loading="lazy"
        src={src}
        className="h-full w-full rounded-xl"
        allowFullScreen
      />
    </div>
  );
}
