import { createTheme } from '@material-ui/core/styles';
import createPalette from '@material-ui/core/styles/createPalette';

const colors = {
    MAIN_BLUE: '#3A57E8',
    LIGHT_BLUE: '#C4CCF8',
    DARK_BLUE: '#232D42',
    BACKGROUND_COLOR: '#F5F6FA',
    GREEN: '#1AA053',
    LIGHT_GRAY: '#EEEEEE',
    DARK_GRAY: '#8A92A6',
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
            lightGray: colors.LIGHT_GRAY,
            darkGray: colors.DARK_GRAY,
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
    overrides: {
        MuiInputLabel: {
            root: {},
            formControl: {
                top: '-40px',
                left: '-14px',
            },
        },
        MuiFormLabel: {
            root: {
                fontWeight: 400,
                fontSize: '1.3rem',
                lineHeight: '1.5rem',
            },
        },
        MuiOutlinedInput: {
            root: {
                marginTop: '.5rem',
            },
            input: {
                // border: '1px solid transp',
                borderRadius: '.33rem',
                padding: '1rem',
            },
            notchedOutline: {
                borderColor: '#EEEEEE',
            },
            adornedStart: {
                paddingLeft: 0,
            },
            adornedEnd: {
                paddingRight: 0,
                marginRight: 0,
            },
        },
        MuiInputBase: {
            root: {
                backgroundColor: 'white',
                fontSize: '1.2rem',
            },
        },
        MuiMenuItem: {
            root: {
                fontSize: '14px',
            },
        },
        MuiFormHelperText: {
            root: {
                fontSize: '10px',
            },
        },
    },
});
