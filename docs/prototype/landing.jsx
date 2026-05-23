/* global React */
// Landing page for iflcosta automação.
// Renders desktop or mobile layout depending on `variant` prop.
// social = "founder" | "testimonials"  → toggles the social-proof block.

const WA_NUMBER = '5511919691542'; // placeholder até confirmação final
const WA_URL = `https://wa.me/${WA_NUMBER}`;
const AGENCY = 'Iago Lopes';
const AGENCY_TAG = 'Hardware & Tech';

// Monograma IL — geométrico, sem serifa. Usa currentColor.
const PumaMark = ({ size = 28, className }) => (
  <svg
    viewBox="0 0 40 40"
    width={size}
    height={size}
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <rect x="8" y="9" width="4" height="22" rx="0.5" />
    <rect x="17" y="9" width="4" height="18" rx="0.5" />
    <rect x="17" y="27" width="15" height="4" rx="0.5" />
  </svg>
);

// Decoração: bloco grande do monograma para watermark. Não é usado mais — placeholder vazio.
const PumaSilhouette = () => null;

// ─────────────────────────────────────────────────────────────
// Icons (minimal geometric — circles, lines, rounded rects)
// ─────────────────────────────────────────────────────────────

const Icon = {
  clock: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7 V12 L15.5 14" />
    </svg>
  ),
  moon: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 14.5 A8 8 0 0 1 9.5 4 A8.5 8.5 0 1 0 20 14.5 Z" />
    </svg>
  ),
  stack: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="14" height="14" rx="2" />
      <rect x="7.5" y="7.5" width="14" height="14" rx="2" />
    </svg>
  ),
  building: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
    </svg>
  ),
  cross: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M12 5 V19 M5 12 H19" />
    </svg>
  ),
  cart: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 5h2l2 11h11l2-8H7" />
      <circle cx="10" cy="20" r="1.2" />
      <circle cx="18" cy="20" r="1.2" />
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6 a2 2 0 0 1 2-2 h12 a2 2 0 0 1 2 2 v9 a2 2 0 0 1 -2 2 H10 l-4 3 v-3 H6 a2 2 0 0 1 -2-2 Z" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M19.07 4.93A10 10 0 0 0 2.18 16.17L1 22l5.95-1.16A10 10 0 1 0 19.07 4.93Zm-7.07 16a8.1 8.1 0 0 1-4.13-1.14l-.3-.18-3.53.69.7-3.46-.2-.31A8.13 8.13 0 1 1 12 20.93Zm4.7-6.04c-.26-.13-1.52-.75-1.76-.83-.24-.09-.41-.13-.59.13-.17.26-.67.83-.82 1-.15.17-.3.2-.56.07-1.5-.75-2.47-1.34-3.45-3.04-.26-.45.26-.42.74-1.39.08-.17.04-.31-.02-.44-.07-.13-.59-1.41-.8-1.93-.21-.51-.43-.44-.59-.45h-.5c-.17 0-.45.06-.69.31-.24.26-.91.89-.91 2.16 0 1.28.93 2.51 1.06 2.68.13.17 1.83 2.79 4.43 3.92 1.65.72 2.29.78 3.11.66.5-.08 1.52-.62 1.74-1.22.21-.6.21-1.11.15-1.22-.06-.11-.24-.17-.5-.3Z" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12 L9 17 L20 6" />
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12 H19 M13 6 L19 12 L13 18" />
    </svg>
  ),
  spark: (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
};

// ─────────────────────────────────────────────────────────────
// Primary CTA button (WhatsApp green). Real <a> with focus ring.
// ─────────────────────────────────────────────────────────────

function CTAButton({ children, size = 'lg', variant = 'primary', block = false, state }) {
  // `state` lets us freeze a visual state for the components artboard
  const classes = ['cta', `cta-${size}`, `cta-${variant}`];
  if (block) classes.push('cta-block');
  if (state) classes.push(`is-${state}`);
  return (
    <a className={classes.join(' ')} href={WA_URL} target="_blank" rel="noopener noreferrer">
      <span className="cta-icon" aria-hidden="true">{Icon.whatsapp}</span>
      <span className="cta-label">{children}</span>
    </a>
  );
}

// ─────────────────────────────────────────────────────────────
// Phone-style chat mockup. Generic UI — not a copy of any specific app.
// ─────────────────────────────────────────────────────────────

function ChatMockup({ compact = false }) {
  return (
    <div className={`chat${compact ? ' chat-compact' : ''}`}>
      <div className="chat-frame">
        <div className="chat-header">
          <div className="chat-avatar" aria-hidden="true"><PumaMark size={20} /></div>
          <div className="chat-meta">
            <div className="chat-name">Iago Lopes · Atendimento</div>
            <div className="chat-status"><span className="dot" /> online · responde em segundos</div>
          </div>
        </div>
        <div className="chat-thread">
          <div className="chat-day">hoje · 23:47</div>

          <div className="bubble bubble-them">
            <div>Oi, vi o apartamento de 2 quartos no Centro. Ainda está disponível?</div>
            <div className="bubble-time">23:47</div>
          </div>

          <div className="bubble bubble-us">
            <div>Olá, Marina! Sim, está. Posso te enviar a ficha completa e agendar uma visita amanhã?</div>
            <div className="bubble-time">23:47 <span className="ticks">{Icon.check}{Icon.check}</span></div>
          </div>

          <div className="bubble bubble-them">
            <div>Pode sim. Qual o valor com condomínio?</div>
            <div className="bubble-time">23:48</div>
          </div>

          <div className="bubble bubble-us">
            <div>Aluguel R$ 2.400 + cond. R$ 380. Tenho um horário às 10h e outro às 16h — qual prefere?</div>
            <div className="bubble-time">23:48 <span className="ticks">{Icon.check}{Icon.check}</span></div>
          </div>

          <div className="chat-typing" aria-hidden="true">
            <span className="tdot" /><span className="tdot" /><span className="tdot" />
          </div>
        </div>
        <div className="chat-input">
          <div className="chat-input-pill">Mensagem</div>
        </div>
      </div>
      <div className="chat-glow" aria-hidden="true" />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Sections
// ─────────────────────────────────────────────────────────────

function Nav({ variant }) {
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">
            <PumaMark size={18} />
          </span>
          <span className="brand-stack">
            <span className="brand-name">Iago Lopes</span>
            <span className="brand-tag">{AGENCY_TAG}</span>
          </span>
        </div>
        {variant === 'desktop' && (
          <div className="nav-meta">
            <span className="nav-city"><span className="nav-pin" /> Bragança Paulista – SP</span>
            <a className="nav-cta" href={WA_URL} target="_blank" rel="noopener noreferrer">
              <span aria-hidden="true" className="nav-cta-icon">{Icon.whatsapp}</span>
              Falar agora
            </a>
          </div>
        )}
        {variant === 'mobile' && (
          <a className="nav-cta nav-cta-sm" href={WA_URL} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp">
            <span aria-hidden="true" className="nav-cta-icon">{Icon.whatsapp}</span>
          </a>
        )}
      </div>
    </header>
  );
}

function Hero({ variant }) {
  return (
    <section className="sec hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Automação com IA · PMEs de Bragança
          </div>
          <h1 className="h1">
            Pare de perder cliente<br />no WhatsApp.
          </h1>
          <p className="lede">
            Sua empresa demora a responder — e o cliente fecha com quem respondeu primeiro.
            Nossa automação com IA atende, qualifica e agenda em segundos, 24 horas por dia.
          </p>
          <div className="hero-cta">
            <CTAButton size={variant === 'mobile' ? 'lg' : 'xl'} block={variant === 'mobile'}>
              Quero meu diagnóstico gratuito
            </CTAButton>
            <div className="microcopy">
              Conversa direta no WhatsApp. Sem formulário, sem compromisso.
            </div>
          </div>
          {variant === 'desktop' && (
            <div className="hero-trust">
              <div className="trust-item">
                <div className="trust-num">&lt; 60s</div>
                <div className="trust-lbl">para qualificar um lead</div>
              </div>
              <div className="trust-sep" />
              <div className="trust-item">
                <div className="trust-num">24/7</div>
                <div className="trust-lbl">noites, fins de semana e feriados</div>
              </div>
              <div className="trust-sep" />
              <div className="trust-item">
                <div className="trust-num">0</div>
                <div className="trust-lbl">formulários ou cadastro</div>
              </div>
            </div>
          )}
        </div>
        <div className="hero-visual">
          <ChatMockup />
        </div>
      </div>
    </section>
  );
}

function Pain() {
  const items = [
    { icon: Icon.clock,  title: 'Resposta lenta',       body: 'O lead esfria em minutos.' },
    { icon: Icon.moon,   title: 'Fora do horário',      body: 'Ninguém atende à noite nem no fim de semana.' },
    { icon: Icon.stack,  title: 'Equipe sobrecarregada', body: 'Mensagens importantes se perdem no volume.' },
  ];
  return (
    <section className="sec pain">
      <div className="sec-head">
        <div className="kicker">o custo de demorar</div>
        <h2 className="h2">Cada minuto de espera<br />é uma venda a menos.</h2>
        <p className="sec-lede">
          Quando o cliente manda mensagem e ninguém responde, ele não espera: vai
          para o concorrente. À noite, no fim de semana e nos horários de pico, o
          atendimento simplesmente para — e é exatamente aí que as oportunidades aparecem.
        </p>
      </div>
      <div className="pain-grid">
        {items.map((it, i) => (
          <article className="card pain-card" key={i}>
            <div className="card-icon">{it.icon}</div>
            <h3 className="card-title">{it.title}</h3>
            <p className="card-body">{it.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Solutions() {
  const items = [
    {
      icon: Icon.building,
      segment: 'Imobiliárias',
      name: 'Recuperador de Leads',
      body: 'Leads do ZAP e da OLX respondidos e qualificados na hora, antes de esfriarem.',
    },
    {
      icon: Icon.cross,
      segment: 'Clínicas',
      name: 'Gestor de Presença',
      body: 'Confirmação e reagendamento automáticos de consultas. Menos cadeira vazia, menos faltas.',
    },
    {
      icon: Icon.cart,
      segment: 'Comércio e e-commerce',
      name: 'Recuperador de Carrinho',
      body: 'Quem abandonou a compra recebe um empurrão na hora certa.',
    },
    {
      icon: Icon.chat,
      segment: 'Outras PMEs',
      name: 'Atendimento sob medida',
      body: 'Orçamentos, dúvidas e agendamentos respondidos automaticamente, com a linguagem do seu negócio.',
    },
  ];
  return (
    <section className="sec solutions">
      <div className="sec-head">
        <div className="kicker">soluções por segmento</div>
        <h2 className="h2">Uma solução para a realidade<br />do seu negócio.</h2>
      </div>
      <div className="sol-grid">
        {items.map((it, i) => (
          <article className="card sol-card" key={i}>
            <div className="sol-head">
              <div className="sol-icon">{it.icon}</div>
              <div className="sol-segment">{it.segment}</div>
            </div>
            <h3 className="sol-name">{it.name}</h3>
            <p className="sol-body">{it.body}</p>
            <div className="sol-foot">
              <span>Saber mais no WhatsApp</span>
              <span aria-hidden="true">{Icon.arrow}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function How() {
  const steps = [
    { n: '01', title: 'Conversamos',           body: 'Um diagnóstico gratuito no WhatsApp para entender onde sua empresa perde clientes.' },
    { n: '02', title: 'Montamos sua automação', body: 'Configuramos o agente de IA com as regras e o tom do seu negócio.' },
    { n: '03', title: 'Você só vê o resultado', body: 'O atendimento roda 24h; você acompanha as conversas e recebe os clientes já qualificados.' },
  ];
  return (
    <section className="sec how">
      <div className="sec-head">
        <div className="kicker">como funciona</div>
        <h2 className="h2">Simples de começar.<br />Funciona sozinho.</h2>
      </div>
      <ol className="how-grid">
        {steps.map((s, i) => (
          <li className="how-step" key={i}>
            <div className="how-n">{s.n}</div>
            <h3 className="how-title">{s.title}</h3>
            <p className="how-body">{s.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function SocialFounder() {
  return (
    <section className="sec social founder">
      <div className="founder-card">
        <div className="founder-left">
          <div className="kicker on-dark">programa fundador</div>
          <h2 className="h2 on-dark">
            Estamos selecionando as primeiras<br />empresas de Bragança.
          </h2>
          <p className="sec-lede on-dark">
            Abrimos um número limitado de provas de conceito de 10 dias. Você vê a
            automação funcionando no seu negócio antes de qualquer decisão.
          </p>
          <div className="founder-cta">
            <CTAButton size="lg">Quero participar</CTAButton>
          </div>
        </div>
        <aside className="founder-right">
          <div className="founder-meter">
            <div className="meter-row">
              <span className="meter-label">PoCs disponíveis</span>
              <span className="meter-value">5 de 8</span>
            </div>
            <div className="meter-bar"><div className="meter-fill" style={{ width: '62.5%' }} /></div>
            <ul className="founder-list">
              <li><span className="founder-check">{Icon.check}</span> Diagnóstico técnico do seu WhatsApp</li>
              <li><span className="founder-check">{Icon.check}</span> 10 dias de automação rodando ao vivo</li>
              <li><span className="founder-check">{Icon.check}</span> Relatório com leads recuperados</li>
              <li><span className="founder-check">{Icon.check}</span> Sem cobrança até a decisão final</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}

function SocialTestimonials() {
  const items = [
    {
      name: 'Marina S.', role: 'Imobiliária · Bragança Paulista',
      quote: 'Antes a gente perdia lead da madrugada toda. Hoje todo mundo recebe resposta na hora — e chega na corretora já querendo visitar.',
    },
    {
      name: 'Dr. Henrique L.', role: 'Clínica odontológica · Atibaia',
      quote: 'Reduzimos faltas e cobrimos buracos da agenda no mesmo dia. A confirmação automática mudou a previsibilidade do consultório.',
    },
    {
      name: 'Camila R.', role: 'E-commerce de moda · Jundiaí',
      quote: 'O recuperador de carrinho fala como a gente fala. Não parece bot, parece atendente boa — e traz venda no mesmo dia.',
    },
  ];
  return (
    <section className="sec social testimonials">
      <div className="sec-head">
        <div className="kicker">quem já está usando</div>
        <h2 className="h2">Resultados reais,<br />em negócios reais.</h2>
      </div>
      <div className="testi-grid">
        {items.map((t, i) => (
          <figure className="card testi-card" key={i}>
            <blockquote className="testi-quote">"{t.quote}"</blockquote>
            <figcaption className="testi-cap">
              <div className="testi-avatar" aria-hidden="true">{t.name.charAt(0)}</div>
              <div>
                <div className="testi-name">{t.name}</div>
                <div className="testi-role">{t.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function FinalCTA({ variant }) {
  return (
    <section className="sec final">
      <div className="final-inner">
        <h2 className="h1 final-h">
          Quantos clientes você vai<br />perder até amanhã?
        </h2>
        <p className="final-lede">
          Faça o diagnóstico gratuito e descubra onde sua empresa está deixando
          dinheiro na mesa.
        </p>
        <div className="final-cta">
          <CTAButton size={variant === 'mobile' ? 'lg' : 'xl'} block={variant === 'mobile'}>
            Falar no WhatsApp agora
          </CTAButton>
          <div className="microcopy on-dark">
            Bragança Paulista – SP · resposta em minutos
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="brand-mark sm" aria-hidden="true"><PumaMark size={14} /></span>
          <span>Iago Lopes <span className="footer-tag">· {AGENCY_TAG}</span></span>
        </div>
        <div className="footer-meta">
          <span>Bragança Paulista – SP</span>
          <span className="footer-sep">·</span>
          <span>WhatsApp 11 9 1969-1542</span>
          <span className="footer-sep">·</span>
          <span>© {year}</span>
        </div>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────
// LandingPage — composes everything for a given viewport variant
// ─────────────────────────────────────────────────────────────

function LandingPage({ variant = 'desktop', social = 'founder' }) {
  return (
    <div className="lp" data-v={variant}>
      <Nav variant={variant} />
      <Hero variant={variant} />
      <Pain />
      <Solutions />
      <How />
      {social === 'founder' ? <SocialFounder /> : <SocialTestimonials />}
      <FinalCTA variant={variant} />
      <Footer />
    </div>
  );
}

Object.assign(window, {
  LandingPage,
  CTAButton,
  ChatMockup,
  PumaMark,
  PumaSilhouette,
  Icon,
  AGENCY,
  AGENCY_TAG,
  WA_NUMBER,
  WA_URL,
});
