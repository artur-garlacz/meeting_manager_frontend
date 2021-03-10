/* eslint-disable no-unused-expressions */
import { useEffect, useState } from 'react';

type IThemeMode = 'light' | 'dark';

export const useDarkMode = () => {
  const [theme, setTheme] = useState<IThemeMode>('light');
  const [mountedComponent, setMountedComponent] = useState(false);
  const setMode = (mode: IThemeMode): void => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const themeToggler = (): void => {
    theme === 'light' ? setMode('dark') : setMode('light');
  };

  useEffect(() => {
    // const localTheme: null | string = window.localStorage.getItem('theme');
    // localTheme && localTheme !== null ? setTheme(localTheme) : setMode('light');
    setMountedComponent(true);
  }, []);

  return [theme, themeToggler, mountedComponent];
};
