import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Função para encontrar todos os arquivos HTML recursivamente
function getAllHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getAllHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      // Converter para caminho relativo à pasta out
      const relativePath = path.relative(path.join(__dirname, '..', 'out'), filePath);
      // Converter para URL (usar / em vez de \)
      const urlPath = '/' + relativePath.replace(/\\/g, '/').replace(/\.html$/, '');
      fileList.push(urlPath === '/index' ? '/' : urlPath);
    }
  });

  return fileList;
}

// Gerar lista de páginas
const outDir = path.join(__dirname, '..', 'out');
if (fs.existsSync(outDir)) {
  const htmlPages = getAllHtmlFiles(outDir);
  console.log('Páginas encontradas:', htmlPages);
  
  // Salvar em arquivo JSON para usar na configuração
  fs.writeFileSync(
    path.join(__dirname, '..', 'precache-pages.json'),
    JSON.stringify(htmlPages, null, 2)
  );
  
  console.log('✅ Lista de páginas salva em precache-pages.json');
} else {
  console.log('⚠️ Pasta out/ não encontrada. Execute npm run build primeiro.');
}
