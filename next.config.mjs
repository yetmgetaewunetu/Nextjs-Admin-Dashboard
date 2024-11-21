/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};
export const configs = {
  assetPrefix: "/Nextjs-Admin-Dashboard/",
  basePath: "/Nextjs-Admin-Dashboard",
};
export default nextConfig;
