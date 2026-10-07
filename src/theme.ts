import { createTheme } from '@mui/material/styles';

/** Exact brand colors from /workspace/ikshana-assets/brand-notes.md */
export const brandColors = {
  primary: '#E82464',
  primaryDark: '#B50E46',
  primaryLight: '#F93575',
  secondary: '#FFD416',
  secondaryAlt: '#FCCF2E',
  coral: '#DE866A',
  hotPink: '#E30653',
  blush: '#EAE1E6',
  cream: '#FBF2D3',
  white: '#FFFFFF',
  text: '#39272F',
  textMuted: '#492F3F',
  navy: '#0F233B',
} as const;

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: brandColors.primary,
      dark: brandColors.primaryDark,
      light: brandColors.primaryLight,
      contrastText: brandColors.white,
    },
    secondary: {
      main: brandColors.secondary,
      dark: '#E0B800',
      light: brandColors.secondaryAlt,
      contrastText: brandColors.navy,
    },
    background: {
      default: brandColors.white,
      paper: brandColors.white,
    },
    text: {
      primary: brandColors.text,
      secondary: brandColors.textMuted,
    },
  },
  typography: {
    fontFamily: '"Poppins", "Montserrat", "Segoe UI", Roboto, Arial, sans-serif',
    h1: { fontWeight: 700, letterSpacing: '-0.02em' },
    h2: { fontWeight: 700, letterSpacing: '-0.01em' },
    h3: { fontWeight: 650 },
    h4: { fontWeight: 650 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 28,
          paddingInline: 24,
          paddingBlock: 10,
          minHeight: 44,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 14px rgba(232, 36, 100, 0.28)',
          },
        },
        sizeLarge: {
          minHeight: 48,
          paddingBlock: 12,
          paddingInline: 28,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          minWidth: 44,
          minHeight: 44,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          minHeight: 48,
          paddingTop: 12,
          paddingBottom: 12,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 24px rgba(15, 35, 59, 0.08)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { boxShadow: '0 1px 0 rgba(15, 35, 59, 0.08)' },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 16,
          paddingRight: 16,
          '@media (min-width:600px)': {
            paddingLeft: 24,
            paddingRight: 24,
          },
        },
      },
    },
  },
});

export default theme;
