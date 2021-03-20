import 'styled-components';

// Custom style theme interface
declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    text: string;
    primaryColor: string;
    errorColor: string;
    greyColor: string;
    toggleBorder: string;
    background: string;
    fontColor: {
      basicColor: string;
      primaryColor: string;
      errorColor: string;
      greyColor: string;
      whiteColor: string;
    };
  }
}
