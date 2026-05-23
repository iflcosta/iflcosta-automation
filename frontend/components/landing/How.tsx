const steps = [
  {
    titulo: 'Conversamos',
    descricao:
      'Um diagnóstico gratuito no WhatsApp para entender onde sua empresa perde clientes.',
  },
  {
    titulo: 'Montamos sua automação',
    descricao:
      'Configuramos o agente de IA com as regras e o tom do seu negócio.',
  },
  {
    titulo: 'Você só vê o resultado',
    descricao:
      'O atendimento roda 24h; você acompanha as conversas e recebe os clientes já qualificados.',
  },
];

export function How() {
  return (
    <section className="px-6 py-16 md:py-24 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center text-ink">
        Simples de começar. Funciona sozinho.
      </h2>
      <ol className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((step, i) => (
          <li
            key={step.titulo}
            className="rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-border/10"
          >
            <span
              aria-hidden="true"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand text-base font-semibold text-white"
            >
              {i + 1}
            </span>
            <h3 className="mt-4 text-lg font-semibold text-ink">
              {step.titulo}
            </h3>
            <p className="mt-2 text-sm text-ink/70">{step.descricao}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
