import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  body: '#FFF',
  text: '#363537',
  primaryColor: '#212885',
  errorColor: '#fc4e03',
  greyColor: '#cccccc',
  toggleBorder: '#FFF',
  background: 'linear-gradient(#39598A, #79D7ED)',
  fontColor: {
    basicColor: '#363537',
    primaryColor: '#212885',
    errorColor: '#fc4e03',
    greyColor: '#cccccc',
    whiteColor: '#ffffff',
  },
};

export const darkTheme: DefaultTheme = {
  body: '#363537',
  text: '#FAFAFA',
  primaryColor: '#212885',
  errorColor: '#fc4e03',
  greyColor: '#cccccc',
  toggleBorder: '#6B8096',
  background: '#999',
  fontColor: {
    basicColor: '#363537',
    primaryColor: '#212885',
    errorColor: '#fc4e03',
    greyColor: '#cccccc',
    whiteColor: '#ffffff',
  },
};
