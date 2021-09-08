import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, withStyles, WithStyles } from '@material-ui/core';
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
    defaultValue: any;
    options: SelectFieldOption[];
    fullWidth?: boolean;
}

const SelectField = (props: MyProps) => {
    const {
        //
        classes,
        id,
        label,
        handleChange,
        value,
        required,
        variant,
        focused,
        defaultValue,
        options,
        fullWidth,
    } = props;

    return (
        <FormControl //
            focused={focused}
            variant={variant}
            required={required}
            fullWidth={fullWidth}
            classes={{ root: classes.root }}
        >
            <InputLabel htmlFor={id}>{label}</InputLabel>
            <Select //
                id={id}
                onChange={handleChange}
                value={value}
                defaultValue={defaultValue}
            >
                {options.map((o) => (
                    <MenuItem key={o.value} value={o.value}>
                        {o.value ?? o.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
export default withStyles(styles)(SelectField);
