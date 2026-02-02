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
      urlPattern: /^https?.*\.(js|css|woff|woff2|ttf|otf|eot|svg|png|jpg|jpeg|gif|webp|ico)$/,
      handler: "CacheFirst",
      options: {
        cacheName: "static-assets",
        expiration: {
          maxEntries: 200,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 dias
        },
      },
    },
    {
      urlPattern: /\.html$/,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "html-pages",
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 24 * 60 * 60, // 24 horas
        },
      },
    },
    {
      urlPattern: /\/_next\/(static|data)\/.*/,
      handler: "CacheFirst",
      options: {
        cacheName: "next-cache",
        expiration: {
          maxEntries: 200,
          maxAgeSeconds: 24 * 60 * 60, // 24 horas
        },
      },
    },
    {
      urlPattern: /^https?:\/\/.*/,
      handler: "NetworkFirst",
      options: {
        cacheName: "others",
        networkTimeoutSeconds: 10,
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 24 * 60 * 60, // 24 horas
        },
      },
    },
  ],
  fallbacks: {
    document: "/_offline",
    image: "/app-image.png",
  } as any,
  buildExcludes: [/middleware-manifest\.json$/],
})(nextConfig as any);
