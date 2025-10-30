export default function Footer() {
  return (
    <footer className="container py-8 text-sm text-gray-500 dark:text-gray-400">
      <div className="flex flex-col gap-3 md:flex-row md:justify-between items-start md:items-center">
        <p>© {new Date().getFullYear()} Guillaume. Tous droits réservés.</p>
        <p className="kicker">Fait avec Next.js, Tailwind et Framer Motion</p>
      </div>
    </footer>
  );
}
