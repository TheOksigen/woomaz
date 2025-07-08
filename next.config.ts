import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [{
      protocol: "https",
      hostname: "placehold.co",
      port: "",
      pathname: "/**"
    }]
  }
};

export default nextConfig;
