import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // redirects: {

  // },
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "place.davidhtml.xyz",
        port: "",
        pathname: "/**",
      },
    ],
  }
};

export default nextConfig;
