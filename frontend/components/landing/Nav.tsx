import { AGENCY_NAME, WA_URL } from '@/lib/config';

export function Nav() {
  return (
    <nav className="sticky top-0 z-10 backdrop-blur bg-bone/80 border-b border-ink/5">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="text-sm md:text-base font-semibold text-ink">
          {AGENCY_NAME}
        </span>
        <a
          href={WA_URL}
          className="inline-flex items-center justify-center rounded-full bg-wagreen px-4 py-2 text-sm font-semibold text-ink transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep"
        >
          WhatsApp
        </a>
      </div>
    </nav>
  );
}
