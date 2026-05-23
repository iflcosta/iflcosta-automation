import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ChatDemo } from '@/app/demo/ChatDemo';

beforeEach(() => {
  vi.restoreAllMocks();
  Element.prototype.scrollTo = vi.fn();
  global.fetch = vi.fn(async () =>
    new Response(JSON.stringify({ reply: 'Ok, conferindo.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }),
  );
});

describe('ChatDemo', () => {
  it('renderiza com a mensagem inicial do agente', () => {
    render(<ChatDemo />);
    expect(
      screen.getByText(/atendimento da imobiliária sant'ana/i),
    ).toBeInTheDocument();
  });

  it('input e botão começam habilitados; botão fica disabled quando input vazio', () => {
    render(<ChatDemo />);
    const input = screen.getByLabelText(/mensagem/i);
    const button = screen.getByRole('button', { name: /enviar/i });
    expect(input).toBeEnabled();
    expect(button).toBeDisabled();
  });

  it('envia mensagem e exibe resposta do agente', async () => {
    const user = userEvent.setup();
    render(<ChatDemo />);
    const input = screen.getByLabelText(/mensagem/i);
    await user.type(input, 'Procuro 2 quartos no Centro');
    await user.click(screen.getByRole('button', { name: /enviar/i }));
    expect(
      await screen.findByText(/procuro 2 quartos no centro/i),
    ).toBeInTheDocument();
    expect(await screen.findByText(/ok, conferindo/i)).toBeInTheDocument();
  });

  it('mostra mensagem de erro quando a API falha', async () => {
    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce(
      new Response(JSON.stringify({ error: 'Demo recebendo muitas mensagens.' }), {
        status: 429,
        headers: { 'Content-Type': 'application/json' },
      }),
    );
    const user = userEvent.setup();
    render(<ChatDemo />);
    await user.type(screen.getByLabelText(/mensagem/i), 'oi');
    await user.click(screen.getByRole('button', { name: /enviar/i }));
    expect(
      await screen.findByText(/recebendo muitas mensagens/i),
    ).toBeInTheDocument();
  });
});
