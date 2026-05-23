import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Iago Lopes | Hardware & Tech — Automação que atende no WhatsApp',
  description:
    'Sua empresa demora a responder e o cliente vai pro concorrente. Automação com IA que atende, qualifica e agenda em segundos, 24h por dia.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
