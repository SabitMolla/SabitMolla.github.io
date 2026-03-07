import { useState, useEffect } from 'react';

/**
 * Custom hook for managing dark/light theme.
 * Persists user preference in localStorage.
 * Falls back to system preference on first visit.
 */
export default function useTheme() {
    const [isDark, setIsDark] = useState(() => {
        // Check localStorage first
        const saved = localStorage.getItem('theme');
        if (saved) return saved === 'dark';
        // Fall back to system preference
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    const toggleTheme = () => setIsDark(prev => !prev);

    return { isDark, toggleTheme };
}
