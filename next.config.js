/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
}


const withNextIntl = require('next-intl/plugin')(
    './i18n.jsx'
)

module.exports = withNextIntl(nextConfig)