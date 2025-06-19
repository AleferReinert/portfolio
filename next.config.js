/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [256, 280, 384, 420, 560, 640, 750, 828, 1080, 1200, 1920, 2048, 3840]
  }
}

module.exports = nextConfig
