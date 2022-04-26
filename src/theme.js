import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#0d2ce4',
      light: 'rgba(75,98,222,0.94)',
      dark: '#04157d',
    },
    secondary: {
      main: '#f54500',
    },
    error: {
      main: '#ff0e02',
    },
    info: {
      main: '#40a3e8',
    },
    success: {
      main: '#6bec5a',
    },
    text: {
      primary: 'rgba(0,0,0,0.87)',
    },
  },
});

export default theme;
