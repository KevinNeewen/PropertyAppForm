import { makeStyles, createStyles, Theme } from '@material-ui/core';
import { convertToObject } from 'typescript';

//TODO: Need to move these colours to theme palette
const styles = makeStyles((theme: Theme) =>
    createStyles({
        getStartedButton: {
            backgroundColor: theme.palette.primary.main,
            color: '#fff',
        },
        screen: {
            backgroundSize: 'cover',
        },
        page: {
            backgroundSize: 'cover',
            height: '100%',
            backgroundColor: '#E5E5E5',
        },
        toolBar: {
            margin: 'auto',
            color: '#000',
        },
        appBar: {
            backgroundColor: '#fff',
            color: '#3A57E8',
        },
    }),
);

export default styles;
