# CLAUDE.md — Convenções de Engenharia · Agência de Automação Agêntica

> Memória de diretrizes do projeto. Leia este arquivo no início de cada sessão antes de
> escrever qualquer código. Atualize-o sempre que uma convenção mudar.

## 1. Visão geral do projeto

Infraestrutura tecnológica de uma agência de automação de IA sediada em Bragança Paulista.
O produto-âncora é o **Recuperador de Leads** para imobiliárias PMEs: qualificação agêntica
de leads de portais (ZAP Imóveis, OLX) em menos de 60 segundos via WhatsApp.

Duas camadas:

1. **Frontend** — Landing Page de altíssima performance (carregamento subsegundo),
   Next.js (App Router) + Tailwind CSS, hospedada na Vercel. Foco em copy de conversão B2B
   e CTA conversacional para WhatsApp (sem formulários longos).
2. **Backend de automação** — Servidor n8n local (máquina Ryzen 5 9600X) com Redis
   (hot cache: buffer e sessões) e PostgreSQL (persistência fria). Exposto via túnel HTTPS
   na porta `5678` para receber webhooks de portais externos.

Fluxo automatizado-alvo (agente SDR — **adiado** para fase futura):
`Visitante LP → Evolution API → n8n → Redis Buffer → PostgreSQL → OpenRouter (Claude Sonnet) → WhatsApp do Lead`

### Fábrica vs. Produto — distinção fundamental

- **A Fábrica** — ativos da própria agência para captar e converter clientes: a Landing Page
  e a ferramenta de auditoria de prospecção (`outbound/`). É o foco da Fase 1. Ver `SDD.md`.
- **O Produto** — o "Recuperador de Leads" e demais soluções verticais entregues *dentro* da
  operação do cliente (workflow n8n). Será projetado em `SDD-produto.md` ao fechar a 1ª PoC.

A camada n8n/Redis/PostgreSQL pertence ao Produto e está **fora do escopo da Fase 1** — que
roda sem servidor (apenas Vercel + Python local).

## 2. Estrutura de diretórios

```
iflcosta-automation/
├── CLAUDE.md              # este arquivo
├── SDD.md                 # Software Design Document (arc42)
├── frontend/              # Next.js App Router + Tailwind (deploy Vercel)
│   ├── app/               # rotas e layouts
│   ├── components/        # componentes React
│   ├── public/            # assets estáticos
│   └── __tests__/         # testes de componente (Vitest + RTL)
├── outbound/              # scripts de prospecção ativa em Python
│   ├── auditoria_pagespeed.py
│   └── tests/             # testes pytest
├── workflows/             # exports JSON dos workflows n8n
├── infra/                 # docker-compose, .env de exemplo, configs Redis/Postgres
└── docs/                  # diagramas, schemas SQL, material de apoio
```

## 3. Comandos

### Frontend (`frontend/`)

| Ação | Comando |
|------|---------|
| Instalar dependências | `npm install` |
| Servidor de desenvolvimento | `npm run dev` |
| Build de produção | `npm run build` |
| Lint | `npm run lint` |
| Testes unitários | `npm test` |
| Testes em modo watch | `npm test -- --watch` |
| Testar 1 arquivo | `npm test -- <caminho>` |

### Outbound Python (`outbound/`)

| Ação | Comando |
|------|---------|
| Criar venv | `python -m venv .venv && source .venv/bin/activate` |
| Instalar dependências | `pip install -r outbound/requirements.txt` |
| Rodar testes | `pytest outbound/tests/` |
| Testar 1 arquivo | `pytest outbound/tests/test_auditoria_pagespeed.py -v` |
| Executar auditoria | `python outbound/auditoria_pagespeed.py` |

## 4. Padrões de código

### TypeScript / React
- Componentes funcionais com hooks. Sem `class` components.
- `PascalCase` para componentes, `camelCase` para funções/variáveis.
- Tipar tudo: nada de `any` implícito. Props sempre com `interface`.
- Server Components por padrão; `"use client"` só quando há interatividade.
- Imagens **sempre** via `next/image` com `width`/`height` explícitos e formatos modernos
  (AVIF/WebP). Nenhuma `<img>` crua.
- Sem bibliotecas pesadas de UI. Tailwind para estilo; zero CSS-in-JS em runtime.

### Python
- Compatível com Python 3.11+. PEP 8. Type hints em todas as assinaturas públicas.
- `snake_case` para funções/variáveis, `UPPER_SNAKE` para constantes.
- Tratamento explícito de erros de rede/API (timeout, status != 200).
- Nenhuma credencial hard-coded — ler de variável de ambiente ou argumento de CLI.

### Geral
- Sem comentários que descrevem o "o quê"; comente só o "porquê" não óbvio.
- Mensagens ao usuário final sempre em **português**.
- Nomes de arquivos e identificadores de código em inglês ou português, consistente por módulo.

## 5. Disciplina de TDD

**Nenhum código de produção é escrito antes do teste correspondente falhar.**

Ciclo obrigatório (Red → Green → Refactor):
1. `@SkepticalQA` escreve o teste que falha (cobrindo caminho feliz + casos adversariais:
   concorrência de mensagens, indisponibilidade de API externa, banimento de número Meta).
2. `@FrontendDev` ou `@WorkflowEngineer` escreve a implementação **mínima** para passar.
3. `@SkepticalQA` roda a revisão adversarial.

Nenhum commit deve deixar a suíte de testes vermelha.

## 6. Equipe de subagentes

Toda proposta ou alteração de arquivo deve indicar qual subagente a propõe/revisa.

| Agente | Responsabilidade |
|--------|------------------|
| `@Architect` | Schemas PostgreSQL, config Redis, segurança de credenciais, túnel HTTPS :5678 |
| `@FrontendDev` | Código Next.js/Tailwind/React. Garante Lighthouse mobile > 95/100 |
| `@WorkflowEngineer` | Lógica JSON dos workflows n8n, buffer inteligente, persistência híbrida |
| `@SkepticalQA` | Testes que quebram a aplicação (TDD), cenários adversariais, revisão final |
| `@GrowthCopywriter` | Headlines de conversão, roteiro de voz/áudio do SDR, mensagens de outbound |

Fluxo padrão de entrega: `@Architect` → `@GrowthCopywriter` → `@SkepticalQA` (teste falha)
→ `@FrontendDev`/`@WorkflowEngineer` (implementação mínima) → `@SkepticalQA` (revisão).

## 7. Processo de engenharia

- **SDD primeiro**: nenhum código de produção antes do design estar em `SDD.md`.
- **Roadmap vivo**: no início de cada sessão, ler `ROADMAP.md` para identificar o estado
  atual. Toda entrega atualiza o `ROADMAP.md` (status + linha "Estado atual") no mesmo commit.
- Trabalho dividido em fases; aguardar validação humana em cada checkpoint importante.
- Não pular etapas do roteiro de fases.

## 8. Segurança e credenciais

- **Nunca** commitar segredos. `.env`, chaves de API e credenciais ficam fora do versionamento.
- Manter `infra/.env.example` com as variáveis necessárias e valores fictícios.
- Chaves de API de produção (OpenRouter, Evolution API, Google) trafegam apenas pelos nós
  de credencial do n8n — nunca embutidas em workflow JSON exportado.
- Assinaturas pessoais subsidiadas (Claude Pro/Max, Cursor Pro) são exclusivas para o fluxo
  de desenvolvimento humano e **não podem** alimentar automações de produção. Tráfego de
  produção usa chaves de API diretas / OpenRouter.
- O túnel HTTPS da porta 5678 só expõe a rota de webhook necessária; nunca o painel do n8n.

## 9. Variáveis de ambiente do n8n (produção)

Configuração obrigatória do container n8n:

```
NODE_OPTIONS=--max-old-space-size=3072
N8N_DEFAULT_BINARY_DATA_MODE=filesystem
N8N_METRICS=true
GENERIC_TIMEZONE=America/Sao_Paulo
```

PostgreSQL é obrigatório como banco do n8n — **SQLite é proibido** em produção (corrompe
sob webhooks concorrentes).

## 10. Git

- Branch de desenvolvimento desta entrega: `claude/tender-ramanujan-HyDqA`.
- Commits pequenos e descritivos, focados no "porquê". Idioma: português.
- `git push -u origin <branch>` ao final de cada entrega validada.
- Nunca abrir Pull Request sem solicitação explícita.

## 11. Parâmetros de negócio de referência

- Buffer de agrupamento de mensagens: `wait_buffer = 5` segundos (Redis).
- Markup de processamento técnico sobre tokens de API: `μ = 0.35` (35%).
- Modelo de produção padrão: Claude Sonnet (família 4.5) via OpenRouter — confirmar versão
  no `SDD.md`.
- SLA de disponibilidade do ambiente de produção: 99,7%.
