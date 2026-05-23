import Link from 'next/link';
import { WA_URL } from '@/lib/config';
import { ChatDemo } from './ChatDemo';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Demo ao vivo — Iago Lopes | Tech & IA',
  description:
    'Converse com o agente de IA fictício da Imobiliária Sant\'Ana. É o mesmo motor que monto pros clientes — só o conteúdo muda.',
  robots: { index: false, follow: false },
};

export default function DemoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border/10 px-6 h-14 flex items-center justify-between gap-3 bg-bg/80 backdrop-blur">
        <Link
          href="/"
          aria-label="Voltar para ia.iflcosta.tech"
          className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-ink/70 ring-1 ring-border/15 hover:text-ink hover:ring-border/30 transition"
        >
          <span aria-hidden>←</span>
          <span className="hidden sm:inline">Voltar para o site</span>
          <span className="sm:hidden">Voltar</span>
        </Link>
        <div className="flex items-center gap-2 min-w-0">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand text-[10px] font-bold tracking-wider text-white">
            IL
          </span>
          <span className="hidden sm:flex flex-col leading-tight min-w-0">
            <span className="text-sm font-semibold text-ink truncate">Iago Lopes</span>
            <span className="text-[11px] text-ink/55 truncate">Tech & IA · demo</span>
          </span>
        </div>
        <a
          href={WA_URL}
          className="text-xs font-semibold rounded-full bg-accent px-4 py-1.5 text-ink hover:brightness-95"
        >
          WhatsApp
        </a>
      </header>

      <main className="flex-1 px-6 py-10 md:py-16">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Demonstração ao vivo
          </span>
          <h1 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-ink">
            Converse com o agente.
          </h1>
          <p className="mt-4 text-base md:text-lg text-ink/70 max-w-xl mx-auto">
            Esse chat é um agente real respondendo na hora — fictício da
            <em> Imobiliária Sant'Ana</em>, exemplo do que monto pros clientes.
            Mande mensagem como se você fosse o cliente.
          </p>
        </div>

        <ChatDemo />

        <section className="mt-16 max-w-3xl mx-auto">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-ink/80">
              Não é só pra imobiliária
            </span>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold tracking-tight text-ink">
              Mesmo motor, qualquer segmento.
            </h2>
            <p className="mt-3 text-sm md:text-base text-ink/70 max-w-xl mx-auto">
              A imobiliária é só um exemplo. O agente assume a persona, as regras e a base
              de conhecimento do seu negócio — atendendo, qualificando e agendando 24h por dia.
            </p>
          </div>

          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <li className="rounded-2xl bg-surface ring-1 ring-border/10 p-5">
              <div className="text-sm font-semibold text-ink">Imobiliárias</div>
              <p className="mt-1 text-xs text-ink/65">
                Qualifica bairro, quartos, faixa de preço. Agenda visita com o corretor.
              </p>
            </li>
            <li className="rounded-2xl bg-surface ring-1 ring-border/10 p-5">
              <div className="text-sm font-semibold text-ink">Clínicas e consultórios</div>
              <p className="mt-1 text-xs text-ink/65">
                Marca consulta, confirma convênio, lembra o paciente um dia antes.
              </p>
            </li>
            <li className="rounded-2xl bg-surface ring-1 ring-border/10 p-5">
              <div className="text-sm font-semibold text-ink">Comércio e serviços</div>
              <p className="mt-1 text-xs text-ink/65">
                Tira dúvida de produto, manda catálogo, encaminha pedido pro vendedor.
              </p>
            </li>
            <li className="rounded-2xl bg-surface ring-1 ring-border/10 p-5">
              <div className="text-sm font-semibold text-ink">Agências e prestadores</div>
              <p className="mt-1 text-xs text-ink/65">
                Recebe briefing, qualifica budget e prazo, agenda call com o time.
              </p>
            </li>
          </ul>
        </section>

        <section className="mt-12 max-w-2xl mx-auto rounded-2xl bg-surface ring-1 ring-border/10 p-6">
          <h2 className="text-base font-semibold text-ink">Como funciona pra valer</h2>
          <ul className="mt-3 space-y-2 text-sm text-ink/70 list-disc list-inside">
            <li>Mesmo motor de IA do que entrego pra clientes.</li>
            <li>Por cliente, troco a persona, as regras e a base (imóveis, horários, FAQ, integração com agenda).</li>
            <li>No cliente real, atende direto no WhatsApp dele — 24h por dia.</li>
            <li>10 dias de piloto sem custo no Programa Fundador.</li>
          </ul>
          <a
            href={WA_URL}
            className="mt-5 inline-flex items-center justify-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:brightness-110"
          >
            Quero conversar
          </a>
        </section>
      </main>

      <footer className="px-6 py-6 border-t border-border/10 text-xs text-ink/50 text-center">
        Demo experimental · pode falhar por limite de uso do provedor · sem dados reais
        de imóveis.
      </footer>
    </div>
  );
}
