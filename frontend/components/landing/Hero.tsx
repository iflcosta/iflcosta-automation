import { WA_URL } from '@/lib/config';

export function Hero() {
  return (
    <section className="px-6 pt-16 pb-12 md:pt-24 md:pb-20 max-w-3xl mx-auto text-center">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-ink">
        Pare de perder cliente
        <br />
        no WhatsApp.
      </h1>
      <p className="mt-6 text-lg md:text-xl text-ink/80 max-w-2xl mx-auto">
        Sua empresa demora a responder — e o cliente fecha com quem respondeu
        primeiro. Nossa automação com IA atende, qualifica e agenda em segundos,
        24 horas por dia.
      </p>
      <a
        href={WA_URL}
        className="mt-8 inline-flex items-center justify-center rounded-full bg-wagreen px-7 py-4 text-base font-semibold text-ink shadow-sm transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep"
      >
        Quero meu diagnóstico gratuito
      </a>
      <p className="mt-3 text-sm text-ink/60">
        Conversa direta no WhatsApp. Sem formulário, sem compromisso.
      </p>
    </section>
  );
}
