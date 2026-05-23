# Trechos do SDD relevantes para a landing

Extraídos de `SDD.md` — só envie ao Claude Design se ele pedir mais contexto.
O `00-PROMPT.md` já incorpora as informações essenciais destes trechos.

---

## §5.2 — Componente: Landing Page (`frontend/`)

Arquitetura de informação (ordem de scroll):

1. **Hero** — H1 curta (< 8 palavras) na dor universal + sub-headline com a promessa +
   CTA primário.
2. **Prova de dor** — o custo de não responder rápido (tempo → perda).
3. **Soluções por segmento** — cards: Imobiliárias, Clínicas, Comércio, Outras PMEs.
4. **Como funciona** — 3 passos, sem jargão técnico.
5. **Prova social** — espaço reservado para depoimentos/casos (preenchido após 1ª PoC).
6. **CTA final** — repetição do botão WhatsApp.

Regras: Server Components por padrão; `"use client"` só no que tiver interação;
imagens via `next/image` (AVIF/WebP, `width`/`height` explícitos).

---

## §11 — Requisitos de Qualidade

| Atributo | Requisito |
|----------|-----------|
| Performance | Lighthouse mobile > 95 · LCP < 2,5s · CLS < 0,1 · carregamento subsegundo |
| Testabilidade | Cobertura TDD: Hero, CTA WhatsApp, otimização de imagem |
| Manutenibilidade | Componentes tipados; sem `any` implícito; comentários só no "porquê" |
