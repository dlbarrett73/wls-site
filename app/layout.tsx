import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Whitetail Land Solutions",
  description:
    "Properties engineered to attract and kill mature whitetails. Consulting and turnkey properties in Pennsylvania."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
