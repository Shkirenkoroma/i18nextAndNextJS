/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  output: 'build',
}


const withNextIntl = require('next-intl/plugin')(
    './i18n.jsx'
)

module.exports = withNextIntl(nextConfig)