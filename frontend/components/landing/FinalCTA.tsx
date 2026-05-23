import { WA_URL } from '@/lib/config';

export function FinalCTA() {
  return (
    <section className="px-6 py-20 md:py-28 bg-brand">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          Quantos clientes você vai perder até amanhã?
        </h2>
        <p className="mt-6 text-base md:text-lg text-white/80">
          Faça o diagnóstico gratuito e descubra onde sua empresa está deixando
          dinheiro na mesa.
        </p>
        <a
          href={WA_URL}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-7 py-4 text-base font-semibold text-ink shadow-sm transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Falar no WhatsApp agora
        </a>
      </div>
    </section>
  );
}
