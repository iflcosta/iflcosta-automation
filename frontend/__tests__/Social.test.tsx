import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Social } from '@/components/landing/Social';

describe('Social — Programa Fundador (estado vazio honesto)', () => {
  it('apresenta o heading do Programa Fundador', () => {
    render(<Social />);
    expect(
      screen.getByRole('heading', {
        name: /estamos selecionando as primeiras empresas de bragança/i,
      }),
    ).toBeInTheDocument();
  });

  it('descreve a prova de conceito de 10 dias', () => {
    render(<Social />);
    expect(
      screen.getByText(/provas de conceito de 10 dias/i),
    ).toBeInTheDocument();
  });

  it('CTA "Quero participar" aponta para o WhatsApp', () => {
    render(<Social />);
    const cta = screen.getByRole('link', { name: /quero participar/i });
    expect(cta.getAttribute('href')).toMatch(/^https:\/\/wa\.me\/\d+/);
  });
});
