import React from 'react';
import { NavLink as ReactNavLink } from 'react-router-dom';
import styles from './styles';
import { withStyles, WithStyles } from '@material-ui/styles';

export interface MyProps extends WithStyles<typeof styles> {
    children: React.ReactNode;
    invisible?: boolean;
    to: string;
}

const NavLink = (props: MyProps) => {
    const { children, classes, to } = props;

    return (
        <ReactNavLink //
            className={classes.navLink}
            to={to}
        >
            {children}
        </ReactNavLink>
    );
};

export default withStyles(styles)(NavLink);
