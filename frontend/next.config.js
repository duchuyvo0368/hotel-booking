const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    // Will be available on both server and client
    API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:5000'
  }
};

module.exports = nextConfig;
