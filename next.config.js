/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'lh3.googleusercontent.com', },
      { hostname: 'utfs.io' },
      { hostname: 'avatars.githubusercontent.com' },
    ]
  }
}

module.exports = nextConfig
