import React from 'react';
import type { AppProps } from 'next/app';
import Head from '../src/components/Head/Head';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import '@material-ui/core/styles';

declare module '@mui/system/createTheme/createBreakpoints' {
  interface BreakpointOverrides {
    xxs: true; // adds the `xxs` breakpoint
  }
}

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    custom_white: PaletteOptions['primary'];
    custom_grey_white: PaletteOptions['primary'];
    custom_yellow: PaletteOptions['primary'];
    custom_grey: PaletteOptions['primary'];
    custom_orange: PaletteOptions['primary'];
    custom_brown: PaletteOptions['primary'];
    custom_summary_bg_color: PaletteOptions['primary'];
  }
  interface PaletteOptions {
    custom_white: PaletteColorOptions;
    custom_grey_white: PaletteColorOptions;
    custom_yellow: PaletteColorOptions;
    custom_grey: any;
    custom_orange: PaletteColorOptions;
    custom_brown: PaletteColorOptions;
    custom_summary_bg_color: PaletteColorOptions;
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0,
      xs: 320,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    custom_white: { main: '#fff' },
    custom_grey_white: { main: '#fafafa' },
    custom_yellow: { main: 'rgba(246, 182, 0, 1)' },
    custom_orange: { main: 'rgba(233, 102, 2, 1)' },
    custom_brown: { main: 'rgba(138, 59, 6, 1)' },
    custom_summary_bg_color: { main: '#bd851a' },
    custom_grey: (transparency: any) => {
      const alpha = transparency ? transparency : 1;
      return { main: `rgb(85, 85, 85, ${alpha})` };
    },
  },
  typography: {
    fontFamily: 'Quicksand',
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
