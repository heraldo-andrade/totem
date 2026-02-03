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
  
  // IMPORTANTE: precachear páginas HTML geradas no build
  cacheOnFrontEndNav: true,
  reloadOnOnline: true,
  
  // Adicionar precaching de todas as páginas HTML
  additionalManifestEntries: [
    { url: '/', revision: null },
    { url: '/offline', revision: null },
    { url: '/juventude', revision: null },
    { url: '/infancia', revision: null },
    { url: '/adulta', revision: null },
    { url: '/terceira-idade', revision: null },
  ],
  
  runtimeCaching: [
    // PRIORIDADE MÁXIMA: Cache de navegação (páginas HTML)
    {
      urlPattern: ({ request }: { request: Request }) => 
        request.mode === 'navigate' || request.destination === 'document',
      handler: "NetworkFirst",
      options: {
        cacheName: "pages-navigation",
        networkTimeoutSeconds: 3,
        expiration: {
          maxEntries: 200,
          maxAgeSeconds: 24 * 60 * 60, // 1 dia
        },
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },
    // Cache de arquivos HTML
    {
      urlPattern: /\.html$/,
      handler: "NetworkFirst",
      options: {
        cacheName: "html-files",
        networkTimeoutSeconds: 3,
        expiration: {
          maxEntries: 200,
          maxAgeSeconds: 24 * 60 * 60,
        },
      },
    },
    // Cache Next.js (_next)
    {
      urlPattern: /\/_next\/.*/,
      handler: "CacheFirst",
      options: {
        cacheName: "next-static",
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
  ],
  fallbacks: {
    document: "/offline",
  } as any,
  buildExcludes: [/middleware-manifest\.json$/],
})(nextConfig as any);
