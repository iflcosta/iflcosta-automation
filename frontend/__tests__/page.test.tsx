import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Page from '@/app/page';

describe('Página da landing (integração)', () => {
  it('tem exatamente um H1 (o do Hero)', () => {
    render(<Page />);
    const h1s = screen.getAllByRole('heading', { level: 1 });
    expect(h1s).toHaveLength(1);
    expect(h1s[0].textContent).toMatch(/pare de perder cliente/i);
  });

  it('renderiza todas as seções principais do brief', () => {
    render(<Page />);
    expect(
      screen.getByRole('heading', { name: /cada minuto de espera/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /uma solução para a realidade/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /simples de começar/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /estamos selecionando as primeiras empresas/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /quantos clientes você vai perder/i,
      }),
    ).toBeInTheDocument();
  });

  it('todos os CTAs apontam para o mesmo número de WhatsApp', () => {
    render(<Page />);
    const links = screen
      .getAllByRole('link')
      .filter((a) => (a.getAttribute('href') ?? '').startsWith('https://wa.me/'));
    expect(links.length).toBeGreaterThanOrEqual(4);
    const numeros = new Set(
      links.map((a) => a.getAttribute('href')?.split('/').pop()),
    );
    expect(numeros.size).toBe(1);
  });
});
