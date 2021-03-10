import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    text: string;
    primaryColor: string;
    toggleBorder: string;
    background: string;
  }
}
