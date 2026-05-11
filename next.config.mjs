/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // TypeScript errors build ko nahi rokenge
    ignoreBuildErrors: true,
  },
  eslint: {
    // Linting errors ignore honge
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;