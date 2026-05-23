import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Solutions } from '@/components/landing/Solutions';

describe('Solutions', () => {
  it('exibe o heading do bloco', () => {
    render(<Solutions />);
    expect(
      screen.getByRole('heading', {
        name: /uma solução para a realidade do seu negócio/i,
      }),
    ).toBeInTheDocument();
  });

  it.each([
    ['Imobiliárias — Recuperador de Leads', /leads do zap e da olx/i],
    ['Clínicas — Gestor de Presença', /confirmação e reagendamento/i],
    [
      'Comércio e e-commerce — Recuperador de Carrinho',
      /quem abandonou a compra/i,
    ],
    ['Outras PMEs — Atendimento sob medida', /linguagem do seu negócio/i],
  ])('inclui o card "%s"', (titulo, descricao) => {
    render(<Solutions />);
    expect(screen.getByText(titulo)).toBeInTheDocument();
    expect(screen.getByText(descricao)).toBeInTheDocument();
  });
});
