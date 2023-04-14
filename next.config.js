// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });
// module.exports = withBundleAnalyzer({
//   reactStrictMode: false,
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
// });

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  images: {
    // loader: 'akamai',
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'strapi.yathim.or.id',
        port: '',
        pathname: '',
      },
    ],
  },
};

module.exports = nextConfig;
