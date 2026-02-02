#!/bin/bash
# Script para servir a aplicação com suporte a rotas (SPA)

# Instalar http-server se não existir
if ! command -v http-server &> /dev/null; then
  echo "Instalando http-server..."
  npm install -g http-server
fi

echo "Iniciando servidor na porta 8080..."
echo "Acesse em: http://localhost:8080"
echo "Para testar offline: F12 -> Application -> Service Workers -> Offline"
echo ""

# Servir com suporte a rotas (fallback para index.html)
cd out
http-server -p 8080 --push-state
