import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',      // This is the "magic" line for static hosting
  images: {
    unoptimized: true,   // Required because static sites can't resize images on the fly
  },
  // If you use GitHub Pages (e.g., AlxndrHQ.github.io/MaalTheSocialite), 
  // you may need to add: 
  // basePath: '/MaalTheSocialite',
};

export default nextConfig;
