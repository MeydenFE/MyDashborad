import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.googleusercontent.com",
      },
    ],
    domains: ["picsum.photos", "images.unsplash.com"],
  },
};

export default nextConfig;
