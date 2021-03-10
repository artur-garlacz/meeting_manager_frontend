import React, { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './globalStyles';
import { darkTheme, lightTheme } from './themes';
import { useDarkMode } from './useDarkMode';

interface IGlobalThemeProvider {
  children: ReactNode;
}

const GlobalThemeProvider: FC<IGlobalThemeProvider> = ({
  children,
}: IGlobalThemeProvider) => {
  const [theme, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        {children}
      </>
    </ThemeProvider>
  );
};

export default GlobalThemeProvider;
