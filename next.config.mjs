/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      
  basePath: '/devocoder-knowledge-base', 
  assetPrefix: '/devocoder-knowledge-base/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
