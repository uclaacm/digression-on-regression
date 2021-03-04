import React from 'react';
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const overwrittenTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: '#AC6BFF',
        light: '#BD8AFF',
        dark: '#9645FF',
        contrastText: '#fff',
      },
      secondary: {
        main: '#FFC32F',
        light: '#FFC942',
        dark: '#FFBF20',
        contrastText: '#fff',
      },
    },
    typography: {
      useNextVariants: true,
      fontSize: 16,
      fontFamily: '"Rubik", sans-serif',
    },
  }),
);

const Theme = ({ children }) => (
  <ThemeProvider theme={overwrittenTheme}>
    <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap" rel="stylesheet" />
    <main>{children}</main>
  </ThemeProvider>
);

export default Theme;
