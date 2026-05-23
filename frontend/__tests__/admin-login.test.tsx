import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LoginForm } from '@/app/admin/login/LoginForm';

vi.mock('@/app/admin/login/actions', () => ({
  signin: vi.fn(async () => ({ error: null })),
}));

describe('LoginForm', () => {
  it('renderiza inputs de email e senha', () => {
    render(<LoginForm />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();
  });

  it('botão de submit começa habilitado', () => {
    render(<LoginForm />);
    const button = screen.getByRole('button', { name: /entrar/i });
    expect(button).toBeEnabled();
  });
});
