import { createStyles, Theme } from '@material-ui/core';

const styles = (theme: Theme) =>
    createStyles({
        root: {},
        form: {
            height: '35rem',
            width: '60rem',
            marginTop: '3rem',
            border: '1px solid black',
            backgroundColor: theme.palette.background.default,
        },
    });

export default styles;
