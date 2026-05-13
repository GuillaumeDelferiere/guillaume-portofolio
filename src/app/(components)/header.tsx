"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; 
import  ThemeToggle  from './theme-toggle'; 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  
  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Projets', href: '/#projects' },
    { name: 'Portfolio EPHEC', href: '/ephec' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between h-14">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-lg font-bold tracking-tight">
            Guillaume Delferiere
          </Link>
        </div>

        {/* 1. Navigation Desktop (Cachée sur mobile, visible à partir de 'md') */}
        <nav className="items-center hidden gap-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* 2. Boutons Mobile (Visibles uniquement sur mobile) */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-foreground/60 hover:bg-accent hover:text-accent-foreground focus:outline-none"
            aria-label="Ouvrir le menu"
          >
            {/* On alterne entre l'icône X (fermer) et Menu (hamburger) */}
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 3. Dropdown Menu Mobile (S'affiche si isOpen est true) */}
      {isOpen && (
        <div className="border-b md:hidden bg-background">
          <nav className="container flex flex-col items-start gap-4 py-4 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)} 
                className="w-full py-2 transition-colors text-foreground/60 hover:text-foreground/80"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}