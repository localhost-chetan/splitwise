import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@mastra/*"],

  experimental: {
    reactCompiler: true
  },

  images: {
    remotePatterns: [new URL(`https://avatars.githubusercontent.com/u/99677049?v=4`)]
  }
};

export default nextConfig;
