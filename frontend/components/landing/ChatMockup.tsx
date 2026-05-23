const messagesThem = [
  { time: '23:47', text: 'Oi, vi o apartamento de 2 quartos no Centro. Ainda está disponível?' },
  { time: '23:48', text: 'Pode sim. Qual o valor com condomínio?' },
];
const messagesUs = [
  {
    time: '23:47',
    text: 'Olá, Marina! Sim, está. Posso te enviar a ficha completa e agendar uma visita amanhã?',
  },
  {
    time: '23:48',
    text: 'Aluguel R$ 2.400 + cond. R$ 380. Tenho um horário às 10h e outro às 16h — qual prefere?',
  },
];

export function ChatMockup() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto w-full max-w-sm select-none"
    >
      <div className="rounded-[28px] bg-surface shadow-xl ring-1 ring-border/10 overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-3 bg-brand text-white">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-sm font-semibold">
            IL
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold">Iago Lopes · Atendimento</div>
            <div className="text-xs text-white/70 flex items-center gap-1.5">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              online · responde em segundos
            </div>
          </div>
        </div>

        <div
          className="px-4 py-5 space-y-3"
          style={{ backgroundColor: 'rgb(var(--chat-bg))' }}
        >
          <div className="text-center text-[10px] uppercase tracking-wider text-ink/40">
            hoje · 23:47
          </div>

          <Bubble side="them" text={messagesThem[0].text} time={messagesThem[0].time} />
          <Bubble side="us" text={messagesUs[0].text} time={messagesUs[0].time} />
          <Bubble side="them" text={messagesThem[1].text} time={messagesThem[1].time} />
          <Bubble side="us" text={messagesUs[1].text} time={messagesUs[1].time} />

          <div className="flex items-center gap-1.5 ml-1">
            <Dot />
            <Dot delay="150ms" />
            <Dot delay="300ms" />
          </div>
        </div>

        <div className="px-4 py-3 bg-surface border-t border-border/10">
          <div className="rounded-full bg-ink/5 px-4 py-2 text-xs text-ink/40">
            Mensagem
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[40px] bg-brand/20 blur-3xl" />
    </div>
  );
}

function Bubble({
  side,
  text,
  time,
}: {
  side: 'us' | 'them';
  text: string;
  time: string;
}) {
  const isUs = side === 'us';
  return (
    <div className={isUs ? 'flex justify-end' : 'flex justify-start'}>
      <div
        className={[
          'max-w-[85%] rounded-2xl px-3 py-2 text-sm shadow-sm text-ink',
          isUs ? 'rounded-br-md' : 'rounded-bl-md',
        ].join(' ')}
        style={{
          backgroundColor: isUs
            ? 'rgb(var(--chat-bubble-us))'
            : 'rgb(var(--chat-bubble-them))',
        }}
      >
        <div>{text}</div>
        <div className="mt-1 text-right text-[10px] text-ink/40">
          {time}
          {isUs ? ' ✓✓' : ''}
        </div>
      </div>
    </div>
  );
}

function Dot({ delay = '0ms' }: { delay?: string }) {
  return (
    <span
      className="inline-block h-1.5 w-1.5 rounded-full bg-ink/30 animate-pulse"
      style={{ animationDelay: delay }}
    />
  );
}
