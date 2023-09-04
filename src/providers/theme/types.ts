export type ThemesType = 'dark' | 'light';
export interface IThemeContext {
  theme: ThemesType;
  setTheme: (theme: ThemesType) => void;
}
