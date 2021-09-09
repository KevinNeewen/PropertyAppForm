import React from 'react';
import { TextField, withStyles, WithStyles } from '@material-ui/core';
import styles from './styles';

interface MyProps extends WithStyles<typeof styles> {
    id: string;
    label: string;
    value: any;
    handleChange: (event: React.ChangeEvent<{ name?: string; value: unknown }>) => void;
    variant?: 'filled' | 'outlined' | 'standard';
    focused?: boolean;
    required?: boolean;
    fullWidth?: boolean;
}

const InputField = (props: MyProps) => {
    const {
        //
        classes,
        id,
        label,
        handleChange,
        value,
        fullWidth,
    } = props;

    return (
        <TextField //
            id={id}
            label={label}
            name={id}
            onChange={handleChange}
            value={value}
            fullWidth={fullWidth}
        />
    );
};
export default withStyles(styles)(InputField);
