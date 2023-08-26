/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'dist',
  reactStrictMode: true,
  swcMinify: true,
}

const withNextIntl = require('next-intl/plugin')(
    './i18n.jsx'
)

module.exports = withNextIntl(nextConfig)