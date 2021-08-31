import { Theme } from '@material-ui/core';
import { createStyles } from '@material-ui/styles';
import { callbackify } from 'util';

const styles = (theme: Theme): any =>
    createStyles({
        page: {
            position: 'absolute',
        },
        toolBar: {},
        appBar: {
            backgroundColor: '#fff',
        },
    });

export default styles;
