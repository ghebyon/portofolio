/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/gwencanayo123.appspot.com/**',
      },
    ],
  },
}

module.exports = nextConfig
