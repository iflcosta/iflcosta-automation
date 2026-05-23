import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Pain } from '@/components/landing/Pain';

describe('Pain', () => {
  it('exibe o heading sobre o custo de demorar', () => {
    render(<Pain />);
    expect(
      screen.getByRole('heading', {
        name: /cada minuto de espera é uma venda a menos/i,
      }),
    ).toBeInTheDocument();
  });

  it('explica o motivo da perda', () => {
    render(<Pain />);
    expect(
      screen.getByText(/o cliente manda mensagem e ninguém responde/i),
    ).toBeInTheDocument();
  });

  it.each([
    ['Resposta lenta', /o lead esfria em minutos/i],
    ['Fora do horário', /ninguém atende à noite/i],
    ['Equipe sobrecarregada', /mensagens importantes se perdem/i],
  ])('inclui o card "%s"', (titulo, descricao) => {
    render(<Pain />);
    expect(screen.getByText(titulo)).toBeInTheDocument();
    expect(screen.getByText(descricao)).toBeInTheDocument();
  });
});
