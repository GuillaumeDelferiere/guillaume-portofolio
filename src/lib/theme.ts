export const getInitialTheme = (): "light" | "dark" => {
    if (typeof window !== "undefined") return 'light';
    const stored = window.localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') return stored as 'dark' | 'light';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
};

export const applyTheme = (theme: 'light' | 'dark') => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    window.localStorage.setItem('theme', theme);
};