
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/business-wifi-networking",
        destination: "/networks-infrastructure",
        permanent: true,
      },
      {
        source: "/network-cabling-structured-cabling",
        destination: "/networks-infrastructure",
        permanent: true,
      },
      {
        source: "/small-business-it-support",
        destination: "/contact?service=it-support",
        permanent: false,
      },
      {
        source: "/security-camera-installation",
        destination: "/contact?service=security-cameras",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
