import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from './(components)/theme-provider';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Guillaume Delferiere - Portfolio',
  description: 'Étudiant en informatique et développeur web full-stack. Projets, compétences et contact.',
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
