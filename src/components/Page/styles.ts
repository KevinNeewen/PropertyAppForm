import { Theme } from '@material-ui/core';
import { createStyles } from '@material-ui/styles';

const styles = (theme: Theme): any =>
    createStyles({
        page: {},
        toolBar: {},
        appBar: {
            backgroundColor: '#fff',
        },
    });

export default styles;
