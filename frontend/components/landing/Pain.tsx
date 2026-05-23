const cards = [
  {
    titulo: 'Resposta lenta',
    descricao: 'O lead esfria em minutos.',
  },
  {
    titulo: 'Fora do horário',
    descricao: 'Ninguém atende à noite nem no fim de semana.',
  },
  {
    titulo: 'Equipe sobrecarregada',
    descricao: 'Mensagens importantes se perdem no volume.',
  },
];

export function Pain() {
  return (
    <section className="px-6 py-16 md:py-24 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center text-ink">
        Cada minuto de espera é uma venda a menos.
      </h2>
      <p className="mt-6 text-base md:text-lg text-ink/80 max-w-3xl mx-auto text-center">
        Quando o cliente manda mensagem e ninguém responde, ele não espera: vai
        para o concorrente. À noite, no fim de semana e nos horários de pico, o
        atendimento simplesmente para — e é exatamente aí que as oportunidades
        aparecem.
      </p>
      <ul className="mt-12 grid gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <li
            key={card.titulo}
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5"
          >
            <h3 className="text-lg font-semibold text-ink">{card.titulo}</h3>
            <p className="mt-2 text-sm text-ink/70">{card.descricao}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
