export default function Footer() {
  return (
    <footer className="container py-8 text-sm text-gray-500 dark:text-gray-400">
      <div className="flex flex-col items-start gap-3 md:flex-row md:justify-between md:items-center">
        <p>© {new Date().getFullYear()} Guillaume Delferiere. Tous droits réservés.</p>
        <p className="kicker">Fait avec Next.js, Tailwind et Framer Motion</p>
      </div>
    </footer>
  );
}