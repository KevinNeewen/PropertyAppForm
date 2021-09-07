import { createStyles, Theme } from '@material-ui/core';

const styles = (theme: Theme): any =>
    createStyles({
        root: {
            height: '100vh',
        },
        subForm: {
            paddingTop: '12rem',
        },
        subFormDetails: {
            height: '40rem',
            width: '60%',
            border: '2px solid black',
            backgroundColor: theme.palette.background.default,
        },
    });

export default styles;
