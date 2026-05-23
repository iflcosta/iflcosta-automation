import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

const description =
  'Sua empresa demora a responder e o cliente vai pro concorrente. Automação com IA que atende, qualifica e agenda em segundos, 24h por dia.';

export const metadata: Metadata = {
  title: 'Iago Lopes | Hardware & Tech — Automação que atende no WhatsApp',
  description,
  openGraph: {
    title: 'Iago Lopes | Hardware & Tech',
    description,
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iago Lopes | Hardware & Tech',
    description,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0F2A43',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
