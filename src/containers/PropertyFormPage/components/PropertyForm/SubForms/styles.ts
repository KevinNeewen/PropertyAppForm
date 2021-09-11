import { createStyles } from '@material-ui/core';

const styles = (): any =>
    createStyles({
        root: {
            height: '100vh',
        },
        subForm: {
            paddingTop: '6rem',
        },
        subFormDetails: {
            marginBottom: '3rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '45vh',
            border: 'none',
            marginTop: '5rem',
        },
        buttons: {
            '& button': {
                marginRight: '2rem',
            },
        },
    });

export default styles;
