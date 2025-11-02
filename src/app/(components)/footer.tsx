// src/app/(components)/footer.tsx

import Link from "next/link";
import { Github, Instagram } from "lucide-react"; // 1. Importer les icônes
import { Button } from "@/components/ui/button";

// 2. Récupérer les mêmes URLs que dans votre page contact
const githubUrl = "https://github.com/GuillaumeDelferiere";
const instagramUrl = "https://www.instagram.com/guillaumedelferiere/";

export default function Footer() {
  return (
    <footer className="container py-8 text-sm text-gray-500 border-t dark:text-gray-400">
      <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p>© {new Date().getFullYear()} Guillaume Delferiere. Tous droits réservés.</p>
          <p className="kicker">Fait avec Next.js, Tailwind et Framer Motion</p>
        </div>
        
        {/* 3. Ajouter les icônes sociales */}
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="icon" aria-label="GitHub">
            <Link href={githubUrl} target="_blank" rel="noreferrer">
              <Github className="size-5" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" aria-label="Instagram">
            <Link href={instagramUrl} target="_blank" rel="noreferrer">
              <Instagram className="size-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}