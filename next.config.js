/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  experimental: {
    appDir: true,
  },
}


const withNextIntl = require('next-intl/plugin')(
    './i18n.jsx'
)

module.exports = withNextIntl(nextConfig)