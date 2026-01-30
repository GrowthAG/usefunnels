# TEMPLATE DE ARTIGO HIGH-PERFORMANCE — FUNNELS

## Guia Completo de Padronização, SEO e Conversão

*Versão 1.0 — Janeiro 2026*

---

# PARTE 1: DIAGNÓSTICO DOS ARTIGOS ATUAIS

## 1.1 Análise Geral

Foram analisados **4 artigos** publicados:

| Artigo | Tipo | Palavras | Tempo |
|--------|------|----------|-------|
| Funnels vs HubSpot | Comparativo | ~2.500 | 12 min |
| Funnels vs RD Station | Comparativo | ~2.800 | 14 min |
| Funnels vs ActiveCampaign | Comparativo | ~2.600 | 11 min |
| Case RevHackers | Case de Sucesso | ~2.400 | 8 min |

---

## 1.2 Pontos Positivos Identificados

### Estrutura
- [x] Uso correto de H1 único
- [x] Hierarquia H2 > H3 bem aplicada
- [x] Tabelas comparativas (excelente para featured snippets)
- [x] TL;DR no início (bom para retenção)
- [x] Seção "Para quem é cada ferramenta" (segmentação de intenção)
- [x] CTAs no final

### Conteúdo
- [x] Tom equilibrado (não ataca concorrentes)
- [x] Dados e números concretos
- [x] Cenários de preço realistas
- [x] Casos de uso específicos
- [x] Depoimentos/quotes

### SEO Básico
- [x] Frontmatter com keywords
- [x] Slug amigável
- [x] Meta description presente
- [x] Keywords no H1 e H2s

---

## 1.3 Problemas Críticos Identificados

### 1. AUSÊNCIA DE SUMÁRIO NAVEGÁVEL

**Problema:** Nenhum artigo tem índice clicável com âncoras.

**Impacto:**
- UX ruim em artigos longos (12-14 min leitura)
- Perda de oportunidade de Jump Links no Google
- Dificulta escaneabilidade

**Solução:** Adicionar sumário interativo após intro.

---

### 2. BLOCOS VISUAIS DE DESTAQUE INEXISTENTES

**Problema:** Todo conteúdo é texto corrido + tabelas. Não há:
- Callout boxes
- Insights destacados
- Alertas/avisos
- Cards de resumo
- Citações estilizadas

**Impacto:**
- Escaneabilidade baixa
- Fadiga visual
- Dificuldade de encontrar informações-chave

**Solução:** Implementar componentes visuais padronizados.

---

### 3. CTAs FRACOS E MAL POSICIONADOS

**Problema atual:**
- CTAs só no final do artigo
- Links genéricos (#demo, #calculadora, #contato)
- Sem lead magnets contextuais
- Sem formulários inline

**Impacto:**
- Taxa de conversão baixa (1-2% estimado)
- Perda de leads no meio do funil
- Desperdício de tráfego qualificado

**Solução:** CTAs distribuídos estrategicamente + lead magnets específicos.

---

### 4. AUSÊNCIA DE IMAGENS E RECURSOS VISUAIS

**Problema:** Zero imagens em todos os artigos.

**Impacto:**
- Não aparece no Google Imagens
- Menor engajamento visual
- Perda de oportunidade de branding
- Alt texts não existem = perda de SEO

**Solução:** Definir padrão de imagens por tipo de artigo.

---

### 5. LINKS INTERNOS INSUFICIENTES

**Problema:**
- Apenas 1-2 links internos por artigo
- Links genéricos sem contexto
- Nenhum link entre artigos do blog

**Impacto:**
- PageRank não distribuído
- Sessões curtas
- Baixo pages/session

**Solução:** Mínimo 5 links internos estratégicos.

---

### 6. RICH SNIPPETS NÃO EXPLORADOS

**Problema:**
- Sem schema markup definido
- FAQs sem estrutura para featured snippets
- Tabelas não otimizadas para table snippets

**Impacto:**
- Perda de SERP real estate
- CTR menor que potencial

**Solução:** Implementar schema Article + FAQ + Table.

---

### 7. SEÇÃO FAQ AUSENTE

**Problema:** Nenhum artigo tem FAQ estruturado.

**Impacto:**
- Perda de featured snippets "People Also Ask"
- Oportunidade de long-tail keywords desperdiçada
- Menor cobertura de intenções de busca

**Solução:** FAQ obrigatório com 5-8 perguntas.

---

### 8. PROVA SOCIAL SUBAPROVEITADA

**Problema:**
- Quotes sem foto/nome completo
- Sem logos de clientes
- Sem métricas destacadas visualmente

**Impacto:**
- Credibilidade reduzida
- Conversão menor

**Solução:** Bloco de prova social padronizado.

---

## 1.4 Matriz de Prioridades

| Problema | Impacto SEO | Impacto Conversão | Esforço | Prioridade |
|----------|-------------|-------------------|---------|------------|
| CTAs mal posicionados | Baixo | **CRÍTICO** | Baixo | P0 |
| Ausência de imagens | Alto | Médio | Médio | P0 |
| Sem sumário navegável | Médio | Alto | Baixo | P0 |
| Blocos visuais | Baixo | Alto | Médio | P1 |
| FAQ ausente | **CRÍTICO** | Médio | Baixo | P1 |
| Links internos | Alto | Baixo | Baixo | P1 |
| Rich snippets | Alto | Baixo | Médio | P2 |
| Prova social | Baixo | Alto | Médio | P2 |

---

# PARTE 2: TEMPLATE PADRÃO DE ARTIGO

## 2.1 Estrutura Master (Esqueleto Completo)

```markdown
---
# FRONTMATTER SEO
title: "[Keyword Principal]: [Benefício/Promessa] [Ano]"
slug: "keyword-principal-variacao"
description: "[Keyword] + [Proposta de valor] + [CTA implícito]. Máx 155 caracteres."
keywords:
  - keyword principal
  - keyword secundária 1
  - keyword secundária 2
  - keyword long-tail 1
  - keyword long-tail 2
category: "[Categoria]"
author: "Time Funnels"
date: "YYYY-MM-DD"
readTime: "X min"
featured: true/false
schema: "Article" # ou FAQ, HowTo, Review
image: "/images/blog/slug-og-image.png"
imageAlt: "Descrição acessível da imagem"
---

# [H1 com Keyword Principal]

[HOOK - 2-3 linhas que capturam atenção imediata]

[CONTEXTUALIZAÇÃO DA DOR - 2-3 linhas conectando com o problema do leitor]

[PROMESSA DE VALOR - O que o leitor vai ganhar lendo este artigo]

---

## Índice

- [Seção 1](#ancora-1)
- [Seção 2](#ancora-2)
- [Seção 3](#ancora-3)
- [Seção 4](#ancora-4)
- [FAQ](#faq)
- [Conclusão](#conclusao)

---

<!-- CTA INLINE #1: Lead Magnet após intro (300 palavras) -->

> 📥 **[Nome do Lead Magnet]**
>
> [Descrição curta do valor]
>
> **[Baixar Grátis →](#lead-magnet)**

---

## Seção 1: [H2 com Keyword Secundária] {#ancora-1}

[Conteúdo da seção]

### Subseção 1.1 [H3]

[Conteúdo]

<!-- BLOCO DE INSIGHT -->
> 💡 **Insight Importante**
>
> [Informação-chave destacada que o leitor precisa lembrar]

### Subseção 1.2 [H3]

[Conteúdo com lista]

- **Item 1:** Explicação
- **Item 2:** Explicação
- **Item 3:** Explicação

---

## Seção 2: [H2 com Variação de Keyword] {#ancora-2}

[Conteúdo]

<!-- TABELA COMPARATIVA -->
| Critério | Opção A | Opção B | Opção C |
|----------|---------|---------|---------|
| Feature 1 | ✅ Sim | ⚠️ Parcial | ❌ Não |
| Feature 2 | ✅ Sim | ✅ Sim | ❌ Não |
| Preço | R$ X | R$ Y | R$ Z |

<!-- BLOCO DE ALERTA -->
> ⚠️ **Atenção**
>
> [Informação importante/cuidado que o leitor deve ter]

---

<!-- CTA INLINE #2: Contextual no meio do artigo -->

> 🎯 **Quer ver isso na prática?**
>
> [Breve descrição do que o usuário vai ganhar]
>
> **[Agendar Demo Gratuita →](#demo)**

---

## Seção 3: [H2 - Como Fazer/Passo a Passo] {#ancora-3}

### Passo 1: [Nome do Passo]

[Explicação detalhada]

### Passo 2: [Nome do Passo]

[Explicação detalhada]

### Passo 3: [Nome do Passo]

[Explicação detalhada]

<!-- BLOCO DE EXEMPLO PRÁTICO -->
> 📋 **Exemplo Prático**
>
> **Situação:** [Contexto]
> **Ação:** [O que foi feito]
> **Resultado:** [Métrica/outcome]

---

## Seção 4: [H2 - Prova Social/Resultados] {#ancora-4}

<!-- BLOCO DE CASE/DEPOIMENTO -->
> 💬 **Case: [Nome da Empresa]**
>
> "[Depoimento real com resultado específico]"
>
> — **[Nome], [Cargo]** @ [Empresa]
>
> **Resultados:**
> - +X% em [métrica 1]
> - -Y% em [métrica 2]
> - R$ Z de economia

---

## FAQ — Perguntas Frequentes {#faq}

### [Pergunta 1 com keyword long-tail]?

[Resposta direta e completa em 2-4 linhas]

### [Pergunta 2]?

[Resposta]

### [Pergunta 3]?

[Resposta]

### [Pergunta 4]?

[Resposta]

### [Pergunta 5]?

[Resposta]

---

## Conclusão {#conclusao}

[Resumo dos principais pontos em 3-4 linhas]

[Reforço da proposta de valor]

[Transição para CTA]

---

<!-- CTA FINAL: Bloco completo de conversão -->

## Próximos Passos

### [CTA Principal - Ação mais importante]

[Descrição do valor + o que o usuário ganha]

**[BOTÃO CTA PRINCIPAL →](#acao-principal)**

### [CTA Secundário - Ação alternativa]

[Descrição mais curta]

**[Link secundário →](#acao-secundaria)**

### [CTA Terciário - Para quem não está pronto]

[Recurso gratuito/newsletter]

**[Link terciário →](#recurso)**

---

*Última atualização: [Mês Ano]*
*Este artigo é atualizado [frequência] para garantir informações precisas.*
```

---

## 2.2 Bloco de Abertura (Hook + Contexto + Promessa)

### Fórmula para HOOK (primeira linha):

**Padrão 1: Estatística Impactante**
```
"X% das empresas brasileiras [problema]. Você é uma delas?"
```

**Padrão 2: Pergunta Provocativa**
```
"E se você pudesse [resultado desejado] em [tempo]?"
```

**Padrão 3: Contradição/Insight**
```
"A maioria das empresas acredita que [crença comum]. A realidade é diferente."
```

**Padrão 4: Empatia Direta**
```
"Se você [situação do leitor], este artigo foi escrito para você."
```

### Exemplo Aplicado:

```markdown
# Funnels vs HubSpot: Comparativo Completo para 2026

Você está pagando R$ 4.000/mês no HubSpot e se perguntando se vale a pena?

Essa é uma dúvida comum. O HubSpot é excelente — para quem pode pagar por ele.
Mas para empresas brasileiras que precisam de WhatsApp, suporte local e preço
em real, existem alternativas que entregam mais por menos.

Neste comparativo, você vai descobrir:
- Quando o HubSpot ainda faz sentido
- Quando migrar economiza até R$ 96.000/ano
- Como fazer a transição sem perder dados
```

---

## 2.3 Bloco SEO (Checklist de Elementos)

### Frontmatter Completo:

```yaml
---
# SEO BÁSICO
title: "Keyword Principal: Benefício Claro | Funnels"  # Max 60 chars
slug: "keyword-principal-2026"                          # URL amigável
description: "Meta description com keyword no início, proposta de valor clara e CTA implícito. Máximo 155 caracteres."

# KEYWORDS (5-8)
keywords:
  - keyword principal (volume alto)
  - keyword secundária 1 (volume médio)
  - keyword secundária 2 (volume médio)
  - keyword long-tail 1 (volume baixo, alta intenção)
  - keyword long-tail 2 (volume baixo, alta intenção)

# CATEGORIZAÇÃO
category: "Comparativo"  # ou: Guia, Tutorial, Case, Playbook, Ferramenta
author: "Time Funnels"
date: "2026-01-30"
readTime: "12 min"
featured: true

# RICH SNIPPETS
schema: "Article"        # Article, FAQ, HowTo, Review, Product
faqSchema: true          # Gera schema FAQ automaticamente

# IMAGENS
image: "/images/blog/funnels-vs-hubspot-og.png"
imageAlt: "Comparativo visual Funnels vs HubSpot com tabela de preços"

# RELACIONADOS
relatedPosts:
  - "como-migrar-hubspot"
  - "case-revhackers"
  - "calculadora-economia-crm"
---
```

### Title Tag — Fórmulas que Funcionam:

| Tipo de Conteúdo | Fórmula | Exemplo |
|------------------|---------|---------|
| Comparativo | [A] vs [B]: Comparativo [Ano] | Funnels vs HubSpot: Comparativo 2026 |
| Guia | [Tema]: O Guia Completo [Ano] | CRM para Agências: O Guia Completo 2026 |
| Como fazer | Como [Resultado] em [Tempo] | Como Migrar do RD Station em 7 Dias |
| Lista | [N] [Coisas] para [Resultado] | 7 Automações para Triplicar Reuniões |
| Case | Como [Empresa] [Resultado] com [Ferramenta] | Como a RevHackers Aumentou 340% Reuniões |

### Meta Description — Estrutura:

```
[Keyword] + [Dor/Contexto]. [Proposta de valor]. [CTA implícito].
```

**Exemplo:**
```
Funnels ou HubSpot? Comparamos preço, funcionalidades e suporte para empresas brasileiras. Descubra qual economiza até R$ 96.000/ano.
```

---

## 2.4 Sumário Interativo

### Formato Padrão:

```markdown
---

## Neste Artigo

- [TL;DR — Resumo Rápido](#tldr)
- [Para Quem é Cada Ferramenta](#para-quem)
- [Comparativo de Funcionalidades](#funcionalidades)
- [Comparativo de Preços](#precos)
- [Cases Reais](#cases)
- [Como Migrar](#migracao)
- [FAQ](#faq)
- [Próximos Passos](#proximos-passos)

---
```

### Regras:
- Máximo 8-10 itens
- Usar âncoras descritivas
- Incluir FAQ e Conclusão sempre
- Posicionar após a introdução

---

## 2.5 Corpo do Conteúdo — Componentes Visuais

### CALLOUT: Insight/Dica

```markdown
> 💡 **Insight**
>
> [Informação valiosa que o leitor deve destacar/lembrar]
```

**Uso:** Após explicar conceito importante. 1-2 por seção.

---

### CALLOUT: Alerta/Atenção

```markdown
> ⚠️ **Atenção**
>
> [Cuidado/erro comum que o leitor deve evitar]
```

**Uso:** Antes de ações críticas ou erros comuns.

---

### CALLOUT: Exemplo Prático

```markdown
> 📋 **Exemplo Prático**
>
> **Situação:** [Contexto específico]
> **Ação:** [O que foi feito]
> **Resultado:** [Métrica ou outcome]
```

**Uso:** Após explicações teóricas para concretizar.

---

### CALLOUT: Citação/Depoimento

```markdown
> 💬 **[Nome da Empresa/Pessoa]**
>
> "[Depoimento com resultado específico]"
>
> — **[Nome Completo]**, [Cargo] @ [Empresa]
```

**Uso:** Prova social após afirmações sobre resultados.

---

### CALLOUT: CTA Inline

```markdown
> 🎯 **[Headline do CTA]**
>
> [1 linha de proposta de valor]
>
> **[Texto do Botão →](#link)**
```

**Uso:** Após ~500-800 palavras e antes de seções de case/resultado.

---

### TABELA COMPARATIVA (Padrão)

```markdown
| Critério | Funnels | Concorrente A | Concorrente B |
|----------|---------|---------------|---------------|
| **Feature 1** | ✅ Incluso | ⚠️ Add-on pago | ❌ Não tem |
| **Feature 2** | ✅ Avançado | ✅ Básico | ❌ Não tem |
| **Preço** | R$ 497/mês | R$ 800/mês | R$ 1.200/mês |
```

**Ícones padrão:**
- ✅ = Tem/Incluso
- ⚠️ = Parcial/Limitado
- ❌ = Não tem
- 💰 = Pago extra

---

### LISTA DE PASSOS

```markdown
### Passo 1: [Nome Descritivo]

[Explicação em 2-4 linhas]

**O que você precisa:** [Requisitos]
**Tempo estimado:** [X minutos]

### Passo 2: [Nome Descritivo]

[Explicação]
```

---

### BLOCO DE RESULTADOS/MÉTRICAS

```markdown
### Resultados Obtidos

| Métrica | Antes | Depois | Variação |
|---------|-------|--------|----------|
| **Reuniões/mês** | 35 | 154 | **+340%** |
| **Taxa conversão** | 7% | 31% | **+343%** |
| **Custo ferramentas** | R$ 2.800 | R$ 697 | **-75%** |
```

---

## 2.6 Imagens — Padrão por Tipo de Artigo

### Tipos de Imagens Necessárias:

| Posição | Tipo | Dimensões | Finalidade |
|---------|------|-----------|------------|
| Hero/OG | Thumbnail | 1200x630px | Compartilhamento social |
| Após H1 | Hero interno | 800x400px | Contexto visual inicial |
| Comparativos | Infográfico | 800x600px | Resumo visual de tabela |
| Passo a passo | Screenshots | 800xAuto | Demonstração |
| Resultados | Gráfico | 600x400px | Visualização de dados |
| Cases | Logo + foto | 200x200px | Credibilidade |

### Alt Text — Boas Práticas:

```markdown
![Comparativo de preços Funnels vs HubSpot mostrando economia de 85%](/images/blog/funnels-hubspot-precos.png)
```

**Fórmula:**
```
[Descrição do conteúdo] + [contexto/dado principal]
```

### Nomenclatura de Arquivos:

```
/images/blog/[slug-artigo]-[tipo]-[numero].png

Exemplos:
funnels-vs-hubspot-comparativo-precos.png
case-revhackers-grafico-resultados.png
automacao-vendas-fluxo-exemplo.png
```

---

## 2.7 Blocos de Conversão (CTAs)

### Mapa de CTAs por Posição:

```
[INÍCIO - ~300 palavras]
└── CTA 1: Lead Magnet relacionado ao tema
    Tipo: Formulário inline ou link

[MEIO - Após explicação "como fazer"]
└── CTA 2: Demo/Trial contextual
    Tipo: Callout box com link

[APÓS CASE/RESULTADOS]
└── CTA 3: Consultoria/Análise
    Tipo: Callout com proposta específica

[FINAL - Seção dedicada]
└── CTA Principal: Ação mais importante
└── CTA Secundário: Alternativa
└── CTA Terciário: Para quem não está pronto
```

### CTA por Intenção de Busca:

| Intenção | Estágio Funil | CTA Principal | CTA Secundário |
|----------|---------------|---------------|----------------|
| Informacional | Topo | Ebook/Guia | Newsletter |
| Comparativa | Meio | Demo Comparativa | Calculadora |
| Decisional | Fundo | Trial/Migração | Consultoria |
| Transacional | Fundo | Começar Agora | Falar com Vendas |

### Templates de CTA:

**Lead Magnet (Topo de Funil):**
```markdown
> 📥 **Baixe o Checklist de Migração**
>
> 15 itens essenciais para migrar de CRM sem perder dados.
>
> **[Baixar Grátis →](#checklist)**
```

**Demo (Meio de Funil):**
```markdown
> 🎯 **Veja como isso funciona na prática**
>
> Demo personalizada de 30 minutos mostrando seu caso de uso.
>
> **[Agendar Demo Gratuita →](#demo)**
```

**Trial (Fundo de Funil):**
```markdown
> 🚀 **Pronto para começar?**
>
> 14 dias grátis. Sem cartão. Setup em 5 minutos.
>
> **[CRIAR CONTA GRÁTIS →](#trial)**
```

---

## 2.8 FAQ — Estrutura Obrigatória

### Regras:
- Mínimo 5 perguntas, máximo 8
- Cada pergunta deve conter keyword long-tail
- Respostas entre 50-150 palavras
- Formato de pergunta natural (como usuário pesquisa)

### Template:

```markdown
## FAQ — Perguntas Frequentes {#faq}

### Qual a diferença entre Funnels e HubSpot?

Funnels e HubSpot são plataformas de CRM e automação de marketing, mas
com diferenças importantes. O HubSpot é uma ferramenta enterprise americana,
com preços em dólar e funcionalidades avançadas nos planos mais caros.
O Funnels é brasileiro, com preço em real, WhatsApp nativo e todas
as funcionalidades inclusas desde o plano inicial.

### Quanto custa migrar do HubSpot para o Funnels?

A migração é gratuita. Oferecemos migração assistida sem custo adicional
para empresas vindas do HubSpot, incluindo importação de contatos,
mapeamento de campos e suporte durante a transição.

### O Funnels tem integração com WhatsApp?

Sim. O Funnels tem integração nativa com a API Oficial do WhatsApp Business.
Isso permite automação de mensagens, chatbot com IA, disparo em massa
com templates aprovados e histórico completo de conversas no CRM.

### Posso testar o Funnels antes de contratar?

Sim. Oferecemos trial gratuito de 14 dias com acesso a todas as
funcionalidades. Não precisa de cartão de crédito para começar.

### O suporte do Funnels é em português?

100%. Toda a equipe de suporte está no Brasil, com atendimento em
português via chat, email e calls de onboarding. Tempo médio de
resposta inferior a 4 horas.
```

---

## 2.9 Encerramento — Estrutura

```markdown
---

## Conclusão

[Resumo em 2-3 linhas dos principais pontos]

[Reforço da proposta de valor / diferencial]

[Frase de transição para ação]

---

## Próximos Passos

### [Headline CTA Principal]

[Proposta de valor específica - 2 linhas]

- [Benefício 1]
- [Benefício 2]
- [Benefício 3]

**[BOTÃO CTA PRINCIPAL →](#acao)**

---

### [Headline CTA Secundário]

[Proposta alternativa - 1 linha]

**[Link CTA Secundário →](#alternativa)**

---

### [Headline CTA Terciário - Recurso Gratuito]

[Para quem quer mais informações antes de decidir]

**[Link para recurso →](#recurso)**

---

*Última atualização: [Mês Ano]*
*Artigo revisado e atualizado [frequência].*
```

---

# PARTE 3: PADRÃO VISUAL E DIAGRAMAÇÃO

## 3.1 Hierarquia Tipográfica

| Elemento | Tamanho | Peso | Uso |
|----------|---------|------|-----|
| H1 | 32-36px | Bold | Título principal (único) |
| H2 | 24-28px | Semibold | Seções principais |
| H3 | 20-22px | Semibold | Subseções |
| H4 | 18px | Medium | Itens de lista destacados |
| Parágrafo | 16-18px | Regular | Corpo do texto |
| Caption | 14px | Regular | Legendas, notas |
| Quote | 18px | Italic | Citações |

## 3.2 Espaçamentos

| Entre | Espaçamento |
|-------|-------------|
| H2 e parágrafo | 24px |
| H3 e parágrafo | 16px |
| Parágrafos | 16px |
| Seções (---) | 48px |
| Antes de tabela | 24px |
| Depois de tabela | 32px |
| Callout boxes | 32px topo/base |

## 3.3 Cores (Sistema)

| Elemento | Cor | Hex | Uso |
|----------|-----|-----|-----|
| Texto principal | Cinza escuro | #1a1a1a | Corpo |
| Texto secundário | Cinza médio | #666666 | Captions, notas |
| Links | Azul | #2563eb | CTAs, links |
| Destaque positivo | Verde | #16a34a | ✅, sucessos |
| Destaque alerta | Amarelo | #eab308 | ⚠️, atenção |
| Destaque negativo | Vermelho | #dc2626 | ❌, erros |
| Background callout | Cinza claro | #f8f9fa | Boxes |
| Background CTA | Azul claro | #eff6ff | CTAs inline |

## 3.4 Componentes Visuais (CSS Classes)

```css
/* Callout Insight */
.callout-insight {
  background: #f0fdf4;
  border-left: 4px solid #16a34a;
  padding: 16px 20px;
  margin: 24px 0;
}

/* Callout Alerta */
.callout-alert {
  background: #fefce8;
  border-left: 4px solid #eab308;
  padding: 16px 20px;
  margin: 24px 0;
}

/* Callout CTA */
.callout-cta {
  background: #eff6ff;
  border: 1px solid #2563eb;
  border-radius: 8px;
  padding: 24px;
  margin: 32px 0;
  text-align: center;
}

/* Callout Quote */
.callout-quote {
  background: #f8f9fa;
  border-left: 4px solid #9333ea;
  padding: 20px 24px;
  margin: 24px 0;
}

/* Tabela Comparativa */
.table-compare {
  width: 100%;
  border-collapse: collapse;
}
.table-compare th {
  background: #f1f5f9;
  font-weight: 600;
  text-align: left;
  padding: 12px 16px;
}
.table-compare td {
  padding: 12px 16px;
  border-bottom: 1px solid #e2e8f0;
}
```

---

# PARTE 4: CHECKLIST SEO ON-PAGE

## 4.1 Checklist Reutilizável

### PRÉ-PUBLICAÇÃO

#### Title & Meta
- [ ] Title tag < 60 caracteres
- [ ] Keyword principal no início do title
- [ ] Meta description < 155 caracteres
- [ ] Keyword na meta description
- [ ] CTA implícito na meta description

#### URLs
- [ ] Slug < 60 caracteres
- [ ] Keyword no slug
- [ ] Sem caracteres especiais
- [ ] Sem números desnecessários
- [ ] Hifens separando palavras

#### Headings
- [ ] H1 único na página
- [ ] Keyword principal no H1
- [ ] H2s com keywords secundárias
- [ ] Hierarquia correta (H1 > H2 > H3)
- [ ] Nenhum heading pulado

#### Conteúdo
- [ ] Keyword no primeiro parágrafo
- [ ] Keyword densidade 1-2%
- [ ] Variações semânticas distribuídas
- [ ] Mínimo 2.000 palavras (para rankings)
- [ ] Parágrafos < 4 linhas
- [ ] Listas e bullets presentes
- [ ] Tabelas quando aplicável

#### Links
- [ ] Mínimo 3 links internos
- [ ] Mínimo 2 links externos (autoridades)
- [ ] Anchor texts descritivos
- [ ] Links abrem em nova aba (externos)
- [ ] Sem links quebrados

#### Imagens
- [ ] Hero image presente
- [ ] Alt text descritivo em todas
- [ ] Keyword no alt text principal
- [ ] Imagens comprimidas (< 200KB)
- [ ] Formato WebP quando possível
- [ ] Lazy loading implementado

#### Rich Snippets
- [ ] Schema Article implementado
- [ ] FAQ schema se houver FAQ
- [ ] Tabelas otimizadas para snippets
- [ ] Dados estruturados validados

#### Conversão
- [ ] CTA após introdução
- [ ] CTA no meio do conteúdo
- [ ] CTA seção dedicada no final
- [ ] Lead magnet relacionado
- [ ] Links de conversão funcionando

### PÓS-PUBLICAÇÃO

- [ ] Indexação solicitada no GSC
- [ ] Compartilhado nas redes sociais
- [ ] Link building iniciado
- [ ] Monitoramento de rankings configurado

---

## 4.2 Schema Markup Padrão

### Article Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Title do artigo]",
  "description": "[Meta description]",
  "image": "[URL da imagem OG]",
  "author": {
    "@type": "Organization",
    "name": "Funnels"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Funnels",
    "logo": {
      "@type": "ImageObject",
      "url": "https://funnels.com.br/logo.png"
    }
  },
  "datePublished": "[Data ISO]",
  "dateModified": "[Data ISO]"
}
```

### FAQ Schema

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Pergunta 1]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Resposta 1]"
      }
    },
    {
      "@type": "Question",
      "name": "[Pergunta 2]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Resposta 2]"
      }
    }
  ]
}
```

---

# PARTE 5: MODELO DE CTA POR INTENÇÃO

## 5.1 Mapa de Ofertas

| Tipo de Conteúdo | Intenção | CTA Principal | CTA Secundário | Lead Magnet |
|------------------|----------|---------------|----------------|-------------|
| **Comparativo** | Comparação/Decisão | Demo Comparativa | Calculadora de Economia | Planilha comparativa |
| **Guia/Tutorial** | Educacional | Trial Gratuito | Template/Checklist | Ebook expandido |
| **Case de Sucesso** | Prova Social | Consultoria Gratuita | Ver Demo | Framework usado |
| **Playbook** | Execução | Implementação Assistida | Template Pronto | Kit completo |
| **Ferramenta/Lista** | Utilitário | Acesso à Ferramenta | Newsletter | Versão expandida |
| **Migração** | Decisional | Migração Gratuita | Análise de Dados | Checklist migração |

## 5.2 CTAs por Cluster de Conteúdo

### Cluster: Alternativas a Concorrentes

```
CTA Principal: "Agendar Demo Comparativa"
Lead Magnet: "Calculadora [Concorrente] vs Funnels"
CTA Secundário: "Solicitar Migração Assistida"
```

### Cluster: CRM por Segmento

```
CTA Principal: "Demo Personalizada para [Segmento]"
Lead Magnet: "Guia CRM para [Segmento]"
CTA Secundário: "Falar com Especialista"
```

### Cluster: Automação

```
CTA Principal: "Testar Automação Grátis"
Lead Magnet: "Templates de Fluxo Prontos"
CTA Secundário: "Agendar Setup Assistido"
```

### Cluster: Cases

```
CTA Principal: "Agendar Consultoria Gratuita"
Lead Magnet: "Framework [Nome do Case]"
CTA Secundário: "Ver Funcionalidades Usadas"
```

---

# PARTE 6: PROCESSO DE ATUALIZAÇÃO

## 6.1 Calendário de Revisão

| Frequência | Ação | Critério |
|------------|------|----------|
| **Mensal** | Verificar CTAs e links | Todos os artigos top 20 tráfego |
| **Trimestral** | Atualizar preços e features | Comparativos e guias |
| **Semestral** | Revisão completa de conteúdo | Top 10 artigos |
| **Anual** | Atualizar ano no título | Artigos com ano no title |
| **On-demand** | Correção de informações | Quando feature muda |

## 6.2 Critérios de Atualização Prioritária

| Sinal | Ação | Urgência |
|-------|------|----------|
| Queda > 20% no tráfego | Investigar e atualizar | Alta |
| Ranking caiu da página 1 | Refresh de conteúdo | Alta |
| Concorrente rankeia acima | Análise competitiva | Média |
| Preços desatualizados | Correção imediata | Alta |
| Feature nova lançada | Adicionar seção | Média |
| Nova FAQ identificada | Adicionar ao FAQ | Baixa |

## 6.3 Processo de Refresh

### Passo 1: Análise
- Verificar posição atual no Google
- Analisar intent match (conteúdo responde à busca?)
- Comparar com top 3 rankados

### Passo 2: Atualização
- Adicionar informações novas
- Atualizar preços e features
- Expandir seções fracas
- Adicionar FAQs descobertas

### Passo 3: Otimização
- Melhorar CTAs
- Adicionar/atualizar imagens
- Verificar links internos
- Revalidar schema

### Passo 4: Reindexação
- Atualizar dateModified
- Solicitar indexação no GSC
- Monitorar rankings por 2-4 semanas

---

# PARTE 7: GUIA DE IMPLEMENTAÇÃO

## 7.1 Como Aplicar aos Artigos Existentes

### Prioridade 1 (Fazer Agora):

1. **Adicionar sumário navegável** a todos os artigos
2. **Inserir CTAs** nas 3 posições (intro, meio, final)
3. **Criar seção FAQ** com 5+ perguntas
4. **Adicionar links internos** entre artigos

### Prioridade 2 (Esta Semana):

1. **Criar callout boxes** para insights e alertas
2. **Estilizar depoimentos** com formato padrão
3. **Adicionar hero image** em cada artigo
4. **Implementar schema** Article + FAQ

### Prioridade 3 (Este Mês):

1. **Criar infográficos** para tabelas comparativas
2. **Desenvolver lead magnets** específicos
3. **Configurar formulários** inline
4. **Setup de tracking** de conversão por artigo

## 7.2 Checklist de Implementação por Artigo

```
□ Artigo: ____________________________

ESTRUTURA
□ Sumário interativo adicionado
□ Âncoras funcionando
□ Hierarquia H1>H2>H3 validada

CONVERSÃO
□ CTA após intro (lead magnet)
□ CTA no meio (demo/trial)
□ CTA final (seção completa)
□ Links de conversão testados

VISUAL
□ Hero image adicionada
□ Callouts de insight/alerta
□ Tabelas estilizadas
□ Quotes formatados

SEO
□ FAQ com 5+ perguntas
□ Schema implementado
□ 3+ links internos
□ Alt texts em imagens

VALIDAÇÃO
□ Leitura completa revisada
□ Links testados
□ Mobile verificado
□ Velocidade OK (< 3s)
```

---

## 7.3 Métricas de Sucesso

### KPIs por Artigo

| Métrica | Baseline | Meta 30 dias | Meta 90 dias |
|---------|----------|--------------|--------------|
| Posição média | — | Top 20 | Top 10 |
| CTR orgânico | 2% | 3.5% | 5% |
| Tempo na página | 2 min | 3.5 min | 4.5 min |
| Taxa de conversão | 1% | 2.5% | 4% |
| Scroll depth | 40% | 60% | 75% |

### Dashboard de Monitoramento

```
ARTIGO: [Nome]
Última atualização: [Data]

TRÁFEGO
- Sessões/mês: ___
- Posição média: ___
- Impressões: ___
- CTR: ___%

ENGAJAMENTO
- Tempo na página: ___
- Scroll depth: ___%
- Bounce rate: ___%

CONVERSÃO
- Leads: ___
- Taxa: ___%
- Demos: ___
```

---

# ANEXO A: EXEMPLO COMPLETO APLICADO

Veja o artigo "Funnels vs HubSpot" reformulado com todas as melhorias aplicadas em arquivo separado.

---

# ANEXO B: BIBLIOTECA DE HOOKS

## Por Tipo de Conteúdo

### Comparativos
- "Você está pagando [valor] por mês e se perguntando se vale a pena?"
- "Todo mundo fala que [Concorrente] é bom. Mas é bom para quem?"
- "A escolha entre [A] e [B] não é sobre qual é melhor. É sobre qual é melhor para você."

### Guias
- "Este guia vai economizar [X] horas de pesquisa."
- "Tudo que você precisa saber sobre [tema] em um só lugar."
- "Se você só vai ler um artigo sobre [tema], que seja este."

### Cases
- "A [Empresa] tinha um problema que você provavelmente conhece bem."
- "[Resultado impressionante]. E demorou apenas [tempo]."
- "Esta é a história de como [empresa] resolveu [problema]."

### Playbooks
- "O framework que [empresa/especialista] usa para [resultado]."
- "Pare de improvisar. Use este método testado."
- "Este playbook foi responsável por [resultado] em [contexto]."

---

# ANEXO C: BIBLIOTECA DE CTAs

## Botões de Ação

```
[COMEÇAR GRÁTIS →]
[AGENDAR DEMO →]
[BAIXAR AGORA →]
[VER COMO FUNCIONA →]
[CALCULAR ECONOMIA →]
[SOLICITAR MIGRAÇÃO →]
[FALAR COM ESPECIALISTA →]
[TESTAR POR 14 DIAS →]
```

## Headlines de CTA

```
"Pronto para [resultado]?"
"Quer ver isso na prática?"
"Cansado de [problema]?"
"Sua vez de [resultado]"
"Comece em menos de 5 minutos"
```

---

*Documento criado: Janeiro 2026*
*Versão: 1.0*
*Próxima revisão: Abril 2026*
