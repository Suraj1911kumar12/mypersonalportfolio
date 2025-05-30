/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repoName = "mypersonalportfolio";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // experimental: {
  //   serverActions: false,
  // },
  output: "export",
  assetPrefix: isProd ? `/${repoName}/` : "",
  basePath: isProd ? `/${repoName}` : "",
};

module.exports = nextConfig;
