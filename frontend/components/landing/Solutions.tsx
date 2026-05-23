const cards = [
  {
    titulo: 'Imobiliárias — Recuperador de Leads',
    descricao:
      'Leads do ZAP e da OLX respondidos e qualificados na hora, antes de esfriarem.',
  },
  {
    titulo: 'Clínicas — Gestor de Presença',
    descricao:
      'Confirmação e reagendamento automáticos de consultas. Menos cadeira vazia, menos faltas.',
  },
  {
    titulo: 'Comércio e e-commerce — Recuperador de Carrinho',
    descricao:
      'Quem abandonou a compra recebe um empurrão na hora certa.',
  },
  {
    titulo: 'Outras PMEs — Atendimento sob medida',
    descricao:
      'Orçamentos, dúvidas e agendamentos respondidos automaticamente, com a linguagem do seu negócio.',
  },
];

export function Solutions() {
  return (
    <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center text-ink">
        Uma solução para a realidade do seu negócio.
      </h2>
      <ul className="mt-12 grid gap-6 md:grid-cols-2">
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
