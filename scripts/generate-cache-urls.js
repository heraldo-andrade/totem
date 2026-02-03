const fs = require('fs');
const path = require('path');

console.log('[BUILD] 🔍 Escaneando pasta out/ para gerar lista de URLs...');

const outDir = path.join(process.cwd(), 'out');
const urls = [];

function scanDirectory(dir, basePath = '') {
  if (!fs.existsSync(dir)) {
    console.log('[BUILD] ⚠️ Pasta out/ não encontrada. Execute npm run build primeiro.');
    return;
  }
  
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  entries.forEach((entry) => {
    const fullPath = path.join(dir, entry.name);
    const urlPath = path.join(basePath, entry.name);
    
    if (entry.isDirectory() && !entry.name.startsWith('_next') && !entry.name.startsWith('.')) {
      scanDirectory(fullPath, urlPath);
    } else if (entry.name.endsWith('.html') && !entry.name.startsWith('_')) {
      // Converter para URL
      let url = urlPath.replace(/\\/g, '/');
      
      // Se for index.html, usar só o diretório
      if (entry.name === 'index.html') {
        url = basePath.replace(/\\/g, '/');
      } else {
        url = url.replace(/\.html$/, '');
      }
      
      // Normalizar URL
      if (url === '' || url === '/') {
        url = '/';
      } else if (!url.startsWith('/')) {
        url = '/' + url;
      }
      
      urls.push(url);
      console.log('[BUILD] 📄 Encontrado:', url);
    }
  });
}

scanDirectory(outDir);

// Remover duplicatas e ordenar
const uniqueUrls = [...new Set(urls)].sort();

console.log('[BUILD] ✅ Total de URLs encontradas:', uniqueUrls.length);

// Salvar no arquivo JSON
const outputPath = path.join(process.cwd(), 'public', 'cache-urls.json');
fs.writeFileSync(outputPath, JSON.stringify(uniqueUrls, null, 2));

console.log('[BUILD] 💾 Lista salva em:', outputPath);
console.log('[BUILD] 🎉 Concluído!');
