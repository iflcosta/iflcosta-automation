import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

const title = 'Iago Lopes | Tech & IA — Automação que atende no WhatsApp';
const description =
  'Sua empresa demora a responder e o cliente vai pro concorrente. Automação com IA que atende, qualifica e agenda em segundos, 24h por dia.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title: 'Iago Lopes | Tech & IA',
    description,
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iago Lopes | Tech & IA',
    description,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F4F2EC' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0e10' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
