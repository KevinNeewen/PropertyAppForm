import { makeStyles, createStyles, Theme } from '@material-ui/core';
import { convertToObject } from 'typescript';

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
    }),
);

export default styles;
