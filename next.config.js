/** @type {import('next').NextConfig} */

const withImages = require("next-images");

const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp'],
    },
}

module.exports = nextConfig
