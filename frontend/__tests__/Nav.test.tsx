import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Nav } from '@/components/landing/Nav';

describe('Nav', () => {
  it('mostra o branding da agência', () => {
    render(<Nav />);
    expect(screen.getByText(/iago lopes/i)).toBeInTheDocument();
  });

  it('tem CTA de WhatsApp', () => {
    render(<Nav />);
    const cta = screen.getByRole('link', { name: /whatsapp/i });
    expect(cta.getAttribute('href')).toMatch(/^https:\/\/wa\.me\/\d+/);
  });
});
