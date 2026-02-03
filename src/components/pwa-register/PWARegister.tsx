'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    workbox?: any;
  }
}

export default function PWARegister() {
  useEffect(() => {
    console.log('[PWA] 🚀 Iniciando registro do PWA...');
    console.log('[PWA] 📱 User Agent:', navigator.userAgent);
    console.log('[PWA] 🌐 Online?', navigator.onLine);
    
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      console.log('[PWA] ✅ Service Worker suportado');
      
      // Registrar o Service Worker
      navigator.serviceWorker.register('/sw.js', { scope: '/' })
        .then((registration) => {
          console.log('[PWA] ✅ Service Worker registrado com sucesso');
          console.log('[PWA] 📊 Estado:', registration.active?.state);
          console.log('[PWA] 🔍 Scope:', registration.scope);
          
          // Fazer precache manual das páginas principais
          if ('caches' in window) {
            console.log('[PWA] 💾 Cache API disponível');
            
            // Carregar lista de URLs do arquivo gerado no build
            console.log('[PWA] 📥 Carregando lista de URLs para cache...');
            
            fetch('/cache-urls.json')
              .then(response => {
                if (!response.ok) {
                  console.warn('[PWA] ⚠️ Arquivo cache-urls.json não encontrado, usando lista padrão');
                  return [
                    '/',
                    '/juventude',
                    '/infancia',
                    '/adulta',
                    '/terceira-idade',
                    '/offline',
                  ];
                }
                return response.json();
              })
              .then((urlsToCache: string[]) => {
                console.log('[PWA] 📦 URLs para cache:', urlsToCache.length);
                console.log('[PWA] 📋 Lista completa:', urlsToCache);
                
                caches.open('pages-precache-v1').then((cache) => {
                  console.log('[PWA] ✅ Cache aberto: pages-precache-v1');
                  console.log('[PWA] 🔄 Iniciando precache de', urlsToCache.length, 'páginas...');
                  
                  // Cachear em lotes para não sobrecarregar
                  const batchSize = 10;
                  let currentIndex = 0;
                  
                  const cacheBatch = async () => {
                    const batch = urlsToCache.slice(currentIndex, currentIndex + batchSize);
                    
                    if (batch.length === 0) {
                      console.log('[PWA] ✅ Precache concluído com sucesso!');
                      
                      // Verificar o que está no cache
                      cache.keys().then((keys) => {
                        console.log('[PWA] 📋 Total de itens no cache:', keys.length);
                        console.log('[PWA] 📊 Detalhamento:');
                        keys.forEach((key, index) => {
                          console.log(`[PWA] ${index + 1}. ${key.url}`);
                        });
                      });
                      return;
                    }
                    
                    console.log(`[PWA] 🔄 Cacheando lote ${Math.floor(currentIndex / batchSize) + 1}/${Math.ceil(urlsToCache.length / batchSize)}...`);
                    
                    try {
                      await cache.addAll(batch);
                      console.log(`[PWA] ✅ Lote ${Math.floor(currentIndex / batchSize) + 1} concluído (${batch.length} páginas)`);
                      currentIndex += batchSize;
                      
                      // Pequeno delay entre lotes para não sobrecarregar
                      setTimeout(cacheBatch, 100);
                    } catch (error: any) {
                      console.error(`[PWA] ❌ Erro no lote ${Math.floor(currentIndex / batchSize) + 1}:`, error);
                      console.error('[PWA] 🔍 URLs problemáticas:', batch);
                      console.error('[PWA] 🔍 Detalhes do erro:', error.message);
                      
                      // Tentar cachear individualmente para identificar qual URL falhou
                      for (const url of batch) {
                        try {
                          await cache.add(url);
                          console.log(`[PWA] ✅ Cached: ${url}`);
                        } catch (e: any) {
                          console.error(`[PWA] ❌ Falhou ao cachear: ${url}`, e.message);
                        }
                      }
                      
                      currentIndex += batchSize;
                      setTimeout(cacheBatch, 100);
                    }
                  };
                  
                  cacheBatch();
                }).catch((error) => {
                  console.error('[PWA] ❌ Erro ao abrir cache:', error);
                });
              })
              .catch((error) => {
                console.error('[PWA] ❌ Erro ao carregar cache-urls.json:', error);
              });
          } else {
            console.warn('[PWA] ⚠️ Cache API não disponível');
          }
          
          // Verificar atualizações periodicamente
          const updateInterval = setInterval(() => {
            console.log('[PWA] 🔄 Verificando atualizações do SW...');
            registration.update();
          }, 60000); // Verificar a cada minuto
          
          // Ouvir por novas versões
          registration.addEventListener('updatefound', () => {
            console.log('[PWA] 🆕 Atualização do SW encontrada!');
            const newWorker = registration.installing;
            
            newWorker?.addEventListener('statechange', () => {
              console.log('[PWA] 📊 Novo SW estado:', newWorker.state);
              if (newWorker.state === 'activated') {
                console.log('[PWA] ✅ Nova versão do Service Worker ativada');
                clearInterval(updateInterval);
                window.location.reload();
              }
            });
          });
          
          // Monitorar mudanças no controller
          navigator.serviceWorker.addEventListener('controllerchange', () => {
            console.log('[PWA] 🔄 Controller do SW mudou');
          });
          
          // Monitorar mensagens do SW
          navigator.serviceWorker.addEventListener('message', (event) => {
            console.log('[PWA] 💬 Mensagem do SW:', event.data);
          });
        })
        .catch((error) => {
          console.error('[PWA] ❌ Erro ao registrar Service Worker:', error);
          console.error('[PWA] 🔍 Stack:', error.stack);
        });
    } else {
      console.warn('[PWA] ⚠️ Service Worker não suportado neste navegador');
    }
    
    // Monitorar mudanças de conexão
    const handleOnline = () => console.log('[PWA] 🌐 ONLINE - Conexão restaurada');
    const handleOffline = () => console.log('[PWA] 📴 OFFLINE - Conexão perdida');
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return null;
}
