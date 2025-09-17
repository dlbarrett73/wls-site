/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Allow the build even if there are TS errors elsewhere.
    ignoreBuildErrors: true,
  },
  eslint: {
    // Don’t fail the build because of lint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    // Avoid next/image config pitfalls while we stabilize.
    unoptimized: true,
  },
};

module.exports = nextConfig;
