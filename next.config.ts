import type { NextConfig } from "next";
import withPWA from "next-pwa";
import fs from 'fs';
import path from 'path';

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
};

// Função para obter todas as páginas HTML do build
function getStaticPages(): string[] {
  const outDir = path.join(process.cwd(), 'out');
  const pages: string[] = [];

  function scanDirectory(dir: string, basePath: string = '') {
    if (!fs.existsSync(dir)) return;
    
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    entries.forEach((entry) => {
      const fullPath = path.join(dir, entry.name);
      const urlPath = path.join(basePath, entry.name);
      
      if (entry.isDirectory() && !entry.name.startsWith('_next')) {
        scanDirectory(fullPath, urlPath);
      } else if (entry.name.endsWith('.html') && !entry.name.startsWith('_')) {
        const pagePath = urlPath.replace(/\\/g, '/').replace(/\.html$/, '');
        pages.push(pagePath === '/index' ? '/' : `/${pagePath}`);
      }
    });
  }

  scanDirectory(outDir);
  return pages;
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
