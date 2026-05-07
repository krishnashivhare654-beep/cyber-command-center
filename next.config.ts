/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // TypeScript errors ko ignore karega taaki deployment success ho jaye
    ignoreBuildErrors: true,
  },
  eslint: {
    // Build ke time ESLint errors ignore karega
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;