'use client';

import { useEffect, useState } from 'react';

const getInitialTheme = (): 'light' | 'dark' => {
  if (typeof window === 'undefined') return 'light';
  const stored = localStorage.getItem('theme');
  if (stored === 'dark' || stored === 'light') return stored;
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const applyTheme = (t: 'light' | 'dark') => {
  if (t === 'dark') document.documentElement.classList.add('dark');
  else document.documentElement.classList.remove('dark');
  localStorage.setItem('theme', t);
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => getInitialTheme());

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggle = () => setTheme((s) => (s === 'light' ? 'dark' : 'light'));

  return (
    <button
      aria-label="Basculer le thème"
      onClick={toggle}
      className="rounded-md border px-3 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {theme === 'light' ? '🌞' : '🌜'}
    </button>
  );
}
