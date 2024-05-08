/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "github.com",
      },
      {
        hostname: "wallpaper.forfun.com",
      },
    ],
  },
};

export default nextConfig;
