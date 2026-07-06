/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'amzn-s3-portfolio-images-603767527189-us-east-2-an.s3.us-east-2.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;
