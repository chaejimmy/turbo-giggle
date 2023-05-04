/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'www.gravatar.com',
      'picsum.photos',
      'avatars.githubusercontent.com',
    ],
  },
};
module.exports = nextConfig;
