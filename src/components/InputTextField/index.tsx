import React from 'react';
import { TextField, withStyles, WithStyles } from '@material-ui/core';
import styles from './styles';

interface MyProps extends WithStyles<typeof styles> {
    id: string;
    label: string;
    value: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    children: React.ReactNode;
    placeholder: string;
}

const SelectField = (props: MyProps) => {
    const {
        //
        id,
        label,
        handleChange,
        value,
        children,
        placeholder,
    } = props;

    return (
        <TextField //
            id={id}
            select
            placeholder={placeholder}
            value={value}
            label={label}
            onChange={handleChange}
        >
            {children}
        </TextField>
    );
};
export default withStyles(styles)(SelectField);
