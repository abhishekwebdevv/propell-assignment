import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(85, 22, 170)',
      light: 'rgb(85, 22, 170, 0.1)',
    },
    secondary: {
      main: 'rgb(65, 192, 210)',
      light: 'rgb(65, 192, 210, 0.1)',
    },
    error: {
      main: 'rgb(242, 114, 117)',
      light: 'rgb(242, 114, 117, 0.1)',
    },
    grey: {
      main: 'rgb(129, 129, 165)',
      light: 'rgb(129, 129, 165, 0.1)',
    },
  },
  typography: {
    fontFamily: "'League Spartan', sans-serif",
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '1.2rem',
    },
    subtitle1: {
      fontSize: '0.9rem',
    },
    subtitle2: {
      fontSize: '0.8rem',
    },
    h4: {
      fontSize: '1.9rem',
    },
    h5: {
      fontSize: '1.6rem',
    },
    fontWeightBold: 700,
    fontWeightMedium: 600,
    fontWeightRegular: 400,
  },
  shape: {
    borderRadius: '8px',
  },
})

export default theme
