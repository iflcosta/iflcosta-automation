import { WA_URL } from '@/lib/config';
import { ChatMockup } from './ChatMockup';

export function Hero() {
  return (
    <section className="px-6 pt-10 pb-16 md:pt-20 md:pb-24">
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 md:items-center">
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            Automação com IA · PMEs de Bragança
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight text-ink">
            Pare de perder cliente
            <br />
            no WhatsApp.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-ink/75 max-w-xl mx-auto md:mx-0">
            Sua empresa demora a responder — e o cliente fecha com quem
            respondeu primeiro. Nossa automação com IA atende, qualifica e
            agenda em segundos, 24 horas por dia.
          </p>
          <div className="mt-8 flex flex-col items-center md:items-start gap-3">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <a
                href={WA_URL}
                className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-4 text-base font-semibold text-ink shadow-sm transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                Quero meu diagnóstico gratuito
              </a>
              <a
                href="/demo"
                className="inline-flex items-center gap-2 rounded-full bg-surface ring-1 ring-border/20 px-6 py-4 text-base font-semibold text-ink transition hover:ring-border/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                Testar o agente ao vivo
              </a>
            </div>
            <p className="text-sm text-ink/55">
              Conversa direta no WhatsApp. Sem formulário, sem compromisso.
            </p>
          </div>
        </div>

        <div className="md:pl-6">
          <ChatMockup />
        </div>
      </div>
    </section>
  );
}
