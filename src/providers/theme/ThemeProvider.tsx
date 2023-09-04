import { createContext, FC, ReactNode, useState } from 'react';
import { IThemeContext, ThemesType } from './types.ts';

export const ThemeContext = createContext<IThemeContext>({
  theme: 'dark',
  setTheme: () => {},
});

interface IThemeProvider {
  children: ReactNode;
}

export const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  const [theme, setTheme] = useState<ThemesType>('dark');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
