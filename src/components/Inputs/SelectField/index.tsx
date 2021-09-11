import React from 'react';
import { MenuItem, TextField, withStyles, WithStyles } from '@material-ui/core';
import styles from './styles';
import { SelectFieldOption } from './types';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
        classes,
        id,
        label,
        handleChange,
        value,
        options,
        fullWidth,
    } = props;

    return (
        <TextField //
            classes={{ root: classes.root }}
            id={id}
            select
            label={label}
            name={id}
            onChange={handleChange}
            value={value}
            fullWidth={fullWidth}
            variant="outlined"
            SelectProps={{ classes: { icon: classes.icon }, IconComponent: ExpandMoreIcon }}
            InputLabelProps={{ shrink: false, disableAnimation: true }}
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
