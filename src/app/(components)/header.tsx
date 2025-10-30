import Link from 'next/link';
import ThemeToggle from './theme-toggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-white/60 dark:bg-black/40 border-b border-transparent dark:border-neutral-800">
      <nav className="container flex items-center justify-between py-3">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-lg font-semibold">Guillaume</Link>
          <span className="kicker hidden md:inline">Étudiant en informatique</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#skills" className="text-sm text-muted-foreground hover:underline">Compétences</Link>
          <Link href="#projects" className="text-sm text-muted-foreground hover:underline">Projets</Link>
          <Link href="#contact" className="text-sm text-muted-foreground hover:underline">Contact</Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
