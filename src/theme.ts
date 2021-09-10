import { createTheme } from '@material-ui/core/styles';
import createPalette from '@material-ui/core/styles/createPalette';

const colors = {
    MAIN_BLUE: '#3A57E8',
    LIGHT_BLUE: '#C4CCF8',
    DARK_BLUE: '#232D42',
    BACKGROUND_COLOR: '#F5F6FA',
    GREEN: '#1AA053',
};

declare module '@material-ui/core/styles/createPalette' {
    interface Palette {
        colors: any;
    }
    interface PaletteOptions {
        colors: any;
    }
}

export const theme = createTheme({
    palette: createPalette({
        primary: {
            main: colors.MAIN_BLUE,
            light: colors.LIGHT_BLUE,
        },
        colors: {
            darkBlue: colors.DARK_BLUE,
            green: colors.GREEN,
        },
        background: {
            default: colors.BACKGROUND_COLOR,
        },
    }),
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
