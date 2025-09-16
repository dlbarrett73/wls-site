// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-200">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-zinc-600">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Whitetail Land Solutions. All rights
            reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
