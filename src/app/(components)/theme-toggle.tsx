'use client';

import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button'; // 👈 Utiliser le bouton shadcn

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button
      variant="ghost" // 👈 Utiliser les variantes shadcn
      size="icon"     // 👈
      aria-label="Basculer le thème"
      onClick={toggle}
    >
      {theme === 'light' ? '🌞' : '🌜'}
    </Button>
  );
}