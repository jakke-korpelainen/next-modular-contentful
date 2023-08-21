/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    appDir: true,
  },
  poweredByHeader: false,
  optimizeFonts: false,
  images: {
    domains: ["images.ctfassets.net"],
    minimumCacheTTL: 60 * 60,
  },
  productionBrowserSourceMaps: true,
};
