import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/contexts/language-context';

const inter = Inter({ subsets: ['latin'] });

/**
 * ===========================================
 * CONFIGURAÇÃO DE SEO E METADATA
 * ===========================================
 */
export const metadata: Metadata = {
  title: 'Arthur | Data Analysis',
  description: 'Portfólio profissional de Arthur Vital - Analista de Dados especializado em Python, SQL, automações e visualização de dados.',
  keywords: ['analista de dados', 'data analyst', 'python', 'sql', 'pandas', 'automação', 'ETL', 'portfólio'],
  authors: [{ name: 'Arthur Vital' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: 'en_US',
    title: 'Arthur | Data Analysis',
    description: 'Portfólio profissional de Arthur Vital - Analista de Dados',
    siteName: 'Arthur Vital Portfolio',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arthur | Data Analysis',
    description: 'Portfólio profissional de Arthur Vital - Analista de Dados',
    images: ['/og-image.png'],
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>',
    shortcut: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>',
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
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
