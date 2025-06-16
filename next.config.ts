import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  skipMiddlewareUrlNormalize: true, // Important for wp-admin paths
   env: {
    COMING_SOON: process.env.COMING_SOON,
  },
};

export default nextConfig;
