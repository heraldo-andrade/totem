const fs = require('fs');
const path = require('path');

// Script que cria um cache-urls.json inicial vazio se não existir
console.log('[PREBUILD] Verificando cache-urls.json...');

const publicPath = path.join(process.cwd(), 'public', 'cache-urls.json');

if (!fs.existsSync(publicPath)) {
  // Criar com páginas básicas para o primeiro build
  const defaultUrls = [
    '/',
    '/offline',
    '/juventude',
    '/infancia', 
    '/adulta',
    '/terceira-idade'
  ];
  
  fs.writeFileSync(publicPath, JSON.stringify(defaultUrls, null, 2));
  console.log('[PREBUILD] ✅ Criado cache-urls.json inicial com', defaultUrls.length, 'URLs');
} else {
  console.log('[PREBUILD] ✅ cache-urls.json já existe');
}
