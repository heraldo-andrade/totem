'use client';

import { useEffect } from 'react';

export default function CacheWarmer() {
  useEffect(() => {
    // Apenas no cliente
    if (typeof window === 'undefined') {
      return;
    }

    // Aguardar o SW estar pronto
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        console.log('🚀 Service Worker pronto! Iniciando pré-cache...');
        
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
        Promise.all(
          pagesToCache.map(async (page) => {
            try {
              const response = await fetch(page, { 
                method: 'GET',
                credentials: 'same-origin'
              });
              
              if (response.ok) {
                console.log(`✅ Cached: ${page}`);
                return true;
              } else {
                console.log(`⚠️ Failed to cache (${response.status}): ${page}`);
                return false;
              }
            } catch (error) {
              console.log(`❌ Error caching: ${page}`, error);
              return false;
            }
          })
        ).then((results) => {
          const successCount = results.filter(r => r).length;
          console.log(`✅ Pré-cache completo: ${successCount}/${pagesToCache.length} páginas`);
        });
      }).catch((error) => {
        console.error('❌ Erro ao preparar Service Worker:', error);
      });
    } else {
      console.warn('⚠️ Service Worker não suportado neste navegador');
    }
  }, []);

  return null;
}
