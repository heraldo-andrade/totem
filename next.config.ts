import type { NextConfig } from "next";
import withPWA from "next-pwa";
import fs from 'fs';
import path from 'path';

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
};

// Ler a lista de páginas do arquivo JSON gerado pelo script
function getAdditionalManifestEntries() {
  const cacheUrlsPath = path.join(process.cwd(), 'public', 'cache-urls.json');
  
  if (fs.existsSync(cacheUrlsPath)) {
    try {
      const urls = JSON.parse(fs.readFileSync(cacheUrlsPath, 'utf-8'));
      console.log(`[PWA Config] 📦 Adicionando ${urls.length} páginas ao precache`);
      return urls.map((url: string) => ({ url, revision: Date.now().toString() }));
    } catch (error) {
      console.warn('[PWA Config] ⚠️ Erro ao ler cache-urls.json:', error);
    }
  }
  
  // Fallback para páginas básicas
  console.log('[PWA Config] ⚠️ cache-urls.json não encontrado, usando páginas padrão');
  return [
    { url: '/', revision: Date.now().toString() },
    { url: '/offline', revision: Date.now().toString() },
    { url: '/juventude', revision: Date.now().toString() },
    { url: '/infancia', revision: Date.now().toString() },
    { url: '/adulta', revision: Date.now().toString() },
    { url: '/terceira-idade', revision: Date.now().toString() },
  ];
}

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
    { url: '/cache-urls.json', revision: null }, // CRÍTICO: precisa estar no cache do SW
  ],
  
  runtimeCaching: [
    // StaleWhileRevalidate para navegação - serve do cache primeiro e atualiza em background
    {
      urlPattern: ({ request }: { request: Request }) => 
        request.mode === 'navigate',
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "pages-navigation",
        expiration: {
          maxEntries: 200,
          maxAgeSeconds: 365 * 24 * 60 * 60,
        },
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },
    // NetworkFirst para documentos (com timeout curto para funcionar offline)
    {
      urlPattern: ({ request, url }: { request: Request; url: URL }) => 
        request.destination === 'document',
      handler: "NetworkFirst",
      options: {
        cacheName: "html-documents",
        networkTimeoutSeconds: 2,
        expiration: {
          maxEntries: 200,
          maxAgeSeconds: 365 * 24 * 60 * 60,
        },
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },
    // StaleWhileRevalidate para home
    {
      urlPattern: /^https?:\/\/[^/]*\/?$/,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "home-page",
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 365 * 24 * 60 * 60,
        },
      },
    },
    // StaleWhileRevalidate para arquivos HTML
    {
      urlPattern: /\.html$/,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "html-files",
        expiration: {
          maxEntries: 200,
          maxAgeSeconds: 365 * 24 * 60 * 60,
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
