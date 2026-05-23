import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from '@/components/landing/Footer';

describe('Footer', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-08-15T12:00:00Z'));
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it('mostra o nome da agência', () => {
    render(<Footer />);
    expect(screen.getByText(/iago lopes/i)).toBeInTheDocument();
  });

  it('mostra a localização', () => {
    render(<Footer />);
    expect(screen.getByText(/bragança paulista/i)).toBeInTheDocument();
  });

  it('mostra o ano corrente', () => {
    render(<Footer />);
    expect(screen.getByText(/2026/)).toBeInTheDocument();
  });
});
