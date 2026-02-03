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
    const urlPath = path.join(basePath, entry.name).replace(/\\/g, '/');
    
    if (entry.isDirectory() && !entry.name.startsWith('_next') && !entry.name.startsWith('.')) {
      // Escanear subpastas recursivamente
      scanDirectory(fullPath, urlPath);
    } else if (entry.name.endsWith('.html')) {
      // Converter para URL
      let url;
      
      if (entry.name === 'index.html') {
        // Se for index.html, usar o diretório como URL
        url = basePath.replace(/\\/g, '/');
      } else if (entry.name === '404.html' || entry.name.startsWith('_')) {
        // Ignorar páginas especiais
        return;
      } else {
        // Para outros .html, remover a extensão
        url = urlPath.replace(/\.html$/, '');
      }
      
      // Normalizar URL
      if (url === '' || url === 'index') {
        url = '/';
      } else if (!url.startsWith('/')) {
        url = '/' + url;
      }
      
      // Adicionar à lista
      urls.push(url);
      console.log('[BUILD] 📄 Encontrado:', url);
    }
  });
}

scanDirectory(outDir);

// Remover duplicatas e ordenar
const uniqueUrls = [...new Set(urls)].sort();

console.log('[BUILD] ✅ Total de URLs encontradas:', uniqueUrls.length);
console.log('[BUILD] 📊 Exemplos:', uniqueUrls.slice(0, 10));

// Salvar no arquivo JSON em duas localizações
const publicPath = path.join(process.cwd(), 'public', 'cache-urls.json');
const outPath = path.join(process.cwd(), 'out', 'cache-urls.json');

// Salvar em public/ para desenvolvimento
fs.writeFileSync(publicPath, JSON.stringify(uniqueUrls, null, 2));
console.log('[BUILD] 💾 Lista salva em public/:', publicPath);

// Salvar em out/ para produção
if (fs.existsSync(path.join(process.cwd(), 'out'))) {
  fs.writeFileSync(outPath, JSON.stringify(uniqueUrls, null, 2));
  console.log('[BUILD] 💾 Lista salva em out/:', outPath);
} else {
  console.log('[BUILD] ⚠️ Pasta out/ não existe, apenas public/ foi atualizado');
}

console.log('[BUILD] 🎉 Concluído!');
