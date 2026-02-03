const fs = require('fs');
const path = require('path');

// Script que copia cache-urls.json para out/ após o build
console.log('[POSTBUILD] Copiando cache-urls.json para out/...');

const publicPath = path.join(process.cwd(), 'public', 'cache-urls.json');
const outPath = path.join(process.cwd(), 'out', 'cache-urls.json');

if (fs.existsSync(publicPath) && fs.existsSync(path.join(process.cwd(), 'out'))) {
  fs.copyFileSync(publicPath, outPath);
  console.log('[POSTBUILD] ✅ cache-urls.json copiado para out/');
} else {
  console.log('[POSTBUILD] ⚠️ Arquivos não encontrados');
}
