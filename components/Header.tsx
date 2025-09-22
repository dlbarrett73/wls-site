{/* Brand (logo + text with safe fallback) */}
<Link href="/" className="flex items-center gap-3 min-w-0">
  <span className="sr-only">Whitetail Land Solutions</span>

  {/* 1) LOGO — update src to your actual file in /public/images */}
  <Image
    src="/images/logo-400.png" // ← make sure this file exists
    alt="Whitetail Land Solutions"
    width={160}
    height={40}
    className="h-8 w-auto"
    priority
    onError={(e) => {
      // If the image fails, hide it so the text sits flush
      (e.target as HTMLImageElement).style.display = "none";
    }}
  />

  {/* 2) TEXT (always visible, so you never “lose” your brand) */}
  <div className="flex min-w-0 flex-col leading-tight">
    <span className="truncate text-base font-semibold text-slate-900">
      Whitetail Land Solutions
    </span>
    <span className="hidden truncate text-xs text-slate-600 sm:block">
      Engineered for Giants. Built for Legacy.
    </span>
  </div>
</Link>
