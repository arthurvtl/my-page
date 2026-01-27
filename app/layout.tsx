import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/contexts/language-context';

// Fonte otimizada - carrega apenas pesos necessários
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Mostra texto imediatamente, troca fonte depois
  preload: true,
  variable: '--font-inter',
});

/**
 * Viewport configuration para mobile
 */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0a0f14',
};

/**
 * SEO e Metadata
 */
export const metadata: Metadata = {
  title: 'Arthur | Data Analysis',
  description: 'Portfólio profissional de Arthur Vital - Analista de Dados especializado em Python, SQL, automações e visualização de dados.',
  keywords: ['analista de dados', 'data analyst', 'python', 'sql', 'pandas', 'automação', 'ETL', 'portfólio'],
  authors: [{ name: 'Arthur Vital' }],
  metadataBase: new URL('https://arthurvtl.github.io/my-page'),
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
    <html lang="pt-BR" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* Preconnect para carregar fontes mais rápido */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch para GitHub */}
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://linkedin.com" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
