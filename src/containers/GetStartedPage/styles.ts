import { makeStyles, createStyles, Theme, responsiveFontSizes } from '@material-ui/core';
import { convertToObject } from 'typescript';

//TODO: Need to move these colours to theme palette
const styles = makeStyles((theme: Theme) =>
    createStyles({
        getStartedButton: {
            backgroundColor: theme.palette.primary.main,
            color: '#fff',
            padding: '.42rem 2rem',
            borderRadius: '8.3rem',
            height: '4.4rem',
            fontSize: '1.4rem',
            textTransform: 'capitalize',
        },
        loginButton: {
            padding: '.42rem 2rem',
            borderRadius: '8.3rem',
            height: '4.4rem',
            fontSize: '1.4rem',
            textTransform: 'capitalize',
        },
        page: {
            backgroundSize: 'cover',
            height: '100%',
            backgroundColor: '#F5F6FA',
        },
        toolBar: {
            margin: 'auto',
            color: '#fff',
            backgroundColor: theme.palette.primary.main,
        },
        appBar: {
            backgroundColor: '#fff',
        },
        introductionContainer: {
            marginLeft: '13rem',
            marginTop: '12rem',
            width: 'auto',
        },
        header1: {
            fontSize: '6rem',
        },
        header4: {
            fontSize: '2.2rem',
        },
    }),
);

export default styles;
