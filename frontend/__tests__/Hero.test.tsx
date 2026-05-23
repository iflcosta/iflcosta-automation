import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from '@/components/landing/Hero';

describe('Hero', () => {
  it('exibe o H1 com a dor universal', () => {
    render(<Hero />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading.textContent).toMatch(/Pare de perder cliente.*no WhatsApp\./);
  });

  it('exibe a sub-headline com a promessa', () => {
    render(<Hero />);
    expect(
      screen.getByText(/Sua empresa demora a responder/i),
    ).toBeInTheDocument();
  });

  it('CTA primário aponta para o WhatsApp', () => {
    render(<Hero />);
    const cta = screen.getByRole('link', {
      name: /quero meu diagnóstico gratuito/i,
    });
    expect(cta.getAttribute('href')).toMatch(/^https:\/\/wa\.me\/\d+/);
  });

  it('mostra microcopy "sem formulário, sem compromisso"', () => {
    render(<Hero />);
    expect(
      screen.getByText(/sem formul[áa]rio, sem compromisso/i),
    ).toBeInTheDocument();
  });
});
