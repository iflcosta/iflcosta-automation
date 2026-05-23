# ROADMAP — Agência de Automação Agêntica

> Documento de **estado vivo** do projeto. Memória de progresso entre sessões.

## Estado atual

> **Fase 1 · Construção da Fábrica** — Tarefas 1, 2 e 3a concluídas. Tarefa 3b com landing
> completa em TDD: Nav + Hero (com ChatMockup) + Pain + Solutions + How + Social + FinalCTA
> + Footer. **33 testes verdes.** Build static prerender, 100 kB First Load JS. Viewport e
> Open Graph configurados; `prefers-reduced-motion` honrado.
> **Branding:** `Iago Lopes | Hardware & Tech`. WhatsApp via `NEXT_PUBLIC_WA_NUMBER`.
> **Próximo:** deploy no Vercel pra teste mobile (via integração GitHub).

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
| 2026-05-22 | Adicionado `@UXDesigner` ao time de subagentes (CLAUDE.md §6) |
| 2026-05-22 | Protótipo da landing gerado no Claude Design a partir de Design Brief escrito (`docs/design-brief-landing.md`); Tarefa 3 dividida em 3a (brief) e 3b (implementação) |
| 2026-05-23 | Protótipo recebido do Claude Design (`docs/prototype/`); React+Babel via CDN, copy fiel ao brief; serve só como referência visual para a implementação em Next.js da Tarefa 3b |
| 2026-05-23 | Arquitetura de domínio definida: apex `iflcosta.tech` → portal (`portal/`, estático), `hardware.iflcosta.tech` → projeto `iflcosta-tech`, `ia.iflcosta.tech` → projeto `iflcosta-automation` |

## Fase 1 — Construção da Fábrica

| # | Tarefa | Responsável | Status |
|---|--------|-------------|--------|
| 1 | `CLAUDE.md` — convenções de engenharia | `@Architect` | ✅ |
| 2 | `SDD.md` — design da Fábrica (arc42) | `@Architect` | ✅ |
| 3a | Design Brief + copy da Landing Page | `@UXDesigner` + `@GrowthCopywriter` | ✅ |
| 3b | Frontend: scaffold Next.js + Landing Page (TDD, consome protótipo) | `@SkepticalQA` → `@FrontendDev` | 🔄 |
| 4 | `outbound/auditoria_pagespeed.py` (TDD) | `@SkepticalQA` → `@WorkflowEngineer` | ⬜ |

## Fases futuras (resumo — detalhar quando ativadas)

| Fase | Objetivo | Gatilho de início |
|------|----------|-------------------|
| Fase 2 — Prospecção ativa | Usar a auditoria para abordar PMEs; vender a PoC condicional | Fábrica no ar |
| Fase 3 — Produto | `SDD-produto.md` + workflow n8n do Recuperador de Leads para o 1º cliente | 1ª PoC fechada |
| Fase 4 — Escala | Agente SDR próprio, parcerias white-label, novas verticais | Receita recorrente estável |
