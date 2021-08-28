import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#3A57E8',
        },
    },
    typography: {
        fontFamily: ['-apple-system', 'BlinkMacSystemFont', 'Inter', 'sans-serif'].join(','),
        fontSize: 12,
        h1: {
            fontWeight: 700,
        },
        h2: {
            fontWeight: 600,
        },
        h4: {
            fontWeight: 600,
        },
    },
});
