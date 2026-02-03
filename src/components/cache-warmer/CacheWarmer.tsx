'use client';

import { useEffect, useState } from 'react';

export default function CacheWarmer() {
  const [cacheStatus, setCacheStatus] = useState<{
    total: number;
    cached: number;
    loading: boolean;
  }>({ total: 0, cached: 0, loading: false });

  useEffect(() => {
    // Apenas no cliente
    if (typeof window === 'undefined') {
      return;
    }

    const doPrecache = async () => {
      console.log('[CacheWarmer] 🚀 Iniciando precache de TODAS as páginas...');
      setCacheStatus(prev => ({ ...prev, loading: true }));

      try {
        // Carregar lista de URLs gerada no build
        const response = await fetch('/cache-urls.json');
        if (!response.ok) {
          throw new Error('Não foi possível carregar cache-urls.json');
        }
        
        const allUrls: string[] = await response.json();
        console.log(`[CacheWarmer] 📄 Total de páginas para cachear: ${allUrls.length}`);
        setCacheStatus(prev => ({ ...prev, total: allUrls.length }));

        // Abrir o cache
        const cache = await caches.open('all-pages-v1');
        
        // Cachear em lotes para não sobrecarregar
        const batchSize = 5;
        let cachedCount = 0;

        for (let i = 0; i < allUrls.length; i += batchSize) {
          const batch = allUrls.slice(i, i + batchSize);
          
          const results = await Promise.allSettled(
            batch.map(async (url) => {
              try {
                // Verificar se já está em cache
                const existingCache = await cache.match(url);
                if (existingCache) {
                  return true; // Já está em cache
                }

                // Fazer fetch e cachear
                const res = await fetch(url, { 
                  method: 'GET',
                  credentials: 'same-origin',
                  cache: 'no-cache' // Forçar buscar da rede
                });
                
                if (res.ok) {
                  await cache.put(url, res.clone());
                  return true;
                }
                return false;
              } catch {
                return false;
              }
            })
          );

          cachedCount += results.filter(r => r.status === 'fulfilled' && r.value).length;
          setCacheStatus(prev => ({ ...prev, cached: cachedCount }));
          
          // Log de progresso
          const progress = Math.round((i + batch.length) / allUrls.length * 100);
          console.log(`[CacheWarmer] 📊 Progresso: ${progress}% (${cachedCount}/${allUrls.length})`);
        }

        console.log(`[CacheWarmer] ✅ Precache completo: ${cachedCount}/${allUrls.length} páginas`);
        setCacheStatus({ total: allUrls.length, cached: cachedCount, loading: false });
        
        // Salvar flag indicando que precache foi feito
        localStorage.setItem('pwa-precache-done', Date.now().toString());
        
      } catch (error) {
        console.error('[CacheWarmer] ❌ Erro no precache:', error);
        setCacheStatus(prev => ({ ...prev, loading: false }));
      }
    };

    // Verificar se precache já foi feito recentemente (últimas 24h)
    const lastPrecache = localStorage.getItem('pwa-precache-done');
    const oneDayAgo = Date.now() - (24 * 60 * 60 * 1000);
    
    if (!lastPrecache || parseInt(lastPrecache) < oneDayAgo) {
      // Aguardar um pouco antes de iniciar (deixar a página carregar)
      const timer = setTimeout(() => {
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.ready.then(() => {
            doPrecache();
          });
        }
      }, 3000); // Aguardar 3 segundos

      return () => clearTimeout(timer);
    } else {
      console.log('[CacheWarmer] ⏭️ Precache já foi feito recentemente');
    }
  }, []);

  // Mostrar indicador de progresso se estiver cacheando
  if (cacheStatus.loading && cacheStatus.total > 0) {
    return (
      <div 
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          background: '#0f172a',
          color: 'white',
          padding: '12px 16px',
          borderRadius: 8,
          fontSize: 12,
          zIndex: 9999,
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
        }}
      >
        📥 Preparando offline: {cacheStatus.cached}/{cacheStatus.total}
      </div>
    );
  }

  return null;
}
