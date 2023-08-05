/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig

module.exports = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
}