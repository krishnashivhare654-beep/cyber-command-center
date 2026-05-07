/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Ye production build mein type checking skip karega
    ignoreBuildErrors: true,
  },
  eslint: {
    // Build ke waqt linting errors ignore karega
    ignoreDuringBuilds: true,
  },
  // SwcMinify performance improve karta hai
  swcMinify: true,
};

export default nextConfig;