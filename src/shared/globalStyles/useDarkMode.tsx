/* eslint-disable no-unused-expressions */
import { useEffect, useState } from 'react';

/*
  Custom hooks useDarkMode has created to manage dark/light mode inside app
*/

type IThemeMode = 'light' | 'dark';

export const useDarkMode = () => {
  const [theme, setTheme] = useState<IThemeMode>('light'); // thse type state
  const [mountedComponent, setMountedComponent] = useState(false);
  const setMode = (mode: IThemeMode): void => {
    // function changing themeMode
    setTheme(mode);
  };

  const themeToggler = (): void => {
    theme === 'light' ? setMode('dark') : setMode('light');
  };

  useEffect(() => {
    // initial mounting
    setMountedComponent(true);
  }, []);

  return [theme, themeToggler, mountedComponent];
};
