import React from 'react';
import { Button as MuiButton } from '@material-ui/core';
import styles from './styles';
import { withStyles, WithStyles } from '@material-ui/styles';

export interface MyProps extends WithStyles<typeof styles> {
    children: React.ReactNode;
    invisible?: boolean;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
}

const Button = (props: MyProps) => {
    const { children, classes, onClick, disabled } = props;

    return (
        <MuiButton //
            className={classes.button}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </MuiButton>
    );
};

export default withStyles(styles)(Button);
