const path = require('path')
/** @type {import('next').NextConfig} */
const prod = false

let domain = `http://localhost:5005`;
if(prod) domain = process.env.DOMAIN;

const nextConfig = {
  env:{
    domain,
    GOOGLE_MAP_API_KEY:process.env.GOOGLE_MAP_API_KEY

  },
  reactStrictMode: false,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  
}

module.exports = nextConfig
