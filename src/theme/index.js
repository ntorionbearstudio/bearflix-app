import {extendTheme} from 'native-base';

export const theme = extendTheme({
  colors: {
    // Add new color
    primary: {
      50: '#fff8db',
      100: '#ffebad',
      200: '#fedd7e',
      300: '#fdd04d',
      400: '#fcc21c',
      500: '#e3a903',
      600: '#b08300',
      700: '#7e5e00',
      800: '#4d3800',
      900: '#1c1300',
    },
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: 'dark',
  },
});
