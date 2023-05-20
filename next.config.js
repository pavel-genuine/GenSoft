/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/160XWZq/Screenshot-2023-05-20-141004.png',
      },]
  }
}

module.exports = nextConfig
