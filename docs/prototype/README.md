# Protótipo · Landing — Iago Lopes Hardware & Tech

Protótipo estático da landing one-page, lido a partir de `docs/claude-design-input/`.

## Estrutura

- `index.html` — host. Carrega React + Babel via CDN (apenas para prototipagem).
- `landing.jsx` — todos os componentes da landing (Nav, Hero, Pain, Solutions, How, Social, FinalCTA, Footer).
- `landing.css` — estilos. Adapta layout via `[data-v="desktop"]` / `[data-v="mobile"]`.
- `canvas.jsx` — apresentação no design canvas (desktop + mobile + estado alternativo da prova social).
- `design-canvas.jsx` — biblioteca do canvas (pan/zoom, focus, drag-reorder).

## Rodar localmente

Qualquer servidor estático serve:

```bash
cd docs/prototype
python3 -m http.server 8080
# abra http://localhost:8080
```

Ou abra `index.html` direto no navegador.

## Implementação Next.js

Este é um protótipo só pra alinhar visual + copy. Na implementação real (per `CLAUDE.md`):
- Migrar JSX inline → Server Components em `src/app/page.tsx` + componentes em `src/components/landing/`.
- Mover tokens do `landing.css` para `tailwind.config.ts` + Design Tokens em `src/styles/tokens.css`.
- Avatar do chat mockup → `next/image` (AVIF/WebP, dimensões explícitas).
- Animações com `prefers-reduced-motion` honrado.
- Atualizar `WA_NUMBER` em `landing.jsx` (atual: placeholder `5511919691542`).

## Placeholders a confirmar antes de publicar

- **Número WhatsApp:** `5511919691542` (provisório)
- **Nome público:** "Iago Lopes · Hardware & Tech"
- **Quantidade de PoCs disponíveis** no card de Programa Fundador (atual: 5 de 8)
