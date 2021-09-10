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
    error?: {
        message: string;
    };
}

const InputField = (props: MyProps) => {
    const {
        //
        id,
        label,
        handleChange,
        value,
        fullWidth,
        error,
    } = props;

    return (
        <TextField //
            id={id}
            label={label}
            name={id}
            onChange={handleChange}
            value={value}
            fullWidth={fullWidth}
            error={error != null}
            helperText={error != null ? error.message : null}
        />
    );
};
export default withStyles(styles)(InputField);
