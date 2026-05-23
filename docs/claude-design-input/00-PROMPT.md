# Prompt para o Claude Design — Landing Page

> ⚠ **ANTES DE COLAR:** substitua os dois marcadores abaixo no texto inteiro.
> - `[NOME_DA_AGENCIA]` → nome público da agência (ex.: "iflcosta automação").
> - `[NUMERO_WHATSAPP]` → número no formato internacional, ex.: `5511999999999`.

---

## Sua tarefa

Você é um designer sênior de produto. Gere o protótipo de **uma landing page única
(one-page)** em alta fidelidade, mobile-first, com **um único objetivo de conversão**:
levar o visitante a iniciar uma conversa no WhatsApp (`https://wa.me/[NUMERO_WHATSAPP]`)
para um diagnóstico gratuito. Sem formulários, sem cadastro, sem CTAs concorrentes.

Idioma de toda a interface: **português do Brasil**.

Siga **estritamente** o brief abaixo. A copy de cada seção é literal — não substitua por
*lorem ipsum* nem reescreva. As restrições técnicas são inegociáveis: o resultado precisa
ser implementável em Next.js + Tailwind com Lighthouse mobile > 95.

---

## 1. Objetivo da página

Página única, mobile-first, um único objetivo: iniciar conversa no WhatsApp.
A própria página é demonstração de competência técnica — precisa carregar em menos de
um segundo. Performance é argumento de venda.

## 2. Público-alvo

Donos e gestores de **PMEs de Bragança Paulista** — imobiliárias, clínicas, comércio e
outros segmentos. Pouco tempo, leem no celular, decidem rápido, são céticos quanto a
"tecnologia" e não são técnicos. Dor compartilhada: **perder cliente por atendimento
lento ou ausente no WhatsApp.**

## 3. Princípios de design

1. **Clareza acima de tudo** — visitante entende a oferta em < 5 segundos.
2. **Uma dor, uma promessa, um CTA** — sem dispersão.
3. **Mobile-first** — desenhar primeiro para tela pequena.
4. **Honestidade** — sem depoimentos falsos nem números inventados.
5. **Leveza** — espaço em branco generoso; nada de poluição visual.

## 4. Direção visual

- **Tom:** profissional e confiável, porém acessível e moderno — "tecnologia que trabalha
  para você", não "tecnologia complicada".
- **Paleta:** base neutra clara (branco + cinzas suaves), uma cor primária de confiança
  (azul-petróleo / azul profundo) e um acento para CTAs com afinidade ao WhatsApp (verde).
  Você define os valores exatos.
- **Tipografia:** uma única família sans-serif moderna e legível (sugestão: Inter ou
  Geist), no máximo 3 pesos — restrição de performance.
- **Imagery:** mockups de conversas de WhatsApp acontecendo rapidamente; ícones simples e
  consistentes. **Evitar** fotos de banco de imagem genéricas e clichês corporativos.
- **Movimento:** animações sutis de entrada; nada que cause deslocamento de layout (CLS).

## 5. Arquitetura de informação e copy (ordem de scroll)

A copy abaixo é literal — use-a no protótipo, não substitua por placeholder.

### 5.1 Hero
- **H1:** Pare de perder cliente no WhatsApp.
- **Sub-headline:** Sua empresa demora a responder — e o cliente fecha com quem respondeu
  primeiro. Nossa automação com IA atende, qualifica e agenda em segundos, 24 horas por dia.
- **CTA primário (botão):** Quero meu diagnóstico gratuito
- **Microcopy sob o botão:** Conversa direta no WhatsApp. Sem formulário, sem compromisso.
- **Visual:** mockup de uma conversa de WhatsApp sendo respondida na hora.
- **Requisito de layout:** o CTA precisa estar visível **sem scroll** no mobile.

### 5.2 Prova de dor — o custo de demorar
- **Heading:** Cada minuto de espera é uma venda a menos.
- **Texto:** Quando o cliente manda mensagem e ninguém responde, ele não espera: vai para
  o concorrente. À noite, no fim de semana e nos horários de pico, o atendimento
  simplesmente para — e é exatamente aí que as oportunidades aparecem.
- **Três cards curtos com ícone:**
  1. **Resposta lenta** — o lead esfria em minutos.
  2. **Fora do horário** — ninguém atende à noite nem no fim de semana.
  3. **Equipe sobrecarregada** — mensagens importantes se perdem no volume.

### 5.3 Soluções por segmento
- **Heading:** Uma solução para a realidade do seu negócio.
- **Quatro cards:**
  1. **Imobiliárias — Recuperador de Leads:** leads do ZAP e da OLX respondidos e
     qualificados na hora, antes de esfriarem.
  2. **Clínicas — Gestor de Presença:** confirmação e reagendamento automáticos de
     consultas. Menos cadeira vazia, menos faltas.
  3. **Comércio e e-commerce — Recuperador de Carrinho:** quem abandonou a compra recebe
     um empurrão na hora certa.
  4. **Outras PMEs — Atendimento sob medida:** orçamentos, dúvidas e agendamentos
     respondidos automaticamente, com a linguagem do seu negócio.
- **Layout:** grade no desktop, cards empilhados no mobile.

### 5.4 Como funciona
- **Heading:** Simples de começar. Funciona sozinho.
- **Três passos numerados:**
  1. **Conversamos** — um diagnóstico gratuito no WhatsApp para entender onde sua empresa
     perde clientes.
  2. **Montamos sua automação** — configuramos o agente de IA com as regras e o tom do
     seu negócio.
  3. **Você só vê o resultado** — o atendimento roda 24h; você acompanha as conversas e
     recebe os clientes já qualificados.

### 5.5 Prova social — Programa Fundador (estado vazio honesto)
Ainda não há depoimentos. Em vez de uma seção vazia ou de provas falsas, apresente uma
oferta real:
- **Heading:** Estamos selecionando as primeiras empresas de Bragança.
- **Texto:** Abrimos um número limitado de provas de conceito de 10 dias. Você vê a
  automação funcionando no seu negócio antes de qualquer decisão.
- **CTA secundário (mesmo destino do primário — WhatsApp):** Quero participar
- **Prever também** um segundo estado desta seção (para quando houver depoimentos reais),
  com slots para 2 a 3 depoimentos curtos com nome, segmento e foto pequena.

### 5.6 CTA final
- **Heading:** Quantos clientes você vai perder até amanhã?
- **Texto:** Faça o diagnóstico gratuito e descubra onde sua empresa está deixando dinheiro
  na mesa.
- **CTA (botão):** Falar no WhatsApp agora

### 5.7 Rodapé
Minimalista: **[NOME_DA_AGENCIA]** · Bragança Paulista – SP · WhatsApp:
`[NUMERO_WHATSAPP]` · ano corrente.

## 6. Componentes e estados

- **Botão de CTA:** estados normal, hover, foco visível (acessível). **Todos** os CTAs
  apontam para `https://wa.me/[NUMERO_WHATSAPP]`.
- **Cards de segmento:** grade no desktop, empilhados no mobile.
- **Hero:** CTA visível sem scroll no mobile.
- **Seção de prova social:** desenhar os **dois estados** (Programa Fundador / com
  depoimentos).

## 7. Restrições técnicas (não negociáveis)

O protótipo deve ser implementável dentro destes limites em Next.js + Tailwind:

- Mobile-first; layout responsivo mobile + desktop.
- Carregamento subsegundo · LCP < 2,5s · CLS < 0,1 · Lighthouse mobile > 95.
- **Um único** CTA primário (WhatsApp), repetido na página; sem CTAs concorrentes.
- Sem formulários longos. Sem campos de formulário.
- Imagens em AVIF/WebP, com `width`/`height` explícitos.
- Sem bibliotecas pesadas de UI; sem CSS-in-JS em runtime (estilo via Tailwind).
- No máximo uma família tipográfica, com subset.
- Animações sutis que não causem deslocamento de layout.
- Acessibilidade: contraste mínimo AA, HTML semântico, CTA com rótulo descritivo.
- Todo o texto em **português do Brasil**.

## 8. Fora de escopo

Formulários, blog, área de login, navegação multi-página, dark mode, depoimentos reais
(ainda não existem), qualquer integração de backend.

## 9. Checklist de aceite do protótipo

- [ ] O Hero comunica a dor e o ganho em menos de 5 segundos de leitura.
- [ ] O CTA de WhatsApp aparece sem scroll no mobile.
- [ ] As 6 seções da arquitetura de informação estão presentes e na ordem definida.
- [ ] Os 4 cards de segmento estão completos.
- [ ] A seção de prova social usa o estado vazio honesto (Programa Fundador).
- [ ] Nenhuma estatística com `%` não verificada aparece como fato.
- [ ] Nada viola as restrições técnicas da seção 7.
- [ ] Layout validado em mobile e desktop.
- [ ] Todos os botões de CTA apontam para `https://wa.me/[NUMERO_WHATSAPP]`.

---

## Formato esperado da entrega

Gere o protótipo em alta fidelidade, com versões mobile e desktop visíveis lado a lado.
Use a copy literal acima. Não invente seções não previstas. Se faltar alguma decisão
visual, prefira a opção **mais simples e mais rápida de carregar**.
