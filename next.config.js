/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/about',
        destination: '/html/1.html',
      },
    ]
  }
}

module.exports = nextConfig
