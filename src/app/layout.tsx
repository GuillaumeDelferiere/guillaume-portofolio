import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from './(components)/theme-provider';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Guillaume Delferiere - Portfolio',
  description: 'Étudiant en informatique et développeur web full-stack. Projets, compétences et contact.',
  openGraph: {
    title: 'Guillaume Delferiere - Portfolio',
    description: 'Étudiant en informatique et développeur web full-stack.',
    url: 'https://www.guillaume-delferiere.be/opengraph-image.png',
    siteName: 'Guillaume Delferiere Portfolio',
    images: [
      {
        url: '/opengraph-image.png', 
        width: 1200,
        height: 630,
        alt: 'Aperçu du portfolio de Guillaume Delferiere',
      },
    ],
    locale: 'fr_BE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guillaume Delferiere - Portfolio',
    description: 'Étudiant en informatique et développeur web full-stack.',
    images: ['/opengraph-image.png'], 
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning> 
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
