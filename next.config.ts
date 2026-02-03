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
  
  // Adicionar precaching de páginas críticas
  additionalManifestEntries: [
    { url: '/', revision: null },
    { url: '/offline', revision: null },
    { url: '/cache-urls.json', revision: null },
  ],
  
  runtimeCaching: [
    // PRIORIDADE 1: Navegação - CacheFirst para funcionar offline imediatamente
    {
      urlPattern: ({ request }: { request: Request }) => 
        request.mode === 'navigate',
      handler: "CacheFirst",
      options: {
        cacheName: "all-pages-v1",
        matchOptions: {
          ignoreSearch: true,
        },
        expiration: {
          maxEntries: 500,
          maxAgeSeconds: 365 * 24 * 60 * 60,
        },
        cacheableResponse: {
          statuses: [0, 200],
        },
        plugins: [{
          handlerDidError: async () => {
            return caches.match('/offline');
          }
        }],
      },
    },
    // PRIORIDADE 2: Documentos HTML - CacheFirst
    {
      urlPattern: ({ request }: { request: Request }) => 
        request.destination === 'document',
      handler: "CacheFirst",
      options: {
        cacheName: "all-pages-v1",
        matchOptions: {
          ignoreSearch: true,
        },
        expiration: {
          maxEntries: 500,
          maxAgeSeconds: 365 * 24 * 60 * 60,
        },
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },
    // Cache páginas HTML por padrão de URL
    {
      urlPattern: /\.html$/,
      handler: "CacheFirst",
      options: {
        cacheName: "all-pages-v1",
        expiration: {
          maxEntries: 500,
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
