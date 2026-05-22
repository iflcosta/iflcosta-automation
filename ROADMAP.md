# ROADMAP — Agência de Automação Agêntica

> Documento de **estado vivo** do projeto. Memória de progresso entre sessões.

## Estado atual

> **Fase 1 · Construção da Fábrica** — Tarefas 1 e 2 concluídas (CLAUDE.md, SDD.md).
> **Próximo:** Tarefa 3 — scaffold do frontend Next.js, com `@SkepticalQA` escrevendo os
> testes que falham antes da implementação.

## Como manter este arquivo vivo

- **Início de cada sessão:** ler `CLAUDE.md` e este `ROADMAP.md` para identificar onde paramos.
- **Fim de cada entrega:** atualizar a tabela de status **e** a linha "Estado atual" no
  **mesmo commit** da entrega.
- **Decisões relevantes:** registrar na tabela "Decisões-chave" abaixo.
- **Marcadores de status:** ✅ concluído · 🔄 em andamento · ⬜ pendente · ⏸️ adiado

## Decisões-chave

| Data | Decisão |
|------|---------|
| 2026-05-22 | Separação **Fábrica** (ativos da agência) × **Produto** (solução entregue ao cliente) |
| 2026-05-22 | `SDD.md` cobre apenas a Fábrica; o Produto terá `SDD-produto.md` futuro |
| 2026-05-22 | Agente SDR próprio **adiado** — Fase 1 sem servidor (só Vercel + Python local) |
| 2026-05-22 | Posicionamento: PMEs de Bragança em geral; verticais (imobiliária, clínica, comércio) como portas de entrada |
| 2026-05-22 | Landing única multi-vertical + seção "Soluções por segmento" |

## Fase 1 — Construção da Fábrica

| # | Tarefa | Responsável | Status |
|---|--------|-------------|--------|
| 1 | `CLAUDE.md` — convenções de engenharia | `@Architect` | ✅ |
| 2 | `SDD.md` — design da Fábrica (arc42) | `@Architect` | ✅ |
| 3 | Frontend: scaffold Next.js + Landing Page (TDD) | `@SkepticalQA` → `@FrontendDev` | ⬜ |
| 4 | `outbound/auditoria_pagespeed.py` (TDD) | `@SkepticalQA` → `@WorkflowEngineer` | ⬜ |

## Fases futuras (resumo — detalhar quando ativadas)

| Fase | Objetivo | Gatilho de início |
|------|----------|-------------------|
| Fase 2 — Prospecção ativa | Usar a auditoria para abordar PMEs; vender a PoC condicional | Fábrica no ar |
| Fase 3 — Produto | `SDD-produto.md` + workflow n8n do Recuperador de Leads para o 1º cliente | 1ª PoC fechada |
| Fase 4 — Escala | Agente SDR próprio, parcerias white-label, novas verticais | Receita recorrente estável |
