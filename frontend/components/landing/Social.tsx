import { WA_URL } from '@/lib/config';

export function Social() {
  return (
    <section className="px-6 py-16 md:py-24 max-w-3xl mx-auto text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-deep">
        Programa Fundador
      </p>
      <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-ink">
        Estamos selecionando as primeiras empresas de Bragança.
      </h2>
      <p className="mt-6 text-base md:text-lg text-ink/80">
        Abrimos um número limitado de provas de conceito de 10 dias. Você vê a
        automação funcionando no seu negócio antes de qualquer decisão.
      </p>
      <a
        href={WA_URL}
        className="mt-8 inline-flex items-center justify-center rounded-full bg-deep px-7 py-4 text-base font-semibold text-white shadow-sm transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep"
      >
        Quero participar
      </a>
    </section>
  );
}
