# Pacote de entrada para o Claude Design

Tudo o que você precisa enviar ao Claude Design para gerar o protótipo da Landing Page.

## Como usar

1. Abra o **arquivo `00-PROMPT.md`** desta pasta.
2. Antes de copiar, **preencha os 2 placeholders ⚠** no topo do arquivo:
   - `[NOME_DA_AGENCIA]`
   - `[NUMERO_WHATSAPP]` (no formato `55119xxxxxxxx`)
3. **Copie o conteúdo inteiro** de `00-PROMPT.md` (já consolidado — brief + trechos
   relevantes do SDD + instruções) e cole como prompt inicial no Claude Design.
4. Os arquivos `01-design-brief.md` e `02-sdd-trechos.md` são as fontes originais —
   só envie como anexo se o Claude Design pedir mais contexto.

## Arquivos

| Arquivo | Para que serve |
|---------|----------------|
| `00-PROMPT.md` | **O que você cola no Claude Design.** Auto-suficiente. |
| `01-design-brief.md` | Cópia do `docs/design-brief-landing.md` (fonte da verdade). |
| `02-sdd-trechos.md` | Trechos do `SDD.md` (§5.2 e §11) referenciados pelo brief. |

## Quando o protótipo voltar

Exporte do Claude Design (HTML/imagens/link) e me avise — colocamos em
`docs/prototipo-landing/` e iniciamos a Tarefa 3b (implementação Next.js em TDD).
