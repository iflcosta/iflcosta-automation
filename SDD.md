# SDD.md — Software Design Document · A Fábrica

> **Autor:** `@Architect` · **Revisão:** `@GrowthCopywriter`, `@SkepticalQA`
> **Padrão:** arc42 · **Escopo:** A Fábrica (ativos de aquisição da agência)
> **Fora de escopo:** O Produto (Recuperador de Leads e soluções verticais entregues ao
> cliente) — será detalhado em `SDD-produto.md` quando a 1ª PoC for fechada.

---

## 1. Introdução e Metas

### 1.1 O que é "A Fábrica"

A Fábrica é a infraestrutura tecnológica da própria agência para **captar e converter
clientes** — não é o que se vende ao cliente. Compõe-se de dois artefatos:

1. **Landing Page** — vitrine de conversão B2B, hospedada na Vercel.
2. **Ferramenta de Auditoria Outbound** — script Python de prospecção ativa.

A Fábrica precede qualquer cliente: é o que permite divulgar, prospectar e fechar.

### 1.2 Metas de qualidade (top 3)

| # | Meta | Métrica verificável |
|---|------|---------------------|
| 1 | A página é, ela mesma, prova de engenharia | Lighthouse mobile > 95/100 |
| 2 | Converter visitante em conversa de WhatsApp | LCP < 2,5s · CLS < 0,1 · 1 CTA primário |
| 3 | Prospecção baseada em dados reais, não em pitch genérico | Auditoria gera relatório + mensagem fria por domínio |

### 1.3 Stakeholders

| Papel | Interesse |
|-------|-----------|
| Fundador da agência | Captar PMEs de Bragança; operar sem custo fixo de infraestrutura |
| Visitante / prospect (dono de PME) | Entender em segundos o ganho financeiro, sem jargão |
| Subagentes de engenharia | Manter governança, TDD e rastreabilidade |

## 2. Restrições de Arquitetura

| Restrição | Origem |
|-----------|--------|
| Fase 1 **sem servidor**: apenas Vercel + Python local | Decisão de adiar o agente SDR |
| Sem bibliotecas pesadas de UI; Tailwind apenas | `CLAUDE.md` §4 |
| Carregamento subsegundo; imagens via `next/image` | Meta de qualidade nº 1 |
| Nenhuma credencial no versionamento | `CLAUDE.md` §8 |
| Mensagens ao usuário final em pt-BR | `CLAUDE.md` §4 |
| TDD obrigatório (teste falha antes do código) | `CLAUDE.md` §5 |

## 3. Contexto e Escopo

### 3.1 Contexto de negócio

A agência atende **PMEs de Bragança Paulista em geral**. As verticais (imobiliárias,
clínicas, comércio) são portas de entrada — não nichos exclusivos. A dor comum a todas:
**perder cliente por atendimento lento ou ausente no WhatsApp.**

### 3.2 Diagrama C4 — Nível 1 (Contexto)

```
        +----------------------+              +-------------------------+
        |  Visitante / Prospect|              |  Fundador da Agência    |
        |  (dono de PME)       |              |  (operador outbound)    |
        +----------+-----------+              +-----------+-------------+
                   |  navega / clica CTA                  |  executa auditoria
                   v                                      v
        +======================================================+
        |                  A FÁBRICA (este SDD)                 |
        |   - Landing Page (conversão inbound)                   |
        |   - Ferramenta de Auditoria Outbound (prospecção)      |
        +===+===============+==================+================+
            |               |                  |
            v               v                  v
   +----------------+ +--------------+ +-----------------------+
   | Vercel         | | WhatsApp     | | Google PageSpeed      |
   | (hospedagem)   | | (canal CTA)  | | Insights API          |
   +----------------+ +--------------+ +-----------------------+
```

### 3.3 Fora de escopo (Fase 1)

n8n, Redis, PostgreSQL, Evolution API, OpenRouter, agente SDR, workflows do produto.
Toda essa camada pertence ao Produto e ao `SDD-produto.md`.

## 4. Estratégia de Solução

| Desafio | Decisão estratégica |
|---------|---------------------|
| Provar competência técnica a um mercado cético | A landing rápida É a demonstração — performance como argumento |
| Ir ao mercado sem risco de infraestrutura | Hospedagem estática (Vercel) + script local; zero servidor |
| Atender múltiplas verticais sem fragmentar conversão | Landing única ancorada na dor universal + seção "Soluções por segmento" |
| Prospecção que quebra a desconfiança | Auditoria técnica invisível gera evidência real antes da abordagem |

## 5. Visão de Blocos de Construção

### 5.1 Diagrama C4 — Nível 2 (Container)

```
A FÁBRICA
├── Landing Page          [Next.js App Router + Tailwind + TypeScript]
│   └── deploy: Vercel (SSG/estático)
│   └── consome: WhatsApp (link de CTA, sem backend)
│
└── Ferramenta de Auditoria   [Python 3.11 CLI, execução local]
    └── consome: Google PageSpeed Insights API
    └── produz: relatório JSON + template de mensagem fria
```

### 5.2 Componente — Landing Page (`frontend/`)

Arquitetura de informação (ordem de scroll):

1. **Hero** — H1 curta (< 8 palavras) na dor universal + sub-headline com a promessa
   ("Recupere até 40% do faturamento que evapora no seu WhatsApp...") + CTA primário.
2. **Prova de dor** — o custo de não responder rápido (tempo → perda).
3. **Soluções por segmento** — cards: Imobiliárias, Clínicas, Comércio, Outras PMEs.
4. **Como funciona** — 3 passos, sem jargão técnico.
5. **Prova social** — espaço reservado para depoimentos/casos (preenchido após 1ª PoC).
6. **CTA final** — repetição do botão WhatsApp.

Regras: Server Components por padrão; `"use client"` só no que tiver interação;
imagens via `next/image` (AVIF/WebP, `width`/`height` explícitos).

### 5.3 Componente — Ferramenta de Auditoria (`outbound/auditoria_pagespeed.py`)

Responsabilidades:
- Receber um domínio via argumento de CLI.
- Chamar a API pública do Google PageSpeed Insights (estratégia `mobile`).
- Extrair Core Web Vitals: **LCP**, **CLS**, **Speed Index** + nota geral.
- Emitir um relatório JSON estruturado.
- Gerar um template de mensagem fria de `@GrowthCopywriter`, parametrizável por vertical,
  com os números reais da auditoria.

## 6. Visão de Runtime

### 6.1 Cenário A — Conversão inbound (jornada do visitante)

```
Visitante chega à Landing Page
  → lê Hero (entende o ganho em < 5s)
  → percorre seção de segmentos (se identifica)
  → clica no CTA "Falar no WhatsApp"
  → abre conversa direta com o Fundador (atendimento humano na Fase 1)
  → Fundador qualifica e agenda reunião
```

### 6.2 Cenário B — Prospecção outbound (jornada do operador)

```
Fundador escolhe um prospect (PME de Bragança)
  → executa: python outbound/auditoria_pagespeed.py <dominio>
  → script chama a PageSpeed Insights API (mobile)
  → extrai LCP / CLS / Speed Index / nota
  → gera relatório JSON + mensagem fria personalizada
  → Fundador envia a mensagem no WhatsApp/Instagram do prospect
  → prospect interessado vira visitante da Landing Page (volta ao Cenário A)
```

## 7. Visão de Implantação

| Artefato | Ambiente | Observação |
|----------|----------|------------|
| Landing Page | Vercel (produção) | Build estático; deploy contínuo a partir da branch |
| Ferramenta de Auditoria | Máquina local do Fundador (Ryzen 5 9600X) | Execução manual via CLI; sem serviço persistente |

Nenhum servidor, container ou banco de dados é provisionado na Fase 1.

## 8. Conceitos Transversais

- **Performance / Core Web Vitals** — orçamento de performance é requisito de design, não
  ajuste posterior. Sem JS desnecessário; fontes e imagens otimizadas.
- **Segurança e credenciais** — a chave da PageSpeed API (opcional) é lida de variável de
  ambiente; nunca commitada. `outbound/.env.example` documenta as variáveis.
- **Internacionalização** — todo conteúdo voltado ao usuário em pt-BR.
- **Acessibilidade** — HTML semântico, contraste adequado, CTA com rótulo descritivo.

## 9. Modelo de Negócio e Precificação

### 9.1 Verticais e soluções

| Segmento | Sintoma da dor | Solução nomeada |
|----------|----------------|-----------------|
| Imobiliárias | Lead de ZAP/OLX esfria em 2-12h | Recuperador de Leads |
| Clínicas | No-show e agenda ociosa | Gestor de Presença e Agendamento |
| Comércio/e-commerce | Carrinho abandonado | Recuperador de Carrinho |
| Outras PMEs | Orçamento/contato sem resposta | Atendimento agêntico sob medida |

### 9.2 Equação de precificação dinâmica (referência de negócio)

A cobrança mensal ao cliente combina retainer fixo + repasse de tokens de API com markup:

```
M_faturamento = M_retainer + Σ (T_input,i · C_input + T_output,i · C_output) · (1 + μ)
                              i=1..n
```

- `M_retainer` — taxa fixa de sustentação técnica (ex.: R$ 1.500/mês).
- `T_input,i` / `T_output,i` — tokens de entrada/saída da chamada de API `i`.
- `C_input` / `C_output` — custo unitário do provedor de IA.
- `μ = 0,35` — markup de processamento técnico (35% de margem sobre a revenda).

> A *implementação* desse cálculo (tabela de tarifas, contagem de tokens no n8n) pertence
> ao Produto. Aqui consta como referência para a copy e o processo comercial da Fábrica.

## 10. Decisões de Arquitetura (ADRs)

| ID | Decisão | Justificativa |
|----|---------|---------------|
| ADR-01 | Separar Fábrica e Produto em SDDs distintos | Evita confundir os ativos da agência com o que se vende |
| ADR-02 | Fase 1 sem servidor (Vercel + Python local) | Elimina o risco de infraestrutura — armadilha nº 1 do vibe-coder júnior |
| ADR-03 | Next.js App Router + Tailwind, sem libs pesadas de UI | Carregamento subsegundo e Lighthouse > 95 |
| ADR-04 | Vitest + RTL (frontend) e pytest (outbound) | TDD com ferramentas leves e padrão de mercado |
| ADR-05 | Landing única multi-vertical + seção de segmentos | Especificidade de conversão sem fragmentar o desenvolvimento |

## 11. Requisitos de Qualidade

| Atributo | Requisito |
|----------|-----------|
| Performance | Lighthouse mobile > 95 · LCP < 2,5s · CLS < 0,1 · carregamento subsegundo |
| Testabilidade | Cobertura TDD: Hero, CTA WhatsApp, otimização de imagem; auditoria com mocks de API |
| Confiabilidade do outbound | Tratamento explícito de timeout, status ≠ 200 e domínio inválido |
| Manutenibilidade | Componentes tipados; sem `any` implícito; código documentado só no "porquê" |

## 12. Riscos e Dívida Técnica

| Risco | Mitigação |
|-------|-----------|
| Landing genérica converte mal | Dor universal no Hero + seção de segmentos (ADR-05) |
| CTA depende de atendimento humano rápido do Fundador | Aceito na Fase 1; resolvido pelo agente SDR em fase futura |
| PageSpeed API tem limite de requisições | Suportar chave de API via env; tratar erro de rate limit |
| Crescer sem landing pages por vertical | Dívida consciente; revisitar quando houver tráfego |

## 13. Glossário

| Termo | Definição |
|-------|-----------|
| Fábrica | Ativos da agência para captar/converter clientes (este SDD) |
| Produto | Solução de automação entregue dentro da operação do cliente |
| PoC Condicional | Prova de conceito de 10 dias atrelada a termo de intenção de contratação |
| Auditoria Invisível | Diagnóstico técnico do prospect feito antes da abordagem comercial |
| Core Web Vitals | LCP, CLS e demais métricas de performance percebida (Google) |
| Retainer | Mensalidade fixa de sustentação técnica |
