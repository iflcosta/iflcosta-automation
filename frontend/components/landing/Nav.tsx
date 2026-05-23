import { AGENCY_NAME, AGENCY_ROLE, WA_URL, HARDWARE_URL } from '@/lib/config';

export function Nav() {
  return (
    <nav className="sticky top-0 z-10 backdrop-blur bg-bg/80 border-b border-border/10">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand text-xs font-bold tracking-wider text-white">
            IL
          </span>
          <span className="flex flex-col leading-tight min-w-0">
            <span className="text-sm font-semibold text-ink truncate">{AGENCY_NAME}</span>
            <span className="text-[11px] font-medium text-ink/60 truncate">{AGENCY_ROLE}</span>
          </span>
        </div>
        <div className="flex items-center gap-3 md:gap-5">
          <a
            href={HARDWARE_URL}
            className="hidden md:inline text-xs text-ink/60 hover:text-ink transition"
          >
            ← outras frentes
          </a>
          <a
            href={WA_URL}
            className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-ink transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}
