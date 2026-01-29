# 🚀 Como Iniciar o Servidor de Desenvolvimento

## ⚠️ PROBLEMA IDENTIFICADO

Você está vendo a versão antiga porque o servidor de desenvolvimento não está rodando com as mudanças mais recentes.

## ✅ SOLUÇÃO RÁPIDA

Abra o **Terminal** e execute estes comandos:

```bash
cd "/Users/giullianoalves/Documents/Projetos Antigravity/Funnels"

# Limpar cache do Vite
rm -rf node_modules/.vite dist

# Iniciar servidor de desenvolvimento
npm run dev
```

## 📍 Acessar o Site

Depois que o servidor iniciar, abra no navegador:

**http://localhost:3000**

Se a porta 3000 estiver ocupada, o Vite usará automaticamente outra porta (geralmente 3001, 3002, etc.) e mostrará no terminal.

## 🧹 Limpar Cache do Navegador

Para garantir que você vê as mudanças mais recentes:

1. **Chrome/Edge:** Pressione `Cmd + Shift + R` (Mac) ou `Ctrl + Shift + R` (Windows)
2. **Firefox:** Pressione `Cmd + Shift + R` (Mac) ou `Ctrl + F5` (Windows)
3. **Safari:** Pressione `Cmd + Option + E` para limpar cache, depois `Cmd + R`

## ✨ Mudanças Implementadas na Página de Preços

Quando você acessar `http://localhost:3000/#/pricing`, verá:

### 1. **CostBreakdown Component** (Ver custos adicionais)
   - Conversão automática USD → BRL (1 USD = R$ 5,00)
   - Tooltips explicativos em cada custo
   - Exemplos práticos de uso
   - Design compacto que não quebra layout

### 2. **EnterpriseCostInfo Component** (Plano Enterprise)
   - Informações customizadas sobre modelo de precificação
   - Exemplo de precificação com valores reais
   - Benefícios do plano Enterprise
   - Mantém consistência visual com outros planos

### 3. **CompactPricingTable Component** (Tabela comparativa)
   - Design inspirado em Pipedrive/Stripe/Linear
   - Mantém tamanho compacto (não expande a página)
   - Destaque para o plano "Growth" (mais popular)
   - Categorias organizadas: CRM, Automação, Marketing, etc.

## 🔍 Verificar se Está Funcionando

Na página de preços, você deve ver:

1. **Planos Starter, Growth e Scale:**
   - Botão "Ver custos adicionais" que abre accordion
   - Accordion com tabela de custos em BRL e USD
   - Tooltips ao passar mouse nos ícones de informação

2. **Plano Enterprise:**
   - Seção "MODELO CUSTOMIZADO" em verde neon
   - Lista de benefícios
   - Exemplo de precificação

3. **Tabela Comparativa:**
   - Abaixo dos cards de preços
   - Plano "Growth" com destaque verde
   - Checkmarks (✓) para recursos incluídos
   - Cross (✕) para recursos não incluídos

## ❌ Se Continuar Não Funcionando

1. **Verifique se há erros no console do terminal**
2. **Abra o DevTools do navegador (F12) e veja se há erros no Console**
3. **Confirme que está acessando http://localhost:3000 (não uma versão em produção)**
4. **Tente em uma aba anônima do navegador para garantir cache limpo**

## 📝 Arquivos Criados/Modificados

- ✅ `components/pricing/CostBreakdown.tsx` (NOVO)
- ✅ `components/pricing/EnterpriseCostInfo.tsx` (NOVO)
- ✅ `components/pricing/CompactPricingTable.tsx` (NOVO)
- ✅ `components/Pricing.tsx` (MODIFICADO)

Todos os arquivos já foram commitados no Git (commit `b068d17`).

## 🆘 Ainda com Problemas?

Se depois de seguir todos os passos você ainda ver a versão antiga:

1. Feche TODAS as abas do navegador com localhost:3000
2. Pare o servidor (Ctrl+C no terminal)
3. Execute novamente `npm run dev`
4. Abra em uma **nova aba anônima**
5. Acesse http://localhost:3000/#/pricing

---

**Última atualização:** 29 de Janeiro de 2026, 17:40
