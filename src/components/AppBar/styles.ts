import { createStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const styles = makeStyles(() =>
    createStyles({
        root: {},
        toolbar: {},
        spacing: {
            minHeight: '64px',
            width: '100%',
        },
        appBar: {},
        toolBar: {},
    }),
);

export default styles;
