// /components/Footer.tsx
import Link from "next/link";
import CtaButton from "@/components/CtaButton";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-zinc-600">
          © {new Date().getFullYear()} Whitetail Land Solutions. All rights reserved.
        </p>
        <CtaButton href="/contact">Book a Free Strategy Call</CtaButton>
      </div>
    </footer>
  );
}
