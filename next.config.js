/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['abolle.s3.eu-west-2.amazonaws.com'],
  },
  compiler: {
    styledComponents: true,
  },

};

module.exports = nextConfig;
