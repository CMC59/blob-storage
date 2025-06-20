/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      new URL('https://7iom2huug22ae1cd.public.blob.vercel-storage.com**'),
    ],
  },
};
module.exports = nextConfig;