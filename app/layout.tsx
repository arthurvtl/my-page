import type { Metadata, Viewport } from 'next';
import { Fraunces, Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/contexts/language-context';

/**
 * Tipografia — serifa com caráter para títulos, grotesca limpa para corpo,
 * mono para labels e metadados (números tabulares).
 */
const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
});

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-hanken',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FCFCFD',
};

export const metadata: Metadata = {
  title: 'Arthur Vital — Analista de Dados',
  description:
    'Arthur Vital, Analista de Dados. Análise, automação e pipelines de ETL com Python e SQL — do dado bruto ao painel que orienta a decisão.',
  keywords: [
    'analista de dados',
    'data analyst',
    'python',
    'sql',
    'pandas',
    'automação',
    'ETL',
    'portfólio',
  ],
  authors: [{ name: 'Arthur Vital' }],
  metadataBase: new URL('https://arthurvtl.github.io/my-page'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: 'en_US',
    title: 'Arthur Vital — Analista de Dados',
    description:
      'Análise, automação e pipelines de ETL com Python e SQL — do dado bruto à decisão.',
    siteName: 'Arthur Vital',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arthur Vital — Analista de Dados',
    description:
      'Análise, automação e pipelines de ETL com Python e SQL — do dado bruto à decisão.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${fraunces.variable} ${hanken.variable} ${jetbrains.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://linkedin.com" />
      </head>
      <body className="font-sans antialiased bg-paper text-ink">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
