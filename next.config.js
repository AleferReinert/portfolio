/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    webVitalsAttribution: ['LCP', 'CLS', 'INP']
  }
}

module.exports = nextConfig
