import { createTheme, type ThemeOptions } from '@mui/material/styles';
const themeOptions: ThemeOptions = {
    palette: {
        primary: {
            main: '#3c8a22'
        },
        secondary: {
            main: '#25efd7'
        },
        background: {
            default: '#181019',
            paper: '#181019'
        },
        mode: 'dark'
    },
};

const theme = createTheme(themeOptions);
export default theme;