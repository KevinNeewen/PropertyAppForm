import { createStyles, Theme } from '@material-ui/core';
import { Button } from './index';

const styles = (theme: Theme): any =>
    createStyles({
        button: (props: Button) => ({
            padding: '.67rem 2rem',
            borderRadius: '.3rem',
            height: '3.6rem',
            fontSize: '1.4rem',
            textTransform: 'capitalize',
            backgroundColor: props.invisible ? 'transparent' : theme.palette.primary.main,
            color: props.invisible ? `${theme.palette.primary.main}` : '#fff',
            border: props.invisible ? `1px solid ${theme.palette.primary.main}` : 'none',
            blend: 'passThrough',
        }),
    });

export default styles;
