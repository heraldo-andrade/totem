// Script de debug para Service Worker
// Este arquivo ajuda a monitorar o comportamento do SW

console.log('[SW-DEBUG] 🔧 Script de debug carregado');

// Interceptar fetch events
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  console.log('[SW-DEBUG] 📥 FETCH:', {
    method: event.request.method,
    url: url.pathname,
    mode: event.request.mode,
    destination: event.request.destination,
    cache: event.request.cache,
  });
});

// Monitorar instalação
self.addEventListener('install', (event) => {
  console.log('[SW-DEBUG] 📦 INSTALL event disparado');
  console.log('[SW-DEBUG] 📦 Event:', event);
});

// Monitorar ativação
self.addEventListener('activate', (event) => {
  console.log('[SW-DEBUG] ✅ ACTIVATE event disparado');
  console.log('[SW-DEBUG] ✅ Event:', event);
});

// Monitorar mensagens
self.addEventListener('message', (event) => {
  console.log('[SW-DEBUG] 💬 MESSAGE recebido:', event.data);
});
