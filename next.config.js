/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  output: 'export',
}


const withNextIntl = require('next-intl/plugin')(
    './i18n.jsx'
)

module.exports = withNextIntl(nextConfig)