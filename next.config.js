/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.snappfood.ir", "zoodfood.com", "www.zoodfood.com"],
  },
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
};
module.exports = nextConfig;
