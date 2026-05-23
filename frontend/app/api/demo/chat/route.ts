import { NextResponse, type NextRequest } from 'next/server';
import { buildSantanaSystemPrompt } from '@/lib/demo/system-prompt';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';
const MODEL = 'llama-3.3-70b-versatile';
const MAX_MESSAGES = 30;
const MAX_MESSAGE_CHARS = 800;
const MAX_TOKENS = 350;

type ChatMessage = { role: 'user' | 'assistant'; content: string };

export async function POST(req: NextRequest) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: 'Demo temporariamente indisponível.' },
      { status: 503 },
    );
  }

  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: 'JSON inválido.' }, { status: 400 });
  }

  const messages = (payload as { messages?: unknown })?.messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json(
      { error: 'Campo "messages" obrigatório.' },
      { status: 400 },
    );
  }
  if (messages.length > MAX_MESSAGES) {
    return NextResponse.json(
      { error: 'Conversa muito longa. Recarrega a página pra começar de novo.' },
      { status: 400 },
    );
  }

  const cleaned: ChatMessage[] = [];
  for (const raw of messages) {
    const m = raw as Partial<ChatMessage>;
    if (
      (m.role !== 'user' && m.role !== 'assistant') ||
      typeof m.content !== 'string'
    ) {
      return NextResponse.json(
        { error: 'Mensagem em formato inválido.' },
        { status: 400 },
      );
    }
    if (m.content.length === 0 || m.content.length > MAX_MESSAGE_CHARS) {
      return NextResponse.json(
        { error: 'Mensagem vazia ou muito longa.' },
        { status: 400 },
      );
    }
    cleaned.push({ role: m.role, content: m.content });
  }

  let groqRes: Response;
  try {
    groqRes = await fetch(GROQ_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: 'system', content: buildSantanaSystemPrompt() },
          ...cleaned,
        ],
        max_tokens: MAX_TOKENS,
        temperature: 0.7,
      }),
    });
  } catch (err) {
    console.error('[demo] erro de rede ao chamar Groq:', err);
    return NextResponse.json(
      { error: 'Falha ao conectar no provedor. Tenta de novo em alguns segundos.' },
      { status: 502 },
    );
  }

  if (!groqRes.ok) {
    const text = await groqRes.text().catch(() => '');
    console.error('[demo] Groq devolveu', groqRes.status, text.slice(0, 500));
    if (groqRes.status === 429) {
      return NextResponse.json(
        { error: 'Demo recebendo muitas mensagens agora. Tenta em 1 minuto.' },
        { status: 429 },
      );
    }
    return NextResponse.json(
      { error: 'O agente está indisponível agora.' },
      { status: 502 },
    );
  }

  const data = (await groqRes.json()) as {
    choices?: { message?: { content?: string } }[];
  };
  const reply = data.choices?.[0]?.message?.content?.trim();
  if (!reply) {
    return NextResponse.json(
      { error: 'Resposta vazia do agente.' },
      { status: 502 },
    );
  }

  return NextResponse.json({ reply });
}
