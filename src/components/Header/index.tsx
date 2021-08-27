import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles, WithStyles } from '@material-ui/styles';
import styles from './styles';

interface MyProps extends WithStyles<typeof styles> {
    variant: 'h1' | 'h2' | 'h3' | 'h4';
    children: string;
    gutterBottom?: boolean;
}

const Header = (props: MyProps) => {
    const { variant, classes, children } = props;

    return (
        <Typography //
            gutterBottom
            variant={variant}
            className={classes.header}
        >
            {children}
        </Typography>
    );
};

export default withStyles(styles)(Header);
