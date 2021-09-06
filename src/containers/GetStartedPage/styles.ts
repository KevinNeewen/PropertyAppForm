import { makeStyles, createStyles, Theme } from '@material-ui/core';

//TODO: Need to move these colours to theme palette
const styles = makeStyles((theme: Theme) =>
    createStyles({
        getStartedButton: {
            backgroundColor: theme.palette.primary.main,
            color: '#fff',
        },
        page: {
            backgroundSize: 'cover',
            height: '100%',
        },
        toolBar: {
            margin: 'auto',
            color: '#fff',
            backgroundColor: theme.palette.primary.main,
        },
        introductionContainer: {
            marginLeft: '13rem',
            marginTop: '12rem',
            width: 'auto',
        },
        header: {
            fontSize: '6rem',
        },
        blueWaveSvg: {
            position: 'fixed',
            right: 0,
            top: 0,
            zIndex: -1,
        },
    }),
);

export default styles;
