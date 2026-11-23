'use client';

import React, { useSyncExternalStore } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
}

function subscribe() {
  return () => {};
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme placeholder"
        className={`w-10 h-10 rounded-full border border-neutral-800 bg-neutral-900/60 flex items-center justify-center text-neutral-400 ${className}`}
      >
        <Moon className="w-4 h-4" />
      </button>
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative inline-flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 cursor-pointer ${
        isDark
          ? 'bg-neutral-900/80 border-neutral-800 text-amber-300 hover:bg-neutral-800 hover:border-neutral-700 hover:text-amber-200 shadow-sm'
          : 'bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-100 hover:text-neutral-950 shadow-sm'
      } ${className}`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 transition-transform duration-300 -rotate-12 hover:rotate-0" />
      )}
    </button>
  );
};
