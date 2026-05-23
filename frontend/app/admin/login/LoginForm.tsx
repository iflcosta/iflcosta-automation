'use client';

import { useState, useTransition } from 'react';
import { signin } from './actions';

export function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleSubmit(formData: FormData) {
    setError(null);
    startTransition(async () => {
      const result = await signin(formData);
      if (result?.error) setError(result.error);
    });
  }

  return (
    <form action={handleSubmit} className="rounded-2xl bg-surface ring-1 ring-border/10 p-6 space-y-4">
      <div>
        <label htmlFor="email" className="block text-xs font-semibold text-ink/70 uppercase tracking-wider">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1.5 w-full rounded-lg bg-bg ring-1 ring-border/10 px-3 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-brand"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-xs font-semibold text-ink/70 uppercase tracking-wider">
          Senha
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          className="mt-1.5 w-full rounded-lg bg-bg ring-1 ring-border/10 px-3 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-brand"
        />
      </div>

      {error && (
        <div className="rounded-lg bg-red-500/10 ring-1 ring-red-500/30 px-3 py-2 text-sm text-red-600 dark:text-red-300">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-full bg-brand text-white font-semibold py-2.5 text-sm transition hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isPending ? 'Entrando…' : 'Entrar'}
      </button>
    </form>
  );
}
