import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};
module.exports = {
  allowedDevOrigins: ["192.168.1.66", "192.168.0.42"],
};

export default nextConfig;
