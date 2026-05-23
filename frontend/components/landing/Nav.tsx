import { AGENCY_NAME, WA_URL } from '@/lib/config';

export function Nav() {
  return (
    <nav className="sticky top-0 z-10 backdrop-blur bg-bone/80 border-b border-ink/5">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-deep text-xs font-semibold text-white">
            IL
          </span>
          <span className="text-sm md:text-base font-semibold text-ink truncate">
            {AGENCY_NAME}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline text-xs text-ink/60">
            Bragança Paulista – SP
          </span>
          <a
            href={WA_URL}
            className="inline-flex items-center justify-center rounded-full bg-wagreen px-4 py-2 text-sm font-semibold text-ink transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}
