import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { How } from '@/components/landing/How';

describe('How', () => {
  it('exibe o heading "Simples de começar"', () => {
    render(<How />);
    expect(
      screen.getByRole('heading', {
        name: /simples de começar\. funciona sozinho/i,
      }),
    ).toBeInTheDocument();
  });

  it.each([
    ['Conversamos', /diagnóstico gratuito no whatsapp/i],
    ['Montamos sua automação', /regras e o tom do seu negócio/i],
    ['Você só vê o resultado', /atendimento roda 24h/i],
  ])('inclui o passo "%s"', (titulo, descricao) => {
    render(<How />);
    expect(screen.getByText(titulo)).toBeInTheDocument();
    expect(screen.getByText(descricao)).toBeInTheDocument();
  });

  it('numera os passos de 1 a 3', () => {
    render(<How />);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(3);
  });
});
