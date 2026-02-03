'use client';

import { useEffect, useState } from 'react';

export default function PWADebugPanel() {
  const [debugInfo, setDebugInfo] = useState({
    swRegistered: false,
    swState: 'N/A',
    isOnline: true,
    cacheCount: 0,
    totalUrls: 0,
    cacheProgress: '0%',
    lastUpdate: new Date().toLocaleTimeString(),
  });

  useEffect(() => {
    const updateDebugInfo = async () => {
      const info: any = {
        isOnline: navigator.onLine,
        lastUpdate: new Date().toLocaleTimeString(),
      };

      // Verificar Service Worker
      if ('serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.getRegistration();
        if (registration) {
          info.swRegistered = true;
          info.swState = registration.active?.state || 'installing';
        }
      }

      // Verificar cache
      if ('caches' in window) {
        try {
          const cache = await caches.open('pages-precache-v1');
          const keys = await cache.keys();
          info.cacheCount = keys.length;
          
          // Carregar total de URLs esperadas
          try {
            const response = await fetch('/cache-urls.json');
            if (response.ok) {
              const urls = await response.json();
              info.totalUrls = urls.length;
              info.cacheProgress = `${Math.round((info.cacheCount / info.totalUrls) * 100)}%`;
            }
          } catch (e) {
            info.totalUrls = 6; // Fallback
            info.cacheProgress = `${Math.round((info.cacheCount / 6) * 100)}%`;
          }
        } catch (e) {
          info.cacheCount = 0;
          info.totalUrls = 0;
          info.cacheProgress = '0%';
        }
      }

      setDebugInfo(info);
    };

    updateDebugInfo();
    const interval = setInterval(updateDebugInfo, 3000);

    return () => clearInterval(interval);
  }, []);

  // Só mostrar em development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 10,
        right: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        color: '#00ff00',
        padding: '10px',
        borderRadius: '8px',
        fontSize: '12px',
        fontFamily: 'monospace',
        zIndex: 99999,
        maxWidth: '300px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
      }}
    >
      <div style={{ fontWeight: 'bold', marginBottom: '8px', color: '#fff' }}>
        🔍 PWA Debug Panel
      </div>
      <div>
        <span style={{ color: '#888' }}>Cache:</span> {debugInfo.cacheCount}/{debugInfo.totalUrls} ({debugInfo.cacheProgress})
        <span style={{ color: debugInfo.isOnline ? '#0f0' : '#f00' }}>
          {debugInfo.isOnline ? '🟢 ONLINE' : '🔴 OFFLINE'}
        </span>
      </div>
      <div>
        <span style={{ color: '#888' }}>SW Registrado:</span>{' '}
        <span style={{ color: debugInfo.swRegistered ? '#0f0' : '#f00' }}>
          {debugInfo.swRegistered ? '✅ Sim' : '❌ Não'}
        </span>
      </div>
      <div>
        <span style={{ color: '#888' }}>SW Estado:</span> {debugInfo.swState}
      </div>
      <div>
        <span style={{ color: '#888' }}>Páginas em Cache:</span> {debugInfo.cacheCount}
      </div>
      <div style={{ fontSize: '10px', marginTop: '8px', color: '#666' }}>
        Última atualização: {debugInfo.lastUpdate}
      </div>
    </div>
  );
}
