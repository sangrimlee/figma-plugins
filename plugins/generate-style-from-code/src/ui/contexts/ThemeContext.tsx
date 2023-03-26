import { createContext, useContext, useLayoutEffect, useMemo } from 'react';

interface ThemeContextValue {
  isDarkMode: boolean;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error();
  }
  return context;
};

const getIsDarkMode = () => document.documentElement.classList.contains('figma-dark');

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const contextValue = useMemo(() => ({ isDarkMode: getIsDarkMode() }), []);

  useLayoutEffect(() => {
    if (getIsDarkMode()) {
      document.documentElement.style.colorScheme = 'dark';
    }
  }, []);

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};
