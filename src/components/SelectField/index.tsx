import React from 'react';
import { MenuItem, TextField, withStyles, WithStyles } from '@material-ui/core';
import styles from './styles';
import { SelectFieldOption } from './types';

interface MyProps extends WithStyles<typeof styles> {
    id: string;
    label: string;
    value: any;
    handleChange: (event: React.ChangeEvent<SelectFieldOption>) => void;
    variant?: 'filled' | 'outlined' | 'standard';
    focused?: boolean;
    required?: boolean;
    options: SelectFieldOption[];
    fullWidth?: boolean;
}

const SelectField = (props: MyProps) => {
    const {
        //
        id,
        label,
        handleChange,
        value,
        options,
        fullWidth,
    } = props;

    return (
        <TextField //
            id={id}
            select
            label={label}
            name={id}
            onChange={handleChange}
            value={value}
            fullWidth={fullWidth}
        >
            {options.map((o) => (
                <MenuItem key={o.value} value={o.value}>
                    {o.name ?? o.value}
                </MenuItem>
            ))}
        </TextField>
    );
};
export default withStyles(styles)(SelectField);
