/* global React, DesignCanvas, DCSection, DCArtboard, LandingPage, CTAButton, ChatMockup */

// Heights are explicit — design_canvas artboards are static frames.
// Tweak if content overflows.

function ButtonStatesArtboard() {
  return (
    <div className="lp" data-v="desktop" style={{ padding: 56, display: 'flex', flexDirection: 'column', gap: 36, background: '#FAFAF7' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
        <StateCell label="normal · large">
          <CTAButton size="lg">Quero meu diagnóstico gratuito</CTAButton>
        </StateCell>
        <StateCell label="hover">
          <CTAButton size="lg" state="hover">Quero meu diagnóstico gratuito</CTAButton>
        </StateCell>
        <StateCell label="focus visível (teclado)">
          <CTAButton size="lg" state="focus">Quero meu diagnóstico gratuito</CTAButton>
        </StateCell>
        <StateCell label="extra-large · hero">
          <CTAButton size="xl">Falar no WhatsApp agora</CTAButton>
        </StateCell>
        <StateCell label="bloco · mobile (full width)">
          <div style={{ width: 320 }}>
            <CTAButton size="lg" block>Quero meu diagnóstico gratuito</CTAButton>
          </div>
        </StateCell>
        <StateCell label="desabilitado (referência)">
          <CTAButton size="lg" state="disabled">Aguarde…</CTAButton>
        </StateCell>
      </div>

      <div style={{ borderTop: '1px solid #E6E4DC', paddingTop: 28 }}>
        <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0E3B4A', marginBottom: 16 }}>
          mockup de chat — componente
        </div>
        <div style={{ display: 'flex', gap: 36, alignItems: 'flex-start' }}>
          <ChatMockup />
          <div style={{ flex: 1, paddingTop: 24, fontSize: 14.5, color: '#3A4651', lineHeight: 1.55, maxWidth: '34em' }}>
            <p style={{ margin: 0, marginBottom: 12 }}>
              UI genérica de mensageria — bolhas, ticks e indicador de digitação seguem o padrão
              universal de chat, sem reproduzir o visual proprietário de nenhum app.
            </p>
            <p style={{ margin: 0, marginBottom: 12, color: '#6B7480' }}>
              Sequência roteirizada: cliente pergunta às 23h47, o agente responde em segundos,
              negocia valores e oferece dois horários de visita. Animações de entrada das bolhas
              respeitam <code style={{ background: '#F4F2EC', padding: '1px 6px', borderRadius: 4 }}>prefers-reduced-motion</code> via CSS sem CLS.
            </p>
            <p style={{ margin: 0, color: '#6B7480' }}>
              Em produção: <code style={{ background: '#F4F2EC', padding: '1px 6px', borderRadius: 4 }}>next/image</code> para o avatar (AVIF/WebP) + dimensões explícitas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StateCell({ label, children }) {
  return (
    <div style={{
      background: '#FFFFFF',
      border: '1px solid #E6E4DC',
      borderRadius: 14,
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      minHeight: 140,
      justifyContent: 'space-between',
    }}>
      <div style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6B7480' }}>
        {label}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
        {children}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Notes block — printed at the very top so the user sees framing
// ─────────────────────────────────────────────────────────────

function CanvasIntro() {
  return (
    <div style={{
      padding: '32px 60px 0',
      maxWidth: 1100,
      fontFamily: "'Inter', system-ui, sans-serif",
      color: '#3A4651',
      lineHeight: 1.5,
    }}>
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '5px 12px',
        background: '#EAF0F2',
        color: '#0E3B4A',
        border: '1px solid rgba(14, 59, 74, 0.08)',
        borderRadius: 999,
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        marginBottom: 16,
      }}>
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#25D366' }} />
        Protótipo · landing iflcosta automação
      </div>
      <h1 style={{
        fontFamily: "'Inter', system-ui, sans-serif",
        fontSize: 32,
        fontWeight: 700,
        letterSpacing: '-0.024em',
        color: '#0B1418',
        margin: 0,
        marginBottom: 10,
        textWrap: 'balance',
      }}>
        Iago Lopes <span style={{ color: '#6B7480', fontWeight: 500 }}>· Hardware &amp; Tech</span> — landing one-page, desktop + mobile, dois estados da prova social.
      </h1>
      <p style={{ fontSize: 15, color: '#3A4651', margin: 0, maxWidth: '60em', textWrap: 'pretty' }}>
        Copy literal do <code style={{ background: '#F4F2EC', padding: '1px 6px', borderRadius: 4 }}>docs/claude-design-input/00-PROMPT.md</code>.
        Tipografia Inter, paleta azul-petróleo + verde WhatsApp. Marca pessoal — monograma IL + nome + descritor.
        Número provisório: <code style={{ background: '#F4F2EC', padding: '1px 6px', borderRadius: 4 }}>11 9 1969-1542</code>.
      </p>
    </div>
  );
}

function CanvasApp() {
  return (
    <React.Fragment>
      <CanvasIntro />
      <DesignCanvas storageKey="iflcosta-landing-v1">
        <DCSection id="landing" title="Landing — protótipo principal" subtitle="Desktop 1440 e mobile 390, lado a lado. Mesma copy, mesma hierarquia.">
          <DCArtboard id="desktop" label="Desktop · 1440" width={1440} height={4280}>
            <LandingPage variant="desktop" social="founder" />
          </DCArtboard>
          <DCArtboard id="mobile" label="Mobile · 390" width={390} height={4280}>
            <LandingPage variant="mobile" social="founder" />
          </DCArtboard>
        </DCSection>

        <DCSection id="alt" title="Estado alternativo · prova social" subtitle="Layout futuro da seção 5.5, quando houver depoimentos reais. Resto da página inalterado.">
          <DCArtboard id="desktop-testi" label="Desktop · com depoimentos" width={1440} height={4280}>
            <LandingPage variant="desktop" social="testimonials" />
          </DCArtboard>
          <DCArtboard id="mobile-testi" label="Mobile · com depoimentos" width={390} height={4280}>
            <LandingPage variant="mobile" social="testimonials" />
          </DCArtboard>
        </DCSection>

        <DCSection id="components" title="Estados de componentes" subtitle="CTA WhatsApp em todos os estados acessíveis + componente de mockup de chat.">
          <DCArtboard id="cta-states" label="CTA · estados" width={920} height={760}>
            <ButtonStatesArtboard />
          </DCArtboard>
        </DCSection>
      </DesignCanvas>
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CanvasApp />);
