import { createStyles } from '@material-ui/styles';

const styles = (): any =>
    createStyles({
        root: {},
        header: {
            fontWeight: 700,
            display: 'inline-block',
            fontSize: '1.33rem',
        },
        listItem: {
            paddingLeft: 0,
            fontSize: '1.08rem',
            fontWeight: 400,
        },
    });

export default styles;
