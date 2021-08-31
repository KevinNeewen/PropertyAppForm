import { createStyles, Theme } from '@material-ui/core';
import { Button } from './index';

const styles = (theme: Theme): any =>
    createStyles({
        button: (props: Button) => ({
            padding: '.42rem 2rem',
            borderRadius: '8.3rem',
            height: '4.4rem',
            fontSize: '1.4rem',
            textTransform: 'capitalize',
            backgroundColor: props.invisible ? 'transparent' : theme.palette.primary.main,
            color: props.invisible ? '#000' : '#fff',
        }),
    });

export default styles;
