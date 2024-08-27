/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
            remotePatterns: [
                  {
                        protocol: 'https',
                        hostname: 'bookworm.madrasthemes.com'
                  },
            ],
      },
};

export default nextConfig;
