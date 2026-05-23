import { AGENCY_NAME, WA_NUMBER } from '@/lib/config';

export function Footer() {
  const ano = new Date().getFullYear();
  return (
    <footer className="px-6 py-10 border-t border-ink/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-2 md:gap-6 items-center justify-between text-sm text-ink/60">
        <span className="font-medium text-ink/80">{AGENCY_NAME}</span>
        <span>Bragança Paulista – SP</span>
        <span>WhatsApp: {WA_NUMBER}</span>
        <span>© {ano}</span>
      </div>
    </footer>
  );
}
