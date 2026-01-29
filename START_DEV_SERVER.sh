#!/bin/bash

# Script para iniciar o servidor de desenvolvimento com cache limpo
# Execute este script para ver as mudanças da página de preços

echo "🚀 Iniciando servidor de desenvolvimento do FUNNELS..."
echo ""

# Navegar para o diretório do projeto
cd "/Users/giullianoalves/Documents/Projetos Antigravity/Funnels"

# Limpar cache do Vite
echo "🧹 Limpando cache do Vite..."
rm -rf node_modules/.vite dist

# Verificar se node_modules existe
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependências..."
    npm install
fi

echo ""
echo "✨ Iniciando servidor de desenvolvimento..."
echo "📍 O servidor estará disponível em: http://localhost:3000"
echo ""
echo "⚠️  ATENÇÃO: Certifique-se de limpar o cache do navegador!"
echo ""
echo "💡 Para visualizar as mudanças:"
echo "   1. Abra http://localhost:3000 no navegador"
echo "   2. Navegue até a página de Preços (#/pricing)"
echo "   3. Limpe o cache do navegador (Cmd+Shift+R no Mac)"
echo ""
echo "🔧 Mudanças implementadas:"
echo "   ✅ CostBreakdown com conversão BRL/USD"
echo "   ✅ EnterpriseCostInfo customizado"
echo "   ✅ CompactPricingTable (design compacto)"
echo ""

# Iniciar servidor de desenvolvimento
npm run dev
