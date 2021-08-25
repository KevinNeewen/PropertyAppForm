import { createStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const styles = makeStyles(() =>
    createStyles({
        spacing: {
            minHeight: '64px',
            width: '100%',
        },
    }),
);

export default styles;
