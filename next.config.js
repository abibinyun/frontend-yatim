// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

// module.exports = withBundleAnalyzer({
//   reactStrictMode: false,
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'localhost',
//         port: '1337',
//         pathname: '/uploads/**',
//       },
//     ],
//   },
// });

// module.exports = {
//   images: {
//     domains: ['localhost:1337'],
//   },
// };
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'http://localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
    ],
  },
};
