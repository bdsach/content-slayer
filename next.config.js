/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer({
  swcMinify: true,
  reactStrictMode: true,
});