import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from './(components)/theme-provider';

export const metadata: Metadata = {
  title: 'Guillaume Delferiere - Portfolio',
  description: 'Étudiant en informatique et développeur web full-stack. Projets, compétences et contact.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning> { /* 👈 Ajout de suppressHydrationWarning */ }
      <body>
        {/* 👇 Entourer {children} avec le Provider */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
