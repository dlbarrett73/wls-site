// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import React from "react";

// ✅ import from ROOT components folder (not /app/components)
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Whitetail Land Solutions | Engineered for Giants. Built for Legacy.",
  description:
    "Turnkey whitetail hunting properties and consulting in Pennsylvania. Engineered habitat, access, and strategy so you can hunt big bucks Day One.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-white text-zinc-900 antialiased">
        {/* Site Header */}
        <Header />

        {/* Page Content */}
        <div className="mx-auto w-full max-w-6xl px-6">{children}</div>

        {/* Site Footer */}
        <Footer />
      </body>
    </html>
  );
}
