import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import styles from './styles';

interface MyProps extends WithStyles<typeof styles> {}

const InputTextField = (props: MyProps) => {
    const {} = props;

    return <></>;
};
export default withStyles(styles)(InputTextField);
