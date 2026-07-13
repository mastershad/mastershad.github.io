import React from 'react';
import { useTheme } from '../theme/ThemeContext';

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4.5a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1.5a1 1 0 0 1-1 1Zm0 15a1 1 0 0 1 1 1V22a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1ZM4.5 12a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h1.5a1 1 0 0 1 1 1Zm18 0a1 1 0 0 1-1 1h-1.5a1 1 0 1 1 0-2H21.5a1 1 0 0 1 1 1ZM6.34 7.76a1 1 0 0 1-1.42 0L3.87 6.71A1 1 0 1 1 5.29 5.3L6.34 6.34a1 1 0 0 1 0 1.42Zm12.02 12.02a1 1 0 0 1-1.42 0l-1.05-1.05a1 1 0 1 1 1.42-1.42l1.05 1.05a1 1 0 0 1 0 1.42ZM6.34 16.24a1 1 0 0 1 0 1.42l-1.05 1.05a1 1 0 1 1-1.42-1.42l1.05-1.05a1 1 0 0 1 1.42 0Zm12.02-12.02a1 1 0 0 1 0 1.42L17.31 6.7A1 1 0 1 1 15.9 5.3l1.05-1.06a1 1 0 0 1 1.42 0ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.7 14.9a9 9 0 1 1-11.6-11.6.75.75 0 0 1 .97.94A7.5 7.5 0 0 0 19.76 13.9a.75.75 0 0 1 .94.97Z" />
    </svg>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

export default ThemeToggle;
