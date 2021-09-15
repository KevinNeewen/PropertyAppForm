import React from 'react';
import { Button as MuiButton } from '@material-ui/core';
import styles from './styles';
import { withStyles, WithStyles } from '@material-ui/styles';

export interface Button extends WithStyles<typeof styles> {
    children: React.ReactNode;
    invisible?: boolean;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    hasBorder?: boolean;
}

const Button = (props: Button) => {
    const { children, classes, onClick, disabled } = props;

    return (
        <MuiButton //
            classes={{ root: classes.root }}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </MuiButton>
    );
};

export default withStyles(styles)(Button);
