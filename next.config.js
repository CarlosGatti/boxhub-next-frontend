/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'images.unsplash.com',
      'i.ibb.co',
      'appwrite.globalsocial.lol',
      'www.simplilearn.com',
      'thumbs.dreamstime.com',
      'picsum.photos',
      'nutritionsource.hsph.harvard.edu',
      "m.media-amazon.com",
    ],
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
