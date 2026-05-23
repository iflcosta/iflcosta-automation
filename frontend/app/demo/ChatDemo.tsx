'use client';

import { useEffect, useRef, useState } from 'react';

type Msg = { role: 'user' | 'assistant'; content: string };

const SEED: Msg[] = [
  {
    role: 'assistant',
    content:
      'Olá! Aqui é o atendimento da Imobiliária Sant\'Ana. Tá procurando aluguel ou compra? Em qual bairro?',
  },
];

export function ChatDemo() {
  const [messages, setMessages] = useState<Msg[]>(SEED);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const threadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    threadRef.current?.scrollTo({
      top: threadRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages, loading]);

  async function send(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;
    setInput('');
    setError(null);

    const next: Msg[] = [...messages, { role: 'user', content: text }];
    setMessages(next);
    setLoading(true);
    try {
      const res = await fetch('/api/demo/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error ?? 'Falha inesperada.');
      }
      setMessages([...next, { role: 'assistant', content: data.reply }]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro inesperado.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="rounded-[28px] bg-surface shadow-xl ring-1 ring-border/10 overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-3 bg-brand text-white">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-sm font-semibold">
            IS
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold">Imobiliária Sant'Ana</div>
            <div className="text-xs text-white/70 flex items-center gap-1.5">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              online · responde em segundos
            </div>
          </div>
        </div>

        <div
          ref={threadRef}
          className="px-4 py-5 space-y-3 h-[420px] overflow-y-auto"
          style={{ backgroundColor: 'rgb(var(--chat-bg))' }}
        >
          {messages.map((m, i) => (
            <Bubble key={i} role={m.role} text={m.content} />
          ))}
          {loading && <Typing />}
          {error && (
            <div className="text-xs text-red-600 dark:text-red-300 bg-red-500/10 ring-1 ring-red-500/30 rounded-lg px-3 py-2">
              {error}
            </div>
          )}
        </div>

        <form onSubmit={send} className="flex gap-2 px-3 py-3 bg-surface border-t border-border/10">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Manda uma mensagem como se fosse o cliente…"
            maxLength={800}
            disabled={loading}
            aria-label="Mensagem"
            className="flex-1 rounded-full bg-bg ring-1 ring-border/10 px-4 py-2 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-brand disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-ink transition hover:brightness-95 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? '…' : 'Enviar'}
          </button>
        </form>
      </div>

      <p className="mt-4 text-xs text-ink/50 text-center max-w-md mx-auto">
        Demonstração pública. O agente é o mesmo motor que monto pros clientes —
        só o conteúdo (tom, regras, base de imóveis) muda por cliente.
      </p>
    </div>
  );
}

function Bubble({ role, text }: { role: 'user' | 'assistant'; text: string }) {
  const isUser = role === 'user';
  return (
    <div className={isUser ? 'flex justify-end' : 'flex justify-start'}>
      <div
        className={[
          'max-w-[85%] rounded-2xl px-3 py-2 text-sm shadow-sm text-ink whitespace-pre-wrap',
          isUser ? 'rounded-br-md' : 'rounded-bl-md',
        ].join(' ')}
        style={{
          backgroundColor: isUser
            ? 'rgb(var(--chat-bubble-us))'
            : 'rgb(var(--chat-bubble-them))',
        }}
      >
        {text}
      </div>
    </div>
  );
}

function Typing() {
  return (
    <div className="flex items-center gap-1.5 ml-1" aria-label="digitando">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-ink/30 animate-pulse" style={{ animationDelay: '0ms' }} />
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-ink/30 animate-pulse" style={{ animationDelay: '150ms' }} />
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-ink/30 animate-pulse" style={{ animationDelay: '300ms' }} />
    </div>
  );
}
