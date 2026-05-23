import { AGENCY_NAME, AGENCY_ROLE, PORTAL_URL, WA_NUMBER } from '@/lib/config';

export function Footer() {
  const ano = new Date().getFullYear();
  return (
    <footer className="px-6 py-10 border-t border-border/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-3 md:gap-6 items-center justify-between text-sm text-ink/60">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand text-[10px] font-bold tracking-wider text-white">
            IL
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-semibold text-ink/80">{AGENCY_NAME}</span>
            <span className="text-[11px] text-ink/50">{AGENCY_ROLE}</span>
          </span>
        </div>
        <span>Bragança Paulista – SP</span>
        <span>WhatsApp: {WA_NUMBER}</span>
        <a href={PORTAL_URL} className="hover:text-ink transition">
          iflcosta.tech
        </a>
        <span>© {ano}</span>
      </div>
    </footer>
  );
}
