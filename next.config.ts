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
  
  // IMPORTANTE: precachear páginas da pasta out/
  cacheOnFrontEndNav: true,
  reloadOnOnline: false,
  
  runtimeCaching: [
    // CACHE AGRESSIVO para páginas - CacheFirst com fallback
    {
      urlPattern: ({ request, url }: { request: Request; url: URL }) => 
        request.destination === 'document',
      handler: "CacheFirst",
      options: {
        cacheName: "html-pages",
        expiration: {
          maxEntries: 200,
          maxAgeSeconds: 365 * 24 * 60 * 60, // 1 ano
        },
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },
    // Cache home page e páginas principais agressivamente
    {
      urlPattern: /^https?:\/\/[^/]*\/?$/,
      handler: "CacheFirst",
      options: {
        cacheName: "home-page",
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 365 * 24 * 60 * 60,
        },
      },
    },
    // Cache páginas HTML com NetworkFirst para offline
    {
      urlPattern: /\.html$/,
      handler: "CacheFirst",
      options: {
        cacheName: "static-html",
        expiration: {
          maxEntries: 200,
          maxAgeSeconds: 365 * 24 * 60 * 60,
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
          maxEntries: 300,
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
          maxEntries: 500,
          maxAgeSeconds: 30 * 24 * 60 * 60,
        },
      },
    },
    // Cache de fontes
    {
      urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/,
      handler: "CacheFirst",
      options: {
        cacheName: "google-fonts",
        expiration: {
          maxEntries: 30,
          maxAgeSeconds: 365 * 24 * 60 * 60,
        },
      },
    },
    // CacheFirst para navegação de páginas
    {
      urlPattern: ({ request }: { request: Request }) => 
        request.mode === 'navigate',
      handler: "CacheFirst",
      options: {
        cacheName: "pages-cache",
        expiration: {
          maxEntries: 200,
          maxAgeSeconds: 365 * 24 * 60 * 60,
        },
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },
  ],
  fallbacks: {
    document: "/offline",
    image: "/app-image.png",
  } as any,
  buildExcludes: [/middleware-manifest\.json$/],
})(nextConfig as any);
