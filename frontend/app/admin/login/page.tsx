import { LoginForm } from './LoginForm';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Login · admin',
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-bg">
      <div className="w-full max-w-sm">
        <div className="flex items-center gap-3 justify-center mb-8">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-xs font-bold tracking-wider text-white">
            IL
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-base font-semibold text-ink">Iago Lopes</span>
            <span className="text-[11px] text-ink/55 font-medium">Tech & IA · admin</span>
          </span>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
