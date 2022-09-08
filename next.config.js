const path = require('path')
/** @type {import('next').NextConfig} */
const prod = false

let domain = `http://localhost:5005`;
if(prod) domain = ``;

const nextConfig = {
  env:{
    domain,
    mapApiKey:''

  },
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
