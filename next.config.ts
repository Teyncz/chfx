import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // Cela ignore les erreurs ESLint pendant le build
  },
};

export default nextConfig;