import { Theme } from '@material-ui/core';
import { createStyles } from '@material-ui/styles';
import { callbackify } from 'util';

const styles = (theme: Theme): any =>
    createStyles({
        page: {
            height: '98.5%',
        },
        toolBar: {},
        appBar: {
            backgroundColor: '#fff',
        },
    });

export default styles;
