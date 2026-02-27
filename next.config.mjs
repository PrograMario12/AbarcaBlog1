/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable standalone build for better deployment
    output: 'standalone',
    // Allow any host for the live preview proxy
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
        },
      ],
    },
    // Using experimental feature for allowed hosts if needed, but usually not for dev
    // For production/preview via proxy, we might need to be lenient
};

export default nextConfig;
