/** @type {import('next').nextConfig} */
const nextConfig = {}

const withNextIntl = require('next-intl/plugin')(
    './i18n.tsx'
)

module.exports = withNextIntl(nextConfig)