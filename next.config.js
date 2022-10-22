/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MAILCHIMP_U: process.env.MAILCHIMP_U,
    MAILCHIMP_ID: process.env.MAILCHIMP_ID,
  },
};

module.exports = nextConfig;
