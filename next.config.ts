import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.efferd.com",
        pathname: "/logo/**", // Restricts it to only your logo folder for safety
      },
    ],
  },
};

export default nextConfig;
