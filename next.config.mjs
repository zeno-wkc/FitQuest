/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["zh", "en"],
    defaultLocale: "en",
    localeDetection: false
  }
};

export default nextConfig;
