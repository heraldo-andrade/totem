'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    workbox?: any;
  }
}

export default function PWARegister() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      // Registrar o Service Worker
      navigator.serviceWorker.register('/sw.js', { scope: '/' })
        .then((registration) => {
          console.log('Service Worker registrado com sucesso', registration);
          
          // Fazer precache manual das páginas principais
          if ('caches' in window) {
            const urlsToCache = [
              '/',
              '/juventude',
              '/infancia',
              '/adulta',
              '/terceira-idade',
              '/offline',
            ];
            
            caches.open('pages-precache-v1').then((cache) => {
              console.log('Fazendo precache das páginas principais...');
              cache.addAll(urlsToCache).catch((error) => {
                console.warn('Erro ao fazer precache:', error);
              });
            });
          }
          
          // Verificar atualizações periodicamente
          const updateInterval = setInterval(() => {
            registration.update();
          }, 60000); // Verificar a cada minuto
          
          // Ouvir por novas versões
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            
            newWorker?.addEventListener('statechange', () => {
              if (newWorker.state === 'activated') {
                console.log('Nova versão do Service Worker ativada');
                clearInterval(updateInterval);
                window.location.reload();
              }
            });
          });
        })
        .catch((error) => {
          console.error('Erro ao registrar Service Worker:', error);
        });
    }
  }, []);

  return null;
}
