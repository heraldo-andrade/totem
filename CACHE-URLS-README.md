# 📝 Notas Importantes - PWA Cache

## ⚠️ ATENÇÃO - Sobre o cache-urls.json

Este arquivo é **gerado automaticamente** durante o build pelo script `generate-cache-urls.js`.

### Durante o Build (npm run build):

1. Next.js gera todas as páginas estáticas em `out/`
2. O script `generate-cache-urls.js` varre a pasta `out/` recursivamente
3. Todas as URLs encontradas são salvas em `public/cache-urls.json`
4. O arquivo é copiado para `out/` pelo Next.js

### Estrutura esperada na pasta out/:

```
out/
├── index.html                 → /
├── juventude/
│   └── index.html            → /juventude
│   └── assistencia-social-cidadania/
│       └── obter-primeira-via/
│           └── index.html    → /juventude/assistencia-social-cidadania/obter-primeira-via
├── adulta/
│   └── index.html            → /adulta
│   └── cultura-artes/
│       └── visitar-museu/
│           └── index.html    → /adulta/cultura-artes/visitar-museu
└── ...
```

### Para desenvolvedores:

1. **Desenvolvimento local**: Edite `public/cache-urls.json` manualmente para testar
2. **Build de produção**: O arquivo é gerado automaticamente
3. **Na Vercel**: O build executa o script automaticamente

### Verificar se funcionou:

Após `npm run build`, verifique:
```bash
cat public/cache-urls.json
# Deve mostrar TODAS as URLs, incluindo as páginas dinâmicas
```

### Se não estiver funcionando na Vercel:

1. Verificar logs de build da Vercel
2. Procurar por: `[BUILD] ✅ Total de URLs encontradas: XXX`
3. Se não aparecer, o script não rodou
4. Verificar se `package.json` tem: `"build": "next build --webpack && node scripts/generate-cache-urls.js"`
