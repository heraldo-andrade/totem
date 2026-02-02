import type { NextConfig } from "next";
import withPWA from "next-pwa";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
};

export default withPWA({
  dest: "public",
  sw: "sw.js",
  register: true,
  skipWaiting: true,
  clientsClaim: true,
  disable: process.env.NODE_ENV === "development",
  
  runtimeCaching: [
    // Cache home page agressivamente
    {
      urlPattern: /^https?:\/\/[^/]*\/?$/,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "home-page",
        expiration: {
          maxEntries: 1,
          maxAgeSeconds: 7 * 24 * 60 * 60,
        },
      },
    },
    // Cache páginas HTML com StaleWhileRevalidate
    {
      urlPattern: /\.html$/,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "html-pages",
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 24 * 60 * 60,
        },
      },
    },
    // Cache Next.js data
    {
      urlPattern: /\/_next\/(static|data)\/.*/,
      handler: "CacheFirst",
      options: {
        cacheName: "next-cache",
        expiration: {
          maxEntries: 200,
          maxAgeSeconds: 30 * 24 * 60 * 60,
        },
      },
    },
    // Cache assets estáticos
    {
      urlPattern: /^https?.*\.(js|css|woff2?|png|jpg|jpeg|svg|webp|ico|gif)$/,
      handler: "CacheFirst",
      options: {
        cacheName: "static-assets",
        expiration: {
          maxEntries: 300,
          maxAgeSeconds: 30 * 24 * 60 * 60,
        },
      },
    },
    // NetworkFirst para outras requisições
    {
      urlPattern: /^https?:\/\/.*/,
      handler: "NetworkFirst",
      options: {
        cacheName: "general-cache",
        networkTimeoutSeconds: 10,
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 24 * 60 * 60,
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
