import { createStyles, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const styles = makeStyles((theme: Theme) =>
    createStyles({
        root: {},
        toolbar: {},
        spacing: {
            minHeight: '5.3rem',
            width: '100%',
        },
        appBar: {},
        toolBar: {},
    }),
);

export default styles;
