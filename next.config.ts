import type { NextConfig } from "next";
import withPWA from "next-pwa";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
};

export default withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  runtimeCaching: [
    {
      urlPattern: /^https?.*\.(js|css|woff|woff2|ttf|otf|eot|svg|png|jpg|jpeg|gif|webp)$/,
      handler: "CacheFirst",
      options: {
        cacheName: "assets",
        expiration: {
          maxEntries: 200,
          maxAgeSeconds: 30 * 24 * 60 * 60,
        },
      },
    },
    {
      urlPattern: /\.html$/,
      handler: "NetworkFirst",
      options: {
        cacheName: "html",
        networkTimeoutSeconds: 10,
      },
    },
    {
      urlPattern: /\/_next\/data\/.+\.json$/,
      handler: "NetworkFirst",
      options: {
        cacheName: "next-data",
      },
    },
  ],
  buildExcludes: [/middleware-manifest\.json$/],
})(nextConfig as any);
