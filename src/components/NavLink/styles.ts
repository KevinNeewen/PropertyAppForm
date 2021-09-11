import { createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import { MyProps } from './index';

const styles = (theme: Theme): any =>
    createStyles({
        root: (props: MyProps) => ({
            padding: '1.2rem 2rem',
            borderRadius: '8.3rem',
            height: '4.4rem',
            fontSize: '1.4rem',
            textTransform: 'capitalize',
            backgroundColor: props.invisible ? 'transparent' : theme.palette.primary.main,
            color: props.invisible ? '#000' : '#fff',
            textDecoration: 'none',
        }),
    });

export default styles;
