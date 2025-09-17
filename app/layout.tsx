// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Whitetail Land Solutions",
  description: "Engineered for Giants. Built for Legacy.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <div className="mx-auto w-full max-w-6xl px-6 py-8">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
