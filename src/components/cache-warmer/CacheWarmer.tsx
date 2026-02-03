'use client';

import { useEffect } from 'react';

export default function CacheWarmer() {
  useEffect(() => {
    // Apenas no cliente e em produção
    if (
      typeof window === 'undefined' || 
      process.env.NODE_ENV === 'development'
    ) {
      return;
    }

    // Aguardar o SW estar pronto
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(() => {
        // Lista de páginas para pré-cachear
        const pagesToCache = [
          '/',
          '/infancia',
          '/juventude',
          '/adulta',
          '/terceira-idade',
          '/offline',
        ];

        // Fazer requisições silenciosas para popular o cache
        pagesToCache.forEach(async (page) => {
          try {
            await fetch(page, { 
              method: 'GET',
              headers: { 'X-Purpose': 'prefetch' }
            });
            console.log(`✅ Cached: ${page}`);
          } catch (error) {
            console.log(`⚠️ Failed to cache: ${page}`);
          }
        });
      });
    }
  }, []);

  return null;
}
