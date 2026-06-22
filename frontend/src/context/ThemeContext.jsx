import { createContext, useContext, useState, useEffect } from 'react';

/**
 * ThemeContext
 * Provides dark/light mode state and toggle functionality.
 * Reads initial theme from localStorage, falls back to system preference.
 * Persists user choice to localStorage and toggles `.dark` class on <html>.
 */
const ThemeContext = createContext(undefined);

/**
 * Determines the initial theme.
 * Priority: localStorage > system preference > 'light'
 * @returns {'light' | 'dark'}
 */
function getInitialTheme() {
  if (typeof window === 'undefined') return 'light';

  const stored = localStorage.getItem('theme');
  if (stored === 'dark' || stored === 'light') return stored;

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

/**
 * ThemeProvider component
 * Wraps the app and provides theme context.
 * @param {{ children: React.ReactNode }} props
 */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * useTheme hook
 * @returns {{ theme: 'light' | 'dark', toggleTheme: () => void }}
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
