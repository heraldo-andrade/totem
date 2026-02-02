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
  additionalManifestEntries: [
    { url: "/", revision: null },
    { url: "/index.html", revision: null },
  ],

  runtimeCaching: [
    {
      urlPattern: /\.html$/,
      handler: "CacheFirst",
      options: {
        cacheName: "html-pages",
      },
    },
    {
      urlPattern: /\/_next\/(static|data)\/.*/,
      handler: "CacheFirst",
      options: {
        cacheName: "next-cache",
      },
    },
    {
      urlPattern: /^https?.*\.(js|css|woff2?|png|jpg|jpeg|svg|webp|ico)$/,
      handler: "CacheFirst",
      options: {
        cacheName: "static-assets",
      },
    },
  ],
  fallbacks: {
    document: "/_offline",
    image: "/app-image.png",
  } as any,
  buildExcludes: [/middleware-manifest\.json$/],
})(nextConfig as any);
