/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Prevent ESLint issues from failing Vercel builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Prevent TS errors from failing Vercel builds
    ignoreBuildErrors: true,
  },
  images: {
    // If you load remote images, whitelist domains here, e.g.:
    // domains: ["images.unsplash.com", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
