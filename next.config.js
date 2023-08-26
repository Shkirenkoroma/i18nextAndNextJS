import nextIntl from "next-intl/plugin";

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["tailwindui.com"],
  },
};

const withNextIntl = nextIntl("./i18n.jsx");

export default withNextIntl(nextConfig);