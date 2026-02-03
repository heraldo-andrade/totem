'use client';

import { useEffect, useState } from 'react';

export default function CacheWarmer() {
  const [cacheStatus, setCacheStatus] = useState<string>('Aguardando...');

  useEffect(() => {
    // Apenas no cliente
    if (typeof window === 'undefined') {
      return;
    }

    const doCacheWarm = async () => {
      // Aguardar o SW estar pronto
      if (!('serviceWorker' in navigator)) {
        console.warn('⚠️ Service Worker não suportado neste navegador');
        setCacheStatus('SW não suportado');
        return;
      }

      try {
        const registration = await navigator.serviceWorker.ready;
        console.log('🚀 Service Worker pronto! Iniciando pré-cache completo...');
        setCacheStatus('SW pronto, iniciando cache...');
        
        // Carregar lista de URLs do arquivo JSON gerado no build
        let pagesToCache: string[];
        
        try {
          const response = await fetch('/cache-urls.json');
          if (response.ok) {
            pagesToCache = await response.json();
            console.log(`📦 Encontradas ${pagesToCache.length} páginas para cachear`);
          } else {
            throw new Error('Arquivo não encontrado');
          }
        } catch {
          console.log('⚠️ Usando lista padrão de páginas');
          pagesToCache = [
            '/',
            '/infancia',
            '/juventude',
            '/adulta',
            '/terceira-idade',
            '/offline',
          ];
        }

        // Abrir cache e adicionar páginas em lotes
        const cache = await caches.open('pages-precache-v2');
        const batchSize = 5;
        let successCount = 0;
        let errorCount = 0;

        for (let i = 0; i < pagesToCache.length; i += batchSize) {
          const batch = pagesToCache.slice(i, i + batchSize);
          const batchNumber = Math.floor(i / batchSize) + 1;
          const totalBatches = Math.ceil(pagesToCache.length / batchSize);
          
          setCacheStatus(`Cacheando lote ${batchNumber}/${totalBatches}...`);
          
          const results = await Promise.allSettled(
            batch.map(async (page) => {
              try {
                const response = await fetch(page, { 
                  method: 'GET',
                  credentials: 'same-origin',
                  cache: 'reload' // Forçar buscar do servidor
                });
                
                if (response.ok) {
                  await cache.put(page, response.clone());
                  console.log(`✅ ${page}`);
                  return true;
                } else {
                  console.log(`⚠️ ${page} (${response.status})`);
                  return false;
                }
              } catch (error) {
                console.log(`❌ ${page}`, error);
                return false;
              }
            })
          );

          results.forEach((result) => {
            if (result.status === 'fulfilled' && result.value) {
              successCount++;
            } else {
              errorCount++;
            }
          });

          // Pequena pausa entre lotes para não sobrecarregar
          await new Promise(resolve => setTimeout(resolve, 100));
        }

        const finalStatus = `✅ Cache completo: ${successCount}/${pagesToCache.length} páginas`;
        console.log(finalStatus);
        setCacheStatus(finalStatus);

        // Verificar total no cache
        const keys = await cache.keys();
        console.log(`📊 Total de itens no cache: ${keys.length}`);
        
      } catch (error) {
        console.error('❌ Erro ao preparar Service Worker:', error);
        setCacheStatus('Erro no cache');
      }
    };

    // Executar após um delay para dar tempo do app carregar
    const timer = setTimeout(doCacheWarm, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Retornar null (não renderiza nada visível)
  return null;
}
