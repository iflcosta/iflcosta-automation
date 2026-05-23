import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FinalCTA } from '@/components/landing/FinalCTA';

describe('FinalCTA', () => {
  it('exibe o heading provocativo', () => {
    render(<FinalCTA />);
    expect(
      screen.getByRole('heading', {
        name: /quantos clientes você vai perder até amanhã/i,
      }),
    ).toBeInTheDocument();
  });

  it('reforça o convite ao diagnóstico', () => {
    render(<FinalCTA />);
    expect(
      screen.getByText(/dinheiro na mesa/i),
    ).toBeInTheDocument();
  });

  it('CTA "Falar no WhatsApp agora" aponta para o WhatsApp', () => {
    render(<FinalCTA />);
    const cta = screen.getByRole('link', { name: /falar no whatsapp agora/i });
    expect(cta.getAttribute('href')).toMatch(/^https:\/\/wa\.me\/\d+/);
  });
});
