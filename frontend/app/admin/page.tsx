import { createSupabaseServerClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Admin · Iago Lopes | Tech & IA',
  robots: { index: false, follow: false },
};

export default async function AdminDashboardPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border/10 px-6 h-14 flex items-center justify-between bg-bg/80 backdrop-blur">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand text-[10px] font-bold tracking-wider text-white">
            IL
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-ink">Iago Lopes · admin</span>
            <span className="text-[11px] text-ink/55">Tech & IA</span>
          </span>
        </div>
        <form action="/admin/logout" method="POST" className="flex items-center gap-3">
          <span className="text-xs text-ink/60 hidden sm:inline">{user?.email}</span>
          <button
            type="submit"
            className="text-xs text-ink/60 hover:text-ink underline underline-offset-2"
          >
            Sair
          </button>
        </form>
      </header>

      <main className="flex-1 px-6 py-10 max-w-5xl mx-auto w-full">
        <h1 className="text-2xl md:text-3xl font-bold text-ink">Dashboard</h1>
        <p className="mt-2 text-sm text-ink/65">
          Painel operacional dos clientes do produto IA. Nenhum cliente ativo ainda.
        </p>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <Card label="Clientes ativos" value="0" />
          <Card label="Mensagens hoje" value="—" />
          <Card label="Tempo médio de resposta" value="—" />
        </section>

        <section className="mt-10 rounded-2xl bg-surface ring-1 ring-border/10 p-6">
          <h2 className="text-sm font-semibold text-ink">Próximos passos</h2>
          <ol className="mt-3 space-y-2 text-sm text-ink/70 list-decimal list-inside">
            <li>Fechar 1ª PoC com cliente (Programa Fundador).</li>
            <li>Modelar tabelas: clients, prompts, conversations.</li>
            <li>Construir revisor de conversas + editor de prompt versionado.</li>
            <li>Integrar leitura de métricas do Postgres do n8n.</li>
          </ol>
        </section>
      </main>
    </div>
  );
}

function Card({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-surface ring-1 ring-border/10 p-5">
      <div className="text-xs uppercase tracking-wider text-ink/50 font-semibold">
        {label}
      </div>
      <div className="mt-2 text-3xl font-bold text-ink">{value}</div>
    </div>
  );
}
