import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Guillaume Delferiere - Portfolio',
  description: 'Étudiant en informatique et développeur web full-stack. Projets, compétences et contact.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100">
        {children}
      </body>
    </html>
  );
}
