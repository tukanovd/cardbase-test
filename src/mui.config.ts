import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    text: {
      primary: '#15181E',
      secondary: '#878B95',
    },
    background: {},
  },
  typography: {
    button: {
      fontSize: '15px',
      lineHeight: '24px',
    },
    body1: {
      fontSize: '18px',
      lineHeight: '28px',
    },
    h3: {
      fontSize: '28px',
      lineHeight: '36px',
      fontWeight: 600,
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          borderRadius: '90px',
          border: '1px solid #EAEAEB',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          textAlign: 'center',
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        positionStart: {
          marginLeft: '30%',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        outlined: {
          border: '0px',
          borderRadius: '60px',
          backgroundColor: '#F2F2F2',
          color: '#15181E',
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#F2F2F2',
          color: '#15181E',
        },
        badge: {
          width: '22px',
          height: '22px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: '24px',
          border: '1px solid #EAEAEB',
        },
      },
    },
  },
});
