/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Serve remote images directly from the source CDN (Unsplash already returns
    // optimized WebP/AVIF via its `auto=format&w=&q=` params). This bypasses the
    // Next.js /_next/image optimizer, which times out (ETIMEDOUT) on Render's
    // free tier and was returning 500s for every image.
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
    ],
  },
};

export default nextConfig;
