// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "Whitetail Land Solutions",
  description:
    "Turnkey whitetail properties engineered for giants, built for legacy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-white text-zinc-900">
        {/* Global Header */}
        <Header />

        {/* Page content */}
        <main className="flex-1">{children}</main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
