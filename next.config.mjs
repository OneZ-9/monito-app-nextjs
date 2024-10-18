/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["firebasestorage.googleapis.com"]
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "/v0/b/chatapp-4ef20.appspot.com/**",
      },
    ],
  },
};

export default nextConfig;
