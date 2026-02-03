'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    workbox?: any;
  }
}

export default function PWARegister() {
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      window.workbox !== undefined
    ) {
      const wb = window.workbox;

      // Log quando o SW é registrado
      wb.addEventListener('installed', (event: any) => {
        console.log(`✅ Service Worker instalado: ${event.isUpdate ? 'Atualização' : 'Nova instalação'}`);
      });

      // Log quando o SW está ativo
      wb.addEventListener('activated', (event: any) => {
        console.log('✅ Service Worker ativado');
      });

      // Pedir para recarregar quando houver atualização
      wb.addEventListener('waiting', () => {
        console.log('🔄 Nova versão disponível. Atualizando...');
        wb.messageSkipWaiting();
      });

      wb.addEventListener('controlling', () => {
        console.log('🔄 Service Worker controlando a página');
        window.location.reload();
      });

      wb.register();
    }
  }, []);

  return null;
}
