import { Theme } from '@material-ui/core';
import { createStyles } from '@material-ui/styles';

const styles = (theme: Theme) =>
    createStyles({
        form: {
            height: '50rem',
            width: '40rem',
            border: '2px solid black',
        },
    });

export default styles;
