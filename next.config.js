/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: ["media.rawg.io"]
  },
  publicRuntimeConfig:{
    REACT_APP_KEY: process.env.REACT_APP_KEY
  }
}

module.exports = nextConfig
