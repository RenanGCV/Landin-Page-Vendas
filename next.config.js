/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.json$/,
      type: 'javascript/auto',
      resolve: {
        fullySpecified: false
      }
    });
    return config;
  },
  // Permitir domínios de imagens externos se necessário
  images: {
    domains: [],
  },
};

module.exports = nextConfig; 